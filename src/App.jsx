import { useEffect, useState } from "react";
import atlaixLogo from "../resources/atlaix logo.png";
import heroImage from "../resources/hero section.webp";
import detectionEngineImage from "../resources/detection engine.webp";
import safeScanImage from "../resources/safe scan.webp";
import walletIntelligenceImage from "../resources/wallet intelligence.webp";
import watchlistImage from "../resources/watchlist.webp";

const docsUrl = "https://docs.atlaix.com/";
const betaUrl = "https://beta.atlaix.com";
const engineAutoAdvanceMs = 3000;

const navItems = [
  ["Product", "#product"],
  ["Intelligence", "#intelligence"],
  ["Workflow", "#workflow"],
  ["Roadmap", "#roadmap"],
  ["Docs", docsUrl],
];

const problemPoints = [
  ["Scattered research", "Charts, scanners, explorers, wallet tools, and social feeds all hold different pieces of the same market story."],
  ["Missing context", "Raw metrics show movement, but users still have to decide whether the movement has quality, risk, or useful confirmation."],
  ["Slow decisions", "Crypto markets move faster than manual research workflows. Atlaix helps users focus on the changes that deserve attention."],
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
    title: "Detection Engine",
    meta: "Signal layer",
    body: "Continuously monitors market activity to surface meaningful events and explain potential significance.",
    visual: "linear-gradient(135deg, #142b3a 0%, #101722 48%, #07090e 100%)",
    image: detectionEngineImage,
  },
  {
    title: "SafeScan",
    meta: "Risk review",
    body: "Evaluates risk profile, concentration, liquidity, contract quality, and structural concerns.",
    visual: "linear-gradient(135deg, #3a2418 0%, #17110d 52%, #080706 100%)",
    image: safeScanImage,
  },
  {
    title: "Wallet Intelligence",
    meta: "Behavior context",
    body: "Adds context around wallet behavior, accumulation patterns, portfolio movement, and significant participants.",
    visual: "linear-gradient(135deg, #242b46 0%, #111522 52%, #080910 100%)",
    image: walletIntelligenceImage,
  },
  {
    title: "Watchlists",
    meta: "Research workspace",
    body: "Turns important assets into a personal intelligence workspace for ongoing research.",
    visual: "linear-gradient(135deg, #2d2f1d 0%, #17180f 48%, #080807 100%)",
    image: watchlistImage,
  },
  {
    title: "Intelligence Monitor",
    meta: "Ongoing updates",
    body: "Watches assets and delivers updates when new detections or risk changes occur.",
    visual: "linear-gradient(135deg, #17343a 0%, #0e181b 54%, #07090a 100%)",
  },
  {
    title: "AI Market Analyst",
    meta: "Plain-language context",
    body: "Connects engine outputs and explains market conditions in plain language.",
    visual: "linear-gradient(135deg, #34233b 0%, #17111c 52%, #08070a 100%)",
  },
];

const useCases = [
  ["Crypto traders", "Identify market events worth investigating before they disappear into noise."],
  ["Wallet trackers", "Understand how important wallets interact with assets over time."],
  ["Risk-conscious users", "Review concentration, liquidity, contract quality, and structural risk before making decisions."],
  ["Researchers and analysts", "Use connected intelligence to support deeper asset research without rebuilding context from scratch."],
];

const roadmap = [
  ["Foundation", "Core modules: Overview, Detection Engine, SafeScan, Wallet Intelligence, Watchlists, Intelligence Monitor, and AI Market Analyst."],
  ["Intelligence Expansion", "Planned work includes expanded detection coverage, advanced smart money intelligence, narrative intelligence, stronger AI reasoning, and monitoring automation."],
  ["Institutional Intelligence", "Future capabilities may include portfolio intelligence, cross-chain intelligence, advanced research tools, institutional analytics, and enterprise solutions."],
];

const faqs = [
  [
    "What is Atlaix?",
    "Atlaix is an AI-powered crypto intelligence platform. It processes on-chain activity, wallet behavior, capital flows, and vetted social sentiment to generate structured insights. The goal is to help users understand why market movements occur, not just observe price changes.",
  ],
  [
    "How is Atlaix different from other analytical tools?",
    "Atlaix is an AI-powered crypto intelligence platform. It processes on-chain activity, wallet behavior, capital flows, and vetted social sentiment to generate structured insights. The goal is to help users understand why market movements occur, not just observe price changes.",
  ],
];

function usePointerSpotlight() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return undefined;
    }

    const root = document.documentElement;
    let frameId = 0;
    let currentX = window.innerWidth * 0.5;
    let currentY = window.innerHeight * 0.16;
    let targetX = currentX;
    let targetY = currentY;

    const syncSpotlight = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      root.style.setProperty("--spotlight-x", `${currentX}px`);
      root.style.setProperty("--spotlight-y", `${currentY}px`);

      if (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2) {
        frameId = window.requestAnimationFrame(syncSpotlight);
        return;
      }

      frameId = 0;
    };

    const moveSpotlight = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!frameId) {
        frameId = window.requestAnimationFrame(syncSpotlight);
      }
    };

    root.style.setProperty("--spotlight-x", `${currentX}px`);
    root.style.setProperty("--spotlight-y", `${currentY}px`);

    window.addEventListener("pointermove", moveSpotlight, { passive: true });
    window.addEventListener("pointerdown", moveSpotlight, { passive: true });

    return () => {
      window.removeEventListener("pointermove", moveSpotlight);
      window.removeEventListener("pointerdown", moveSpotlight);
      window.cancelAnimationFrame(frameId);
    };
  }, []);
}

function Navbar() {
  return (
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="Atlaix home">
        <span className="brand-mark" aria-hidden="true">
          <img src={atlaixLogo} alt="" />
        </span>
        <span>Atlaix</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-button" href="#waitlist">
        Join Waitlist
      </a>
    </header>
  );
}

function Badge({ children, tone = "default" }) {
  return <span className={`badge ${tone}`}>{children}</span>;
}

function ButtonArrow() {
  return <span aria-hidden="true" className="button-arrow" />;
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

function RoadmapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s6-5.43 6-11a6 6 0 1 0-12 0c0 5.57 6 11 6 11Z" />
      <path d="M12 12.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
    </svg>
  );
}

function SectionHeader({ eyebrow, title, children, align = "center" }) {
  return (
    <div className={`section-header ${align}`}>
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
        <h1>Crypto market intelligence that explains what matters.</h1>
        <p>
          Atlaix helps traders, researchers, and digital asset teams understand market activity through detection, risk analysis, wallet intelligence, monitoring, and AI-powered interpretation.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#waitlist">
            Join Waitlist
            <ButtonArrow />
          </a>
          <a className="button secondary" href={docsUrl}>
            Read Docs
          </a>
        </div>
        <p className="hero-note">Access is available by invitation while Atlaix validates the platform with early users.</p>
      </div>
      <HeroVideo />
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="problem page" id="product">
      <SectionHeader eyebrow="Product" title="Crypto research is scattered across too many tools.">
        Atlaix brings market intelligence into one workflow, so users spend less time gathering information and more time understanding what changed.
      </SectionHeader>
      <div className="problem-grid">
        {problemPoints.map(([title, body]) => (
          <article className="problem-point" key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
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
            <article className="workflow-step" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
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
  const [activeEngine, setActiveEngine] = useState(0);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setActiveEngine((current) => (current + 1) % engines.length);
    }, engineAutoAdvanceMs);

    return () => window.clearTimeout(timerId);
  }, [activeEngine]);

  const currentEngine = engines[activeEngine];
  const showPreviousEngine = () => {
    setActiveEngine((current) => (current - 1 + engines.length) % engines.length);
  };
  const showNextEngine = () => {
    setActiveEngine((current) => (current + 1) % engines.length);
  };

  return (
    <section className="engines page" id="intelligence">
      <SectionHeader eyebrow="Intelligence stack" title="A modular system for market understanding.">
        Atlaix connects detection, validation, monitoring, wallet context, and AI interpretation into one research workflow.
      </SectionHeader>
      <div className="engine-carousel">
        <div className="engine-tabs" role="tablist" aria-label="Atlaix intelligence modules">
          {engines.map(({ title, body }, index) => {
            const isActive = index === activeEngine;

            return (
              <button
                className={`engine-tab ${isActive ? "active" : ""}`}
                key={title}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="engine-visual-panel"
                id={`engine-tab-${index}`}
                onClick={() => setActiveEngine(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                {isActive ? (
                  <div>
                    <p>{body}</p>
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>
        <div
          className={`engine-visual ${currentEngine.image ? "has-image" : ""}`}
          id="engine-visual-panel"
          role="tabpanel"
          aria-labelledby={`engine-tab-${activeEngine}`}
          style={{ "--engine-fill": currentEngine.visual }}
        >
          {currentEngine.image ? (
            <>
              <img className="engine-visual-image" src={currentEngine.image} alt={`${currentEngine.title} product preview`} />
              <div className="engine-visual-caption">
                <strong>{currentEngine.title}</strong>
              </div>
            </>
          ) : (
            <div>
              <strong>{currentEngine.title}</strong>
              <p>Temporary visual fill. Replace this panel with the product image for this module when ready.</p>
            </div>
          )}
        </div>
        <div className="engine-controls" aria-label="Intelligence stack carousel controls">
          <button type="button" aria-label="Previous intelligence module" onClick={showPreviousEngine}>
            <span aria-hidden="true">←</span>
          </button>
          <div className="engine-control-status">
            <span>
              {String(activeEngine + 1).padStart(2, "0")} / {String(engines.length).padStart(2, "0")}
            </span>
            <div className="engine-progress" aria-hidden="true">
              <i key={activeEngine} />
            </div>
          </div>
          <button type="button" aria-label="Next intelligence module" onClick={showNextEngine}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="use-cases page" id="use-cases">
      <SectionHeader eyebrow="Use cases" title="Built for serious digital asset research.">
        Atlaix helps users decide what deserves more research, what needs caution, and what changed while they were focused elsewhere.
      </SectionHeader>
      <div className="use-case-list">
        {useCases.map(([title, body]) => (
          <article className="use-case" key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section className="roadmap page" id="roadmap">
      <div className="status-copy">
        <Badge tone="success">Current stage</Badge>
        <h2>Currently in Private Beta.</h2>
        <p>
          Atlaix is feature-complete for its initial release. Current development focuses on stability, performance, user experience, market validation, and strengthening the intelligence engines before broader public access.
        </p>
      </div>
      <div className="roadmap-list">
        {roadmap.map(([phase, body], index) => (
          <article className="roadmap-row" key={phase}>
            <span className="roadmap-icon">
              <RoadmapIcon />
            </span>
            <div>
              <h3>{phase}</h3>
              <p>{body}</p>
            </div>
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
      <div className="faq-list">
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

function FinalCTA() {
  return (
    <section className="final-cta page" id="waitlist">
      <div>
        <Badge tone="success">Private Beta</Badge>
        <h2>Understand digital asset markets with more context.</h2>
        <p>Join the Atlaix waitlist for Private Beta access and follow the development of an AI-powered market intelligence platform.</p>
      </div>
      <div className="hero-actions">
        <a className="button primary" href={betaUrl}>
          Join Waitlist
          <ButtonArrow />
        </a>
        <a className="button secondary" href={docsUrl}>
          Read Docs
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="brand footer-wordmark" href="#top" aria-label="Atlaix home">
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
          <a href="#product">The Problem</a>
          <a href="#intelligence">Solution</a>
          <a href="#workflow">How it Works</a>
          <a href="#use-cases">Featured</a>
        </nav>

        <nav className="footer-column footer-link-list" aria-label="Resources">
          <h3>Resources</h3>
          <a href={docsUrl}>Docs</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
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
  usePointerSpotlight();

  return (
    <main>
      <div className="ambient" aria-hidden="true" />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <WorkflowSection />
      <IntelligenceEngines />
      <UseCasesSection />
      <RoadmapSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default App;
