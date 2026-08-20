---
layout: page
title: TEM-Scientist
description: Verified experimental protocols for agentic electron microscopy
img: assets/img/projects/tem-scientist.png
importance: 1
category: software
redirect: /assets/pages/tem-scientist.html
related_publications: false
---

**TEM-Scientist** is a compile–rehearse–execute–reflect architecture for autonomous transmission electron microscopy. Rather than placing a language model in the millisecond-scale instrument control loop — where its stochasticity, latency, and silent failures compromise experimental safety — TEM-Scientist moves the model *above* the loop: it compiles a natural-language experimental goal into a typed, verifiable protocol, rehearses that protocol against a physics-aware simulator under injected faults, and then executes it with a deterministic runtime that requires no further model involvement.

The architecture separates deliberation from protection, and detection from correction. The compiled protocol is a finite state machine over a closed set of instrument primitives, carrying declared dose and motion invariants and a table of edge-triggered reflexes; a two-layer verification gate (static lints plus behavioral rehearsal) admits only protocols that satisfy the frozen objective contract; and a runtime with frame-rate reflexes responds to safety-critical events five orders of magnitude faster than a per-step model round-trip. The compiled protocol is itself the reviewable artifact — reproducible, citable, and diffable.

**Status:** Active development · Preprint 2026

**Role:** First author and lead developer, in collaboration with Yuqing Huang (ANL/CNM), Rama Vasudevan (ORNL/CNMS), Yuzi Liu (ANL/CNM), and Subramanian Sankaranarayanan (UIC/ANL).

### Key contributions

- **Compile–rehearse–execute architecture** — separates model deliberation from deterministic execution
- **Objective contract** — an immutable, verifiable specification of what the experiment must achieve
- **TWINTEM behavioral simulator** — physics-aware digital twin with Poisson-limited imaging, drift, defocus, cumulative beam damage, and fault injection
- **Frame-rate reflexes** — protective response with median 6.6 µs latency, against 2.1 s for per-step LLM control
- **114-task benchmark catalog** with 25-task executable subset and a held-out locked evaluation suite
- **Failure taxonomy and repair loop** — legible, layer-localized failure classes with static and behavioral diagnostics

### Links

- GitHub: [sukritimanna/TEM-Scientist](https://github.com/sukritimanna/TEM-Scientist)

### Citation

{% raw %}
```bibtex
@article{manna2026temscientist,
  title   = {Verified Experimental Protocols for Agentic Electron Microscopy},
  author  = {Manna, Sukriti and Huang, Yuqing and Vasudevan, Rama and
             Liu, Yuzi and Sankaranarayanan, Subramanian K. R. S.},
  journal = {arXiv preprint},
  year    = {2026},
  note    = {Under review}
}
```
{% endraw %}
