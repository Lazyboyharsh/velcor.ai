// src/components/ui/RadialOrbitalTimeline.jsx
// Fully responsive — orbit radius scales to container width.
// Premium dark design with glassmorphism cards.
// Zero Tailwind dependency — 100% inline styles + injected keyframes.

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Zap, Link } from "lucide-react";

// ── Keyframes injected once ───────────────────────────────────────────────────
const STYLES = `
  @keyframes orbitPing {
    0%   { transform: translate(-50%,-50%) scale(1); opacity: 0.7; }
    100% { transform: translate(-50%,-50%) scale(2.4); opacity: 0; }
  }
  @keyframes orbitPulse {
    0%,100% { opacity: 1; }
    50%     { opacity: 0.35; }
  }
  @keyframes orbitSpin {
    from { transform: translate(-50%,-50%) rotate(0deg); }
    to   { transform: translate(-50%,-50%) rotate(360deg); }
  }
  @keyframes orbitSpinReverse {
    from { transform: translate(-50%,-50%) rotate(0deg); }
    to   { transform: translate(-50%,-50%) rotate(-360deg); }
  }
  @keyframes cardFadeIn {
    from { opacity: 0; transform: translateX(-50%) translateY(8px) scale(0.97); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0)   scale(1);    }
  }
  @keyframes nodeGlow {
    0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
    50%     { box-shadow: 0 0 0 8px rgba(99,102,241,0.15); }
  }
  .orbit-node-btn:hover { transform: scale(1.08) !important; }
`;

export default function RadialOrbitalTimeline({ timelineData }) {
  const wrapperRef               = useRef(null);
  const [size, setSize]          = useState({ w: 600, h: 600 });
  const [angle, setAngle]        = useState(0);
  const [paused, setPaused]      = useState(false);
  const [activeId, setActiveId]  = useState(null);
  const [pulseIds, setPulseIds]  = useState([]);

  // ── Responsive resize ─────────────────────────────────────────────────────
  useEffect(() => {
    const obs = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setSize({ w, h: Math.max(420, Math.min(w, 680)) });
    });
    if (wrapperRef.current) obs.observe(wrapperRef.current);
    return () => obs.disconnect();
  }, []);

  // ── Auto-rotate ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setAngle((a) => (a + 0.25) % 360), 40);
    return () => clearInterval(t);
  }, [paused]);

  // ── Node interaction ──────────────────────────────────────────────────────
  const handleNode = useCallback((id) => {
    if (activeId === id) {
      setActiveId(null);
      setPulseIds([]);
      setPaused(false);
    } else {
      setActiveId(id);
      setPaused(true);
      const rel = timelineData.find((i) => i.id === id)?.relatedIds ?? [];
      setPulseIds(rel);
    }
  }, [activeId, timelineData]);

  const handleBg = (e) => {
    if (e.target === e.currentTarget) {
      setActiveId(null);
      setPulseIds([]);
      setPaused(false);
    }
  };

  // ── Layout maths ──────────────────────────────────────────────────────────
  const cx     = size.w / 2;
  const cy     = size.h / 2;
  const R      = Math.min(cx, cy) * 0.72; // orbit radius — 72% of smallest half
  const NODE   = Math.max(36, R * 0.16);  // node diameter scales with R

  const nodePos = (index, total) => {
    const deg = ((index / total) * 360 + angle) % 360;
    const rad = (deg * Math.PI) / 180;
    return {
      x:       cx + R * Math.cos(rad),
      y:       cy + R * Math.sin(rad),
      depth:   Math.cos(rad),          // -1 (back) → +1 (front)
      opacity: 0.38 + 0.62 * ((1 + Math.sin(rad)) / 2),
    };
  };

  // Status config
  const sc = (s) => ({
    completed:    { bg: "rgba(99,102,241,0.15)",  border: "rgba(99,102,241,0.5)",  dot: "#6366f1", label: "Complete"    },
    "in-progress":{ bg: "rgba(59,130,246,0.15)",  border: "rgba(59,130,246,0.5)",  dot: "#3b82f6", label: "In Progress" },
    pending:      { bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.15)", dot: "#475569", label: "Upcoming"    },
  }[s] ?? {});

  const active = timelineData.find((i) => i.id === activeId);

  return (
    <div ref={wrapperRef} style={{ width: "100%", position: "relative", background: "#080b14" }}>
      <style>{STYLES}</style>

      {/* Ambient glow blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {[
          { left: "20%",  top: "20%",  size: 320, color: "rgba(99,102,241,0.10)" },
          { left: "70%",  top: "60%",  size: 280, color: "rgba(59,130,246,0.08)" },
          { left: "50%",  top: "80%",  size: 200, color: "rgba(139,92,246,0.07)" },
        ].map((b, i) => (
          <div key={i} style={{
            position:     "absolute",
            left:         b.left, top: b.top,
            width:        `${b.size}px`, height: `${b.size}px`,
            transform:    "translate(-50%,-50%)",
            borderRadius: "50%",
            background:   `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            filter:       "blur(40px)",
          }} />
        ))}
      </div>

      {/* Main stage */}
      <div
        onClick={handleBg}
        style={{
          position:       "relative",
          width:          "100%",
          height:         `${size.h}px`,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          transition:     "height 0.3s ease",
        }}
      >
        {/* ── Orbit rings ──────────────────────────────────────────────── */}
        {/* Outer dashed ring */}
        <div style={{
          position:     "absolute",
          left: `${cx}px`, top: `${cy}px`,
          transform:    "translate(-50%,-50%)",
          width:        `${R * 2 + NODE}px`,
          height:       `${R * 2 + NODE}px`,
          borderRadius: "50%",
          border:       "1px dashed rgba(255,255,255,0.06)",
        }} />

        {/* Main orbit ring with gradient */}
        <div style={{
          position:     "absolute",
          left: `${cx}px`, top: `${cy}px`,
          transform:    "translate(-50%,-50%)",
          width:        `${R * 2}px`,
          height:       `${R * 2}px`,
          borderRadius: "50%",
          border:       "1px solid rgba(255,255,255,0.10)",
          boxShadow:    "inset 0 0 60px rgba(99,102,241,0.04)",
        }} />

        {/* Spinning arc ring */}
        <div style={{
          position:       "absolute",
          left:           `${cx}px`, top: `${cy}px`,
          width:          `${R * 2 - 20}px`, height: `${R * 2 - 20}px`,
          borderRadius:   "50%",
          border:         "1px solid transparent",
          borderTopColor: "rgba(99,102,241,0.35)",
          borderRightColor: "rgba(59,130,246,0.20)",
          animation:      "orbitSpin 12s linear infinite",
        }} />

        {/* Reverse spinning arc */}
        <div style={{
          position:         "absolute",
          left:             `${cx}px`, top: `${cy}px`,
          width:            `${R * 1.4}px`, height: `${R * 1.4}px`,
          borderRadius:     "50%",
          border:           "1px solid transparent",
          borderBottomColor:"rgba(139,92,246,0.25)",
          animation:        "orbitSpinReverse 18s linear infinite",
        }} />

        {/* ── Centre orb ───────────────────────────────────────────────── */}
        <div style={{
          position:       "absolute",
          left:           `${cx}px`, top: `${cy}px`,
          transform:      "translate(-50%,-50%)",
          width:          `${NODE * 1.5}px`, height: `${NODE * 1.5}px`,
          borderRadius:   "50%",
          background:     "linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #8b5cf6 100%)",
          display:        "flex", alignItems: "center", justifyContent: "center",
          zIndex:         20,
          boxShadow:      "0 0 0 1px rgba(255,255,255,0.1), 0 0 40px rgba(99,102,241,0.4), 0 0 80px rgba(99,102,241,0.15)",
        }}>
          {/* Ping rings on centre */}
          {[1.8, 2.4].map((scale, i) => (
            <div key={i} style={{
              position:     "absolute",
              left: "50%", top: "50%",
              width:        `${NODE * 1.5}px`, height: `${NODE * 1.5}px`,
              borderRadius: "50%",
              border:       "1px solid rgba(99,102,241,0.4)",
              animation:    `orbitPing 2s ${i * 0.7}s ease-out infinite`,
            }} />
          ))}
          {/* V logo */}
          <span style={{
            fontSize:   `${Math.max(14, NODE * 0.5)}px`,
            fontWeight: 800, color: "#fff",
            letterSpacing: "-0.04em",
            textShadow: "0 2px 12px rgba(0,0,0,0.3)",
          }}>V</span>
        </div>

        {/* ── Nodes ────────────────────────────────────────────────────── */}
        {timelineData.map((item, idx) => {
          const pos      = nodePos(idx, timelineData.length);
          const expanded = activeId === item.id;
          const related  = pulseIds.includes(item.id);
          const pulsing  = related && !expanded;
          const Icon     = item.icon;
          const depth01  = (pos.depth + 1) / 2; // 0–1

          // Node visual state
          const nodeBg     = expanded  ? "linear-gradient(135deg,#6366f1,#3b82f6)"
                           : related   ? "rgba(99,102,241,0.18)"
                                       : `rgba(255,255,255,${0.04 + depth01 * 0.06})`;
          const nodeBorder = expanded  ? "rgba(99,102,241,0.8)"
                           : related   ? "rgba(99,102,241,0.5)"
                                       : `rgba(255,255,255,${0.08 + depth01 * 0.12})`;
          const nodeColor  = expanded ? "#fff" : `rgba(255,255,255,${0.5 + depth01 * 0.5})`;
          const nodeScale  = expanded ? 1.35 : related ? 1.12 : 1;
          const nodeShadow = expanded
            ? "0 0 0 1px rgba(99,102,241,0.6), 0 8px 32px rgba(99,102,241,0.4)"
            : related
            ? "0 0 0 1px rgba(99,102,241,0.3), 0 0 20px rgba(99,102,241,0.15)"
            : "none";

          return (
            <div
              key={item.id}
              className="orbit-node-btn"
              onClick={(e) => { e.stopPropagation(); handleNode(item.id); }}
              style={{
                position:   "absolute",
                left:       `${pos.x}px`,
                top:        `${pos.y}px`,
                transform:  `translate(-50%,-50%) scale(${nodeScale})`,
                zIndex:     expanded ? 100 : Math.round(10 + pos.depth * 10),
                opacity:    expanded ? 1 : pos.opacity,
                transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1)",
                cursor:     "pointer",
              }}
            >
              {/* Pulse halo */}
              {pulsing && (
                <div style={{
                  position:     "absolute",
                  inset:        "-8px",
                  borderRadius: "50%",
                  background:   "rgba(99,102,241,0.12)",
                  animation:    "orbitPulse 1s ease-in-out infinite",
                }} />
              )}

              {/* Node circle */}
              <div style={{
                width:          `${NODE}px`, height: `${NODE}px`,
                borderRadius:   "50%",
                background:     nodeBg,
                border:         `1.5px solid ${nodeBorder}`,
                color:          nodeColor,
                display:        "flex", alignItems: "center", justifyContent: "center",
                boxShadow:      nodeShadow,
                backdropFilter: "blur(12px)",
                transition:     "all 0.4s ease",
              }}>
                <Icon size={Math.max(13, NODE * 0.34)} />
              </div>

              {/* Label below node */}
              <div style={{
                position:      "absolute",
                top:           `${NODE + 8}px`,
                left:          "50%",
                transform:     "translateX(-50%)",
                whiteSpace:    "nowrap",
                fontSize:      `${Math.max(9, NODE * 0.24)}px`,
                fontWeight:    700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color:         expanded ? "rgba(255,255,255,0.9)" : `rgba(255,255,255,${0.3 + depth01 * 0.35})`,
                transition:    "color 0.3s ease",
              }}>
                {item.title}
              </div>

              {/* ── Expanded info card ──────────────────────────────── */}
              {expanded && active && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position:       "absolute",
                    top:            `${NODE + 30}px`,
                    left:           "50%",
                    transform:      "translateX(-50%)",
                    width:          `${Math.min(280, size.w * 0.75)}px`,
                    background:     "rgba(10,14,26,0.92)",
                    border:         "1px solid rgba(99,102,241,0.25)",
                    borderRadius:   "20px",
                    boxShadow:      "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
                    backdropFilter: "blur(24px)",
                    zIndex:         200,
                    animation:      "cardFadeIn 0.3s ease both",
                    overflow:       "hidden",
                  }}
                >
                  {/* Card top accent line */}
                  <div style={{
                    height:     "2px",
                    background: "linear-gradient(90deg, #6366f1, #3b82f6, #8b5cf6)",
                  }} />

                  <div style={{ padding: "16px" }}>
                    {/* Status + step */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: sc(active.status).dot, boxShadow: `0 0 8px ${sc(active.status).dot}` }} />
                        <span style={{
                          fontSize: "9px", fontWeight: 800, letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: sc(active.status).dot,
                        }}>{sc(active.status).label}</span>
                      </div>
                      <span style={{ fontSize: "9px", fontFamily: "monospace", color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>
                        {active.date}
                      </span>
                    </div>

                    {/* Title */}
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "8px", lineHeight: 1.3 }}>
                      {active.title}
                    </p>

                    {/* Description */}
                    <p style={{ fontSize: "11px", lineHeight: 1.65, color: "rgba(255,255,255,0.5)", marginBottom: "14px" }}>
                      {active.content}
                    </p>

                    {/* Progress bar */}
                    <div style={{ marginBottom: "14px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                        <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", gap: "3px" }}>
                          <Zap size={9} style={{ color: "#6366f1" }} /> Completion
                        </span>
                        <span style={{ fontSize: "9px", fontWeight: 700, fontFamily: "monospace", color: "rgba(255,255,255,0.5)" }}>
                          {active.energy}%
                        </span>
                      </div>
                      <div style={{ height: "3px", background: "rgba(255,255,255,0.07)", borderRadius: "99px", overflow: "hidden" }}>
                        <div style={{
                          height: "100%", width: `${active.energy}%`,
                          background: "linear-gradient(90deg,#6366f1,#3b82f6)",
                          borderRadius: "99px",
                          boxShadow: "0 0 8px rgba(99,102,241,0.6)",
                          transition: "width 0.8s ease",
                        }} />
                      </div>
                    </div>

                    {/* Connected nodes */}
                    {active.relatedIds.length > 0 && (
                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "12px" }}>
                        <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "4px" }}>
                          <Link size={9} /> Connected
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                          {active.relatedIds.map((relId) => {
                            const rel = timelineData.find((i) => i.id === relId);
                            return (
                              <button key={relId}
                                onClick={(e) => { e.stopPropagation(); handleNode(relId); }}
                                style={{
                                  display: "flex", alignItems: "center", gap: "4px",
                                  padding: "4px 10px",
                                  fontSize: "10px", fontWeight: 600,
                                  border: "1px solid rgba(99,102,241,0.3)",
                                  borderRadius: "99px",
                                  background: "rgba(99,102,241,0.08)",
                                  color: "rgba(255,255,255,0.65)",
                                  cursor: "pointer",
                                  transition: "all 0.2s",
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(99,102,241,0.25)"; e.currentTarget.style.color = "#fff"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(99,102,241,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                              >
                                {rel?.title} <ArrowRight size={8} />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom hint */}
      <div style={{
        textAlign: "center", padding: "16px 0 20px",
        fontSize: "9px", fontWeight: 700, letterSpacing: "0.16em",
        textTransform: "uppercase", color: "rgba(255,255,255,0.18)",
      }}>
        Click any node · Click background to reset
      </div>
    </div>
  );
}