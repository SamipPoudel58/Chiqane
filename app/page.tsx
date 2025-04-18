import Track from '@/components/track';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <div className="flex flex-col-reverse xl:flex-row items-center gap-x-16 pt-8 lg:pt-16">
        <Track url="/tracks/mexico.png" />

        <div className="px-4 sm:px-8 xl:px-0">
          <div className="flex gap-x-4 leading-[0] items-center ">
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold">
              Guess These
              <br />
              Track Layouts
            </h1>

            <p className="block text-9xl sm:text-[180px] text-primary font-bold pt-6">
              ?
            </p>
          </div>

          <Link href="/track-quiz">
            <button className="group flex gap-x-4 items-center justify-center text-white hover:text-background hover:bg-primary text-3xl sm:text-4xl w-full mb-4 border-2 border-primary rounded pt-5 pb-4 px-6">
              <span>Lights Out & Away We Go!</span>
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
          </Link>
        </div>
      </div>
    </main>
  );
}
