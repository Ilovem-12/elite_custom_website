import Link from "next/link";
const work = [
 {src:"/work/my-electrician.webp",name:"My Electrician 24/7",type:"Commercial Vehicle Branding"},
 {src:"/work/pureline-plumbing.webp",name:"Pureline Plumbing Solutions",type:"Commercial Van Wrap"},
 {src:"/work/elite-workshop-vehicles.jpeg",name:"Elite Workshop",type:"Commercial Vehicle Branding"},
 {src:"/work/all-audio-systems-wrap.jpeg",name:"All Audio Systems",type:"Partial Wrap + One-Way Vision"},
 {src:"/work/s-painting-van-signage.jpeg",name:"S Painting",type:"Vehicle Signage + One-Way Vision"},
];
export const metadata={title:"Our Work | Elite Custom Signage",description:"See real vehicle signage, decals and wraps completed by Elite Custom Signage in Rowville, Melbourne."};
export default function OurWork(){
return <main className="galleryPage">
<nav className="nav"><Link className="brand" href="/"><img src="/elite-customs.jpeg" alt="Elite Custom Signage"/></Link><div className="navLinks"><Link href="/">Home</Link><Link href="/pricing">Pricing</Link><Link href="/shop-signage">Shop Signage</Link></div><Link className="navCta" href="/#quote">Get a Quote</Link></nav>
<section className="galleryIntro"><p className="kicker">[ REAL PROJECTS. REAL BUSINESSES. ]</p><h1>OUR <em>WORK.</em></h1><p>Vehicle wraps, commercial signage and decals — designed, produced and installed in Melbourne.</p></section>
<section className="galleryGrid" aria-label="Completed commercial vehicle signage projects">{work.map(p=><article key={p.name}><img src={p.src} alt={p.name+" vehicle signage project"} loading="lazy"/><div><h2>{p.name}</h2><p>{p.type}</p></div></article>)}</section>
<section className="gallerySocial"><h2>SEE MORE OF OUR WORK.</h2><p>Follow our latest wraps, designs and completed installations.</p><div><a href="https://www.instagram.com/elitecustomsignage/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://www.tiktok.com/@elite_custom_signage_" target="_blank" rel="noopener noreferrer">TikTok ↗</a></div></section>
<section className="galleryCTA"><h2>READY TO BRAND YOUR VEHICLE?</h2><Link className="btnPrimary" href="/#quote">Get a Quote →</Link><a className="btnOutline" href="tel:0468095014">Call Now</a></section>
<div className="stickyContact"><Link href="/#quote">Get a Quote</Link><a href="tel:0468095014">Call Now</a></div>
</main>
}