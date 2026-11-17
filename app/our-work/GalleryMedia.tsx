"use client";
import { useState } from "react";

export default function GalleryMedia({src,alt,kind="image"}:{src:string;alt:string;kind?:"image"|"video"}){
 const [failed,setFailed]=useState(false);
 if(failed) return null;
 return <div className="galleryMediaItem">
  {kind==="video"
   ? <video src={src} controls playsInline preload="metadata" aria-label={alt} onError={()=>setFailed(true)}/>
   : <img src={src} alt={alt} loading="lazy" onError={()=>setFailed(true)}/>}
 </div>;
}
