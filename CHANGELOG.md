# Changelog

All notable changes to the Nalika admin dashboard template.

## [2.0.0] - 2026-02-13

Complete modernization of the original Colorlib template. Every HTML page, stylesheet, and script has been rewritten or replaced.

### Framework Upgrade

- Upgraded Bootstrap 3.3.6 to **5.3.8** (CSS + JS bundle via CDN)
- Migrated all Bootstrap 3 markup to Bootstrap 5 equivalents:
  - `col-xs-*` to `col-*`, panels to cards, `pull-left/right` to `float-start/end`
  - `data-toggle` to `data-bs-toggle`, `data-target` to `data-bs-target`
  - `btn-default` to `btn-secondary`, `btn-block` to `w-100`, `form-group` to `mb-3`
  - `help-block` to `form-text`, `control-label` to `form-label`
  - `ml-*/mr-*` to `ms-*/me-*`, `text-left/right` to `text-start/end`

### jQuery Removal

- Removed jQuery entirely — all 47 pages are now **zero-jQuery**
- Rewrote all interactivity as vanilla JavaScript in `js/main.js` (~746 lines, modular)
- Replaced 25+ jQuery plugins with modern alternatives (see Plugin Replacements below)

### Plugin Replacements

| Removed | Replaced With | Notes |
| --------- | --------- | --------- |
| jQuery + jQuery UI | Vanilla JS | `querySelector`, `classList`, `addEventListener` |
| Bootstrap 3 JS | Bootstrap 5.3.8 bundle | Includes Popper.js |
| Font Awesome 4 | Bootstrap Icons 1.13.1 | `fa fa-*` to `bi bi-*` |
| Glyphicons | Bootstrap Icons 1.13.1 | `glyphicon glyphicon-*` to `bi bi-*` |
| WOW.js + animate.css | AOS 2.3.4 | Scroll-triggered animations |
| mCustomScrollbar | SimpleBar 6.2.7 | Custom scrollbars |
| Owl Carousel v1 | Swiper 12.0.0 | Product carousel |
| Morris.js + Flot + Sparkline | ApexCharts 5.3.6 | Dashboard charts |
| Chart.js 2.6.0 | Chart.js 4.5.0 | In-place upgrade |
| FullCalendar (jQuery) | FullCalendar 6.1.20 | No jQuery dependency |
| Select2 / Chosen | Tom Select 2.4.6 | Searchable dropdowns |
| Summernote | Quill 2.0.3 | WYSIWYG editor |
| DataTables (jQuery) | Simple-DataTables 10.1.0 | No jQuery dependency |
| Bootstrap Datepicker / Flatpickr | Native HTML5 inputs | `type="date"`, `type="time"`, etc. |
| jQuery UI Slider / Ion Range | noUiSlider 15.8.1 | Range sliders |
| Spectrum colorpicker | Pickr 1.9.1 | Color picker |
| Lobibox | SweetAlert2 11.x | Toast notifications |
| metisMenu | Custom vanilla JS | Sidebar accordion nav |
| meanMenu | Custom vanilla JS | Mobile menu |
| normalize.css | Bootstrap 5 Reboot | Included in Bootstrap |

### Icon System

- Replaced Font Awesome 4 (`fa fa-*`) with Bootstrap Icons 1.13.1 (`bi bi-*`) across all 47 pages
- Replaced Glyphicons (`glyphicon glyphicon-*`) with Bootstrap Icons
- Retained custom `nalika-icon` font for template-specific icons

### New Pages

- **Kanban Board** (`kanban-board.html`) — drag-and-drop task board using SortableJS
- **Activity Timeline** (`activity-timeline.html`) — vertical activity feed
- **Calendar** (`calendar.html`) — standalone FullCalendar page (moved out of main dashboard)

### Removed Pages

- `data-maps.html` — jVectorMap dependency (jQuery-only, no viable replacement)
- `google-map.html` — requires API key, not useful as template demo
- `peity.html` — Peity charts (jQuery-only, functionality covered by ApexCharts)
- `preloader.html` — CSS preloader demo (obsolete pattern)
- `tree-view.html` — jsTree demo (jQuery-only)
- `x-editable.html` — X-Editable plugin (jQuery-only)

### Dark Theme

- Added CSS custom properties (`--nk-*`) for consistent theming
- Added `color-scheme: dark` to `.form-control` for native dark pickers
- All CDN-loaded plugins styled with dark theme overrides in `style.css`
- Sidebar avatar scales proportionally on collapse (40x40px with `object-fit: cover`)

### Images

- Replaced raster placeholder images (JPG/PNG) with lightweight SVG equivalents
- Removed all `Thumbs.db` files from tracking

### CSS Cleanup

- Deleted 40+ local vendor CSS files (all dependencies now CDN-only)
- Removed `animate.css`, `normalize.css`, `font-awesome.min.css`, `bootstrap.min.css` (local copies)
- Removed plugin-specific CSS: datepicker, summernote, chosen, select2, ionRangeSlider, metisMenu, meanmenu, owl carousel, preloader, and more
- Consolidated theme overrides into `style.css` with Bootstrap 5 compatibility section

### JavaScript

- Single entry point: `js/main.js` with modular `init*()` functions
- Guard clauses for missing elements on every page
- IntersectionObserver for counter animations (replaces CounterUp jQuery plugin)
- AOS initialized outside `DOMContentLoaded` (scripts at body bottom)

### Documentation

- Rewrote `documentation/index.html` — standalone, self-contained, no external JS dependencies
- Updated plugin table, credits, and page descriptions to reflect new stack

### Build & Deployment

- All dependencies via jsDelivr CDN — no `npm install`, no build step
- Added `.gitignore` for `.sass-cache/`, `node_modules/`, `.DS_Store`, `*.map`

## [1.0.0] - 2017

### Initial Release

- Original Colorlib template
- Bootstrap 3.3.6 + jQuery
- 51 HTML pages
- Font Awesome 4 + Glyphicons
- 25+ jQuery plugins
