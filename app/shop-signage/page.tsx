import Script from "next/script";
import Link from "next/link";
import LedScrollStory from "./LedScrollStory";

const signageTypes = [
  ["01", "Shopfront & Fascia", "Bold exterior signage designed to make your business clear, professional and easy to find."],
  ["02", "Window Graphics", "Printed window graphics, frosted films, opening hours and promotional displays."],
  ["03", "One-Way Vision", "Turn glass into high-impact advertising while maintaining visibility from inside."],
  ["04", "Internal Signage", "Reception logos, wall graphics, wayfinding and branded customer-facing spaces."],
];
const shopProjects = [
  {src:"/shop-work/drizzle-lab-illuminated-signage.jpeg",name:"Drizzle Lab",type:"Illuminated Fascia + Full Brand Wrap"},
  {src:"/shop-work/envy-shopfront-signage.jpeg",name:"Envy Hair & Barber Shop",type:"Fascia Signage + Window Branding"},
  {src:"/shop-work/top-gym-window-signage.jpeg",name:"Top Gym Knoxfield",type:"Commercial Window Graphics"},
  {src:"/shop-work/top-gym-full-shopfront.jpeg",name:"Top Gym Knoxfield",type:"Full Shopfront Window Signage"},
  {src:"/shop-work/drizzle-lab-night-signage.jpeg",name:"Drizzle Lab",type:"Complete Night-Time Shop Branding"},
];

export const metadata = {
  title: "Custom Shop Signage Melbourne | Elite Custom",
  description: "Custom shopfront signage, window graphics, one-way vision and internal business signage designed, produced and installed in Melbourne.",
};

export default function ShopSignage(){return <main className="shopPage">
  <nav className="nav"><Link href="/" className="brand"><img src="/elite-customs.jpeg" alt="Elite Customs"/></Link><details className="phoneMenu"><summary>Menu</summary><div><a href="/">Home</a><a href="/#services">Services</a><a href="/shop-signage">Shop Signage</a><a href="/#packages">Packages</a><a href="/#work">Our Work</a><a href="/#about">About</a></div></details><div className="navLinks"><Link href="/">Home</Link><a href="#signage-types">Signage Types</a><a href="#process">Process</a><Link href="/#work">Our Work</Link></div><a className="navCta" href="#shop-quote">Get a Quote</a></nav>
  <LedScrollStory/>
  <div className="ticker"><div>SHOPFRONT SIGNAGE • FASCIA SIGNS • WINDOW GRAPHICS • ONE-WAY VISION • RECEPTION LOGOS • WALL GRAPHICS • WAYFINDING • MELBOURNE • SHOPFRONT SIGNAGE • FASCIA SIGNS • WINDOW GRAPHICS • ONE-WAY VISION •</div></div>
  <section id="signage-types" className="section dark shopTypes"><div className="sectionHead inverse"><div><p className="kicker">[ CUSTOM SHOP SIGNAGE ]</p><h2>ONE BRAND.<br/><em>EVERY SURFACE.</em></h2></div><p>We design, produce and install signage around your space, brand and visibility goals. Every project is custom quoted.</p></div><div className="shopTypeGrid">{signageTypes.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#shop-quote">Get a Quote →</a></article>)}</div></section>
  <section id="shop-work" className="shopWork"><div className="shopWorkHead"><div><p className="kicker">[ REAL ELITE PROJECTS ]</p><h2>OUR SHOP SIGNAGE.<br/><em>OUT IN THE WORLD.</em></h2></div><p>Shopfronts, illuminated signage and commercial window graphics designed to make Melbourne businesses impossible to miss.</p></div><div className="shopWorkGrid">{shopProjects.map((project,index)=><a href="#shop-quote" className={`shopProject project${index+1}`} key={`${project.name}-${index}`}><img src={project.src} alt={`${project.name} ${project.type}`} loading="lazy"/><div className="shopProjectOverlay"><span>{String(index+1).padStart(2,"0")} / ELITE PROJECT</span><h3>{project.name}</h3><p>{project.type}</p><b>START YOUR PROJECT →</b></div></a>)}</div><p className="shopWorkHint">CLICK ANY PROJECT TO GET A CUSTOM QUOTE <span>↗</span></p></section>
  <section className="shopStatement"><div><p className="kicker">[ THE COMPLETE SYSTEM ]</p><h2>FROM BLANK SPACE TO<br/><em>BRANDED BUSINESS.</em></h2><p>Good shop signage does more than show a name. It builds trust, catches attention and tells customers exactly who you are before they walk through the door.</p><a className="btnPrimary" href="#shop-quote">Start Your Shopfront →</a></div><div className="shopStack"><span>FASCIA</span><span>WINDOWS</span><span>WALLS</span><span>WAYFINDING</span></div></section>
  <section id="process" className="section light process"><div className="sectionHead"><div><p className="kicker">[ HOW IT WORKS ]</p><h2>CUSTOM PROCESS.<br/><em>CLEAN RESULT.</em></h2></div></div><div className="steps">{[["01","Tell us about your space"],["02","Site measure & quote"],["03","Custom signage design"],["04","Approve the artwork"],["05","Produce & install"]].map(([n,t])=><div key={n}><span>{n}</span><p>{t}</p></div>)}</div></section>
  <section id="shop-quote" className="quote"><div className="quoteIntro"><p className="kicker">[ CUSTOM SHOP SIGNAGE ]</p><h2>LET’S BUILD A<br/><em>STRONGER SHOPFRONT.</em></h2><p>Tell us about your business, location and the signage you need. We’ll recommend the right solution and prepare a custom quote.</p><a className="btnPrimary callQuote" href="tel:0468095014">Prefer to talk? Call 0468 095 014</a></div><div className="ghlFrame"><div className="formStatus"><span/> REQUEST YOUR QUOTE</div><iframe src="https://links.elitebrandscaling.com/widget/form/9TVlZEpEhrSbX9CkAnPu" id="shop-quote-intake" title="Request a quote from Elite Custom Signage" width="100%" height="1447" style={{display:"block",width:"100%",height:1447,border:0,background:"#fff"}} loading="eager"/><p style={{padding:"16px",margin:0,color:"#17251b",fontSize:14,lineHeight:1.6}}>Having trouble viewing the form? <a href="https://links.elitebrandscaling.com/widget/form/9TVlZEpEhrSbX9CkAnPu" target="_blank" rel="noopener noreferrer" style={{color:"#126a31",textDecoration:"underline",fontWeight:700}}>Open the quote form in a new tab ↗</a></p></div></section>
  <footer><img src="/elite-customs.jpeg" alt="Elite Customs"/><div><p>8/8 Enterprise Drive, Rowville VIC 3178</p><p>0468 095 014</p><div className="footerLinks"><Link href="/">HOME</Link><a href="https://www.instagram.com/elitecustomsignage" target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a><a href="https://www.elitevanfitouts.com.au/" target="_blank" rel="noopener noreferrer">ELITE VAN FITOUTS ↗</a></div></div><p>BUILT FOR BUSINESS. DESIGNED TO BE SEEN.</p></footer><a className="mobileQuote" href="#shop-quote">GET A SHOP SIGNAGE QUOTE →</a>
</main>}
