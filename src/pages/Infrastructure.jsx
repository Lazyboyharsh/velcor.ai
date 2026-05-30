import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { ArrowRight, ShieldCheck, Sparkles, Activity, Radar, Check } from "lucide-react";
import { motion } from "framer-motion";

// ─── Inline SVGs for brands NOT in SimpleIcons v16 ───────────────────────────

const SalesforceSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#00A1E0" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.85 4.27a4.17 4.17 0 0 1 3.01-1.27 4.2 4.2 0 0 1 3.16 1.44 5.84 5.84 0 0 1 1.63-.23 5.87 5.87 0 0 1 5.87 5.87 5.87 5.87 0 0 1-5.87 5.87H6.14A4.14 4.14 0 0 1 2 11.81a4.14 4.14 0 0 1 4.14-4.14c.17 0 .34.01.5.03A4.17 4.17 0 0 1 9.85 4.27z"/>
  </svg>
);

const PipedriveSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#017737" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 12a8 8 0 0 1-6.93-4h13.86A8 8 0 0 1 12 18z"/>
  </svg>
);

const OpenAISVG = ({ className, white }) => (
  <svg className={className} viewBox="0 0 24 24" fill={white ? "#ffffff" : "#000000"} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.001 14.31a4.501 4.501 0 0 1-1.66-6.414zm16.597 3.855l-5.843-3.369 2.019-1.168a.076.076 0 0 1 .071 0l4.816 2.797a4.5 4.5 0 0 1-.676 8.109v-5.677a.795.795 0 0 0-.387-.692zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.814-2.772a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);

const SlackSVG = ({ className }) => (
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
);

const AWSSVG = ({ className, white }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill={white ? "#ffffff" : "#FF9900"} d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
    <path fill={white ? "#ffffff" : "#FF9900"} fillRule="evenodd" d="M20.16 17.143c-2.209 1.631-5.415 2.498-8.175 2.498-3.867 0-7.345-1.43-9.978-3.806-.207-.187-.023-.44.224-.296 2.842 1.654 6.355 2.649 9.978 2.649 2.447 0 5.135-.51 7.608-1.559.375-.168.686.247.343.514zm.974-1.11c-.28-.36-1.853-.17-2.563-.086-.215.025-.248-.16-.056-.295 1.254-.881 3.313-.629 3.552-.334.24.303-.064 2.363-1.245 3.348-.18.152-.352.072-.272-.127.267-.662.854-2.147.584-2.506z"/>
  </svg>
);

const PowerBISVG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#F2C811" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3h3v18H5V3zm4.5 4h3v14h-3V7zM14 8h3v13h-3V8zm4.5-3H21v18h-2.5V5z"/>
  </svg>
);

const InstantlySVG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#5B5BD6" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L4.5 13.5H11L10 22L20 10H13.5L13 2z"/>
  </svg>
);

const SmartleadSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#6C47FF" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const LemlistSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#FF7847" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7l8 5 8-5v10c0 .55-.45 1-1 1z"/>
  </svg>
);

const CloseCRMSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#7B2D8B" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
  </svg>
);

const WebhooksSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#4A90D9" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"/>
  </svg>
);

// ─── Icon map: slug → component or simpleicons url ───────────────────────────
const ICON_MAP = {
  // SimpleIcons v16 confirmed working
  hubspot:         { type: "si", slug: "hubspot" },
  zapier:          { type: "si", slug: "zapier" },
  anthropic:       { type: "si", slug: "anthropic" },
  notion:          { type: "si", slug: "notion" },
  cloudflare:      { type: "si", slug: "cloudflare" },
  apollographql:   { type: "si", slug: "apollographql" },
  langchain:       { type: "si", slug: "langchain" },
  n8n:             { type: "si", slug: "n8n" },
  make:            { type: "si", slug: "make" },
  googleanalytics: { type: "si", slug: "googleanalytics" },
  looker:          { type: "si", slug: "looker" },
  metabase:        { type: "si", slug: "metabase" },
  vercel:          { type: "si", slug: "vercel" },
  firebase:        { type: "si", slug: "firebase" },
  perplexity:      { type: "si", slug: "perplexity" },
  // Inline SVGs for brands missing from SimpleIcons v16
  salesforce:      { type: "svg", component: SalesforceSVG },
  pipedrive:       { type: "svg", component: PipedriveSVG },
  openai:          { type: "svg", component: OpenAISVG },
  slack:           { type: "svg", component: SlackSVG },
  amazonaws:       { type: "svg", component: AWSSVG },
  powerbi:         { type: "svg", component: PowerBISVG },
  instantly:       { type: "svg", component: InstantlySVG },
  smartlead:       { type: "svg", component: SmartleadSVG },
  lemlist:         { type: "svg", component: LemlistSVG },
  closecrm:        { type: "svg", component: CloseCRMSVG },
  webhooks:        { type: "svg", component: WebhooksSVG },
};

// Universal brand icon renderer
const BrandIcon = ({ id, name, className = "h-7 w-7", white = false }) => {
  const icon = ICON_MAP[id];
  if (!icon) return null;
  if (icon.type === "svg") {
    const Comp = icon.component;
    return <Comp className={className} white={white} />;
  }
  // SimpleIcons: use white color override via URL param when on dark bg
  const src = white
    ? `https://cdn.simpleicons.org/${icon.slug}/ffffff`
    : `https://cdn.simpleicons.org/${icon.slug}`;
  return (
    <img
      src={src}
      alt={name}
      className={className}
      style={{ objectFit: "contain" }}
      onError={(e) => { e.currentTarget.style.display = "none"; }}
    />
  );
};

// Tool pill with logo + name
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
      iconId: "hubspot", iconName: "HubSpot",
      tools: [
        { name: "HubSpot",   id: "hubspot" },
        { name: "Salesforce",id: "salesforce" },
        { name: "Pipedrive", id: "pipedrive" },
        { name: "Close CRM", id: "closecrm" },
      ],
    },
    {
      title: "AI Intelligence",
      iconId: "openai", iconName: "OpenAI",
      tools: [
        { name: "OpenAI",    id: "openai" },
        { name: "Claude",    id: "anthropic" },
        { name: "Perplexity",id: "perplexity" },
        { name: "LangChain", id: "langchain" },
      ],
    },
    {
      title: "Outbound Systems",
      iconId: "apollographql", iconName: "Apollo",
      tools: [
        { name: "Apollo",    id: "apollographql" },
        { name: "Instantly", id: "instantly" },
        { name: "Smartlead", id: "smartlead" },
        { name: "Lemlist",   id: "lemlist" },
      ],
    },
    {
      title: "Automation Stack",
      iconId: "zapier", iconName: "Zapier",
      tools: [
        { name: "Zapier",    id: "zapier" },
        { name: "Make",      id: "make" },
        { name: "n8n",       id: "n8n" },
        { name: "Webhooks",  id: "webhooks" },
      ],
    },
    {
      title: "Analytics Layer",
      iconId: "googleanalytics", iconName: "GA4",
      tools: [
        { name: "GA4",      id: "googleanalytics" },
        { name: "Looker",   id: "looker" },
        { name: "Metabase", id: "metabase" },
        { name: "Power BI", id: "powerbi" },
      ],
    },
    {
      title: "Cloud Infrastructure",
      iconId: "amazonaws", iconName: "AWS",
      tools: [
        { name: "AWS",        id: "amazonaws" },
        { name: "Vercel",     id: "vercel" },
        { name: "Cloudflare", id: "cloudflare" },
        { name: "Firebase",   id: "firebase" },
      ],
    },
  ];

  const systems = [
    { title: "Lead Capture",        id: "hubspot",        name: "HubSpot" },
    { title: "AI Qualification",    id: "openai",         name: "OpenAI" },
    { title: "Data Enrichment",     id: "apollographql",  name: "Apollo" },
    { title: "Outbound Automation", id: "zapier",         name: "Zapier" },
    { title: "CRM Sync",            id: "salesforce",     name: "Salesforce" },
    { title: "Revenue Analytics",   id: "googleanalytics",name: "GA4" },
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
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55 backdrop-blur"
          >
            <Sparkles size={14} />
            Revenue Infrastructure
          </motion.div> */}

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
            href="/contact"
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
              {/* LEFT */}
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
                    { label: "AI Agents",  id: "openai" },
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

              {/* RIGHT */}
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
                    {["Advanced workflow automation","Real-time synchronization","AI-powered orchestration"].map((item) => (
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
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Connected revenue
              <span className="block font-serif italic font-normal">ecosystem architecture</span>
            </h2>
          </div>
          <div className="relative mt-24">
            <div className="absolute left-0 top-1/2 hidden h-[2px] w-full -translate-y-1/2 bg-black/10 lg:block" />
            <div className="relative z-10 grid gap-6 lg:grid-cols-6">
              {systems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -8 }}
                  className="group relative rounded-[2rem] border border-black/10 bg-white/75 p-6 text-center shadow-xl shadow-black/5 backdrop-blur"
                >
                  <div className="absolute inset-0 rounded-[2rem] bg-blue-400/0 blur-2xl transition duration-500 group-hover:bg-blue-400/10" />
                  <div className="relative z-10">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-black">
                      <BrandIcon id={item.id} name={item.name} className="h-8 w-8" white={true} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-snug">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-black/55">Intelligent orchestration across your revenue stack.</p>
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
            {/* <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55">
              <BrandIcon id="hubspot" name="HubSpot" className="h-4 w-4" />
              Infrastructure Stack
            </div> */}
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Enterprise-grade
              <span className="block font-serif italic font-normal">technology ecosystem</span>
            </h2>
          </div>

          <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#f6f1e8] p-8 shadow-xl shadow-black/5 transition duration-500 hover:shadow-2xl"
              >
                <div className="absolute right-[-60px] top-[-60px] h-44 w-44 rounded-full bg-blue-400/10 blur-3xl transition duration-500 group-hover:bg-blue-400/20" />
                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black">
                    <BrandIcon id={item.iconId} name={item.iconName} className="h-8 w-8" white={true} />
                  </div>
                  <h3 className="mt-8 text-3xl font-semibold tracking-tight">{item.title}</h3>
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
            <a href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-blue-400">
              Book Strategy Call <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}