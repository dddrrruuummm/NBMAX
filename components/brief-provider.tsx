"use client";
import {createContext,useContext,useEffect,useRef,useState,type ReactNode} from "react";
import Link from "next/link";
import {ArrowUpRight,ClipboardList,Download,Trash2,X} from "lucide-react";
import {materials,site,type Material} from "@/lib/site";
import {downloadText} from "@/lib/download";
import {Button} from "./ui/button";

type BriefContextType={selected:string[];ready:boolean;toggle:(id:string)=>void;open:()=>void};
const BriefContext=createContext<BriefContextType|null>(null);
export function useBrief(){const value=useContext(BriefContext);if(!value)throw new Error("Brief provider is required");return value;}
export function formatBrief(items:Material[]){return items.map(item=>`${item.code} - ${item.name}\nQuantity: \nSpecification: `).join("\n\n");}

export function BriefProvider({children}:{children:ReactNode}){
 const [selected,setSelected]=useState<string[]>([]);
 const [ready,setReady]=useState(false);
 const dialog=useRef<HTMLDialogElement>(null);
 const opener=useRef<HTMLElement|null>(null);
 useEffect(()=>{try{const value=JSON.parse(localStorage.getItem("nbmax-brief")||"[]");if(Array.isArray(value))setSelected(value.filter((id:unknown)=>typeof id==="string"&&materials.some(m=>m.id===id)));}catch{}setReady(true);},[]);
 useEffect(()=>{if(ready)try{localStorage.setItem("nbmax-brief",JSON.stringify(selected));}catch{}},[selected,ready]);
 const chosen=materials.filter(m=>selected.includes(m.id));
 function toggle(id:string){setSelected(prev=>prev.includes(id)?prev.filter(x=>x!==id):[...prev,id]);}
 function open(){opener.current=document.activeElement as HTMLElement;dialog.current?.showModal();}
 function close(){dialog.current?.close();opener.current?.focus();}
 return <BriefContext.Provider value={{selected,ready,toggle,open}}>{children}<dialog ref={dialog} className="brief-dialog" aria-labelledby="brief-title" onClick={e=>{if(e.target===e.currentTarget)close();}} onClose={()=>opener.current?.focus()}>
   <div className="brief-heading"><span><ClipboardList size={18}/>Selected for inquiry</span><Button variant="icon" onClick={close} aria-label="Close material brief" title="Close"><X size={22}/></Button></div>
   <h2 id="brief-title">Your material list</h2>
   <p className="brief-lead">{chosen.length?`${chosen.length} material ${chosen.length===1?"category":"categories"} selected for your inquiry.`:"Your list is ready for its first material."}</p>
   {chosen.length?<><ul className="brief-items">{chosen.map(item=><li key={item.id}><span className="code">{item.code}</span><span>{item.name}</span><Button variant="icon" title={`Remove ${item.name}`} aria-label={`Remove ${item.name}`} onClick={()=>toggle(item.id)}><Trash2 size={17}/></Button></li>)}</ul><div className="brief-actions"><Link href="/contact" className="button" onClick={close}>Request a quotation <ArrowUpRight size={18}/></Link><Button variant="outline" onClick={()=>downloadText(`${site.name} / Material brief\n\n${formatBrief(chosen)}\n\nProject: \nDelivery location: \nRequired timing: \n\nContact: ${site.email}`,"NB-MAX-material-brief.txt")}><Download size={17}/>Download list</Button></div><p className="fine-print">Materials are selected for inquiry. Availability and specifications are confirmed with your quotation.</p></>:<Link href="/showcase" className="button" onClick={close}>Explore materials <ArrowUpRight size={18}/></Link>}
 </dialog></BriefContext.Provider>;
}
