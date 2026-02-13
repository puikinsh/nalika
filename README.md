# Nalika — Bootstrap 5 Admin Dashboard

A dark-themed Bootstrap admin dashboard template, originally created by [Colorlib](https://colorlib.com). Fully modernized: **Bootstrap 5.3.8**, **vanilla JavaScript** (zero jQuery), and all dependencies served via CDN.

![Nalika admin dashboard template preview](https://colorlib.com/wp/wp-content/uploads/sites/2/nalika-simple-free-bootstrap-admin-dashboard.jpg)

## Quick Start

No build step required. Open any HTML file directly in a browser:

```bash
# Clone and open
git clone https://github.com/nicdev/nalika.git
cd nalika
open nalika/index.html
```

All assets are relative to the `nalika/` directory.

## Pages (48)

| Category | Pages |
| ---------- | ------- |
| **Dashboards** | Dashboard v.1, Analytics, Projects |
| **E-commerce** | Product List, Product Edit, Product Detail, Product Cart, Product Payment |
| **Charts** | Area, Bar, Line, Rounded, Sparkline, C3, ApexCharts |
| **Forms** | Basic Elements, Advanced Elements (Tom Select, noUiSlider, Pickr, native date/time pickers), Password Meter |
| **Tables** | Static Table, Data Table |
| **UI Components** | Accordions, Alerts, Buttons, Modals, Tabs, Notifications, Widgets |
| **Apps** | Mailbox, Mailbox Compose, Mailbox View, File Manager, Code Editor, WYSIWYG Editor, PDF Viewer, Calendar, Kanban Board, Activity Timeline, Blog, Blog Details, Image Cropper, Dual List Box, Multi Upload |
| **Auth** | Login, Register, Password Recovery, Lock Screen |
| **Error** | 404, 500 |

## Technology Stack

All libraries loaded via jsDelivr CDN — no local vendor files, no `node_modules`.

| Library | Version | Purpose |
| --------- | --------- | --------- |
| Bootstrap | 5.3.8 | CSS framework + JS bundle (includes Popper) |
| Bootstrap Icons | 1.13.1 | Icon system |
| AOS | 2.3.4 | Scroll animations |
| SimpleBar | 6.2.7 | Custom scrollbars |
| Swiper | 12.0.0 | Carousel |
| ApexCharts | 5.3.6 | Dashboard charts |
| Chart.js | 4.5.0 | Additional charts |
| FullCalendar | 6.1.20 | Calendar |
| Tom Select | 2.4.6 | Searchable dropdowns |
| Quill | 2.0.3 | WYSIWYG editor |
| Dropzone | 5.9.3 | File uploads |
| Simple-DataTables | 10.1.0 | Data tables |
| CodeMirror | 5.65.18 | Code editor |
| Cropper.js | 2.1.0 | Image cropping |
| noUiSlider | 15.8.1 | Range sliders |
| Pickr | 1.9.1 | Color picker |
| SortableJS | 1.15.6 | Drag & drop (Kanban) |
| SweetAlert2 | 11.x | Notifications |

Native HTML5 `<input type="date|time|datetime-local|month|week">` is used for date/time pickers (no external library needed).

## Project Structure

```text
nalika/
  *.html              48 pages
  style.css           Main theme (dark) + Bootstrap 5 overrides
  css/main.css        Base/utility styles
  css/responsive.css  Breakpoints (768px, 992px, 1169px)
  js/main.js          Central vanilla JS (~746 lines, modular)
  fonts/              Custom nalika icon font (local)
  img/                SVG placeholders organized by feature
  pdf/                Sample PDF for viewer page
documentation/
  index.html          Template documentation (standalone)
```

## Architecture

- **No jQuery** — all interactivity is vanilla JS in `js/main.js`
- **CDN-only dependencies** — only local files are `js/main.js`, `style.css`, `css/main.css`, `css/responsive.css`, and `css/nalika-icon.css`
- **Dark theme** — background `#152036` (main), `#1b2a47` (sidebar), with CSS custom properties (`--nk-*`)
- **Collapsible sidebar** — 205px expanded, 80px collapsed; toggle adds `.mini-navbar` to `body`
- **Bootstrap 5 data attributes** — `data-bs-toggle`, `data-bs-target` throughout

## Original Template

- **Author:** [Colorlib](https://colorlib.com)
- **Original version:** Bootstrap 3.3.6 + jQuery
- **Demo:** [colorlib.com/polygon/nalika](https://colorlib.com/polygon/nalika/index.html)

## License

MIT License. You may use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies. Attribution to [Colorlib](https://colorlib.com) as the original author is required.
