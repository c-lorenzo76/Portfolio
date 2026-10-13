interface WaveDividerProps {
    /** Tailwind fill class for the area below the curve, e.g. "fill-slate-950" */
    fillClassName?: string;
}

export function WaveDivider({ fillClassName = "fill-gray-100 dark:fill-gray-900" }: WaveDividerProps) {
    return (
        <div
            className="w-full h-12 md:h-20 overflow-hidden leading-none"
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
                className="w-full h-full"
            >
                <path
                    d="M0,50 C240,100 480,0 720,30 C960,60 1200,100 1440,40 L1440,100 L0,100 Z"
                    className={fillClassName}
                />
                <path
                    d="M0,50 C240,100 480,0 720,30 C960,60 1200,100 1440,40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-border"
                />
            </svg>
        </div>
    );
}
