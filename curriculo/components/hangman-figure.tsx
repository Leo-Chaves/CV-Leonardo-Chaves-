type HangmanFigureProps = {
  wrongGuesses: number;
  maxErrors: number;
};

const strokeClass = "stroke-slate-100/90";
const hiddenClass = "opacity-0";
const visibleClass = "opacity-100";

export function HangmanFigure({ wrongGuesses, maxErrors }: HangmanFigureProps) {
  return (
    <div className="surface-card rounded-[1.75rem] p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/65">
            Forca
          </p>
          <h3 className="mt-2 display-font text-xl font-semibold text-white">
            Boneco da forca
          </h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          {wrongGuesses} / {maxErrors} erros
        </span>
      </div>

      <div className="rounded-[1.5rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(125,180,255,0.1),transparent_52%),rgba(3,10,22,0.35)] p-4">
        <svg viewBox="0 0 240 240" className="mx-auto w-full max-w-[280px]">
          <line
            x1="32"
            y1="208"
            x2="182"
            y2="208"
            className={strokeClass}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="74"
            y1="208"
            x2="74"
            y2="28"
            className={strokeClass}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="74"
            y1="30"
            x2="172"
            y2="30"
            className={strokeClass}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="172"
            y1="30"
            x2="172"
            y2="54"
            className={strokeClass}
            strokeWidth="6"
            strokeLinecap="round"
          />

          <ellipse
            cx="171"
            cy="83"
            rx="18"
            ry="20"
            className={`${strokeClass} ${wrongGuesses >= 1 ? visibleClass : hiddenClass}`}
            strokeWidth="6"
            fill="transparent"
          />
          <path
            d="M165 92 Q171 96 177 92"
            className={`${strokeClass} ${wrongGuesses >= 2 ? visibleClass : hiddenClass}`}
            strokeWidth="4"
            strokeLinecap="round"
            fill="transparent"
          />
          <path
            d="M171 104 C168 122 168 141 170 160"
            className={`${strokeClass} ${wrongGuesses >= 3 ? visibleClass : hiddenClass}`}
            strokeWidth="6"
            strokeLinecap="round"
            fill="transparent"
          />
          <path
            d="M170 122 C162 132 154 142 145 151"
            className={`${strokeClass} ${wrongGuesses >= 4 ? visibleClass : hiddenClass}`}
            strokeWidth="6"
            strokeLinecap="round"
            fill="transparent"
          />
          <path
            d="M171 126 C178 137 185 147 191 159"
            className={`${strokeClass} ${wrongGuesses >= 5 ? visibleClass : hiddenClass}`}
            strokeWidth="6"
            strokeLinecap="round"
            fill="transparent"
          />
          <path
            d="M170 160 C163 175 158 190 157 207"
            className={`${strokeClass} ${wrongGuesses >= 6 ? visibleClass : hiddenClass}`}
            strokeWidth="6"
            strokeLinecap="round"
            fill="transparent"
          />
          <path
            d="M170 160 C176 174 178 189 178 204"
            className={`${strokeClass} ${wrongGuesses >= 7 ? visibleClass : hiddenClass}`}
            strokeWidth="6"
            strokeLinecap="round"
            fill="transparent"
          />
          <line
            x1="162"
            y1="78"
            x2="167"
            y2="83"
            className={`${strokeClass} ${wrongGuesses >= 8 ? visibleClass : hiddenClass}`}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <line
            x1="167"
            y1="78"
            x2="162"
            y2="83"
            className={`${strokeClass} ${wrongGuesses >= 8 ? visibleClass : hiddenClass}`}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <line
            x1="175"
            y1="78"
            x2="180"
            y2="83"
            className={`${strokeClass} ${wrongGuesses >= 9 ? visibleClass : hiddenClass}`}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <line
            x1="180"
            y1="78"
            x2="175"
            y2="83"
            className={`${strokeClass} ${wrongGuesses >= 9 ? visibleClass : hiddenClass}`}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="mt-4 rounded-[1.25rem] border border-white/8 bg-black/10 p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
          Progresso visual
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-300">
          O boneco agora revela o rosto por ultimo, deixando os olhos para o fim da rodada.
        </p>
      </div>
    </div>
  );
}
