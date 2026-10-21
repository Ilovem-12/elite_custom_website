'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import packages from './packages.json';
const categories = [{id:'utes',label:'Utes',description:'Dual cabs, single cabs, trays and toolboxes.'},{id:'vans',label:'Vans',description:'Standard and extra-large commercial vans.'},{id:'trucks',label:'Trucks',description:'Truck cabins, tray panels and tipper packages.'},{id:'hatchbacks',label:'Hatchbacks',description:'Compact vehicle branding and rear-window one-way vision.'}];
const dollars = (price: number) => new Intl.NumberFormat('en-AU',{style:'currency',currency:'AUD',minimumFractionDigits:Number.isInteger(price)?0:2,maximumFractionDigits:2}).format(price);
export default function PricingExplorer() {
  const [category,setCategory]=useState('utes');
  const [vehicle,setVehicle]=useState('all');
  const current=categories.find(c=>c.id===category)!;
  const available=packages.filter(p=>p.category===category);
  const vehicles=[...new Set(available.map(p=>p.vehicle))];
  const shown=available.filter(p=>vehicle==='all'||p.vehicle===vehicle);
  return <section className="priceGuide" id="price-guide" aria-labelledby="guide-title">
    <div className="pricingSectionHeading"><div><p className="pricingEyebrow">FIND YOUR VEHICLE</p><h2 id="guide-title">Coverage that<br/><em>works for you.</em></h2></div><p>Start with your vehicle type, then compare your options. All prices are a starting guide, in AUD and excluding GST.</p></div>
    <div className="vehicleCategories" aria-label="Vehicle type">{categories.map(c=><button key={c.id} type="button" aria-pressed={category===c.id} onClick={()=>{setCategory(c.id);setVehicle('all');}}>{c.label}<span>↗</span></button>)}</div>
    <div className="pricingToolbar"><div><h3>{current.label}</h3><p>{current.description}</p></div><label>Vehicle style<select value={vehicle} onChange={e=>setVehicle(e.target.value)}><option value="all">All {current.label.toLowerCase()}</option>{vehicles.map(v=><option key={v} value={v}>{v}</option>)}</select></label><a className="brochureDownload" href={`/pricing/${category}-price-guide.pdf`} download>Download {current.label.toLowerCase()} guide ↓</a></div>
    <p className="pricingCount" role="status">{shown.length} options · Illustrations show approximate coverage</p>
    <div className="pricingCards">{shown.map(p=><article className="vehiclePriceCard" key={p.id}><div className="vehiclePriceImage"><Image src={p.image} alt={`${p.vehicle}: ${p.name} coverage illustration`} width={572} height={217}/><span>COVERAGE GUIDE</span></div><div className="vehiclePriceBody"><p className="vehicleType">{p.vehicle}</p><h3>{p.name}</h3><p className="vehicleCoverage">{p.coverage}</p><div className="vehiclePrice"><span>FROM</span><p>{dollars(p.price)}<small> + GST</small></p></div><Link href="/#quote" aria-label={`Request a quote for ${p.vehicle} ${p.name}`}>Get a tailored quote <span>↗</span></Link></div></article>)}</div>
    <aside className="pricingTerms"><h3>A guide to your quote</h3><p>Starting prices depend on vehicle size, design complexity, coverage, specific requests and vehicle condition. Our team will confirm the final scope and price before you proceed.</p><p>One-way vision and other add-ons are charged separately from wrap packages. The hatchback one-way vision option is priced as its own service. Vehicle illustrations are a coverage guide; window graphics and extras require a separate quote.</p></aside>
  </section>;
}
