<html class="dark" lang="en"><head></head><body class="font-body-md text-body-md overflow-x-hidden">```html

<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CUE CONTROL | EXECUTIVE DASHBOARD</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=JetBrains+Mono:wght@500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-dim": "#121414",
                    "surface-container": "#1f2020",
                    "on-tertiary-container": "#656464",
                    "inverse-surface": "#e3e2e2",
                    "on-primary-container": "#636565",
                    "surface-bright": "#383939",
                    "tertiary": "#ffffff",
                    "on-secondary-container": "#b7b5b4",
                    "tertiary-container": "#e4e2e1",
                    "surface": "#121414",
                    "primary": "#ffffff",
                    "outline": "#8e9192",
                    "secondary-container": "#474746",
                    "on-tertiary-fixed": "#1b1c1c",
                    "on-tertiary-fixed-variant": "#474747",
                    "surface-container-lowest": "#0d0e0f",
                    "on-primary-fixed": "#1a1c1c",
                    "on-surface": "#e3e2e2",
                    "surface-variant": "#343535",
                    "on-tertiary": "#303030",
                    "error": "#ffb4ab",
                    "on-background": "#e3e2e2",
                    "inverse-on-surface": "#303031",
                    "primary-fixed-dim": "#c6c6c7",
                    "primary-fixed": "#e2e2e2",
                    "on-primary-fixed-variant": "#454747",
                    "tertiary-fixed-dim": "#c8c6c6",
                    "on-secondary": "#313030",
                    "secondary-fixed-dim": "#c8c6c5",
                    "tertiary-fixed": "#e4e2e1",
                    "primary-container": "#e2e2e2",
                    "on-secondary-fixed": "#1c1b1b",
                    "surface-container-high": "#292a2a",
                    "on-surface-variant": "#c4c7c8",
                    "background": "#121414",
                    "error-container": "#93000a",
                    "surface-container-highest": "#343535",
                    "on-secondary-fixed-variant": "#474746",
                    "outline-variant": "#444748",
                    "on-error-container": "#ffdad6",
                    "inverse-primary": "#5d5f5f",
                    "surface-tint": "#c6c6c7",
                    "on-error": "#690005",
                    "secondary": "#c8c6c5",
                    "on-primary": "#2f3131",
                    "secondary-fixed": "#e5e2e1",
                    "surface-container-low": "#1b1c1c"
            },
            "borderRadius": {
                    "DEFAULT": "0px",
                    "lg": "0px",
                    "xl": "0px",
                    "full": "9999px"
            },
            "spacing": {
                    "stack_md": "16px",
                    "sidebar_width": "260px",
                    "grid_gutter": "24px",
                    "stack_sm": "8px",
                    "container_padding": "32px",
                    "top_nav_height": "64px"
            },
            "fontFamily": {
                    "body-sm": ["Inter"],
                    "title-sm": ["Inter"],
                    "display-lg": ["Inter"],
                    "body-md": ["Inter"],
                    "headline-md": ["Inter"],
                    "label-mono": ["JetBrains Mono"],
                    "table-header": ["Inter"]
            },
            "fontSize": {
                    "body-sm": ["12px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "title-sm": ["18px", {"lineHeight": "1.4", "fontWeight": "600"}],
                    "display-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-md": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "headline-md": ["24px", {"lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "label-mono": ["11px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                    "table-header": ["11px", {"lineHeight": "1", "letterSpacing": "0.08em", "fontWeight": "700"}]
            }
          },
        },
      }
    </script>
<style>
        body { background-color: #121414; color: #e3e2e2; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #121414; }
        ::-webkit-scrollbar-thumb { background: #2E2E2E; }
        .grid-heatmap { display: grid; grid-template-columns: repeat(24, 1fr); gap: 2px; }
        .heatmap-cell { height: 24px; transition: opacity 0.2s; }
        .heatmap-cell:hover { outline: 1px solid #ffffff; z-index: 10; cursor: crosshair; }
    </style>
<!-- SIDEBAR NAVIGATION -->
<aside class="fixed left-0 top-0 h-screen w-[260px] border-r border-outline-variant bg-surface flex flex-col py-stack_md z-[60]">
<div class="px-6 mb-10">
<h1 class="font-title-sm text-title-sm font-bold tracking-tighter text-primary">CUE CONTROL</h1>
<p class="font-label-mono text-label-mono opacity-50">SUPER ADMIN</p>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center px-6 py-3 border-l-4 border-primary bg-surface-container text-primary font-bold transition-all" href="#">
<span class="material-symbols-outlined mr-3" data-icon="dashboard">dashboard</span>
<span class="font-label-mono">Executive</span>
</a>
<a class="flex items-center px-6 py-3 text-on-surface-variant opacity-70 hover:opacity-100 hover:bg-surface-container-high transition-colors duration-150" href="#">
<span class="material-symbols-outlined mr-3" data-icon="precision_manufacturing">precision_manufacturing</span>
<span class="font-label-mono">Operations</span>
</a>
<a class="flex items-center px-6 py-3 text-on-surface-variant opacity-70 hover:opacity-100 hover:bg-surface-container-high transition-colors duration-150" href="#">
<span class="material-symbols-outlined mr-3" data-icon="payments">payments</span>
<span class="font-label-mono">Financial</span>
</a>
<a class="flex items-center px-6 py-3 text-on-surface-variant opacity-70 hover:opacity-100 hover:bg-surface-container-high transition-colors duration-150" href="#">
<span class="material-symbols-outlined mr-3" data-icon="analytics">analytics</span>
<span class="font-label-mono">Intelligence</span>
</a>
<a class="flex items-center px-6 py-3 text-on-surface-variant opacity-70 hover:opacity-100 hover:bg-surface-container-high transition-colors duration-150" href="#">
<span class="material-symbols-outlined mr-3" data-icon="admin_panel_settings">admin_panel_settings</span>
<span class="font-label-mono">Security</span>
</a>
<a class="flex items-center px-6 py-3 text-on-surface-variant opacity-70 hover:opacity-100 hover:bg-surface-container-high transition-colors duration-150" href="#">
<span class="material-symbols-outlined mr-3" data-icon="badge">badge</span>
<span class="font-label-mono">Staff</span>
</a>
<a class="flex items-center px-6 py-3 text-on-surface-variant opacity-70 hover:opacity-100 hover:bg-surface-container-high transition-colors duration-150" href="#">
<span class="material-symbols-outlined mr-3" data-icon="settings">settings</span>
<span class="font-label-mono">System</span>
</a>
<a class="flex items-center px-6 py-3 text-on-surface-variant opacity-70 hover:opacity-100 hover:bg-surface-container-high transition-colors duration-150" href="#">
<span class="material-symbols-outlined mr-3" data-icon="report_problem">report_problem</span>
<span class="font-label-mono">Incidents</span>
</a>
</nav>
<div class="px-6 pt-6 mt-auto border-t border-outline-variant">
<div class="flex items-center gap-3">
<img alt="Super Admin Avatar" class="w-8 h-8 rounded-full grayscale border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn1kuqmwIKqQnDIyVz7hTJzMMpNhFBN_VTx-YhFQaBn79Sg03GV86jgf1YzU4T-AVIzCE4HwTaJFKrBZqnvnm8wvHyN6pjJSclZNeo3UQ0HxQaBhK9c1Rnw8gi6OxJVnMeMXHy7Y1eG9XKewzg0CM36t5DoHsIUhjSOEcg2g2oqy74oM78TeQnDNvCXHAgZvsjKxibiXCR_RzoYku6m0onAolaI3TIgJSGFu91iR2Z5db9hspqT1YglUnhpjYHi7BrBW1tH0pZktNA"/>
<div>
<p class="font-label-mono text-[10px] leading-tight">SESSION ACTIVE</p>
<p class="font-body-md font-bold">Admin-01</p>
</div>
</div>
</div>
</aside>
<!-- TOP NAVIGATION -->
<header class="fixed top-0 right-0 left-[260px] h-[64px] bg-surface-container border-b border-outline-variant flex justify-between items-center px-container_padding z-50">
<div class="flex items-center gap-4">
<span class="font-headline-md text-headline-md text-primary uppercase tracking-widest font-black">Command Center</span>
<span class="px-3 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold tracking-widest uppercase border border-outline-variant">LIVE_FEED</span>
</div>
<div class="flex items-center gap-stack_md">
<div class="relative group">
<input class="bg-surface-dim border border-outline-variant px-4 py-2 text-label-mono focus:border-primary transition-colors outline-none w-64 uppercase" placeholder="QUERY SYSTEM..." type="text"/>
<span class="material-symbols-outlined absolute right-3 top-2.5 text-outline text-[18px]" data-icon="search">search</span>
</div>
<button class="w-10 h-10 flex items-center justify-center hover:bg-surface-bright transition-colors border border-outline-variant">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button class="w-10 h-10 flex items-center justify-center hover:bg-surface-bright transition-colors border border-outline-variant">
<span class="material-symbols-outlined" data-icon="sensors">sensors</span>
</button>
<div class="h-6 w-px bg-outline-variant mx-2"></div>
<button class="bg-primary text-on-primary px-4 py-2 font-label-mono font-bold hover:bg-opacity-90 transition-all">
                EXPORT REPORT
            </button>
</div>
</header>
<!-- MAIN CANVAS -->
<main class="ml-[260px] pt-[64px] p-container_padding max-w-[1600px]">
<!-- SECTION 1: KPI CARDS (Filtered to requested 4) -->
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack_md mb-stack_md">
<!-- 1. Revenue KPI -->
<div class="bg-surface-container p-4 border border-outline-variant">
<p class="font-label-mono text-on-surface-variant opacity-70 mb-2">TOTAL REVENUE</p>
<h2 class="font-display-lg text-display-lg font-bold tracking-tighter mb-1">$284.5K</h2>
<div class="flex items-center gap-2">
<span class="text-green-500 font-label-mono text-[10px]">+14.2%</span>
<div class="h-[20px] flex-1 bg-surface-dim relative overflow-hidden">
<div class="absolute inset-y-0 left-0 bg-green-500/20 w-3/4"></div>
</div>
</div>
</div>
<!-- 2. Reservation Conv Rate -->
<div class="bg-surface-container p-4 border border-outline-variant">
<p class="font-label-mono text-on-surface-variant opacity-70 mb-2">RESERVATION CONV RATE</p>
<h2 class="font-display-lg text-display-lg font-bold tracking-tighter mb-1">68.4%</h2>
<div class="flex items-center gap-2">
<span class="text-green-500 font-label-mono text-[10px]">+2.1%</span>
<div class="h-[20px] flex-1 bg-surface-dim relative overflow-hidden">
<div class="absolute inset-y-0 left-0 bg-green-500/20 w-2/3"></div>
</div>
</div>
</div>
<!-- 4. System Health -->
<div class="bg-surface-container p-4 border border-outline-variant">
<p class="font-label-mono text-on-surface-variant opacity-70 mb-2">SYSTEM HEALTH</p>
<h2 class="font-display-lg text-display-lg font-bold tracking-tighter mb-1">99.98</h2>
<div class="flex items-center gap-2">
<span class="text-green-500 font-label-mono text-[10px]">OPTIMAL</span>
<div class="h-[20px] flex-1 bg-surface-dim relative overflow-hidden">
<div class="absolute inset-y-0 left-0 bg-green-500/20 w-full"></div>
</div>
</div>
</div>
<!-- 5. Failed Payment Alerts (KPI format) -->
<div class="bg-surface-container p-4 border border-outline-variant">
<p class="font-label-mono text-on-surface-variant opacity-70 mb-2">FAILED PAYMENTS</p>
<h2 class="font-display-lg text-display-lg font-bold tracking-tighter mb-1 text-error">12</h2>
<div class="flex items-center gap-2">
<span class="text-error font-label-mono text-[10px]">+4 CRITICAL</span>
<div class="h-[20px] flex-1 bg-surface-dim relative overflow-hidden">
<div class="absolute inset-y-0 left-0 bg-error/20 w-1/4"></div>
</div>
</div>
</div>
</section>
<!-- SECTION 2: 70/30 SPLIT (Heatmap & Alerts) -->
<div class="grid grid-cols-1 xl:grid-cols-10 gap-stack_md mb-stack_md">
<!-- 3. Peak Occupancy Heatmap (Full Width Visualization in its container) -->
<div class="xl:col-span-7 bg-surface-container border border-outline-variant p-6">
<div class="flex justify-between items-end mb-6">
<div>
<h3 class="font-label-mono text-on-surface tracking-widest font-bold uppercase">Peak Occupancy Heatmap</h3>
<p class="text-on-surface-variant text-[10px] font-label-mono uppercase">Temporal utilization density per hour/day</p>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-1 font-label-mono text-[9px]">
<span class="">0%</span>
<div class="flex gap-0.5">
<div class="w-3 h-3 bg-surface-dim"></div>
<div class="w-3 h-3 bg-white/20"></div>
<div class="w-3 h-3 bg-white/40"></div>
<div class="w-3 h-3 bg-white/60"></div>
<div class="w-3 h-3 bg-white/80"></div>
<div class="w-3 h-3 bg-white"></div>
</div>
<span class="">100%</span>
</div>
</div>
</div>
<div class="flex">
<div class="w-12 pt-6">
<div class="space-y-[2px]">
<div class="h-6 flex items-center font-label-mono text-[9px] text-on-surface-variant">MON</div>
<div class="h-6 flex items-center font-label-mono text-[9px] text-on-surface-variant">TUE</div>
<div class="h-6 flex items-center font-label-mono text-[9px] text-on-surface-variant">WED</div>
<div class="h-6 flex items-center font-label-mono text-[9px] text-on-surface-variant">THU</div>
<div class="h-6 flex items-center font-label-mono text-[9px] text-on-surface-variant">FRI</div>
<div class="h-6 flex items-center font-label-mono text-[9px] text-on-surface-variant">SAT</div>
<div class="h-6 flex items-center font-label-mono text-[9px] text-on-surface-variant">SUN</div>
</div>
</div>
<div class="flex-1">
<div class="grid-heatmap mb-2">
<script>
    for(let i=0; i<24; i++) {
        document.write(`<div class="text-center font-label-mono text-[9px] text-on-surface-variant">${i}h</div>`);
    }
</script>
</div>
<div class="space-y-[2px]">
<script>
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    days.forEach(day => {
        document.write('<div class="grid-heatmap">');
        for(let i=0; i<24; i++) {
            const opacity = Math.random();
            document.write(`<div class="heatmap-cell bg-white" style="opacity: ${opacity}"></div>`);
        }
        document.write('</div>');
    });
</script>
</div>
</div>
</div>
</div>
<!-- 7. High-Risk Alerts (Dedicated Panel) -->
<div class="xl:col-span-3 bg-surface-container border border-outline-variant flex flex-col overflow-hidden">
<div class="p-4 border-b border-outline-variant bg-surface-container-high flex justify-between items-center">
<h3 class="font-label-mono text-on-surface font-bold">HIGH-RISK ALERTS</h3>
<span class="bg-error text-on-error text-[10px] font-bold px-2 py-0.5">3 ACTIVE</span>
</div>
<div class="flex-1 overflow-y-auto divide-y divide-outline-variant">
<!-- Alert Item -->
<div class="p-4 hover:bg-surface-bright transition-colors group">
<div class="flex justify-between items-start mb-1">
<span class="text-error font-label-mono text-[10px] font-bold">FAILED_PAYMENT</span>
<span class="text-on-surface-variant text-[10px] font-label-mono">14:02:11</span>
</div>
<p class="font-body-md text-on-surface leading-tight mb-2">Location NYC-04: Multiple card declines detected at Table 08 (Auth Timeout).</p>
<button class="font-label-mono text-[10px] text-primary border border-primary px-2 py-1 hover:bg-primary hover:text-on-primary transition-all">INVESTIGATE</button>
</div>
<!-- Alert Item -->
<div class="p-4 hover:bg-surface-bright transition-colors group">
<div class="flex justify-between items-start mb-1">
<span class="text-error font-label-mono text-[10px] font-bold">ABUSE_DETECTION</span>
<span class="text-on-surface-variant text-[10px] font-label-mono">13:45:00</span>
</div>
<p class="font-body-md text-on-surface leading-tight mb-2">Systemic reservation cancellations from IP range: 192.168.1.XX. Bot pattern suspected.</p>
<button class="font-label-mono text-[10px] text-primary border border-primary px-2 py-1 hover:bg-primary hover:text-on-primary transition-all">BLOCK_RANGE</button>
</div>
<!-- Alert Item -->
<div class="p-4 hover:bg-surface-bright transition-colors group">
<div class="flex justify-between items-start mb-1">
<span class="text-on-secondary-container font-label-mono text-[10px] font-bold">LATENCY_WARNING</span>
<span class="text-on-surface-variant text-[10px] font-label-mono">13:12:04</span>
</div>
<p class="font-body-md text-on-surface leading-tight mb-2">Database Read/Write latency exceeding 400ms in Central-Europe-1 cluster.</p>
<button class="font-label-mono text-[10px] text-primary border border-primary px-2 py-1 hover:bg-primary hover:text-on-primary transition-all">VIEW_METRICS</button>
</div>
</div>
</div>
</div>
<!-- SECTION 3: STAFF ACTIVITY -->
<section class="mb-stack_md">
<!-- 6. Staff Activity Snapshot (Timeline/Log Format) -->
<div class="bg-surface-container border border-outline-variant p-6 h-[400px] flex flex-col">
<h3 class="font-label-mono text-on-surface font-bold uppercase mb-6 flex items-center gap-2"><span class="material-symbols-outlined text-[18px]" data-icon="badge">badge</span> STAFF ACTIVITY SNAPSHOT</h3>
<div class="flex-1 overflow-y-auto space-y-4 pr-2">
<div class="relative pl-6 border-l border-outline-variant pb-4">
<div class="absolute -left-1 top-0 w-2 h-2 bg-primary"></div>
<div class="flex justify-between items-start mb-1">
<p class="font-bold font-body-md">M. Chen <span class="text-on-surface-variant font-normal">checked in</span></p>
<span class="text-on-surface-variant font-label-mono text-[10px]">08:45</span>
</div>
<p class="text-[11px] font-label-mono uppercase opacity-50">Location: HKG-Central</p>
</div>
<div class="relative pl-6 border-l border-outline-variant pb-4">
<div class="absolute -left-1 top-0 w-2 h-2 bg-primary"></div>
<div class="flex justify-between items-start mb-1">
<p class="font-bold font-body-md">J. Smith <span class="text-on-surface-variant font-normal">initiated table maintenance</span></p>
<span class="text-on-surface-variant font-label-mono text-[10px]">09:12</span>
</div>
<p class="text-[11px] font-label-mono uppercase opacity-50">Table: 12 | Status: Offline</p>
</div>
<div class="relative pl-6 border-l border-outline-variant pb-4">
<div class="absolute -left-1 top-0 w-2 h-2 bg-primary"></div>
<div class="flex justify-between items-start mb-1">
<p class="font-bold font-body-md">L. Valenti <span class="text-on-surface-variant font-normal">processed refund</span></p>
<span class="text-on-surface-variant font-label-mono text-[10px]">09:44</span>
</div>
<p class="text-[11px] font-label-mono uppercase opacity-50">Transaction ID: #99021-AX</p>
</div>
<div class="relative pl-6 border-l border-outline-variant pb-4">
<div class="absolute -left-1 top-0 w-2 h-2 bg-primary"></div>
<div class="flex justify-between items-start mb-1">
<p class="font-bold font-body-md">A. Russo <span class="text-on-surface-variant font-normal">Shift Leader Override</span></p>
<span class="text-on-surface-variant font-label-mono text-[10px]">10:05</span>
</div>
<p class="text-[11px] font-label-mono uppercase opacity-50">Action: POS Price Unlock</p>
</div>
<div class="relative pl-6 border-l border-outline-variant pb-4">
<div class="absolute -left-1 top-0 w-2 h-2 bg-primary"></div>
<div class="flex justify-between items-start mb-1">
<p class="font-bold font-body-md">K. Tanaka <span class="text-on-surface-variant font-normal">session terminated</span></p>
<span class="text-on-surface-variant font-label-mono text-[10px]">10:15</span>
</div>
<p class="text-[11px] font-label-mono uppercase opacity-50">Reason: Shift End | Location: TYO-Shibuya</p>
</div>
</div>
</div>
</section>
</main>
<footer class="ml-[260px] p-container_padding pt-0 text-center text-on-surface-variant font-label-mono text-[10px] opacity-30 pb-10">
        © 2023 CUE CONTROL SYSTEMS. ALL RIGHTS RESERVED. ENCRYPTED OPERATIONAL LAYER.
    </footer>
<script>
        // Micro-interactions for the heatmap cells
        document.querySelectorAll('.heatmap-cell').forEach(cell => {
            cell.addEventListener('mouseenter', function() {
                // Future implementation: show precise tooltip
            });
        });

        // Search Bar Focus Effect
        const searchInput = document.querySelector('input[type="text"]');
        if(searchInput) {
            searchInput.addEventListener('focus', () => {
                searchInput.parentElement.classList.add('border-primary');
            });
            searchInput.addEventListener('blur', () => {
                searchInput.parentElement.classList.remove('border-primary');
            });
        }
    </script>
```</body></html>