import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import {
  ArrowRight, ShieldCheck, Activity, Radar, Check,
  Users, Brain, Megaphone, Zap, PieChart, Cloud,
  SearchCheck, Database, Mail, Workflow, Bot, BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

// ─── All brand logos as inline SVGs — 100% reliable, no CDN failures ─────────

const Logo = {
  OpenAI: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#10a37f" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.001 14.31a4.501 4.501 0 0 1-1.66-6.414zm16.597 3.855l-5.843-3.369 2.019-1.168a.076.076 0 0 1 .071 0l4.816 2.797a4.5 4.5 0 0 1-.676 8.109v-5.677a.795.795 0 0 0-.387-.692zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.814-2.772a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  ),
  Anthropic: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#CC785C" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-3.654 0H6.57L0 20h3.603l1.497-3.754h6.832l1.498 3.754h3.603L10.173 3.52zm-3.46 9.588 2.28-5.717 2.28 5.717H6.714z"/>
    </svg>
  ),
  Perplexity: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#20808D" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.409 12.794v-.006L16.56 6.94l-.001-.001-1.124-1.124V1.306h-1.5v4.275L12 7.516 10.065 5.58V1.306h-1.5v4.51L7.44 6.939 1.591 12.788v.006a5.868 5.868 0 0 0 4.159 9.9h.041v-7.04H4.25v-1.5h7.066v-1.846L8.94 9.922 7.44 8.42l1.06-1.06 3.5 3.5v-2.94l-1.94-1.94 1.06-1.06L12 5.86l.88-.88 1.061 1.06-1.94 1.94v2.94l3.5-3.5 1.06 1.06-1.5 1.502-2.376 2.386v1.846h7.066v1.5h-1.542v7.04h.041a5.868 5.868 0 0 0 4.159-9.9zM5.75 21.168a4.368 4.368 0 0 1-2.697-7.724L5.75 15.88v5.287zm1.5.4v-5.64l-2.59-2.275H5.75v-1.5h1.5v1.5zm5.066-7.915H7.25v-1.5h5.066v1.5zm4.934 7.515v-5.64H5.75v5.64h-.25a4.368 4.368 0 0 1-2.659-7.893l2.66-2.66v.288h1.5v-.007l4.999-5 4.999 5v.007h1.5v-.288l2.66 2.66A4.368 4.368 0 0 1 18.25 21.168h-.25v-.4z"/>
    </svg>
  ),
  LangChain: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#1C3C3C" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm5.656 8.413l-1.384 1.382a5.638 5.638 0 0 0-1.649-.806 5.614 5.614 0 0 0-1.817-.297c-.635 0-1.247.104-1.818.296a5.638 5.638 0 0 0-1.648.807L7.956 8.413A7.559 7.559 0 0 1 12 6.98a7.561 7.561 0 0 1 5.656 2.433zm1.388 1.543A7.536 7.536 0 0 1 19.02 12a7.537 7.537 0 0 1-1.976 2.044l-1.382-1.382a5.596 5.596 0 0 0 .806-1.648A5.614 5.614 0 0 0 16.765 12c0-.636-.103-1.248-.297-1.818a5.597 5.597 0 0 0-.806-1.648l1.382-1.578zm-2.772 5.631A5.614 5.614 0 0 1 12 17.02a5.614 5.614 0 0 1-4.272-1.433l1.382-1.382c.475.336.996.59 1.648.806.571.194 1.183.297 1.818.297.636 0 1.248-.103 1.818-.297a5.638 5.638 0 0 0 1.648-.806l1.382 1.382zM6.98 12c0 .635.104 1.247.297 1.817.215.652.47 1.173.806 1.649L6.7 16.848A7.537 7.537 0 0 1 4.98 14.044 7.536 7.536 0 0 1 4.98 12c0-.836.16-1.634.452-2.366L6.814 11.02a5.614 5.614 0 0 0-.297 1.818v-.818z"/>
    </svg>
  ),
  HubSpot: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#FF7A59" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.164 7.931V5.085a2.198 2.198 0 0 0 1.266-1.978V3.04a2.198 2.198 0 0 0-2.195-2.195h-.067a2.198 2.198 0 0 0-2.195 2.195v.067a2.198 2.198 0 0 0 1.266 1.978v2.846a6.232 6.232 0 0 0-2.902 1.311L5.786 3.586a2.432 2.432 0 1 0-.965 1.227l7.377 5.16a6.232 6.232 0 0 0-.556 6.154H9.384a1.79 1.79 0 1 0 .05 1.5h2.584a6.235 6.235 0 1 0 6.146-9.696zm-1.028 9.477a3.768 3.768 0 1 1 0-7.536 3.768 3.768 0 0 1 0 7.536z"/>
    </svg>
  ),
  Salesforce: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#00A1E0" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.85 4.27a4.17 4.17 0 0 1 3.01-1.27 4.2 4.2 0 0 1 3.16 1.44 5.84 5.84 0 0 1 1.63-.23 5.87 5.87 0 0 1 5.87 5.87 5.87 5.87 0 0 1-5.87 5.87H6.14A4.14 4.14 0 0 1 2 11.81a4.14 4.14 0 0 1 4.14-4.14c.17 0 .34.01.5.03A4.17 4.17 0 0 1 9.85 4.27z"/>
    </svg>
  ),
  Pipedrive: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#017737" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 12a8 8 0 0 1-6.93-4h13.86A8 8 0 0 1 12 18z"/>
    </svg>
  ),
  CloseCRM: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#7B2D8B" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
    </svg>
  ),
  Apollo: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#311C87" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  Instantly: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#5B5BD6" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L4.5 13.5H11L10 22L20 10H13.5L13 2z"/>
    </svg>
  ),
  Smartlead: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#6C47FF" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  ),
  Lemlist: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#FF7847" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7l8 5 8-5v10c0 .55-.45 1-1 1z"/>
    </svg>
  ),
  Zapier: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#FF4A00" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.785 11.998A8.265 8.265 0 0 1 12 17.218a8.265 8.265 0 0 1-2.785-5.22H4.5a12.96 12.96 0 0 0 3.643 7.857L4.5 23.5h7.5v-5.52a3.004 3.004 0 0 0 .002 0V23.5H19.5l-3.643-3.645A12.96 12.96 0 0 0 19.5 11.998h-4.715zm-7.57-4.713A8.265 8.265 0 0 1 12 2.065a8.265 8.265 0 0 1 4.785 5.22H19.5a12.96 12.96 0 0 0-3.643-7.857L19.5.5H12v5.52a3.004 3.004 0 0 0-.002 0V.5H4.5l3.643 3.645A12.96 12.96 0 0 0 4.5 11.998h4.715z"/>
    </svg>
  ),
  Make: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#6D00CC" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.937 23.207a.96.96 0 0 1-.96-.96v-8.54a.96.96 0 0 1 1.92 0v8.54a.96.96 0 0 1-.96.96zm2.126-8.54v8.54a.96.96 0 0 0 1.92 0v-8.54a.96.96 0 0 0-1.92 0zM4.338 9.03l7.548 4.273 7.548-4.273L11.886.485 4.338 9.03z"/>
    </svg>
  ),
  N8N: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#EA4B71" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"/>
    </svg>
  ),
  Webhooks: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#4A90D9" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.006 2a9.847 9.847 0 00-6.484 2.372 10.032 10.032 0 00-3.256 6.12 9.99 9.99 0 001.885 7.164 10.023 10.023 0 006.056 3.796l.82-3.14a6.862 6.862 0 01-4.146-2.596 6.836 6.836 0 01-1.26-4.918 6.868 6.868 0 012.236-4.188 6.877 6.877 0 014.43-1.621c.23 0 .46.012.686.034l.033-3.023zM22 11.953a9.99 9.99 0 01-1.979 6.012l-2.327-2.023a6.844 6.844 0 001.306-4.055 6.868 6.868 0 00-2.056-4.804 6.877 6.877 0 00-4.753-1.929l-.077 3.022a3.836 3.836 0 012.588 1.063 3.818 3.818 0 011.139 2.67 3.834 3.834 0 01-1.02 2.632l2.37 2.075A9.96 9.96 0 0122 11.953zM9.557 20.308l1.677-2.662a3.833 3.833 0 001.844.47 3.836 3.836 0 002.706-1.12l2.328 2.022a6.877 6.877 0 01-5.034 2.121 6.865 6.865 0 01-3.521-.83z"/>
    </svg>
  ),
  GoogleAnalytics: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#E37400" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.84 2.998C22.84 1.342 21.498 0 19.842 0c-1.656 0-2.998 1.342-2.998 2.998v18.004C16.844 22.658 18.186 24 19.842 24c1.656 0 2.998-1.342 2.998-2.998zm-8.826 6.246c0-1.476-1.196-2.672-2.672-2.672S8.67 7.768 8.67 9.244v11.758C8.67 22.478 9.866 23.674 11.342 23.674s2.672-1.196 2.672-2.672zM7.158 19.002a2.672 2.672 0 1 1-5.344 0 2.672 2.672 0 0 1 5.344 0z"/>
    </svg>
  ),
  Looker: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#4285F4" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 14.5a7.5 7.5 0 0 1-7.5-7.5 7.5 7.5 0 0 1 15 0 7.5 7.5 0 0 1-7.5 7.5z"/>
    </svg>
  ),
  Metabase: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#509EE3" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 16.5H9v-9h2v9zm4 0h-2V7h2v9.5z"/>
    </svg>
  ),
  PowerBI: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#F2C811" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3h3v18H5V3zm4.5 4h3v14h-3V7zM14 8h3v13h-3V8zm4.5-3H21v18h-2.5V5z"/>
    </svg>
  ),
  AWS: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#FF9900" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm5.458.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L10.173 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
    </svg>
  ),
  Vercel: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#171717" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 22.525H0l12-21.05 12 21.05z"/>
    </svg>
  ),
  Cloudflare: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#F38020" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 15.5c.16-.55.1-1.06-.19-1.43-.27-.34-.69-.53-1.18-.55l-8.63-.11c-.06 0-.11-.03-.14-.07-.03-.05-.03-.11 0-.17l1.81-3.06c.16-.27.45-.43.77-.43h.01l11.54.15c1.82.02 3.57.94 4.57 2.48a5.26 5.26 0 0 1 .36 4.83 5.3 5.3 0 0 1-3.87 3.06c-.44.09-.88.13-1.32.12l-2.09-.03c-.4 0-.73-.29-.8-.69l-.84-4.11zm-1.12-7.5c-.06 0-.12-.03-.15-.08l-1.78-3.04c-.15-.26-.43-.42-.73-.42H2.44c-.3 0-.57.16-.73.42L.18 8.34a.88.88 0 0 0 0 .86l6.08 10.54c.16.27.45.43.75.43h1.97c.3 0 .58-.16.73-.43l.57-.99-3.14-5.46a4.82 4.82 0 0 1-.54-4.14c.04-.13.09-.26.14-.39z"/>
    </svg>
  ),
  Firebase: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#FFCA28" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/>
    </svg>
  ),
  Slack: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z"/>
      <path fill="#E01E5A" d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
      <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z"/>
      <path fill="#36C5F0" d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
      <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z"/>
      <path fill="#2EB67D" d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"/>
      <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52z"/>
      <path fill="#ECB22E" d="M15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  ),
  Notion: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.047.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.747 0-.934-.234-1.494-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
    </svg>
  ),
};

// Map id → Logo component
const LOGO_MAP = {
  openai:          Logo.OpenAI,
  anthropic:       Logo.Anthropic,
  perplexity:      Logo.Perplexity,
  langchain:       Logo.LangChain,
  hubspot:         Logo.HubSpot,
  salesforce:      Logo.Salesforce,
  pipedrive:       Logo.Pipedrive,
  closecrm:        Logo.CloseCRM,
  apollographql:   Logo.Apollo,
  instantly:       Logo.Instantly,
  smartlead:       Logo.Smartlead,
  lemlist:         Logo.Lemlist,
  zapier:          Logo.Zapier,
  make:            Logo.Make,
  n8n:             Logo.N8N,
  webhooks:        Logo.Webhooks,
  googleanalytics: Logo.GoogleAnalytics,
  looker:          Logo.Looker,
  metabase:        Logo.Metabase,
  powerbi:         Logo.PowerBI,
  amazonaws:       Logo.AWS,
  vercel:          Logo.Vercel,
  cloudflare:      Logo.Cloudflare,
  firebase:        Logo.Firebase,
  slack:           Logo.Slack,
  notion:          Logo.Notion,
};

const BrandIcon = ({ id, name, className = "h-6 w-6" }) => {
  const Comp = LOGO_MAP[id];
  if (!Comp) return null;
  return <Comp className={className} />;
};

const ToolPill = ({ name, iconId }) => (
  <span className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black/70 shadow-sm">
    <BrandIcon id={iconId} name={name} className="h-4 w-4 flex-shrink-0" />
    {name}
  </span>
);

export default function Infrastructure() {
  const integrations = [
    { name: "OpenAI",     id: "openai" },
    { name: "HubSpot",    id: "hubspot" },
    { name: "Salesforce", id: "salesforce" },
    { name: "Zapier",     id: "zapier" },
    { name: "Apollo",     id: "apollographql" },
    { name: "Slack",      id: "slack" },
    { name: "Notion",     id: "notion" },
    { name: "Cloudflare", id: "cloudflare" },
  ];

  const categories = [
    {
      title: "CRM Infrastructure",
      icon: Users,
      iconBg: "#FFF4F0", iconColor: "#FF7A59",
      description: "Centralise every deal, contact, and pipeline stage in one place.",
      tools: [
        { name: "HubSpot",    id: "hubspot" },
        { name: "Salesforce", id: "salesforce" },
        { name: "Pipedrive",  id: "pipedrive" },
        { name: "Close CRM",  id: "closecrm" },
      ],
    },
    {
      title: "AI Intelligence",
      icon: Brain,
      iconBg: "#F0F4FF", iconColor: "#4F6EF7",
      description: "Deploy language models that qualify, research, and respond autonomously.",
      tools: [
        { name: "OpenAI",     id: "openai" },
        { name: "Claude",     id: "anthropic" },
        { name: "Perplexity", id: "perplexity" },
        { name: "LangChain",  id: "langchain" },
      ],
    },
    {
      title: "Outbound Systems",
      icon: Megaphone,
      iconBg: "#F3EEFF", iconColor: "#7C3AED",
      description: "Run personalised multi-channel sequences that land in primary inboxes.",
      tools: [
        { name: "Apollo",    id: "apollographql" },
        { name: "Instantly", id: "instantly" },
        { name: "Smartlead", id: "smartlead" },
        { name: "Lemlist",   id: "lemlist" },
      ],
    },
    {
      title: "Automation Stack",
      icon: Zap,
      iconBg: "#FFF1EB", iconColor: "#FF4A00",
      description: "Connect every tool with no-code and code-first workflow orchestration.",
      tools: [
        { name: "Zapier",   id: "zapier" },
        { name: "Make",     id: "make" },
        { name: "n8n",      id: "n8n" },
        { name: "Webhooks", id: "webhooks" },
      ],
    },
    {
      title: "Analytics Layer",
      icon: PieChart,
      iconBg: "#FFF8EC", iconColor: "#E37400",
      description: "Measure every touchpoint from first click to closed-won.",
      tools: [
        { name: "GA4",      id: "googleanalytics" },
        { name: "Looker",   id: "looker" },
        { name: "Metabase", id: "metabase" },
        { name: "Power BI", id: "powerbi" },
      ],
    },
    {
      title: "Cloud Infrastructure",
      icon: Cloud,
      iconBg: "#EDF7FF", iconColor: "#0EA5E9",
      description: "Host, serve, and scale every system on battle-tested cloud platforms.",
      tools: [
        { name: "AWS",        id: "amazonaws" },
        { name: "Vercel",     id: "vercel" },
        { name: "Cloudflare", id: "cloudflare" },
        { name: "Firebase",   id: "firebase" },
      ],
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1e8] text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-40 pb-32">
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[size:28px_28px]" />
        <div className="absolute left-[-100px] top-10 h-[350px] w-[350px] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-[-120px] bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl"
          >
            Connected systems for
            <span className="block font-serif italic font-normal">modern revenue teams</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-black/60"
          >
            AI infrastructure, outbound systems, workflow automation, analytics, and operational architecture designed for scalable B2B growth.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            href="/schedule-meeting"
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-black px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
          >
            Build Your Stack <ArrowRight size={15} />
          </motion.a>
        </div>

        {/* DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 mx-auto mt-24 max-w-6xl"
        >
          <div className="rounded-[2.5rem] border border-black/10 bg-white/70 p-6 shadow-2xl shadow-black/10 backdrop-blur">
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[2rem] border border-black/10 bg-[#f6f1e8] p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-black/50">Revenue Workflow Engine</p>
                    <h3 className="mt-2 text-3xl font-semibold">Unified AI Pipeline</h3>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black">
                    <Radar size={28} className="text-blue-400" />
                  </div>
                </div>
                <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
                  {[
                    { label: "CRM",        id: "hubspot" },
                    { label: "AI Agents",  id: "anthropic" },
                    { label: "Enrichment", id: "apollographql" },
                    { label: "Outbound",   id: "zapier" },
                    { label: "Analytics",  id: "googleanalytics" },
                  ].map((item, i) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ y: -6 }}
                        className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold shadow-sm"
                      >
                        <BrandIcon id={item.id} name={item.label} className="h-5 w-5 flex-shrink-0" />
                        {item.label}
                      </motion.div>
                      {i !== 4 && <div className="hidden h-[2px] w-10 bg-black/20 lg:block" />}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-5">
                <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-black/10 bg-black p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/50">AI Workflow Activity</p>
                      <h3 className="mt-2 text-5xl font-semibold">24/7</h3>
                    </div>
                    <Activity className="text-blue-400" size={40} />
                  </div>
                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ duration: 1.5 }} className="h-full rounded-full bg-blue-400" />
                  </div>
                  <p className="mt-3 text-sm text-white/60">Intelligent systems continuously executing.</p>
                </motion.div>
                <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-black/10 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black">
                      <ShieldCheck size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Enterprise Infrastructure</h3>
                      <p className="text-sm text-black/55">Built for scalable operations</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    {["Advanced workflow automation", "Real-time synchronization", "AI-powered orchestration"].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-medium text-black/70">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-400">
                          <Check size={12} />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* LOGO CLOUD */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">Connected Infrastructure Stack</p>
          </div>
          <div className="relative mt-14 overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="flex w-max gap-6"
            >
              {[...integrations, ...integrations].map((item, i) => (
                <div key={i} className="group flex min-w-[220px] items-center gap-4 rounded-2xl border border-black/10 bg-white/70 px-6 py-5 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-2">
                  <div className="h-8 w-8 flex-shrink-0 grayscale transition duration-300 group-hover:grayscale-0">
                    <BrandIcon id={item.id} name={item.name} className="h-8 w-8" />
                  </div>
                  <span className="text-sm font-semibold text-black/70">{item.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="relative px-5 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
              Revenue Infrastructure
            </p>
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Connected revenue
              <span className="block font-serif italic font-normal">ecosystem architecture</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
              Every component works in concert through automation, intelligence, and operational visibility to create a compounding revenue engine that scales without adding headcount.
            </p>
          </div>
          <div className="relative mt-24">
            <div className="absolute left-0 top-1/2 hidden h-[2px] w-full -translate-y-1/2 bg-black/10 lg:block" />
            <div className="relative z-10 grid gap-6 lg:grid-cols-6">
              {[
                { icon: SearchCheck, title: "Lead Research",     desc: "Identify high-value accounts using real-time market intelligence, technographic signals, and buying intent data." },
                { icon: Database,    title: "Data Enrichment",   desc: "Build verified prospect databases enriched with firmographics, contact details, and account-level context." },
                { icon: Mail,        title: "Outreach Engine",   desc: "Launch hyper-personalised multi-channel sequences that reach decision-makers in their primary inbox." },
                { icon: Workflow,    title: "CRM Systems",       desc: "Centralise relationships, track every touchpoint, and keep pipeline stages accurate without manual entry." },
                { icon: Bot,         title: "AI Automation",     desc: "Automate qualification, follow-ups, and task routing with LLM-powered agents running around the clock." },
                { icon: BarChart3,   title: "Revenue Analytics", desc: "Surface conversion bottlenecks, forecast accurately, and make data-driven decisions across the full funnel." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -8 }}
                  className="group relative flex min-h-[300px] flex-col rounded-[2rem] border border-black/10 bg-white/75 p-6 text-center shadow-xl shadow-black/5 backdrop-blur"
                >
                  <div className="absolute inset-0 rounded-[2rem] bg-blue-400/0 blur-2xl transition duration-500 group-hover:bg-blue-400/10" />
                  <div className="relative z-10">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-blue-400">
                      <item.icon size={28} />
                    </div>
                    <h3 className="mt-6 min-h-[60px] text-xl font-semibold leading-snug">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-black/55">{item.desc}</p>
                    <div className="mt-8 flex justify-center">
                      <div className="h-[2px] w-10 rounded-full bg-blue-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-y border-black/10 bg-white/40 px-5 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Enterprise-grade
              <span className="block font-serif italic font-normal">technology ecosystem</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Six pillars. Dozens of best-in-class tools. One unified revenue architecture built for the way modern B2B teams operate.
            </p>
          </div>
          <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#f6f1e8] p-8 shadow-xl shadow-black/5 transition duration-500 hover:shadow-2xl"
              >
                <div className="absolute right-[-60px] top-[-60px] h-44 w-44 rounded-full blur-3xl transition duration-500 opacity-60"
                  style={{ backgroundColor: item.iconBg }} />
                <div className="relative z-10">
                  {/* Generic lucide icon in a soft tinted box — NO brand logos here */}
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <item.icon size={28} style={{ color: item.iconColor }} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-8 text-3xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/55">{item.description}</p>
                  {/* Tool pills — brand logos here */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.tools.map((tool) => (
                      <ToolPill key={tool.name} name={tool.name} iconId={tool.id} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-28">
        <div className="relative mx-auto overflow-hidden rounded-[2.5rem] border border-black/10 bg-black px-8 py-16 text-center text-white shadow-2xl shadow-black/20 md:px-16">
          <div className="absolute left-0 top-0 h-full w-full opacity-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.45),transparent_55%)]" />
          <div className="relative z-10">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Ready to build your
              <span className="block font-serif italic font-normal text-blue-400">revenue infrastructure?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              We engineer scalable AI systems, connected workflows, automation infrastructure, and operational architecture designed for modern B2B growth.
            </p>
            <a href="/schedule-meeting" className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-blue-400">
              Book Strategy Call <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}