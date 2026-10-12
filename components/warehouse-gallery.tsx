import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {imagePath} from "@/lib/site";

const scenes=[
 {image:"warehouse-boxes",title:"Organized stock & pallet storage",label:"01 / Warehouse overview",alt:"Stock photograph of modern warehouse aisles lined with neatly wrapped cartons on full storage racks"},
 {image:"warehouse-modern",title:"Materials, grouped by requirement",label:"02 / Material racks",alt:"Stock photograph of wrapped material bundles arranged on clean industrial warehouse racks"},
 {image:"timber-bulk",title:"Timber in bulk",label:"03 / Bundled materials",alt:"Stock photograph of large, neatly stacked timber bundles in indoor storage"},
 {image:"pallet-loading",title:"Pallet handling & order preparation",label:"04 / Material handling",alt:"Stock photograph of forklifts moving packaged pallet loads beside a delivery truck"},
];

export function WarehouseGallery(){return <section className="warehouse-gallery" id="supply-gallery"><div className="page-width">
 <div className="section-heading"><div><p className="eyebrow">Supply in context / Wholesale & trade</p><h2>Think beyond<br/><em>the single item.</em></h2></div><div className="section-side"><p>From a small parts list to a full material schedule. Discuss quantities, packaging, availability, and delivery together for a clearer bulk-supply inquiry.</p><Link href="/contact" className="text-link">Discuss a bulk requirement <ArrowUpRight size={17}/></Link></div></div>
 <div className="warehouse-grid">{scenes.map((scene,index)=><figure key={scene.image}><div className="warehouse-photo"><Image src={imagePath(scene.image)} alt={scene.alt} fill sizes={index===0?"(max-width: 600px) 100vw, 90vw":"(max-width: 600px) 100vw, 30vw"}/><span>{scene.label}</span></div><figcaption><h3>{scene.title}</h3><span>Reference photograph</span></figcaption></figure>)}</div>
 <p className="warehouse-disclosure">Warehouse images are stock photography, not NB MAX LUXURY premises or verified inventory. Current products, quantities, and fulfillment arrangements are confirmed with each quotation.</p>
 </div></section>;}
