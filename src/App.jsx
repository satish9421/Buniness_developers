import React, { useState } from 'react';
import {
  Code,
  Smartphone,
  Globe,
  Sparkles,
  BarChart3,
  TrendingUp,
  Package,
  Calendar,
  Receipt,
  Users,
  Video,
  Megaphone,
  Palette,
  ExternalLink,
  GraduationCap,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Layers,
  ChevronRight,
  ShieldCheck,
  Zap,
  PhoneCall,
  Mail,
  AlertTriangle,
  Lightbulb,
  Building,
  Eye,
  SlidersHorizontal,
  X
} from 'lucide-react';

export default function App() {
  // Interactive Dashboard state for Section 2
  const [activeTab, setActiveTab] = useState('inventory'); // 'inventory', 'sales', 'tables'
  const [inquirySent, setInquirySent] = useState(false);
  const [activeReelView, setActiveReelView] = useState('restaurant'); // 'restaurant', 'gym'

  // Team data as specified by user
  const teamMembers = [
    {
      name: "Satish Galande",
      age: 21,
      role: "Lead Full-Stack & System Architect",
      education: "Diploma in Computer Engineering",
      currentStudy: "B.Tech CSE (2nd Year)",
      college: "Sinhgad Institute of Engineering",
      initials: "SG",
      expertise: ["React & Web Apps", "Backend APIs", "System Architecture", "PC Software"]
    },
    {
      name: "Ayush Raj",
      age: 20,
      role: "Mobile Applications & Hardware Integration",
      education: "Higher Secondary (Science)",
      currentStudy: "B.Tech ENTC (3rd Year)",
      college: "Sinhgad Institute of Engineering",
      initials: "AR",
      expertise: ["Cross-platform Mobile", "IoT / Embedded", "Network Protocols", "UI/UX"]
    },
    {
      name: "Bijitesh Vishal Singh",
      age: 21,
      role: "Software Engineering & Cloud Architecture",
      education: "Higher Secondary (Science)",
      currentStudy: "B.Tech CSE (3rd Year)",
      college: "Sinhgad Institute of Engineering",
      initials: "BS",
      expertise: ["Full Stack Solutions", "Database Scaling", "DevOps & Cloud", "AI Integration"]
    },
    {
      name: "Ronak Pandita",
      age: 21,
      role: "Data Analytics & Business Intelligence",
      education: "Higher Secondary (Science)",
      currentStudy: "B.Tech IT (3rd Year, Data Analytics)",
      college: "Sinhgad Institute of Engineering",
      initials: "RP",
      expertise: ["BI Dashboards", "Predictive Analytics", "Stock/Sales Forecasting", "Business Insights"]
    }
  ];

  // Demo Templates (Between 3rd and 4th section)
  const [activeDemoTab, setActiveDemoTab] = useState('gym'); // 'gym', 'food', 'retail', 'portfolio'
  const [demoScreenMode, setDemoScreenMode] = useState('desktop'); // 'desktop', 'mobile'

  const demoWebsites = [
    {
      id: "gym",
      title: "IronPulse Fitness & Gym",
      category: "Fitness & Gym Studio",
      tagline: "Live membership slots, trainer scheduler, automated WhatsApp workout reminders & UPI checkout.",
      stats: "+45% Member Signups",
      accent: "#e2b97e",
      bannerText: "TRANSFORM YOUR STRENGTH // PUNE ELITE GYM",
      features: ["Live Timetable & Trainer Slots", "Online Admission & UPI Pay", "Diet & Habit Tracker", "WhatsApp Renewal Reminders"],
      liveUi: {
        navTitle: "IRONPULSE FITNESS",
        navLinks: ["Classes", "Trainers", "Memberships", "Contact"],
        heroHeading: "UNLEASH YOUR PEAK POTENTIAL",
        heroSub: "Pune's #1 modern training club with certified trainers and Olympic weightlifting floors.",
        actionBtn: "Book Free 1-Day Trial",
        badge: "Limited 15 slots open for this batch",
        quickCards: [
          { title: "CrossFit & HIIT", time: "6:00 AM - 7:30 AM", trainer: "Coach Vikram", spots: "4 left" },
          { title: "Power Yoga & Mobility", time: "8:00 AM - 9:00 AM", trainer: "Coach Sneha", spots: "Full" },
          { title: "Strength & Conditioning", time: "6:30 PM - 8:00 PM", trainer: "Coach Rohit", spots: "6 left" }
        ],
        pricingPreview: [
          { plan: "Monthly Pass", price: "₹1,800/mo", tag: "General Access" },
          { plan: "Quarterly Pro", price: "₹4,500/3mo", tag: "Most Popular", highlight: true },
          { plan: "Annual VIP", price: "₹14,000/yr", tag: "Personal Trainer Incl." }
        ]
      }
    },
    {
      id: "food",
      title: "Zaffran Bistro & Rooftop Dine",
      category: "Restaurant & Cafe",
      tagline: "Contactless digital QR menu, live table reservations, kitchen POS order routing & automated bill printing.",
      stats: "2.4x Table Turnover",
      accent: "#3dd68c",
      bannerText: "WOOD-FIRED PIZZAS & ARTISANAL COFFEES",
      features: ["Interactive Digital QR Menu", "Real-Time Table Booking", "Kitchen KOT Synchronization", "Instant SMS/WhatsApp Bill"],
      liveUi: {
        navTitle: "ZAFFRAN BISTRO",
        navLinks: ["Menu", "Reserve Table", "Chef Specials", "Reviews"],
        heroHeading: "CRAFTED WITH PASSION, SERVED WITH FLAVOUR",
        heroSub: "Experience authentic Italian stone-baked sourdough & artisanal roast coffees in a serene rooftop ambiance.",
        actionBtn: "Reserve Table Online",
        badge: "Happy Hour: 4:00 PM - 7:00 PM (Flat 20% OFF)",
        quickCards: [
          { title: "Truffle Mushroom Pizza", time: "Thin Crust 11\"", trainer: "₹480", spots: "Chef Choice" },
          { title: "Smoked Spanish Latte", time: "Cold Brew / Oat Milk", trainer: "₹240", spots: "Bestseller" },
          { title: "Pesto Genovese Pasta", time: "Fresh Handmade Fettuccine", trainer: "₹420", spots: "Popular" }
        ],
        pricingPreview: [
          { plan: "Table For 2 (Couples)", price: "Instant Booking", tag: "Rooftop Bay" },
          { plan: "Family Booth (4-6 Seats)", price: "Confirmed Slot", tag: "Garden View", highlight: true },
          { plan: "Private Party Lounge", price: "Up to 15 Guests", tag: "Pre-Order Buffet" }
        ]
      }
    },
    {
      id: "retail",
      title: "Siddhi Supermart & Grocery",
      category: "Local Vendor & Grocery Hub",
      tagline: "Live shelf and storage stock status, fast barcode billing, customer khata balances & doorstep delivery.",
      stats: "-30% Stock Wastage",
      accent: "#52c7d9",
      bannerText: "DAILY FRESH ESSENTIALS DELIVERED IN 15 MINS",
      features: ["Live Stock & Shelf Depletion Alerts", "Fast 3-Second Counter Billing", "Customer Khata (Credit) Ledger", "Automatic Supplier Reordering"],
      liveUi: {
        navTitle: "SIDDHI SUPERMART",
        navLinks: ["Groceries", "Dairy & Bakery", "Household", "Offers"],
        heroHeading: "YOUR TRUSTED NEIGHBORHOOD GROCERY",
        heroSub: "Over 4,500 daily fresh grocery products at wholesale prices with instant WhatsApp ordering and delivery.",
        actionBtn: "Order On WhatsApp Now",
        badge: "Free home delivery on orders above ₹499",
        quickCards: [
          { title: "Farm Fresh Cow Milk (1L)", time: "Morning Batch", trainer: "₹66", spots: "In Stock" },
          { title: "Premium Basmati Rice (5kg)", time: "Aged 2 Years", trainer: "₹440", spots: "18 left" },
          { title: "Pure Shuddh Ghee (1kg)", time: "Desi Gir Cow", trainer: "₹890", spots: "Fast Moving" }
        ],
        pricingPreview: [
          { plan: "Express Pickup", price: "Ready in 10 mins", tag: "Counter Counter" },
          { plan: "Monthly Ration Kit", price: "Flat 12% OFF", tag: "Free Home Drop", highlight: true },
          { plan: "Local Vendor Khata", price: "Monthly Credit", tag: "Verified Regulars" }
        ]
      }
    },
    {
      id: "portfolio",
      title: "Vanguard Studio & Architects",
      category: "Professional Studio & Portfolio",
      tagline: "High-end visual showcase for architects, interior designers, salons and doctors with consultation bookings.",
      stats: "380+ Leads Converted",
      accent: "#e2b97e",
      bannerText: "TIMELESS ARCHITECTURE & MODERN INTERIORS",
      features: ["Visual Project Galleries", "Direct Slot Consultation Booking", "Client Case Studies & Testimonials", "SEO Fast Loading Architecture"],
      liveUi: {
        navTitle: "VANGUARD ARCHITECTS",
        navLinks: ["Works", "About", "Services", "Book Call"],
        heroHeading: "ARCHITECTURAL SPACES DESIGNED FOR LIVING",
        heroSub: "Crafting iconic sustainable residences, modern corporate offices, and boutique hospitality spaces.",
        actionBtn: "Schedule 30-Min Consultation",
        badge: "Winner: Regional Design Excellence 2025",
        quickCards: [
          { title: "The Obsidian Villa", time: "Koregaon Park, Pune", trainer: "4,200 sq.ft", spots: "Completed" },
          { title: "Horizon Tech Offices", time: "Hinjawadi, Pune", trainer: "18,000 sq.ft", spots: "Completed" },
          { title: "Zenith Boutique Hotel", time: "Lonavala Deck", trainer: "12 Suites", spots: "In Progress" }
        ],
        pricingPreview: [
          { plan: "Design Consultation", price: "₹2,500 / session", tag: "1-on-1 Concept" },
          { plan: "Turnkey Architecture", price: "Complete 3D & Build", tag: "Full Project", highlight: true },
          { plan: "Interior Renovation", price: "Per Sq.Ft Pricing", tag: "Residential" }
        ]
      }
    }
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Subtle Background Pattern */}
      <div className="grid-bg-overlay" />

      {/* Modern Floating Header / Navigation */}
      <nav className="navbar">
        <a href="#hero" className="nav-brand">
          <div className="nav-logo-badge">BD</div>
          <div>
            <span style={{ fontWeight: 700, fontSize: '0.95rem', letterSpacing: '-0.01em' }}>Business Developers</span>
            <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>STUDIO • PUNE</span>
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#services" className="nav-link">Capabilities</a></li>
          <li><a href="#analytics" className="nav-link">Data Analysis</a></li>
          <li><a href="#marketing" className="nav-link">Digital Marketing</a></li>
          <li><a href="#demos" className="nav-link">Live Demos</a></li>
          <li><a href="#team" className="nav-link">Our Team</a></li>
        </ul>

        <div>
          <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.1rem', fontSize: '0.8rem' }}>
            <span>Consult With Us</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </nav>

      {/* =========================================================================
          HERO SECTION: Brief info about goal: local vendor empowerment
          ========================================================================= */}
      <header id="hero" className="container hero-section">
        <div className="hero-grid">
          <div>
            <div className="hero-badge-container">
              <span className="pulse-dot"></span>
              <span className="section-pill" style={{ margin: 0 }}>
                Next-Gen Software & Growth Partner
              </span>
            </div>

            <h1 className="hero-heading">
              Empowering <span className="highlight-text">local vendors</span> to dominate & scale digitally.
            </h1>

            <p className="hero-desc">
              We are <strong>Business Developers</strong> — an energetic team of 4 dedicated software engineers from Sinhgad Institute.
              We build custom PC software, responsive mobile apps, automated data dashboards, and complete digital & on-ground marketing to turn local shops into thriving digital enterprises.
            </p>

            <div className="hero-actions">
              <a href="#services" className="btn-primary">
                <span>Explore What We Build</span>
                <ChevronRight size={16} />
              </a>
              <a href="#demos" className="btn-secondary">
                <span>Browse Demo Templates</span>
              </a>
            </div>

            {/* Metrics */}
            <div className="hero-metrics">
              <div>
                <div className="metric-val" style={{ color: 'var(--accent-gold)' }}>4-in-1</div>
                <div className="metric-lbl">Dev, Data, Web & Ads</div>
              </div>
              <div>
                <div className="metric-val" style={{ color: 'var(--accent-emerald)' }}>100%</div>
                <div className="metric-lbl">Custom Tailored Code</div>
              </div>
              <div>
                <div className="metric-val" style={{ color: 'var(--accent-cyan)' }}>Local First</div>
                <div className="metric-lbl">Built for Vendor Growth</div>
              </div>
            </div>
          </div>

          {/* Interactive Hero Visual */}
          <div className="hero-preview-window">
            <div className="window-header">
              <div className="window-controls">
                <span className="window-dot red"></span>
                <span className="window-dot yellow"></span>
                <span className="window-dot green"></span>
              </div>
              <div className="window-title">business-developers-system://suite-v2.5</div>
              <div style={{ color: 'var(--accent-emerald)', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-emerald)' }}></span>
                System Live
              </div>
            </div>

            <div style={{ padding: '1.5rem', background: '#0e1017' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CLIENT SOLUTION WORKFLOW</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>Smart Vendor OS Integration</div>
                </div>
                <span className="section-pill emerald" style={{ margin: 0, fontSize: '0.65rem' }}>Active Sync</span>
              </div>

              {/* Workflow Steps Preview */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ background: '#161922', padding: '0.9rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '8px', background: 'rgba(226,185,126,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                    <Code size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>1. Custom Software & Apps</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>PC billing POS + Android/iOS customer ordering app</div>
                  </div>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                </div>

                <div style={{ background: '#161922', padding: '0.9rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '8px', background: 'rgba(61,214,140,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)' }}>
                    <BarChart3 size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>2. Live Stock & Sales AI Analytics</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Predictive replenishment, shelf tracking & booking tables</div>
                  </div>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                </div>

                <div style={{ background: '#161922', padding: '0.9rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '8px', background: 'rgba(82,199,217,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                    <Megaphone size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>3. Social Reels & Physical Flex Banners</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Instagram virality + local flex boards for footfall drive</div>
                  </div>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                </div>
              </div>

              {/* Status footer inside visual */}
              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <span>Engineered by 4 Sinhgad Devs</span>
                <span style={{ color: 'var(--accent-gold)' }}>Zero Third-Party Vendor Locks</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          SECTION 1: What Can We Make
          1. PC Software 2. Mobile Apps 3. Websites 4. AI-Integrated Applications
          ========================================================================= */}
      <section id="services" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-pill">Section 01 // Core Engineering</div>
          <h2 className="section-title">What Can We Make For You</h2>
          <p className="section-subtitle">
            From desktop-native offline billing software to reactive mobile apps and artificial intelligence workflows, we cover the full software stack.
          </p>

          <div className="services-grid">
            {/* 1. PC Software */}
            <div className="glass-card service-card card-glow-gold">
              <div>
                <div className="service-icon-box gold">
                  <Code size={26} />
                </div>
                <div className="service-tag">DESKTOP APPLICATION</div>
                <h3>1. PC Software & POS Systems</h3>
                <p>
                  High-speed, reliable desktop applications that operate seamlessly offline and online. Ideal for retail stores, supermarkets, clinics, and manufacturing counters.
                </p>
              </div>

              <ul className="service-features-list">
                <li><span className="check-dot"></span> Thermal printer & barcode scanner support</li>
                <li><span className="check-dot"></span> Offline-first data caching & cloud sync</li>
                <li><span className="check-dot"></span> Instant GST bill calculations & printouts</li>
                <li><span className="check-dot"></span> Lightweight native Windows & cross-platform speed</li>
              </ul>
            </div>

            {/* 2. Mobile Apps */}
            <div className="glass-card service-card card-glow-emerald">
              <div>
                <div className="service-icon-box emerald">
                  <Smartphone size={26} />
                </div>
                <div className="service-tag">MOBILE ECOSYSTEM</div>
                <h3>2. Mobile Apps (Android & iOS)</h3>
                <p>
                  Smooth, intuitive apps designed for end-customers to browse catalogs, place orders, book appointments, and receive automated status alerts.
                </p>
              </div>

              <ul className="service-features-list">
                <li><span className="check-dot" style={{ background: 'var(--accent-emerald)' }}></span> Smooth touch-first modern UI/UX</li>
                <li><span className="check-dot" style={{ background: 'var(--accent-emerald)' }}></span> Push notifications for offers & order updates</li>
                <li><span className="check-dot" style={{ background: 'var(--accent-emerald)' }}></span> Integrated UPI, Google Pay & PhonePe</li>
                <li><span className="check-dot" style={{ background: 'var(--accent-emerald)' }}></span> Customer account & loyalty points dashboard</li>
              </ul>
            </div>

            {/* 3. Websites */}
            <div className="glass-card service-card card-glow-cyan">
              <div>
                <div className="service-icon-box cyan">
                  <Globe size={26} />
                </div>
                <div className="service-tag">WEB PLATFORMS</div>
                <h3>3. High-Converting Websites</h3>
                <p>
                  Aesthetic, modern web platforms inspired by international design standards (Awwwards-quality) that load in under 1 second and rank top on Google local search.
                </p>
              </div>

              <ul className="service-features-list">
                <li><span className="check-dot" style={{ background: 'var(--accent-cyan)' }}></span> 100% mobile responsive & tablet optimized</li>
                <li><span className="check-dot" style={{ background: 'var(--accent-cyan)' }}></span> Search Engine Optimized (SEO) for local clients</li>
                <li><span className="check-dot" style={{ background: 'var(--accent-cyan)' }}></span> Interactive booking, menus & lead contact forms</li>
                <li><span className="check-dot" style={{ background: 'var(--accent-cyan)' }}></span> Admin panel for instant menu / pricing updates</li>
              </ul>
            </div>

            {/* 4. AI Integrated Applications */}
            <div className="glass-card service-card card-glow-gold">
              <div>
                <div className="service-icon-box gold">
                  <Sparkles size={26} />
                </div>
                <div className="service-tag">SMART AUTOMATION</div>
                <h3>4. AI Integrated Applications</h3>
                <p>
                  Infuse smart machine learning into daily operations: automated WhatsApp answering bots, customer churn prediction, and smart optical bill scanning.
                </p>
              </div>

              <ul className="service-features-list">
                <li><span className="check-dot"></span> 24/7 AI WhatsApp customer inquiry assistant</li>
                <li><span className="check-dot"></span> Optical character recognition (OCR) for bills</li>
                <li><span className="check-dot"></span> Smart voice-to-order processing for quick counters</li>
                <li><span className="check-dot"></span> Automated sales forecast & anomaly detection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: Data Analysis & Client Dashboard
          Analyze client's data: Shelf stock, storage, sales, customer bills, tables
          ========================================================================= */}
      <section id="analytics" className="section-wrapper" style={{ background: '#090a0e' }}>
        <div className="container">
          <div className="section-pill emerald">Section 02 // Intelligence & Analytics</div>
          <h2 className="section-title">Data Analysis & Live Decision Dashboard</h2>
          <p className="section-subtitle">
            We don't just deliver software; we give every business owner an intelligent executive cockpit.
            Monitor stock in shelf vs storage, real-time sales velocity, customer billing patterns, and live table occupancy with automated AI suggestions.
          </p>

          {/* Interactive Live Dashboard */}
          <div className="dashboard-preview-card">
            {/* Topbar of the client dashboard */}
            <div className="dash-topbar">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Client Intelligence Hub</h4>
                  <span className="section-pill emerald" style={{ margin: 0, padding: '0.15rem 0.5rem', fontSize: '0.65rem' }}>Live Simulation</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Viewing real-time metrics for: <strong>Royal Spices & Gourmet Hub (Pune Branch)</strong>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="dash-tab-group">
                <button
                  className={`dash-tab ${activeTab === 'inventory' ? 'active' : ''}`}
                  onClick={() => setActiveTab('inventory')}
                >
                  <Package size={14} style={{ display: 'inline', marginRight: 4 }} />
                  Shelf & Storage Stock
                </button>
                <button
                  className={`dash-tab ${activeTab === 'sales' ? 'active' : ''}`}
                  onClick={() => setActiveTab('sales')}
                >
                  <TrendingUp size={14} style={{ display: 'inline', marginRight: 4 }} />
                  Sales & Customer Bills
                </button>
                <button
                  className={`dash-tab ${activeTab === 'tables' ? 'active' : ''}`}
                  onClick={() => setActiveTab('tables')}
                >
                  <Calendar size={14} style={{ display: 'inline', marginRight: 4 }} />
                  Table Details & Bookings
                </button>
              </div>
            </div>

            {/* KPI Cards row */}
            <div className="kpi-grid">
              <div className="kpi-card">
                <div className="kpi-header">
                  <span>DAILY REVENUE TODAY</span>
                  <Receipt size={16} color="var(--accent-gold)" />
                </div>
                <div className="kpi-number">₹48,920</div>
                <div className="kpi-trend positive">
                  <TrendingUp size={13} /> +18.4% vs last Saturday
                </div>
              </div>

              <div className="kpi-card">
                <div className="kpi-header">
                  <span>TOTAL BILLS GENERATED</span>
                  <Users size={16} color="var(--accent-emerald)" />
                </div>
                <div className="kpi-number">234 Bills</div>
                <div className="kpi-trend positive">
                  <TrendingUp size={13} /> Avg. basket: ₹209
                </div>
              </div>

              <div className="kpi-card">
                <div className="kpi-header">
                  <span>STORAGE & SHELF HEALTH</span>
                  <Package size={16} color="var(--accent-cyan)" />
                </div>
                <div className="kpi-number">92.4%</div>
                <div className="kpi-trend warning">
                  <AlertTriangle size={13} /> 3 critical items low
                </div>
              </div>

              <div className="kpi-card">
                <div className="kpi-header">
                  <span>TABLE OCCUPANCY</span>
                  <Calendar size={16} color="var(--accent-gold)" />
                </div>
                <div className="kpi-number">14 / 16</div>
                <div className="kpi-trend neutral">
                  <span>87.5% capacity right now</span>
                </div>
              </div>
            </div>

            {/* Dynamic Tab Body */}
            {activeTab === 'inventory' && (
              <div style={{ background: '#13161f', borderRadius: '14px', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
                <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Shelf vs Storage Depletion Monitor</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Updated 3 mins ago</span>
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>ITEM NAME</th>
                        <th>CATEGORY</th>
                        <th>FRONT SHELF</th>
                        <th>BACK STORAGE</th>
                        <th>DAILY RUN-RATE</th>
                        <th>STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Premium Basmati Rice (5kg)</td>
                        <td>Grains & Staples</td>
                        <td>4 bags left</td>
                        <td>42 bags in reserve</td>
                        <td>12 bags/day</td>
                        <td><span className="status-badge low">Restock Shelf</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Pure Cold-Pressed Mustard Oil (1L)</td>
                        <td>Edible Oils</td>
                        <td>18 bottles</td>
                        <td>120 bottles</td>
                        <td>8 bottles/day</td>
                        <td><span className="status-badge optimal">Optimal</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Organic Dark Roast Coffee Blend</td>
                        <td>Beverages</td>
                        <td>2 jars left</td>
                        <td>1 jar in reserve</td>
                        <td>5 jars/day</td>
                        <td><span className="status-badge low" style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.1)' }}>Supplier Order Urgently</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Artisanal Whole Wheat Bread</td>
                        <td>Bakery Fresh</td>
                        <td>14 loaves</td>
                        <td>0 reserve (fresh daily)</td>
                        <td>25 loaves/day</td>
                        <td><span className="status-badge optimal">Fast Moving</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'sales' && (
              <div style={{ background: '#13161f', borderRadius: '14px', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
                <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Recent Customer POS Bills & Payment Channels</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Auto-sync with cash register</span>
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>BILL ID</th>
                        <th>CUSTOMER / PHONE</th>
                        <th>ITEMS COUNT</th>
                        <th>PAYMENT METHOD</th>
                        <th>BILL AMOUNT</th>
                        <th>TIME</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-gold)' }}>#BD-9042</td>
                        <td>Rohan S. (+91 98224...)</td>
                        <td>7 items</td>
                        <td>UPI / GPay</td>
                        <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>₹1,450.00</td>
                        <td>2 mins ago</td>
                      </tr>
                      <tr>
                        <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-gold)' }}>#BD-9041</td>
                        <td>Walk-in Counter Guest</td>
                        <td>2 items</td>
                        <td>Cash</td>
                        <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>₹180.00</td>
                        <td>6 mins ago</td>
                      </tr>
                      <tr>
                        <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-gold)' }}>#BD-9040</td>
                        <td>Pooja K. (+91 94220...)</td>
                        <td>12 items</td>
                        <td>Credit Card / POS</td>
                        <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>₹3,820.00</td>
                        <td>14 mins ago</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'tables' && (
              <div style={{ background: '#13161f', borderRadius: '14px', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
                <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Dine-In Table Floor Plan & Booking Details</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>Live Reservation Engine</span>
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>TABLE #</th>
                        <th>CAPACITY</th>
                        <th>CURRENT STATUS</th>
                        <th>GUEST NAME</th>
                        <th>SESSION DURATION</th>
                        <th>NEXT RESERVATION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Table 01 (Window Bay)</td>
                        <td>4 Seater</td>
                        <td><span className="status-badge optimal">Occupied (Eating)</span></td>
                        <td>Deshmukh Family</td>
                        <td>42 mins (Bill requested)</td>
                        <td>7:30 PM (Mr. Verma)</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Table 04 (Rooftop Deck)</td>
                        <td>6 Seater</td>
                        <td><span className="status-badge reserved">Reserved Online</span></td>
                        <td>Anand B. (via App)</td>
                        <td>Arriving in 15 mins</td>
                        <td>Table sanitized</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Table 07 (Central)</td>
                        <td>2 Seater</td>
                        <td><span className="status-badge optimal" style={{ background: 'rgba(59,130,246,0.1)', color: '#60a5fa', borderColor: 'rgba(59,130,246,0.3)' }}>Available Now</span></td>
                        <td>—</td>
                        <td>Vacant for 12 mins</td>
                        <td>Walk-in open</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Business Developer's AI Suggestion Engine */}
            <div className="ai-recommendation-box">
              <div className="ai-icon-pill">
                <Lightbulb size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
                    AI Growth Suggestion Generated for Owner
                  </span>
                  <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>Confidence: 96%</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  "Weekend rush detected: Table booking velocity peaks between 7:30 PM and 9:45 PM.
                  Also, <strong>Organic Coffee Beans</strong> will stock out in approx. 18 hours based on past 4 Saturdays.
                  Recommended action: Auto-dispatch purchase order to supplier #2 and activate 15% discount on early table seatings before 7:00 PM."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: Digital & Physical Marketing
          Promote client app: 1. Social media Reels 2. Physical flex banners
          ========================================================================= */}
      <section id="marketing" className="section-wrapper">
        <div className="container">
          <div className="section-pill cyan">Section 03 // 360° Omnichannel Marketing</div>
          <h2 className="section-title">We Build It. We Market It. Local Footfall Guaranteed.</h2>
          <p className="section-subtitle">
            Most developers hand over code and walk away. At <strong>Business Developers</strong>, we launch the client's application with high-octane viral social media reels and eye-catching physical banners for foot traffic.
          </p>

          <div className="marketing-grid">
            {/* 1. Social Media Viral Reels */}
            <div className="glass-card card-glow-gold" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div className="service-icon-box gold" style={{ width: 44, height: 44, margin: 0 }}>
                  <Video size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>1. Viral Social Media Reels & Promo Videos</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Instagram, YouTube Shorts & WhatsApp Status Ready</div>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                We produce cinematic 30-to-60 second reels highlighting how easy it is for customers to order, book tables, or avail deals using your new custom app.
              </p>

              {/* Interactive Phone Frame Mockup for Reel */}
              <div className="reel-mockup-container">
                <div className="reel-phone-frame">
                  <div className="reel-notch"></div>

                  <div className="reel-video-body">
                    {/* Floating badge */}
                    <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', padding: '3px 8px', borderRadius: 999, fontSize: '0.65rem', color: '#fff', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444' }}></span>
                      INSTAGRAM REEL PREVIEW
                    </div>

                    {/* Reel interactive toggle */}
                    <div style={{ position: 'absolute', top: 40, left: 12, right: 12, display: 'flex', gap: 6 }}>
                      <button
                        onClick={() => setActiveReelView('restaurant')}
                        style={{ flex: 1, padding: '4px', fontSize: '0.65rem', borderRadius: 6, border: 'none', background: activeReelView === 'restaurant' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.15)', color: activeReelView === 'restaurant' ? '#000' : '#fff', cursor: 'pointer' }}
                      >
                        Bistro Ad
                      </button>
                      <button
                        onClick={() => setActiveReelView('gym')}
                        style={{ flex: 1, padding: '4px', fontSize: '0.65rem', borderRadius: 6, border: 'none', background: activeReelView === 'gym' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.15)', color: activeReelView === 'gym' ? '#000' : '#fff', cursor: 'pointer' }}
                      >
                        Gym Ad
                      </button>
                    </div>

                    {/* Video simulation content */}
                    <div style={{ marginTop: 'auto', zIndex: 2 }}>
                      <div style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', padding: '0.85rem', borderRadius: 14, border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                          <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '0.65rem', fontWeight: 800 }}>
                            {activeReelView === 'restaurant' ? 'ZB' : 'IP'}
                          </div>
                          <div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>
                              {activeReelView === 'restaurant' ? '@zaffran_bistro_pune' : '@ironpulse_fitness'}
                            </div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--accent-gold)' }}>Sponsored • Business Developers Campaign</div>
                          </div>
                        </div>

                        <p style={{ fontSize: '0.72rem', color: '#e5e7eb', marginBottom: 8, lineHeight: 1.4 }}>
                          {activeReelView === 'restaurant'
                            ? '🚀 Skip the waiting line! Book your rooftop table in 2 taps on our new web app & get free dessert. Tap link in bio!'
                            : '⚡ Unlock Pune\'s premier strength floor. Scan the QR code at reception to activate your pass instantly on mobile.'}
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.65rem', color: '#9ca3af' }}>
                          <span>🎵 Trending Audio: High Energy</span>
                          <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>18.4k Views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <CheckCircle2 size={15} color="var(--accent-gold)" /> Full 4K vertical video formatting with captivating subtitles
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <CheckCircle2 size={15} color="var(--accent-gold)" /> Direct 'Call-to-Action' driving app downloads & WhatsApp enquiries
                </div>
              </div>
            </div>

            {/* 2. Physical Flex Banners & On-Ground Collateral */}
            <div className="glass-card card-glow-cyan" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div className="service-icon-box cyan" style={{ width: 44, height: 44, margin: 0 }}>
                  <Palette size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>2. Physical Flex Banners & Storefront Displays</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>High-Resolution Print Files for Shop Front & Billboards</div>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Digital presence is only half the battle for a neighborhood shop. We engineer eye-catching physical flex banner designs, standees, and QR stand cards to turn street passersby into app users.
              </p>

              {/* Physical Flex Banner Mockup */}
              <div className="physical-banner-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ position: 'absolute', top: -30, right: -30, width: 140, height: 140, background: 'rgba(82, 199, 217, 0.1)', borderRadius: '50%', filter: 'blur(30px)', pointerEvents: 'none' }}></div>

                {/* Banner header representation */}
                <div style={{ border: '2px dashed rgba(226, 185, 126, 0.4)', borderRadius: 12, padding: '1.25rem', background: 'rgba(10, 12, 18, 0.8)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <span className="mono-tag" style={{ color: 'var(--accent-gold)', background: 'rgba(226, 185, 126, 0.1)', padding: '2px 8px', borderRadius: 4 }}>
                        PRINT SPEC: 8ft x 4ft OUTDOOR VINYL FLEX
                      </span>
                      <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '0.5rem', color: '#fff' }}>
                        ORDER SMART. SKIP THE QUEUE.
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        Scan & download our official client app to order directly from your mobile.
                      </p>
                    </div>

                    {/* QR Code representation */}
                    <div style={{ background: '#fff', padding: '6px', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: 64, height: 64, background: '#111', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2, padding: 4 }}>
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div key={i} style={{ background: (i % 2 === 0 || i % 7 === 0) ? '#fff' : 'transparent' }}></div>
                        ))}
                      </div>
                      <span style={{ fontSize: '0.6rem', color: '#000', fontWeight: 700, marginTop: 2 }}>SCAN ME</span>
                    </div>
                  </div>

                  {/* Highlights banner badge */}
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <div style={{ background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: 6, fontSize: '0.75rem', color: 'var(--text-primary)' }}>
                      🎉 Flat 20% OFF On First In-App Order
                    </div>
                    <div style={{ background: 'rgba(61,214,140,0.1)', color: 'var(--accent-emerald)', padding: '0.35rem 0.75rem', borderRadius: 6, fontSize: '0.75rem' }}>
                      ⚡ Instant Counter Pickup
                    </div>
                  </div>
                </div>

                {/* Print materials included */}
                <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                  <div style={{ background: '#12151e', padding: '0.75rem', borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>Large Shopfront Flex</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>High-DPI weather-resistant layout</div>
                  </div>
                  <div style={{ background: '#12151e', padding: '0.75rem', borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>Table & Counter Acrylic QR</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Instant tap & scan ordering cards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION (BETWEEN 3 & 4): Demo Websites & Ready-to-Deploy Templates
          Gym, Food, Retail/Grocery, Portfolio
          ========================================================================= */}
      {/* =========================================================================
          SECTION (BETWEEN 3 & 4): Demo Websites & Interactive Client UI Showcase
          Gym, Food, Retail/Grocery, Portfolio - Simple live UI to show clients
          ========================================================================= */}
      <section id="demos" className="section-wrapper" style={{ background: '#090a0f', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-pill gold">Section 3.5 // Live Demo Showcase</div>
          <h2 className="section-title">Live Website Demos For Our Clients</h2>
          <p className="section-subtitle">
            Explore ready-to-experience frontend designs tailored for local industries. Clients can directly test how their customers will view classes, order food, buy groceries, or book appointments.
          </p>

          {/* Interactive Template Selector Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', background: '#12141c', padding: '0.4rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              {demoWebsites.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDemoTab(d.id)}
                  style={{
                    padding: '0.6rem 1.1rem',
                    borderRadius: '10px',
                    border: activeDemoTab === d.id ? `1px solid ${d.accent}` : '1px solid transparent',
                    background: activeDemoTab === d.id ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                    color: activeDemoTab === d.id ? '#fff' : 'var(--text-secondary)',
                    fontWeight: activeDemoTab === d.id ? 700 : 500,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: d.accent }}></span>
                  {d.title.split('&')[0]}
                </button>
              ))}
            </div>

            {/* Screen Mode Toggle: Desktop / Mobile preview */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#12141c', padding: '0.3rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
              <button
                onClick={() => setDemoScreenMode('desktop')}
                style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: demoScreenMode === 'desktop' ? 'rgba(226, 185, 126, 0.15)' : 'transparent',
                  color: demoScreenMode === 'desktop' ? 'var(--accent-gold)' : 'var(--text-muted)',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Desktop Frame
              </button>
              <button
                onClick={() => setDemoScreenMode('mobile')}
                style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: demoScreenMode === 'mobile' ? 'rgba(226, 185, 126, 0.15)' : 'transparent',
                  color: demoScreenMode === 'mobile' ? 'var(--accent-gold)' : 'var(--text-muted)',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Mobile Frame
              </button>
            </div>
          </div>

          {/* Active Demo Interactive Device Frame */}
          {(() => {
            const currentDemo = demoWebsites.find(d => d.id === activeDemoTab) || demoWebsites[0];
            return (
              <div
                style={{
                  background: '#10121a',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 70px -20px rgba(0, 0, 0, 0.85)',
                  maxWidth: demoScreenMode === 'mobile' ? '420px' : '100%',
                  margin: '0 auto',
                  transition: 'all 0.4s ease'
                }}
              >
                {/* Browser Top Window Chrome */}
                <div style={{ background: '#161922', padding: '0.85rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    <span className="window-dot red"></span>
                    <span className="window-dot yellow"></span>
                    <span className="window-dot green"></span>
                  </div>
                  <div style={{ background: '#0e1017', padding: '0.25rem 1.25rem', borderRadius: 999, fontSize: '0.72rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', border: '1px solid rgba(255,255,255,0.05)', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    https://demo.{currentDemo.id}.businessdevelopers.in/live
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '0.7rem', color: currentDemo.accent, fontWeight: 600 }}>{currentDemo.stats}</span>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-emerald)' }}></span>
                  </div>
                </div>

                {/* Live Client Website Content Canvas */}
                <div style={{ padding: demoScreenMode === 'mobile' ? '1.5rem 1rem' : '2.5rem 2rem', background: '#0d0f15', minHeight: '440px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                  {/* Mock Site Navbar */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '2rem' }}>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 12, height: 12, borderRadius: 3, background: currentDemo.accent }}></span>
                      {currentDemo.liveUi.navTitle}
                    </div>
                    {demoScreenMode === 'desktop' && (
                      <div style={{ display: 'flex', gap: '1.25rem' }}>
                        {currentDemo.liveUi.navLinks.map((link, lIdx) => (
                          <span key={lIdx} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                            {link}
                          </span>
                        ))}
                      </div>
                    )}
                    <span style={{ padding: '0.35rem 0.85rem', background: 'rgba(255,255,255,0.06)', borderRadius: 999, fontSize: '0.75rem', color: currentDemo.accent, border: '1px solid rgba(255,255,255,0.1)' }}>
                      Open Now
                    </span>
                  </div>

                  {/* Mock Site Hero Section */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.3rem 0.8rem', borderRadius: 999, background: 'rgba(255,255,255,0.05)', fontSize: '0.72rem', color: currentDemo.accent, marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <Sparkles size={13} /> {currentDemo.liveUi.badge}
                    </div>

                    <h3 style={{ fontSize: demoScreenMode === 'mobile' ? '1.5rem' : '2.2rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '0.85rem', color: '#fff' }}>
                      {currentDemo.liveUi.heroHeading}
                    </h3>

                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '620px', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {currentDemo.liveUi.heroSub}
                    </p>

                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <button
                        style={{
                          padding: '0.65rem 1.4rem',
                          background: currentDemo.accent,
                          color: '#0b0c10',
                          border: 'none',
                          borderRadius: 999,
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6
                        }}
                      >
                        <span>{currentDemo.liveUi.actionBtn}</span>
                        <ArrowRight size={14} />
                      </button>

                      <button
                        style={{
                          padding: '0.65rem 1.2rem',
                          background: 'rgba(255,255,255,0.05)',
                          color: '#fff',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 999,
                          fontSize: '0.85rem',
                          cursor: 'pointer'
                        }}
                      >
                        Explore Catalog
                      </button>
                    </div>
                  </div>

                  {/* Live Interactive Grid of Cards for Client */}
                  <div style={{ display: 'grid', gridTemplateColumns: demoScreenMode === 'mobile' ? '1fr' : 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                    {currentDemo.liveUi.quickCards.map((card, cIdx) => (
                      <div
                        key={cIdx}
                        style={{
                          background: '#141720',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 14,
                          padding: '1.1rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>{card.title}</span>
                            <span style={{ fontSize: '0.68rem', padding: '2px 6px', borderRadius: 4, background: 'rgba(255,255,255,0.06)', color: currentDemo.accent }}>
                              {card.spots}
                            </span>
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{card.time}</div>
                        </div>

                        <div style={{ marginTop: '0.85rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>{card.trainer}</span>
                          <span style={{ color: currentDemo.accent, fontWeight: 600 }}>Select →</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pricing / Plan / Booking Tiers Bar */}
                  <div style={{ background: '#12141d', borderRadius: 16, padding: '1.25rem', border: '1px solid var(--border-subtle)', display: 'grid', gridTemplateColumns: demoScreenMode === 'mobile' ? '1fr' : 'repeat(3, 1fr)', gap: '1rem' }}>
                    {currentDemo.liveUi.pricingPreview.map((tier, tIdx) => (
                      <div key={tIdx} style={{ padding: '0.85rem', borderRadius: 10, background: tier.highlight ? 'rgba(226, 185, 126, 0.08)' : 'transparent', border: tier.highlight ? `1px solid ${currentDemo.accent}` : '1px solid transparent' }}>
                        <div style={{ fontSize: '0.7rem', color: currentDemo.accent, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{tier.tag}</div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginTop: 2 }}>{tier.plan}</div>
                        <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginTop: 2 }}>{tier.price}</div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Demo Control Info Bar */}
                <div style={{ background: '#141722', padding: '0.85rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={15} color="var(--accent-emerald)" />
                    <span>Included for client: <strong>{currentDemo.features.join(" • ")}</strong></span>
                  </div>
                  <div style={{ color: currentDemo.accent, fontWeight: 600 }}>
                    Instant 3-Day Setup Available
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Quick Clickable Thumbnails for other industries */}
          <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {demoWebsites.map((d) => (
              <div
                key={d.id}
                onClick={() => setActiveDemoTab(d.id)}
                style={{
                  background: activeDemoTab === d.id ? '#171a25' : '#11131a',
                  border: activeDemoTab === d.id ? `1px solid ${d.accent}` : '1px solid var(--border-subtle)',
                  borderRadius: 14,
                  padding: '1.1rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.72rem', color: d.accent, fontFamily: 'var(--font-mono)' }}>{d.category}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent-emerald)' }}>{d.stats}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', marginBottom: '0.35rem' }}>{d.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{d.tagline}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: Developers Team Information
          Satish Galande, Aayush Raj, Bijitesh Vishal Singh, Ronak Pandita
          ========================================================================= */}
      <section id="team" className="section-wrapper">
        <div className="container">
          <div className="section-pill">Section 04 // The Engineering Unit</div>
          <h2 className="section-title">Meet The Business Developers Team</h2>
          <p className="section-subtitle">
            We are a tight-knit squad of 4 passionate engineers from Sinhgad Institute of Engineering, blending computer science, electronics, software engineering, and data analytics.
          </p>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="avatar-wrapper">
                  <div className="avatar-initials">{member.initials}</div>
                  <div className="age-pill">{member.age} yrs</div>
                </div>

                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>

                <div className="team-education">
                  <div className="edu-item">
                    <GraduationCap size={15} />
                    <span><strong>Prior:</strong> {member.education}</span>
                  </div>
                  <div className="edu-item">
                    <Layers size={15} />
                    <span><strong>Pursuing:</strong> {member.currentStudy}</span>
                  </div>
                  <div className="edu-item">
                    <Building size={15} />
                    <span><strong>College:</strong> {member.college}</span>
                  </div>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Specialization
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {member.expertise.map((skill, sIdx) => (
                      <span key={sIdx} style={{ fontSize: '0.7rem', background: 'rgba(226, 185, 126, 0.08)', border: '1px solid rgba(226, 185, 126, 0.2)', color: 'var(--text-primary)', padding: '0.15rem 0.5rem', borderRadius: 999 }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: How We Work With Clients (Process & Contact)
          ========================================================================= */}
      <section id="contact" className="section-wrapper" style={{ background: '#090a0e', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-pill emerald">Section 05 // Client Engagement Protocol</div>
          <h2 className="section-title">How We Build For Our Clients</h2>
          <p className="section-subtitle">
            A transparent, 4-step engineering roadmap so you know exactly what is happening every single week.
          </p>

          {/* Process Timeline */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>01</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Shop & Workflow Audit</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                We visit your business or audit your current workflow — analyzing billing speed, stock tracking pain points, and customer walk-ins.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>02</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Rapid Prototype & UI</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                We create a live clickable prototype tailored specifically to your branding and menu/inventory structure within 7 days.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>03</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>System & Data Setup</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                We configure the desktop POS/software, publish your mobile app, seed existing inventory data, and calibrate table/stock metrics.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>04</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Launch Day & Ads Blast</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                We deliver physical flex banners for your store entrance and upload viral launch reels on Instagram to announce your new app to Pune.
              </p>
            </div>
          </div>

          {/* Interactive Contact / Consultation Box */}
          <div className="glass-card" style={{ background: 'linear-gradient(135deg, #131620 0%, #0d0e14 100%)', border: '1px solid rgba(226, 185, 126, 0.3)', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready To Transform Your Local Business?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Tell us about your business (Retail, Restaurant, Gym, Salon, or Clinic) and get a free architecture consultation + demo walk-through from our team.
              </p>

              {inquirySent ? (
                <div style={{ background: 'rgba(61,214,140,0.15)', border: '1px solid var(--accent-emerald)', padding: '1.25rem', borderRadius: 12, color: 'var(--accent-emerald)' }}>
                  <strong>Thank you! Message received.</strong> Satish and the Business Developers team will contact you within 2 hours.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setInquirySent(true);
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: 4 }}>YOUR NAME / BUSINESS NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Joshi / Joshi Sweets & Cafe"
                        style={{ width: '100%', padding: '0.8rem 1rem', background: '#0c0e14', border: '1px solid var(--border-medium)', borderRadius: 10, color: '#fff', fontSize: '0.875rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: 4 }}>PHONE NUMBER / WHATSAPP</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98XXXXXXXX"
                        style={{ width: '100%', padding: '0.8rem 1rem', background: '#0c0e14', border: '1px solid var(--border-medium)', borderRadius: 10, color: '#fff', fontSize: '0.875rem' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: 4 }}>WHAT ARE YOU LOOKING FOR?</label>
                    <select style={{ width: '100%', padding: '0.8rem 1rem', background: '#0c0e14', border: '1px solid var(--border-medium)', borderRadius: 10, color: '#fff', fontSize: '0.875rem' }}>
                      <option>Full Suite (PC Software + Mobile App + Data Dashboard + Ads)</option>
                      <option>Custom Website & Online Ordering System</option>
                      <option>Desktop POS & Offline Inventory Management</option>
                      <option>Data Analytics Dashboard for Shelf & Sales</option>
                      <option>Social Media Reels & Physical Flex Marketing</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary" style={{ alignSelf: 'center', marginTop: '0.5rem', padding: '0.85rem 2.2rem', fontSize: '0.95rem' }}>
                    <span>Request Free Solution Blueprint</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>



      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
                <div className="nav-logo-badge">BD</div>
                <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>Business Developers</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', maxWidth: 420, lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Engineering bespoke software, real-time analytics dashboards, and viral promotional marketing for local vendors and growing businesses.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <MapPin size={14} color="var(--accent-gold)" /> Sinhgad Institute of Engineering Campus, Pune, Maharashtra
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase' }}>Navigation</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
                <li><a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>What We Make</a></li>
                <li><a href="#analytics" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Data Analytics</a></li>
                <li><a href="#marketing" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Reels & Physical Marketing</a></li>
                <li><a href="#demos" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Demo Templates</a></li>
                <li><a href="#team" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>The 4 Developers</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase' }}>Direct Contacts</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <li>Lead: Satish Galande (B.Tech CSE)</li>
                <li>Mobile: Ayush Raj (B.Tech ENTC)</li>
                <li>Cloud: Bijitesh Vishal Singh (B.Tech CSE)</li>
                <li>Analytics: Ronak Pandita (B.Tech IT)</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © {new Date().getFullYear()} Business Developers. Engineered with pride in Pune, India.
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <span>Awwwards-inspired Dark Minimalist Edition</span>
              <a href="#hero" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
