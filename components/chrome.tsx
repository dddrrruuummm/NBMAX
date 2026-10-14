"use client";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect,useState} from "react";
import {ArrowUpRight,ClipboardList,Menu,X} from "lucide-react";
import {site,navigation} from "@/lib/site";
import {useBrief} from "./brief-provider";
import {Button} from "./ui/button";

export function Brand(){return <Link className="brand" href="/" aria-label="NB MAX LUXURY home"><Image src="/logo.svg" alt="" width={44} height={40}/><span>NB MAX<span>LUXURY</span></span></Link>;}
export function Header(){
 const [menu,setMenu]=useState(false);const pathname=usePathname();const brief=useBrief();
 useEffect(()=>setMenu(false),[pathname]);
 return <header className="site-header"><div className="header-main page-width"><Brand/><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(n=><Link key={n.href} href={n.href} aria-current={pathname===n.href?"page":undefined}>{n.label}</Link>)}</nav><div className="header-actions"><Button variant="ghost" className="brief-trigger" onClick={brief.open} title="View material brief" aria-label={`Material brief, ${brief.selected.length} selected`}><ClipboardList size={19}/><span className="brief-label">Your brief</span><span className="brief-count">{brief.selected.length}</span></Button><Link className="header-contact button" href="/contact">Contact <ArrowUpRight size={18}/></Link><Button className="menu-toggle" variant="icon" title={menu?"Close menu":"Open menu"} aria-label={menu?"Close menu":"Open menu"} aria-expanded={menu} aria-controls="mobile-navigation" onClick={()=>setMenu(!menu)}>{menu?<X size={22}/>:<Menu size={22}/>}</Button></div></div>{menu&&<nav id="mobile-navigation" className="mobile-navigation page-width" aria-label="Mobile navigation">{[...navigation,{label:"Contact",href:"/contact"}].map(n=><Link href={n.href} key={n.href} onClick={()=>setMenu(false)}>{n.label}<ArrowUpRight size={20}/></Link>)}</nav>}</header>;
}
export function Footer(){return <footer className="site-footer"><div className="footer-main page-width"><div><Brand/><p>Building materials.<br/>Hardware & plumbing supplies.</p><a className="footer-email" href={`mailto:${site.email}`}>{site.email}</a></div><div className="footer-address"><h2>Find us</h2><address>{site.address.street}<br/>{site.address.district}<br/>{site.address.postalCode} {site.address.city}<br/>Malaysia</address><a className="text-link" href={site.maps} target="_blank" rel="noreferrer">View map</a></div><nav aria-label="Footer navigation">{navigation.map(n=><Link key={n.href} href={n.href}>{n.label}</Link>)}<Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms</Link><a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">Photography: Pexels</a></nav></div><div className="footer-wordmark page-width" aria-hidden="true">NB MAX LUXURY</div><div className="footer-bottom page-width"><span>© {new Date().getFullYear()} {site.legalName}</span><span>Registration {site.registration}</span></div></footer>;}
