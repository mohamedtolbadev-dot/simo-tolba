
"use client";

import { memo, useContext, useMemo } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  MotionConfig,
} from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Download,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { LongContext } from "./ContextProvider";

/* =========================================================
   ANIMATION
========================================================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fade = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   PROCESS STEPS
========================================================= */

const STEPS = [
  {
    key: "uiuxDesign",
    fallback: "Design",
    descKey: "uiuxDesc",
  },
  {
    key: "frontendBuild",
    fallback: "Build the interface",
    descKey: "frontendDesc",
  },
  {
    key: "backendApi",
    fallback: "Build the API",
    descKey: "backendDesc",
  },
  {
    key: "database",
    fallback: "Model the data",
    descKey: "databaseDesc",
  },
  {
    key: "deployTest",
    fallback: "Test & launch",
    descKey: "productionReady",
  },
];

/* =========================================================
   RING GEOMETRY
========================================================= */

const STEP_DEG = 360 / STEPS.length;

const toRad = (d) => (d * Math.PI) / 180;

function buildRing(sign) {
  const point = (deg) => ({
    x: 50 + 50 * sign * Math.cos(toRad(deg)),
    y: 50 + 50 * Math.sin(toRad(deg)),
  });

  const nodes = STEPS.map((_, i) =>
    point(-90 + i * STEP_DEG)
  );

  const arrows = STEPS.map((_, i) => {
    const deg =
      -90 + i * STEP_DEG + STEP_DEG / 2;

    const r = toRad(deg);

    const rot =
      (Math.atan2(
        Math.cos(r),
        -sign * Math.sin(r)
      ) *
        180) /
      Math.PI;

    return {
      ...point(deg),
      rot,
    };
  });

  return {
    nodes,
    arrows,
  };
}

const RING_LTR = buildRing(1);
const RING_RTL = buildRing(-1);

/* =========================================================
   FLAG
========================================================= */

const FlagMark = () => (
  <span
    aria-hidden="true"
    className="relative inline-block h-3.5 w-5 overflow-hidden rounded-[2px]"
    style={{
      background:
        "linear-gradient(to bottom, #000 0 33.3%, #fff 33.3% 66.6%, #149954 66.6% 100%)",
    }}
  >
    <span
      className="absolute inset-y-0 start-0 w-[45%] bg-[#e4312b]"
      style={{
        clipPath:
          "polygon(0 0, 100% 50%, 0 100%)",
      }}
    />
  </span>
);

/* =========================================================
   DESKTOP RING
========================================================= */

const Ring = memo(function Ring({
  t,
  isArabic,
}) {
  const { nodes, arrows } = isArabic
    ? RING_RTL
    : RING_LTR;

  return (
    <m.div
      variants={fade}
      aria-hidden="false"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r="50"
          fill="none"
          stroke="#262626"
          strokeWidth="1.5"
          strokeDasharray="3 7"
          vectorEffect="non-scaling-stroke"
        />

        {arrows.map((a, i) => (
          <polygon
            key={i}
            points="-1.3,-1.3 1.5,0 -1.3,1.3"
            fill="#737373"
            transform={`translate(${a.x} ${a.y}) rotate(${a.rot})`}
          />
        ))}
      </svg>

      <ol>
        {STEPS.map((s, i) => {
          const isLast =
            i === STEPS.length - 1;

          return (
            <li
              key={s.key}
              className={`
                absolute
                flex
                -translate-x-1/2
                -translate-y-1/2
                items-center
                gap-2
                whitespace-nowrap
                rounded-xl
                border
                bg-neutral-950
                px-3
                py-2
                ${
                  isLast
                    ? "border-[#e4312b]/70"
                    : "border-neutral-800"
                }
              `}
              style={{
                left: `${nodes[i].x}%`,
                top: `${nodes[i].y}%`,
              }}
            >
              <span
                className={`
                  inline-flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-xs
                  font-semibold
                  tabular-nums
                  ${
                    isLast
                      ? "bg-[#e4312b] text-white"
                      : "bg-neutral-800 text-neutral-300"
                  }
                `}
              >
                {i + 1}
              </span>

              <span className="text-sm font-semibold text-neutral-100">
                {t[s.key] || s.fallback}
              </span>
            </li>
          );
        })}
      </ol>
    </m.div>
  );
});

/* =========================================================
   MOBILE / TABLET TIMELINE
========================================================= */

const Flowchart = memo(function Flowchart({
  t,
  isArabic,
}) {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="relative">
        {/* Vertical timeline */}
        <div
          aria-hidden="true"
          className={`
            absolute
            top-4
            bottom-4
            w-px
            bg-neutral-800
            ${
              isArabic
                ? "right-[19px]"
                : "left-[19px]"
            }
          `}
        />

        <ol className="relative space-y-4">
          {STEPS.map((step, index) => {
            const isLast =
              index === STEPS.length - 1;

            const title =
              t[step.key] || step.fallback;

            const description =
              t[step.descKey];

            return (
              <li
                key={step.key}
                className="relative flex items-start gap-4"
              >
                {/* Number */}
                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    text-xs
                    font-bold
                    tabular-nums
                    ${
                      isLast
                        ? "border-[#e4312b] bg-[#e4312b] text-white"
                        : "border-neutral-700 bg-neutral-950 text-neutral-400"
                    }
                  `}
                >
                  {index + 1}
                </div>

                {/* Content */}
                <div
                  className={`
                    min-w-0
                    flex-1
                    rounded-xl
                    border
                    px-4
                    py-3.5
                    ${
                      isLast
                        ? "border-[#e4312b]/50 bg-[#e4312b]/5"
                        : "border-neutral-800 bg-neutral-900/50"
                    }
                  `}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold leading-snug text-neutral-100">
                      {title}
                    </p>

                    {isLast ? (
                      <span className="shrink-0 text-[9px] font-bold uppercase tracking-wider text-[#e4312b]">
                        Ready
                      </span>
                    ) : (
                      <span className="shrink-0 text-[10px] font-medium tabular-nums text-neutral-600">
                        0{index + 1}
                      </span>
                    )}
                  </div>

                  {description && (
                    <p
                      className={`
                        mt-1.5
                        text-xs
                        leading-relaxed
                        text-neutral-500
                        ${
                          isArabic
                            ? "font-arabic"
                            : ""
                        }
                      `}
                    >
                      {description}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Flow indicator */}
      <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-600">
        <span className="h-px w-8 bg-neutral-800" />

        <ChevronDown
          className="h-3.5 w-3.5 text-[#e4312b]"
          strokeWidth={1.8}
        />

        <span>
          {isArabic
            ? "من الفكرة إلى الإطلاق"
            : "From idea to launch"}
        </span>

        <span className="h-px w-8 bg-neutral-800" />
      </div>
    </div>
  );
});

/* =========================================================
   HERO
========================================================= */

const Hero = () => {
  const {
    language,
    translationsHero,
  } = useContext(LongContext);

  const isArabic = language === "ar";

  const t =
    translationsHero[language] ||
    translationsHero.en;

  const [firstName, ...rest] = useMemo(
    () => (t.name || "").split(" "),
    [t.name]
  );

  const lastName = rest.join(" ");

  const ArrowIcon = isArabic
    ? ArrowLeft
    : ArrowRight;

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion
        features={domAnimation}
        strict
      >
        <section
          id="home"
          name="home"
          dir={isArabic ? "rtl" : "ltr"}
          className="
            relative
            flex
            min-h-screen
            items-center
            justify-center
            overflow-hidden
            bg-neutral-950
            px-5
            pb-16
            pt-32
            sm:px-8
            lg:pb-12
            lg:pt-32
          "
        >
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="
              relative
              mx-auto
              w-full
              max-w-5xl
              lg:aspect-square
              lg:w-[min(calc(100vh-11rem),960px)]
              lg:max-w-none
            "
          >
            {/* Desktop ring */}
            <Ring
              t={t}
              isArabic={isArabic}
            />

            {/* Central content */}
            <div
              className="
                flex
                flex-col
                items-center
                text-center
                lg:absolute
                lg:inset-[12%]
                lg:justify-center
              "
            >
              {/* Availability */}
              <m.p
                variants={item}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-neutral-800
                  px-4
                  py-1.5
                  text-sm
                  text-neutral-300
                "
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                {t.availableForWork ||
                  "Available for work"}
              </m.p>

              {/* Name */}
              <m.h1
                variants={item}
                className={`
                  mt-8
                  text-6xl
                  font-black
                  leading-[0.95]
                  tracking-tighter
                  text-white
                  sm:text-8xl
                  lg:mt-5
                  lg:text-7xl
                  [@media(min-height:860px)]:lg:text-8xl
                  ${
                    isArabic
                      ? "font-arabic leading-[1.15]"
                      : ""
                  }
                `}
              >
                <span className="block">
                  {firstName}
                </span>

                {lastName && (
                  <span
                    className="block text-transparent"
                    style={{
                      WebkitTextStroke:
                        "2px #e4312b",
                    }}
                  >
                    {lastName}
                  </span>
                )}
              </m.h1>

              {/* Description */}
              <m.div
                variants={item}
                className="
                  mt-8
                  max-w-2xl
                  space-y-3
                  lg:mt-5
                  lg:max-w-sm
                  lg:space-y-2
                "
              >
                <p className="text-xl font-semibold text-white sm:text-2xl lg:text-lg">
                  Full-Stack Developer
                </p>

                <p
                  className={`
                    text-base
                    leading-relaxed
                    text-neutral-400
                    sm:text-lg
                    lg:text-sm
                    [@media(min-height:860px)]:lg:text-base
                    ${
                      isArabic
                        ? "font-arabic"
                        : ""
                    }
                  `}
                >
                  {t.description}
                </p>
              </m.div>

              {/* Actions */}
              <m.div
                variants={item}
                className="
                  mt-8
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-6
                  gap-y-3
                  lg:mt-6
                "
              >
                <Link
                  to="/projects"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-6
                    py-3
                    font-semibold
                    text-neutral-950
                    transition-colors
                    hover:bg-neutral-200
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-white
                  "
                >
                  {t.viewProjects}

                  <ArrowIcon
                    className={`
                      h-4
                      w-4
                      transition-transform
                      ${
                        isArabic
                          ? "group-hover:-translate-x-1"
                          : "group-hover:translate-x-1"
                      }
                    `}
                  />
                </Link>

                <a
                  href="/assets/CV_MOHAMED_TOLBA.pdf"
                  download="CV_MOHAMED_TOLBA.pdf"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-neutral-300
                    underline
                    decoration-neutral-700
                    underline-offset-8
                    transition-colors
                    hover:text-white
                    hover:decoration-[#e4312b]
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-white
                  "
                >
                  {t.downloadCV ||
                    translationsHero.en.downloadCV}

                  <Download className="h-4 w-4" />
                </a>
              </m.div>

              {/* Palestine */}
              <m.p
                variants={item}
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-2.5
                  text-sm
                  text-neutral-400
                  lg:mt-6
                "
              >
                <FlagMark />
                Free Palestine
              </m.p>
            </div>

            {/* =================================================
                MOBILE / TABLET FLOWCHART
            ================================================= */}

            <m.div
              variants={item}
              className="
                mt-14
                w-full
                lg:hidden
              "
            >
              <Flowchart
                t={t}
                isArabic={isArabic}
              />
            </m.div>
          </m.div>
        </section>
      </LazyMotion>
    </MotionConfig>
  );
};

export default memo(Hero);
