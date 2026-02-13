# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nalika is a Colorlib dark-design Bootstrap admin dashboard template (MIT license). It contains 48 HTML pages covering dashboards, e-commerce, forms, charts, tables, mailbox, auth pages, and error pages. Migrated to Bootstrap 5.3.8 + vanilla JS (no jQuery).

## Repository Structure

```
nalika/                    # All template files live here (not repo root)
├── *.html (48 pages)      # Dashboard pages, forms, charts, UI components
├── css/                   # Legacy CSS files (Bootstrap, plugins, theme)
├── js/main.js             # Central vanilla JS init (~440 lines, modular)
├── js/                    # Legacy JS files (kept for reference, no longer loaded)
├── fonts/                 # Bootstrap Icons (CDN), custom nalika icon font (local)
├── img/                   # Images by feature (blog, products, etc.)
├── style.css              # Main theme stylesheet (dark theme + BS5 compat)
└── pdf/
documentation/             # Colorlib's original template docs
```

All asset paths in HTML are relative to `nalika/` — open HTML files from that directory.

## Current Technology Stack (2026)

All libraries loaded via jsDelivr CDN — no local vendor files.

|Library|Version|Purpose|
|---|---|---|
|Bootstrap|5.3.8|CSS framework + JS bundle (includes Popper)|
|Bootstrap Icons|1.13.1|Icon system (replaced Font Awesome + Glyphicons)|
|AOS|2.3.4|Scroll animations (replaced WOW.js + animate.css)|
|SimpleBar|6.2.7|Custom scrollbars (replaced mCustomScrollbar)|
|Swiper|12.0.0|Carousel (replaced Owl Carousel v1)|
|ApexCharts|5.3.6|Charts (replaced Morris.js, Flot, Sparkline)|
|Chart.js|4.5.0|Charts (upgraded from 2.6.0)|
|FullCalendar|6.1.20|Calendar (upgraded, no jQuery needed)|
|Tom Select|2.4.6|Dropdowns (replaced Select2/Chosen)|
|Quill|2.0.3|WYSIWYG editor (replaced Summernote, zero jQuery dependency)|
|Dropzone|5.9.3|File uploads|
|Simple-DataTables|10.1.0|Data tables (replaced DataTables, no jQuery)|
|CodeMirror|5.65.18|Code editor|
|Cropper.js|2.1.0|Image cropping|
|jsTree|3.3.17|Tree view|
|noUiSlider|15.8.1|Range sliders (replaced jQuery UI/Ion Range)|
|Pickr|1.9.1|Color picker (replaced Spectrum)|
|SortableJS|1.15.6|Drag & drop|
|SweetAlert2|11.x|Notifications (replaced Lobibox)|

## Architecture Notes

- **No jQuery** — all JavaScript is vanilla JS in `js/main.js`.
- **CDN-only dependencies** — no local vendor JS/CSS loaded (only `js/main.js`, `css/main.css`, `style.css`, `css/responsive.css`, and `css/nalika-icon.css`).
- **Dark theme** uses background `#152036` (main) and `#1b2a47` (sidebar). Bootstrap 5 compatibility overrides are appended to `style.css`.
- **Sidebar** is 205px wide, collapses to 80px. Toggle logic in `js/main.js` adds `.active` to `#sidebar` and `.mini-navbar` to `body`.
- **Common page structure:** left sidebar (`div.left-sidebar-pro > nav#sidebar`) + main content (`div.all-content-wrapper` with header, breadcrumb, content, footer).
- **Bootstrap 5 data attributes** used throughout: `data-bs-toggle`, `data-bs-target`.
- **Icons:** Bootstrap Icons (`bi bi-*`) + custom nalika icon font (`icon nalika-*`).
- **AOS initialization** is called outside `DOMContentLoaded` (scripts are at body bottom).

## Key Files

- `nalika/js/main.js` — Central vanilla JS init (~440 lines). Initializes: Bootstrap tooltips/popovers, sidebar toggle, sidebar nav (replaces metisMenu), mobile menu, sticky header, scroll-to-top, counters (IntersectionObserver), SimpleBar scrollbars, AOS, Swiper carousel, noUiSlider price slider, FullCalendar, ApexCharts dashboard charts.
- `nalika/style.css` — Main theme styles + Bootstrap 5 dark theme compatibility overrides at bottom.
- `nalika/css/responsive.css` — Breakpoints at 768px, 992px, 1169px.
- `nalika/css/main.css` — Base/utility styles.
- `nalika/index.html` — Primary dashboard (ApexCharts, FullCalendar, Swiper carousel).

## Migration Notes

Completed Bootstrap 3.3.6 → 5.3.8 migration:

- `col-xs-*` → `col-*`, panels → cards, `pull-left/right` → `float-start/end`
- `data-toggle` → `data-bs-toggle`, `data-target` → `data-bs-target`
- `btn-default` → `btn-secondary`, `btn-block` → `w-100`, `form-group` → `mb-3`
- `help-block` → `form-text`, `control-label` → `form-label`
- Font Awesome (`fa fa-*`) → Bootstrap Icons (`bi bi-*`)
- Glyphicons (`glyphicon glyphicon-*`) → Bootstrap Icons (`bi bi-*`)
- All 25+ jQuery plugins replaced with modern vanilla JS alternatives
