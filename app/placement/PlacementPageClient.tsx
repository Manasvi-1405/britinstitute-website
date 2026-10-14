"use client";

import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  BadgeCheck,
  Quote,
} from "lucide-react";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileSearch,
  GraduationCap,
  Handshake,
  MessageCircle,
  SearchCheck,
  UserRoundCheck,
} from "lucide-react";
import CourseLeadForm from "@/app/courses/[slug]/CourseLeadForm";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

type SuccessStory = {
  name: string;
  role: string;
  location: string;
  image: string;
  before: string;
  after: string;
  testimonial: string;
  dark?: boolean;
};

const successStories: SuccessStory[] = [
  {
    name: "Liam Wilson",
    role: "Junior Data Analyst",
    location: "Liverpool, UK",
    image: "/liam.webp",
    before: "Customer Service Advisor",
    after: "Junior Data Analyst",
    testimonial:
      "I was starting almost from scratch, so getting comfortable with the tools took some time. But once I started building projects, everything began to make much more sense.",
  },

  {
    name: "Omar Malik",
    role: "Data & AI Professional",
    location: "London, UK",
    image: "/malik.webp",
    before: "Mechanical Engineer",
    after: "Data & AI Professional",
    testimonial:
      "I already had some technical experience from engineering and had worked with Python, but I'd been wanting to expand into analytics and AI. The course really helped me connect what I already knew with new skills.",
  },

  {
    name: "Daniel Thompson",
    role: "Data Analyst",
    location: "Glasgow, UK",
    image: "/daniel.webp",
    before: "Retail Manager",
    after: "Data Analyst",
    testimonial:
      "I started this journey because I wanted something completely different from retail. The projects gave me a chance to work with real datasets and understand what a career in analytics could actually look like.",
  },

  {
    name: "Priya Nair",
    role: "People Data Analyst",
    location: "Edinburgh, UK",
    image: "/priya.webp",
    before: "HR Specialist",
    after: "People Data Analyst",
    testimonial:
      "I didn't want to leave HR completely. I'd been wanting to bring data into what I already knew. Learning analytics really helped me develop the technical skills I was missing and showed me how data could support better decisions in the people side of a business.",
    dark: true,
  },

  {
    name: "Michael Thompson",
    role: "Data Analyst",
    location: "Edinburgh, UK",
    image: "/michele.webp",
    before: "HR Specialist",
    after: "People Data Analyst",
    testimonial:
      "I didn't want to leave HR completely. I'd been wanting to bring data into what I already knew. Learning analytics really helped me develop the technical skills I was missing and showed me how data could support better decisions in the people side of a business.",
    dark: true,
  },

  {
    name: "Emily Carter",
    role: "BI Analyst ·",
    location: " Manchester, UK",
    image: "/emily.webp",
    before: "HR Specialist",
    after: "People Data Analyst",
    testimonial:
      "I didn't want to leave HR completely. I'd been wanting to bring data into what I already knew. Learning analytics really helped me develop the technical skills I was missing and showed me how data could support better decisions in the people side of a business.",
    dark: true,
  },

  {
    name: "Sarah Mitchell",
    role: "People Data Analyst",
    location: "Edinburgh, UK",
    image: "/sarah.webp",
    before: "HR Specialist",
    after: "People Data Analyst",
    testimonial:
      "I didn't want to leave HR completely. I'd been wanting to bring data into what I already knew. Learning analytics really helped me develop the technical skills I was missing and showed me how data could support better decisions in the people side of a business.",
    dark: true,
  },

  {
    name: "Liam Fraser",
    role: "People Data AnalystF",
    location: "Edinburgh, UK",
    image: "/liam.webp",
    before: "HR Specialist",
    after: "People Data Analyst",
    testimonial:
      "I didn't want to leave HR completely. I'd been wanting to bring data into what I already knew. Learning analytics really helped me develop the technical skills I was missing and showed me how data could support better decisions in the people side of a business.",
    dark: true,
  },

  {
    name: "Adam Khan",
    role: "People Data Analyst",
    location: "Edinburgh, UK",
    image: "/adam.webp",
    before: "HR Specialist",
    after: "People Data Analyst",
    testimonial:
      "I didn't want to leave HR completely. I'd been wanting to bring data into what I already knew. Learning analytics really helped me develop the technical skills I was missing and showed me how data could support better decisions in the people side of a business.",
    dark: true,
  },

  {
    name: "Rachel Chen",
    role: "People Data Analyst",
    location: "Business Intelligence Analyst · Nottingham, UK",
    image: "/rachel.webp",
    before: "HR Specialist",
    after: "People Data Analyst",
    testimonial:
      "I didn't want to leave HR completely. I'd been wanting to bring data into what I already knew. Learning analytics really helped me develop the technical skills I was missing and showed me how data could support better decisions in the people side of a business.",
    dark: true,
  },

  {
    name: "Tom Okafor",
    role: "People Data Analyst",
    location: "Edinburgh, UK",
    image: "/tom.webp",
    before: "HR Specialist",
    after: "People Data Analyst",
    testimonial:
      "I didn't want to leave HR completely. I'd been wanting to bring data into what I already knew. Learning analytics really helped me develop the technical skills I was missing and showed me how data could support better decisions in the people side of a business.",
    dark: true,
  },

  {
    name: "Priya Kaur",
    role: "People Data Analyst",
    location: "Edinburgh, UK",
    image: "/priya.webp",
    before: "HR Specialist",
    after: "People Data Analyst",
    testimonial:
      "I didn't want to leave HR completely. I'd been wanting to bring data into what I already knew. Learning analytics really helped me develop the technical skills I was missing and showed me how data could support better decisions in the people side of a business.",
    dark: true,
  },
];

/* ---------- PLACED LEARNER REPORTS DATA ---------- */

type PlacedLearner = {
  name: string;
  role: string;
  location: string;
  image?: string;
  before: string;
  afterRole: string;
  company: string;
  companyColor: string;
  jobRole: string;
  testimonial: string;
};

const placedLearners: PlacedLearner[] = [
  {
    name: "Alex",
    role: "Data Analyst",
    location: "Uk",
    image: "",
    before: "Graduated with Biotechnology degree,no data experience",
    afterRole: "Data Analyst  ",
    company: "RBL Digital",
    companyColor: "#a100ff",
    jobRole: "Data Analyst",
    testimonial:
      "The program gave me practical skills and confidence. Within 3 months of completion, I got placed at Accenture.",
  },
  {
    name: "Shantanu",
    role: "Data Analyst",
    location: "Manchester, UK",
    image: "",
    before: "Healthcare",
    afterRole: "Data Analyst ",
    company: "Oeson Learning",
    companyColor: "#5514b4",
    jobRole: "Data Analyst",
    testimonial:
      "The structured learning and real-world projects helped me switch careers. I'm now working with one of the leading telecom companies in the UK.",
  },
  {
    name: "Sarah Johnson",
    role: "Data Analyst",
    location: "London, UK",
    image: "",
    before: "Sales",
    afterRole: "Data Analyst in Ocado Technologies",
    company: "Ocado Technologies",
    companyColor: "#db0011",
    jobRole: "Data Analyst",
    testimonial:
      "The hands-on projects and placement support were outstanding. I'm now part of a global team at HSBC.",
  },
  {
    name: "Patrick Henery",
    role: "Data Analyst",
    location: "Birmingham, UK",
    image: "/aarav.webp",
    before: "IT Support (2 years experience)",
    afterRole: "Data Analyst in Andela",
    company: "Andela",
    companyColor: "#26890d",
    jobRole: "Data Analyst",
    testimonial:
      "The Data Analytics & AI program helped me build in-demand skills. I got placed at Deloitte within 3 months.",
  },
  {
    name: "Omowunmi",
    role: "Data Analyst",
    location: "Leeds, UK",
    image: "",
    before: "Education",
    afterRole: "Data Analyst in AMDARI London",
    company: "Amdari London",
    companyColor: "#e0301e",
    jobRole: "Data Analyst",
    testimonial:
      "This program gave me the right skills, mentorship and placement support. Now I'm working at PwC and building my career in data analytics.",
  },
    {
    name: "Omowunmi",
    role: "Data Analyst",
    location: "Leeds, UK",
    image: "",
    before: "Education",
    afterRole: "Data Analyst",
    company: "Amdari London",
    companyColor: "#e0301e",
    jobRole: "Data Analyst",
    testimonial:
      "This program gave me the right skills, mentorship and placement support. Now I'm working at PwC and building my career in data analytics.",
  },
    {
    name: "",
    role: "Data Analyst",
    location: "Leeds, UK",
    image: "",
    before: "Finance",
    afterRole: "Data Analyst",
    company: "Expertefy",
    companyColor: "#e0301e",
    jobRole: "Data Analyst",
    testimonial:
      "This program gave me the right skills, mentorship and placement support. Now I'm working at PwC and building my career in data analytics.",
  },
    {
    name: "Omowunmi",
    role: "Data Analyst",
    location: "Leeds, UK",
    image: "",
    before: "Finance",
    afterRole: "Data Analyst ",
    company: "Fuse Energy",
    companyColor: "#e0301e",
    jobRole: "Data Analyst",
    testimonial:
      "This program gave me the right skills, mentorship and placement support. Now I'm working at PwC and building my career in data analytics.",
  },
    {
    name: "",
    role: "Sales Analyst",
    location: "Leeds, UK",
    image: "",
    before: "Sales",
    afterRole: "Sales Analyst",
    company: "Wise",
    companyColor: "#e0301e",
    jobRole: "Data Analyst",
    testimonial:
      "This program gave me the right skills, mentorship and placement support. Now I'm working at PwC and building my career in data analytics.",
  },
    {
    name: "",
    role: "Sales Analyst",
    location: "Leeds, UK",
    image: "",
    before: "Sales",
    afterRole: "Sales Analyst ",
    company: "Corpay",
    companyColor: "#e0301e",
    jobRole: "Sales Analyst",
    testimonial:
      "This program gave me the right skills, mentorship and placement support. Now I'm working at PwC and building my career in data analytics.",
  },
    {
    name: "",
    role: "Growth Analyst",
    location: "Leeds, UK",
    image: "",
    before: "Associate",
    afterRole: "Growth Analyst ",
    company: "Goodlord",
    companyColor: "#e0301e",
    jobRole: "Growth Analyst",
    testimonial:
      "This program gave me the right skills, mentorship and placement support. Now I'm working at PwC and building my career in data analytics.",
  },
];

const journey = [
  {
    title: "Training",
    text: "Develop the technical and business skills required for your target role through live, guided learning.",
    icon: GraduationCap,
    image:""
  },
  {
    title: "Portfolio Projects",
    text: "Build practical work you can show, explain and defend in an interview rather than relying on a certificate alone.",
    icon: FileSearch,
  },
  {
    title: "CV & LinkedIn",
    text: "Position your previous experience, new skills and project evidence for relevant UK data and AI roles.",
    icon: UserRoundCheck,
  },
  {
    title: "Interview Preparation",
    text: "Practise project walkthroughs, technical questions and behavioural answers with structured feedback.",
    icon: MessageCircle,
  },
  {
    title: "Job Applications",
    text: "Build a focused job-search plan and track applications that match your skills, experience and target role.",
    icon: SearchCheck,
  },
  {
    title: "Interview Opportunities",
    text: "Prepare for relevant opportunities identified through your search and any introductions available through the programme.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Placement Support",
    text: "Continue receiving agreed career and placement support while you work through the programme process and eligibility terms.",
    icon: Handshake,
  },
];

const supportIncludes = [
  "UK-focused CV optimisation",
  "LinkedIn profile optimisation",
  "Portfolio and project-story review",
  "Technical interview practice",
  "Behavioural interview practice",
  "Mock interview feedback",
  "Job-search and application strategy",
  "Application tracking support",
  "Continued placement guidance under programme terms",
];

export default function PlacementPageClient() {
  const [journeyIndex, setJourneyIndex] = useState(0);

  const nextJourney = () => {
    setJourneyIndex((prev) => (prev + 1) % journey.length);
  };

  const previousJourney = () => {
    setJourneyIndex(
      (prev) => (prev - 1 + journey.length) % journey.length
    );
  };

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#241a1f]">

      {/* HERO */}

      <section className="relative overflow-hidden px-5 pb-20 pt-32 text-white md:px-8 md:pb-24">

        {/* Background Image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/placement hero (1).jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/40"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="max-w-4xl">

            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f5c242]">
              Get Skilled, Get Hired
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Data Analyst Placement Support in the UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85 md:text-xl">
              Move from training and portfolio projects into a structured UK
              job search with CV, LinkedIn, interview, application and
              continued placement support.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#consultation"
                className="btn-gold lg"
              >
                Book Free Career Consultation
              </Link>

              <Link
                href="/courses/data-analytics"
                className="btn-outline btn-outline-white"
              >
                Explore Data Analyst Programme
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* JOURNEY */}

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c45118]">
              The complete career journey
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#24101f] md:text-5xl">
              From Training to Placement Support
            </h2>

            <p className="mt-5 text-base leading-8 text-[#6f665c]">
              Placement support works best when it follows evidence of
              capability. The journey below connects technical learning to the
              practical steps required to compete for suitable UK roles.
            </p>
          </div>

          {/* Slider */}
          <div className="relative mt-14 px-2 md:px-6">

            {/* Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

              {[0, 1].map((offset) => {
                const actualIndex =
                  (journeyIndex + offset) % journey.length;

                const step = journey[actualIndex];
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="grid min-h-[420px] overflow-hidden rounded-[30px] bg-white shadow-[0_12px_40px_rgba(36,26,31,0.08)] md:grid-cols-[42%_58%]"
                  >

                    {/* Left Visual */}
                    <div
                      className={`relative flex min-h-[300px] items-center justify-center overflow-hidden ${
                        actualIndex % 2 === 0
                          ? "bg-[#f9e3ca]"
                          : "bg-[#e7edf8]"
                      }`}
                    >

                      <div
                        className={`absolute right-5 top-4 font-serif text-[110px] leading-none ${
                          actualIndex % 2 === 0
                            ? "text-[#efb46c]"
                            : "text-[#b9cae9]"
                        }`}
                      >
                        “
                      </div>

                      <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-white/70 shadow-sm">
                        <Icon
                          size={58}
                          strokeWidth={1.5}
                          className={
                            actualIndex % 2 === 0
                              ? "text-[#c45118]"
                              : "text-[#526f9e]"
                          }
                        />
                      </div>

                    </div>

                    {/* Content */}
                    <div className="relative flex flex-col justify-center px-7 py-10 md:px-10">

                      <span className="absolute right-8 top-7 text-sm font-black text-[#c45118]">
                        {String(actualIndex + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm font-medium text-[#6f665c]">
                        Career Journey
                      </p>

                      <h3 className="mt-5 max-w-md font-serif text-3xl leading-tight text-[#37322f] md:text-[34px]">
                        {step.title}
                      </h3>

                      <p className="mt-6 max-w-md text-base leading-8 text-[#5f5954]">
                        {step.text}
                      </p>

                    </div>
                  </article>
                );
              })}

            </div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={previousJourney}
              aria-label="Previous journey step"
              className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#333333] text-white shadow-lg transition hover:bg-[#24101f] md:h-14 md:w-14"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextJourney}
              aria-label="Next journey step"
              className="absolute right-0 top-1/2 z-20 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#333333] text-white shadow-lg transition hover:bg-[#24101f] md:h-14 md:w-14"
            >
              <ChevronRight size={26} />
            </button>

          </div>

          {/* Navigation Dots */}
          <div className="mt-10 flex justify-center gap-3">
            {journey.map((step, index) => (
              <button
                key={`journey-dot-${step.title}`}
                type="button"
                onClick={() => setJourneyIndex(index)}
                aria-label={`Go to ${step.title}`}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === journeyIndex
                    ? "w-7 bg-[#333333]"
                    : "w-3 bg-[#cfcfcf]"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SUPPORT */}

      <section className="bg-[#746d5c] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">

          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f5c242]">
              What support includes
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Career Preparation That Continues Beyond the Classroom
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              The focus is on improving the quality of your evidence,
              positioning and interview performance while helping you run a
              more disciplined job search.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {supportIncludes.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-white/14 bg-[#24101f] p-4 text-sm font-bold leading-6"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f5c242]" />
                {item}
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* EXPECTATIONS */}

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">

          <article className="rounded-2xl border border-[#ded6c8] bg-white p-8">

            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c45118]">
              Clear expectations
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              What Placement Support Means
            </h2>

            <p className="mt-4 text-base leading-8 text-[#6f665c]">
              Brit Institute supports eligible learners with preparation,
              job-search guidance and the placement process described in the
              applicable programme agreement. Support does not remove the
              learner&apos;s responsibility to attend, complete projects,
              prepare and participate actively in applications and interviews.
            </p>

          </article>

          <article className="rounded-2xl bg-[#24101f] p-8 text-white">

            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f5c242]">
              Terms-qualified guarantee
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Eligibility and Programme Terms Apply
            </h2>

            <p className="mt-4 text-base leading-8 text-white/72">
              A 100% Placement Guarantee is available to eligible learners in
              selected programmes, subject to the signed programme agreement,
              attendance, project completion and other eligibility
              requirements. It is not an unconditional promise of a UK job.
            </p>

            <Link
              href="/terms"
              className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#f5c242]"
            >
              Read the programme terms
              <ArrowRight size={16} />
            </Link>

          </article>

        </div>
      </section>

      {/* PLACED LEARNER REPORTS */}

      <PlacedLearnerReports />

      {/* SUCCESS STORIES */}

      <SuccessStories />

      {/* CONSULTATION */}

      <section
        id="consultation"
        className="bg-[#d8e8ff] px-5 py-20 md:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>

            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#4d617f]">
              Plan your next step
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Discuss Your Data Analyst Career Plan
            </h2>

            <p className="mt-5 text-base leading-8 text-[#4d617f]">
              Speak with an advisor about your current experience, target role,
              programme fit and the placement-support terms that would apply to
              you.
            </p>

            <div className="mt-7 flex flex-wrap gap-4 text-sm font-black">

              <Link
                href="/career-change-data-analyst-uk"
                className="text-[#c45118]"
              >
                Career-change guide
              </Link>

              <Link
                href="/power-bi-course-uk"
                className="text-[#c45118]"
              >
                Power BI training
              </Link>

              <Link href="/pricing" className="text-[#c45118]">
                Course fees
              </Link>

              <Link href="/reviews" className="text-[#c45118]">
                Success stories
              </Link>

            </div>

          </div>

          <CourseLeadForm courseTitle="Data Analyst Placement Support Consultation" />

        </div>
      </section>

      <Footer />

    </main>
  );
}

/* =========================================================
   PLACED LEARNER REPORTS COMPONENT
   ========================================================= */

function PlacedLearnerReports() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const cardStep = () => {
    const el = trackRef.current;
    if (!el) return 320;
    const first = el.querySelector("article") as HTMLElement | null;
    return (first?.offsetWidth ?? 300) + 24;
  };

  const scrollByCard = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * cardStep(), behavior: "smooth" });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / cardStep()));
  };

  const goTo = (i: number) => {
    trackRef.current?.scrollTo({ left: i * cardStep(), behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#1b0b18] via-[#2d1230] to-[#3a1a2e] px-5 py-20 md:px-8 lg:px-10">
      {/* Glow decorations */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#c45118]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#f5c242]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Our <span className="text-[#f5c242]">Placed Learner</span> Reports
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Real People. Real Skills. Real Careers. See how our Data Analytics
            program has transformed lives.
          </p>

          <span className="absolute -right-4 -top-6 hidden -rotate-6 text-sm italic text-[#f5c242] lg:block">
            From Learning
            <br />
            to Global Careers
          </span>
        </div>

        {/* Slider */}
        <div className="relative mt-14">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 py-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {placedLearners.map((l) => (
              <article
                key={l.name}
                className="group relative z-0 flex w-[290px] shrink-0 snap-start flex-col rounded-3xl bg-[#fffaf3] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:z-20 hover:scale-[1.12] hover:shadow-[0_30px_70px_rgba(245,194,66,0.25)] md:w-[310px]"
              >
                {/* Assured badge */}
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white">
                  <BadgeCheck size={13} />
                  ASSURED
                </span>

                {/* Profile */}
                <div className="flex items-center gap-3 pt-6">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#f5c242]/70 bg-[#f1dfcf]">
                    {l.image ? (
                      <Image
                        src={l.image}
                        alt={l.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center text-lg font-bold text-[#c45118]">
                        {l.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-extrabold text-[#24101f]">
                      {l.name}
                    </h3>
                    <p className="text-sm text-[#6f665c]">{l.role}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-[#6f665c]">
                      <MapPin size={12} className="text-[#c45118]" />
                      {l.location}
                    </p>
                  </div>
                </div>

                <div className="my-4 h-px bg-[#ead8c8]" />

                {/* Before / After */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#f0e7dc] p-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#8a7766]">
                      Before
                    </p>
                    <p className="mt-1.5 text-[13px] font-semibold leading-5 text-[#3b2c25]">
                      {l.before}
                    </p>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-[#fde6c8] to-[#f9d2a8] p-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#a94f27]">
                      After
                    </p>
                    <p className="mt-1.5 text-[13px] font-extrabold leading-5 text-[#8a3b14]">
                      {l.afterRole}
                      <br />
                      <span className="font-semibold">at {l.company.replace(".", "")}</span>
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-4 flex flex-1 gap-2">
                  <Quote size={22} className="mt-0.5 shrink-0 fill-[#c45118] text-[#c45118]" />
                  <p className="text-[13.5px] italic leading-6 text-[#4a3c34]">
                    {l.testimonial}
                  </p>
                </div>

                {/* Hired by */}
                <div className="mt-5 flex items-center gap-3 border-t border-[#ead8c8] pt-4 text-xs text-[#6f665c]">
                  <span>Hired by</span>
                  <span
                    className="text-lg font-black tracking-tight"
                    style={{ color: l.companyColor }}
                  >
                    {l.company}
                  </span>
                  <span className="ml-auto border-l border-[#ead8c8] pl-3 leading-4">
                    {l.jobRole}
                    <br />
                    UK
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5c242] text-[#24101f] shadow-lg transition hover:scale-110 md:-left-4"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next"
            className="absolute right-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5c242] text-[#24101f] shadow-lg transition hover:scale-110 md:-right-4"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {placedLearners.map((l, i) => (
            <button
              key={l.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${l.name}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active ? "w-7 bg-[#f5c242]" : "w-2.5 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Footer strip */}
        <p className="mt-6 text-center text-sm text-white/70">
          15+ Learners <span className="mx-2 text-white/30">|</span> 100%
          Placement Support <span className="mx-2 text-white/30">|</span> Global
          Opportunities
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   SUCCESS STORIES COMPONENT
   ========================================================= */

function SuccessStories() {
  return (
    <section className="w-full bg-[#F9FAFB] px-5 py-20 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1220px]">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
            Success Stories
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Real career transformations
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 md:text-lg">
            See how learners from different professional backgrounds
            transformed their careers with practical data and AI skills.
          </p>

        </div>

        {/* Cards */}
       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

  {successStories.map((story, index) => (
    <article
      key={`${story.name}-${index}`}
      className={[
        "group relative flex min-h-[500px] flex-col overflow-hidden rounded-[30px] border p-6 transition-all duration-300",
        story.dark
          ? "border-[#4a2d23] bg-[#2a1b17] text-white shadow-[0_20px_50px_rgba(86,45,25,0.16)]"
          : "border-[#ead8c8] bg-[#fffaf5] text-[#34251f] shadow-[0_15px_45px_rgba(104,62,35,0.08)]",
        "hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(104,62,35,0.16)]",
      ].join(" ")}
    >

      {/* Warm decorative shape */}
      <div
        className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl ${
          story.dark ? "bg-[#c45b32]/20" : "bg-[#e8a56d]/25"
        }`}
      />

      {/* Profile Image */}
      <div className="relative z-10 flex items-center gap-4">

        <div
          className={`relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full border-4 ${
            story.dark
              ? "border-[#d98a5f]/40"
              : "border-[#e9c6aa]"
          } bg-[#f1dfcf] shadow-md`}
        >
          <Image
            src={story.image}
            alt={story.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="76px"
          />
        </div>

        <div className="min-w-0">

          <h3
            className={`text-base font-bold ${
              story.dark ? "text-white" : "text-[#34251f]"
            }`}
          >
            {story.name}
          </h3>

          <p
            className={`mt-1 text-xs font-medium ${
              story.dark ? "text-[#d8b8a7]" : "text-[#876c5b]"
            }`}
          >
            {story.role}
          </p>

          <p
            className={`mt-0.5 text-xs ${
              story.dark ? "text-[#a98a7a]" : "text-[#a18470]"
            }`}
          >
            {story.location}
          </p>

        </div>

      </div>

      {/* Divider */}
      <div
        className={`relative z-10 my-6 h-px ${
          story.dark ? "bg-white/10" : "bg-[#ead8c8]"
        }`}
      />

      {/* Before / After */}
      <div className="relative z-10 grid grid-cols-2 gap-4">

        {/* Before */}
        <div
          className={`rounded-2xl p-4 ${
            story.dark
              ? "bg-[#3a2721]"
              : "bg-[#f7eadf]"
          }`}
        >

          <p
            className={`mb-2 text-[10px] font-black uppercase tracking-[0.16em] ${
              story.dark ? "text-[#c9a493]" : "text-[#9b725c]"
            }`}
          >
            Before
          </p>

          <p
            className={`text-sm font-bold leading-5 ${
              story.dark ? "text-white" : "text-[#49372e]"
            }`}
          >
            {story.before}
          </p>

        </div>

        {/* After */}
        <div
          className={`rounded-2xl p-4 ${
            story.dark
              ? "bg-[#563021]"
              : "bg-[#f2d7c2]"
          }`}
        >

          <p
            className={`mb-2 text-[10px] font-black uppercase tracking-[0.16em] ${
              story.dark ? "text-[#e6b69c]" : "text-[#a94f27]"
            }`}
          >
            After
          </p>

          <p
            className={`text-sm font-bold leading-5 ${
              story.dark ? "text-[#ffd8c1]" : "text-[#9a421f]"
            }`}
          >
            {story.after}
          </p>

        </div>

      </div>

      {/* Divider */}
      <div
        className={`relative z-10 my-6 h-px ${
          story.dark ? "bg-white/10" : "bg-[#ead8c8]"
        }`}
      />

      {/* Testimonial */}
      <div className="relative z-10 flex flex-1 flex-col">

        {/* Quote */}
        <div
          className={`mb-3 font-serif text-5xl leading-none ${
            story.dark ? "text-[#d47a4e]" : "text-[#d17845]"
          }`}
        >
          “
        </div>

        <p
          className={`text-[15px] leading-7 ${
            story.dark ? "text-[#ead9d0]" : "text-[#6d5a4e]"
          }`}
        >
          {story.testimonial}
        </p>

      </div>

      {/* Bottom accent */}
      <div
        className={`relative z-10 mt-6 h-1 w-14 rounded-full ${
          story.dark ? "bg-[#d47a4e]" : "bg-[#c45118]"
        }`}
      />

    </article>
  ))}

</div>
      </div>
    </section>
  );
}
