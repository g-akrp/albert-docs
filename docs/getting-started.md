---
sidebar_position: 2
---

# Getting Started

1. Right-click a folder → **Albert: New Environment Config**, add variables (e.g. `baseUrl`).
2. Command Palette → **Albert: Select Active Environment** and pick that file. The status bar shows
   `Env: <name>` and is clickable to switch.
3. Right-click a folder → **Albert: New API Request File**. This opens a custom editor with three
   tab groups:
   - **Compose Request** — Headers, Query, Body (Monaco editor, JSON Prettify + format-on-save),
     Auth, and **Preview** (the request with `{{variables}}` resolved, without sending — with a
     **Copy as cURL** button).
   - **Validate Response** — Expect (no-code assertions on status/header/body), Schema (AJV JSON
     Schema against the response body), Scripts (pre-request/post-response JS with
     `request`/`response`/`environment` globals + Jest-style `expect()`), Sample (a pasted sample
     response so you can write and run tests with **Run against sample** before a live endpoint
     exists), Response (the live result: Body with **Copy body**, Headers, Tests, Request
     sub-tabs), and Allure (report metadata).
   - **History** — every live send this session (request + response + test results), expandable,
     not persisted to disk. A **Save result as Markdown** action turns the latest result into a
     shareable `.md` snippet.
   Tabs with a validation problem (bad JSON, invalid schema, broken regex) show a ⚠ warning badge
   so you don't have to open every tab to find what's wrong.
4. Click **Send**. While a request is in flight the button becomes **Cancel** (flows and sims have
   the same Stop/Cancel control while running).

Next: chain multiple requests together in a [flow](./flows.md), or drive load with a [sim](./sims.md).
