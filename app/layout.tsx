import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./work-gallery.css";
import "./quote-form.css";
import "./hero-video.css";
import "./social-links.css";
import "./reviews.css";
import "./shop-signage.css";
import "./package-grid.css";
import "./led-scroll.css";
import "./shop-work.css";
import "./package-video.css";
import "./mobile-polish.css";
export const metadata: Metadata = { title:"Elite Custom | Vehicle Signage, Wraps & Van Fitouts Melbourne", description:"Commercial vehicle signage, wraps and complete van fitouts in Rowville, Melbourne. One drop-off. One pick-up. One complete work van." };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}<Script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" data-widget-id="6a8ced77413c619641afd964" strategy="afterInteractive"/></body></html>}
