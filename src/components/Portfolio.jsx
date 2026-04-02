import { useState, useEffect, useRef } from "react";
import {
  PERSONAL, EDUCATION, PROJECTS, SKILLS,
  TAG_META, STACKS, TYPEWRITER_ROLES, FILTERS, NAV,
} from "./data.js";

/* ─── Main Component ────────────────────────────────────────────────────── */

export default function Portfolio() {
  const [filter,    setFilter]    = useState("All");
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [typed,     setTyped]     = useState("");
  const [form,      setForm]      = useState({ name: "", email: "", msg: "" });
  const [sent,      setSent]      = useState(false);
  const [animate,   setAnimate]   = useState(false);

  /* Typewriter */
  const rIdx = useRef(0), cIdx = useRef(0), del = useRef(false);
  useEffect(() => {
    let t;
    const tick = () => {
      const word = TYPEWRITER_ROLES[rIdx.current];
      if (!del.current) {
        setTyped(word.slice(0, ++cIdx.current));
        if (cIdx.current === word.length) { del.current = true; t = setTimeout(tick, 1800); return; }
      } else {
        setTyped(word.slice(0, --cIdx.current));
        if (cIdx.current === 0) { del.current = false; rIdx.current = (rIdx.current + 1) % TYPEWRITER_ROLES.length; }
      }
      t = setTimeout(tick, del.current ? 55 : 95);
    };
    t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, []);

  /* Skill bar scroll trigger */
  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimate(true); },
      { threshold: 0.15 }
    );
    const el = document.getElementById("skills");
    if (el) ob.observe(el);
    return () => ob.disconnect();
  }, []);

  const scrollTo = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", msg: "" });
    setTimeout(() => setSent(false), 3500);
  };

  const shown = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.tag === filter);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", color: "#1a1a1a" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 6%", height: 60,
        background: "rgba(255,255,255,.95)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid #eee",
      }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 21, fontWeight: 700 }}>
          Omkar<span style={{ color: "#e05c2a" }}>.</span>
        </span>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {NAV.map(n => (
            <li key={n}>
              <button onClick={() => scrollTo(n)} style={{
                background: activeNav === n ? "#f3f3f1" : "none",
                border: "none",
                color: activeNav === n ? "#1a1a1a" : "#666",
                fontWeight: activeNav === n ? 600 : 500,
                fontSize: 14, padding: "7px 13px",
                borderRadius: 5, cursor: "pointer", transition: "all .15s",
              }}>
                {n}
              </button>
            </li>
          ))}
        </ul>

        <button className="menu-toggle" onClick={() => setMenuOpen(o => !o)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        justifyContent: "space-between", flexWrap: "wrap",
        padding: "110px 6% 80px", gap: 40,
      }}>
        {/* Left content */}
        <div className="hero-content">
          <span style={{
            display: "inline-block", background: "#fef3ee", color: "#e05c2a",
            fontSize: 13, fontWeight: 600, padding: "6px 14px",
            borderRadius: 20, marginBottom: 20,
          }}>👋 Hello, I'm</span>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(44px,7vw,72px)", fontWeight: 800, lineHeight: 1.05, marginBottom: 16,
          }}>
            Omkar<br />
            <span style={{ color: "#e05c2a" }}>Yadav</span>
          </h1>

          <div style={{ fontSize: 19, fontWeight: 500, color: "#555", marginBottom: 18, minHeight: 30 }}>
            <span>{typed}</span>
            <span style={{ animation: "blink 1s step-end infinite", fontWeight: 300 }}>|</span>
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#666", marginBottom: 30, maxWidth: 460 }}>
            I build websites and web applications using WordPress, Django, Java,
            and the MERN stack — turning ideas into clean, functional digital experiences.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            <button className="btn-fill" onClick={() => scrollTo("Projects")}>View My Work</button>
            <button className="btn-line" onClick={() => scrollTo("Contact")}>Hire Me</button>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["WordPress", "Django", "Java", "MERN Stack"].map(s => (
              <span key={s} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 20,
                background: TAG_META[s].bg, color: TAG_META[s].color,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: TAG_META[s].dot, flexShrink: 0 }} />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── AVATAR (fixed layout) ── */}
        <div className="hero-avatar">
          {/* Blob */}
          <div style={{
            position: "absolute",
            width: 270,
            height: 270,
            borderRadius: "42% 58% 54% 46% / 46% 40% 60% 54%",
            background: "#fef3ee",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }} />

          {/* Avatar circle */}
          <div style={{
            position: "relative",
            zIndex: 1,
            width: 175,
            height: 175,
            borderRadius: "50%",
            border: "3px solid #fde0d0",
            overflow: "hidden",
            boxShadow: "0 10px 36px rgba(224,92,42,.18)",
            animation: "floatY 4s ease-in-out infinite",
            background: "#fff",
          }}>
            <img
              src="/favicon.svg"
              alt="Omkar Yadav"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Float badges */}
          <div style={{ position:"absolute", top:14, right:4, background:"#fff", border:"1px solid #eee", borderRadius:20, fontSize:11, fontWeight:600, color:"#1a6c8c", padding:"5px 11px", boxShadow:"0 4px 12px rgba(0,0,0,.07)", zIndex:2, animation:"popIn .5s .2s ease both" }}>WordPress ✓</div>
          <div style={{ position:"absolute", bottom:24, right:0, background:"#fff", border:"1px solid #eee", borderRadius:20, fontSize:11, fontWeight:600, color:"#a04800", padding:"5px 11px", boxShadow:"0 4px 12px rgba(0,0,0,.07)", zIndex:2, animation:"popIn .5s .4s ease both" }}>Django ✓</div>
          <div style={{ position:"absolute", bottom:14, left:4, background:"#fff", border:"1px solid #eee", borderRadius:20, fontSize:11, fontWeight:600, color:"#8a5a00", padding:"5px 11px", boxShadow:"0 4px 12px rgba(0,0,0,.07)", zIndex:2, animation:"popIn .5s .6s ease both" }}>Java ✓</div>
          <div style={{ position:"absolute", top:24, left:0, background:"#fff", border:"1px solid #eee", borderRadius:20, fontSize:11, fontWeight:600, color:"#2a7a2a", padding:"5px 11px", boxShadow:"0 4px 12px rgba(0,0,0,.07)", zIndex:2, animation:"popIn .5s .8s ease both" }}>MERN ✓</div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "88px 0", background: "#f9f9f7" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 6%" }}>
          <SectionTitle pre="About" main="Me" />

          <div className="about-grid">
            <div>
              {PERSONAL.bio.map((para, i) => (
                <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: "#555", ...(i > 0 ? { marginTop: 16 } : {}) }}>
                  {para}
                </p>
              ))}

              {/* Education */}
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid #efefed" }}>
                <p style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#e05c2a", fontWeight: 600, marginBottom: 16 }}>Education</p>
                {EDUCATION.map(e => (
                  <div key={e.degree} style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 18, marginTop: 1 }}>🎓</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>{e.degree}</p>
                      <p style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{e.inst} · {e.years}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {STACKS.map(st => (
                <div key={st.name} className="scard" style={{
                  display: "flex", alignItems: "center", gap: 14,
                  background: "#fff", border: "1px solid #efefed",
                  borderRadius: 10, padding: "14px 16px", position: "relative", overflow: "hidden",
                }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{st.icon}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{st.name}</p>
                    <p style={{ fontSize: 12, color: "#888" }}>{st.desc}</p>
                  </div>
                  <span style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", borderRadius: "10px 0 0 10px", background: TAG_META[st.name].dot }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "88px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 6%" }}>
          <SectionTitle pre="My" main="Projects" />

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                background: filter === f ? "#1a1a1a" : "#f3f3f1",
                color: filter === f ? "#fff" : "#666",
                border: filter === f ? "1px solid #1a1a1a" : "1px solid #e5e5e5",
                fontSize: 13, fontWeight: 500, padding: "8px 18px",
                borderRadius: 20, cursor: "pointer", transition: "all .15s",
              }}>{f}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: 22 }}>
            {shown.map((p, i) => {
              const m = TAG_META[p.tag];
              return (
                <div key={p.id} className="pcard" style={{
                  background: "#fff", border: "1px solid #ebebeb",
                  borderRadius: 12, padding: "24px", display: "flex",
                  flexDirection: "column", gap: 10, animationDelay: `${i * 0.08}s`,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 20, background: m.bg, color: m.color }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: m.dot, flexShrink: 0 }} />
                      {p.tag}
                    </span>
                    <span style={{ fontSize: 12, color: "#bbb", fontWeight: 500 }}>{p.year}</span>
                  </div>
                  <p style={{ fontSize: 11, color: "#bbb", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".7px" }}>{p.type}</p>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#666", flexGrow: 1 }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {p.tech.map(t => (
                      <span key={t} style={{ background: "#f3f3f1", color: "#555", fontSize: 11, fontWeight: 500, padding: "3px 8px", borderRadius: 4, border: "1px solid #e8e8e8" }}>{t}</span>
                    ))}
                  </div>
                  <a href={p.link} style={{ color: "#e05c2a", fontSize: 13, fontWeight: 600, textDecoration: "none", marginTop: 4 }}>View project →</a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: "88px 0", background: "#f9f9f7" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 6%" }}>
          <SectionTitle pre="My" main="Skills" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 16 }}>
            {SKILLS.map((sk, i) => (
              <div key={sk.name} style={{ background: "#fff", border: "1px solid #efefed", borderRadius: 10, padding: "16px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{sk.name}</span>
                  <span style={{ fontSize: 13, color: "#e05c2a", fontWeight: 600 }}>{sk.pct}%</span>
                </div>
                <div style={{ height: 5, background: "#f0f0ee", borderRadius: 3, overflow: "hidden", marginBottom: 7 }}>
                  <div style={{
                    height: "100%", background: "#e05c2a", borderRadius: 3,
                    transition: "width 1s cubic-bezier(.4,0,.2,1)",
                    transitionDelay: `${i * 0.07}s`,
                    width: animate ? `${sk.pct}%` : "0%",
                  }} />
                </div>
                <span style={{ fontSize: 11, color: "#bbb", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".7px" }}>{sk.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "88px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 6%" }}>
          <SectionTitle pre="Get In" main="Touch" />

          <div className="contact-grid">
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
                Let's build something together
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#555" }}>
                Got a project in mind, or looking for a web developer? I'd love to hear from you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 13, margin: "22px 0" }}>
                {[
                  ["📧", PERSONAL.email],
                  ["📞", PERSONAL.phone],
                  ["📍", PERSONAL.location],
                  ["💼", PERSONAL.availability],
                ].map(([ic, v]) => (
                  <div key={v} style={{ display: "flex", alignItems: "flex-start", gap: 11, fontSize: 14 }}>
                    <span>{ic}</span>
                    <span style={{ color: "#555" }}>{v}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 20 }}>
                {[["GitHub", PERSONAL.github], ["LinkedIn", PERSONAL.linkedin], ["Twitter", PERSONAL.twitter]].map(([label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className="soc-link"
                    style={{ fontSize: 13, fontWeight: 600, color: "#888", textDecoration: "none" }}>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {sent && (
                <div style={{ background: "#eef9ee", border: "1px solid #bbe0bb", borderRadius: 7, padding: "11px 14px", color: "#2d7a2d", fontSize: 14 }}>
                  ✅ Sent! I'll get back to you soon.
                </div>
              )}
              <div className="form-grid">
                <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: "#444" }}>
                  Name
                  <input style={inputStyle} required placeholder="Your name"
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: "#444" }}>
                  Email
                  <input style={inputStyle} type="email" required placeholder="you@email.com"
                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </label>
              </div>
              <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: "#444" }}>
                Message
                <textarea style={{ ...inputStyle, resize: "vertical", minHeight: 130 }} required
                  placeholder="Tell me about your project…"
                  value={form.msg} onChange={e => setForm(f => ({ ...f, msg: e.target.value }))} />
              </label>
              <button type="submit" className="btn-fill" style={{ alignSelf: "flex-start" }}>
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid #eee", padding: "22px 6%", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <span style={{ fontSize: 13, color: "#bbb" }}>© {new Date().getFullYear()} {PERSONAL.name} · Mumbai, India</span>
        <span style={{ fontSize: 13, color: "#bbb" }}>Built with React 🤍</span>
      </footer>

    </div>
  );
}

/* ─── Shared input style ────────────────────────────────────────────────── */
const inputStyle = {
  marginTop: 2, background: "#fff", border: "1.5px solid #e0e0e0",
  borderRadius: 7, padding: "11px 13px", fontSize: 14, color: "#1a1a1a",
  transition: "border-color .15s",
};

/* ─── Section Title ─────────────────────────────────────────────────────── */
function SectionTitle({ pre, main }) {
  return (
    <div style={{ marginBottom: 52 }}>
      <p style={{ fontSize: 12, letterSpacing: "2px", textTransform: "uppercase", color: "#e05c2a", fontWeight: 600, marginBottom: 6 }}>{pre}</p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, marginBottom: 12 }}>{main}</h2>
      <div style={{ width: 40, height: 3, background: "#e05c2a", borderRadius: 2 }} />
    </div>
  );
}
