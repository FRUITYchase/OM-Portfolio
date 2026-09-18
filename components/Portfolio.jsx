"use client";

import React, { useEffect, useState, useRef } from "react";
import { Github, Mail, ExternalLink, X, Code2, FlaskConical, Rocket, Trophy, GraduationCap, Linkedin, Minus } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "../data/projects";
import Header from "./Header";
import TypewriterTitle from "./TypewriterTitle";
import Reveal from "./Reveal";

const SKILLS = [
  {
    group: "Technical & Data",
    items: ["Data Analysis & Interpretation", "Microsoft Excel (Intermediate)", "Quantitative Reporting", "Operations Management", "Financial Reconciliation"],
  },
  {
    group: "Domain",
    items: ["Energy Finance", "Facilities Management", "Telecommunications", "Quality Compliance", "Supply Chain Optimization"],
  },
  {
    group: "Soft Skills",
    items: ["Client & Stakeholder Management", "Analytical Thinking", "Communication & Negotiation", "Leadership", "Problem Solving", "Adaptability"],
  },
];

const WHAT_I_CAN_DO = [
  {
    group: "Operations & Quality Oversight",
    description:
      "Directing operational strategy, vendor compliance, and enforcing strict quality compliance frameworks across multi-site assets and industrial processes to sustain zero-downtime service delivery.",
    visual: "qa",
    size: "large",
    items: [
      "Operations Management",
      "Quality Compliance",
      "Risk Management",
      "Vendor Management",
      "Supply Chain Delivery",
      "Facility Management",
      "Zero-Downtime Delivery",
    ],
  },
  {
    group: "Financial Reconciliation & Data Reporting",
    description:
      "Building Excel tracking and reporting models, conducting multi-site asset audits to mitigate financial leakages, and translating operational data into commercial insight for executive decision-making.",
    visual: "va",
    items: [
      "Data Analysis",
      "Financial Reconciliation",
      "Quantitative Reporting",
      "Microsoft Excel",
      "Applied Econometrics",
      "Audit Frameworks",
    ],
  },
];

const SOCIALS = [
  { label: "Email", value: "tunmisemayowa3@gmail.com", href: "mailto:tunmisemayowa3@gmail.com", icon: Mail, color: "#000000" },
  { label: "Phone", value: "+234 903 283 6299", href: "tel:+2349032836299", icon: ExternalLink, color: "#000000" },
  { label: "LinkedIn", value: "LinkedIn Profile", href: "#", icon: Linkedin, color: "#000000" },
];

const CARDS = [
  "Analytical Thinker",
  "Detail-Oriented",
  "Problem Solver",
  "Data-Driven",
  "Adaptable",
  "Negotiator",
  "Growth-Oriented",
  "Leader",
  "Strategic",
  "Client-Focused",
];

const CARD_SCATTER = [
  { rot: -7, x: 6, y: -4 },
  { rot: 5, x: -8, y: 3 },
  { rot: -3, x: 10, y: 6 },
  { rot: 9, x: -5, y: -6 },
  { rot: -10, x: 4, y: 5 },
  { rot: 4, x: -10, y: -2 },
  { rot: -5, x: 9, y: -5 },
  { rot: 8, x: -3, y: 7 },
  { rot: -8, x: 7, y: 2 },
  { rot: 3, x: -6, y: -7 },
];

const CURRENTLY = [
  { icon: GraduationCap, label: "Studying", detail: "M.Sc. Energy Finance" },
  { icon: FlaskConical, label: "Analyzing", detail: "Energy Finance & Applied Econometrics" },
  { icon: Rocket, label: "Executing", detail: "Industrial Operations & Compliance" },
];

const EXPERIENCE = [
  {
    title: "Electrical Engineer",
    org: "National Agricultural Seeds Council (NASC)",
    date: "May 2025 - Present",
    desc: "Led operational oversight for industrial-scale processing exceeding 100 tons per cycle; partnered with institutional stakeholders (Flour Mills Nigeria) to audit and enforce strict quality compliance frameworks. Managed stakeholder relationships to streamline supply chain delivery, resolving operational bottlenecks across organizational bounds.",
    certificates: [],
    images: [],
  },
  {
    title: "Facility Manager (Fill-In Roles)",
    org: "Alpha Mead Group",
    date: "Dec 2023 - Dec 2024",
    desc: "Directed operational strategy and vendor contract compliance for premium corporate accounts (Ecobank Training Centre, Living Gold Terraces, Banana Island), ensuring zero downtime through proactive risk management.",
    certificates: [],
    images: [],
  },
  {
    title: "Data & Audit Specialist / Financial Reconciler",
    org: "IHS Towers & Airtel Partnerships / Alpha Mead Group",
    date: "Jan 2023 - Nov 2023",
    desc: "Designed and executed a data-driven audit framework across multi-site assets, identifying resource variances and directly mitigating over $3,000,000 in financial leakages. Built tracking and reporting models in Excel, cutting manual data anomalies and accelerating management reporting by 50%. Maintained collaborative working relationships with corporate clients including IHS Towers and Airtel, reconciling accounts and resolving operational issues.",
    certificates: [],
    images: [],
  },
  {
    title: "Staff Officer / Administrative Support",
    org: "Huawei Technologies",
    date: "Mar 2024 - Jun 2024",
    desc: "Coordinated scheduling and operations across 30+ meeting spaces daily using digital facility management systems. Supported rollout of a scan-to-book reservation system, reducing manual process errors and improving operational efficiency.",
    certificates: [],
    images: [],
  },
];

function ExperienceImageStack({ images, title }) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  if (count === 0) return null;

  return (
    <div
      className="experience-image-stack"
      onClick={() => setIndex((prev) => (prev + 1) % count)}
    >
      {images.map((src, i) => {
        const offset = (i - index + count) % count;
        const isExiting = offset === count - 1;
        if (offset > 2 && !isExiting) return null;

        const scatter = CARD_SCATTER[i % CARD_SCATTER.length];
        let style;

        if (isExiting) {
          style = {
            "--tx": `${scatter.x + 100}px`,
            "--ty": `${scatter.y - 40}px`,
            "--rot": `${scatter.rot + 25}deg`,
            "--sc": 0.88,
            "--op": 0,
            zIndex: 5,
          };
        } else {
          const depth = offset;
          const isFront = depth === 0;
          const calm = 0.4;
          const dir = depth % 2 === 1 ? -1 : 1;
          style = {
            "--tx": isFront ? "0px" : `${scatter.x * calm + depth * 8}px`,
            "--ty": isFront ? "0px" : `${scatter.y * calm + dir * depth * 10}px`,
            "--rot": isFront ? "0deg" : `${scatter.rot * calm + depth * (scatter.rot >= 0 ? 1.5 : -1.5)}deg`,
            "--sc": isFront ? 1 : 1 - depth * 0.06,
            "--op": isFront ? 1 : 0.75 - (depth - 1) * 0.2,
            zIndex: 30 - depth * 10,
          };
        }

        return (
          <img
            key={src}
            src={src}
            alt={`${title} ${i + 1}`}
            className={`stacked-image${offset === 0 ? " stacked-image-front" : ""}`}
            style={style}
          />
        );
      })}
    </div>
  );
}

function WorkAlbumStack({ projects, activeIndex, onAdvance }) {
  const count = projects.length;

  return (
    <div className="work-mobile-stack" onClick={onAdvance}>
      {projects.map((project, i) => {
        const offset = (i - activeIndex + count) % count;
        const isExiting = offset === count - 1;
        if (offset > 2 && !isExiting) return null;

        const scatter = CARD_SCATTER[i % CARD_SCATTER.length];
        let style;

        if (isExiting) {
          style = {
            "--tx": `${scatter.x + 100}px`,
            "--ty": `${scatter.y - 40}px`,
            "--rot": `${scatter.rot + 25}deg`,
            "--sc": 0.88,
            "--op": 0,
            zIndex: 5,
          };
        } else {
          const depth = offset;
          const isFront = depth === 0;
          const calm = 0.4;
          const dir = depth % 2 === 1 ? -1 : 1;
          style = {
            "--tx": isFront ? "0px" : `${scatter.x * calm + depth * 8}px`,
            "--ty": isFront ? "0px" : `${scatter.y * calm + dir * depth * 10}px`,
            "--rot": isFront ? "0deg" : `${scatter.rot * calm + depth * (scatter.rot >= 0 ? 1.5 : -1.5)}deg`,
            "--sc": isFront ? 1 : 1 - depth * 0.06,
            "--op": isFront ? 1 : 0.75 - (depth - 1) * 0.2,
            zIndex: 30 - depth * 10,
          };
        }

        return (
          <img
            key={project.num}
            src={project.image}
            alt={project.title}
            className={`stacked-image${offset === 0 ? " stacked-image-front" : ""}`}
            style={style}
            draggable={false}
          />
        );
      })}
    </div>
  );
}

export default function Portfolio() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const rootRef = useRef(null);
  const marqueeTrackRef = useRef(null);
  const heroRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [cardPaused, setCardPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMinimized, setIsModalMinimized] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const activeProject = PROJECTS[activeIndex] || PROJECTS[0];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goTo = (index) => {
    const normalized = ((index % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;
    setActiveIndex(normalized);
  };

  useEffect(() => {
    const handleMouse = (e) => {
      if (!rootRef.current) return;
      const rect = rootRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const track = marqueeTrackRef.current;
    if (!track) return;

    const syncMarqueeSpeed = () => {
      const enterSeconds = 8;
      const pxPerSecond = window.innerWidth / enterSeconds;
      const loopDistance = track.scrollWidth / 2;
      const loopSeconds = loopDistance / pxPerSecond;
      heroRef.current?.style.setProperty("--marquee-loop-duration", `${loopSeconds}s`);
    };

    syncMarqueeSpeed();
    window.addEventListener("resize", syncMarqueeSpeed);
    return () => window.removeEventListener("resize", syncMarqueeSpeed);
  }, []);

  useEffect(() => {
    if (cardPaused) return;
    const id = setInterval(() => {
      setCardIndex((prev) => (prev + 1) % CARDS.length);
    }, 1500);
    return () => clearInterval(id);
  }, [cardPaused]);

  return (
    <div ref={rootRef} className="portfolio-root">
      <svg className="bg-lines" viewBox="0 0 1440 5000" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width:'100%',height:'100%'}}>
        <g opacity="0.28">
          <path d="M-100 200 C 200 100, 500 300, 800 200 C 1100 100, 1300 280, 1540 180" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
          <path d="M0 350 C 300 250, 600 400, 900 320 C 1200 240, 1400 380, 1440 300" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
          <path d="M-80 500 C 240 420, 540 580, 840 500 C 1140 420, 1360 560, 1500 480" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
        </g>
        <g opacity="0.32">
          <path d="M0 700 C 320 620, 620 780, 920 700 C 1220 620, 1420 760, 1440 680" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
          <path d="M-100 850 C 260 780, 560 920, 860 860 C 1160 800, 1380 940, 1540 880" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
          <path d="M0 1000 C 300 940, 600 1060, 900 1000 C 1200 940, 1400 1080, 1440 1020" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
        </g>
      </svg>
      <Header />

      {/* HERO */}
      <section id="hero" className="hero-root" ref={heroRef}>
        <div className="bg-name-marquee">
          <div className="bg-name-track" ref={marqueeTrackRef}>
            <span className="bg-name-text">OGINNI OLUWATUNMISE</span>
            <span className="bg-name-text">OGINNI OLUWATUNMISE</span>
          </div>
        </div>

        {["t1", "t2", "t3", "t4", "b1", "b2", "b3", "b4"].map((pos) => (
          <div
            key={pos}
            className={`bg-name-marquee bg-name-marquee--mobile-extra bg-name-marquee--${pos}`}
            aria-hidden="true"
          >
            <div className="bg-name-track">
              <span className="bg-name-text">OGINNI OLUWATUNMISE</span>
              <span className="bg-name-text">OGINNI OLUWATUNMISE</span>
            </div>
          </div>
        ))}

        <div className="concentric-circles">
          <div className="circle circle-1" />
          <div className="circle circle-2" />
          <div className="circle circle-3" />
        </div>

        <div className="profile-wrap">
          <img src="/images/profile.png" alt="OGINNI OLUWATUNMISE" className="profile-image" draggable={false} />
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span className="scroll-text">Scroll Down</span>
        </div>
      </section>

      {/* WORK GALLERY */}
      <section id="work" className="section">
        <Reveal>
          <div className="work-header">
            <div>
              <div className="section-label">Selected Projects</div>
              <TypewriterTitle text="Work Gallery" />
              <div className="section-desc">A collection of quantitative models, operational audits, and systems I've managed.</div>
            </div>
            <Link href="/work" className="work-album-btn-top">
              View More Projects <ExternalLink size={14} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="work-album">
            <div className="work-album-inner">
              {PROJECTS.map((project, index) => {
                const total = PROJECTS.length;
                let diff = (index - activeIndex + total) % total;
                if (diff > total / 2) diff -= total;

                const isCenter = diff === 0;
                const distance = Math.abs(diff);
                const dir = isCenter ? 0 : diff / distance;

                const style = isCenter
                  ? {
                      transform: "translate(-50%, -50%) scale(1)",
                      zIndex: 5,
                      opacity: 1,
                    }
                  : {
                      transform: `translate(calc(-50% + ${
                        dir * (200 + (distance - 1) * 130)
                      }px), -50%) scale(${Math.max(0.55, 1 - distance * 0.28)})`,
                      zIndex: 5 - distance,
                      opacity: distance <= 2 ? Math.max(0, 0.85 - (distance - 1) * 0.55) : 0,
                      pointerEvents: distance <= 2 ? "auto" : "none",
                    };

                return (
                  <div
                    key={project.num || index}
                    className={`work-album-item${isCenter ? " work-album-item-center" : ""}`}
                    style={style}
                    onClick={() => !isCenter && goTo(index)}
                  >
                    <img src={project.image} alt={project.title} className="work-album-img" draggable={false} />
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="work-mobile-stack-wrap">
            <WorkAlbumStack
              projects={PROJECTS}
              activeIndex={activeIndex}
              onAdvance={() => goTo(activeIndex + 1)}
            />
          </div>
        </Reveal>

        <Reveal delay={200}>
          {activeProject && (
            <div className="work-info" key={activeProject.num || activeIndex}>
              <h3 className="work-info-title">{activeProject.title}</h3>
              <p className="work-info-desc">{activeProject.desc}</p>

              <a
                href={activeProject.link || "#"}
                className="work-info-link"
                target={activeProject.link && activeProject.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {activeProject.linkText || "View Details"}
              </a>
            </div>
          )}
        </Reveal>
      </section>

      {/* WHAT I CAN DO */}
      <section id="what-i-can-do" className="section">
        <div className="what-i-can-do-grid">
          <div className="what-i-can-do-left">
            <Reveal>
              <div className="section-label">My Capabilities</div>
              <TypewriterTitle text="What I Can Do" />
              <div className="what-i-can-do-desc">
                I leverage strong quantitative skills, technical expertise in engineering, and financial analysis to optimize operations, perform audit reconciliations, and sustain high-value stakeholder relationships.
              </div>
            </Reveal>
          </div>

          <div className="what-i-can-do-right">
            {WHAT_I_CAN_DO.map((group, index) => (
              <Reveal key={group.group} delay={150 + index * 120}>
                <div className={`bento-card ${group.size === "large" ? "bento-large" : "bento-medium"}`}>
                  <div className="bento-header">
                    <div className="bento-number">{String(index + 1).padStart(2, "0")}</div>
                    <div className="bento-category">{group.group}</div>
                  </div>

                  <p className="bento-desc">{group.description}</p>

                  <div className="bento-skills">
                    {group.items.map((item) => (
                      <span key={item} className="bento-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <Reveal>
          <div className="section-label">ABOUT ME</div>
          <TypewriterTitle text={isMobile ? "Data-Driven Analyst.\nOperations Specialist." : "Data-Driven Analyst. Operations Specialist."} />
        </Reveal>

        <Reveal delay={100}>
          <div className="about-profile-card">
            <div className="about-profile-header">
              <div className="about-profile-image-wrapper">
                <img src="/images/about/profile.png" alt="Profile" className="about-profile-image" draggable={false} />
              </div>
              <div className="about-profile-info">
                <div className="about-profile-name">
                  OGINNI OLUWATUNMISE FRUITFULNESS
                  <img src="/images/about/badge.png" alt="Verified" className="about-profile-badge" draggable={false} />
                </div>
                <div className="about-profile-stats">
                  <div className="about-stat-item">
                    <span className="about-stat-label">LOCATION</span>
                    <span className="about-stat-value">Lagos, Nigeria</span>
                  </div>
                  <div className="about-stat-item">
                    <span className="about-stat-label">SAVINGS AUDITED</span>
                    <span className="about-stat-value">$3M+</span>
                  </div>
                  <div className="about-stat-item">
                    <span className="about-stat-label">B.ENG GRADUATED</span>
                    <span className="about-stat-value">2023</span>
                  </div>
                </div>
                <div className="about-description">
                  <p>
                    Data-driven Electrical & Electronics Engineering graduate and M.Sc. Energy Finance candidate, with a track record of financial reconciliation, quantitative reporting, and high-value stakeholder management across energy, facilities, and telecoms sectors. Skilled in translating operational data into commercial insight, resolving cross-functional bottlenecks, and sustaining zero-downtime service delivery for clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-bottom-row">
              <div className="currently-strip">
                <div className="currently-strip-label">CURRENTLY</div>
                <div className="currently-strip-items">
                  {CURRENTLY.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div className="currently-item" key={item.label}>
                        <span className="currently-icon">
                          <Icon size={16} strokeWidth={2} />
                        </span>
                        <div className="currently-text">
                          <div className="currently-item-label">{item.label}</div>
                          <div className="currently-item-detail">{item.detail}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="card-stack">
                <div
                  className="card-stack-container"
                  onClick={() => setCardIndex((prev) => (prev + 1) % CARDS.length)}
                  onMouseEnter={() => setCardPaused(true)}
                  onMouseLeave={() => setCardPaused(false)}
                >
                  {CARDS.map((trait, i) => {
                    const offset = (i - cardIndex + CARDS.length) % CARDS.length;
                    const isExiting = offset === CARDS.length - 1;
                    if (offset > 2 && !isExiting) return null;

                    const scatter = CARD_SCATTER[i];
                    let style;

                    if (isExiting) {
                      style = {
                        "--tx": `${scatter.x + 140}px`,
                        "--ty": `${scatter.y - 60}px`,
                        "--rot": `${scatter.rot + 40}deg`,
                        "--sc": 0.85,
                        "--op": 0,
                        zIndex: 5,
                      };
                    } else {
                      const depth = offset;
                      style = {
                        "--tx": `${scatter.x + depth * 10}px`,
                        "--ty": `${scatter.y + depth * 8}px`,
                        "--rot": `${scatter.rot + depth * (scatter.rot >= 0 ? 5 : -5)}deg`,
                        "--sc": 1 - depth * 0.045,
                        "--op": depth === 0 ? 1 : 0.55 + (2 - depth) * 0.15,
                        zIndex: 30 - depth * 10,
                      };
                    }

                    return (
                      <div
                        key={trait}
                        className={`card-stack-card${offset === 0 ? " card-stack-card-front" : ""}`}
                        style={style}
                      >
                        <div className="card-stack-label">TRAIT</div>
                        <div className="card-stack-value">{trait}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <Reveal>
          <div className="section-label">Academic Background</div>
          <TypewriterTitle text="Education & Degrees" />
        </Reveal>

        <Reveal delay={100}>
          <div className="awards-column" style={{ marginTop: '20px' }}>
            <div className="award-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
                <div className="award-icon"><GraduationCap size={18} /></div>
                <div className="award-title">M.Sc. Energy Finance (In View)</div>
                <span style={{ marginLeft: 'auto', fontSize: '0.85rem', opacity: 0.7 }}>2026 - Present</span>
              </div>
              <div style={{ marginTop: '8px', fontSize: '0.9rem', opacity: 0.85 }}>
                University of Ibadan Centre for Petroleum, Energy, Economics & Law
              </div>
              <div style={{ marginTop: '4px', fontSize: '0.8rem', opacity: 0.65 }}>
                Relevant modules: Energy Finance & Project Management, Applied Econometrics, Micro & Macro Economics
              </div>
            </div>

            <div className="award-item" style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
                <div className="award-icon"><GraduationCap size={18} /></div>
                <div className="award-title">B.Eng. Electrical & Electronics Engineering</div>
                <span style={{ marginLeft: 'auto', fontSize: '0.85rem', opacity: 0.7 }}>2017 - 2023</span>
              </div>
              <div style={{ marginTop: '8px', fontSize: '0.9rem', opacity: 0.85 }}>
                Osun State University, Osogbo
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* EXPERIENCE / TRAININGS */}
      <section id="experience" className="section">
        <Reveal>
          <div className="section-label">Professional Background</div>
          <TypewriterTitle text="Work Experience" />
          <div className="section-desc">
            A history of driving operational efficiency, risk management, and financial auditing across sectors.
          </div>
        </Reveal>

        <div className="experience-list">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className={`experience-card`}>
              <div className="experience-text">
                <div className="experience-header">
                  <div className="experience-title">{exp.title}</div>
                  <div className="experience-date">{exp.date}</div>
                </div>
                <div className="experience-org">{exp.org}</div>
                <div className="experience-desc">{exp.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="contact-grid">
          <div className="contact-left">
            <Reveal>
              <div className="contact-eyebrow">GET IN TOUCH</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="contact-headline">
                LET'S<br />
                <span className="contact-headline-accent">WORK</span><br />
                TOGETHER
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="contact-description">Open to new opportunities and strategic collaborations.</p>
            </Reveal>
            <Reveal delay={300}>
              <p className="contact-secondary">
                I bring strong quantitative aptitude, operational excellence, and stakeholder management experience to customer-focused financial and operational roles.
              </p>
            </Reveal>
          </div>

          <div className="contact-right">
            <div className="contact-cards">
              <Reveal delay={200}>
                <a href="mailto:tunmisemayowa3@gmail.com" className="contact-card" target="_blank" rel="noopener noreferrer">
                  <span className="contact-card-number">01</span>
                  <div className="contact-card-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-card-info">
                    <div className="contact-card-label">EMAIL</div>
                    <div className="contact-card-value">tunmisemayowa3@gmail.com</div>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={280}>
                <a href="tel:+2349032836299" className="contact-card">
                  <span className="contact-card-number">02</span>
                  <div className="contact-card-icon">
                    <ExternalLink size={20} />
                  </div>
                  <div className="contact-card-info">
                    <div className="contact-card-label">PHONE</div>
                    <div className="contact-card-value">+234 903 283 6299</div>
                  </div>
                </a>
              </Reveal>
            </div>
            <Reveal delay={440}>
              <button className="contact-cta" onClick={() => { setIsModalOpen(true); setIsModalMinimized(false); }}>
                SEND ME A MESSAGE →
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className={`contact-modal${isModalMinimized ? " contact-modal--minimized" : ""}`}>
          <div className="contact-modal-header" onClick={() => isModalMinimized && setIsModalMinimized(false)}>
            <h3 className="contact-modal-title">Send Me a Message</h3>
            <div className="contact-modal-controls">
              <button
                type="button"
                className="contact-modal-icon-btn contact-modal-minimize-btn"
                aria-label={isModalMinimized ? "Expand" : "Minimize"}
                onClick={(e) => { e.stopPropagation(); setIsModalMinimized((v) => !v); }}
              >
                <Minus size={16} />
              </button>
              <button
                type="button"
                className="contact-modal-icon-btn"
                aria-label="Close"
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isModalMinimized && (
            <div className="contact-modal-inner">
              <form
                className="contact-modal-form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = {
                    name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
                    email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
                    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
                  };

                  setFormStatus("submitting");

                  try {
                    await fetch('https://script.google.com/macros/s/AKfycbz68sln0VIOOVOegEYiQLJwTdLonmPHMzq8jqzWCaqdgUAG2-LWxJVuRaEM5HQl6ABH/exec', {
                      method: 'POST',
                      mode: 'no-cors',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data),
                    });
                    setFormStatus("success");
                    form.reset();
                    setIsModalOpen(false);
                    setShowSuccessModal(true);
                  } catch (error) {
                    setFormStatus("error");
                  }
                }}
              >
                <div className="contact-modal-field">
                  <label className="contact-modal-label">Full Name</label>
                  <input type="text" name="name" className="contact-modal-input" placeholder="Your full name" required />
                </div>

                <div className="contact-modal-field">
                  <label className="contact-modal-label">Email Address</label>
                  <input type="email" name="email" className="contact-modal-input" placeholder="your.email@example.com" required />
                </div>

                <div className="contact-modal-field contact-modal-field--grow">
                  <label className="contact-modal-label">Message</label>
                  <textarea rows={6} name="message" className="contact-modal-input" placeholder="Tell me about your opportunity..." required />
                </div>

                <button type="submit" className="contact-modal-submit" disabled={formStatus === "submitting"}>
                  {formStatus === "submitting" ? "SENDING..." : formStatus === "success" ? "MESSAGE SENT" : "SEND MESSAGE →"}
                </button>

                {formStatus === "error" && (
                  <div className="contact-modal-error">
                    Failed to send message. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      )}

      {showSuccessModal && (
        <div className="success-modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <button className="success-modal-close" onClick={() => setShowSuccessModal(false)}>
              <X size={20} />
            </button>
            <div className="success-modal-icon">✓</div>
            <h3 className="success-modal-title">Message Sent!</h3>
            <p className="success-modal-text">Thanks for reaching out. I'll get back to you as soon as possible.</p>
            <button className="success-modal-btn" onClick={() => setShowSuccessModal(false)}>
              CONTINUE BROWSING
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
