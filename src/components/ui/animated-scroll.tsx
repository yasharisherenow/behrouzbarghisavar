import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";

type PanelContent = {
  kicker: string;
  heading: string;
  description: React.ReactNode;
  meta: React.ReactNode[];
  featured?: boolean;
};

type ScrollPage = {
  label: string;
  leftBgImage: string | null;
  rightBgImage: string | null;
  leftContent: PanelContent | null;
  rightContent: PanelContent | null;
};

const pages: ScrollPage[] = [
  {
    label: "Home",
    leftBgImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85",
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      kicker: "Behrouz Barghisavar",
      heading: "Electrical and energy systems engineer focused on power projects.",
      description:
        "MEng, MSc, E.I.T. Engineer I-IV at Energie NB Power, bringing field-tested electrical engineering experience across generation, distribution, design, inspection, and utility project delivery.",
      meta: ["Electrical Engineering", "Energy Systems", "Engineer-in-Training"],
      featured: true,
    },
  },
  {
    label: "Experience",
    leftBgImage:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=85",
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      kicker: "Experience",
      heading: "From utility project delivery to hands-on power systems work.",
      description: (
        <div className="space-y-5">
          <div>
            <p className="font-medium text-white">
              Engineer I-IV · Energie NB Power
            </p>
            <p className="text-sm text-white/64">
              Dec 2024 - Present · New Brunswick, Canada · On-site
            </p>
            <p className="mt-2">
              Manages engineering projects with cross-functional teams,
              contractors, and stakeholders; supports scope, budgets, site
              quality checks, tendering, technical inquiries, and closeout
              reporting for power generation work.
            </p>
          </div>
          <div>
            <p className="font-medium text-white">
              Electrical Construction Inspector / Owner's Representative ·
              Tavanir
            </p>
            <p className="text-sm text-white/64">
              Apr 2018 - Sep 2022 · Bushehr Province, Iran · On-site
            </p>
            <p className="mt-2">
              Led site inspections, contractor coordination, HSE reporting,
              emergency project support, permit planning, regulatory evidence,
              troubleshooting, and final contractual reviews.
            </p>
          </div>
        </div>
      ),
      meta: ["Project coordination", "Utility standards", "Power generation"],
    },
  },
  {
    label: "Education",
    leftBgImage: null,
    rightBgImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/MemorialUniversity.jpg?width=1400",
    leftContent: {
      kicker: "Education",
      heading: "Graduate training in energy systems and electrical engineering.",
      description: (
        <div className="space-y-5">
          <div>
            <p className="font-medium text-white">
              Memorial University, Newfoundland and Labrador
            </p>
            <p className="text-sm text-white/64">
              Master of Science, Energy Systems Engineering · 2022 - 2024
            </p>
          </div>
          <div>
            <p className="font-medium text-white">Persian Gulf University</p>
            <p className="text-sm text-white/64">
              Master of Engineering, Electrical Engineering · 2013 - 2016
            </p>
          </div>
          <div>
            <p className="font-medium text-white">Islamic Azad University</p>
            <p className="text-sm text-white/64">
              Bachelor's degree, Electrical Engineering
            </p>
          </div>
        </div>
      ),
      meta: ["Energy systems", "Electrical engineering", "Academic leadership"],
    },
    rightContent: null,
  },
  {
    label: "Certificates",
    leftBgImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      kicker: "Certificates",
      heading: "Professional credentials across engineering, safety, and power systems.",
      description: (
        <div className="space-y-4">
          <p>
            Engineer-in-Training certifications with APEGNB and PEGNL, plus
            verified international academic qualifications through WES.
          </p>
          <p>
            Technical credentials include ETAP E114 Power System Analysis,
            overhead power line technician certification, air and ground
            distribution networks, electrical safety, and Electrician Grade 3.
          </p>
          <p>
            Safety credentials include NB Power Contractor Safety Management
            and 3M Fall Protection Authorized Person Essentials.
          </p>
        </div>
      ),
      meta: ["E.I.T.", "ETAP", "Power distribution"],
    },
  },
  {
    label: "Publications",
    leftBgImage:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85",
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      kicker: "Publications",
      heading: "Published work on renewable energy, power systems, and electric machines.",
      description: (
        <div className="space-y-4">
          <div>
            <p className="font-medium text-white">
              Designing Sustainable Energy Systems: The Case of Bell Island's
              Hybrid Renewable Power
            </p>
            <p className="text-sm text-white/64">IEEE · Nov 14, 2024</p>
          </div>
          <div>
            <p className="font-medium text-white">
              Fault Prediction on Newfoundland's Wind Turbines and Power Grids
            </p>
            <p className="text-sm text-white/64">IEEE · Nov 14, 2023</p>
          </div>
          <div>
            <p className="font-medium text-white">
              Advancements in Brushless DC Motor Control Systems for
              Sustainable Electric Vehicle Manufacturing
            </p>
            <p className="text-sm text-white/64">IEEE · Nov 14, 2023</p>
          </div>
          <div>
            <p className="font-medium text-white">
              Review of Novel Methods for Extracting Energy from Tides
            </p>
            <p className="text-sm text-white/64">Apr 19, 2016</p>
          </div>
        </div>
      ),
      meta: ["IEEE", "HRES", "Wind systems"],
    },
  },
  {
    label: "Contact",
    leftBgImage: null,
    rightBgImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
    leftContent: {
      kicker: "Contact",
      heading: "Connect with me on LinkedIn.",
      description: (
        <>
          For engineering opportunities, professional collaboration, or a
          conversation about power systems and sustainable energy, send me a
          connection request on LinkedIn.
        </>
      ),
      meta: [
        <a
          href="https://www.linkedin.com/in/behba1990/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-[#d8b46a]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
            />
          </svg>
          LinkedIn
        </a>,
      ],
    },
    rightContent: null,
  },
];

function ContentBlock({
  content,
}: {
  content: PanelContent;
}) {
  const headingClass = content.featured
    ? "text-4xl font-semibold leading-[0.96] tracking-tight text-white md:text-6xl lg:text-7xl"
    : "text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl";

  return (
    <GlassEffect
      className={`rounded-[2rem] p-1 text-white ${
        content.featured ? "max-w-3xl" : "max-w-xl"
      }`}
    >
      <div className="rounded-[1.75rem] border border-white/15 bg-black/20 px-6 py-7 text-left backdrop-blur-md md:px-8 md:py-9">
        <div className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d8b46a]">
            {content.kicker}
          </p>
        </div>

        <h2 className={headingClass}>{content.heading}</h2>

        <div className="mt-6 text-base font-light leading-8 text-white/82 md:text-lg">
          {content.description}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {content.meta.map((item, index) => (
            <span
              key={typeof item === "string" ? item : index}
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-normal text-white/86"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </GlassEffect>
  );
}

export default function ScrollAdventure() {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrolling = useRef(false);
  const currentPageRef = useRef(currentPage);
  const numOfPages = pages.length;
  const animTime = 1000;

  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  const navigateUp = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const navigateDown = () => {
    setCurrentPage((page) => Math.min(numOfPages, page + 1));
  };

  const beginNavigation = (direction: "up" | "down") => {
    if (scrolling.current) return;
    scrolling.current = true;
    direction === "down" ? navigateDown() : navigateUp();
    window.setTimeout(() => {
      scrolling.current = false;
    }, animTime);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const bounds = section.getBoundingClientRect();
      const inView = bounds.top <= 8 && bounds.bottom >= window.innerHeight - 8;
      if (!inView) return;

      if (event.key === "ArrowUp") beginNavigation("up");
      if (event.key === "ArrowDown") beginNavigation("down");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (scrolling.current) return;

      const direction = event.deltaY > 0 ? "down" : "up";

      beginNavigation(direction);
    };

    section.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      section.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      id="site"
      ref={sectionRef}
      tabIndex={0}
      className="relative h-screen overflow-hidden bg-[#05080d] outline-none"
    >
      <GlassFilter />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,180,106,0.18),transparent_35%),linear-gradient(180deg,#05080d,#0d1518)]" />

      <div className="absolute inset-0 z-10 grid grid-cols-12 divide-x divide-white/10">
        <div className="col-span-1" />
        <div className="col-span-3" />
        <div className="col-span-4" />
        <div className="col-span-3" />
        <div className="col-span-1" />
      </div>

      {pages.map((page, i) => {
        const idx = i + 1;
        const isActive = currentPage === idx;
        const upOff = "translateY(-100%)";
        const downOff = "translateY(100%)";
        const leftTrans = isActive ? "translateY(0)" : downOff;
        const rightTrans = isActive ? "translateY(0)" : upOff;

        return (
          <div key={page.label} className="absolute inset-0 z-20">
            <div
              className={`absolute left-0 top-0 h-full w-1/2 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] max-md:w-full ${
                page.leftContent ? "max-md:z-30" : "max-md:z-20"
              }`}
              style={{ transform: leftTrans }}
            >
              <div
                className="relative h-full w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: page.leftBgImage
                    ? `url(${page.leftBgImage})`
                    : undefined,
                }}
              >
                <div className="absolute inset-0 bg-black/45" />
                <div className="relative flex h-full flex-col items-center justify-center p-6 text-white md:p-10">
                  {page.leftContent && (
                    <ContentBlock content={page.leftContent} />
                  )}
                </div>
              </div>
            </div>

            <div
              className={`absolute left-1/2 top-0 h-full w-1/2 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] max-md:left-0 max-md:w-full ${
                page.rightContent ? "max-md:z-30" : "max-md:z-20"
              }`}
              style={{ transform: rightTrans }}
            >
              <div
                className="relative h-full w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: page.rightBgImage
                    ? `url(${page.rightBgImage})`
                    : undefined,
                }}
              >
                <div className="absolute inset-0 bg-black/45" />
                <div className="relative flex h-full flex-col items-center justify-center p-6 text-white md:p-10">
                  {page.rightContent && (
                    <ContentBlock content={page.rightContent} />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-40 flex max-w-[calc(100%-2rem)] -translate-x-1/2 flex-wrap items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/72 backdrop-blur-md">
        {pages.map((page, index) => (
          <span
            key={page.label}
            className={
              currentPage === index + 1 ? "text-[#d8b46a]" : "text-white/45"
            }
          >
            {page.label}
          </span>
        ))}
        <ArrowUpRight className="size-3 text-[#d8b46a]" />
      </div>
    </section>
  );
}
