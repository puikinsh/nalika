# Nalika - Free Bootstrap Admin Dashboard Template

**Nalika** is a dark-themed, fully responsive Bootstrap 5 Admin Dashboard Template. Originally built with Bootstrap 3 and jQuery by [Colorlib](https://colorlib.com), it has been completely modernized to **Bootstrap 5.3.8** with **zero jQuery** — all interactivity is vanilla JavaScript.

Nalika includes 48 ready-to-use pages covering dashboards, e-commerce, charts, forms, tables, mailbox, UI components, and authentication screens. All dependencies are loaded via CDN — no build step, no `node_modules`, no package manager required.

## Live Preview

### Screenshot

![Nalika admin dashboard template preview](https://colorlib.com/wp/wp-content/uploads/sites/2/nalika-simple-free-bootstrap-admin-dashboard.jpg)

### Demo Site: [View Live Demo](https://colorlib.com/polygon/nalika/index.html)

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Pages](#pages-48)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Browser Support](#browser-support)
- [Premium Admin Templates](#premium-admin-templates)
- [More Resources](#more-resources)
- [Authors](#authors)
- [License](#license)

## Features

### Core Features

- **Bootstrap 5.3.8**: Latest Bootstrap CSS framework with JS bundle (includes Popper)
- **Zero jQuery**: All JavaScript is vanilla ES6+ in a single modular file
- **CDN-Only Dependencies**: No local vendor files — all libraries via jsDelivr
- **No Build Step**: Open any HTML file directly in a browser, no compilation needed
- **Dark Theme**: Sleek dark UI with `#152036` background and CSS custom properties (`--nk-*`)
- **Fully Responsive**: Mobile-first design with breakpoints at 768px, 992px, and 1169px
- **Collapsible Sidebar**: 205px expanded, 80px collapsed with smooth transitions

### Dashboard & Data Visualization

- **3 Dashboard Variants**: Main dashboard, analytics, and projects overview
- **ApexCharts**: Modern, interactive charts for dashboards
- **Chart.js 4.5**: Additional chart types (bar, line, area, rounded, sparkline, mixed)
- **FullCalendar 6**: Full-featured event calendar
- **Widgets**: Counters with IntersectionObserver scroll detection

### UI Components

- **Bootstrap Icons 1.13.1**: Complete icon system (replaced Font Awesome + Glyphicons)
- **SweetAlert2**: Beautiful notification dialogs
- **AOS**: Scroll-triggered animations
- **SimpleBar**: Custom scrollbars for sidebar and dropdowns
- **Swiper 12**: Touch-enabled carousel slider

### Forms & Input

- **Tom Select**: Searchable, taggable select dropdowns
- **Quill 2.0**: Modern WYSIWYG rich text editor (zero dependencies)
- **Flatpickr**: Lightweight date/time picker
- **noUiSlider**: Accessible range sliders
- **Pickr**: Color picker
- **Dropzone**: Drag-and-drop file uploads
- **CodeMirror**: In-browser code editor with syntax highlighting
- **Native HTML5 Inputs**: Date, time, datetime-local, month, week pickers

### Data & Layout

- **Simple-DataTables**: Sortable, searchable data tables (no jQuery)
- **Cropper.js**: Image cropping and manipulation
- **SortableJS**: Drag-and-drop for Kanban boards
- **Dual List Box**: Transfer items between lists

## Quick Start

No build step required. Clone and open:

```bash
git clone https://github.com/nicdev/nalika.git
cd nalika
open nalika/index.html
```

All asset paths are relative to the `nalika/` directory — open HTML files from there.

## Pages (48)

| Category | Pages |
| --- | --- |
| **Dashboards** | Main Dashboard, Analytics, Projects |
| **E-commerce** | Product List, Product Edit, Product Detail, Product Cart, Product Payment |
| **Charts** | Bar, Line, Area, Rounded, Sparkline, Mixed (C3), ApexCharts |
| **Forms** | Basic Elements, Advanced Elements (Tom Select, noUiSlider, Pickr, native pickers), Password Meter, Multi Upload, Text Editor (Quill), Dual List Box |
| **Tables** | Static Table, Data Table |
| **UI Components** | Accordions, Alerts, Buttons, Modals, Tabs, Notifications, Widgets |
| **Interface** | Kanban Board, Activity Timeline, Calendar, Code Editor, Image Cropper, PDF Viewer |
| **Mailbox** | Inbox, View Mail, Compose Mail |
| **Miscellaneous** | File Manager, Blog, Blog Details, 404 Page, 500 Page |
| **Auth** | Login, Register, Password Recovery, Lock Screen |

## Technology Stack

All libraries loaded via jsDelivr CDN — no local vendor files, no `node_modules`.

| Library | Version | Purpose |
| --- | --- | --- |
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
| Flatpickr | latest | Date/time picker |
| Dropzone | 5.9.3 | File uploads |
| Simple-DataTables | 10.1.0 | Data tables |
| CodeMirror | 5.65.18 | Code editor |
| Cropper.js | 2.1.0 | Image cropping |
| noUiSlider | 15.8.1 | Range sliders |
| Pickr | 1.9.1 | Color picker |
| SortableJS | 1.15.6 | Drag & drop (Kanban) |
| SweetAlert2 | 11.x | Notifications |

## Project Structure

```text
nalika/
  *.html              48 pages
  style.css           Main theme (dark) + Bootstrap 5 overrides
  css/main.css        Base/utility styles
  css/responsive.css  Breakpoints (768px, 992px, 1169px)
  css/nalika-icon.css Custom icon font definitions
  js/main.js          Central vanilla JS (~440 lines, modular)
  fonts/              Custom nalika icon font (local)
  img/                SVG placeholders organized by feature
  pdf/                Sample PDF for viewer page
documentation/
  index.html          Template documentation (standalone)
```

## Architecture

- **No jQuery** — all interactivity is vanilla JS in `js/main.js`
- **CDN-only dependencies** — only local files are `js/main.js`, `style.css`, `css/main.css`, `css/responsive.css`, and `css/nalika-icon.css`
- **Dark theme** — background `#152036` (main), `#1b2a47` (sidebar/surface), with CSS custom properties (`--nk-bg-body`, `--nk-bg-surface`, `--nk-text-primary`, etc.)
- **Collapsible sidebar** — 205px expanded, 80px collapsed; toggle adds `.mini-navbar` to `body` and `.active` to `#sidebar`
- **Bootstrap 5 data attributes** — `data-bs-toggle`, `data-bs-target` used throughout
- **Modular JS init** — each feature has its own init function with guard clauses: `initSidebar()`, `initMobileMenu()`, `initStickyHeader()`, `initCounters()`, etc.
- **Common page structure** — left sidebar (`div.left-sidebar-pro > nav#sidebar`) + main content (`div.all-content-wrapper` with header, breadcrumb, content, footer)

## Browser Support

Nalika supports all modern browsers:

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90
- Opera >= 76

**Note**: Internet Explorer is not supported.

## Premium Admin Templates

Level up your next project with a premium dashboard. The templates below from [DashboardPack](https://dashboardpack.com/?utm_source=github&utm_medium=readme&utm_campaign=nalika) include dedicated support, frequent updates, and battle-tested code.

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/tailpanel/?utm_source=github&utm_medium=readme&utm_campaign=nalika">
        <img src="screenshots/tailpanel.png" alt="TailPanel — high-performance React dashboard with Tailwind utility classes" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/tailpanel/?utm_source=github&utm_medium=readme&utm_campaign=nalika"><strong>TailPanel</strong></a>
      <br>
      <sub>React + TypeScript + Tailwind CSS + Vite. 9 dashboards, instant theme switching.</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/admindek-html/?utm_source=github&utm_medium=readme&utm_campaign=nalika">
        <img src="screenshots/admindek.png" alt="Admindek — data-driven Bootstrap 5 admin panel with 100+ components" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/admindek-html/?utm_source=github&utm_medium=readme&utm_campaign=nalika"><strong>Admindek</strong></a>
      <br>
      <sub>Bootstrap 5 + vanilla JS. 100+ components, dark/light toggle, RTL, color presets.</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/adminty-html-dashboard/?utm_source=github&utm_medium=readme&utm_campaign=nalika">
        <img src="screenshots/adminty.png" alt="Adminty — wide-ranging Bootstrap 5 admin template with 160+ screens" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/adminty-html-dashboard/?utm_source=github&utm_medium=readme&utm_campaign=nalika"><strong>Adminty</strong></a>
      <br>
      <sub>Bootstrap 5. 160+ screens for dashboards, e-commerce, CRM, and more.</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/?utm_source=github&utm_medium=readme&utm_campaign=nalika">
        <img src="screenshots/architectui.png" alt="ArchitectUI — enterprise admin UI kit with 250+ reusable components" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/?utm_source=github&utm_medium=readme&utm_campaign=nalika"><strong>ArchitectUI</strong></a>
      <br>
      <sub>Bootstrap 5. 250+ reusable components, modular codebase, 9 dashboard configurations.</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/kero-jquery-html-dashboard-pro/?utm_source=github&utm_medium=readme&utm_campaign=nalika">
        <img src="screenshots/kero.png" alt="Kero — clean admin interface with horizontal and vertical navigation" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/kero-jquery-html-dashboard-pro/?utm_source=github&utm_medium=readme&utm_campaign=nalika"><strong>Kero</strong></a>
      <br>
      <sub>Bootstrap 5 + Webpack. Horizontal and vertical nav modes, full SASS theming.</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/cryptocurrency-dashboard/?utm_source=github&utm_medium=readme&utm_campaign=nalika">
        <img src="screenshots/cryptocurrency.png" alt="Cryptocurrency Dashboard — Bitcoin and DeFi admin management panel" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/cryptocurrency-dashboard/?utm_source=github&utm_medium=readme&utm_campaign=nalika"><strong>Cryptocurrency Dashboard</strong></a>
      <br>
      <sub>Bootstrap. Tailored for Bitcoin, DeFi, and ICO management applications.</sub>
    </td>
  </tr>
</table>

<p align="center">
  <a href="https://dashboardpack.com/?utm_source=github&utm_medium=readme&utm_campaign=nalika"><strong>Shop All Premium Templates</strong></a>
</p>

## More Resources

- [Bootstrap Admin Dashboards](https://colorlib.com/wp/free-bootstrap-admin-dashboard-templates/) - Collection of Bootstrap admin templates
- [Angular Dashboards](https://colorlib.com/wp/angularjs-admin-templates/) - Angular-based admin templates
- [Free Admin Dashboards](https://colorlib.com/wp/free-html5-admin-dashboard-templates/) - Free HTML5 admin templates
- [Website Templates](https://colorlib.com/wp/templates/) - Various website templates
- [WordPress Themes](https://colorlib.com/wp/free-wordpress-themes/) - Free WordPress themes

## Authors

Created and maintained by [Colorlib](https://colorlib.com)

## License

Nalika is licensed under The MIT License (MIT). You may use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the final products. Attribution to [Colorlib](https://colorlib.com) as the original author is required.
