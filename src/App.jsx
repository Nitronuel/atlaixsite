import { useEffect, useLayoutEffect, useState } from "react";
import atlaixLogo from "../resources/atlaix logo.jpg";
import heroImage from "../resources/hero section.png";

const earlyAccessHref = "https://beta.atlaix.com";
const docsHref = "https://docs.atlaix.com/";

function homeAnchor(hash) {
  return `/${hash}`;
}

const navItems = [
  ["Product", "#product"],
  ["Intelligence", "#intelligence"],
  ["Workflow", "#workflow"],
];

const problemPoints = [
  ["Connected Intelligence", "Every intelligence engine works together to provide context rather than isolated data."],
  ["AI-Powered Analysis", "Understand complex market activity without manually interpreting every metric."],
  ["Professional Workflow", "Designed to simplify digital asset research from discovery to decision-making."],
];

const workflowSteps = [
  ["Discover", "Start from trending assets, market activity, and intelligence updates."],
  ["Detect", "Identify meaningful market events across liquidity, pressure, and asset behavior."],
  ["Validate", "Assess asset quality and risk through SafeScan and Wallet Intelligence."],
  ["Monitor", "Track watched assets and receive updates when important changes occur."],
  ["Understand", "Use AI Market Analyst to turn platform data into clear context."],
];

const engines = [
  {
    title: "Overview",
    meta: "Unified dashboard",
    body: "Monitor market activity from one unified dashboard.",
    visual: "linear-gradient(135deg, oklch(30% 0.08 155) 0%, oklch(15% 0.05 156) 52%, oklch(7% 0.03 150) 100%)",
    diagram: "overview",
  },
  {
    title: "Detection Engine",
    meta: "Market events",
    body: "Discover meaningful market events before they become obvious.",
    visual: "linear-gradient(135deg, oklch(28% 0.09 167) 0%, oklch(16% 0.052 158) 48%, oklch(8% 0.032 154) 100%)",
  },
  {
    title: "SafeScan",
    meta: "Risk intelligence",
    body: "Understand holder structure, liquidity, and token risk.",
    visual: "linear-gradient(135deg, oklch(30% 0.08 138) 0%, oklch(15% 0.046 154) 52%, oklch(8% 0.03 150) 100%)",
  },
  {
    title: "Wallet Intelligence",
    meta: "On-chain behavior",
    body: "Track wallets and understand on-chain behavior.",
    visual: "linear-gradient(135deg, oklch(26% 0.075 178) 0%, oklch(14% 0.045 160) 52%, oklch(8% 0.03 156) 100%)",
  },
  {
    title: "Watchlists",
    meta: "Research workspace",
    body: "Create personalized intelligence workspaces for the assets you follow.",
    visual: "linear-gradient(135deg, oklch(31% 0.09 132) 0%, oklch(15% 0.047 148) 48%, oklch(8% 0.03 150) 100%)",
  },
  {
    title: "Intelligence Monitor",
    meta: "Alerts",
    body: "Receive notifications whenever important market events occur.",
    visual: "linear-gradient(135deg, oklch(29% 0.085 170) 0%, oklch(15% 0.048 160) 54%, oklch(8% 0.03 154) 100%)",
  },
  {
    title: "AI Market Analyst",
    meta: "Interpretation layer",
    body: "Transform complex market data into clear, contextual intelligence.",
    visual: "linear-gradient(135deg, oklch(27% 0.078 145) 0%, oklch(14% 0.047 156) 52%, oklch(8% 0.03 150) 100%)",
  },
  {
    title: "Smart Money Intelligence (Coming Soon)",
    meta: "Advanced flows",
    body: "Track institutional wallets, capital rotation, and significant on-chain movements to understand where sophisticated market participants are positioning.",
    visual: "linear-gradient(135deg, oklch(27% 0.075 160) 0%, oklch(14% 0.045 154) 52%, oklch(8% 0.03 150) 100%)",
  },
];

const faqs = [
  [
    "What is Atlaix?",
    "Atlaix is an AI-powered market intelligence platform for digital assets.",
  ],
  [
    "Who is Atlaix for?",
    "Traders, investors, researchers, analysts, and anyone seeking deeper market intelligence.",
  ],
  [
    "How does AI work inside Atlaix?",
    "AI acts as the interpretation layer across the platform, explaining market activity and providing contextual analysis rather than functioning as a generic chatbot.",
  ],
  [
    "What makes Atlaix different?",
    "Instead of offering isolated analytics, Atlaix connects market detection, wallet intelligence, risk analysis, monitoring, and AI interpretation into a unified workflow.",
  ],
  [
    "Is Atlaix available today?",
    "Atlaix is currently in Private Beta with early user onboarding in progress.",
  ],
  [
    "How do I get access to the private beta?",
    "Request early access through the Atlaix web app at beta.atlaix.com.",
  ],
];

function useScrollReveal() {
  useLayoutEffect(() => {
    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
    document.documentElement.classList.add("reveal-ready");

    if (!revealItems.length) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.16,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
}

function Navbar() {
  return (
    <header className="nav-shell">
      <a className="brand" href="/" aria-label="Atlaix home">
        <span className="brand-mark" aria-hidden="true">
          <img src={atlaixLogo} alt="" />
        </span>
        <span>Atlaix</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href.startsWith("#") ? homeAnchor(href) : href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <a className="nav-button" href={earlyAccessHref}>
          Request Early Access
        </a>
        <a className="nav-button secondary" href={docsHref}>
          Docs
        </a>
      </div>
    </header>
  );
}

function Badge({ children, tone = "default" }) {
  return <span className={`badge ${tone}`}>{children}</span>;
}

function MailIcon() {
  return (
    <svg className="footer-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.75 6.75h14.5v10.5H4.75z" />
      <path d="m5.25 7.25 6.75 5.5 6.75-5.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.78 4.1c.35-.14.73.14.64.51l-3.04 14.33c-.08.39-.55.55-.86.29l-4.48-3.3-2.4 2.32c-.25.24-.68.13-.77-.21l-.9-3.34-4.28-1.34c-.4-.12-.43-.66-.05-.83L20.78 4.1Zm-3.7 4.2-6.63 5.06.58 2.13.28-1.72 5.77-5.47Z"
      />
    </svg>
  );
}

function SectionHeader({ eyebrow, title, children, align = "center" }) {
  return (
    <div className={`section-header ${align}`} data-reveal>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function ScreenshotPlaceholder({ label, title, children, size = "large" }) {
  return (
    <figure className={`screenshot-zone ${size}`}>
      <div className="screenshot-topbar">
        <span className="chrome-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>{label}</span>
      </div>
      <div className="screenshot-body">
        <span className="screenshot-label">APP SCREENSHOT NEEDED</span>
        <strong>{title}</strong>
        {children ? <p>{children}</p> : null}
      </div>
    </figure>
  );
}

function HeroVideo() {
  return (
    <figure className="hero-video-frame" aria-label="Atlaix product preview">
      <img src={heroImage} alt="Atlaix crypto intelligence product preview" />
    </figure>
  );
}

function HeroSection() {
  return (
    <section className="hero page" id="top">
      <div className="hero-copy">
        <h1 data-reveal style={{ "--reveal-delay": "80ms" }}>AI-Powered Market Intelligence</h1>
        <p data-reveal style={{ "--reveal-delay": "160ms" }}>
          Transform fragmented market data into actionable intelligence through one unified platform. Detect opportunities, assess risk, monitor market activity, and understand what matters with AI-powered insights
        </p>
        <div className="hero-actions" data-reveal style={{ "--reveal-delay": "240ms" }}>
          <a className="button primary" href={earlyAccessHref}>
            Request Early Access
          </a>
        </div>
      </div>
      <div data-reveal="scale" style={{ "--reveal-delay": "260ms" }}>
        <HeroVideo />
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="problem page" id="product">
      <SectionHeader eyebrow="Why Atlaix" title="Built for Faster, Smarter Market Research" />
      <div className="problem-grid">
        {problemPoints.map(([title, body], index) => (
          <article className="problem-point" key={title} data-reveal style={{ "--reveal-delay": `${index * 90}ms` }}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MarketResearchSection() {
  return (
    <section className="market-research page">
      <div className="market-research-copy" data-reveal>
        <h2>Why Market Research Needs to Change</h2>
        <div>
          <p>
            Digital asset markets generate more information than ever before, yet understanding that information remains unnecessarily complex. Research is often fragmented across multiple sources, forcing users to spend more time gathering data than making informed decisions.
          </p>
          <p>
            Atlaix changes that by bringing market detection, risk analysis, wallet intelligence, monitoring, and AI-powered interpretation into one connected intelligence workflow.
          </p>
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="workflow-band" id="workflow">
      <div className="page">
        <SectionHeader eyebrow="Workflow" title="From market activity to clear intelligence.">
          Every Atlaix module contributes to a single loop: discovery, detection, validation, monitoring, and interpretation.
        </SectionHeader>
        <div className="workflow-line">
          {workflowSteps.map(([title, body], index) => (
            <article className="workflow-step" key={title} data-reveal style={{ "--reveal-delay": `${index * 70}ms` }}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntelligenceEngines() {
  return (
    <section className="engines page" id="intelligence">
      <SectionHeader eyebrow="Intelligence stack" title="One Platform. Complete Market Intelligence.">
        Atlaix combines multiple intelligence engines into one connected workflow, eliminating the need to switch between numerous crypto tools.
      </SectionHeader>
      <div className="engine-grid" data-reveal>
        {engines.map(({ title, body }, index) => (
          <article className="engine-card" key={title} style={{ "--reveal-delay": `${index * 70}ms` }}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="faq page" id="faq">
      <SectionHeader eyebrow="FAQ" title="Frequently asked questions.">
        Clear answers for traders, researchers, and teams evaluating Atlaix.
      </SectionHeader>
      <div className="faq-list" data-reveal>
        {faqs.map(([question, answer], index) => {
          const isActive = activeFaq === index;
          const answerId = `faq-answer-${index}`;

          return (
            <article className={`faq-item ${isActive ? "active" : ""}`} key={question}>
              <button
                type="button"
                aria-expanded={isActive}
                aria-controls={answerId}
                onClick={() => setActiveFaq(index)}
              >
                <small>{String(index + 1).padStart(2, "0")}</small>
                <span>{question}</span>
                <i aria-hidden="true" />
              </button>
              <div className="faq-answer" id={answerId} aria-hidden={!isActive}>
                <p>{answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="brand footer-wordmark" href="/" aria-label="Atlaix home">
            <span className="brand-mark" aria-hidden="true">
              <img src={atlaixLogo} alt="" />
            </span>
            <span>Atlaix</span>
          </a>
          <p>
            The AI-powered intelligence layer for real-time crypto analysis. Turn raw market data into actionable market intelligence.
          </p>
          <div className="footer-social-icons" aria-label="Social links">
            <a href="https://x.com/Atlaix_" aria-label="Atlaix on X">
              <XIcon />
            </a>
            <a href="https://t.me/atlaix" aria-label="Atlaix on Telegram">
              <TelegramIcon />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <a className="footer-contact" href="mailto:info@atlaix.com">
            <span aria-hidden="true">
              <MailIcon />
            </span>
            info@atlaix.com
          </a>
          <h3 className="footer-subhead">Follow us</h3>
          <a className="footer-contact" href="https://x.com/Atlaix_">
            <span aria-hidden="true">
              <XIcon />
            </span>
            X (Twitter)
          </a>
          <a className="footer-contact" href="https://t.me/atlaix">
            <span aria-hidden="true">
              <TelegramIcon />
            </span>
            Telegram
          </a>
        </div>

        <nav className="footer-column footer-link-list" aria-label="Quick links">
          <h3>Quick Links</h3>
          <a href={homeAnchor("#product")}>The Problem</a>
          <a href={homeAnchor("#intelligence")}>Solution</a>
          <a href={homeAnchor("#workflow")}>How it Works</a>
        </nav>

        <nav className="footer-column footer-link-list" aria-label="Resources">
          <h3>Resources</h3>
          <a href={earlyAccessHref}>Request Early Access</a>
          <a href={docsHref}>Docs</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>Atlaix provides informational market intelligence and risk context. It is not financial advice and does not guarantee trading outcomes.</p>
        <p>&copy; 2026 Atlaix. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  useScrollReveal();

  return (
    <main>
      <div className="ambient" aria-hidden="true" />
      <Navbar />
      <HeroSection />
      <IntelligenceEngines />
      <MarketResearchSection />
      <WorkflowSection />
      <ProblemSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

export default App;
