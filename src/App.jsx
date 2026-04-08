// ============================================================
//  LUNÉA STORE — Site Vitrine React
//  Couleurs vives, fond clair, luxe moderne
// ============================================================

// ─── 1. IMPORTEZ VOS IMAGES ICI ──────────────────────────────
// Créez un dossier "assets" dans src/, puis décommentez :
//
 import logo       from "./assets/logo.png";
//
 import parfum1    from "./assets/parfum1.png"; 
import parfum3    from "./assets/parfum3.png";
import parfum4    from "./assets/parfum4.png";
import parfum5   from "./assets/parfum5.png";
import parfum6    from "./assets/parfum6.png";
import parfum7    from "./assets/parfum7.png";
import parfum9    from "./assets/parfum9.png";
import parfum10   from "./assets/parfum10.png";
import parfum11   from "./assets/parfum11.png";
import parfum12   from "./assets/parfum12.png";
import parfum13   from "./assets/parfum13.png";
import parfum14   from "./assets/parfum14.png";
import parfum15   from "./assets/parfum15.png";
import parfum17   from "./assets/parfum17.png";

//
 import huile1     from "./assets/huile1.png";
 import huile2     from "./assets/huile2.png";
import huile3     from "./assets/huile3.png";
 import huile4     from "./assets/huile4.png";
 import huile5    from "./assets/huile5.png";
 import huile6     from "./assets/huile6.png";
//
 import musk1      from "./assets/musk1.png";
 import musk2      from "./assets/musk2.png";
 import musk3      from "./assets/musk3.png";
 import musk4      from "./assets/musk4.png";
//
 import lunette1   from "./assets/lunette1.png";
 import lunette5  from "./assets/lunette5.png";
 import lunette3   from "./assets/lunette3.png";
 import lunette4   from "./assets/lunette4.png";
//
import a1  from "./assets/a1.png";
import a2  from "./assets/a2.png";
import a3  from "./assets/a3.png";
import a13  from "./assets/a13.png";
import a5  from "./assets/a5.png";
import a6  from "./assets/a6.png";
import a7  from "./assets/a7.png";
import a8  from "./assets/a8.png";
import a9  from "./assets/a9.png";
import a10 from "./assets/a10.png";
import a11 from "./assets/a11.png";
import a12 from "./assets/a12.png";
import { useState, useEffect } from "react";


// ─── 2. LOGO ─────────────────────────────────────────────────
// Remplacez null par: logo
const LOGO_IMAGE = logo;
const LOGO_IMAGE1 = logo;

// ─── 3. PRODUITS ─────────────────────────────────────────────
// Remplacez null par le nom de votre variable d'import
// Exemple : image: parfum1
const PRODUCTS = {
  parfums: [
    {        note: "Boisé · Ambré · Oriental", price:"3000 FCFA"   ,  badge: "Best-seller", image: parfum1 },
    {     note: "Floral · Romantique · Doux", price:"3000 FCFA",    badge: "Nouveau",     image: parfum3 },
    {     note: "Musqué · Profond · Sensuel", price:"3000 FCFA" , badge: "Exclusif",    image: parfum4},
    {   note: "Boisé · Crémeux · Chaleureux",price:"3000 FCFA", badge: "Collection",  image: parfum5 },
    {   note: "Boisé · Crémeux · Chaleureux", price:"3000 FCFA", badge: "Collection",  image: parfum6 },
    {   note: "Boisé · Crémeux · Chaleureux",price:"3000 FCFA", badge: "Collection",  image: parfum7 },
    { name: "J'adore Dior", note: "Citrus · Vif · Rafraîchissant", badge: "Nouveau", image: parfum9, price: "3000 FCFA" },
    { name: "One Million", note: "Fruité · Sucré · Ensoleillé", badge: "Exclusif", image: parfum10, price: " 3000 FCFA" },
    { name: "Hugo Boss", note: "Épicé · Chaud · Mystérieux", badge: "Collection", image: parfum11, price: "3000 FCFA" },
    { name: "Bleu de Channel", note: "Herbal · Naturel · Apaisant", badge: "Best-seller", image: parfum12, price: "3000 FCFA" },
    { name: "Coco Mademoiselle", note: "Vanillé · Doux · Gourmand", badge: "Nouveau", image: parfum13, price: "3000 FCFA" },
    { name: "Chloe", note: "Aquatique · Léger · Marin", badge: "Exclusif", image: parfum14, price: "3000 FCFA" },
    { name: "La Petite Rose Noir ", note: "Floral · Élégant · Féminin", badge: "Collection", image: parfum15, price: "3000 FCFA" },
    { name: "Armani code men", note: "Musqué · Sensuel · Nocturne", badge: "Nouveau", image: parfum17, price: "3000 FCFA" },
  ],
  huiles: [
    { name: "Madawi",     note: "Floral · Envoûtant · Féminin",  price: "5ml 1500f, 10ml 2500f , 15ml 3500f", badge: "Naturel",   image: huile1 },
    { name: "Huile Ambrée",        note: "Ambré · Doux · Enveloppant",    price: "5ml 1500f, 10ml 2500f , 15ml 3500f", badge: "Populaire", image: huile2 },
    { name: "Poussière d'or",      note: "Précieux · Oriental · Luxueux", price: "5ml 1500f, 10ml 2500f , 15ml 3500f", badge: "Luxe",      image: huile3 },
    { name: "Scandal d'homme", note: "Gourmand · Doux · Sensuel",     price: "5ml 1500f, 10ml 2500f , 15ml 3500f", badge: "Doux",      image: huile4 },
    { name: "Bois intense",        note: "Boisé · Crémeux · Chaleureux", price: "5ml 1500f, 10ml 2500f , 15ml 3500f", badge: "Collection", image: huile5 },
    { name: "Khamrah",      note: "Boisé · Intense · Profond",    price: "5ml 1500f, 10ml 2500f , 15ml 3500f", badge: "Luxe",      image: huile6 },
  ],
  musks: [
    { name: " Musk",  note: "Pur · Frais · Intemporel", badge: "Signature", image: musk1 },
    { name: " Musk rose",  note: "Pur · Frais · Intemporel",   badge: "Signature", image: musk2 },
    { name: " Musk ",  note: "Pur · Frais · Intemporel",   badge: "Signature", image: musk3 },
    { name: " Musk",  note: "Pur · Frais · Intemporel",   badge: "Signature", image: musk4 },
  ],
  lunettes: [
    { name: "Modèle Eclipse", note: "Cat-eye · Audacieux · Chic",         badge: "Tendance",  image: lunette1 },
    { name: "Modèle Sahara",  note: "Oversize · Glamour · Mode",           badge: "Glamour",   image: lunette5 },
    { name: "Modèle Lumière", note: "Aviateur · Classique · Intemporel",   badge: "Classique", image: lunette3 },
    { name: "Modèle Nuit",    note: "Round · Mystérieux · Élégant",       badge: "Élégant",   image: lunette4 },
    { name: " Van cleef Rose", note: "Cat-eye · Audacieux · Chic",         badge: "Tendance",  image: a1 },
    { name: "Van Cleef doré",  note: "Oversize · Glamour · Mode",           badge: "Glamour",   image: a2 },
    { name: "Bracelet", note: "Aviateur · Classique · Intemporel",   badge: "Classique", image: a3 },
    { name: "Montre rare",    note: "Round · Mystérieux · Élégant",       badge: "Élégant",   image: a13 },
    { name: "Montre Chic", note: "Cat-eye · Audacieux · Chic",         badge: "Tendance",  image: a5 },
    { name: "Boucle d'oreille",  note: "Oversize · Glamour · Mode",           badge: "Glamour",   image: a6},
    { name: "Bracelet,Boucle D'oreille,Bague", note: "Aviateur · Classique · Intemporel",   badge: "Classique", image: a7},
    { name: "bracelet,bague",    note: "Round · Mystérieux · Élégant",       badge: "Élégant",   image: a8 },
    { name: "Bracelet", note: "Cat-eye · Audacieux · Chic",         badge: "Tendance",  image: a9 },
    { name: "bracelet",  note: "Oversize · Glamour · Mode",           badge: "Glamour",   image: a10 },
    { name: "Bracelet", note: "Aviateur · Classique · Intemporel",   badge: "Classique", image: a11 },
    { name: "Boucle d'oreille",    note: "Round · Mystérieux · Élégant",       badge: "Élégant",   image: a12 },
  ],
};

// ─── CONFIG SECTIONS ─────────────────────────────────────────
const SECTIONS = [
  {
    key: "parfums", label: "Parfums", emoji: "🫧", eyebrow: "Collection Signature",
    color: "#C8405A", colorLight: "#FDEEF1", colorMid: "#F4A0B0",
    gradient: "linear-gradient(135deg,#C8405A,#E8758A)",
    bgSection: "#fff",
  },
  {
    key: "huiles", label: "Huiles Parfumées", emoji: "🌿", eyebrow: "Soin & Bien-être",
    color: "#1E8A6E", colorLight: "#E6F7F3", colorMid: "#7DCDB8",
    gradient: "linear-gradient(135deg,#1E8A6E,#40B896)",
    bgSection: "#F0FAF7",
  },
  {
    key: "musks", label: "Musks", emoji: "🌙", eyebrow: "Envoûtement Pur",
    color: "#928a9f", colorLight: "#F0EBFD", colorMid: "#B499E8",
    gradient: "linear-gradient(135deg,#6835C8,#9060E0)",
    bgSection: "#fff",
  },
  {
    key: "lunettes", label: "Lunettes de Soleil et accessoires", emoji: "☀️", eyebrow: "Style & Soleil",
    color: "#a89a85", colorLight: "#FEF5E6", colorMid: "#F0BC60",
    gradient: "linear-gradient(135deg,#C87A10,#ECA030)",
    bgSection: "#FEF8EE",
  },
];

// ─── PLACEHOLDER IMAGE ───────────────────────────────────────
function ImgPlaceholder({ section }) {
  const icons = { parfums:"🫧", huiles:"🌿", musks:"🌙", lunettes:"☀️" };
  return (
    <div style={{
      width:"50px", height:"100px",
      background:`linear-gradient(160deg,${section.colorLight} 0%,#fff 100%)`,
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:12,
    }}>
      <div style={{
        width:80, height:80, borderRadius:"50%",
        background:section.gradient,
        display:"flex", alignItems:"center", justifyContent:"center",
        fontSize:"2rem",
        boxShadow:`0 8px 28px ${section.color}45`,
      }}>{icons[section.key]}</div>
      <span style={{
        fontSize:"0.6rem", color:section.color, letterSpacing:"0.2em",
        textTransform:"uppercase", fontWeight:700,
      }}>Photo à venir</span>
    </div>
  );
}

// ─── CARTE PRODUIT ───────────────────────────────────────────
function Card({ product, section }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background:"#fff", borderRadius:22, overflow:"hidden",
        boxShadow: hov
          ? `0 22px 64px ${section.color}28, 0 4px 16px rgba(194, 174, 174, 0.07)`
          : "0 4px 22px rgba(0,0,0,0.07)",
        border: `2px solid ${hov ? section.color+"55" : "transparent"}`,
        transform: hov ? "translateY(-9px) scale(1.015)" : "none",
        transition:"all 0.4s cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      <div style={{ position:"relative", aspectRatio:"3/4", overflow:"hidden" }}>
        {product.image
          ? <img src={product.image} alt={product.name} style={{
              width:"100%", height:"100%", objectFit:"cover", display:"block",
              transform: hov ? "scale(1.06)" : "scale(1)", transition:"transform 0.5s ease",
            }}/>
          : <ImgPlaceholder section={section}/>
        }
        <div style={{
          position:"absolute", top:14, left:14,
          background:section.gradient, color:"#fff",
          fontSize:"0.5rem", letterSpacing:"0.18em", textTransform:"uppercase",
          padding:"5px 13px", borderRadius:30, fontWeight:800,
          boxShadow:`0 4px 14px ${section.color}55`,
        }}>{product.badge}</div>
      </div>

      <div style={{ padding:"18px 20px 22px" }}>
        <div style={{ fontSize:"0.58rem", color:section.color, letterSpacing:"0.15em", fontStyle:"italic", marginBottom:5 }}>{product.note}</div>
        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.08rem", fontWeight:700, color:"#1A1A2E", marginBottom:18 }}>{product.name}</div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:14, borderTop:`2.5px solid ${section.colorLight}` }}>
          <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"1rem", fontWeight:700, color:section.color }}>{product.price}</span>

        </div>
      </div>
    </div>
  );
}

// ─── SECTION PRODUITS ────────────────────────────────────────
function ProdSection({ section }) {
  return (
    <section id={section.key} style={{ padding:"90px 48px", background:section.bgSection, position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:-100, right:-100, width:380, height:380, borderRadius:"50%", background:`${section.color}0D`, pointerEvents:"none" }}/>
      <div style={{ position:"absolute", bottom:-70, left:-70, width:260, height:260, borderRadius:"50%", background:`${section.color}08`, pointerEvents:"none" }}/>

      <div style={{ maxWidth:1360, margin:"0 auto" }}>
        <div style={{ marginBottom:52, display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
          <div>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:section.gradient, color:"#fff",
              fontSize:"0.55rem", letterSpacing:"0.3em", textTransform:"uppercase",
              padding:"6px 16px", borderRadius:30, fontWeight:800,
              marginBottom:14, boxShadow:`0 4px 16px ${section.color}44`,
            }}><span>{section.emoji}</span><span>{section.eyebrow}</span></div>
            <h2 style={{
              fontFamily:"'Playfair Display',serif",
              fontSize:"clamp(2.2rem,5vw,3.8rem)", fontWeight:700,
              color:"#1A1A2E", letterSpacing:"0.02em", lineHeight:1.1,
            }}>{section.label}</h2>
            <div style={{ width:60, height:4, background:section.gradient, borderRadius:4, marginTop:14 }}/>
          </div>
          <div style={{ fontSize:"0.72rem", color:"#aaa", letterSpacing:"0.08em" }}>
            {PRODUCTS[section.key].length} produits disponibles
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:28 }}>
          {PRODUCTS[section.key].map((p,i) => <Card key={i} product={p} section={section}/>)}
        </div>
      </div>
    </section>
  );
}

// ─── APP ─────────────────────────────────────────────────────
export default function LuneaStore() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const goTo = id => document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });

  return (
    <div style={{ background:"#FAFAF9", minHeight:"100vh", color:"#1A1A2E", fontFamily:"'Nunito',sans-serif", overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Nunito:wght@300;400;600;700;800;900&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        body{background:#FAFAF9}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:#f0f0f0}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#C8405A,#6835C8);border-radius:5px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
        @keyframes shimmer{0%{background-position:0% 50%}100%{background-position:200% 50%}}
        @keyframes spinSlow{to{transform:rotate(360deg)}}
        .a0{animation:fadeUp .9s .0s ease both}
        .a1{animation:fadeUp .9s .15s ease both}
        .a2{animation:fadeUp .9s .3s ease both}
        .a3{animation:fadeUp .9s .45s ease both}
        .a4{animation:fadeUp .9s .6s ease both}
        .float{animation:floatY 4s ease-in-out infinite}
        .spin{animation:spinSlow 24s linear infinite}
        .nl{background:none;border:none;cursor:pointer;font-family:'Nunito',sans-serif;font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#555;transition:color .3s;padding:6px 0}
        .nl:hover{color:#C8405A}
        .cta{padding:13px 30px;border-radius:50px;font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;font-weight:800;cursor:pointer;transition:all .3s;border:none;font-family:'Nunito',sans-serif}
        .fl-link{font-size:.9rem;color:rgba(255,255,255,0.55);margin-bottom:12px;cursor:pointer;transition:color .25s,transform .25s;display:flex;align-items:center;gap:8px}
        .fl-link:hover{color:#fff;transform:translateX(6px)}
        .soc-row{display:flex;align-items:center;gap:12px;margin-bottom:14px;text-decoration:none;transition:transform .25s}
        .soc-row:hover{transform:translateX(6px)}
      `}</style>

      {/* ══ NAVBAR ══ */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:999,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.88)",
        backdropFilter:"blur(20px)",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.09)" : "none",
        borderBottom:"1.5px solid rgba(0,0,0,0.06)",
        padding: scrolled ? "10px 48px" : "16px 48px",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        transition:"all .4s",
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:14 }}>
          <div style={{
            width:48, height:48, borderRadius:"50%", overflow:"hidden",
            border:"2.5px solid #C8405A",
            boxShadow:"0 4px 16px rgba(200,64,90,0.3)",
            display:"flex", alignItems:"center", justifyContent:"center",
            background:"linear-gradient(135deg,#FDEEF1,#FEF5E6)", flexShrink:0,
          }}>
            {LOGO_IMAGE1
              ? <img src={LOGO_IMAGE1} alt="logo" style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
              : <span style={{ fontSize:"1.3rem" }}>🌸</span>
            }
          </div>
          <div>
            <div style={{
              fontFamily:"'Playfair Display',serif", fontSize:"1.25rem", fontWeight:900, letterSpacing:".06em",
              background:"linear-gradient(135deg,#C8405A,#6835C8,#C87A10)",
              backgroundSize:"200% 200%", animation:"shimmer 4s linear infinite",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
            }}>LUNÉA STORE </div>
            <div style={{ fontSize:".44rem", letterSpacing:".3em", color:"#bbb", textTransform:"uppercase", fontWeight:700 }}>Parfumerie & Élégance</div>
          </div>
        </div>

        <div style={{ display:"flex", gap:28 }}>
          {SECTIONS.map(s=><button key={s.key} className="nl" onClick={()=>goTo(s.key)}>{s.label}</button>)}
          <button className="nl" onClick={()=>goTo("about")}>À Propos</button>
        </div>

        <div style={{ display:"flex", gap:14, alignItems:"center" }}>
          <a href="https://www.instagram.com/_lunea.store?igsh=emtlM2RsZW1zcjV2&utm_source=qr" target="_blank" rel="noreferrer"
            style={{ fontSize:".65rem", fontWeight:700, color:"#C8405A", textDecoration:"none", letterSpacing:".05em" }}>
            @lunea_store
          </a>
          <div style={{ width:1, height:18, background:"#ddd" }}/>
          <a href="tel:+221783015102" style={{ fontSize:".68rem", fontWeight:700, color:"#1E8A6E", textDecoration:"none" }}>
            📞 783 015 102
          </a>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section style={{
        minHeight:"100vh",
        background:"linear-gradient(160deg,#fff9f5 0%,#fef0f3 35%,#f2eeff 65%,#fef9ee 100%)",
        display:"flex", alignItems:"center", justifyContent:"center",
        padding:"140px 48px 80px", position:"relative", overflow:"hidden", textAlign:"center",
      }}>
        {/* Bulles déco */}
        {[
          {s:460, c:"rgba(200,64,90,0.08)",  t:"-110px", l:"-110px"},
          {s:360, c:"rgba(104,53,200,0.08)", b:"-80px",  r:"-80px"},
          {s:240, c:"rgba(212,130,10,0.07)", t:"38%",    l:"7%"},
          {s:180, c:"rgba(30,138,110,0.07)", t:"20%",    r:"8%"},
        ].map((o,i)=>(
          <div key={i} style={{ position:"absolute", width:o.s, height:o.s, borderRadius:"50%", background:o.c, top:o.t, left:o.l, bottom:o.b, right:o.r, pointerEvents:"none" }}/>
        ))}
        <div className="spin" style={{ position:"absolute", width:580, height:580, borderRadius:"50%", border:"1.5px dashed rgba(200,64,90,0.14)", top:"50%", left:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none" }}/>

        <div style={{ position:"relative", zIndex:1, maxWidth:840 }}>
          {/* Logo */}
          <div className="float a0" style={{ marginBottom:36 }}>
            <div style={{
              width:155, height:155, borderRadius:"50%", margin:"0 auto",
              border:"4px solid #C8405A",
              boxShadow:"0 14px 50px rgba(200,64,90,0.28), 0 4px 16px rgba(0,0,0,0.07)",
              overflow:"hidden",
              background:"linear-gradient(135deg,#FDEEF1,#FEF5E6)",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              {LOGO_IMAGE
                ? <img src={LOGO_IMAGE} alt="logo" style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
                : <div style={{ textAlign:"center" }}>
                    <div style={{ fontSize:"2.6rem" }}>🌸</div>
                    <div style={{ fontSize:".5rem", color:"#C8405A", letterSpacing:".12em", textTransform:"uppercase", fontWeight:800, marginTop:4 }}>Votre Logo</div>
                  </div>
              }
            </div>
          </div>

          <div className="a1" style={{ fontSize:".68rem", letterSpacing:".4em", textTransform:"uppercase", color:"#C8405A", fontWeight:800, marginBottom:18 }}>✦ &nbsp; Boutique Exclusive &nbsp; ✦</div>

          <h1 className="a1" style={{
            fontFamily:"'Playfair Display',serif",
            fontSize:"clamp(4rem,12vw,8rem)", fontWeight:900, lineHeight:.95, letterSpacing:".04em", marginBottom:8,
            background:"linear-gradient(135deg,#C8405A 0%,#E0607A 22%,#6835C8 50%,#C87A10 78%,#C8405A 100%)",
            backgroundSize:"300% 300%", animation:"fadeUp .9s .1s ease both,shimmer 5s linear infinite",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          }}>LUNÉA store</h1>

          <div className="a2" style={{
            fontFamily:"'Playfair Display',serif",
            fontSize:"clamp(.9rem,2.2vw,1.5rem)", fontWeight:400, fontStyle:"italic",
            color:"#999", letterSpacing:".08em", marginBottom:36,
          }}>Store &nbsp;·&nbsp; Parfumerie &amp; Bien-être Olfactif</div>

          <p className="a3" style={{ fontSize:"1rem", lineHeight:1.9, color:"#666", maxWidth:640, margin:"0 auto 44px" }}>
            Lunea Store est une marque spécialisée dans l'univers de la parfumerie et du bien-être olfactif.
            Nous proposons une large gamme de produits tels que des huiles parfumées corporelles, des parfums
            authentiques, des collections privées, parfums d'intensité soigneusement sélectionnés, des lunettes de soleil et des accssoires pour apporter
            fraîcheur, élégance et plaisir des sens au quotidien.
          </p>

          <div className="a4" style={{ display:"flex", gap:14, flexWrap:"wrap", justifyContent:"center" }}>
            {SECTIONS.map(s=>(
              <button key={s.key} className="cta" onClick={()=>goTo(s.key)}
                style={{ background:s.gradient, color:"#fff", boxShadow:`0 6px 20px ${s.color}44` }}
                onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow=`0 14px 34px ${s.color}55`; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow=`0 6px 20px ${s.color}44`; }}
              >{s.emoji} {s.label}</button>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position:"absolute", bottom:36, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, opacity:.45 }}>
          <div style={{ width:2, height:46, background:"linear-gradient(to bottom,transparent,#C8405A)", borderRadius:2 }}/>
          <span style={{ fontSize:".5rem", letterSpacing:".3em", textTransform:"uppercase", color:"#C8405A", fontWeight:800 }}>Découvrir</span>
        </div>
      </section>

      {/* ══ SECTIONS PRODUITS ══ */}
      {SECTIONS.map(s=><ProdSection key={s.key} section={s}/>)}

      {/* ══ À PROPOS ══ */}
      <section id="about" style={{
        padding:"90px 48px",
        background:"linear-gradient(135deg,#1A1A2E 0%,#2D1A3E 50%,#1A2A1E 100%)",
        position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute",top:-100,right:-100,width:400,height:400,borderRadius:"50%",background:"rgba(200,64,90,0.08)",pointerEvents:"none" }}/>
        <div style={{ position:"absolute",bottom:-80,left:-80,width:300,height:300,borderRadius:"50%",background:"rgba(104,53,200,0.08)",pointerEvents:"none" }}/>
        <div style={{ maxWidth:900, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
          <div style={{ fontSize:".62rem", letterSpacing:".4em", textTransform:"uppercase", color:"#E8758A", fontWeight:800, marginBottom:20 }}>✦ &nbsp; Notre Histoire &nbsp; ✦</div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:700, fontStyle:"italic", color:"#fff", marginBottom:28, lineHeight:1.25 }}>
            L'Art du Parfum,<br/>l'Élégance au Quotidien
          </h2>
          <div style={{ width:60, height:4, background:"linear-gradient(to right,#C8405A,#6835C8)", borderRadius:4, margin:"0 auto 32px" }}/>
          <p style={{ fontSize:"1.05rem", lineHeight:2, color:"rgba(255,255,255,0.7)", maxWidth:720, margin:"0 auto" }}>
            Lunea Store est une marque spécialisée dans l'univers de la parfumerie et du bien-être olfactif.
            Nous proposons une large gamme de produits tels que des huiles parfumées corporelles, des parfums
            authentiques, des collections privées, parfums d'intensité soigneusement sélectionnés des lunettes de soleil et des accssoires pour apporter
            fraîcheur, élégance et plaisir des sens au quotidien.
          </p>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background:"#12121E", padding:"68px 48px 30px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))", gap:48, marginBottom:52 }}>

            <div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"2rem", fontWeight:900, background:"linear-gradient(135deg,#C8405A,#E8758A)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", marginBottom:14 }}>LUNÉA</div>
              <div style={{ fontSize:".85rem", color:"rgba(255,255,255,0.48)", lineHeight:1.9, fontStyle:"italic" }}>L'art du parfum,<br/>l'élégance au quotidien.</div>
            </div>

            <div>
              <div style={{ fontSize:".58rem", letterSpacing:".3em", textTransform:"uppercase", color:"#E8758A", fontWeight:800, marginBottom:20 }}>Nos Collections</div>
              {SECTIONS.map(s=>(
                <div key={s.key} className="fl-link" onClick={()=>goTo(s.key)}>{s.emoji} {s.label}</div>
              ))}
            </div>

            <div>
              <div style={{ fontSize:".58rem", letterSpacing:".3em", textTransform:"uppercase", color:"#B499E8", fontWeight:800, marginBottom:20 }}>Réseaux Sociaux</div>
              {[
                {p:"Instagram", h:"@lunea_store",   c:"#E8758A", bg:"rgba(200,64,90,0.15)",   url:"https://instagram.com/lunea_store",  a:"IG"},
                {p:"TikTok",    h:"@lunea_store00", c:"#B499E8", bg:"rgba(104,53,200,0.15)",  url:"https://tiktok.com/@lunea_store00", a:"TT"},
                {p:"Snapchat",  h:"mdbn2024",       c:"#F0C060", bg:"rgba(212,130,10,0.15)",  url:"#",                                 a:"SC"},
              ].map(s=>(
                <a key={s.p} href={s.url} target="_blank" rel="noreferrer" className="soc-row">
                  <div style={{ width:38,height:38,borderRadius:"50%",flexShrink:0,background:s.bg,border:`2px solid ${s.c}55`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:".65rem",color:s.c,fontWeight:800 }}>{s.a}</div>
                  <div>
                    <div style={{ fontSize:".5rem",letterSpacing:".2em",textTransform:"uppercase",color:s.c,fontWeight:800 }}>{s.p}</div>
                    <div style={{ fontSize:".88rem",color:"rgba(255,255,255,0.52)" }}>{s.h}</div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <div style={{ fontSize:".58rem", letterSpacing:".3em", textTransform:"uppercase", color:"#7DCDB8", fontWeight:800, marginBottom:20 }}>Contact</div>
              {["783 015 102","768 680 238"].map(t=>(
                <div key={t} style={{ display:"flex",alignItems:"center",gap:10,fontSize:".9rem",color:"rgba(255,255,255,0.58)",marginBottom:12 }}>
                  📞 +221 {t}
                </div>
              ))}
              <div style={{ marginTop:22 }}>
                <div style={{ fontSize:".55rem",letterSpacing:".2em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:10 }}>Commandez aussi via</div>
                <a href="https://wa.me/221783015102" target="_blank" rel="noreferrer"
                  style={{ display:"inline-flex",alignItems:"center",gap:8,fontSize:".8rem",fontWeight:700,color:"#25D366",border:"2px solid rgba(37,211,102,0.3)",padding:"9px 20px",borderRadius:30,textDecoration:"none",transition:"background .3s" }}
                  onMouseEnter={e=>e.currentTarget.style.background="rgba(37,211,102,0.1)"}
                  onMouseLeave={e=>e.currentTarget.style.background="transparent"}
                >WhatsApp →</a>
              </div>
            </div>
          </div>

          <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:22, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
            <span style={{ fontSize:".56rem", letterSpacing:".14em", color:"rgba(255,255,255,0.22)", textTransform:"uppercase" }}>© 2025 Lunéa Store — Tous droits réservés</span>
            <span style={{ fontSize:".56rem", letterSpacing:".14em", color:"rgba(255,255,255,0.22)", fontStyle:"italic" }}>✦ Fraîcheur · Élégance · Plaisir des Sens ✦</span>
          </div>
        </div>
      </footer>
    </div>
  );
}