import { Check, X } from "lucide-react";

export default function Comparison() {
  const rows = [
    ["Signal-based targeting", true, false, false],
    ["AI workflow automation", true, false, true],
    ["CRM cleanup + routing", true, false, true],
    ["Outbound execution", true, true, false],
    ["Pipeline reporting", true, false, true],
    ["Fast setup", true, true, false],
  ];

  return (
    <section className="bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Comparison
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-6xl">
            Why Velcor.ai over normal agencies?
          </h2>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-blue-100/60">
          <div className="grid grid-cols-4 bg-slate-50 text-sm font-semibold text-slate-950">
            <div className="p-5">Capability</div>
            <div className="p-5 text-blue-600">Velcor.ai</div>
            <div className="p-5">Traditional Agency</div>
            <div className="p-5">In-house Team</div>
          </div>

          {rows.map((row) => (
            <div key={row[0]} className="grid grid-cols-4 border-t border-slate-200 text-sm">
              <div className="p-5 font-medium text-slate-800">{row[0]}</div>
              {row.slice(1).map((ok, i) => (
                <div key={i} className="flex items-center p-5">
                  {ok ? (
                    <Check className="text-blue-600" size={20} />
                  ) : (
                    <X className="text-slate-300" size={20} />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}