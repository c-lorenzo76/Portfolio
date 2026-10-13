import { motion } from "framer-motion";

type FishSpec = {
    top: string;
    size: number;
    body: string;
    accent: string;
    duration: number;
    delay: number;
    flip: boolean;
};

const FISH: FishSpec[] = [
    { top: "16%", size: 46, body: "#f97316", accent: "#ffffff", duration: 24, delay: 0, flip: false },
    { top: "34%", size: 30, body: "#38bdf8", accent: "#0369a1", duration: 30, delay: 4, flip: true },
    { top: "48%", size: 34, body: "#facc15", accent: "#ca8a04", duration: 27, delay: 8, flip: false },
    { top: "60%", size: 22, body: "#f472b6", accent: "#be185d", duration: 20, delay: 2, flip: true },
    { top: "24%", size: 18, body: "#e2e8f0", accent: "#94a3b8", duration: 21, delay: 11, flip: false },
    { top: "26%", size: 16, body: "#e2e8f0", accent: "#94a3b8", duration: 21, delay: 11.6, flip: false },
    { top: "22%", size: 15, body: "#e2e8f0", accent: "#94a3b8", duration: 21, delay: 11.3, flip: false },
];

const BUBBLES = [
    { left: "8%", size: 7, duration: 9, delay: 0 },
    { left: "22%", size: 4, duration: 7, delay: 1.5 },
    { left: "38%", size: 9, duration: 11, delay: 3 },
    { left: "55%", size: 5, duration: 8, delay: 0.8 },
    { left: "70%", size: 6, duration: 10, delay: 4 },
    { left: "85%", size: 8, duration: 9, delay: 2.2 },
];

/* ORIGINAL (cartoon) fish — kept for reference, not used.
function FishShapeClassic({ f }: { f: FishSpec }) {
    return (
        <motion.div
            className="absolute"
            style={{ top: f.top }}
            initial={{ x: f.flip ? "110vw" : "-10vw" }}
            animate={{ x: f.flip ? "-10vw" : "110vw" }}
            transition={{ duration: f.duration, delay: f.delay, repeat: Infinity, ease: "linear" }}
        >
            <motion.svg
                width={f.size}
                height={f.size * 0.6}
                viewBox="0 0 60 36"
                style={{ scaleX: f.flip ? -1 : 1 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
                <motion.path
                    d="M22,18 L2,6 L8,18 L2,30 Z"
                    fill={f.accent}
                    style={{ transformOrigin: "22px 18px" }}
                    animate={{ rotate: [-14, 14, -14] }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <path
                    d="M20,18 C20,8 34,3 46,7 C56,10 60,15 60,18 C60,21 56,26 46,29 C34,33 20,28 20,18 Z"
                    fill={f.body}
                />
                <path d="M32,7 L38,1 L42,8 Z" fill={f.accent} opacity={0.85} />
                <circle cx="50" cy="15" r="1.6" fill="#0f172a" />
            </motion.svg>
        </motion.div>
    );
}
*/

function FishShape({ f, index }: { f: FishSpec; index: number }) {
    const gradId = `fishBody-${index}`;
    return (
        <motion.div
            className="absolute"
            style={{ top: f.top }}
            initial={{ x: f.flip ? "110vw" : "-10vw" }}
            animate={{ x: f.flip ? "-10vw" : "110vw" }}
            transition={{ duration: f.duration, delay: f.delay, repeat: Infinity, ease: "linear" }}
        >
            <motion.svg
                width={f.size}
                height={f.size * 0.6}
                viewBox="-26 -8 88 52"
                style={{ scaleX: f.flip ? -1 : 1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <defs>
                    <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity={0.35} />
                        <stop offset="35%" stopColor={f.body} stopOpacity={0} />
                        <stop offset="100%" stopColor="#000000" stopOpacity={0.12} />
                    </linearGradient>
                </defs>

                {/* tail, swaying gently from the body */}
                <motion.g
                    style={{ transformOrigin: "2px 18px" }}
                    animate={{ rotate: [-9, 9, -9] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <path d="M2,18 Q-13,6 -24,0 Q-11,11 0,18 Z" fill={f.accent} opacity={0.75} />
                    <path d="M2,18 Q-13,30 -24,36 Q-11,25 0,18 Z" fill={f.accent} opacity={0.75} />
                </motion.g>

                {/* body */}
                <path
                    d="M64,18 C64,11 52,5 34,4 C19,3 8,9 2,18 C8,27 19,33 34,32 C52,31 64,25 64,18 Z"
                    fill={f.body}
                />
                <path
                    d="M64,18 C64,11 52,5 34,4 C19,3 8,9 2,18 C8,27 19,33 34,32 C52,31 64,25 64,18 Z"
                    fill={`url(#${gradId})`}
                />

                {/* dorsal + pectoral fins */}
                <path d="M25,6 Q32,-1 39,6 Q32,3.5 25,6 Z" fill={f.accent} opacity={0.6} />
                <motion.path
                    d="M32,20 Q41,23 33,27 Q29,23 32,20 Z"
                    fill={f.accent}
                    opacity={0.55}
                    style={{ transformOrigin: "32px 20px" }}
                    animate={{ rotate: [-6, 6, -6] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* eye */}
                <circle cx="51" cy="15" r="1.3" fill="#1e293b" />
                <circle cx="51.4" cy="14.6" r="0.4" fill="#ffffff" opacity={0.8} />
            </motion.svg>
        </motion.div>
    );
}

function AntlerCoral({ x, hue, scale = 1 }: { x: number; hue: string; scale?: number }) {
    const branches = [
        "M0,0 C-4,-30 -14,-46 -10,-70",
        "M0,0 C2,-34 -4,-52 2,-78",
        "M0,0 C8,-28 6,-48 16,-68",
        "M0,0 C-2,-20 6,-30 4,-46",
        "M0,0 C4,-22 -2,-34 6,-50",
    ];
    return (
        <g transform={`translate(${x},0) scale(${scale})`}>
            {branches.map((d, i) => (
                <motion.path
                    key={i}
                    d={d}
                    fill="none"
                    stroke={hue}
                    strokeWidth={7 - i * 0.6}
                    strokeLinecap="round"
                    style={{ transformOrigin: "0px 0px" }}
                    animate={{ rotate: [-2, 2, -2] }}
                    transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
        </g>
    );
}

function Anemone({ x, y = 300, hue, count = 9 }: { x: number; y?: number; hue: string; count?: number }) {
    return (
        <g transform={`translate(${x},${y})`}>
            {Array.from({ length: count }).map((_, i) => {
                const angle = -70 + (i * 140) / (count - 1);
                return (
                    <motion.line
                        key={i}
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={-30}
                        stroke={hue}
                        strokeWidth={3}
                        strokeLinecap="round"
                        style={{ transformOrigin: "0px 0px", rotate: `${angle}deg` }}
                        animate={{ rotate: [`${angle - 6}deg`, `${angle + 6}deg`, `${angle - 6}deg`] }}
                        transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
                    />
                );
            })}
            <circle cx="0" cy="2" r="7" fill={hue} opacity={0.9} />
        </g>
    );
}

export function ReefBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* water tint / depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-100/40 via-sky-300/25 to-blue-500/30 dark:from-blue-950/80 dark:via-slate-900/70 dark:to-slate-950/90" />

            {/* light shafts */}
            {[10, 32, 58, 80].map((left, i) => (
                <motion.div
                    key={i}
                    className="absolute top-0 h-full w-24 bg-gradient-to-b from-white/25 via-white/5 to-transparent dark:from-cyan-100/10"
                    style={{ left: `${left}%`, transform: "skewX(-12deg)" }}
                    animate={{ opacity: [0.25, 0.5, 0.25] }}
                    transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}

            {/* bubbles */}
            {BUBBLES.map((b, i) => (
                <motion.span
                    key={i}
                    className="absolute rounded-full bg-white/50 dark:bg-white/25"
                    style={{ left: b.left, width: b.size, height: b.size, bottom: "10%" }}
                    animate={{ y: ["0%", "-650%"], opacity: [0, 0.7, 0] }}
                    transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}

            {/* fish */}
            {FISH.map((f, i) => (
                <FishShape key={i} f={f} index={i} />
            ))}

            {/* reef floor */}
            <svg
                className="absolute bottom-0 left-0 w-full h-[46vh]"
                viewBox="0 0 1440 420"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fde9a8" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#e0ad4f" stopOpacity="0.75" />
                    </linearGradient>
                    <linearGradient id="rock" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#78716c" />
                        <stop offset="100%" stopColor="#44403c" />
                    </linearGradient>
                </defs>

                <path fill="url(#sand)" d="M0,300 Q360,250 720,300 T1440,290 L1440,420 L0,420 Z" />

                {/* speckled sand texture */}
                {Array.from({ length: 26 }).map((_, i) => (
                    <circle
                        key={i}
                        cx={(i * 57) % 1440}
                        cy={330 + ((i * 37) % 60)}
                        r={1.5}
                        fill="#92672c"
                        opacity={0.4}
                    />
                ))}

                {/* rock mounds anchoring the coral */}
                <path fill="url(#rock)" d="M60,310 Q110,260 170,300 Q210,270 250,310 Z" />
                <path fill="url(#rock)" d="M560,300 Q610,255 660,300 Q700,275 740,305 Z" />
                <path fill="url(#rock)" d="M1080,305 Q1140,255 1200,300 Q1250,270 1300,305 Z" />

                <g transform="translate(90,300)">
                    <AntlerCoral x={0} hue="#fb7185" />
                    <AntlerCoral x={30} hue="#f472b6" scale={0.8} />
                </g>
                <Anemone x={280} y={310} hue="#c084fc" />
                <g transform="translate(600,295)">
                    <AntlerCoral x={0} hue="#fb923c" />
                    <AntlerCoral x={-25} hue="#facc15" scale={0.75} />
                </g>
                <Anemone x={470} y={305} hue="#2dd4bf" count={11} />
                <g transform="translate(1120,300)">
                    <AntlerCoral x={0} hue="#34d399" />
                    <AntlerCoral x={26} hue="#5eead4" scale={0.7} />
                </g>
                <Anemone x={950} y={310} hue="#fb7185" count={8} />
                <Anemone x={1350} y={300} hue="#facc15" count={9} />
            </svg>

            {/* vignette for depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.25)] dark:shadow-[inset_0_0_220px_80px_rgba(0,0,0,0.55)]" />
        </div>
    );
}
