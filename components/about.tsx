"use client";

import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaTree,
  FaBuilding,
  FaHandshake,
  FaLeaf,
  FaSearch,
  FaChartLine,
  FaCheck,
} from "react-icons/fa";

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
  // We'll create refs and controls per major section to animate on scroll
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
    <section className="bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          className="text-center mb-16"
          initial="hidden"
          animate={heroControls}
          variants={sectionVariants}
        >
          <motion.div
            className="inline-block bg-orange-100 rounded-full p-3 mb-6"
            variants={sectionVariants}
          >
            <FaTree className="text-4xl text-orange-600" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight"
            variants={textFadeIn}
          >
            <span className="text-orange-600">Tree House</span> Realty
          </motion.h1>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={heroControls}
            variants={{
              hidden: { width: 0 },
              visible: {
                width: "8rem",
                transition: { duration: 0.8, delay: 0.3 },
              },
            }}
          />

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={textFadeIn}
          >
            Building trust and excellence in real estate
          </motion.p>
        </motion.div>

        {/* About Us Section */}
        <motion.div
          ref={aboutRef}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          initial="hidden"
          animate={aboutControls}
          variants={sectionVariants}
        >
          <div className="md:flex">
            <motion.div
              className="md:w-2/3 p-8 md:p-12"
              variants={sectionVariants}
            >
              <motion.h2
                className="text-3xl font-bold text-gray-800 mb-6"
                variants={textFadeIn}
              >
                About <span className="text-orange-600">Us</span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed mb-6"
                variants={textFadeIn}
              >
                Tree House Realty is a forward-thinking real estate company
                committed to helping individuals and investors find the perfect
                piece of land, farm, or building to match their vision. Rooted
                in trust and guided by integrity, we specialize in providing
                clear, reliable, and profitable real estate solutions tailored
                to our clients' unique needs.
              </motion.p>
              <motion.div
                className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg"
                variants={textFadeIn}
              >
                <p className="text-orange-800 italic font-medium">
                  "We don't just sell properties — we help people take the first
                  step toward building their future."
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="md:w-1/3 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center p-8"
              variants={sectionVariants}
            >
              <div className="text-white text-center">
                <FaHandshake className="text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Our Commitment</h3>
                <p className="text-orange-100">
                  Trust, transparency, and tailored solutions for every client
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          ref={missionRef}
          className="mb-16"
          initial="hidden"
          animate={missionControls}
          variants={sectionVariants}
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl font-bold mb-6 flex items-center"
                variants={textFadeIn}
              >
                <span className="bg-white text-orange-600 rounded-full p-2 mr-4">
                  <FaChartLine />
                </span>
                Our Mission
              </motion.h2>
              <motion.p
                className="text-xl text-orange-100 leading-relaxed"
                variants={textFadeIn}
              >
                To offer seamless, transparent, and value-driven real estate
                services that empower clients to make informed decisions whether
                they are buying, selling, or investing in land, farms, or
                buildings.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          ref={servicesRef}
          className="mb-16"
          initial="hidden"
          animate={servicesControls}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-12 text-center"
            variants={textFadeIn}
          >
            What We <span className="text-orange-600">Do</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaBuilding className="text-orange-500 text-4xl mb-4" />,
                title: "Plot Deals",
                desc: `We help you find residential and commercial plots that suit your requirements — from investment-ready land to future home sites.`,
                points: [
                  "Secure locations",
                  "Fast-appreciating property",
                  "Custom plot dimensions",
                ],
                borderColor: "border-orange-500",
              },
              {
                icon: <FaLeaf className="text-green-500 text-4xl mb-4" />,
                title: "Farm & Agricultural Land",
                desc: `We specialize in connecting buyers with fertile, legally cleared, and accessible farmland.`,
                points: [
                  "Agriculture-ready land",
                  "Farmhouse properties",
                  "Weekend retreat locations",
                ],
                borderColor: "border-green-500",
              },
              {
                icon: <FaBuilding className="text-blue-500 text-4xl mb-4" />,
                title: "Residential & Commercial Buildings",
                desc: `From move-in-ready homes to commercial spaces, we offer verified properties that are both functional and future-focused.`,
                points: [
                  "First-time homebuyer assistance",
                  "Business space solutions",
                  "Investment opportunities",
                ],
                borderColor: "border-blue-500",
              },
              {
                icon: <FaSearch className="text-purple-500 text-4xl mb-4" />,
                title: "Consultation & Guidance",
                desc: `We offer personalized consultation for land assessment, legal verification, market trends, and investment planning.`,
                points: [
                  "Land assessment",
                  "Legal verification",
                  "Investment planning",
                ],
                borderColor: "border-purple-500",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                className={`bg-white rounded-xl shadow-lg p-6 border-t-4 ${service.borderColor}`}
                initial="hidden"
                animate={servicesControls}
                custom={i}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                }}
              >
                {service.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="text-gray-700 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start">
                      <FaCheck
                        className={`mt-1 mr-2 flex-shrink-0 text-${
                          service.borderColor.split("-")[1]
                        }-500`}
                      />
                      <span>{point}</span>
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
          className="mb-16"
          initial="hidden"
          animate={chooseUsControls}
          variants={sectionVariants}
        >
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-inner">
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
              variants={textFadeIn}
            >
              Why Choose{" "}
              <span className="text-orange-600">Tree House Realty</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  icon: (
                    <FaHandshake className="text-orange-500 text-3xl mb-4" />
                  ),
                  title: "Trusted Partnership",
                  desc: `We build long-term relationships based on trust and integrity, ensuring you have a reliable partner for all your real estate needs.`,
                  colSpan: "lg:col-span-2",
                },
                {
                  icon: <FaCheck className="text-orange-500 text-3xl mb-4" />,
                  title: "Transparent Deals",
                  desc: `No hidden fees or surprises. We ensure complete clarity in every transaction.`,
                  colSpan: "",
                },
                {
                  icon: (
                    <FaBuilding className="text-orange-500 text-3xl mb-4" />
                  ),
                  title: "Verified Properties",
                  desc: `Every property undergoes thorough verification with legal assistance.`,
                  colSpan: "",
                },
                {
                  icon: (
                    <FaChartLine className="text-orange-500 text-3xl mb-4" />
                  ),
                  title: "Expert Guidance",
                  desc: `Our experienced professionals provide market insights and personalized advice.`,
                  colSpan: "",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className={`bg-white p-6 rounded-xl shadow-md ${item.colSpan}`}
                  initial="hidden"
                  animate={chooseUsControls}
                  custom={i}
                  variants={cardVariants}
                >
                  {item.icon}
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Let's Grow Together */}
        <motion.div
          ref={growRef}
          className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 md:p-12 text-white"
          initial="hidden"
          animate={growControls}
          variants={sectionVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={textFadeIn}
            >
              Let's <span className="text-orange-300">Grow</span> Together
            </motion.h2>
            <motion.p
              className="text-xl text-green-100 leading-relaxed mb-8"
              variants={textFadeIn}
            >
              At Tree House Realty, we believe every property is more than just
              land or building — it's a seed for something greater. Whether
              you're building a dream home, starting a new venture, or growing
              your investment portfolio, we're here to guide you every step of
              the way.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
