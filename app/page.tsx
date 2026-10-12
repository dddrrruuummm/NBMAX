import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight,ArrowDown} from "lucide-react";
import {CategoryIndex,SelectionStory,SupplyProcess,ProjectCTA} from "@/components/sections";
import {MaterialLibrary} from "@/components/material-library";
import {WarehouseGallery} from "@/components/warehouse-gallery";
export const metadata:Metadata={alternates:{canonical:"/"}};
export default function Home(){return <>
 <section className="hero"><Image src="/images/architecture.webp" alt="Real contemporary architecture with exposed concrete, glass, and wood details" fill priority sizes="100vw" className="hero-image"/><div className="hero-shade"/><div className="hero-content page-width"><div className="hero-topline"><span>Materials for the way we build.</span><span className="hero-reference">NB / MATERIALS & HARDWARE</span></div><div className="hero-copy"><h1>NB MAX<br/>LUXURY<span className="hero-period">.</span></h1><p className="hero-subtitle">Considered materials.<br/><em>Practical supply.</em></p><p className="hero-description">Building materials, hardware, and plumbing essentials. The details that turn a plan into a place.</p><Link href="/showcase" className="button button-light">Explore the material library <ArrowUpRight size={18}/></Link></div><div className="hero-bottom"><span>Built around your requirements.</span><span>KUALA LUMPUR / MALAYSIA</span><a href="#materials" title="Discover the material library" aria-label="Discover the material library"><ArrowDown size={20}/></a></div></div></section>
 <CategoryIndex/>
 <section className="opening-note page-width"><span className="note-line"/><p>A strong foundation.<br/>A thoughtful finish.</p><div>We bring building materials and everyday hardware into one conversation, from structural requirements to surface selections and the connections in between.</div><Link href="/about" className="text-link">Meet the company <ArrowUpRight size={16}/></Link></section>
 <WarehouseGallery/>
 <MaterialLibrary featured/>
 <SelectionStory/>
 <SupplyProcess/>
 <ProjectCTA/>
 </>;}
