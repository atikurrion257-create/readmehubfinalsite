#!/usr/bin/env python3
"""Local preview server for the ReadMeHub static site.

Serves the repository root (same layout GitHub Pages publishes) but refuses
paths that could expose repo internals (e.g. .git) — unlike a bare
`python -m http.server`, which would serve them.

Usage:  python3 serve_site.py [port]     # default: 4173
"""
import posixpath
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote


class SiteHandler(SimpleHTTPRequestHandler):
    def _blocked(self):
        # Dotfiles/dirs (.git, .github, .nojekyll, …) at any depth are off-limits.
        clean = unquote(self.path.split("?", 1)[0].split("#", 1)[0])
        return any(part.startswith(".") for part in clean.split("/"))

    def do_GET(self):
        if self._blocked():
            self.send_error(404, "Not found")
            return
        super().do_GET()

    def do_HEAD(self):
        if self._blocked():
            self.send_error(404, "Not found")
            return
        super().do_HEAD()

    def send_error(self, code, message=None, explain=None):
        if code == 404:
            try:
                with open("404.html", "rb") as f:
                    body = f.read()
                self.send_response(404)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
                return
            except OSError:
                pass
        super().send_error(code, message, explain)

    def log_message(self, fmt, *args):
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
    handler = partial(SiteHandler, directory=posixpath.dirname(posixpath.abspath(__file__)) or ".")
    with ThreadingHTTPServer(("0.0.0.0", port), handler) as httpd:
        print(f"Serving ReadMeHub site on http://0.0.0.0:{port} (dotfiles blocked)")
        httpd.serve_forever()
