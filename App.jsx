import { useState } from "react";
const cycle = {
phases: [
{
weeks: "1–2",
label: "HIGH VOLUME",
sublabel: "Hypertrophy Phase",
color: "#FF6B35",
accent: "#FF8C5A",
description: "3–4 sets · 8–15 reps · shorter rest · pump-focused · metabolic stress",
nutrition: "Reduce deficit slightly · protein 1g/lb · higher carbs daily",
days: [
{
rep" }
day: "DAY 1",
title: "UPPER",
tag: "Chest · Back · Shoulders · Arms",
exercises: [
{ name: "Barbell Bench Press", sets: "3", reps: "8–10", note: "Controlled — no pa
{ name: "Lat Pulldown", sets: "3", reps: "10–12", note: "Full stretch each { name: "Incline Chest Press Machine", sets: "3", reps: "10–12", note: "" },
{ name: "Seated Cable Row", sets: "3", reps: "10–12", note: "Squeeze 1 sec { name: "Dumbbell Lateral Raise", sets: "3", reps: "12–15", note: "" },
{ name: "Cable Bar Curl", sets: "3", reps: "10–12", note: "" },
{ name: "Rope Pressdown", sets: "3", reps: "12–15", note: "Deep stretch at at con
bottom
],
rest: "60–90 sec between sets",
},
{
day: "DAY 2",
title: "LOWER",
tag: "Quads · Hams · Calves",
exercises: [
{ name: "Hack Squat / Smith Squat", sets: "4", reps: "10–12", note: "Full depth,
{ name: "Leg Press", sets: "3", reps: "12–15", note: "Feet shoulder-width" { name: "Leg Extension", sets: "3", reps: "12–15", note: "2 sec squeeze at { name: "Dumbbell Romanian Deadlift", sets: "3", reps: "10–12", note: "Stretch-fo
{ name: "Lying Hamstring Curl", sets: "3", reps: "12–15", note: "" },
{ name: "Standing Calf Raise", sets: "3", reps: "15–20", note: "3 sec stretch at
{ name: "Leg Press Calf Raise", sets: "2", reps: "15–20", note: "" },
},
top" }
],
rest: "60–90 sec between sets",
},
{
},
{
},
{
},
],
day: "DAY 3",
title: "PUSH",
tag: "Chest · Shoulders · Triceps",
exercises: [
{ name: "Seated DB Shoulder Press", sets: "3", reps: "10–12", note: "" },
{ name: "Pec Deck", sets: "3", reps: "12–15", note: "2–3 sec squeeze" },
{ name: "Side Reverse Pec Dec Fly", sets: "3", reps: "12–15", note: "" },
{ name: "DB Shrugs", sets: "2", reps: "12–15", note: "1 sec hold at top" },
{ name: "Fixed Bar Pressdown (V-bar)", sets: "3", reps: "10–12", note: "" },
{ name: "Rope Pressdown", sets: "3", reps: "12–15", note: "" },
{ name: "Cross-Body Single-Arm Pressdown", sets: "2", reps: "12–15", note: "No dr
],
rest: "60–90 sec between sets",
stop e
day: "DAY 4",
title: "PULL",
tag: "Back · Biceps · Forearms",
exercises: [
{ name: "Chest-Supported T-Bar Row", sets: "4", reps: "10–12", note: "Full { name: "Machine High Row", sets: "3", reps: "10–12", note: "" },
{ name: "Straight-Arm Pulldown", sets: "3", reps: "12–15", note: "Full lat { name: "Pull-Ups (assisted)", sets: "3", reps: "8–10", note: "" },
{ name: "Preacher Curl Machine", sets: "3", reps: "10–12", note: "" },
{ name: "Cable Seated Bar Curl", sets: "3", reps: "10–12", note: "" },
{ name: "Barbell Reverse Curl", sets: "2", reps: "10–12", note: "Elbows locked" }
{ name: "DB Farmer Holds", sets: "2", reps: "30 sec", note: "" },
stretc
],
rest: "60–90 sec between sets",
day: "DAY 5",
title: "LEGS LIGHT + ABS",
tag: "Lower Pump · Core · Forearms",
exercises: [
{ name: "Leg Press", sets: "3", reps: "15", note: "~60% of Day 2 load" },
{ name: "Seated Leg Curl", sets: "3", reps: "12–15", note: "" },
{ name: "Standing Calf Raise", sets: "3", reps: "15–20", note: "" },
{ name: "Weighted Crunch Machine", sets: "3", reps: "12–15", note: "" },
{ name: "Hanging Knee Raise", sets: "3", reps: "to failure", note: "" },
{ name: "Barbell Seesaws", sets: "3", reps: "10–12", note: "" },
{ name: "Plate Woodchoppers", sets: "3", reps: "10–12", note: "" },
{ name: "Seated Wrist Curl + Reverse", sets: "2", reps: "12–15", note: "Each" },
],
rest: "60 sec between sets",
},
{
},
{
},
{
},
{
},
],
};
weeks: "3–4",
label: "TRANSITION",
sublabel: "Strength Ramp Phase",
color: "#C0A060",
accent: "#D4B878",
description: "2 sets on primaries · 4–8 reps · load increases · return to technical fai
nutrition: "Return to moderate deficit · protein maintained · carbs around training",
days: null,
note: "Resume your standard UL/PPL Mentzer split — reduce sets back to 1–2, push load u
weeks: "5",
label: "DELOAD",
sublabel: "CNS Recovery",
color: "#5A8A6A",
accent: "#72A882",
description: "50–60% volume · no failure · no grinders · maintenance calories",
nutrition: "Maintenance calories · no deficit this week",
days: null,
note: "Run your standard split but stop 2–3 reps short of failure on every exercise. Ba
weeks: "6",
label: "FAST + REST",
sublabel: "72-Hour Fast & Full Reset",
color: "#6A7A9A",
accent: "#8A9ABA",
description: "No lifting · walking only · electrolytes 2–3×/day · creatine 5g/day",
nutrition: "Fast Sun night → Wed night · break with protein-forward meal · Day 1 days: null,
note: "This is your full week off. The fast forces the rest. CNS, connective tissue, an
post-f
weeks: "7–8",
label: "SUPERCOMP",
sublabel: "Rebuild & Recomposition",
color: "#8A4A9A",
accent: "#A862B8",
description: "Full Mentzer intensity · slight surplus · higher carbs around workouts",
nutrition: "Slight caloric surplus · maximize carbs Day 1 + Day 2 · this is where recom
days: null,
note: "Back to full UL/PPL Mentzer split at max intensity. Glycogen refills, strength r
const phaseIcons = [" ", " ", " ", " ", " "];
export default function App() {
const [activePhase, setActivePhase] = useState(0);
const [activeDay, setActiveDay] = useState(0);
const phase = cycle.phases[activePhase];
return (
<div style={{
minHeight: "100vh",
background: "#0A0A0A",
color: "#E8E0D0",
fontFamily: "'Georgia', 'Times New Roman', serif",
padding: "0",
}}>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@
* { box-sizing: border-box; margin: 0; padding: 0; }
.phase-btn {
cursor: pointer;
border: none;
background: none;
transition: all 0.2s;
}
.phase-btn:hover { opacity: 0.85; }
.day-tab {
cursor: pointer;
border: none;
background: none;
transition: all 0.2s;
font-family: 'DM Sans', sans-serif;
}
.exercise-row {
display: grid;
grid-template-columns: 1fr 60px 80px 1fr;
gap: 12px;
padding: 12px 16px;
border-bottom: 1px solid rgba(255,255,255,0.05);
align-items: center;
transition: background 0.15s;
}
.exercise-row:hover {
background: rgba(255,255,255,0.03);
}
.exercise-row:last-child { border-bottom: none; }
@media (max-width: 600px) {
.exercise-row {
grid-template-columns: 1fr 50px 65px;
gap: 8px;
}
.note-col { display: none; }
}
.pill {
display: inline-block;
padding: 2px 10px;
border-radius: 20px;
font-size: 11px;
font-family: 'DM Sans', sans-serif;
font-weight: 500;
letter-spacing: 0.5px;
}
.scroll-x {
overflow-x: auto;
-webkit-overflow-scrolling: touch;
}
.scroll-x::-webkit-scrollbar { height: 2px; }
.scroll-x::-webkit-scrollbar-track { background: transparent; }
.scroll-x::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius
`}</style>
{/* Header */}
<div style={{
background: "linear-gradient(180deg, #111 0%, #0A0A0A 100%)",
borderBottom: "1px solid rgba(255,255,255,0.07)",
padding: "28px 24px 20px",
}}>
<div style={{
fontFamily: "'Bebas Neue', sans-serif",
fontSize: "clamp(28px, 6vw, 48px)",
letterSpacing: "4px",
lineHeight: 1,
color: "#E8E0D0",
marginBottom: "4px",
}}>
8-WEEK PERIODIZED PROGRAM
</div>
<div style={{
fontFamily: "'DM Sans', sans-serif",
fontSize: "13px",
color: "rgba(232,224,208,0.45)",
letterSpacing: "2px",
textTransform: "uppercase",
}}>
UL/PPL Mentzer Hybrid · Recomposition Protocol
</div>
</div>
{/* Phase Selector */}
<div style={{ padding: "20px 24px 0" }}>
<div style={{
fontFamily: "'DM Sans', sans-serif",
fontSize: "10px",
letterSpacing: "3px",
color: "rgba(232,224,208,0.35)",
marginBottom: "12px",
textTransform: "uppercase",
}}>
Select Phase
</div>
<div className="scroll-x" style={{ display: "flex", gap: "10px", paddingBottom: "4px"
{cycle.phases.map((p, i) => (
<button
key={i}
className="phase-btn"
onClick={() => { setActivePhase(i); setActiveDay(0); }}
style={{
padding: "10px 16px",
borderRadius: "4px",
border: activePhase === i
? `1.5px solid ${p.color}`
: "1.5px solid rgba(255,255,255,0.08)",
background: activePhase === i
? `${p.color}18`
: "rgba(255,255,255,0.02)",
color: activePhase === i ? p.accent : "rgba(232,224,208,0.5)",
whiteSpace: "nowrap",
textAlign: "left",
}}
>
<div style={{
fontFamily: "'Bebas Neue', sans-serif",
fontSize: "13px",
letterSpacing: "2px",
marginBottom: "2px",
}}>
{phaseIcons[i]} WK {p.weeks}
</div>
<div style={{
fontFamily: "'DM Sans', sans-serif",
fontSize: "11px",
fontWeight: 500,
}}>
{p.label}
</div>
</button>
))}
</div>
</div>
{/* Phase Header */}
<div style={{ padding: "24px 24px 0" }}>
<div style={{
background: `linear-gradient(135deg, ${phase.color}12 0%, transparent 60%)`,
border: `1px solid ${phase.color}30`,
borderRadius: "6px",
padding: "20px",
marginBottom: "20px",
}}>
<div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "
<div style={{
fontFamily: "'Bebas Neue', sans-serif",
fontSize: "clamp(22px, 5vw, 32px)",
letterSpacing: "3px",
color: phase.accent,
}}>
{phase.label}
</div>
<div style={{
fontFamily: "'DM Sans', sans-serif",
fontSize: "12px",
color: "rgba(232,224,208,0.4)",
letterSpacing: "2px",
textTransform: "uppercase",
}}>
{phase.sublabel} · Weeks {phase.weeks}
</div>
</div>
<div style={{
fontFamily: "'DM Sans', sans-serif",
fontSize: "13px",
color: "rgba(232,224,208,0.65)",
marginBottom: "10px",
lineHeight: 1.6,
}}>
{phase.description}
</div>
<div style={{
display: "flex",
alignItems: "flex-start",
gap: "8px",
background: "rgba(0,0,0,0.3)",
borderRadius: "4px",
padding: "10px 12px",
}}>
<span style={{ color: phase.color, fontSize: "12px" }}> <div style={{
fontFamily: "'DM Sans', sans-serif",
fontSize: "12px",
color: "rgba(232,224,208,0.5)",
lineHeight: 1.5,
}}>
{phase.nutrition}
</div>
</div>
{phase.note && (
<div style={{
marginTop: "12px",
fontFamily: "'DM Sans', sans-serif",
fontSize: "13px",
color: "rgba(232,224,208,0.55)",
fontStyle: "italic",
</span>
lineHeight: 1.6,
borderLeft: `2px solid ${phase.color}50`,
paddingLeft: "12px",
}}>
{phase.note}
</div>
)}
</div>
</div>
{/* Day Tabs + Exercises (only for phases with days) */}
{phase.days ? (
<div style={{ padding: "0 24px 40px" }}>
{/* Day Tabs */}
<div className="scroll-x" style={{ display: "flex", gap: "6px", marginBottom: "16px
{phase.days.map((d, i) => (
<button
key={i}
className="day-tab"
onClick={() => setActiveDay(i)}
style={{
padding: "8px 14px",
borderRadius: "4px",
border: activeDay === i
? `1.5px solid ${phase.color}`
: "1.5px solid rgba(255,255,255,0.07)",
background: activeDay === i
? `${phase.color}20`
: "transparent",
color: activeDay === i ? phase.accent : "rgba(232,224,208,0.4)",
whiteSpace: "nowrap",
fontSize: "12px",
fontWeight: 500,
letterSpacing: "1px",
}}
>
{d.day}
</button>
))}
</div>
{/* Day Content */}
{(() => {
const day = phase.days[activeDay];
return (
<div style={{
background: "rgba(255,255,255,0.02)",
border: "1px solid rgba(255,255,255,0.07)",
borderRadius: "6px",
overflow: "hidden",
}}>
{/* Day Header */}
<div style={{
padding: "16px 20px",
borderBottom: "1px solid rgba(255,255,255,0.06)",
background: `${phase.color}0A`,
}}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems:
<div>
<div style={{
fontFamily: "'Bebas Neue', sans-serif",
fontSize: "22px",
letterSpacing: "3px",
color: phase.accent,
}}>
{day.title}
</div>
<div style={{
fontFamily: "'DM Sans', sans-serif",
fontSize: "11px",
color: "rgba(232,224,208,0.4)",
letterSpacing: "1.5px",
textTransform: "uppercase",
}}>
{day.tag}
</div>
</div>
<span className="pill" style={{
background: `${phase.color}20`,
color: phase.accent,
border: `1px solid ${phase.color}40`,
}}>
{day.rest}
</span>
</div>
</div>
{/* Column Headers */}
<div style={{
display: "grid",
gridTemplateColumns: "1fr 60px 80px 1fr",
gap: "12px",
padding: "10px 16px",
borderBottom: "1px solid rgba(255,255,255,0.06)",
fontFamily: "'DM Sans', sans-serif",
fontSize: "10px",
letterSpacing: "2px",
color: "rgba(232,224,208,0.3)",
textTransform: "uppercase",
}}>
<div>Exercise</div>
<div>Sets</div>
<div>Reps</div>
<div className="note-col">Note</div>
</div>
{/* Exercises */}
{day.exercises.map((ex, i) => (
<div key={i} className="exercise-row">
<div style={{
fontFamily: "'DM Sans', sans-serif",
fontSize: "13px",
fontWeight: 500,
color: "#E8E0D0",
lineHeight: 1.3,
}}>
{ex.name}
</div>
<div style={{
fontFamily: "'Bebas Neue', sans-serif",
fontSize: "18px",
letterSpacing: "1px",
color: phase.accent,
textAlign: "center",
}}>
{ex.sets}
</div>
<div style={{
fontFamily: "'DM Sans', sans-serif",
fontSize: "12px",
color: "rgba(232,224,208,0.6)",
fontWeight: 500,
}}>
{ex.reps}
</div>
<div className="note-col" style={{
fontFamily: "'DM Sans', sans-serif",
fontSize: "11px",
color: "rgba(232,224,208,0.35)",
fontStyle: "italic",
lineHeight: 1.4,
}}>
{ex.note}
</div>
</div>
))}
</div>
);
})()}
</div>
) : (
<div style={{ padding: "0 24px 40px" }}>
<div style={{
background: "rgba(255,255,255,0.02)",
border: "1px solid rgba(255,255,255,0.07)",
borderRadius: "6px",
padding: "24px",
fontFamily: "'DM Sans', sans-serif",
fontSize: "14px",
color: "rgba(232,224,208,0.5)",
lineHeight: 1.8,
textAlign: "center",
}}>
{activePhase === 1
? "Resume your standard UL/PPL Mentzer split with 1–2 working sets, pushing loa
: activePhase === 2
? "Run all 5 days of your UL/PPL split — Upper · Lower · Push · Pull · Legs — s
: activePhase === 3
? "No gym. Walking only. Electrolytes 2–3× daily. Creatine 5g. Sleep is your tr
: "Run all 5 days at full Mentzer intensity. Slight caloric surplus. Heavy carb
</div>
</div>
)}
{/* Cycle Map Footer */}
<div style={{
borderTop: "1px solid rgba(255,255,255,0.07)",
padding: "20px 24px",
background: "#080808",
}}>
<div style={{
fontFamily: "'DM Sans', sans-serif",
fontSize: "10px",
letterSpacing: "3px",
color: "rgba(232,224,208,0.25)",
marginBottom: "14px",
textTransform: "uppercase",
}}>
8-Week Cycle Map
</div>
<div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
{[
{ wk: "1", phase: "VOL", color: "#FF6B35" },
{ wk: "2", phase: "VOL", color: "#FF6B35" },
{ wk: "3", phase: "STR", color: "#C0A060" },
{ wk: "4", phase: "STR", color: "#C0A060" },
{ wk: "5", phase: "DLD", color: "#5A8A6A" },
{ wk: "6", phase: "FST", color: "#6A7A9A" },
{ wk: "7", phase: "SCP", color: "#8A4A9A" },
{ wk: "8", phase: "SCP", color: "#8A4A9A" },
].map((w, i) => (
<div key={i} style={{
display: "flex",
flexDirection: "column",
alignItems: "center",
gap: "4px",
flex: "1",
minWidth: "36px",
}}>
<div style={{
width: "100%",
height: "6px",
borderRadius: "3px",
background: w.color,
opacity: 0.8,
}} />
<div style={{
fontFamily: "'DM Sans', sans-serif",
fontSize: "9px",
color: w.color,
letterSpacing: "1px",
fontWeight: 600,
}}>
{w.phase}
</div>
<div style={{
fontFamily: "'DM Sans', sans-serif",
fontSize: "9px",
color: "rgba(232,224,208,0.25)",
}}>
W{w.wk}
</div>
</div>
))}
</div>
</div>
</div>
);
}
