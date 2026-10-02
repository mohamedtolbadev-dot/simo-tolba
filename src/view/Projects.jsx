
"use client";

import {
  memo,
  useContext,
  useMemo,
  useState,
} from "react";

import { motion } from "framer-motion";

import { LongContext } from "../components/ContextProvider";

import {
  ExternalLink,
  Github,
  Search,
  Eye,
  Star,
  ArrowUpRight,
} from "lucide-react";

/* =========================================================
   PROJECT TITLES
========================================================= */

const PROJECT_TITLES = [
  "Car Rental Platform",
  "QR Code Generator",
  "Car Website",
  "IPTV Service",
  "TexturnHub",
  "Shoe Store",
  "Riad Oasis",
  "E-commerce Platform",
  "Olive Oil Store",
  "Social Link Manager",
  "Portfolio Video Editor",
];

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = memo(function ProjectCard({
  project,
  index,
  tProjects,
}) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-neutral-800
        bg-neutral-950
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-neutral-700
      "
    >
      {/* Top Accent */}

      <span
        aria-hidden="true"
        className="
          absolute
          left-0
          top-0
          z-20
          h-[2px]
          w-0
          rounded-t-2xl
          bg-[#E4312B]
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
          z-20
          rounded-full
          border
          border-white/10
          bg-black/60
          px-2
          py-1
          text-[9px]
          font-medium
          tabular-nums
          text-white/50
          backdrop-blur-sm
        "
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Image */}

      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
          rounded-t-2xl
          bg-neutral-900
        "
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            opacity-90
            transition-transform
            duration-500
            ease-out
            group-hover:scale-[1.04]
            group-hover:opacity-100
          "
        />

        {/* Simple overlay */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-black/20
            transition-colors
            duration-300
            group-hover:bg-black/10
          "
        />

        {/* Hover Actions */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            rounded-t-2xl
            bg-black/55
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        >
          <div className="flex items-center gap-2">
            {/* Live */}

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${tProjects?.live || "Live"} - ${project.title}`}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#E4312B]
                  bg-[#E4312B]
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#c92b26]
                  hover:shadow-lg
                  hover:shadow-[#E4312B]/10
                "
              >
                <ExternalLink
                  size={14}
                  aria-hidden="true"
                />

                {tProjects?.live || "Live"}
              </a>
            )}

            {/* GitHub */}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${tProjects?.code || "Code"} - ${project.title}`}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/15
                  bg-neutral-950/90
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:border-white/30
                "
              >
                <Github
                  size={14}
                  aria-hidden="true"
                />

                {tProjects?.code || "Code"}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card Content */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-4
          border-t
          border-neutral-800
          px-4
          py-4
        "
      >
        <div className="min-w-0">
          <p
            className="
              mb-1
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-neutral-600
            "
          >
            Web Project
          </p>

          <h3
            className="
              truncate
              text-sm
              font-semibold
              text-white
            "
          >
            {project.title}
          </h3>
        </div>

        {/* Arrow */}

        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-neutral-800
            text-neutral-600
            transition-all
            duration-300
            group-hover:border-[#E4312B]
            group-hover:bg-[#E4312B]/5
            group-hover:text-[#E4312B]
          "
        >
          <ArrowUpRight
            size={15}
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  );
});

/* =========================================================
   PROJECTS SECTION
========================================================= */

const Projects = () => {
  const {
    language,
    projects = [],
    tProjects,
  } = useContext(LongContext);

  const isArabic = language === "ar";

  const [
    searchTerm,
    setSearchTerm,
  ] = useState("");

  /* =======================================================
     ENHANCED PROJECTS
  ======================================================= */

  const enhancedProjects = useMemo(() => {
    return projects.map((project, index) => ({
      ...project,

      id: index + 1,

      title:
        PROJECT_TITLES[index] ||
        project.title ||
        `Project ${index + 1}`,

      status: "completed",

      year:
        project.year ||
        "2024",
    }));
  }, [projects]);

  /* =======================================================
     SEARCH
  ======================================================= */

  const normalizedSearch =
    searchTerm.trim().toLowerCase();

  const filteredProjects = useMemo(() => {
    if (!normalizedSearch) {
      return enhancedProjects;
    }

    return enhancedProjects.filter(
      (project) =>
        project.title
          .toLowerCase()
          .includes(normalizedSearch)
    );
  }, [
    enhancedProjects,
    normalizedSearch,
  ]);

  /* =======================================================
     STATS
  ======================================================= */

  const stats = useMemo(() => {
    const completed =
      enhancedProjects.reduce(
        (count, project) =>
          count +
          (project.status === "completed"
            ? 1
            : 0),
        0
      );

    return {
      total: enhancedProjects.length,
      completed,
    };
  }, [enhancedProjects]);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      id="projects"
      name="projects"
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
      {/* ===================================================
          CLEAN BACKGROUND
      =================================================== */}

      {/* No grid / no decorative red lines */}

      {/* ===================================================
          CONTAINER
      =================================================== */}

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
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
        >
          {/* Label */}

          <div
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
                bg-[#E4312B]
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
              {tProjects?.portfolio ||
                "Portfolio"}
            </span>

            <span
              className="
                h-px
                w-10
                bg-neutral-800
              "
            />
          </div>

          {/* TITLE */}

          <h2
            className={`
              mt-7
              max-w-5xl
              font-black
              leading-[0.9]
              tracking-[-0.06em]
              text-white
              text-[clamp(3.4rem,10vw,7.5rem)]

              ${
                isArabic
                  ? "font-arabic leading-[1.1] tracking-normal"
                  : ""
              }
            `}
          >
            {!isArabic && (
              <span className="block">
                My
              </span>
            )}

            <span
              className="
                block
                text-transparent
              "
              style={{
                WebkitTextStroke:
                  "1.5px #E4312B",
              }}
            >
              {isArabic
                ? "المشاريع"
                : "Projects"}
            </span>
          </h2>

          {/* DESCRIPTION + STATS */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-6

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
              {tProjects?.description ||
                "A curated collection of projects that demonstrate my skills and creativity in building modern web applications."}
            </p>

            {/* Stats */}

            <div
              className="
                flex
                shrink-0
                items-center
                gap-6
                text-xs
              "
            >
              {/* Total */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-neutral-500
                "
              >
                <Eye
                  size={15}
                  className="text-[#E4312B]"
                  aria-hidden="true"
                />

                <span>
                  {stats.total}{" "}
                  {tProjects?.projectsCount ||
                    "Projects"}
                </span>
              </div>

              {/* Divider */}

              <span
                className="
                  h-4
                  w-px
                  bg-neutral-800
                "
              />

              {/* Completed */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-neutral-500
                "
              >
                <Star
                  size={15}
                  className="text-neutral-600"
                  aria-hidden="true"
                />

                <span>
                  {stats.completed}{" "}
                  {tProjects?.completed ||
                    "Completed"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            SEARCH
        ================================================= */}

        <div
          className="
            mt-12
            rounded-2xl
            border
            border-neutral-800
            bg-neutral-950
            p-2

            sm:mt-14
          "
        >
          <div
            className="
              flex
              flex-col
              gap-2

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* Search */}

            <div
              className="
                relative
                w-full
                max-w-md
              "
            >
              <Search
                size={15}
                className={`
                  pointer-events-none
                  absolute
                  top-1/2
                  -translate-y-1/2
                  text-neutral-600

                  ${
                    isArabic
                      ? "right-4"
                      : "left-4"
                  }
                `}
                aria-hidden="true"
              />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
                placeholder={
                  tProjects?.searchPlaceholder ||
                  "Search projects..."
                }
                aria-label={
                  tProjects?.searchPlaceholder ||
                  "Search projects"
                }
                className={`
                  w-full
                  rounded-xl
                  border
                  border-transparent
                  bg-neutral-900
                  py-3
                  text-sm
                  text-white
                  outline-none
                  transition-colors
                  placeholder:text-neutral-700
                  focus:border-[#E4312B]/60

                  ${
                    isArabic
                      ? "pr-11 pl-4 text-right font-arabic"
                      : "pl-11 pr-4"
                  }
                `}
              />
            </div>

            {/* Counter */}

            <div
              className="
                px-3
                text-xs
                tabular-nums
                text-neutral-600
              "
            >
              {filteredProjects.length}{" "}
              {tProjects?.projectsCount ||
                "projects"}
            </div>
          </div>
        </div>

        {/* =================================================
            PROJECTS
        ================================================= */}

        <div className="mt-8">
          {/* Section label */}

          <div
            className="
              mb-5
              flex
              items-center
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
              01 / SELECTED WORK
            </span>

            <span
              className="
                h-px
                flex-1
                bg-neutral-900
              "
            />
          </div>

          {/* Grid */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.045,
                },
              },
            }}
            className="
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {filteredProjects.map(
              (project, index) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 14,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,

                      transition: {
                        duration: 0.35,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    tProjects={tProjects}
                  />
                </motion.div>
              )
            )}
          </motion.div>

          {/* EMPTY STATE */}

          {filteredProjects.length ===
            0 && (
            <div
              className="
                mt-4
                rounded-2xl
                border
                border-neutral-800
                py-20
                text-center
              "
            >
              <Search
                size={30}
                className="
                  mx-auto
                  mb-4
                  text-neutral-700
                "
                aria-hidden="true"
              />

              <p
                className="
                  text-sm
                  text-neutral-500
                "
              >
                {tProjects?.noResults ||
                  "No projects found matching your search."}
              </p>
            </div>
          )}
        </div>

        {/* =================================================
            FOOTER STATUS
        ================================================= */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-3
            rounded-2xl
            border
            border-neutral-800
            px-5
            py-4

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
              {tProjects?.availableForWork ||
                "Continuously building & improving"}
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
            Web Development
          </span>
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
