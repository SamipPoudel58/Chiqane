'use client';

import TrackWrapper from '@/components/track-wrapper';
import { useEffect, useMemo, useState } from 'react';

type Track = {
  name: string;
  layout: string;
};

type Question = Track & {
  options: string[];
  status?: 'success' | 'failure';
  selectedAnswer?: string;
};

const TrackQuiz = () => {
  const [gameOver, setGameOver] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const activeQuestion = questions.at(-1) as Question;
  const score = questions.reduce(
    (acc, curr) => (curr.status === 'success' ? acc + 1 : acc + 0),
    0
  );

  const MAX_QUESTIONS = 10;
  const OPTIONS_COUNT = 4;

  const TRACKS: Track[] = useMemo(
    () => [
      {
        name: 'Abu Dhabi',
        layout: 'abudhabi',
      },
      {
        name: 'Australia',
        layout: 'australia',
      },
      {
        name: 'Austria',
        layout: 'austria',
      },
      {
        name: 'Azerbaijan',
        layout: 'azerbaijan',
      },
      {
        name: 'Bahrain',
        layout: 'bahrain',
      },
      {
        name: 'Belgium',
        layout: 'belgium',
      },
      {
        name: 'Brazil',
        layout: 'brazil',
      },
      {
        name: 'Canada',
        layout: 'canada',
      },
      {
        name: 'China',
        layout: 'china',
      },
      {
        name: 'France',
        layout: 'france',
      },
      {
        name: 'Great Britain',
        layout: 'greatbritain',
      },
      {
        name: 'Hungary',
        layout: 'hungary',
      },
      {
        name: 'Italy',
        layout: 'italy',
      },
      {
        name: 'Japan',
        layout: 'japan',
      },
      {
        name: 'Mexico',
        layout: 'mexico',
      },
      {
        name: 'Monaco',
        layout: 'monaco',
      },
      {
        name: 'Netherlands',
        layout: 'netherlands',
      },
      {
        name: 'Russia',
        layout: 'russia',
      },
      {
        name: 'Singapore',
        layout: 'singapore',
      },
      {
        name: 'Spain',
        layout: 'spain',
      },
      {
        name: 'USA',
        layout: 'usa',
      },
      {
        name: 'Vietnam',
        layout: 'vietnam',
      },
    ],
    []
  );

  useEffect(() => {
    const question = createQuestion();
    setQuestions((prevQuestion) =>
      prevQuestion.length === 0 || prevQuestion.at(-1)?.status
        ? [...prevQuestion, question]
        : prevQuestion
    );
  }, []);

  const createQuestion = () => {
    const pastQuestionsIdx = questions
      .map((quest) => {
        const questionIdx = TRACKS.findIndex((i) => i.name === quest.name);
        if (questionIdx) return questionIdx;
      })
      .filter((i) => i !== undefined) as number[];

    const selectedTrackNo = getUniqueRandomNumbers(
      1,
      TRACKS.length - 1,
      pastQuestionsIdx
    )[0];
    const selectedTrack = TRACKS[selectedTrackNo];
    const randomOptionsIndices = getUniqueRandomNumbers(
      OPTIONS_COUNT - 1,
      TRACKS.length - 1,
      [selectedTrackNo]
    );
    const randomOptions = randomOptionsIndices.map((idx) => TRACKS[idx].name);

    const question = {
      ...selectedTrack,
      options: shuffleArray([selectedTrack.name, ...randomOptions]),
    };

    return question;
  };

  const getUniqueRandomNumbers = (
    count: number,
    max: number,
    exceptions?: number[]
  ) => {
    const result: Array<number> = [];

    while (result.length < count) {
      let randomNumber: number;

      if (exceptions) {
        do {
          randomNumber = Math.floor(Math.random() * (max + 1));
        } while (exceptions.includes(randomNumber));
      } else {
        randomNumber = Math.floor(Math.random() * (max + 1));
      }

      if (!result.includes(randomNumber)) {
        result.push(randomNumber);
      }
    }

    return result;
  };

  function shuffleArray<T>(array: Array<T>): Array<T> {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  }

  const submitAnswer = (ans: string) => {
    const pastQuestions = questions.slice(0, -1);
    if (ans === activeQuestion.name) {
      setQuestions([
        ...pastQuestions,
        { ...activeQuestion, status: 'success', selectedAnswer: ans },
      ]);
    } else {
      setQuestions([
        ...pastQuestions,
        { ...activeQuestion, status: 'failure', selectedAnswer: ans },
      ]);
    }

    if (questions.length === MAX_QUESTIONS) {
      setGameOver(true);
    } else {
      setTimeout(() => {
        const newQuestion = createQuestion();
        setQuestions((prev) => [...prev, newQuestion]);
      }, 500);
    }
  };

  const resetGame = () => {
    setGameOver(false);
    const question = createQuestion();
    setQuestions([question]);
  };

  return (
    questions.length > 0 && (
      <main className="max-w-[1200px] mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-x-16 sm:gap-y-6 lg:pt-16">
          {gameOver ? (
            <div className="flex flex-col items-center justify-center bg-[url(/images/grid.png)] bg-center bg-contain bg-no-repeat h-[350px] sm:h-[500px] w-full sm:w-[500px]">
              <h1 className="text-white text-[150px] sm:text-[200px] leading-none font-bold mt-8 sm:my-8">
                {Math.round((score / MAX_QUESTIONS) * 100)}
                <span className="text-5xl text-primary"> %</span>
              </h1>

              <p className="text-white text-center text-4xl sm:text-6xl leading-none font-bold">
                {score}/{MAX_QUESTIONS}
              </p>
              <p className="text-white text-center text-lg sm:text-2xl font-medium">
                FINAL SCORE
              </p>
            </div>
          ) : (
            <TrackWrapper
              url={`https://raw.githubusercontent.com/f1laps/f1-track-vectors/main/f1_2020/${activeQuestion.layout}.svg`}
            />
          )}
          <div className="w-full xl:w-1/2 px-4 sm:px-8 xl:px-0">
            {gameOver ? (
              <div className="flex flex-col items-center xl:items-start">
                <h1 className="text-white text-5xl sm:text-6xl font-bold md:mb-8">
                  And... There&apos;s the
                  <br /> Chequered Flag! 🏁
                  <br />
                  Well Done!
                </h1>
                <button
                  onClick={resetGame}
                  className="group flex gap-x-4 items-center justify-center text-white hover:text-background hover:bg-primary text-3xl md:text-4xl w-full max-w-[500px] mt-8 md:mt-12 border-2 border-primary rounded pt-5 pb-4 px-6"
                >
                  <span>Another Flying Lap!</span>
                  <div>
                    <svg
                      className="fill-white group-hover:fill-background"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2202_372)">
                        <path d="M19.4064 10.8004L12.1212 3.51516L13.818 1.81836L24 12.0004L23.1516 12.8488L13.818 22.1824L12.1212 20.4856L19.4064 13.2004L1.40983e-06 13.2004L1.51473e-06 10.8004L19.4064 10.8004Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2202_372">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(24) rotate(90)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </button>
              </div>
            ) : (
              <>
                <h1 className="text-center xl:text-left text-white text-4xl sm:text-5xl font-bold mb-8">
                  Guess The Track!
                </h1>

                <div className="flex flex-wrap gap-2 sm:gap-4">
                  {activeQuestion.options.map((opt, idx) => (
                    <button
                      onClick={() => submitAnswer(opt)}
                      key={idx}
                      className={`${
                        opt === activeQuestion.selectedAnswer
                          ? activeQuestion.status === 'success'
                            ? 'border-emerald-500 text-emerald-500'
                            : 'border-rose-600 text-rose-600'
                          : 'border-slate-100 hover:border-slate-100/70 text-slate-100 hover:text-slate-100/70'
                      } relative border-2 rounded text-2xl sm:text-3xl py-4 w-[48%] sm:w-[48%]`}
                    >
                      {opt}

                      {activeQuestion.status &&
                        opt === activeQuestion.selectedAnswer && (
                          <div
                            className={`${
                              activeQuestion.status === 'success'
                                ? 'bg-emerald-500'
                                : 'bg-rose-600'
                            } h-8 w-8 flex items-center justify-center rounded-full text-slate-100 absolute -top-2 -right-2`}
                          >
                            {activeQuestion.status === 'success' ? (
                              <CheckMarkIcon />
                            ) : (
                              <XMarkIcon />
                            )}
                          </div>
                        )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    )
  );
};

const XMarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const CheckMarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

export default TrackQuiz;
