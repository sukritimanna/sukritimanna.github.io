---
layout: page
title: TEM-Scientist
description: Compiled autonomy for transmission electron microscopy
img: assets/img/projects/tem-scientist.png
importance: 2
category: software
redirect: /assets/pages/tem-scientist.html
related_publications: false
---

**TEM-Scientist** is an autonomy stack for transmission electron microscopy in which natural-language experimental goals are *compiled* into typed, statically verified protocols, rehearsed against a physics-aware digital twin, and then executed deterministically on the instrument — with no language model in the loop at run time.

The stack separates the LLM's role (**planning**) from the compiler's role (**deciding**): the model proposes a protocol, but a typed lint gate and a TWIN rehearsal environment must accept it before a single lens current changes. Rejected protocols loop back to the compiler or terminate as refusals with a full paper trail. Ledgers and traces from every run feed a reflect stage that proposes the next goal or a modality escalation.

**Status:** Active development

**Role:** Lead architect and developer

### Key ideas

- **Compile-time verification** — protocols are typed and statically checked before instrument time is spent
- **Physics-aware digital twin** — every protocol is rehearsed against a forward simulator before execution
- **No LLM in the run-time loop** — the model plans; the compiler decides; the instrument executes
- **Modality-aware autonomy** — the compiler stops at the first microscopy modality that can discriminate the hypothesis, minimizing dose and time

### Application scope

Light-element ordering, strain fields, valence and oxidation state, magnetic and polar structure, and short-range disorder — each is legible in some TEM modalities and invisible in others. TEM-Scientist compiles the decision of *which signal carries the answer*, and stops at the modality that can actually discriminate it.
