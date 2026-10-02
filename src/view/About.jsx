
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
  Database,
  Globe,
  Code2,
  Palette,
  MapPin,
  Zap,
  Target,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-scroll";
import { LongContext } from "./../components/ContextProvider";

/* =========================================================
   Animation presets
   ========================================================= */

const revealUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

/* =========================================================
   About
   ========================================================= */

const About = () => {
  const { language, t } = useContext(LongContext);

  const isArabic = language === "ar";

  /* ---------------------------------------------------------
     Skills
     --------------------------------------------------------- */

  const skills = useMemo(
    () => [
      {
        name: isArabic
          ? t.frontendDevelopment || "تطوير الواجهة الأمامية"
          : "Frontend Development",
        icon: Code2,
        level: 90,
      },
      {
        name: isArabic
          ? t.uiuxDesignSkill || "تصميم واجهة المستخدم"
          : "UI/UX Design",
        icon: Palette,
        level: 85,
      },
      {
        name: isArabic
          ? t.backendDevelopment || "تطوير الواجهة الخلفية"
          : "Backend Development",
        icon: Database,
        level: 80,
      },
      {
        name: isArabic
          ? t.webTechnologies || "تقنيات الويب"
          : "Web Technologies",
        icon: Globe,
        level: 88,
      },
    ],
    [isArabic, t]
  );

  /* ---------------------------------------------------------
     Personal values
     --------------------------------------------------------- */

  const personalValues = useMemo(
    () => [
      {
        icon: Lightbulb,
        title: isArabic
          ? t.innovationTitle || "الابتكار"
          : "Innovation",
        description: isArabic
          ? t.innovationDesc || "استكشاف مستمر لأحدث التقنيات"
          : "Always exploring new technologies",
      },
      {
        icon: Target,
        title: isArabic
          ? t.precisionTitle || "الدقة"
          : "Precision",
        description: isArabic
          ? t.precisionDesc || "اهتمام بالتفاصيل في كل مشروع"
          : "Attention to detail in every project",
      },
      {
        icon: Zap,
        title: isArabic
          ? t.performanceTitle || "الأداء"
          : "Performance",
        description: isArabic
          ? t.performanceDesc || "حلول محسّنة وسريعة"
          : "Optimized and fast solutions",
      },
    ],
    [isArabic, t]
  );

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <section
          id="about"
          name="about"
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

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div
              className="
                grid
                grid-cols-1
                gap-14

                lg:grid-cols-12
                lg:items-center
                lg:gap-16
              "
            >
              {/* =================================================
                  LEFT / MAIN CONTENT
                  ================================================= */}

              <m.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                className="lg:col-span-7"
              >
                {/* Section label */}

                <m.div
                  variants={revealLeft}
                  className="
                    mb-7
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
                    {t.aboutMe || "About Me"}
                  </span>

                  <span className="h-px w-10 bg-neutral-800" />
                </m.div>

                {/* Heading */}

                <m.h2
                  variants={revealUp}
                  className={`
                    max-w-3xl
                    font-black
                    leading-[0.9]
                    tracking-[-0.06em]
                    text-white
                    text-[clamp(3.5rem,11vw,7.5rem)]

                    ${
                      isArabic
                        ? "font-arabic leading-[1.1] tracking-normal"
                        : ""
                    }
                  `}
                >
                  <span className="block">
                    {t.about || "About"}
                  </span>

                  <span
                    className="
                      block
                      text-transparent
                    "
                    style={{
                      WebkitTextStroke: "1.5px #e4312b",
                    }}
                  >
                    {t.me || "Me"}
                  </span>
                </m.h2>

                {/* Location */}

                <m.div
                  variants={revealUp}
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-neutral-500
                  "
                >
                  <MapPin
                    className="
                      h-4
                      w-4
                      text-[#e4312b]
                    "
                  />

                  <span>
                    {t.location || "Fes, Morocco"}
                  </span>
                </m.div>

                {/* Introduction */}

                <m.p
                  variants={revealUp}
                  className={`
                    mt-6
                    max-w-2xl
                    text-base
                    leading-7
                    text-neutral-300

                    sm:text-lg
                    sm:leading-8

                    ${isArabic ? "font-arabic" : ""}
                  `}
                >
                  {t.introduction ||
                    "Hi! I'm Mohamed Tolba, a dedicated full-stack developer from Fes. I'm passionate about building things for the web, whether it's crafting dynamic websites, interactive applications, or innovative digital solutions."}
                </m.p>

                {/* Journey */}

                <m.p
                  variants={revealUp}
                  className={`
                    mt-5
                    max-w-2xl
                    text-sm
                    leading-7
                    text-neutral-500

                    sm:text-base

                    ${isArabic ? "font-arabic" : ""}
                  `}
                >
                  {t.journey ||
                    "I am a graduate of the Office of Vocational Training and Employment (OFPPT), where I obtained a specialized technician diploma in the field of digital development. I have worked on academic and personal projects using a variety of technologies."}
                </m.p>

                {/* Values */}

                <m.div
                  variants={stagger}
                  className="
                    mt-10
                    grid
                    grid-cols-1
                    gap-3

                    sm:grid-cols-3
                  "
                >
                  {personalValues.map((value) => {
                    const Icon = value.icon;

                    return (
                      <m.div
                        key={value.title}
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

                          hover:border-[#e4312b]/40
                          hover:bg-neutral-900/60
                        "
                      >
                        {/* Accent */}

                        <span
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

                        <div
                          className="
                            flex
                            items-start
                            gap-3
                          "
                        >
                          <div
                            className="
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              border
                              border-neutral-800
                              bg-neutral-950
                              text-[#e4312b]
                              transition-colors
                              group-hover:border-[#e4312b]/40
                            "
                          >
                            <Icon
                              size={17}
                              strokeWidth={1.8}
                            />
                          </div>

                          <div className="min-w-0">
                            <h3
                              className="
                                text-sm
                                font-semibold
                                text-white
                              "
                            >
                              {value.title}
                            </h3>

                            <p
                              className="
                                mt-1
                                text-xs
                                leading-5
                                text-neutral-500
                              "
                            >
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </m.div>
                    );
                  })}
                </m.div>

                {/* CTA */}

                <m.div
                  variants={revealUp}
                  className="mt-9"
                >
                  <Link
                    to="contact"
                    smooth
                    duration={500}
                    className="
                      group
                      inline-flex
                      cursor-pointer
                      items-center
                      gap-3
                      rounded-full
                      bg-white
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-neutral-950
                      transition-colors
                      hover:bg-neutral-200

                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-white
                    "
                  >
                    <span>
                      {t.getInTouch || "Get in Touch"}
                    </span>

                    <ArrowRight
                      className={`
                        h-4
                        w-4
                        transition-transform
                        duration-200

                        ${
                          isArabic
                            ? "rotate-180 group-hover:-translate-x-1"
                            : "group-hover:translate-x-1"
                        }
                      `}
                    />
                  </Link>
                </m.div>
              </m.div>

              {/* =================================================
                  RIGHT / EXPERTISE
                  ================================================= */}

              <m.aside
                variants={revealRight}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                className="lg:col-span-5"
              >
                <div
                  className="
                    relative
                    rounded-2xl
                    border
                    border-neutral-800
                    bg-neutral-900/30
                    p-5

                    sm:p-7

                    lg:p-8
                  "
                >
                  {/* Header */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[#e4312b]
                        "
                      >
                        01
                      </p>

                      <h3
                        className="
                          mt-2
                          text-xl
                          font-bold
                          tracking-tight
                          text-white

                          sm:text-2xl
                        "
                      >
                        {t.expertise || "Expertise"}
                      </h3>
                    </div>

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-neutral-800
                        text-neutral-500
                      "
                    >
                      <Code2 size={17} />
                    </div>
                  </div>

                  {/* Divider */}

                  <div
                    className="
                      my-7
                      h-px
                      bg-neutral-800
                    "
                  />

                  {/* Skills */}

                  <div className="space-y-6">
                    {skills.map((skill, index) => {
                      const Icon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className="group"
                        >
                          {/* Skill header */}

                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-4
                            "
                          >
                            <div
                              className="
                                flex
                                min-w-0
                                items-center
                                gap-3
                              "
                            >
                              <div
                                className="
                                  flex
                                  h-8
                                  w-8
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-lg
                                  border
                                  border-neutral-800
                                  bg-neutral-950
                                  text-neutral-500
                                  transition-colors
                                  group-hover:border-[#e4312b]/40
                                  group-hover:text-[#e4312b]
                                "
                              >
                                <Icon
                                  size={15}
                                  strokeWidth={1.8}
                                />
                              </div>

                              <span
                                className="
                                  truncate
                                  text-sm
                                  font-medium
                                  text-neutral-200
                                "
                              >
                                {skill.name}
                              </span>
                            </div>

                            <span
                              className="
                                shrink-0
                                text-xs
                                tabular-nums
                                text-neutral-600
                              "
                            >
                              {skill.level}%
                            </span>
                          </div>

                          {/* Progress */}

                          <div
                            className="
                              mt-3
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
                                scaleX:
                                  skill.level / 100,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                duration: 0.7,
                                delay: index * 0.06,
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
                      );
                    })}
                  </div>

                  {/* Bottom info */}

                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      gap-3
                      border-t
                      border-neutral-800
                      pt-5
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
                      {t.availableForWork ||
                        "Available for work"}
                    </span>
                  </div>
                </div>
              </m.aside>
            </div>
          </div>
        </section>
      </LazyMotion>
    </MotionConfig>
  );
};

export default memo(About);