import Link from "next/link";
import GalleryMedia from "./GalleryMedia";
const newMedia = [
  { kind: "image", src: "/work/power-arc-rear.jpg", alt: "Power Arc Electrical van rear" },
  { kind: "image", src: "/work/power-arc-angle.jpg", alt: "Power Arc Electrical van side and rear" },
  { kind: "image", src: "/work/my-electrician-new.jpg", alt: "My Electrician commercial van" },
  { kind: "image", src: "/work/legacy-autoglass-rear.jpg", alt: "Legacy Autoglass van rear" },
  { kind: "image", src: "/work/legacy-autoglass-side.jpg", alt: "Legacy Autoglass van side" },
  { kind: "video", src: "/work/elite-workshop-video.mp4", alt: "Workshop project video" },
  { kind: "video", src: "/work/power-arc-video.mp4", alt: "Power Arc Electrical vehicle video" },
];
const work = [
 {src:"/work/my-electrician.webp",name:"My Electrician 24/7",type:"Commercial Vehicle Branding"},
 {src:"/work/pureline-plumbing.webp",name:"Pureline Plumbing Solutions",type:"Commercial Van Wrap"},
 {src:"/work/legacy-autoglass.webp",name:"Legacy Autoglass",type:"Custom Van Signage"},
 {src:"/work/elite-workshop-vehicles.jpeg",name:"Elite Workshop Vehicles",type:"Commercial Vehicle Branding"},
 {src:"/work/all-audio-systems-wrap.jpeg",name:"All Audio Systems",type:"Partial Wrap + One-Way Vision"},
 {src:"/work/s-painting-van-signage.jpeg",name:"S Painting",type:"Vehicle Signage + One-Way Vision"},
 {src:"/work/admiral-marine-fitout-signage.jpeg",name:"Admiral Marine",type:"Commercial Vehicle Signage"},
];
const shopWork = [
 {src:"/shop-work/drizzle-lab-illuminated-signage.jpeg",name:"Drizzle Lab",type:"Illuminated Fascia Signage"},
 {src:"/shop-work/envy-shopfront-signage.jpeg",name:"Envy Hair & Barber Shop",type:"Fascia Signage + Window Branding"},
 {src:"/shop-work/top-gym-window-signage.jpeg",name:"Top Gym Knoxfield",type:"Commercial Window Graphics"},
 {src:"/shop-work/top-gym-full-shopfront.jpeg",name:"Top Gym Knoxfield — Shopfront",type:"Full Shopfront Window Signage"},
 {src:"/shop-work/drizzle-lab-night-signage.jpeg",name:"Drizzle Lab — Night",type:"Illuminated Night-Time Signage"},
];
export const metadata={title:"Our Work | Elite Custom Signage",description:"See real vehicle signage, decals and wraps completed by Elite Custom Signage in Rowville, Melbourne."};
export default function OurWork(){
return <main className="galleryPage">
<nav className="nav"><Link className="brand" href="/"><img src="/elite-customs.jpeg" alt="Elite Custom Signage"/></Link><div className="navLinks"><Link href="/">Home</Link><Link href="/pricing">Pricing</Link><Link href="/shop-signage">Shop Signage</Link></div><Link className="navCta" href="/#quote">Get a Quote</Link></nav>
<section className="galleryIntro"><h1>OUR <em>WORK.</em></h1></section>
<section className="galleryGrid galleryMediaGrid" aria-label="Completed vehicle signage photos and videos">
{newMedia.map(p=><GalleryMedia key={p.src} src={p.src} alt={p.alt} kind={p.kind as "image" | "video"}/>)}
{work.map(p=><GalleryMedia key={p.src} src={p.src} alt={p.name}/>)}
{shopWork.map(p=><GalleryMedia key={p.src} src={p.src} alt={p.name}/>)}
</section>
<section className="gallerySocial"><h2>SEE MORE OF OUR WORK.</h2><p>Follow our latest wraps, designs and completed installations.</p><div><a href="https://www.instagram.com/elitecustomsignage/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://www.tiktok.com/@elite_custom_signage_" target="_blank" rel="noopener noreferrer">TikTok ↗</a></div></section>
<section className="galleryCTA"><h2>READY TO BRAND YOUR VEHICLE?</h2><Link className="btnPrimary" href="/#quote">Get a Quote →</Link><a className="btnOutline" href="tel:0468095014">Call Now</a></section>
<div className="stickyContact"><Link href="/#quote">Get a Quote</Link><a href="tel:0468095014">Call Now</a></div>
</main>
}