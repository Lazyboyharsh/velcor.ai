export default function Clients() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/7/75/Slack_Icon.png",
  ];

  return (
    <section className="bg-[#f6f1e8] px-5 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-black/50">
          Trusted by teams building B2B pipeline
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-10 opacity-70">
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt="logo" className="h-6 grayscale" />
          ))}
        </div>
      </div>
    </section>
  );
}