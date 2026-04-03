"use client";

import { startTransition, useEffect, useEffectEvent, useMemo, useState } from "react";
import { HangmanFigure } from "@/components/hangman-figure";
import { HANGMAN_WORDS } from "@/lib/hangman-words";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_ERRORS = 9;
const LETTER_PATTERN = /[A-Z]/;

function normalizeCharacter(character: string) {
  return character.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
}

function getRandomWord(currentWord?: string) {
  if (HANGMAN_WORDS.length === 1) {
    return HANGMAN_WORDS[0];
  }

  let nextWord = HANGMAN_WORDS[Math.floor(Math.random() * HANGMAN_WORDS.length)];

  while (nextWord === currentWord) {
    nextWord = HANGMAN_WORDS[Math.floor(Math.random() * HANGMAN_WORDS.length)];
  }

  return nextWord;
}

export function HangmanGame() {
  const [word, setWord] = useState<string>(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [feedback, setFeedback] = useState(
    "Use o teclado virtual ou pressione letras no teclado para comecar.",
  );
  const [dismissedModalWord, setDismissedModalWord] = useState("");

  const uniqueLetters = useMemo(
    () =>
      Array.from(
        new Set(
          word
            .split("")
            .map((character) => normalizeCharacter(character))
            .filter((character) => LETTER_PATTERN.test(character)),
        ),
      ),
    [word],
  );

  const wrongLetters = useMemo(
    () =>
      guessedLetters.filter(
        (letter) =>
          !word
            .split("")
            .some((character) => normalizeCharacter(character) === letter),
      ),
    [guessedLetters, word],
  );

  const correctLetters = useMemo(
    () =>
      guessedLetters.filter((letter) =>
        word
          .split("")
          .some((character) => normalizeCharacter(character) === letter),
      ),
    [guessedLetters, word],
  );

  const hasWon = uniqueLetters.every((letter) => guessedLetters.includes(letter));
  const hasLost = wrongLetters.length >= MAX_ERRORS;
  const gameOver = hasWon || hasLost;
  const attemptsLeft = MAX_ERRORS - wrongLetters.length;
  const showResultModal = gameOver && dismissedModalWord !== word;

  const handleGuess = (letter: string) => {
    if (gameOver) {
      setFeedback("Partida encerrada. Clique em novo jogo para jogar novamente.");
      return;
    }

    if (guessedLetters.includes(letter)) {
      setFeedback(`A letra ${letter} ja foi usada. Escolha outra tentativa.`);
      return;
    }

    const isCorrect = word
      .split("")
      .some((character) => normalizeCharacter(character) === letter);

    setGuessedLetters((current) => [...current, letter]);
    setFeedback(
      isCorrect
        ? `Boa! A letra ${letter} faz parte do filme.`
        : `A letra ${letter} nao aparece no titulo sorteado.`,
    );
  };

  const handleKeyboardGuess = useEffectEvent((letter: string) => {
    handleGuess(letter);
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();

      if (!/^[A-Z]$/.test(key)) {
        return;
      }

      handleKeyboardGuess(key);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const resetGame = () => {
    startTransition(() => {
      setWord((currentWord) => getRandomWord(currentWord));
      setGuessedLetters([]);
      setFeedback("Nova partida iniciada. Descubra o filme.");
      setDismissedModalWord("");
    });
  };

  const closeModal = () => {
    setDismissedModalWord(word);
  };

  const modalTitle = hasWon ? "Parabens!" : "Fim de jogo";
  const modalDescription = hasWon
    ? `Voce acertou o filme ${word}.`
    : `A palavra correta era ${word}. Tente outro titulo.`;
  const wordGroups = word.split(" ");
  const wordTileClassName =
    "flex h-[clamp(3.2rem,10vw,4.5rem)] w-[clamp(1.35rem,6.2vw,2.75rem)] items-end justify-center rounded-[0.95rem] border border-white/10 bg-slate-950/40 pb-2 text-[clamp(1rem,4.6vw,1.55rem)] font-semibold tracking-[0.03em] text-white";

  return (
    <>
      <div className="grid gap-6 xl:grid-cols-[1.18fr_0.82fr] xl:items-start">
        <aside className="order-1 xl:order-2">
          <HangmanFigure wrongGuesses={wrongLetters.length} maxErrors={MAX_ERRORS} />
        </aside>

        <section className="section-card order-2 rounded-[1.9rem] p-5 sm:p-7 xl:order-1">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="display-font text-3xl font-semibold text-white sm:text-4xl">
                Jogo da Forca
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-sky-200/15 bg-sky-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">
                Tema: filmes
              </span>
              <button
                type="button"
                onClick={resetGame}
                className="rounded-full border border-sky-200/20 bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-sky-200"
              >
                Novo jogo
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-[1.2rem] border border-white/8 bg-black/12 px-3 py-4 text-center">
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400 sm:text-xs">
                Restantes
              </p>
              <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                {attemptsLeft}
              </p>
            </div>
            <div className="rounded-[1.2rem] border border-white/8 bg-black/12 px-3 py-4 text-center">
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400 sm:text-xs">
                Acertos
              </p>
              <p className="mt-2 text-2xl font-semibold text-emerald-200 sm:text-3xl">
                {correctLetters.length}
              </p>
            </div>
            <div className="rounded-[1.2rem] border border-white/8 bg-black/12 px-3 py-4 text-center">
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400 sm:text-xs">
                Erros
              </p>
              <p className="mt-2 text-2xl font-semibold text-rose-200 sm:text-3xl">
                {wrongLetters.length}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.6rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(102,170,255,0.16),transparent_55%),rgba(2,7,17,0.34)] p-4 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/65">
                Palavra secreta
              </p>
            </div>

            <div className="mt-5 flex max-w-full flex-col items-start gap-3 overflow-hidden">
              {wordGroups.map((group, groupIndex) => (
                <div
                  key={`${group}-${groupIndex}`}
                  className="flex max-w-full gap-[clamp(0.2rem,1vw,0.7rem)]"
                >
                  {group.split("").map((letter, letterIndex) => {
                    const normalizedLetter = normalizeCharacter(letter);
                    const shouldReveal =
                      guessedLetters.includes(normalizedLetter) || hasLost;

                    return (
                      <span
                        key={`${groupIndex}-${letter}-${letterIndex}`}
                        className={wordTileClassName}
                      >
                        {shouldReveal ? letter : "_"}
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[1.4rem] border border-sky-200/10 bg-sky-300/8 px-4 py-3 text-sm leading-7 text-slate-200">
            {feedback}
          </div>

          <div className="mt-6 surface-card rounded-[1.5rem] p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/65">
                Teclado
              </p>
              <span className="text-xs text-slate-400">toque ou use o teclado fisico</span>
            </div>

            <div className="mt-4 grid grid-cols-7 gap-2 sm:grid-cols-9">
              {ALPHABET.map((letter) => {
                const wasGuessed = guessedLetters.includes(letter);
                const isCorrect = correctLetters.includes(letter);
                const isWrong = wrongLetters.includes(letter);

                let buttonClass =
                  "border-white/10 bg-white/5 text-slate-100 hover:-translate-y-0.5 hover:border-sky-200/30 hover:bg-sky-200/10";

                if (isCorrect) {
                  buttonClass = "border-emerald-300/20 bg-emerald-300/14 text-emerald-100";
                } else if (isWrong) {
                  buttonClass = "border-rose-300/20 bg-rose-300/12 text-rose-100";
                }

                return (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => handleGuess(letter)}
                    disabled={wasGuessed || gameOver}
                    className={`rounded-[1rem] border py-3 text-sm font-semibold ${buttonClass} disabled:cursor-not-allowed disabled:opacity-55`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="surface-card rounded-[1.5rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/65">
                Letras corretas
              </p>
              <div className="mt-4 flex min-h-11 flex-wrap gap-2">
                {correctLetters.length > 0 ? (
                  correctLetters.map((letter) => (
                    <span
                      key={`correct-${letter}`}
                      className="rounded-full border border-emerald-300/20 bg-emerald-300/14 px-3 py-2 text-sm font-semibold text-emerald-100"
                    >
                      {letter}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-slate-400">Nenhuma letra correta ainda.</span>
                )}
              </div>
            </div>

            <div className="surface-card rounded-[1.5rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/65">
                Letras incorretas
              </p>
              <div className="mt-4 flex min-h-11 flex-wrap gap-2">
                {wrongLetters.length > 0 ? (
                  wrongLetters.map((letter) => (
                    <span
                      key={`wrong-${letter}`}
                      className="rounded-full border border-rose-300/20 bg-rose-300/12 px-3 py-2 text-sm font-semibold text-rose-100"
                    >
                      {letter}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-slate-400">Nenhum erro ate aqui.</span>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {showResultModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020814]/78 px-4 backdrop-blur-md">
          <div className="section-card w-full max-w-md rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/65">
              Resultado da rodada
            </p>
            <h3 className="mt-4 display-font text-3xl font-semibold text-white">
              {modalTitle}
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-300">{modalDescription}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={resetGame}
                className="rounded-full bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-sky-200"
              >
                Novo jogo
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-sky-200/20 bg-sky-200/8 px-5 py-3 text-sm font-semibold text-sky-50 hover:-translate-y-0.5 hover:bg-sky-200/12"
              >
                Continuar vendo
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
