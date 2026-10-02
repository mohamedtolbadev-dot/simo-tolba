
"use client";

import { memo, useContext, useMemo, useState } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  MotionConfig,
} from "framer-motion";

import {
  Database,
  LayoutGrid,
  Server,
  Code2,
  Palette,
  TrendingUp,
  CheckCircle,
  Star,
} from "lucide-react";

import {
  DiReact,
  DiGit,
  DiMysql,
  DiLaravel,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiNodejs,
} from "react-icons/di";

import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiGithub,
  SiTailwindcss,
  SiVite,
  SiFigma,
} from "react-icons/si";

import { LongContext } from "../components/ContextProvider";

/* =========================================================
   Animation
========================================================= */

const revealUp = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -18,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

/* =========================================================
   Skills data
========================================================= */

const SKILLS = [
  {
    id: 1,
    title: "HTML5",
    icon: DiHtml5,
    iconClass: "text-orange-500",
    level: 95,
    category: "frontend",
    description: "Semantic markup & modern standards",
  },
  {
    id: 2,
    title: "CSS3",
    icon: DiCss3,
    iconClass: "text-blue-500",
    level: 90,
    category: "frontend",
    description: "Advanced styling & animations",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: DiJavascript,
    iconClass: "text-yellow-400",
    level: 88,
    category: "frontend",
    description: "ES6+ & modern JS features",
  },
  {
    id: 4,
    title: "React",
    icon: DiReact,
    iconClass: "text-cyan-400",
    level: 90,
    category: "frontend",
    description: "Hooks, Context & modern patterns",
  },
  {
    id: 5,
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    iconClass: "text-cyan-500",
    level: 92,
    category: "frontend",
    description: "Utility-first CSS framework",
  },
  {
    id: 6,
    title: "Node.js",
    icon: DiNodejs,
    iconClass: "text-green-500",
    level: 85,
    category: "backend",
    description: "Server-side JavaScript runtime",
  },
  {
    id: 7,
    title: "Express.js",
    icon: SiExpress,
    iconClass: "text-neutral-300",
    level: 85,
    category: "backend",
    description: "Fast & minimalist web framework",
  },
  {
    id: 8,
    title: "Laravel",
    icon: DiLaravel,
    iconClass: "text-red-500",
    level: 80,
    category: "backend",
    description: "Elegant PHP web framework",
  },
  {
    id: 9,
    title: "MongoDB",
    icon: SiMongodb,
    iconClass: "text-green-500",
    level: 85,
    category: "database",
    description: "NoSQL document database",
  },
  {
    id: 10,
    title: "MySQL",
    icon: DiMysql,
    iconClass: "text-blue-400",
    level: 80,
    category: "database",
    description: "Relational database management",
  },
  {
    id: 11,
    title: "Git",
    icon: DiGit,
    iconClass: "text-orange-600",
    level: 90,
    category: "tools",
    description: "Version control system",
  },
  {
    id: 12,
    title: "GitHub",
    icon: SiGithub,
    iconClass: "text-neutral-300",
    level: 90,
    category: "tools",
    description: "Code collaboration platform",
  },
  {
    id: 13,
    title: "Redux",
    icon: SiRedux,
    iconClass: "text-purple-500",
    level: 85,
    category: "frontend",
    description: "Predictable state container",
  },
  {
    id: 14,
    title: "Vite",
    icon: SiVite,
    iconClass: "text-purple-400",
    level: 88,
    category: "tools",
    description: "Fast build tool & dev server",
  },
  {
    id: 15,
    title: "Figma",
    icon: SiFigma,
    iconClass: "text-pink-500",
    level: 75,
    category: "design",
    description: "UI/UX design & prototyping",
  },
];

/* =========================================================
   Categories
========================================================= */

const CATEGORY_CONFIG = [
  {
    id: "all",
    icon: Star,
  },
  {
    id: "frontend",
    icon: LayoutGrid,
  },
  {
    id: "backend",
    icon: Server,
  },
  {
    id: "database",
    icon: Database,
  },
  {
    id: "tools",
    icon: Code2,
  },
  {
    id: "design",
    icon: Palette,
  },
];

/* =========================================================
   Skill Card
========================================================= */

const SkillCard = memo(function SkillCard({
  skill,
  index,
  isArabic,
}) {
  const Icon = skill.icon;

  return (
    <m.article
      variants={revealUp}
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-neutral-800
        bg-neutral-900/30
        p-4
        transition-colors
        duration-300

        hover:border-neutral-700
        hover:bg-neutral-900/60

        sm:p-5
      "
    >
      {/* Red top accent */}

      <span
        aria-hidden="true"
        className="
          absolute
          left-0
          top-0
          h-px
          w-0
          bg-[#e4312b]
          transition-all
          duration-300
          group-hover:w-full
        "
      />

      {/* Number */}

      <div
        className="
          absolute
          right-3
          top-3
          text-[10px]
          font-medium
          tabular-nums
          text-neutral-700
        "
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Icon */}

      <div
        className={`
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          border
          border-neutral-800
          bg-neutral-950
          transition-transform
          duration-300
          group-hover:scale-105

          ${skill.iconClass}
        `}
      >
        <Icon
          size={24}
          aria-hidden="true"
        />
      </div>

      {/* Content */}

      <div className="mt-4">
        <h3
          className="
            pr-5
            text-sm
            font-semibold
            text-white
          "
        >
          {skill.title}
        </h3>

        <p
          className="
            mt-1.5
            min-h-[32px]
            text-[11px]
            leading-4
            text-neutral-500
          "
        >
          {skill.description}
        </p>
      </div>

      {/* Progress */}

      <div className="mt-4">
        <div
          className="
            mb-2
            flex
            items-center
            justify-between
            text-[10px]
          "
        >
          <span
            className="
              uppercase
              tracking-wider
              text-neutral-600
            "
          >
            Level
          </span>

          <span
            className="
              font-medium
              tabular-nums
              text-neutral-400
            "
          >
            {skill.level}%
          </span>
        </div>

        <div
          className="
            h-1
            overflow-hidden
            rounded-full
            bg-neutral-800
          "
        >
          <m.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: skill.level / 100,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.65,
              delay: Math.min(index * 0.025, 0.3),
              ease: "easeOut",
            }}
            style={{
              transformOrigin: isArabic
                ? "right"
                : "left",
            }}
            className="
              h-full
              w-full
              rounded-full
              bg-[#e4312b]
            "
          />
        </div>
      </div>
    </m.article>
  );
});

/* =========================================================
   Skills
========================================================= */

const Skills = () => {
  const {
    language,
    tSkills,
  } = useContext(LongContext);

  const isArabic = language === "ar";

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("all");

  /* ---------------------------------------------------------
     Categories with translations
  --------------------------------------------------------- */

  const categories = useMemo(() => {
    const titles = {
      all:
        tSkills?.allSkills ||
        "All Skills",

      frontend:
        tSkills?.frontend ||
        "Frontend",

      backend:
        tSkills?.backend ||
        "Backend",

      database:
        tSkills?.database ||
        "Database",

      tools:
        tSkills?.tools ||
        "Tools",

      design:
        tSkills?.design ||
        "Design",
    };

    return CATEGORY_CONFIG.map(
      (category) => ({
        ...category,
        title: titles[category.id],
        count:
          category.id === "all"
            ? SKILLS.length
            : SKILLS.filter(
                (skill) =>
                  skill.category ===
                  category.id
              ).length,
      })
    );
  }, [tSkills]);

  /* ---------------------------------------------------------
     Filtered skills
  --------------------------------------------------------- */

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "all") {
      return SKILLS;
    }

    return SKILLS.filter(
      (skill) =>
        skill.category ===
        selectedCategory
    );
  }, [selectedCategory]);

  /* ---------------------------------------------------------
     Average level
  --------------------------------------------------------- */

  const averageLevel = useMemo(() => {
    if (!filteredSkills.length) {
      return 0;
    }

    return Math.round(
      filteredSkills.reduce(
        (total, skill) =>
          total + skill.level,
        0
      ) / filteredSkills.length
    );
  }, [filteredSkills]);

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion
        features={domAnimation}
        strict
      >
        <section
          id="skills"
          name="skills"
          dir={isArabic ? "rtl" : "ltr"}
          className="
            relative
            min-h-screen
            overflow-hidden
            bg-neutral-950
            px-4
            py-20

            sm:px-6
            sm:py-24

            lg:px-8
            lg:py-32
          "
        >
          {/* =================================================
              Main container
          ================================================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              w-full
              max-w-6xl
            "
          >
            {/* =================================================
                Header
            ================================================= */}

            <m.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
            >
              {/* Section label */}

              <m.div
                variants={revealLeft}
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#e4312b]
                  "
                />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-neutral-500
                  "
                >
                  {tSkills?.technicalSkills ||
                    "Technical Skills"}
                </span>

                <span
                  className="
                    h-px
                    w-10
                    bg-neutral-800
                  "
                />
              </m.div>

              {/* Heading */}

              <m.h2
                variants={revealUp}
                className={`
                  mt-7
                  max-w-4xl
                  font-black
                  leading-[0.9]
                  tracking-[-0.06em]
                  text-white
                  text-[clamp(3.3rem,10vw,7rem)]

                  ${
                    isArabic
                      ? "font-arabic leading-[1.1] tracking-normal"
                      : ""
                  }
                `}
              >
                <span className="block">
                  {tSkills?.skillsTitle ||
                    "Skills &"}
                </span>

                <span
                  className="
                    block
                    text-transparent
                  "
                  style={{
                    WebkitTextStroke:
                      "1.5px #e4312b",
                  }}
                >
                  {tSkills?.technologiesTitle ||
                    "Technologies"}
                </span>
              </m.h2>

              {/* Description + stats */}

              <m.div
                variants={revealUp}
                className="
                  mt-7
                  flex
                  flex-col
                  gap-5

                  lg:flex-row
                  lg:items-end
                  lg:justify-between
                "
              >
                <p
                  className={`
                    max-w-2xl
                    text-sm
                    leading-7
                    text-neutral-400

                    sm:text-base

                    ${
                      isArabic
                        ? "font-arabic"
                        : ""
                    }
                  `}
                >
                  {tSkills?.description ||
                    "A comprehensive showcase of my technical expertise across frontend, backend, databases, and development tools."}
                </p>

                {/* Stats */}

                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-5
                    text-xs
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-neutral-500
                    "
                  >
                    <TrendingUp
                      className="
                        h-4
                        w-4
                        text-[#e4312b]
                      "
                    />

                    <span>
                      {averageLevel}%{" "}
                      {tSkills?.avg || "Avg"}
                    </span>
                  </div>

                  <span
                    className="
                      h-4
                      w-px
                      bg-neutral-800
                    "
                  />

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-neutral-500
                    "
                  >
                    <CheckCircle
                      className="
                        h-4
                        w-4
                        text-neutral-600
                      "
                    />

                    <span>
                      {filteredSkills.length}{" "}
                      {tSkills?.skillsCount ||
                        "Skills"}
                    </span>
                  </div>
                </div>
              </m.div>
            </m.div>

            {/* =================================================
                Category filter
            ================================================= */}

            <m.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="
                mt-10
                border-y
                border-neutral-800
                py-4

                sm:mt-12
              "
            >
              <div
                className="
                  flex
                  gap-2
                  overflow-x-auto
                  pb-1
                  scrollbar-none

                  sm:flex-wrap
                  sm:overflow-visible
                "
              >
                {categories.map(
                  (category) => {
                    const Icon =
                      category.icon;

                    const isActive =
                      selectedCategory ===
                      category.id;

                    return (
                      <button
                        key={
                          category.id
                        }
                        type="button"
                        onClick={() =>
                          setSelectedCategory(
                            category.id
                          )
                        }
                        aria-pressed={
                          isActive
                        }
                        className={`
                          inline-flex
                          shrink-0
                          items-center
                          gap-2
                          rounded-full
                          border
                          px-3.5
                          py-2
                          text-xs
                          font-medium
                          transition-colors
                          duration-200

                          focus-visible:outline
                          focus-visible:outline-2
                          focus-visible:outline-offset-2
                          focus-visible:outline-[#e4312b]

                          ${
                            isActive
                              ? "border-[#e4312b] bg-[#e4312b] text-white"
                              : "border-neutral-800 bg-neutral-900/30 text-neutral-500 hover:border-neutral-700 hover:text-neutral-300"
                          }
                        `}
                      >
                        <Icon
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />

                        <span>
                          {category.title}
                        </span>

                        <span
                          className={`
                            text-[10px]

                            ${
                              isActive
                                ? "text-white/60"
                                : "text-neutral-700"
                            }
                          `}
                        >
                          {category.count}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </m.div>

            {/* =================================================
                Skills section
            ================================================= */}

            <div className="mt-8">
              {/* Section heading */}

              <div
                className="
                  mb-5
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-neutral-600
                  "
                >
                  {selectedCategory === "all"
                    ? "01 / ALL"
                    : `01 / ${selectedCategory.toUpperCase()}`}
                </span>

                <span
                  className="
                    h-px
                    flex-1
                    bg-neutral-900
                  "
                />
              </div>

              {/* Skills grid */}

              <m.div
                key={selectedCategory}
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="
                  grid
                  grid-cols-1
                  gap-3

                  sm:grid-cols-2

                  md:grid-cols-3

                  lg:grid-cols-4
                "
              >
                {filteredSkills.map(
                  (skill, index) => (
                    <SkillCard
                      key={skill.id}
                      skill={skill}
                      index={index}
                      isArabic={isArabic}
                    />
                  )
                )}
              </m.div>
            </div>

            {/* =================================================
                Bottom status
            ================================================= */}

            <m.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                mt-8
                flex
                flex-col
                gap-3
                border-t
                border-neutral-800
                pt-5

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    animate-pulse
                    rounded-full
                    bg-emerald-500
                  "
                />

                <span
                  className="
                    text-xs
                    text-neutral-500
                  "
                >
                  {tSkills?.availableForWork ||
                    "Continuously learning & improving"}
                </span>
              </div>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-neutral-700
                "
              >
                Full-Stack Development
              </span>
            </m.div>
          </div>
        </section>
      </LazyMotion>
    </MotionConfig>
  );
};

export default memo(Skills);
