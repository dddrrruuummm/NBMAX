import Image from "next/image";
import Link from "next/link";
import {imagePath} from "@/lib/site";

const scenes=[
 {image:"warehouse-boxes",title:"Stock & pallet storage",alt:"Stock photograph of modern warehouse aisles lined with neatly wrapped cartons on full storage racks"},
 {image:"warehouse-modern",title:"Materials on the rack",alt:"Stock photograph of wrapped material bundles arranged on clean industrial warehouse racks"},
 {image:"timber-bulk",title:"Timber in bulk",alt:"Stock photograph of large, neatly stacked timber bundles in indoor storage"},
 {image:"pallet-loading",title:"Packaged order handling",alt:"Stock photograph of forklifts moving packaged pallet loads beside a delivery truck"},
];
export function WarehouseGallery({omitHero=false}:{omitHero?:boolean}){
 const available=omitHero?scenes.slice(1):scenes;
 return <section className="warehouse-gallery" id="supply-gallery"><div className="page-width"><div className="section-heading"><h2>Supply in context.</h2><div className="section-side"><p>A bulk requirement is about more than the item. Quantities, packaging, availability and delivery belong in the same conversation.</p><Link href="/contact" className="text-link">Discuss a bulk requirement</Link></div></div><div className="warehouse-grid">{available.map((scene,index)=><figure key={scene.image}><div className="warehouse-photo"><Image src={imagePath(scene.image)} alt={scene.alt} fill sizes={index===0?"90vw":"(max-width: 600px) 100vw, 50vw"}/></div><figcaption><h3>{scene.title}</h3><span>Reference photograph</span></figcaption></figure>)}</div><p className="warehouse-disclosure">These warehouse photographs illustrate bulk-material storage and handling. They are not NB MAX LUXURY premises or verified inventory. Products, quantities and fulfillment arrangements are confirmed by quotation.</p></div></section>;
}
