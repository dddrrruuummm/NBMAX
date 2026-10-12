import type {Metadata} from "next";
import {MaterialLibrary} from "@/components/material-library";
import {ProjectCTA} from "@/components/sections";
import {WarehouseGallery} from "@/components/warehouse-gallery";
export const metadata:Metadata={title:"Material Library",description:"Explore 17 material categories, from timber, roofing, metal sections, stone and paint to fixing hardware, tools, taps, valves, and pipe supplies.",alternates:{canonical:"/showcase"}};
export default function Showcase(){return <><MaterialLibrary/><WarehouseGallery/><ProjectCTA/></>;}
