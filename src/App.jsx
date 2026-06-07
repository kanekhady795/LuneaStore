// ============================================================
//  LUNÉA STORE — Site Vitrine React (Version Responsive)
//  Couleurs vives, fond clair, luxe moderne
// ============================================================

import { useState, useEffect } from "react";

// ─── 1. IMPORTS IMAGES ───────────────────────────────────────
// Remplacez par vos vrais imports
import logo from "./assets/logo.png";

import parfum1 from "./assets/parfum1.png";
import parfum3 from "./assets/parfum3.png";
import parfum4 from "./assets/parfum4.png";
import parfum5 from "./assets/parfum5.png";
import parfum6 from "./assets/parfum6.png";
import parfum7 from "./assets/parfum7.png";
import parfum8 from "./assets/parfum8.png";
import parfum9 from "./assets/parfum9.png";
import parfum10 from "./assets/parfum10.png";
import parfum11 from "./assets/parfum11.png";
import parfum12 from "./assets/parfum12.png";
import parfum13 from "./assets/parfum13.png";
import parfum14 from "./assets/parfum14.png";
import parfum15 from "./assets/parfum15.png";
import parfum16 from "./assets/parfum16.png";
import parfum17 from "./assets/parfum17.png";
import parfum18 from "./assets/parfum18.png";
import parfum19 from "./assets/parfum19.png";
import parfum20 from "./assets/parfum20.png";
import parfum21 from "./assets/parfum21.png";
import parfum22 from "./assets/parfum22.png";

import huile1 from "./assets/huile1.png";
import huile2 from "./assets/huile2.png";
import huile3 from "./assets/huile3.png";
import huile4 from "./assets/huile4.png";
import huile5 from "./assets/huile5.png";
import huile6 from "./assets/huile6.png";

import musk1 from "./assets/musk1.png";
import musk2 from "./assets/musk2.png";
import musk3 from "./assets/musk3.png";
import musk4 from "./assets/musk4.png";

import lunette1 from "./assets/lunette1.png";
import lunette3 from "./assets/lunette3.png";
import lunette4 from "./assets/lunette4.png";
import lunette5 from "./assets/lunette5.png";
import lunette6 from "./assets/lunette6.png";
import lunette7 from "./assets/lunette7.png";
import lunette8 from "./assets/lunette8.png";
import lunette9 from "./assets/lunette9.png";
import lunette10 from "./assets/lunette10.png";
import lunette11 from "./assets/lunette11.png";
import lunette12 from "./assets/lunette12.png";

import a1 from "./assets/a1.png";
import a2 from "./assets/a2.png";
import a3 from "./assets/a3.png";
import a4 from "./assets/a4.png";
import a13 from "./assets/a13.png";
import a5 from "./assets/a5.png";
import a6 from "./assets/a6.png";
import a7 from "./assets/a7.png";
import a8 from "./assets/a8.png";
import a9 from "./assets/a9.png";
import a10 from "./assets/a10.png";
import a11 from "./assets/a11.png";
import a12 from "./assets/a12.png";

// ─── 2. LOGO ─────────────────────────────────────────────────
const LOGO_IMAGE = logo;
const LOGO_IMAGE1 = logo;

// ─── 3. PRODUITS ─────────────────────────────────────────────
const PRODUCTS = {
  parfums: [
    { name: "OUD", note: "Boisé · Ambré · Oriental", price: "3000 FCFA", badge: "Best-seller", image: parfum1 },
    { name: "OUD", note: "Floral · Romantique · Doux", price: "3000 FCFA", badge: "Nouveau", image: parfum3 },
    { name: "Kayali 28", note: "Musqué · Profond · Sensuel", price: "3000 FCFA", badge: "Exclusif", image: parfum4 },
    { name: "Khamrah", note: "Boisé · Crémeux · Chaleureux", price: "3000 FCFA", badge: "Collection", image: parfum5 },
    { name: "Poussiere d'or", note: "Boisé · Crémeux · Chaleureux", price: "3000 FCFA", badge: "Collection", image: parfum6 },
    { name: "Bianco Latte", note: "Boisé · Crémeux · Chaleureux", price: "3000 FCFA", badge: "Collection", image: parfum7 },
    { name: "Oud", note: "Boisé · Crémeux · Chaleureux", price: "3000 FCFA", badge: "Collection", image: parfum8 },
    { name: "Khair", note: "Citrus · Vif · Rafraîchissant", price: "3000 FCFA", badge: "Nouveau", image: parfum9 },
    { name: "Vanilla Aura", note: "Fruité · Sucré · Ensoleillé", price: "3000 FCFA", badge: "Exclusif", image: parfum10 },
    { name: "Hugo Boss", note: "Épicé · Chaud · Mystérieux", price: "3000 FCFA", badge: "Collection", image: parfum11 },
    { name: "Sauvage Dior", note: "Herbal · Naturel · Apaisant", price: "3000 FCFA", badge: "Best-seller", image: parfum12 },
    { name: "Prada", note: "Vanillé · Doux · Gourmand", price: "3000 FCFA", badge: "Nouveau", image: parfum13 },
    { name: "ORCHID", note: "Aquatique · Léger · Marin", price: "3000 FCFA", badge: "Exclusif", image: parfum14 },
    { name: "La Petite Rose Noir", note: "Floral · Élégant · Féminin", price: "3000 FCFA", badge: "Collection", image: parfum15 },
    { name: "Victoria Secret", note: "Musqué · Sensuel · Nocturne", price: "3000 FCFA", badge: "Nouveau", image: parfum16 },
    { name: "Victoria Secret", note: "Musqué · Sensuel · Nocturne", price: "3000 FCFA", badge: "Nouveau", image: parfum17 },
    { name: "Vanilla Voyage", note: "Oriental · Riche · Charismatique", price: "3000 FCFA", badge: "Nouveau", image: parfum18 },
    { name: "My way", note: "Ambré · Chaud · Sensuel", price: "3000 FCFA", badge: "Exclusif", image: parfum19 },
    { name: "Hypnotic Poison", note: "Floral · Légère · Lumineuse", price: "3000 FCFA", badge: "Collection", image: parfum20 },
    { name: "L'interdit Givenchy", note: "Boisé · Mystérieux · Raffiné", price: "3000 FCFA", badge: "Best-seller", image: parfum21 },
    { name: "Baccarat Rouge", note: "Aérien · Frais · Élégant", price: "3000 FCFA", badge: "Signature", image: parfum22 },
  ],
  huiles: [
    { name: "Madawi", note: "Floral · Envoûtant · Féminin", price: "5ml 1500 FCFA, 10ml 2500 FCFA, 15ml 3500 FCFA", badge: "Naturel", image: huile1 },
    { name: "Huile Ambrée", note: "Ambré · Doux · Enveloppant", price: "5ml 1500 FCFA, 10ml 2500 FCFA, 15ml 3500 FCFA", badge: "Populaire", image: huile2 },
    { name: "Poussière d'or", note: "Précieux · Oriental · Luxueux", price: "5ml 1500 FCFA, 10ml 2500 FCFA, 15ml 3500 FCFA", badge: "Luxe", image: huile3 },
    { name: "Scandal d'homme", note: "Gourmand · Doux · Sensuel", price: "5ml 1500 FCFA, 10ml 2500 FCFA, 15ml 3500 FCFA", badge: "Doux", image: huile4 },
    { name: "Bois intense", note: "Boisé · Crémeux · Chaleureux", price: "5ml 1500 FCFA, 10ml 2500 FCFA, 15ml 3500 FCFA", badge: "Collection", image: huile5 },
    { name: "Khamrah", note: "Boisé · Intense · Profond", price: "5ml 1500 FCFA, 10ml 2500 FCFA, 15ml 3500 FCFA", badge: "Luxe", image: huile6 },
  ],
  musks: [
    { name: "Musk", note: "Pur · Frais · Intemporel", price: "3000 FCFA", badge: "Signature", image: musk1 },
    { name: "Musk rose", note: "Pur · Frais · Intemporel", price: "3000 FCFA", badge: "Signature", image: musk2 },
    { name: "Musk", note: "Pur · Frais · Intemporel", price: "3000 FCFA", badge: "Signature", image: musk3 },
    { name: "Musk", note: "Pur · Frais · Intemporel", price: "3000 FCFA", badge: "Signature", image: musk4 },
  ],
  lunettes: [
    { name: "Modèle Eclipse", note: "Cat-eye · Audacieux · Chic", price: "15000 FCFA", badge: "Tendance", image: lunette1 },
    { name: "Modèle Sahara", note: "Oversize · Glamour · Mode", price: "15000 FCFA", badge: "Glamour", image: lunette5 },
    { name: "Modèle Lumière", note: "Aviateur · Classique · Intemporel", price: "15000 FCFA", badge: "Classique", image: lunette3 },
    { name: "Modèle Crystal", note: "Rectangulaire · Moderne · Transparent", price: "15000 FCFA", badge: "Nouveau", image: lunette4 },
    { name: "Modèle Soleil", note: "Ronde · Vintage · Solaire", price: "15000 FCFA", badge: "Tendance", image: lunette6 },
    { name: "Modèle Mirage", note: "Pilote · Minimaliste · Léger", price: "15000 FCFA", badge: "Populaire", image: lunette7 },
    { name: "Modèle Aurora", note: "Carré · Urbain · Élégant", price: "15000 FCFA", badge: "Chic", image: lunette8 },
    { name: "Modèle Prestige", note: "Oversize · Couture · Premium", price: "15000 FCFA", badge: "Luxe", image: lunette9 },
    { name: "Modèle Nova", note: "Aviateur · Raffiné · Brillant", price: "15000 FCFA", badge: "Signature", image: lunette10 },
    { name: "Modèle Velvet", note: "Papillon · Féminin · Doux", price: "15000 FCFA", badge: "Collection", image: lunette11 },
    { name: "Modèle Horizon", note: "Rectangulaire · Sportif · Confort", price: "15000 FCFA", badge: "Nouveau", image: lunette12 },
    { name: "Van cleef Rose", note: "Cat-eye · Audacieux · Chic", price: "12000 FCFA", badge: "Tendance", image: a1 },
    { name: "Modèle Aura", note: "Futuriste · Lumineux · Élégant", price: "12000 FCFA", badge: "Nouveau", image: a2 },
    { name: "Modèle Prism", note: "Multicolore · Artistique · Unique", price: "12000 FCFA", badge: "Exclusif", image: a3 },
    { name: "Modèle Saphir", note: "Cristallin · Raffiné · Sobre", price: "12000 FCFA", badge: "Collection", image: a4 },
    { name: "Modèle Céleste", note: "Aérien · Doux · Raffiné", price: "12000 FCFA", badge: "Signature", image: a5 },
    { name: "Modèle Satin", note: "Lisse · Sophistiqué · Confortable", price: "12000 FCFA", badge: "Chic", image: a6 },
    { name: "Modèle Lueur", note: "Brillant · Léger · Intemporel", price: "12000 FCFA", badge: "Populaire", image: a7 },
    { name: "Modèle Odyssée", note: "Aventureux · Élégant · Moderne", price: "12000 FCFA", badge: "Luxe", image: a8 },
    { name: "Modèle Mirage Noir", note: "Mystérieux · Charismatique · Sombre", price: "12000 FCFA", badge: "Best-seller", image: a9 },
    { name: "Modèle Éclat", note: "Chatoyant · Précieux · Haut de gamme", price: "12000 FCFA", badge: "Signature", image: a10 },
    { name: "Modèle Carmin", note: "Raffiné · Intense · Audacieux", price: "12000 FCFA", badge: "Collection", image: a11 },
    { name: "Modèle Luna", note: "Féminin · Doux · Élégant", price: "12000 FCFA", badge: "Nouveau", image: a12 },
  ],
  
};

// ─── CONFIG SECTIONS ─────────────────────────────────────────
const SECTIONS = [
  { key: "parfums", label: "Parfums", emoji: "🫧", eyebrow: "Collection Signature", color: "#C8405A", colorLight: "#FDEEF1", colorMid: "#F4A0B0", gradient: "linear-gradient(135deg,#C8405A,#E8758A)", bgSection: "#fff" },
  { key: "huiles", label: "Huiles Parfumées", emoji: "🌿", eyebrow: "Soin & Bien-être", color: "#1E8A6E", colorLight: "#E6F7F3", colorMid: "#7DCDB8", gradient: "linear-gradient(135deg,#1E8A6E,#40B896)", bgSection: "#F0FAF7" },
  { key: "musks", label: "Musks", emoji: "🌙", eyebrow: "Envoûtement Pur", color: "#928a9f", colorLight: "#F0EBFD", colorMid: "#B499E8", gradient: "linear-gradient(135deg,#6835C8,#9060E0)", bgSection: "#fff" },
  { key: "lunettes", label: "Lunettes & Accessoires", emoji: "☀️", eyebrow: "Style & Soleil", color: "#a89a85", colorLight: "#FEF5E6", colorMid: "#F0BC60", gradient: "linear-gradient(135deg,#C87A10,#ECA030)", bgSection: "#FEF8EE" },
];

// ─── PLACEHOLDER ─────────────────────────────────────────────
function ImgPlaceholder({ section }) {
  return (
    <div style={{ width: "100%", height: "100%", background: `linear-gradient(160deg,${section.colorLight} 0%,#fff 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
      <div style={{ width: 90, height: 90, borderRadius: "50%", background: section.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.8rem" }}>
        {section.emoji}
      </div>
      <span style={{ fontSize: "0.65rem", color: section.color, fontWeight: 700 }}>Photo à venir</span>
    </div>
  );
}

// ─── CARD ────────────────────────────────────────────────────
function Card({ product, section }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff",
        borderRadius: 22,
        overflow: "hidden",
        boxShadow: hov ? `0 22px 64px ${section.color}28` : "0 8px 30px rgba(0,0,0,0.08)",
        transform: hov ? "translateY(-8px)" : "none",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", transform: hov ? "scale(1.06)" : "scale(1)", transition: "transform 0.5s ease" }}
          />
        ) : (
          <ImgPlaceholder section={section} />
        )}
        <div style={{ position: "absolute", top: 14, left: 14, background: section.gradient, color: "#fff", fontSize: "0.55rem", padding: "4px 12px", borderRadius: 30, fontWeight: 800 }}>
          {product.badge}
        </div>
      </div>

      <div style={{ padding: "18px 20px 24px" }}>
        <div style={{ fontSize: "0.6rem", color: section.color, marginBottom: 6 }}>{product.note}</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: 12 }}>{product.name}</div>
        <div style={{ fontSize: "1.05rem", fontWeight: 700, color: section.color }}>{product.price}</div>
      </div>
    </div>
  );
}

// ─── SECTION PRODUITS ────────────────────────────────────────
function ProdSection({ section }) {
  return (
    <section id={section.key} style={{ padding: "80px 20px", background: section.bgSection }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <div style={{ marginBottom: 50, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: section.gradient, color: "#fff", padding: "6px 18px", borderRadius: 30, fontSize: "0.6rem", fontWeight: 800, marginBottom: 12 }}>
            {section.emoji} {section.eyebrow}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.2rem, 5.5vw, 3.6rem)", fontWeight: 700, color: "#1A1A2E" }}>
            {section.label}
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
          gap: 28,
        }}>
          {PRODUCTS[section.key].map((p, i) => (
            <Card key={i} product={p} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────
export default function LuneaStore() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: "#FAFAF9", minHeight: "100vh", color: "#1A1A2E", fontFamily: "'Nunito', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Nunito:wght@300;400;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        .nl { background:none; border:none; font-size:0.95rem; font-weight:600; cursor:pointer; }
      `}</style>

      {/* NAVBAR RESPONSIVE */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
        padding: "14px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 50, height: 50, borderRadius: "50%", border: "3px solid #C8405A", overflow: "hidden" }}>
            {LOGO_IMAGE1 && <img src={LOGO_IMAGE1} alt="Lunéa" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
          </div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.45rem", fontWeight: 900 }}>LUNÉA</div>
        </div>

        {/* Menu Desktop */}
        <div style={{ display: "none", gap: 32, alignItems: "center" }} className="desktop-menu">
          {SECTIONS.map(s => <button key={s.key} className="nl" onClick={() => goTo(s.key)}>{s.label}</button>)}
          <button className="nl" onClick={() => goTo("about")}>À Propos</button>
        </div>

        {/* Contact + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="tel:+221783015102" style={{ fontWeight: 700, color: "#1E8A6E", textDecoration: "none", fontSize: "0.95rem" }}>
            📞 78 301 51 02
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ fontSize: "1.8rem", background: "none", border: "none", cursor: "pointer" }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div style={{
            position: "fixed", top: "72px", left: 0, right: 0,
            background: "#fff", padding: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", zIndex: 1000
          }}>
            {SECTIONS.map(s => (
              <button key={s.key} style={{ display: "block", width: "100%", textAlign: "left", padding: "14px 0", fontSize: "1.1rem" }} onClick={() => goTo(s.key)}>
                {s.label}
              </button>
            ))}
            <button style={{ display: "block", width: "100%", textAlign: "left", padding: "14px 0", fontSize: "1.1rem" }} onClick={() => goTo("about")}>
              À Propos
            </button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg,#fff9f5 0%,#fef0f3 35%,#f2eeff 65%,#fef9ee 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 20px 80px",
        textAlign: "center",
        position: "relative",
      }}>
        <div style={{ maxWidth: 820 }}>
          <div style={{ marginBottom: 30 }}>
            <div style={{ width: "clamp(130px, 32vw, 180px)", height: "clamp(130px, 32vw, 180px)", margin: "0 auto", borderRadius: "50%", border: "5px solid #C8405A", overflow: "hidden", background: "linear-gradient(135deg,#FDEEF1,#FEF5E6)" }}>
              {LOGO_IMAGE && <img src={LOGO_IMAGE} alt="logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
            </div>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(3.2rem, 9vw, 7rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            marginBottom: 16,
            background: "linear-gradient(135deg,#C8405A,#6835C8,#C87A10)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            LUNÉA STORE
          </h1>

          <p style={{ fontSize: "1.05rem", color: "#555", maxWidth: 620, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Parfumerie & Bien-être Olfactif<br />Huiles parfumées • Parfums d’exception • Lunettes & Accessoires
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {SECTIONS.map(s => (
              <button
                key={s.key}
                onClick={() => goTo(s.key)}
                style={{
                  background: s.gradient,
                  color: "#fff",
                  padding: "14px 26px",
                  borderRadius: 50,
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {s.emoji} {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS PRODUITS */}
      {SECTIONS.map(s => <ProdSection key={s.key} section={s} />)}

      {/* À PROPOS */}
      <section id="about" style={{
        padding: "90px 20px",
        background: "linear-gradient(135deg,#1A1A2E 0%,#2D1A3E 50%,#1A2A1E 100%)",
        color: "#fff",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.2rem, 5vw, 3.2rem)", marginBottom: 30 }}>
            L’Art du Parfum,<br />l’Élégance au Quotidien
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "rgba(255,255,255,0.8)" }}>
            Lunea Store est une marque spécialisée dans l’univers de la parfumerie et du bien-être olfactif.
            Nous proposons des produits de qualité pour apporter fraîcheur, élégance et plaisir des sens au quotidien.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#12121E", padding: "70px 20px 40px", color: "#ccc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Vous pouvez garder ou adapter votre footer ici */}
          <div style={{ textAlign: "center", fontSize: "0.9rem", opacity: 0.7 }}>
            © 2025 Lunéa Store — Tous droits réservés<br />
            Fraîcheur • Élégance • Plaisir des Sens
          </div>
        </div>
      </footer>
    </div>
  );
}