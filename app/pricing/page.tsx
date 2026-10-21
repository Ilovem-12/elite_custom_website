import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import PricingExplorer from './PricingExplorer';
import './pricing.css';
export const metadata: Metadata = {
  title: 'Vehicle Wrap & Signage Prices | Elite Custom Melbourne',
  description: 'Explore vehicle signage and wrap starting prices for utes, vans, trucks and hatchbacks. Compare coverage and request a tailored quote from Elite Custom, Rowville.',
  alternates: { canonical: 'https://www.elitecustom.com.au/pricing' },
};
export default function PricingPage() {
  return <main className="pricingPage">
    <nav className="nav" aria-label="Main navigation"><Link href="/" className="brand"><Image src="/elite-customs.jpeg" alt="Elite Customs home" width={160} height={58}/></Link><details className="phoneMenu"><summary>Menu</summary><div><Link href="/">Home</Link><Link href="/#services">Services</Link><Link href="/shop-signage">Shop Signage</Link><Link href="/pricing" aria-current="page">Pricing</Link><Link href="/#work">Our Work</Link></div></details><div className="navLinks"><Link href="/">Home</Link><Link href="/#services">Services</Link><Link href="/shop-signage">Shop Signage</Link><Link href="/pricing" aria-current="page">Pricing</Link><Link href="/#work">Our Work</Link></div><Link className="navCta" href="/#quote">Get a Quote</Link></nav>
    <header className="pricingHero"><div className="pricingHeroInner"><p className="pricingEyebrow">ELITE CUSTOM / VEHICLE PRICE GUIDE 2026</p><h1>YOUR VEHICLE.<br/><em>YOUR IMPACT.</em></h1><p className="pricingIntro">Find the right coverage for your next business move. Explore vehicle-specific starting prices, see the coverage and make it yours.</p><div className="pricingHeroActions"><a href="#price-guide" className="btnPrimary">Explore the prices ↓</a><a href="tel:0468095014">Talk to the team ↗</a></div><p className="pricingHeroNote">AUD · STARTING PRICES + GST · CUSTOM QUOTED</p></div><div className="pricingHeroVisual"><Image src="/pricing/vehicle-4.webp" alt="Dual cab ute illustration showing half-wrap coverage in green" width={572} height={217} priority/><span>GREEN SHOWS APPROXIMATE GRAPHIC COVERAGE</span></div></header>
    <PricingExplorer/>
    <section className="pricingHelp"><div><p className="pricingEyebrow">LET’S FIND YOUR FIT</p><h2>Not sure where<br/>to start?</h2><p>Tell us your vehicle make, model and year, what you want to achieve and your rough budget. Our team can help you choose the coverage.</p></div><div className="pricingHelpActions"><Link className="btnPrimary" href="/#quote">Help me choose →</Link><a href="tel:0468095014">Call 0468 095 014</a></div></section>
    <footer><Image src="/elite-customs.jpeg" alt="Elite Customs" width={170} height={80}/><div><p>8/8 Enterprise Drive, Rowville VIC 3178</p><p><a href="tel:0468095014">0468 095 014</a></p><Link href="/">Back to home →</Link></div><p>BUILT FOR WORK. DESIGNED TO PERFORM.</p></footer><Link className="mobileQuote" href="/#quote">GET A QUOTE →</Link>
  </main>;
}
