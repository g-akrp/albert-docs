---
sidebar_position: 3
---

# Flows

Right-click a folder → **Albert: New API Flow** to create a `.abf`. Add steps, pick a `.abrq`
request for each, optionally toggle **validate** (runs that request's Expect assertions + schema as
k6 checks) and add **captures** (pull a value from a step's response body/header/status into a
flow-scoped `{{variable}}` usable by later steps). Click **▶ Run flow** to execute the whole flow
once via k6 (1 VU / 1 iteration); per-step status, timing, validation checks, and a response-body
preview stream into the results panel as the run progresses. Step result cards can expand to show
request headers/auth/body and response headers/body, and surface that step's Allure metadata
(epic/feature/story/suite/severity/owner/tags/description) as a badge with a tooltip.

Each run is added to a **Run history** list at the bottom of the flow editor (most recent first,
kept per editor session, outlined as bordered cards). Expand any entry to see that run's per-step
detail. Click **Save history…** to write the runs to a `*.abh` file; opening that file uses a
read-only **history viewer** that renders the same per-step results — handy for archiving a run or
sharing it alongside the repo.

k6 is the execution engine for flows (and [sims](./sims.md)). On first run Albert downloads and
caches a pinned k6 release into its global storage automatically — no manual install. To use your
own k6 binary instead, set the **`albert.k6Path`** setting to its path.

## Allure reporting

Albert can report **flow** runs to an [Allure report server](https://github.com/fescobar/allure-docker-service)
(it does not report individual requests sent via the Send button, and the CLI does not report to
Allure). Turn it on in settings:

| Setting | Purpose |
|---|---|
| `albert.allure.enabled` | Master on/off switch. |
| `albert.allure.serverUrl` | e.g. `http://localhost:5050`. |
| `albert.allure.projectId` | Project ID on the server (default `default`). |
| `albert.allure.username` / `albert.allure.password` | Optional Basic Auth. |

The Flow editor's header shows a live **Allure: Enabled/Disabled** status pill so you always know
whether a run will be reported, without checking settings — it updates immediately if you flip the
setting while the editor is open.

Each `.abrq` request has an **Allure** tab to set its report metadata: description, severity
(blocker/critical/normal/minor/trivial), an epic/feature/story picker (pick a `.abepic` file, then a
`.abfeat` it lists, then one of that feature's stories), suite, owner, and tags. When a flow runs,
Albert aggregates each step's metadata, attaches that step's request/response as result
attachments and its checks as nested steps, and POSTs the run to the Allure server's
`send-results` endpoint — no extra setup beyond pointing the settings at a running server.
