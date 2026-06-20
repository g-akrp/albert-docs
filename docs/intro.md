---
sidebar_position: 1
---

# Introduction

Albert is a VS Code extension for API testing, built around plain-JSON file formats that live in
your repo next to the code they test — no proprietary collection format, no separate server, no
account.

## File types

| Extension | What it is |
|---|---|
| `*.abrq` | One HTTP request — method, endpoint/path, headers, query, body, auth, pre/post-response scripts, declarative assertions, an AJV JSON Schema, a pasted sample response, and Allure report metadata. |
| `*.abenv` | A named set of `{{variables}}` plus per-environment settings (timeout, follow-redirects). |
| `*.abf` | An ordered **flow**: a sequence of steps, each referencing a `.abrq` file, run end-to-end via [k6](https://k6.io/). Each step can replay its request's validations as checks and **capture** values forward into `{{variables}}` for later steps. |
| `*.abl` | A load/stress **simulation**: one or more flows, each at its own target TPS, ramp-up, hold, and ramp-down duration, combined into a single k6 run. Results render live as charts, with an optional New Relic export. |
| `*.abh` | A saved **flow run history** — one or more past flow runs with full per-step detail — opened in a read-only viewer. |
| `*.abepic` | An Allure **epic**: a name plus a list of feature names. Schema-validated JSON text, no custom editor. |
| `*.abfeat` | An Allure **feature**: a name, a path back to its `.abepic`, and a list of story names. Schema-validated JSON text, no custom editor. |

There is no collection file. A "collection" is just a folder of `.abrq` / `.abenv` files — VS Code's
own Explorer is the browser. Every file type is plain JSON, so they diff cleanly in git and stay
readable even outside the extension (open any of them as text and you still get JSON Schema
autocomplete/validation from VS Code's built-in JSON language service, via the editor-title
**Open File as Text** button).

Continue to [Getting Started](./getting-started.md) to create your first request.
