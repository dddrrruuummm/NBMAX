import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {CategoryIndex,SelectionStory,SupplyProcess,ProjectCTA} from "@/components/sections";
import {MaterialLibrary} from "@/components/material-library";
import {WarehouseGallery} from "@/components/warehouse-gallery";

export const metadata:Metadata={alternates:{canonical:"/"}};
export default function Home(){return <>
 <section className="hero">
  <Image src="/images/warehouse-boxes.webp" alt="Reference photography of neatly wrapped goods on warehouse racks" fill priority sizes="100vw" className="hero-image"/>
  <div className="hero-shade"/>
  <div className="hero-content page-width">
   <div className="hero-introduction"><p>Building materials, hardware<br/>and plumbing supplies.</p><Link href="/showcase" className="button button-light">Explore materials <ArrowUpRight size={20}/></Link></div>
   <div className="hero-name"><h1><span>NB MAX</span>{" "}<span>LUXURY</span></h1><div className="hero-caption"><p>Wholesale, trade & retail.<br/>Kuala Lumpur, Malaysia.</p><p>Warehouse reference.<br/>Availability by quote.</p></div></div>
  </div>
 </section>
 <section className="opening-note page-width"><h2>Materials.<br/>At scale.</h2><div><p>One brief can bring together timber, surfaces, hardware and pipework. Tell us what belongs in yours.</p><p>NB MAX LUXURY SDN. BHD. is a Malaysian materials business welcoming trade, project and retail inquiries.</p><Link href="/about" className="text-link">Meet the company</Link></div></section>
 <CategoryIndex/>
 <MaterialLibrary featured/>
 <WarehouseGallery omitHero/>
 <SelectionStory/>
 <SupplyProcess/>
 <ProjectCTA/>
 </>;}
