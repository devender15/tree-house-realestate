"use client";

import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Building2,
  Handshake,
  Leaf,
  Search,
  TrendingUp,
  CheckCircle,
  Shield,
  Award,
  Users,
  Target,
} from "lucide-react";
import Link from "next/link";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textFadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const heroControls = useAnimation();

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const aboutControls = useAnimation();

  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const missionControls = useAnimation();

  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
  const servicesControls = useAnimation();

  const chooseUsRef = useRef(null);
  const chooseUsInView = useInView(chooseUsRef, { once: true, amount: 0.3 });
  const chooseUsControls = useAnimation();

  const growRef = useRef(null);
  const growInView = useInView(growRef, { once: true, amount: 0.3 });
  const growControls = useAnimation();

  React.useEffect(() => {
    if (heroInView) heroControls.start("visible");
  }, [heroControls, heroInView]);

  React.useEffect(() => {
    if (aboutInView) aboutControls.start("visible");
  }, [aboutControls, aboutInView]);

  React.useEffect(() => {
    if (missionInView) missionControls.start("visible");
  }, [missionControls, missionInView]);

  React.useEffect(() => {
    if (servicesInView) servicesControls.start("visible");
  }, [servicesControls, servicesInView]);

  React.useEffect(() => {
    if (chooseUsInView) chooseUsControls.start("visible");
  }, [chooseUsControls, chooseUsInView]);

  React.useEffect(() => {
    if (growInView) growControls.start("visible");
  }, [growControls, growInView]);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          className="text-center mb-20"
          initial="hidden"
          animate={heroControls}
          variants={sectionVariants}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-slate-700 rounded-2xl mb-8 shadow-lg"
            variants={sectionVariants}
          >
            <Building2 className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-orange-600 mb-6 tracking-tight"
            variants={textFadeIn}
          >
            Tree House <span className="text-slate-800">Realty</span>
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-orange-600 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={heroControls}
            variants={{
              hidden: { width: 0 },
              visible: {
                width: "6rem",
                transition: { duration: 0.8, delay: 0.3 },
              },
            }}
          />

          <motion.p
            className="text-xl text-slate-600 max-w-2xl mx-auto font-medium"
            variants={textFadeIn}
          >
            Professional real estate solutions built on trust, expertise, and
            integrity
          </motion.p>
        </motion.div>

        {/* About Us Section */}
        <motion.div
          ref={aboutRef}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-20 border border-slate-200"
          initial="hidden"
          animate={aboutControls}
          variants={sectionVariants}
        >
          <div className="lg:flex">
            <motion.div
              className="lg:w-2/3 p-8 md:p-12 lg:p-16"
              variants={sectionVariants}
            >
              <motion.h2
                className="text-4xl font-bold text-slate-900 mb-8"
                variants={textFadeIn}
              >
                About <span className="text-slate-600">Our Company</span>
              </motion.h2>
              <motion.p
                className="text-lg text-slate-700 leading-relaxed mb-8"
                variants={textFadeIn}
              >
                Tree House Realty stands as a premier real estate firm dedicated
                to delivering exceptional property solutions for discerning
                clients and strategic investors. Our commitment to excellence,
                combined with deep market expertise, ensures that every
                transaction is handled with the utmost professionalism and care.
              </motion.p>
              <motion.p
                className="text-lg text-slate-700 leading-relaxed mb-8"
                variants={textFadeIn}
              >
                We specialize in connecting clients with premium land
                acquisitions, agricultural properties, and commercial real
                estate opportunities that align with their vision and investment
                objectives.
              </motion.p>
              <motion.div
                className="bg-slate-50 border-l-4 border-slate-600 p-6 rounded-r-lg"
                variants={textFadeIn}
              >
                <p className="text-slate-800 text-lg font-medium italic">
                  "Excellence in real estate isn't just our standard—it's our
                  promise to every client we serve."
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:w-1/3 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center p-8 lg:p-12"
              variants={sectionVariants}
            >
              <div className="text-white text-center">
                <Handshake className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
                <p className="text-slate-200 text-lg leading-relaxed">
                  Unwavering commitment to transparency, professionalism, and
                  client success
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          ref={missionRef}
          className="mb-20"
          initial="hidden"
          animate={missionControls}
          variants={sectionVariants}
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-8"
                variants={textFadeIn}
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h2
                className="text-4xl font-bold mb-8"
                variants={textFadeIn}
              >
                Our Mission
              </motion.h2>
              <motion.p
                className="text-xl text-slate-200 leading-relaxed"
                variants={textFadeIn}
              >
                To deliver unparalleled real estate services through strategic
                expertise, market intelligence, and unwavering commitment to
                client success. We empower informed decision-making in property
                acquisition, development, and investment across residential,
                commercial, and agricultural sectors.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          ref={servicesRef}
          className="mb-20"
          initial="hidden"
          animate={servicesControls}
          variants={sectionVariants}
        >
          <motion.div className="text-center mb-16" variants={textFadeIn}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our <span className="text-slate-600">Expertise</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to your unique
              requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Building2 className="w-8 h-8 text-slate-600" />,
                title: "Premium Plot Development",
                desc: "Strategic land acquisition and development opportunities in prime locations with exceptional growth potential.",
                features: [
                  "Prime location analysis",
                  "Investment-grade properties",
                  "Custom development solutions",
                ],
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
              },
              {
                icon: <Leaf className="w-8 h-8 text-green-600" />,
                title: "Agricultural Properties",
                desc: "Specialized expertise in agricultural real estate, from productive farmland to luxury rural estates.",
                features: [
                  "Soil quality assessment",
                  "Water rights verification",
                  "Agricultural zoning expertise",
                ],
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
              },
              {
                icon: <Building2 className="w-8 h-8 text-purple-600" />,
                title: "Commercial Real Estate",
                desc: "Full-service commercial property solutions for businesses and institutional investors.",
                features: [
                  "Market analysis reports",
                  "Investment property evaluation",
                  "Commercial lease negotiation",
                ],
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
              },
              {
                icon: <Search className="w-8 h-8 text-amber-600" />,
                title: "Strategic Consulting",
                desc: "Expert advisory services for complex real estate transactions and portfolio optimization.",
                features: [
                  "Due diligence services",
                  "Market trend analysis",
                  "Investment strategy planning",
                ],
                bgColor: "bg-amber-50",
                borderColor: "border-amber-200",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                className={`${service.bgColor} rounded-2xl p-8 border ${service.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}
                initial="hidden"
                animate={servicesControls}
                custom={i}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="bg-white rounded-xl p-4 w-fit mb-6 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-slate-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          ref={chooseUsRef}
          className="mb-20"
          initial="hidden"
          animate={chooseUsControls}
          variants={sectionVariants}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-slate-200">
            <motion.div className="text-center mb-16" variants={textFadeIn}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why Choose{" "}
                <span className="text-slate-600">Tree House Realty</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our commitment to excellence sets us apart in the real estate
                industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8 text-slate-600" />,
                  title: "Trusted Expertise",
                  desc: "Decades of combined experience in real estate markets with a proven track record of successful transactions.",
                },
                {
                  icon: <Award className="w-8 h-8 text-slate-600" />,
                  title: "Professional Excellence",
                  desc: "Industry-leading standards in service delivery, market analysis, and client relationship management.",
                },
                {
                  icon: <Users className="w-8 h-8 text-slate-600" />,
                  title: "Client-Centric Approach",
                  desc: "Personalized service tailored to your specific needs, timeline, and investment objectives.",
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-slate-600" />,
                  title: "Market Intelligence",
                  desc: "Advanced market research and analytics to ensure optimal investment decisions and timing.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="text-center p-6"
                  initial="hidden"
                  animate={chooseUsControls}
                  custom={i}
                  variants={cardVariants}
                >
                  <div className="bg-slate-100 rounded-2xl p-4 w-fit mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          ref={growRef}
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-2xl"
          initial="hidden"
          animate={growControls}
          variants={sectionVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8"
              variants={textFadeIn}
            >
              Partner With <span className="text-slate-300">Excellence</span>
            </motion.h2>
            <motion.p
              className="text-xl text-slate-200 leading-relaxed mb-10"
              variants={textFadeIn}
            >
              At Tree House Realty, we understand that real estate represents
              more than transactions—it's about building futures, creating
              opportunities, and establishing lasting value. Let our expertise
              guide your next strategic real estate decision.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={textFadeIn}
            >
              <button className="bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-colors duration-200 shadow-lg">
                Schedule Consultation
              </button>
              <Link 
                href={'/'}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-800 transition-colors duration-200">
                View Properties
              </Link>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
