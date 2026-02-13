/**
 * Nalika Admin Dashboard — Main JavaScript
 * Vanilla JS (no jQuery), Bootstrap 5.3.8 compatible
 * Dependencies: Bootstrap 5.3.8, AOS 2.3.4, SimpleBar 6.2.7
 * Optional: Swiper 12, ApexCharts 5.3.6, FullCalendar 6.1.20
 */

'use strict';

/* ─── Bootstrap Tooltips & Popovers ──────────────────────────────────── */

function initTooltips() {
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
    new bootstrap.Tooltip(el);
  });
}

function initPopovers() {
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function (el) {
    new bootstrap.Popover(el);
  });
}

/* ─── Sidebar Toggle ─────────────────────────────────────────────────── */

function initSidebar() {
  var toggle = document.getElementById('sidebarCollapse');
  var sidebar = document.getElementById('sidebar');
  if (!toggle || !sidebar) return;

  // Create backdrop for mobile sidebar overlay
  var backdrop = document.createElement('div');
  backdrop.className = 'sidebar-backdrop';
  document.body.appendChild(backdrop);

  function isMobile() {
    return window.innerWidth < 992;
  }

  toggle.addEventListener('click', function () {
    if (isMobile()) {
      document.body.classList.toggle('sidebar-mobile-open');
    } else {
      sidebar.classList.toggle('active');
      document.body.classList.toggle('mini-navbar');
    }
  });

  // Close mobile sidebar when clicking backdrop
  backdrop.addEventListener('click', function () {
    document.body.classList.remove('sidebar-mobile-open');
  });

  // Close mobile sidebar on resize to desktop
  window.addEventListener('resize', function () {
    if (!isMobile()) {
      document.body.classList.remove('sidebar-mobile-open');
    }
  });

  // Submenu indicator toggle
  sidebar.querySelectorAll('ul li').forEach(function (li) {
    li.addEventListener('click', function () {
      var icon = this.querySelector('i.bi.indicator-mn');
      if (icon) {
        icon.classList.toggle('bi-plus');
        icon.classList.toggle('bi-dash');
      }
    });
  });
}

/* ─── Sidebar Navigation (replaces metisMenu) ────────────────────────── */

function initSidebarNav() {
  var menu = document.getElementById('menu1');
  if (!menu) return;

  menu.querySelectorAll('.has-arrow').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var parent = this.parentElement;
      var submenu = parent.querySelector('.submenu-angle');
      if (!submenu) return;

      // Close other open submenus at the same level
      var siblings = parent.parentElement.children;
      for (var i = 0; i < siblings.length; i++) {
        if (siblings[i] !== parent) {
          siblings[i].classList.remove('active');
          var sub = siblings[i].querySelector('.submenu-angle');
          if (sub) sub.style.display = 'none';
        }
      }

      // Toggle current submenu
      parent.classList.toggle('active');
      if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
      } else {
        submenu.style.display = 'block';
      }
    });
  });

  // Keep active page's submenu open
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  menu.querySelectorAll('a[href="' + currentPage + '"]').forEach(function (link) {
    var li = link.closest('li.active, li');
    if (li) li.classList.add('active');
    var parentSubmenu = link.closest('.submenu-angle');
    if (parentSubmenu) {
      parentSubmenu.style.display = 'block';
      var parentLi = parentSubmenu.parentElement;
      if (parentLi) parentLi.classList.add('active');
    }
  });
}

/* ─── Mobile Menu — REMOVED ──────────────────────────────────────────── */
/* Sidebar now handles navigation on all screen sizes.
   See initSidebar() for mobile toggle behavior. */

/* ─── Sticky Header (replaces jQuery Sticky) ─────────────────────────── */

function initStickyHeader() {
  var stickyEl = document.querySelector('.sicker-menu');
  if (!stickyEl) return;

  var offsetTop = stickyEl.offsetTop;

  function handleScroll() {
    if (window.scrollY >= offsetTop) {
      stickyEl.classList.add('is-sticky');
      stickyEl.style.position = 'fixed';
      stickyEl.style.top = '0';
      stickyEl.style.width = '100%';
      stickyEl.style.zIndex = '9999';
    } else {
      stickyEl.classList.remove('is-sticky');
      stickyEl.style.position = '';
      stickyEl.style.top = '';
      stickyEl.style.width = '';
      stickyEl.style.zIndex = '';
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ─── Scroll to Top (replaces jQuery ScrollUp) ───────────────────────── */

function initScrollToTop() {
  var btn = document.createElement('a');
  btn.id = 'scrollUp';
  btn.href = '#';
  btn.innerHTML = '<i class="bi bi-chevron-up"></i>';
  btn.style.cssText = 'display:none;position:fixed;bottom:20px;right:20px;z-index:9999;' +
    'width:40px;height:40px;line-height:40px;text-align:center;border-radius:4px;' +
    'background:#ec4445;color:#fff;font-size:18px;text-decoration:none;transition:opacity 0.3s;';
  document.body.appendChild(btn);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      btn.style.display = 'block';
      btn.style.opacity = '1';
    } else {
      btn.style.opacity = '0';
      setTimeout(function () {
        if (window.scrollY <= 300) btn.style.display = 'none';
      }, 300);
    }
  }, { passive: true });

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── Counter Animation (replaces CounterUp + Waypoints) ─────────────── */

function initCounters() {
  var counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  function animateCounter(el) {
    var target = parseInt(el.textContent.replace(/,/g, ''), 10);
    if (isNaN(target)) return;
    var duration = 1500;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var current = Math.floor(progress * target);
      el.textContent = current.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (counter) {
    observer.observe(counter);
  });
}

/* ─── SimpleBar (replaces mCustomScrollbar) ──────────────────────────── */

function initScrollbars() {
  document.querySelectorAll('.comment-scrollbar').forEach(function (el) {
    if (typeof SimpleBar !== 'undefined') {
      new SimpleBar(el, { autoHide: true });
    }
  });
}

/* ─── AOS (replaces WOW.js + animate.css) ────────────────────────────── */

function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }
}

/* ─── Swiper Carousel (replaces Owl Carousel) ────────────────────────── */

function initProductCarousel() {
  var container = document.getElementById('owl-demo');
  if (!container || typeof Swiper === 'undefined') return;

  // Wrap slides in Swiper structure if not already done
  if (!container.querySelector('.swiper-wrapper')) {
    var slides = Array.from(container.children);
    var wrapper = document.createElement('div');
    wrapper.className = 'swiper-wrapper';
    slides.forEach(function (slide) {
      slide.classList.add('swiper-slide');
      wrapper.appendChild(slide);
    });
    container.appendChild(wrapper);

    // Add navigation buttons
    var prevBtn = document.createElement('div');
    prevBtn.className = 'swiper-button-prev';
    container.appendChild(prevBtn);

    var nextBtn = document.createElement('div');
    nextBtn.className = 'swiper-button-next';
    container.appendChild(nextBtn);
  }

  container.classList.add('swiper');

  new Swiper('#owl-demo', {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 2000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      480: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      980: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  });
}

/* ─── Price Range Slider (replaces jQuery UI slider) ─────────────────── */

function initPriceSlider() {
  var sliderEl = document.getElementById('slider-range');
  var amountEl = document.getElementById('amount');
  if (!sliderEl || typeof noUiSlider === 'undefined') return;
  if (sliderEl.noUiSlider) return;

  noUiSlider.create(sliderEl, {
    start: [60, 570],
    connect: true,
    range: {
      min: 40,
      max: 600,
    },
    format: {
      to: function (value) { return Math.round(value); },
      from: function (value) { return Number(value); },
    },
  });

  if (amountEl) {
    sliderEl.noUiSlider.on('update', function (values) {
      amountEl.value = '£' + values[0] + ' - £' + values[1];
    });
  }
}

/* ─── FullCalendar (v6, no jQuery required) ──────────────────────────── */

function initCalendar() {
  var calendarEl = document.getElementById('calendar');
  if (!calendarEl || typeof FullCalendar === 'undefined') return;

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    editable: true,
    selectable: true,
    events: [
      { title: 'Business Lunch', start: new Date().toISOString().slice(0, 10), className: 'bg-primary' },
      { title: 'Conference', start: new Date(Date.now() + 86400000 * 3).toISOString().slice(0, 10), className: 'bg-success' },
      { title: 'Meeting', start: new Date(Date.now() + 86400000 * 7).toISOString().slice(0, 10), className: 'bg-warning' },
      { title: 'Birthday Party', start: new Date(Date.now() + 86400000 * 12).toISOString().slice(0, 10), className: 'bg-danger' },
    ],
  });

  calendar.render();
}

/* ─── ApexCharts — Dashboard Charts (replaces Morris.js/Flot/Sparkline) ── */

function initDashboardCharts() {
  if (typeof ApexCharts === 'undefined') return;

  // Curved line chart (replaces Flot curved-line-chart)
  var curvedEl = document.getElementById('curved-line-chart');
  if (curvedEl) {
    new ApexCharts(curvedEl, {
      chart: { type: 'area', height: 350, toolbar: { show: false },
        foreColor: '#8e8e8e', background: 'transparent' },
      series: [
        { name: 'Sales', data: [31, 40, 28, 51, 42, 109, 100, 120, 80, 95, 60, 70] },
        { name: 'Revenue', data: [11, 32, 45, 32, 34, 52, 41, 60, 50, 70, 40, 50] },
      ],
      colors: ['#00c292', '#ab8ce4'],
      stroke: { curve: 'smooth', width: 2 },
      fill: { type: 'gradient', gradient: { opacityFrom: 0.4, opacityTo: 0.05 } },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
      grid: { borderColor: '#1e3154' },
      tooltip: { theme: 'dark' },
    }).render();
  }

  // Line chart (replaces Flot line-chart)
  var lineEl = document.getElementById('line-chart');
  if (lineEl) {
    new ApexCharts(lineEl, {
      chart: { type: 'line', height: 350, toolbar: { show: false },
        foreColor: '#8e8e8e', background: 'transparent' },
      series: [
        { name: 'Orders', data: [10, 41, 35, 51, 49, 62, 69, 91, 80, 65, 72, 85] },
        { name: 'Returns', data: [5, 12, 8, 15, 10, 18, 12, 20, 15, 10, 8, 12] },
      ],
      colors: ['#ab8ce4', '#ec4445'],
      stroke: { curve: 'smooth', width: 2 },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
      grid: { borderColor: '#1e3154' },
      tooltip: { theme: 'dark' },
    }).render();
  }

  // Product Sales bar chart (replaces Sparkline sparklinehome)
  var salesHomeEl = document.getElementById('sparklinehome');
  if (salesHomeEl) {
    salesHomeEl.textContent = '';
    new ApexCharts(salesHomeEl, {
      chart: { type: 'bar', height: 350, toolbar: { show: false },
        foreColor: '#8e8e8e', background: 'transparent' },
      series: [
        { name: 'Product Sales', data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 58, 46, 65] },
        { name: 'Expenses', data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 12] },
      ],
      colors: ['#00c292', '#ab8ce4'],
      plotOptions: { bar: { columnWidth: '50%', borderRadius: 3 } },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
      grid: { borderColor: '#1e3154' },
      tooltip: { theme: 'dark' },
      legend: { position: 'top', horizontalAlign: 'right' },
    }).render();
  }

  // Sparkline mini-charts
  var sparkConfigs = [
    { id: 'sparklinedash', data: [5, 10, 5, 20, 18, 17, 24, 28], color: '#ab8ce4' },
    { id: 'sparklinedash2', data: [5, 14, 5, 18, 12, 20, 15, 22], color: '#00c292' },
    { id: 'sparklinedash3', data: [5, 10, 15, 8, 14, 18, 10, 16], color: '#03a9f3' },
    { id: 'sparklinedash4', data: [8, 5, 12, 7, 10, 5, 14, 8], color: '#ec4445' },
    { id: 'sparkline8', data: [8, 14, 28, 16, 22, 10, 18, 26, 20, 30], color: '#00c292' },
    { id: 'sparkline9', data: [10, 8, 16, 12, 22, 14, 18, 20, 16, 24], color: '#ec4445' },
    { id: 'sparkline10', data: [12, 16, 10, 22, 18, 26, 14, 20, 24, 30], color: '#00c292' },
    { id: 'sparkline51', data: [30, 40, 20, 50, 60, 40, 70], color: '#ab8ce4' },
    { id: 'sparkline52', data: [60, 50, 70, 40, 80, 60, 90], color: '#00c292' },
  ];

  sparkConfigs.forEach(function (cfg) {
    var el = document.getElementById(cfg.id);
    if (el) {
      new ApexCharts(el, {
        chart: { type: 'area', height: 60, sparkline: { enabled: true }, background: 'transparent' },
        series: [{ data: cfg.data }],
        colors: [cfg.color],
        stroke: { curve: 'smooth', width: 2 },
        fill: { type: 'gradient', gradient: { opacityFrom: 0.4, opacityTo: 0 } },
        tooltip: { theme: 'dark', fixed: { enabled: false }, y: { title: { formatter: function () { return ''; } } } },
      }).render();
    }
  });
}

/* ─── Analytics Dashboard Charts ──────────────────────────────────────── */

function initAnalyticsDashboard() {
  if (typeof ApexCharts === 'undefined') return;

  var darkChart = { foreColor: '#8e8e8e', background: 'transparent' };
  var darkGrid = { borderColor: '#1e3154' };
  var darkTooltip = { theme: 'dark' };

  // Sparkline metric tiles
  var sparkTiles = [
    { id: 'analyticsSpark1', data: [12, 18, 14, 22, 19, 25, 28], color: '#24caa1' },
    { id: 'analyticsSpark2', data: [8, 15, 12, 20, 18, 24, 22], color: '#03a9f4' },
    { id: 'analyticsSpark3', data: [22, 18, 20, 15, 17, 14, 16], color: '#ec4445' },
    { id: 'analyticsSpark4', data: [3, 4, 3, 5, 4, 6, 5], color: '#ab8ce4' },
    { id: 'analyticsSpark5', data: [10, 14, 12, 18, 16, 22, 20], color: '#f8ac59' },
    { id: 'analyticsSpark6', data: [2, 3, 2, 4, 3, 5, 4], color: '#24caa1' },
  ];
  sparkTiles.forEach(function (cfg) {
    var el = document.getElementById(cfg.id);
    if (!el) return;
    new ApexCharts(el, {
      chart: { type: 'area', height: 40, sparkline: { enabled: true }, background: 'transparent' },
      series: [{ data: cfg.data }],
      colors: [cfg.color],
      stroke: { curve: 'smooth', width: 1.5 },
      fill: { type: 'gradient', gradient: { opacityFrom: 0.3, opacityTo: 0 } },
      tooltip: darkTooltip,
    }).render();
  });

  // Audience overview area chart
  var audienceEl = document.getElementById('analyticsAudienceChart');
  if (audienceEl) {
    new ApexCharts(audienceEl, {
      chart: Object.assign({ type: 'area', height: 320, toolbar: { show: false } }, darkChart),
      series: [
        { name: 'Users', data: [4200, 4800, 5100, 4900, 5600, 6200, 5800, 6400, 7100, 6800, 7400, 7900] },
        { name: 'Sessions', data: [6300, 7200, 7600, 7300, 8400, 9300, 8700, 9600, 10600, 10200, 11100, 11800] },
      ],
      colors: ['#24caa1', '#03a9f4'],
      stroke: { curve: 'smooth', width: 2 },
      fill: { type: 'gradient', gradient: { opacityFrom: 0.35, opacityTo: 0.05 } },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
      grid: darkGrid,
      tooltip: darkTooltip,
    }).render();
  }

  // Traffic sources donut
  var donutEl = document.getElementById('analyticsTrafficDonut');
  if (donutEl) {
    new ApexCharts(donutEl, {
      chart: Object.assign({ type: 'donut', height: 280 }, darkChart),
      series: [45, 25, 15, 10, 5],
      labels: ['Organic Search', 'Direct', 'Referral', 'Social', 'Paid'],
      colors: ['#24caa1', '#03a9f4', '#ab8ce4', '#f8ac59', '#ec4445'],
      plotOptions: { pie: { donut: { size: '65%' } } },
      legend: { position: 'bottom', labels: { colors: '#8e8e8e' } },
      stroke: { colors: ['#1b2a47'] },
      tooltip: darkTooltip,
    }).render();
  }

  // Server health radial
  var healthEl = document.getElementById('serverHealthRadial');
  if (healthEl) {
    new ApexCharts(healthEl, {
      chart: Object.assign({ type: 'radialBar', height: 180 }, darkChart),
      series: [78],
      labels: ['Health'],
      colors: ['#24caa1'],
      plotOptions: {
        radialBar: {
          hollow: { size: '60%' },
          dataLabels: {
            name: { fontSize: '12px', color: '#8e8e8e', offsetY: -8 },
            value: { fontSize: '22px', fontWeight: 700, color: '#fff', offsetY: 4 },
          },
          track: { background: '#1e3154' },
        },
      },
    }).render();
  }

  // Response time line
  var respEl = document.getElementById('responseTimeChart');
  if (respEl) {
    var respData = [];
    for (var h = 0; h < 24; h++) respData.push(Math.floor(80 + Math.random() * 120));
    new ApexCharts(respEl, {
      chart: Object.assign({ type: 'area', height: 180, toolbar: { show: false } }, darkChart),
      series: [{ name: 'Response (ms)', data: respData }],
      colors: ['#03a9f4'],
      stroke: { curve: 'smooth', width: 2 },
      fill: { type: 'gradient', gradient: { opacityFrom: 0.3, opacityTo: 0 } },
      xaxis: { categories: Array.from({ length: 24 }, function (_, i) { return i + ':00'; }), labels: { show: false } },
      yaxis: { labels: { formatter: function (v) { return v + 'ms'; } } },
      grid: darkGrid,
      tooltip: darkTooltip,
    }).render();
  }

  // Error rate bar
  var errorEl = document.getElementById('errorRateChart');
  if (errorEl) {
    new ApexCharts(errorEl, {
      chart: Object.assign({ type: 'bar', height: 180, toolbar: { show: false } }, darkChart),
      series: [{ name: 'Errors', data: [142, 28, 12, 8, 5] }],
      colors: ['#ec4445'],
      plotOptions: { bar: { horizontal: true, borderRadius: 3, barHeight: '50%' } },
      xaxis: { categories: ['404', '500', '502', '503', 'Timeout'] },
      grid: darkGrid,
      tooltip: darkTooltip,
    }).render();
  }

  // Activity heatmap
  var heatEl = document.getElementById('activityHeatmap');
  if (heatEl) {
    var days = ['Sun', 'Sat', 'Fri', 'Thu', 'Wed', 'Tue', 'Mon'];
    var heatSeries = days.map(function (day) {
      var row = [];
      for (var hh = 0; hh < 24; hh++) {
        row.push({ x: hh + ':00', y: Math.floor(Math.random() * 80) });
      }
      return { name: day, data: row };
    });
    new ApexCharts(heatEl, {
      chart: Object.assign({ type: 'heatmap', height: 260, toolbar: { show: false } }, darkChart),
      series: heatSeries,
      colors: ['#24caa1'],
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 2,
          colorScale: {
            ranges: [
              { from: 0, to: 15, color: '#0f1829', name: 'Low' },
              { from: 16, to: 35, color: '#1a4a3a', name: 'Medium' },
              { from: 36, to: 55, color: '#1d7a5a', name: 'High' },
              { from: 56, to: 80, color: '#24caa1', name: 'Very High' },
            ],
          },
        },
      },
      dataLabels: { enabled: false },
      xaxis: { labels: { style: { fontSize: '10px' } } },
      grid: darkGrid,
      tooltip: darkTooltip,
    }).render();
  }
}

/* ─── Project Management Dashboard Charts ────────────────────────────── */

function initProjectDashboard() {
  if (typeof ApexCharts === 'undefined') return;

  var darkChart = { foreColor: '#8e8e8e', background: 'transparent' };
  var darkGrid = { borderColor: '#1e3154' };
  var darkTooltip = { theme: 'dark' };

  // Radial summary cards
  var radials = [
    { id: 'pmRadial1', value: 75, color: '#ab8ce4' },
    { id: 'pmRadial2', value: 40, color: '#f8ac59' },
    { id: 'pmRadial3', value: 65, color: '#24caa1' },
    { id: 'pmRadial4', value: 92, color: '#03a9f4' },
  ];
  radials.forEach(function (cfg) {
    var el = document.getElementById(cfg.id);
    if (!el) return;
    new ApexCharts(el, {
      chart: Object.assign({ type: 'radialBar', height: 120 }, darkChart),
      series: [cfg.value],
      colors: [cfg.color],
      plotOptions: {
        radialBar: {
          hollow: { size: '55%' },
          dataLabels: {
            name: { show: false },
            value: { fontSize: '16px', fontWeight: 700, color: '#fff', offsetY: 5 },
          },
          track: { background: '#1e3154' },
        },
      },
    }).render();
  });

  // Task status stacked bar
  var taskEl = document.getElementById('pmTaskStatusChart');
  if (taskEl) {
    new ApexCharts(taskEl, {
      chart: Object.assign({ type: 'bar', height: 280, stacked: true, toolbar: { show: false } }, darkChart),
      series: [
        { name: 'Completed', data: [14, 18, 16, 20, 15, 18] },
        { name: 'In Progress', data: [4, 3, 5, 3, 6, 4] },
        { name: 'Blocked', data: [1, 2, 1, 0, 2, 1] },
        { name: 'Carryover', data: [2, 1, 3, 2, 1, 3] },
      ],
      colors: ['#24caa1', '#03a9f4', '#ec4445', '#f8ac59'],
      plotOptions: { bar: { columnWidth: '50%', borderRadius: 3 } },
      xaxis: { categories: ['Sprint 9', 'Sprint 10', 'Sprint 11', 'Sprint 12', 'Sprint 13', 'Sprint 14'] },
      legend: { position: 'top', horizontalAlign: 'right', labels: { colors: '#8e8e8e' } },
      grid: darkGrid,
      tooltip: darkTooltip,
    }).render();
  }

  // Sprint burndown
  var burnEl = document.getElementById('pmBurndownChart');
  if (burnEl) {
    var ideal = [42, 39, 36, 33, 30, 27, 24, 21, 18, 15, 12, 9, 6, 3, 0];
    var actual = [42, 40, 38, 35, 34, 30, 28, 26, 22, 20, 18, null, null, null, null];
    new ApexCharts(burnEl, {
      chart: Object.assign({ type: 'line', height: 280, toolbar: { show: false } }, darkChart),
      series: [
        { name: 'Ideal', data: ideal },
        { name: 'Actual', data: actual },
      ],
      colors: ['#5a6a7f', '#ab8ce4'],
      stroke: { width: [2, 3], dashArray: [5, 0], curve: 'smooth' },
      xaxis: { categories: Array.from({ length: 15 }, function (_, i) { return 'Day ' + (i + 1); }) },
      yaxis: { title: { text: 'Story Points', style: { color: '#8e8e8e' } } },
      grid: darkGrid,
      tooltip: darkTooltip,
    }).render();
  }
}

/* ─── Project Management Calendar (listWeek) ─────────────────────────── */

function initProjectCalendar() {
  var calendarEl = document.getElementById('pmCalendar');
  if (!calendarEl || typeof FullCalendar === 'undefined') return;

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'listWeek',
    headerToolbar: { left: 'prev,next', center: 'title', right: '' },
    height: 250,
    events: [
      { title: 'Sprint 14 Midpoint', start: new Date(Date.now() + 86400000).toISOString().slice(0, 10), className: 'bg-primary' },
      { title: 'Design Review', start: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 10), className: 'bg-info' },
      { title: 'Sprint 14 Ends', start: new Date(Date.now() + 86400000 * 4).toISOString().slice(0, 10), className: 'bg-warning' },
      { title: 'Release v2.5.0', start: new Date(Date.now() + 86400000 * 7).toISOString().slice(0, 10), className: 'bg-success' },
    ],
  });
  calendar.render();
}

/* ─── Project Management Kanban (mini, SortableJS) ───────────────────── */

function initProjectKanban() {
  if (typeof Sortable === 'undefined') return;

  var lists = ['pmKanbanTodo', 'pmKanbanProgress', 'pmKanbanDone'];
  var counters = {
    pmKanbanTodo: document.getElementById('pmCountTodo'),
    pmKanbanProgress: document.getElementById('pmCountProgress'),
    pmKanbanDone: document.getElementById('pmCountDone'),
  };

  function updateCounts() {
    lists.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && counters[id]) {
        counters[id].textContent = el.querySelectorAll('.kanban-card').length;
      }
    });
  }

  lists.forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    new Sortable(el, {
      group: 'pmKanban',
      animation: 200,
      ghostClass: 'kanban-ghost',
      chosenClass: 'kanban-chosen',
      dragClass: 'kanban-drag',
      handle: '.kanban-card',
      onEnd: updateCounts,
    });
  });
}

/* ─── Initialize Everything ──────────────────────────────────────────── */

// AOS must be initialized outside DOMContentLoaded when scripts are at body bottom
initAOS();

document.addEventListener('DOMContentLoaded', function () {
  initTooltips();
  initPopovers();
  initSidebar();
  initSidebarNav();
  initStickyHeader();
  initScrollToTop();
  initCounters();
  initScrollbars();
  initProductCarousel();
  initPriceSlider();
  initCalendar();
  initDashboardCharts();
  initAnalyticsDashboard();
  initProjectDashboard();
  initProjectCalendar();
  initProjectKanban();
});
