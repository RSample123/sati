import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Import all photos
import photo1 from './assets/photo1.jpg';
import photo2 from './assets/photo2.jpg';
import photo3 from './assets/photo3.jpg';
import photo4 from './assets/photo4.jpg';
import photo5 from './assets/photo5.jpg';
import photo6 from './assets/photo6.jpg';
import photo7 from './assets/photo7.jpg';

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

// Psychology-themed fun facts about Sampriti
const psychFacts = [
  { icon: '🧠', label: 'Type', value: 'Psychological Man' },
  { icon: '🪞', label: 'Defense Mechanism', value: 'Chupchap Ghorer kone bose thaka' },
  { icon: '💭', label: 'Attachment Style', value: 'Securely Chaotic' },
  { icon: '🌙', label: 'Dream State', value: 'Perpetually Overthinking' },
  { icon: '🎭', label: 'Persona', value: 'Jung would be proud' },
  { icon: '⚡', label: 'Love Language', value: 'Quality Time & Silent Treatment' },
];

const auroraMessages = [
  "The universe conspired for 365 days just to bring us back to this date 🌌",
  "Freud would say you were born to be iconic. We agree. 🛋️",
  "Your brain has more beautiful neurons than stars in this aurora 🧬",
  "Late but louder — because the best things are always fashionably late 🎉",
];

// Floating particle component
function Particle({ style }) {
  return <div className="particle" style={style} />;
}

// Aurora background
function AuroraBackground() {
  return (
    <div className="aurora-bg">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="aurora aurora-4" />
      <div className="stars" />
    </div>
  );
}

// Floating particles generator
function Particles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 4 + 1}px`,
      height: `${Math.random() * 4 + 1}px`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${Math.random() * 8 + 4}s`,
      background: ['#00e5cc', '#c77dff', '#ff6eb4', '#57ffb0', '#ffd166'][Math.floor(Math.random() * 5)],
      opacity: Math.random() * 0.7 + 0.2,
    },
  }));
  return (
    <div className="particles-container">
      {particles.map(p => <Particle key={p.id} style={p.style} />)}
    </div>
  );
}

// Hero Section
function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`hero-section ${visible ? 'hero-visible' : ''}`}>
      <div className="hero-eyebrow">
        <span className="eyebrow-pill">✦ Belated Birthday Wish ✦</span>
      </div>

      <div className="hero-title-block">
        <p className="hero-date">February 25th</p>
        <h1 className="hero-name">
          <span className="name-line">Happy</span>
          <span className="name-line name-highlight">Birthday</span>
          <span className="name-line name-big">Sampriti</span>
        </h1>
        <div className="hero-subtitle">
          <span className="subtitle-text">My goddess · Nature Lover · Professional overthinker</span>
        </div>
      </div>

      <div className="hero-tagline">
        <p className="tagline-quote">"The mind that studies the minds of others<br />deserves a mind-blowing birthday."</p>
        <span className="tagline-author">— Your (I dont know) Probably Best Friend ?</span>
      </div>

      <div className="scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}

// Photo Gallery — Masonry-style
function PhotoGallery() {
  const [active, setActive] = useState(null);

  const layouts = [
    { gridColumn: 'span 2', gridRow: 'span 2' },
    { gridColumn: 'span 1', gridRow: 'span 1' },
    { gridColumn: 'span 1', gridRow: 'span 1' },
    { gridColumn: 'span 1', gridRow: 'span 2' },
    { gridColumn: 'span 1', gridRow: 'span 1' },
    { gridColumn: 'span 1', gridRow: 'span 1' },
    { gridColumn: 'span 1', gridRow: 'span 1' },
  ];

  return (
    <section className="gallery-section">
      <div className="section-label">
        <span className="label-line" />
        <span className="label-text">Memory Bank</span>
        <span className="label-line" />
      </div>
      <h2 className="section-title">A Glimpse Into <em>Her World</em></h2>

      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`gallery-item ${active === i ? 'gallery-item-active' : ''}`}
            style={layouts[i]}
            onClick={() => setActive(active === i ? null : i)}
          >
            <img src={photo} alt={`Sampriti ${i + 1}`} loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-icon">✦</span>
            </div>
          </div>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={photos[active]} alt="Sampriti" />
            <button className="lightbox-close" onClick={() => setActive(null)}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
}

// Psychology Profile Card
function PsychProfile() {
  return (
    <section className="psych-section">
      <div className="section-label">
        <span className="label-line" />
        <span className="label-text">Psych Report</span>
        <span className="label-line" />
      </div>
      <h2 className="section-title">The Sampriti <em>Psychological Profile</em></h2>
      <p className="section-sub">Confidential. For academic and celebratory purposes only.</p>

      <div className="psych-grid">
        {psychFacts.map((fact, i) => (
          <div className="psych-card" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
            <div className="psych-icon">{fact.icon}</div>
            <div className="psych-label">{fact.label}</div>
            <div className="psych-value">{fact.value}</div>
          </div>
        ))}
      </div>

      <div className="brain-visual">
        <svg viewBox="0 0 200 160" className="brain-svg" xmlns="http://www.w3.org/2000/svg">
          {/* Left hemisphere */}
          <ellipse cx="80" cy="80" rx="60" ry="60" fill="none" stroke="url(#brainGrad)" strokeWidth="1.5" opacity="0.6" />
          {/* Right hemisphere */}
          <ellipse cx="120" cy="80" rx="60" ry="60" fill="none" stroke="url(#brainGrad2)" strokeWidth="1.5" opacity="0.6" />
          {/* Corpus callosum */}
          <path d="M80,80 Q100,70 120,80" fill="none" stroke="#00e5cc" strokeWidth="2" strokeDasharray="4,3" opacity="0.8" />
          {/* Neural nodes */}
          {[[50,50],[60,90],[110,45],[140,85],[100,110],[75,120],[125,120]].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="3" fill={['#00e5cc','#c77dff','#ff6eb4','#57ffb0','#ffd166','#48cae4','#c77dff'][i]} opacity="0.9">
              <animate attributeName="opacity" values="0.4;1;0.4" dur={`${1.5+i*0.3}s`} repeatCount="indefinite" />
            </circle>
          ))}
          {/* Connections */}
          {[[50,50,60,90],[60,90,100,110],[110,45,140,85],[140,85,125,120],[100,110,125,120],[75,120,100,110]].map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0,229,204,0.25)" strokeWidth="0.8" />
          ))}
          <defs>
            <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c77dff" />
              <stop offset="100%" stopColor="#00e5cc" />
            </linearGradient>
            <linearGradient id="brainGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00e5cc" />
              <stop offset="100%" stopColor="#ff6eb4" />
            </linearGradient>
          </defs>
        </svg>
        <p className="brain-caption">Neural activity: maximum ✨</p>
      </div>
    </section>
  );
}

// Aurora Message Carousel
function AuroraMessages() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(c => (c + 1) % auroraMessages.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="aurora-msg-section">
      <div className="aurora-msg-frame">
        <div className="aurora-msg-glow" />
        <div className="aurora-msg-dots">
          {auroraMessages.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? 'dot-active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
        <div className="aurora-msg-text" key={current}>
          <span className="aurora-quote-mark">"</span>
          <p>{auroraMessages[current]}</p>
          <span className="aurora-quote-mark aurora-quote-close">"</span>
        </div>
      </div>
    </section>
  );
}

// Belated Wish Section
function BelatedWish() {
  return (
    <section className="belated-section">
      <div className="belated-card">
        <div className="belated-tape belated-tape-left">📌</div>
        <div className="belated-tape belated-tape-right">📌</div>

        <div className="belated-header">
          <span className="belated-stamp">BELATED</span>
          <span className="belated-but">but make it</span>
          <span className="belated-iconic">ICONIC</span>
        </div>

        <div className="belated-body">
          <p className="belated-intro">Hey Sampriti </p>
          <p className="belated-text">
            Okay yes — February 25th was <em>technically</em> your birthday and this is <em>technically</em> late.
            But here's the thing about people who study psychology — you already knew this was coming, didn't you?
            Your brain literally predicted this 😂
          </p>
          <p className="belated-text">
            Wishing you a year full of <strong>good vibes only</strong>, zero toxic attachment styles,
            healthy defence mechanisms, and absolutely <strong>zero boring days</strong>.
            May your Maslow's hierarchy of needs be completely fulfilled — especially the top tier. 🌟
          </p>
          <p className="belated-text">
            You're one of those rare people whose presence actually raises the serotonin levels of everyone around them.
            Science. Fact. Peer reviewed. 🧬
          </p>
            <p className="belated-text">
           <strong>Really Sorry Brada </strong>, janish e to bisal chap thake, r emnio faltu ki6u debar i6a 6ilo nah, 
            so eta banateo time laglo. But i think its good in its own weird way, just like you. Hope you like it!
            🌟
          </p>
          ,<p className="belated-text">
            <strong>Hope you like it!, -------------------  SATI</strong>
          </p>
          <p className="belated-sign">With all the positive reinforcement in the world, 💙<br />Your best wala friend (who loves you very very much)</p>
        </div>

        <div className="belated-footer">
          <span className="footer-emoji">🎂</span>
          <span className="footer-text">Happy Belated Birthday · Feb 25</span>
          <span className="footer-emoji">🎂</span>
        </div>
      </div>
    </section>
  );
}

// Confetti burst on click
function ConfettiButton() {
  const [bursting, setBursting] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const burst = () => {
    if (bursting) return;
    setBursting(true);
    const items = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 400,
      y: -(Math.random() * 300 + 100),
      color: ['#00e5cc', '#c77dff', '#ff6eb4', '#57ffb0', '#ffd166'][Math.floor(Math.random() * 5)],
      size: Math.random() * 10 + 5,
      rotation: Math.random() * 360,
    }));
    setConfetti(items);
    setTimeout(() => {
      setBursting(false);
      setConfetti([]);
    }, 2000);
  };

  return (
    <section className="confetti-section">
      <div className="confetti-wrapper">
        {confetti.map(c => (
          <div
            key={c.id}
            className="confetti-piece"
            style={{
              background: c.color,
              width: c.size,
              height: c.size,
              '--tx': `${c.x}px`,
              '--ty': `${c.y}px`,
              '--rot': `${c.rotation}deg`,
              borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            }}
          />
        ))}
        <button className={`burst-btn ${bursting ? 'burst-btn-active' : ''}`} onClick={burst}>
          <span className="burst-icon">🎉</span>
          <span className="burst-text">Send Birthday Love!</span>
          <span className="burst-icon">🎉</span>
        </button>
      </div>
      <p className="burst-hint">Click for a surprise ✨</p>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" />
      <p className="footer-line">Made with ❤️ & a pinch of psychology</p>
      <p className="footer-small">For Sampriti · February 25 · Always celebrated, always adored</p>
      <div className="footer-icons">✦ 🧠 ✦ 💙 ✦ 🌌 ✦</div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <AuroraBackground />
      <Particles />
      <HeroSection />
      <PhotoGallery />
      <AuroraMessages />
      <PsychProfile />
      <BelatedWish />
      <ConfettiButton />
      <Footer />
    </div>
  );
}
