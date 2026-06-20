---
sidebar_position: 4
---

# Sims (load & stress testing)

Right-click a folder → **Albert: New Load Simulation** to create a `.abl`, then click **+ Add flow**
for each `.abf` you want to drive. Each flow entry is fully independent: set its own **start at**
delay (seconds into the run before it kicks off, mapped to k6's scenario `startTime`), **target
TPS**, **ramp up**, **hold**, and **ramp down** durations — setting ramp up/down to 0 gives a flat
constant load for the hold duration. Duration fields accept `30s`, `10m`, `1h`, or a compound
`1h 12m 30s`; a bare number is treated as seconds, and values display the same way. Each flow
becomes its own k6 arrival-rate scenario with its own schedule and pattern, so a single sim can
stagger flows to start at different times and drive them at independent throughputs *and*
independent shapes/durations simultaneously.

Click **▶ Run sim**; results update live during the run and stay after it finishes, with a switcher
between three views — all rendered locally, no external service required:

- **XY chart** — throughput (req/s), p95 latency, and error-rate plotted over time per flow, plus
  achieved-TPS and p95 bar charts.
- **Sankey** — load distribution as a flow diagram: total load → each flow (width ∝ request count) →
  Success / Error outcome, so you can see at a glance where traffic and failures concentrate.
- **Table** — per-flow summary (achieved vs. target TPS, request count, error %, p50/p95/p99, checks).

Before you run anything, the same view switcher also shows a **Planned load (preview)** panel
computed from each flow's own profile + target TPS — the **XY** view plots the arrival-rate curve
each flow will follow over time (ramp/hold/spike shape), the **Sankey** shows how the planned
request volume splits across flows, and the **Table** lists planned requests per flow. The preview
is derived from the same load model the k6 scenarios are generated from, so what you preview is
what runs.

## New Relic export (optional)

Tick "Send results to New Relic", choose the region (US/EU), and set your Metric API key (the
in-editor button, or **Albert: Set New Relic API Key** — stored in VS Code SecretStorage, never in
the `.abl` file). After each run Albert POSTs per-flow metrics (achieved TPS, error rate, latency
percentiles, request counts, check pass-rate) to New Relic's Metric API. Runs work fine without a
key — the export is simply skipped.
