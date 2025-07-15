"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Server,
  Cloud,
  Smartphone,
  Award,
  ExternalLink,
  ChevronDown,
  Terminal,
  Users,
  Building,
  Fingerprint,
  Shield,
  Scan,
  Database,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "biometrics",
        "projects",
        "mentorship",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openEmailClient = () => {
    const to = "ayomideogbede@yahoo.com";
    const cc = "ayomide@ooean.com";
    const subject = "Inquiry";
    const body = "Hi Ayomide Ogbede,";

    const mailtoLink = `mailto:${to}?cc=${encodeURIComponent(
      cc
    )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const initiateCall = () => {
    const phoneNumber = "+2348126963575";
    window.location.href = `tel:${phoneNumber}`;
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/10 via-navy-800/10 to-black" />
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-navy-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-navy-400 to-navy-600 bg-clip-text text-blue-500"
            >
              AO
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              {[
                "About",
                "Skills",
                "Experience",
                "Biometrics",
                "Projects",
                "Mentorship",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-500"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-800"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {[
                  "About",
                  "Skills",
                  "Experience",
                  "Biometrics",
                  "Projects",
                  "Mentorship",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-left text-base font-medium transition-colors hover:text-blue-500 ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-500"
                        : "text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6"
      >
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-navy-900/20 via-navy-800/20 to-black"
        />

        {/* 3D Floating Elements - Hidden on mobile for performance */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          <motion.div
            className="absolute top-20 left-10 w-16 h-16 lg:w-20 lg:h-20 border border-navy-400/30 rotate-45"
            animate={{ rotateY: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-12 h-12 lg:w-16 lg:h-16 border border-navy-400/30"
            animate={{ rotateX: 360 }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-navy-400/20 to-navy-600/20 rounded-full"
            animate={{ y: [-20, 20, -20] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-navy-400 to-navy-600 bg-clip-text text-blue-500">
                Ayomide
              </span>
              <br />
              <span className="text-white">Ogbede</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto px-4">
              CEO & Fullstack Engineer crafting scalable SaaS applications with
              7+ years of experience
            </p>
            <p className="text-base sm:text-lg text-blue-500 mb-6 sm:mb-8">
              Mentored 20+ Developers • Reduced Cloud Costs by 60%
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
              <Badge
                variant="outline"
                className="text-blue-500 border-navy-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              >
                <Terminal className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Backend Architect
              </Badge>
              <Badge
                variant="outline"
                className="text-blue-500 border-navy-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              >
                <Cloud className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Cloud Native
              </Badge>
              <Badge
                variant="outline"
                className="text-blue-500 border-navy-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              >
                <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Tech CEO
              </Badge>
              <Badge
                variant="outline"
                className="text-blue-500 border-navy-400 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
              >
                <Fingerprint className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Biometrics Expert
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto bg-gradient-to-r from-navy-600 to-navy-800 hover:from-navy-700 hover:to-navy-900 px-6 sm:px-8 py-3 transform hover:scale-105 transition-transform"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto bg-blue-400 border-gray-600 text-white hover:bg-gray-800 px-6 sm:px-8 py-3 transform hover:scale-105 transition-transform"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          >
            <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
              About{" "}
              <span className="bg-gradient-to-r from-navy-400 to-navy-600 bg-clip-text text-blue-500">
                Me
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                  CEO of OOEAN IT Solutions Limited and versatile Fullstack
                  Engineer with over 7 years of experience developing scalable
                  SaaS applications across web and mobile platforms. I
                  specialize in backend development using NestJS, TypeScript,
                  Node.js, and Go, with a strong focus on PostgreSQL, schema
                  design, and microservices architecture.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                  As a tech leader and mentor, I've guided over 20 developers in
                  their careers while building high-performance, testable, and
                  maintainable systems. My experience includes reducing cloud
                  costs by 60% and implementing cloud-native solutions using
                  AWS. I also specialize in biometric solutions, developing
                  World Bank standard applications for identity management.
                </p>

                <div className="flex items-center gap-4 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Katampe, Abuja, Nigeria
                  </span>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  whileHover={{ rotateY: 5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gray-900 border-gray-800 transform-gpu">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Building className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-white">
                            CEO & Founder
                          </h3>
                          <p className="text-sm sm:text-base text-gray-400">
                            OOEAN IT Solutions Limited
                          </p>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-300">
                        Leading innovative tech solutions and mentoring the next
                        generation of developers
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ rotateY: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gray-900 border-gray-800 transform-gpu">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-white">
                            Education
                          </h3>
                          <p className="text-sm sm:text-base text-gray-400">
                            Les Cours Sonou University
                          </p>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 mb-2">
                        B.Sc. Computer Science (Second Class Upper)
                      </p>
                      <Badge className="bg-blue-400/20 text-blue-500 text-xs">
                        Programmer of the Year 2017
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ rotateY: 5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gray-900 border-gray-800 transform-gpu">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-white">
                            Mentorship
                          </h3>
                          <p className="text-sm sm:text-base text-gray-400">
                            20+ Developers Mentored
                          </p>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-300">
                        Passionate about sharing knowledge and growing the tech
                        community
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900/50 relative z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
              Technical{" "}
              <span className="bg-gradient-to-r from-navy-400 to-navy-600 bg-clip-text text-blue-500">
                Arsenal
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <motion.div
                whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-black border-gray-800 hover:border-navy-500 transition-colors transform-gpu h-full">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Code className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mx-auto mb-4" />
                    <CardTitle className="text-white text-lg sm:text-xl">
                      Languages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "TypeScript",
                        "JavaScript",
                        "Go",
                        "C#",
                        "Java",
                        "Dart",
                        "Swift",
                        "Kotlin",
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-blue-400/20 text-blue-500 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-black border-gray-800 hover:border-navy-500 transition-colors transform-gpu h-full">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Server className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mx-auto mb-4" />
                    <CardTitle className="text-white text-lg sm:text-xl">
                      Backend
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "NestJS",
                        "Node.js",
                        ".NET",
                        "Laravel",
                        "PostgreSQL",
                        "REST APIs",
                        "gRPC",
                        "Microservices",
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-blue-400/20 text-blue-500 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ rotateX: -10, rotateY: 10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-black border-gray-800 hover:border-navy-500 transition-colors transform-gpu h-full">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Cloud className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mx-auto mb-4" />
                    <CardTitle className="text-white text-lg sm:text-xl">
                      Cloud & DevOps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "AWS",
                        "Azure",
                        "Docker",
                        "GitHub Actions",
                        "EC2",
                        "Lambda",
                        "S3",
                        "RDS",
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-blue-400/20 text-blue-500 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ rotateX: -10, rotateY: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-black border-gray-800 hover:border-navy-500 transition-colors transform-gpu h-full">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mx-auto mb-4" />
                    <CardTitle className="text-white text-lg sm:text-xl">
                      Frontend & Mobile
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "React Native",
                        "Flutter",
                        "ElectronJS",
                        "Kotlin",
                        "Android",
                        "iOS",
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-blue-400/20 text-blue-500 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 sm:py-20 px-4 sm:px-6 relative z-10"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
              Professional{" "}
              <span className="bg-gradient-to-r from-navy-400 to-navy-600 bg-clip-text text-blue-500">
                Journey
              </span>
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  company: "OOEAN IT Solutions Limited",
                  role: "CEO & Founder",
                  period: "2024 - Present",
                  location: "Katampe, Abuja",
                  achievements: [
                    "Founded and leading a tech solutions company",
                    "Mentored over 20 developers across various technologies",
                    "Built scalable enterprise solutions for government and private sectors",
                    "Established strategic partnerships with major tech companies",
                  ],
                },
                {
                  company: "Barnksforte Technology Limited",
                  role: "Fullstack Developer",
                  period: "08/2023 - Present",
                  location: "FCT, Abuja",
                  achievements: [
                    "Designed and implemented microservices using NestJS and Go",
                    "Reduced cloud infrastructure cost by 60% on AWS",
                    "Built scalable RESTful APIs for internal products and partner integrations",
                    "Implemented ETL pipelines for large-scale data imports",
                    "Developed native and cross-platform mobile applications with robust offline capabilities.",
                  ],
                },
                {
                  company: "Alliance Consulting & Digital Solutions Limited",
                  role: "Specialist, Application Development",
                  period: "04/2022 - 08/2023",
                  location: "Lagos, Ikeja",
                  achievements: [
                    "Developed cloud-based SaaS features using Node.js, .NET, and React Native",
                    "Led backend efforts for applications deployed on Azure",
                    "Built secure APIs and handled system integrations",
                    "Participated in Agile sprints and cross-functional planning",
                    "Built native mobile applications with offline capability",
                  ],
                },
                {
                  company: "James Cubitt Resources",
                  role: "Assistant Manager, Web & Lead Mobile Application Developer",
                  period: "10/2021 - 03/2022",
                  location: "Lagos, Ikoyi",
                  achievements: [
                    "Developed backend features using Laravel with strong data modeling",
                    "Led mobile application development using React Native",
                    "Collaborated with stakeholders to define product features",
                  ],
                },
                {
                  company: "Information Connectivity Solutions Limited",
                  role: "Lead Mobile Application Developer",
                  period: "10/2018 - 09/2021",
                  location: "Lagos, Lekki",
                  achievements: [
                    "Built native mobile applications with offline capability",
                    "Assisted with backend optimizations for Laravel-based systems",
                    "Coordinated QA and release management for mobile apps",
                  ],
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                >
                  <Card className="bg-gray-900 border-gray-800 hover:border-navy-500 transition-all duration-300 transform-gpu">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="mb-2 lg:mb-0">
                          <CardTitle className="text-lg sm:text-xl text-white mb-2">
                            {job.role}
                          </CardTitle>
                          <CardDescription className="text-blue-500 font-semibold text-base sm:text-lg">
                            {job.company}
                          </CardDescription>
                        </div>
                        <div className="text-left lg:text-right">
                          <p className="text-gray-400 text-sm sm:text-base">
                            {job.period}
                          </p>
                          <p className="text-gray-500 text-xs sm:text-sm">
                            {job.location}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-300 flex items-start text-sm sm:text-base"
                          >
                            <span className="text-blue-500 mr-2 flex-shrink-0">
                              •
                            </span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Biometrics Solutions Section */}
      <section
        id="biometrics"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900/50 relative z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8">
              Biometric{" "}
              <span className="bg-gradient-to-r from-navy-400 to-navy-600 bg-clip-text text-blue-500">
                Solutions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              Developing world-class biometric capture and identity management
              systems for Nigerian citizens with international standards
              compliance
            </p>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-black border-gray-800 hover:border-navy-500 transition-colors transform-gpu h-full">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Fingerprint className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-xl sm:text-2xl text-white">
                          NIMC Biometric Capture
                        </CardTitle>
                        <CardDescription className="text-blue-500 text-sm sm:text-base">
                          World Bank Standard Implementation
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 p-4 sm:p-6 pt-0">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3">
                        Technical Standards
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            WSQ Format
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            ICAO Standards
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            ISO 19794
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            NIST Compliant
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3">
                        Capture Capabilities
                      </h4>
                      <ul className="space-y-2">
                        <li className="text-gray-300 flex items-start text-sm sm:text-base">
                          <span className="text-blue-500 mr-2 flex-shrink-0">
                            •
                          </span>
                          10-finger slap and rolled fingerprint capture
                        </li>
                        <li className="text-gray-300 flex items-start text-sm sm:text-base">
                          <span className="text-blue-500 mr-2 flex-shrink-0">
                            •
                          </span>
                          High-resolution facial photography (ICAO compliant)
                        </li>
                        <li className="text-gray-300 flex items-start text-sm sm:text-base">
                          <span className="text-blue-500 mr-2 flex-shrink-0">
                            •
                          </span>
                          Iris capture with liveness detection
                        </li>
                        <li className="text-gray-300 flex items-start text-sm sm:text-base">
                          <span className="text-blue-500 mr-2 flex-shrink-0">
                            •
                          </span>
                          Real-time quality assessment and validation
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-black border-gray-800 hover:border-navy-500 transition-colors transform-gpu h-full">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Scan className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-xl sm:text-2xl text-white">
                          OCR & Document Recognition
                        </CardTitle>
                        <CardDescription className="text-blue-500 text-sm sm:text-base">
                          Standardized Identity Processing
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 p-4 sm:p-6 pt-0">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3">
                        Document Types
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            National ID Cards
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            Passports
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            Driver's License
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            Birth Certificates
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3">
                        OCR Features
                      </h4>
                      <ul className="space-y-2">
                        <li className="text-gray-300 flex items-start text-sm sm:text-base">
                          <span className="text-blue-500 mr-2 flex-shrink-0">
                            •
                          </span>
                          Machine learning-powered text extraction
                        </li>
                        <li className="text-gray-300 flex items-start text-sm sm:text-base">
                          <span className="text-blue-500 mr-2 flex-shrink-0">
                            •
                          </span>
                          Document authenticity verification
                        </li>
                        <li className="text-gray-300 flex items-start text-sm sm:text-base">
                          <span className="text-blue-500 mr-2 flex-shrink-0">
                            •
                          </span>
                          Real-time data validation and formatting
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-black border-gray-800 hover:border-navy-500 transition-colors transform-gpu">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-lg sm:text-xl text-white">
                          Contactless Biometrics
                        </CardTitle>
                        <CardDescription className="text-blue-500 text-sm sm:text-base">
                          Mobile & Desktop Solutions
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <ul className="space-y-3">
                      <li className="text-gray-300 flex items-start text-sm sm:text-base">
                        <span className="text-blue-500 mr-2 flex-shrink-0">
                          •
                        </span>
                        Facial recognition with liveness detection
                      </li>
                      <li className="text-gray-300 flex items-start text-sm sm:text-base">
                        <span className="text-blue-500 mr-2 flex-shrink-0">
                          •
                        </span>
                        Finger capture with liveness detection
                      </li>
                      <li className="text-gray-300 flex items-start text-sm sm:text-base">
                        <span className="text-blue-500 mr-2 flex-shrink-0">
                          •
                        </span>
                        99.7% accuracy rate in field testing
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-black border-gray-800 hover:border-navy-500 transition-colors transform-gpu">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Database className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-lg sm:text-xl text-white">
                          Contact Biometrics
                        </CardTitle>
                        <CardDescription className="text-blue-500 text-sm sm:text-base">
                          High-Precision Capture
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <ul className="space-y-3">
                      <li className="text-gray-300 flex items-start text-sm sm:text-base">
                        <span className="text-blue-500 mr-2 flex-shrink-0">
                          •
                        </span>
                        Capacitive fingerprint sensors integration
                      </li>
                      <li className="text-gray-300 flex items-start text-sm sm:text-base">
                        <span className="text-blue-500 mr-2 flex-shrink-0">
                          •
                        </span>
                        Multi-spectral imaging for enhanced accuracy
                      </li>
                      <li className="text-gray-300 flex items-start text-sm sm:text-base">
                        <span className="text-blue-500 mr-2 flex-shrink-0">
                          •
                        </span>
                        99.9% data accuracy with quality metrics
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <div className="bg-gradient-to-r from-navy-900/20 to-navy-800/20 rounded-lg p-6 sm:p-8 border border-gray-800">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Impact & Scale
                </h3>
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">
                      200M+
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Citizens Enrolled (Local And Diaspora)
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">
                      99.8%
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      System Uptime
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">
                      20+
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Enrollment Centers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-20 px-4 sm:px-6 relative z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
              Featured{" "}
              <span className="bg-gradient-to-r from-navy-400 to-navy-600 bg-clip-text text-blue-500">
                Projects
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Ibile Hub",
                  description:
                    "Enterprise-grade government solutions platform with advanced biometric integration",
                  tech: [
                    "Java",
                    "MSSQL",
                    ".NET",
                    "Azure",
                    "Biometrics",
                    "Android Native",
                  ],
                  features: [
                    "Government Integration",
                    "Biometric Solutions",
                    "Enterprise Security",
                  ],
                  url: "https://punchng.com/ibile-hub-initiative-has-simplified-tax-collection-system-coker-lirs-director/",
                  gradient: "from-navy-600 to-navy-800",
                  image: "/assets/ibile.png",
                },
                {
                  title: "Leder Mobile App",
                  description:
                    "Property capture and management application for Lagos State real estate documentation",
                  tech: [
                    "Java",
                    "Laravel",
                    "SQL",
                    "GPS",
                    "Camera API",
                    "Android Native",
                  ],
                  features: [
                    "Property Mapping",
                    "GPS Integration",
                    "Offline Capability",
                  ],
                  url: "https://luc.lagosstate.gov.ng/home",
                  gradient: "from-navy-700 to-navy-900",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "TechPay",
                  description:
                    "A fintech payment platform with secure, scalable architecture",
                  tech: ["NestJS", "React", "React Native", "MSSQL", "Azure"],
                  features: [
                    "Payment Gateway Integration",
                    "Authentication",
                    "Compliance Standards",
                  ],
                  url: "https://techpay.ng/",
                  gradient: "from-navy-600 to-navy-800",
                  image: "/assets/techpay.png",
                },
                {
                  title: "NIMC Self Service Portal",
                  description:
                    "Government identity update platform with role-based authentication",
                  tech: ["Node.js", "NestJS", "PostgreSQL", "Flutter", "AWS"],
                  features: [
                    "Data Encryption",
                    "Lambda Functions",
                    "S3 Storage",
                  ],
                  url: "https://nimc.gov.ng/self-service-modifications/",
                  gradient: "from-navy-700 to-navy-900",
                  image: "/assets/nimc-portal.png",
                },
                {
                  title: "NIMC Assisted Enrollment Mobile",
                  description:
                    "Native Android application for NIMC enrollment with biometric capture",
                  tech: [
                    "Kotlin",
                    "Android Native",
                    "SQLite",
                    "Biometric APIs",
                  ],
                  features: [
                    "WSQ Format Support",
                    "Offline Capability",
                    "Real-time Validation",
                  ],
                  url: "#",
                  gradient: "from-navy-600 to-navy-800",
                  image: "/assets/assisted.png",
                },
                {
                  title: "NIMC Assisted Enrollment Desktop",
                  description:
                    "Cross-platform desktop application for enrollment management",
                  tech: ["ElectronJS", "TypeScript", "Node.js", "SQLite"],
                  features: [
                    "Cross-platform",
                    "Biometric Integration",
                    "Data Synchronization",
                  ],
                  url: "#",
                  gradient: "from-navy-700 to-navy-900",
                  image: "/assets/desktop.png",
                },
                {
                  title: "Lagos State Revenue Portal",
                  description:
                    "Revenue management system with integrated payment gateways",
                  tech: [".NET MVC", "MSSQL", "Bootstrap"],
                  features: [
                    "Payment Integration",
                    "Responsive UI",
                    "Tax Management",
                  ],
                  url: "https://revenue.lagosstate.gov.ng/",
                  gradient: "from-navy-600 to-navy-800",
                  image: "/assets/lrp.png",
                },
                {
                  title: "Osun State Property System",
                  description:
                    "Property management system with tax engine and secure database",
                  tech: ["Laravel", "Java", "Android Native"],
                  features: ["Tax Engine", "Mobile App", "Database Security"],
                  url: "https://irs.os.gov.ng/tax-schedule/land-use-charge/",
                  gradient: "from-navy-700 to-navy-900",
                  image: "/assets/tsopms.jpg",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    z: 50,
                  }}
                  className="transform-gpu"
                >
                  <Card className="bg-black border-gray-800 hover:border-gray-600 transition-all duration-300 h-full group">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-80 mix-blend-overlay`}
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-black/50 text-white border-white/20 text-xs">
                            {project.tech[0]}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <CardTitle className="text-lg sm:text-xl text-white group-hover:text-blue-500 transition-colors mb-2">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400 text-sm sm:text-base">
                          {project.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(1).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-gray-600 text-gray-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="text-gray-400 text-xs sm:text-sm flex items-center"
                          >
                            <span className="text-blue-500 mr-2 flex-shrink-0">
                              ✓
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent text-xs sm:text-sm"
                        onClick={() => openInNewTab(project.url)}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section
        id="mentorship"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900/50 relative z-10"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              Mentorship &{" "}
              <span className="bg-gradient-to-r from-navy-400 to-navy-600 bg-clip-text text-blue-500">
                Leadership
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Passionate about growing the next generation of developers and
              sharing knowledge across the tech community.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-navy-500 transition-colors transform-gpu">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <Users className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      20+
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Developers Mentored
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-navy-500 transition-colors transform-gpu">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <Code className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      7+
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Years Experience
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-navy-500 transition-colors transform-gpu">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <Building className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      1
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Company Founded
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-navy-900/20 to-navy-800/20 rounded-lg p-6 sm:p-8 border border-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Areas of Mentorship
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-blue-500 mb-2">
                    Technical Skills
                  </h4>
                  <ul className="space-y-1 text-gray-300 text-sm sm:text-base">
                    <li>• Backend Development (NestJS, Node.js, Go)</li>
                    <li>
                      • Mobile Development (React Native, Flutter, Kotlin)
                    </li>
                    <li>• Cloud Architecture (AWS, Azure)</li>
                    <li>• Biometric Systems & Identity Management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-blue-500 mb-2">
                    Career Development
                  </h4>
                  <ul className="space-y-1 text-gray-300 text-sm sm:text-base">
                    <li>• Technical Leadership</li>
                    <li>• System Architecture Design</li>
                    <li>• Code Review & Best Practices</li>
                    <li>• Entrepreneurship in Tech</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 px-4 sm:px-6 relative z-10"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              Let's{" "}
              <span className="bg-gradient-to-r from-navy-400 to-navy-600 bg-clip-text text-blue-500">
                Connect
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Ready to build something amazing together? I'm always open to
              discussing new opportunities, mentorship, and exciting projects.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="bg-gray-900 border-gray-800 hover:border-navy-500 transition-colors transform-gpu"
                  onClick={openEmailClient}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Email
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base break-all">
                      ayomideogbede@yahoo.com
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="bg-gray-900 border-gray-800 hover:border-navy-500 transition-colors transform-gpu"
                  onClick={initiateCall}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      +234 812 696 3575
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-navy-500 transition-colors transform-gpu">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Location
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Katampe, Abuja, Nigeria
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-navy-600 to-navy-800 hover:from-navy-700 hover:to-navy-900 transform hover:scale-105 transition-transform"
                onClick={openEmailClient}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Send Message
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-gray-600 text-white hover:bg-gray-800 bg-transparent transform hover:scale-105 transition-transform"
                onClick={() => openInNewTab("https://www.github.com/ay4real")}
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-gray-600 text-white hover:bg-gray-800 bg-transparent transform hover:scale-105 transition-transform"
                onClick={() =>
                  openInNewTab(
                    "https://www.linkedin.com/in/ayomide-ogbede-967793170"
                  )
                }
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-800 relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Ayomide Ogbede. Crafted with passion
            and precision.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            CEO, OOEAN IT Solutions Limited • Fullstack Engineer • Biometrics
            Expert
          </p>
        </div>
      </footer>
    </div>
  );
}
