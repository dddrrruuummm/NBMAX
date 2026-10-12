"use client";
import {useEffect,useRef,useState,type FormEvent} from "react";
import {ArrowUpRight,Check,Download,Plus} from "lucide-react";
import {materials,site} from "@/lib/site";
import {useBrief,formatBrief} from "./brief-provider";
import {Button} from "./ui/button";
import {downloadText} from "@/lib/download";

export function InquiryForm(){
 const brief=useBrief();const form=useRef<HTMLFormElement>(null);const entryApplied=useRef(false);const [status,setStatus]=useState("");
 useEffect(()=>{if(!brief.ready||entryApplied.current)return;entryApplied.current=true;const id=new URLSearchParams(location.search).get("material");if(id&&materials.some(m=>m.id===id)&&!brief.selected.includes(id))brief.toggle(id);},[brief]);
 const selected=materials.filter(m=>brief.selected.includes(m.id));
 function content(){const data=new FormData(form.current!);return `NB MAX LUXURY / Project inquiry\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company")||"Not provided"}\nInquiry type: ${data.get("type")}\nDelivery location: ${data.get("location")||"To be confirmed"}\n\nMATERIALS\n${selected.length?formatBrief(selected):"To be discussed"}\n\nPROJECT DETAILS\n${data.get("message")}`;}
 function submit(event:FormEvent){event.preventDefault();const body=content();location.href=`mailto:${site.email}?subject=${encodeURIComponent("NB MAX LUXURY - Material inquiry")}&body=${encodeURIComponent(body)}`;setStatus("Your email draft is ready. Send it from your email app to complete your inquiry.");}
 return <form className="inquiry-form" ref={form} onSubmit={submit}>
   <div className="form-top"><span className="eyebrow">Project inquiry</span><span className="code">NB / 01</span></div>
   <div className="form-pair"><label>Your name<input name="name" autoComplete="name" required maxLength={100}/></label><label>Email address<input name="email" autoComplete="email" type="email" required maxLength={200}/></label></div>
   <label>Company or organization<input name="company" autoComplete="organization" maxLength={200}/></label>
   <div className="form-pair"><label>Inquiry type<select name="type"><option>Trade / wholesale inquiry</option><option>Retail product inquiry</option><option>Project material list</option><option>General inquiry</option></select></label><label>Delivery location<input name="location" autoComplete="off" placeholder="City / project location" maxLength={200}/></label></div>
   <div className="form-materials"><span className="field-label">Your selected materials</span>{selected.length?<ul>{selected.map(m=><li key={m.id}><span className="code">{m.code}</span><span>{m.name}</span><button type="button" title={`Remove ${m.name}`} aria-label={`Remove ${m.name}`} onClick={()=>brief.toggle(m.id)}>×</button></li>)}</ul>:<p>No categories selected yet.</p>}<Button variant="ghost" onClick={brief.open}><Plus size={16}/>Review material brief</Button></div>
   <label>Project details<textarea name="message" rows={5} required maxLength={3500} placeholder="Materials, quantities, dimensions, application, and any timing you have in mind."/></label>
   <label className="consent"><input name="consent" type="checkbox" required/><span>I agree to the <a href="/privacy-policy">Privacy Policy</a> and may be contacted about this inquiry.</span></label>
   <div className="form-actions"><Button type="submit">Prepare inquiry email <ArrowUpRight size={18}/></Button><Button variant="icon" title="Download inquiry brief" aria-label="Download inquiry brief" onClick={()=>{if(form.current?.reportValidity()){downloadText(content(),"NB-MAX-project-inquiry.txt");setStatus("Your inquiry brief has been downloaded. Email it to "+site.email+" when ready.");}}}><Download size={19}/></Button></div>
   <p className="form-note">Opens your email app with a prepared brief. Nothing is sent until you send the email.</p>
   {status&&<p className="form-status" role="status"><Check size={18}/>{status}</p>}
 </form>;
}
