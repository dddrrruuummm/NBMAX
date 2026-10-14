"use client";
import {useEffect,useRef,useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight,Check,Plus,Search,X} from "lucide-react";
import {categories,materials,imagePath,type Category,type Material} from "@/lib/site";
import {useBrief} from "./brief-provider";
import {Button} from "./ui/button";

export function MaterialLibrary({featured=false}:{featured?:boolean}){
 const [category,setCategory]=useState<Category>("All materials");
 const [query,setQuery]=useState("");
 const [active,setActive]=useState<Material|null>(null);
 const detail=useRef<HTMLDialogElement>(null);
 const brief=useBrief();
 useEffect(()=>{if(!featured){const value=new URLSearchParams(location.search).get("category");if(categories.includes(value as Category))setCategory(value as Category);}},[featured]);
 const featuredIds=["surface-selection","timber","roofing","stone","coatings","hand-tools","taps","fittings"];
 const available=featured?featuredIds.flatMap(id=>materials.filter(m=>m.id===id)):materials;
 const shown=available.filter(m=>(category==="All materials"||m.category===category)&&(`${m.name} ${m.category} ${m.intro} ${m.code}`).toLowerCase().includes(query.toLowerCase()));
 function show(item:Material){setActive(item);detail.current?.showModal();}
 return <section className={`material-library page-width ${featured?"featured-library":""}`} id="materials">
  <div className="section-heading">{featured?<h2>Material<br/>selection.</h2>:<h1>Material library</h1>}<div className="section-side"><p>Explore construction materials, finishes, hardware and plumbing. Select the categories that belong in your inquiry.</p>{featured&&<Link className="text-link" href="/showcase">Explore all materials</Link>}</div></div>
  {!featured&&<div className="library-tools"><div className="category-tabs" role="group" aria-label="Filter by material category">{categories.map(c=><button key={c} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><label className="search-field"><Search size={17}/><span className="sr-only">Search materials</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search materials"/>{query&&<button onClick={()=>setQuery("")} aria-label="Clear search" title="Clear search"><X size={16}/></button>}</label></div>}
  {!featured&&<div className="library-count"><span aria-live="polite">{shown.length} material {shown.length===1?"category":"categories"}</span><span>Select for inquiry</span></div>}
  <div className="material-grid">{shown.map((m,i)=><article className="material-item" key={m.id}>
    <button className="material-photo" onClick={()=>show(m)} aria-label={`View ${m.name}`}><Image src={imagePath(m.image)} alt={m.alt} fill sizes={`(max-width: 600px) 100vw, (max-width: 900px) 50vw, ${featured?(i%4===0||i%4===3?"55vw":"40vw"):"30vw"}`} style={{objectPosition:m.position||"center"}} loading={featured&&i<2?"eager":"lazy"}/><span className="photo-open"><ArrowUpRight size={22}/></span></button>
    <div className="material-caption"><div><p>{m.application}</p><h3><button onClick={()=>show(m)}>{m.name}</button></h3></div><Button variant="icon" className={brief.selected.includes(m.id)?"selected-add":""} onClick={()=>brief.toggle(m.id)} title={brief.selected.includes(m.id)?"Remove from brief":"Add to material brief"} aria-label={`${brief.selected.includes(m.id)?"Remove":"Add"} ${m.name} ${brief.selected.includes(m.id)?"from":"to"} brief`} aria-pressed={brief.selected.includes(m.id)}>{brief.selected.includes(m.id)?<Check size={19}/>:<Plus size={19}/>}</Button></div>
  </article>)}</div>
  {!shown.length&&<div className="empty-state"><Search size={28}/><h2>No materials found.</h2><p>Try a broader name, or explore all material categories.</p><Button variant="outline" onClick={()=>{setQuery("");setCategory("All materials");}}>Reset filters</Button></div>}
  <div className="library-footnote"><p>Reference photography illustrates material categories, not a verified stock list. Options, specifications and availability are confirmed for each inquiry.</p>{featured&&<Link href="/showcase" className="text-link">All materials</Link>}</div>
  <dialog ref={detail} className="material-dialog" aria-labelledby="material-title" onClick={e=>{if(e.target===e.currentTarget)detail.current?.close();}}>{active&&<div className="material-detail"><Button variant="icon" className="dialog-close" aria-label="Close material details" title="Close" onClick={()=>detail.current?.close()}><X size={22}/></Button><div className="detail-photo"><Image src={imagePath(active.image)} alt={active.alt} fill sizes="(max-width: 700px) 90vw, 500px" style={{objectPosition:active.position||"center"}}/></div><div className="detail-copy"><p>{active.category} / {active.code}</p><h2 id="material-title">{active.name}</h2><p>{active.intro}</p><h3>Useful details for your inquiry</h3><ul>{active.brief.map(b=><li key={b}>{b}</li>)}</ul><Button onClick={()=>brief.toggle(active.id)}>{brief.selected.includes(active.id)?<Check size={18}/>:<Plus size={18}/>} {brief.selected.includes(active.id)?"Added to your brief":"Add to material brief"}</Button><Link href={`/contact?material=${active.id}`} className="text-link" onClick={()=>detail.current?.close()}>Ask about this category</Link></div></div>}</dialog>
 </section>;
}
