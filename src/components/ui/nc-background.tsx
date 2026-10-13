import ncCounties from "@/constants/nc-counties.json";

const HIGHLIGHT_COUNTY = "Chatham";

export function NCBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center -translate-y-2">
            <svg
                className="w-[85%] max-w-5xl h-auto opacity-60 dark:opacity-70"
                viewBox={`0 0 ${ncCounties.width} ${ncCounties.height}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                {ncCounties.counties.map((county) =>
                    county.name === HIGHLIGHT_COUNTY ? null : (
                        <path
                            key={county.fips}
                            d={county.d}
                            className="fill-slate-300/40 stroke-slate-400/70 dark:fill-slate-600/30 dark:stroke-slate-300/40"
                            strokeWidth={6}
                        />
                    )
                )}

                {ncCounties.counties
                    .filter((county) => county.name === HIGHLIGHT_COUNTY)
                    .map((county) => (
                        <path
                            key={county.fips}
                            d={county.d}
                            className="fill-red-500/80 stroke-red-700/70 dark:fill-red-500/70 dark:stroke-red-300/60"
                            strokeWidth={34}
                        />
                    ))}
            </svg>
        </div>
    );
}
