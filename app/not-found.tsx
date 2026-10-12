import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
export default function NotFound(){return <section className="legal-page page-width"><p className="eyebrow">404 / Page not found</p><h1>A missing piece.</h1><p>The page you're looking for isn't here.</p><Link href="/" className="button">Back to the company <ArrowUpRight size={18}/></Link></section>;}
