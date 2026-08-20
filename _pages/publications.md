---
layout: page
permalink: /publications/
title: publications
description: 50 peer-reviewed publications · 1925+ citations · h-index 23 · i10-index 30
nav: true
nav_order: 2
---

<style>
/* ============================================================
   Publications page — descending numbering, year subheaders
   ============================================================
   Each section has its own counter that starts at TOTAL+1 and
   decrements with each entry, so the most recent paper gets the
   highest number and the oldest gets #1 — matches the CV style.

   IF YOU ADD A PAPER, UPDATE THE counter-reset VALUE BELOW
   for the relevant section (set it to total_entries + 1):
     preprints  →  current total 7,  counter-reset = 8
     journals   →  current total 50, counter-reset = 51
     conferences→  current total 4,  counter-reset = 5
     outreach   →  current total 1,  counter-reset = 2
     patents    →  current total 1,  counter-reset = 2
   ============================================================ */

.publications--section { counter-reset: pubcounter; }
.publications--preprints   { counter-reset: pubcounter 8;  }
.publications--journals    { counter-reset: pubcounter 51; }
.publications--conferences { counter-reset: pubcounter 5;  }
.publications--outreach    { counter-reset: pubcounter 2;  }
.publications--patents     { counter-reset: pubcounter 2;  }

.publications--section ol.bibliography {
  list-style: none;
  padding-left: 3em;
}

.publications--section ol.bibliography > li {
  counter-increment: pubcounter -1;
  position: relative;
}

.publications--section ol.bibliography > li::before {
  content: counter(pubcounter) ".";
  position: absolute;
  left: -2.8em;
  top: 0;
  font-weight: 600;
  color: var(--global-theme-color);
  min-width: 2.2em;
  text-align: right;
}

.publications--section h2.year,
.publications--section h2.bibliography {
  margin-top: 1.5rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--global-divider-color);
  color: var(--global-theme-color);
  font-weight: 600;
  font-size: 1.4rem;
}

.publications-section-title {
  margin-top: 2.5rem;
  margin-bottom: 0.8rem;
  font-size: 1.7rem;
  font-weight: 700;
  border-bottom: 2px solid var(--global-theme-color);
  padding-bottom: 0.4rem;
}

.publications-section-title:first-of-type {
  margin-top: 1rem;
}

.publications-intro {
  margin-bottom: 2rem;
  color: var(--global-text-color-light);
}
</style>

<div class="publications-intro">
A complete chronological list of my publications. <strong>My name is bolded</strong> in author lists.
Selected papers are highlighted on the <a href="/">homepage</a>. For metrics and the latest record,
see my <a href="https://scholar.google.com/citations?user=Ag2wffgAAAAJ">Google Scholar profile</a>.
</div>

<h2 class="publications-section-title">Preprints &amp; Under Review</h2>
<div class="publications publications--section publications--preprints">
{% bibliography -q @*[category=preprint] %}
</div>

<h2 class="publications-section-title">Peer-Reviewed Journal Articles</h2>
<div class="publications publications--section publications--journals">
{% bibliography -q @*[category=journal] %}
</div>

<h2 class="publications-section-title">Conference Proceedings</h2>
<div class="publications publications--section publications--conferences">
{% bibliography -q @*[category=conference] %}
</div>

<h2 class="publications-section-title">Education &amp; Outreach</h2>
<div class="publications publications--section publications--outreach">
{% bibliography -q @*[category=outreach] %}
</div>

<h2 class="publications-section-title">Patents</h2>
<div class="publications publications--section publications--patents">
{% bibliography -q @*[category=patent] %}
</div>
