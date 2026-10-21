'use client';

import { useState } from 'react';
import Link from 'next/link';
import prices from '../pricing/packages.json';
import { vehicleCatalog, vehicleStyles, formatPrice, type VehicleCategory } from './vehicle-pricing';

type Selection = { category: VehicleCategory | 'other'; make: string; model: string; style: string };
const categories = [{ value: 'vans', label: 'Van' }, { value: 'utes', label: 'Ute' }, { value: 'trucks', label: 'Truck' }, { value: 'hatchbacks', label: 'Hatchback' }, { value: 'other', label: 'Another vehicle / not sure' }];

export default function VehiclePriceFinder() {
  const [category, setCategory] = useState<Selection['category']>('vans');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [customMake, setCustomMake] = useState('');
  const [customModel, setCustomModel] = useState('');
  const [style, setStyle] = useState('');
  const [selection, setSelection] = useState<Selection | null>(null);
  const catalog: Record<string, string[]> = category === 'other' ? {} : vehicleCatalog[category];
  const models = catalog[make] ?? [];
  const chosenMake = make === 'other' ? customMake.trim() : make;
  const chosenModel = make === 'other' || model === 'other' ? customModel.trim() : model;
  const options = selection ? prices.filter(p => p.category === selection.category && p.vehicle === selection.style) : [];
  const query = selection ? new URLSearchParams({ category: selection.category, style: selection.style, make: selection.make, model: selection.model }).toString() : '';

  function changeCategory(value: Selection['category']) {
    setCategory(value); setMake(''); setModel(''); setCustomMake(''); setCustomModel(''); setStyle(''); setSelection(null);
  }

  return <section className="vehicleFinder" id="vehicle-prices" aria-labelledby="vehicle-finder-title">
    <div className="finderHeading"><div><p className="kicker">[ YOUR VEHICLE. YOUR PRICE GUIDE. ]</p><h2 id="vehicle-finder-title">WHAT DO<br/><em>YOU DRIVE?</em></h2></div><p>Choose your vehicle to see rough starting prices. Every figure comes from our vehicle price guide, with a tailored quote to confirm the final details.</p></div>
    <form className="finderForm" onSubmit={event => { event.preventDefault(); setSelection({ category, make: chosenMake, model: chosenModel, style }); }}>
      <label>Vehicle type<select aria-label="Vehicle type" value={category} onChange={event => changeCategory(event.target.value as Selection['category'])}>{categories.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}</select></label>
      {category !== 'other' ? <>
        <label>Make<select aria-label="Make" required value={make} onChange={event => { setMake(event.target.value); setModel(''); setCustomMake(''); setCustomModel(''); setSelection(null); }}><option value="">Choose make</option>{Object.keys(catalog).sort().map(m => <option key={m} value={m}>{m}</option>)}<option value="other">Other / not listed</option></select></label>
        {make === 'other' ? <label>Your make<input aria-label="Your make" required value={customMake} onChange={event => { setCustomMake(event.target.value); setSelection(null); }} placeholder="Enter make" maxLength={60}/></label> : null}
        {make === 'other' || model === 'other' ? <label>Your model<input aria-label="Your model" required value={customModel} onChange={event => { setCustomModel(event.target.value); setSelection(null); }} placeholder="Enter model" maxLength={60}/></label> : null}
        {make !== 'other' ? <label>Model<select aria-label="Model" required disabled={!make} value={model} onChange={event => { setModel(event.target.value); setCustomModel(''); setSelection(null); }}><option value="">Choose model</option>{models.map(m => <option key={m} value={m}>{m}</option>)}<option value="other">Other / not listed</option></select></label> : null}
        <label>Body style / size<select aria-label="Body style / size" required value={style} onChange={event => { setStyle(event.target.value); setSelection(null); }}><option value="">Choose body style</option>{vehicleStyles[category].map(s => <option key={s} value={s}>{s}</option>)}</select></label>
      </> : null}
      <button type="submit" className="btnPrimary">{category === 'other' ? 'Help me choose →' : 'Show my rough prices →'}</button>
    </form>
    {category !== 'other' ? <p className="finderHint">Choose the body style that matches your vehicle. Cab type, tray configuration, wheelbase and roof height can affect your quote.</p> : null}
    {selection ? <div className="finderResults" aria-live="polite" aria-atomic="true">
      {options.length ? <><div className="finderResultHeading"><div><p>ROUGH STARTING PRICES FOR</p><h3>{selection.make} {selection.model}</h3><span>{selection.style} · AUD + GST</span></div><Link href={`/pricing?${query}#price-guide`}>Explore prices for this vehicle ↗</Link></div>
        <div className="finderPriceGrid">{options.map(p => <article key={p.id}><h4>{p.name}</h4><p>{p.coverage}</p><strong><small>FROM </small>{formatPrice(p.price)}<small> + GST</small></strong></article>)}</div>
        <p className="finderEstimateNote">These are starting prices for your selected body style, subject to vehicle details, design and coverage. One-way vision and other add-ons cost extra; the one-way vision option above is a separately priced service.</p>
        <div className="finderResultActions"><Link className="btnPrimary" href={`/pricing?${query}#price-guide`}>View coverage & full price guide →</Link><Link href="/#quote">Get a tailored quote ↗</Link></div></> : <div className="finderUnknown"><h3>Let’s find the right option for your vehicle.</h3><p>Send us the make, model and year. Our team will recommend the coverage and confirm a rough price.</p><Link className="btnPrimary" href="/#quote">Ask the team →</Link><Link href="/pricing">Browse all vehicle prices ↗</Link></div>}
    </div> : <Link className="finderBrowse" href="/pricing">Or browse all vehicle prices ↗</Link>}
  </section>;
}
