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
  Workflow,
  Radio,
  Lock,
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
        "architecture",
        "skills",
        "experience",
        "biometrics",
        "projects",
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
    <div className="portfolio-shell relative min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.3),rgba(10,15,28,0.9))]" />
        <div className="absolute inset-0 opacity-10">
          {[...Array(14)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[rgba(96,165,250,0.35)]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="portfolio-nav fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="section-accent text-xl font-bold sm:text-2xl"
            >
              AO
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              {[
                "About",
                "Architecture",
                "Skills",
                "Experience",
                "Biometrics",
                "Projects",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-[#60A5FA] ${
                    activeSection === item.toLowerCase()
                      ? "text-[#60A5FA]"
                      : "text-[#94A3B8]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
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
              className="lg:hidden mt-4 border-t border-[#1E293B] pb-4"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {[
                  "About",
                  "Architecture",
                  "Skills",
                  "Experience",
                  "Biometrics",
                  "Projects",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-left text-base font-medium transition-colors hover:text-[#60A5FA] ${
                      activeSection === item.toLowerCase()
                        ? "text-[#60A5FA]"
                        : "text-[#94A3B8]"
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.12),transparent_34%),linear-gradient(180deg,rgba(17,24,39,0.28),rgba(10,15,28,0.88))]"
        />

        {/* 3D Floating Elements - Hidden on mobile for performance */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          <motion.div
            className="absolute left-10 top-20 h-16 w-16 rotate-45 border border-[rgba(96,165,250,0.14)] lg:h-20 lg:w-20"
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-20 top-40 h-12 w-12 border border-[rgba(96,165,250,0.14)] lg:h-16 lg:w-16"
            animate={{ y: [8, -8, 8] }}
            transition={{
              duration: 14,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 h-10 w-10 rounded-full bg-[linear-gradient(135deg,rgba(96,165,250,0.08),rgba(59,130,246,0.04))] lg:h-12 lg:w-12"
            animate={{ y: [-12, 12, -12] }}
            transition={{
              duration: 8,
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
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-gray-500 sm:text-sm">
              Senior Backend Engineer • Backend Architect • Distributed Systems
              Engineer
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl lg:text-8xl mb-4 sm:mb-6">
              <span className="section-accent">
                Ayomide
              </span>
              <br />
              <span className="text-[#F8FAFC]">Ogbede</span>
              <span className="ml-2 inline-block align-middle text-sm font-medium tracking-[0.18em] text-gray-500 sm:text-lg lg:text-xl">
                , C.itp, MCPN
              </span>
            </h1>
            <p className="mx-auto mb-4 max-w-3xl px-4 text-lg text-[#F8FAFC] sm:text-xl lg:text-2xl">
              Senior Backend / Full-Stack Engineer building scalable
              cloud-native and identity management systems
            </p>
            <p className="mb-4 px-4 text-sm font-medium tracking-[0.12em] text-[#60A5FA] sm:text-base">
              NestJS • Node.js • PostgreSQL • AWS • Docker • Observability
            </p>
            <p className="mb-6 text-sm text-[#94A3B8] sm:mb-8 sm:text-base">
              9+ Years in Production Backend Systems • Secure Identity
              Infrastructure • Cloud-Native Delivery
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
              <Badge
                variant="outline"
                className="outline-badge px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm"
              >
                <Terminal className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Backend Architect
              </Badge>
              <Badge
                variant="outline"
                className="outline-badge px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm"
              >
                <Workflow className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Distributed Systems
              </Badge>
              <Badge
                variant="outline"
                className="outline-badge px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm"
              >
                <Cloud className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Cloud-Native Delivery
              </Badge>
              <Badge
                variant="outline"
                className="outline-badge px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm"
              >
                <Lock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Secure APIs
              </Badge>
              <Badge
                variant="outline"
                className="outline-badge px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm"
              >
                <Fingerprint className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Identity Infrastructure
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
              className="primary-button w-full px-6 py-3 sm:w-auto sm:px-8"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="secondary-button w-full px-6 py-3 sm:w-auto sm:px-8"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 transform sm:block"
          >
            <ChevronDown className="h-8 w-8 text-[#94A3B8]" />
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
              <span className="section-accent">
                Me
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <p className="mb-6 text-base leading-relaxed text-[#F8FAFC] sm:text-lg">
                  Senior Backend / Full-Stack Engineer with 9+ years of
                  experience designing production backend systems, cloud-native
                  services, and secure identity workflows. My primary stack is
                  NestJS, Node.js, TypeScript, PostgreSQL, AWS, and Docker,
                  with a strong focus on API design, event-driven
                  architecture, reliability engineering, and distributed system
                  boundaries.
                </p>
                <p className="mb-8 text-base leading-relaxed text-[#94A3B8] sm:text-lg">
                  I have delivered fintech and public-sector identity platforms,
                  including biometric enrollment services, secure API
                  ecosystems, WebRTC-enabled real-time modules, and resilient
                  integration layers. Recent work spans scalable production
                  infrastructure, Dockerized service delivery, observability,
                  SLA/SLO-aware monitoring, and backend services built for high
                  availability, asynchronous processing, and operational
                  traceability.
                </p>

                <div className="flex items-center gap-4 text-[#94A3B8]">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-[#60A5FA]" />
                  <span className="text-sm sm:text-base">
                    Katampe, Abuja, Nigeria
                  </span>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Card className="panel-card transform-gpu">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Building className="h-6 w-6 flex-shrink-0 text-[#60A5FA] sm:h-8 sm:w-8" />
                        <div>
                          <h3 className="text-lg font-semibold text-[#F8FAFC] sm:text-xl">
                            Senior Backend Engineer
                          </h3>
                          <p className="text-sm text-[#94A3B8] sm:text-base">
                            OOEAN IT Solutions Limited
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-[#94A3B8] sm:text-base">
                        Designing and shipping cloud-native backend services,
                        Dockerized workloads, secure APIs, and identity-centric
                        platform components
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Card className="panel-card transform-gpu">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Award className="h-6 w-6 flex-shrink-0 text-[#60A5FA] sm:h-8 sm:w-8" />
                        <div>
                          <h3 className="text-lg font-semibold text-[#F8FAFC] sm:text-xl">
                            Education
                          </h3>
                          <p className="text-sm text-[#94A3B8] sm:text-base">
                            Les Cours Sonou Institute
                          </p>
                        </div>
                      </div>
                      <p className="mb-2 text-sm text-[#94A3B8] sm:text-base">
                        Professional Training in Computer Science
                      </p>
                      <Badge className="panel-badge text-xs">
                        Programmer of the Year 2017
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Card className="panel-card transform-gpu">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Users className="h-6 w-6 flex-shrink-0 text-[#60A5FA] sm:h-8 sm:w-8" />
                        <div>
                          <h3 className="text-lg font-semibold text-[#F8FAFC] sm:text-xl">
                            Engineering Mentorship
                          </h3>
                          <p className="text-sm text-[#94A3B8] sm:text-base">
                            20+ Developers Mentored
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-[#94A3B8] sm:text-base">
                        Mentored engineers through backend architecture,
                        distributed systems design, operational readiness, and
                        production debugging practices
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
      <section
        id="architecture"
        className="panel-section relative z-10 px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8">
              Architecture &{" "}
              <span className="section-accent">
                Systems Expertise
              </span>
            </h2>
            <p className="mx-auto mb-12 max-w-4xl text-center text-lg text-[#94A3B8] sm:mb-16 sm:text-xl">
              Focused on resilient backend platforms for identity, fintech, and
              real-time products, with clear architecture boundaries,
              observability, asynchronous workflows, and security-first API
              design.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                "Distributed systems",
                "Event-driven architecture",
                "Identity infrastructure",
                "Secure API ecosystems",
                "Cloud-native backend systems",
                "Observability and reliability engineering",
                "Asynchronous processing and workflow orchestration",
                "Real-time communication systems",
                "Biometric processing systems",
              ].map((item) => (
                <Card
                  key={item}
                  className="panel-card transition-colors"
                >
                  <CardContent className="p-5 sm:p-6 flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#60A5FA]" />
                    <p className="text-sm text-[#F8FAFC] sm:text-base">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="panel-section relative z-10 px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
              Backend & Platform <span className="section-accent">Stack</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="panel-card h-full transition-colors">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Code className="mx-auto mb-4 h-10 w-10 text-[#60A5FA] sm:h-12 sm:w-12" />
                    <CardTitle className="text-lg text-[#F8FAFC] sm:text-xl">Languages</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {["TypeScript", "JavaScript", "Go", "C#", "Java", "SQL", "Kotlin", "Python"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="panel-badge text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="panel-card h-full transition-colors">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Server className="mx-auto mb-4 h-10 w-10 text-[#60A5FA] sm:h-12 sm:w-12" />
                    <CardTitle className="text-lg text-[#F8FAFC] sm:text-xl">Backend</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "NestJS",
                        "Node.js",
                        "PostgreSQL",
                        "Secure APIs",
                        "Event-Driven Systems",
                        "gRPC",
                        "Microservices",
                        "Identity Services",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="panel-badge text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="panel-card h-full transition-colors">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Cloud className="mx-auto mb-4 h-10 w-10 text-[#60A5FA] sm:h-12 sm:w-12" />
                    <CardTitle className="text-lg text-[#F8FAFC] sm:text-xl">Cloud Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "AWS",
                        "Docker",
                        "Kubernetes",
                        "Terraform",
                        "CI/CD",
                        "GitHub Actions",
                        "Infrastructure Automation",
                        "Environment Isolation",
                        "CloudWatch",
                        "RDS",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="panel-badge text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="panel-card h-full transition-colors">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <Radio className="mx-auto mb-4 h-10 w-10 text-[#60A5FA] sm:h-12 sm:w-12" />
                    <CardTitle className="text-lg text-[#F8FAFC] sm:text-xl">Systems & Realtime</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "WebRTC",
                        "Message Queues",
                        "Caching",
                        "Workflow Orchestration",
                        "Observability",
                        "SLA/SLO Monitoring",
                        "Incident Readiness",
                        "Failure Recovery",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="panel-badge text-xs">
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
              Engineering <span className="section-accent">Experience</span>
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  company: "OOEAN IT Solutions Limited",
                  role: "Lead Backend Engineer / Backend Architect",
                  period: "2024 - Present",
                  location: "Katampe, Abuja",
                  achievements: [
                    "Designed backend architecture for identity and fintech workflows with secure API boundaries and service-level reliability considerations",
                    "Built distributed service components using NestJS and Node.js with PostgreSQL data models and asynchronous processing paths",
                    "Defined Docker-based deployment workflows with CI/CD guardrails and environment isolation",
                    "Introduced operational traceability, observability baselines, and production incident readiness practices",
                  ],
                },
                {
                  company: "Barnksforte Technology Limited",
                  role: "Senior Backend Engineer",
                  period: "08/2023 - Present",
                  location: "FCT, Abuja",
                  achievements: [
                    "Designed and implemented distributed services using NestJS and Go with secure API boundaries",
                    "Optimized AWS workloads and reduced infrastructure cost while preserving service reliability and deployment consistency",
                    "Built scalable secure APIs for internal products, partner integrations, and transactional workflows",
                    "Implemented ETL pipelines for large-scale data imports, reconciliation, and asynchronous processing",
                    "Contributed to cross-platform clients integrated with backend event workflows and real-time delivery paths",
                  ],
                },
                {
                  company: "Alliance Consulting & Digital Solutions Limited",
                  role: "Specialist, Application Development",
                  period: "04/2022 - 08/2023",
                  location: "Lagos, Ikeja",
                  achievements: [
                    "Developed cloud-based product features using Node.js, .NET, and React Native",
                    "Led backend engineering for applications deployed on Azure",
                    "Built secure APIs and integration services for enterprise systems",
                    "Participated in Agile delivery with architecture and release planning",
                    "Implemented offline synchronization flows for field operations",
                  ],
                },
                {
                  company: "James Cubitt Resources",
                  role: "Assistant Manager, Web & Lead Mobile Application Developer",
                  period: "10/2021 - 03/2022",
                  location: "Lagos, Ikoyi",
                  achievements: [
                    "Developed backend modules with Laravel and strong relational data modeling",
                    "Built API integrations for mobile and web client workloads",
                    "Collaborated with product and operations teams to scope delivery milestones",
                  ],
                },
                {
                  company: "Information Connectivity Solutions Limited",
                  role: "Lead Mobile Application Developer",
                  period: "10/2018 - 09/2021",
                  location: "Lagos, Lekki",
                  achievements: [
                    "Built native mobile applications with offline-first architecture",
                    "Supported backend optimization for Laravel-based services and SQL workloads",
                    "Coordinated QA and release processes with measurable stability improvements",
                  ],
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="panel-card transition-all duration-300">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="mb-2 lg:mb-0">
                          <CardTitle className="mb-2 text-lg text-[#F8FAFC] sm:text-xl">
                            {job.role}
                          </CardTitle>
                          <CardDescription className="text-base font-semibold text-[#60A5FA] sm:text-lg">
                            {job.company}
                          </CardDescription>
                        </div>
                        <div className="text-left lg:text-right">
                          <p className="text-sm text-[#94A3B8] sm:text-base">{job.period}</p>
                          <p className="text-xs text-[#94A3B8] sm:text-sm">{job.location}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-[#94A3B8] sm:text-base">
                            <span className="mr-2 flex-shrink-0 text-[#60A5FA]">•</span>
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
        className="panel-section relative z-10 px-4 py-16 sm:px-6 sm:py-20"
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
              <span className="section-accent">
                Solutions
              </span>
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-[#94A3B8] sm:mb-16 sm:text-xl">
              Delivered biometric capture, OCR, and identity management
              components for regulated enrollment workflows, with ICAO-aligned
              imaging, NIST-compliant validation, and secure processing
              pipelines.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="panel-card transform-gpu h-full transition-colors">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Fingerprint className="h-10 w-10 flex-shrink-0 text-[#60A5FA] sm:h-12 sm:w-12" />
                      <div>
                        <CardTitle className="text-xl text-[#F8FAFC] sm:text-2xl">
                          NIMC Biometric Capture
                        </CardTitle>
                        <CardDescription className="text-sm text-[#60A5FA] sm:text-base">
                          Identity Workflow Engineering
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 p-4 sm:p-6 pt-0">
                    <div>
                      <h4 className="mb-3 text-base font-semibold text-[#F8FAFC] sm:text-lg">
                        Technical Standards
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#60A5FA] sm:h-5 sm:w-5" />
                          <span className="text-sm text-[#94A3B8] sm:text-base">
                            WSQ Format
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#60A5FA] sm:h-5 sm:w-5" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            ICAO Standards
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#60A5FA] sm:h-5 sm:w-5" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            ISO 19794
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#60A5FA] sm:h-5 sm:w-5" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            NIST Compliant
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 text-base font-semibold text-[#F8FAFC] sm:text-lg">
                        Capture Capabilities
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start text-sm text-[#94A3B8] sm:text-base">
                          <span className="mr-2 flex-shrink-0 text-[#60A5FA]">
                            •
                          </span>
                          10-finger slap and rolled fingerprint capture
                        </li>
                        <li className="text-gray-300 flex items-start text-sm sm:text-base">
                          <span className="mr-2 flex-shrink-0 text-[#60A5FA]">
                            •
                          </span>
                          High-resolution facial photography (ICAO compliant)
                        </li>
                        <li className="text-gray-300 flex items-start text-sm sm:text-base">
                          <span className="mr-2 flex-shrink-0 text-[#60A5FA]">
                            •
                          </span>
                          Iris capture with liveness detection
                        </li>
                        <li className="text-gray-300 flex items-start text-sm sm:text-base">
                          <span className="mr-2 flex-shrink-0 text-[#60A5FA]">
                            •
                          </span>
                          Biometric validation with quality scoring and retry
                          workflow controls
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="panel-card transform-gpu h-full transition-colors">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Scan className="h-10 w-10 flex-shrink-0 text-[#60A5FA] sm:h-12 sm:w-12" />
                      <div>
                        <CardTitle className="text-xl text-[#F8FAFC] sm:text-2xl">
                          OCR & Document Recognition
                        </CardTitle>
                        <CardDescription className="text-sm text-[#60A5FA] sm:text-base">
                          Secure Identity Data Extraction
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 p-4 sm:p-6 pt-0">
                    <div>
                      <h4 className="mb-3 text-base font-semibold text-[#F8FAFC] sm:text-lg">
                        Document Types
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#60A5FA] sm:h-5 sm:w-5" />
                          <span className="text-sm text-[#94A3B8] sm:text-base">
                            National ID Cards
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#60A5FA] sm:h-5 sm:w-5" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            Passports
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#60A5FA] sm:h-5 sm:w-5" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            Driver's License
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#60A5FA] sm:h-5 sm:w-5" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            Birth Certificates
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 text-base font-semibold text-[#F8FAFC] sm:text-lg">
                        OCR Features
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start text-sm text-[#94A3B8] sm:text-base">
                          <span className="mr-2 flex-shrink-0 text-[#60A5FA]">
                            •
                          </span>
                          OCR pipelines for machine-readable field extraction
                        </li>
                        <li className="text-gray-300 flex items-start text-sm sm:text-base">
                          <span className="mr-2 flex-shrink-0 text-[#60A5FA]">
                            •
                          </span>
                          Document authenticity verification and confidence
                          thresholding
                        </li>
                        <li className="text-gray-300 flex items-start text-sm sm:text-base">
                          <span className="mr-2 flex-shrink-0 text-[#60A5FA]">
                            •
                          </span>
                          Real-time field validation and secure identity
                          workflow routing
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="panel-card transform-gpu transition-colors">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Shield className="h-8 w-8 flex-shrink-0 text-[#60A5FA] sm:h-10 sm:w-10" />
                      <div>
                        <CardTitle className="text-lg text-[#F8FAFC] sm:text-xl">
                          Contactless Biometrics
                        </CardTitle>
                        <CardDescription className="text-sm text-[#60A5FA] sm:text-base">
                          Multi-Channel Enrollment Clients
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <ul className="space-y-3">
                      <li className="flex items-start text-sm text-[#94A3B8] sm:text-base">
                        <span className="mr-2 flex-shrink-0 text-[#60A5FA]">
                          •
                        </span>
                        Facial recognition with liveness detection
                      </li>
                      <li className="text-gray-300 flex items-start text-sm sm:text-base">
                        <span className="mr-2 flex-shrink-0 text-[#60A5FA]">
                          •
                        </span>
                        Finger capture with liveness detection
                      </li>
                      <li className="text-gray-300 flex items-start text-sm sm:text-base">
                        <span className="mr-2 flex-shrink-0 text-[#60A5FA]">
                          •
                        </span>
                        Device-level validation integrated with backend quality
                        gates
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="panel-card transform-gpu transition-colors">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Database className="h-8 w-8 flex-shrink-0 text-[#60A5FA] sm:h-10 sm:w-10" />
                      <div>
                        <CardTitle className="text-lg text-[#F8FAFC] sm:text-xl">
                          Contact Biometrics
                        </CardTitle>
                        <CardDescription className="text-sm text-[#60A5FA] sm:text-base">
                          Enrollment Quality Assurance
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <ul className="space-y-3">
                      <li className="flex items-start text-sm text-[#94A3B8] sm:text-base">
                        <span className="mr-2 flex-shrink-0 text-[#60A5FA]">
                          •
                        </span>
                        Capacitive fingerprint sensors integration
                      </li>
                      <li className="text-gray-300 flex items-start text-sm sm:text-base">
                        <span className="mr-2 flex-shrink-0 text-[#60A5FA]">
                          •
                        </span>
                        Multi-spectral imaging for enhanced accuracy
                      </li>
                      <li className="text-gray-300 flex items-start text-sm sm:text-base">
                        <span className="mr-2 flex-shrink-0 text-[#60A5FA]">
                          •
                        </span>
                        Continuous quality checks and audit-friendly capture
                        metadata
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <div className="panel-card rounded-lg p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-bold text-[#F8FAFC] sm:text-2xl">
                  Delivery Context
                </h3>
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-[#60A5FA] sm:text-xl">
                      Distributed Operations
                    </h4>
                    <p className="text-sm text-[#94A3B8] sm:text-base">
                      Supported large-scale biometric enrollment and identity
                      management workflows across local and diaspora operations
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-[#60A5FA] sm:text-xl">
                      Secure Processing
                    </h4>
                    <p className="text-sm text-[#94A3B8] sm:text-base">
                      Implemented secure identity workflows with validation,
                      auditability, workflow controls, and quality-driven retry
                      paths
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-[#60A5FA] sm:text-xl">
                      Multi-Site Readiness
                    </h4>
                    <p className="text-sm text-[#94A3B8] sm:text-base">
                      Built enrollment components designed for distributed
                      field and center-based deployment with controlled sync
                      behavior
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
              <span className="section-accent">
                Engineering Projects
              </span>
            </h2>
            <p className="mx-auto mb-12 max-w-4xl text-center text-lg text-[#94A3B8] sm:text-xl">
              Selected work centered on backend platforms, secure identity
              workflows, distributed processing, and production-grade cloud
              delivery.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Ibile Hub",
                  problem:
                    "Government revenue and identity workflows needed a reliable backend platform across multiple channels.",
                  architecture:
                    "Built secure service modules with enterprise integration points, biometric workflow handling, and role-aware access patterns across backend boundaries.",
                  tech: ["Java", ".NET", "MSSQL", "Azure", "Biometrics APIs"],
                  considerations:
                    "Focused on data integrity, secure access control, and operational consistency across dependent systems.",
                  url: "https://punchng.com/ibile-hub-initiative-has-simplified-tax-collection-system-coker-lirs-director/",
                  gradient: "from-navy-600 to-navy-800",
                  image: "/assets/ibile.png",
                },
                {
                  title: "Leder Mobile App",
                  problem:
                    "Property capture teams required a resilient field system with offline-first operation and synchronized records.",
                  architecture:
                    "Implemented mobile capture clients backed by API and SQL services, with reliable sync, validation workflows, and field-ready data pipelines.",
                  tech: ["Java", "Laravel", "SQL", "GPS", "Android"],
                  considerations:
                    "Designed for field reliability, consistent geo-data handling, and secure record submission.",
                  url: "https://luc.lagosstate.gov.ng/home",
                  gradient: "from-navy-700 to-navy-900",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "TechPay",
                  problem:
                    "A fintech product required secure payment orchestration, partner integrations, and scalable transaction processing.",
                  architecture:
                    "Developed backend services around NestJS APIs with structured auth flows, transaction orchestration, and integration boundaries.",
                  tech: ["NestJS", "Node.js", "MSSQL", "Azure", "Secure APIs"],
                  considerations:
                    "Emphasized secure API design, transactional consistency, and compliance-aware integration patterns.",
                  url: "https://techpay.ng/",
                  gradient: "from-navy-600 to-navy-800",
                  image: "/assets/techpay.png",
                },
                {
                  title: "NIMC Self Service Portal",
                  problem:
                    "Identity record updates required secure public access with strong workflow validation and traceability.",
                  architecture:
                    "Implemented service-oriented backend modules using NestJS, PostgreSQL, Dockerized delivery, and AWS-managed components.",
                  tech: ["NestJS", "Node.js", "PostgreSQL", "AWS", "Docker"],
                  considerations:
                    "Applied encrypted data paths, role-based controls, and auditable update operations.",
                  url: "https://nimc.gov.ng/self-service-modifications/",
                  gradient: "from-navy-700 to-navy-900",
                  image: "/assets/nimc-portal.png",
                },
                {
                  title: "NIMC Assisted Enrollment Mobile",
                  problem:
                    "Enrollment officers needed robust mobile biometric capture with compliance-ready output and deferred sync.",
                  architecture:
                    "Built a native Android enrollment flow with WSQ generation, offline persistence, secure packaging, and backend validation hooks.",
                  tech: ["Kotlin", "Android", "SQLite", "WSQ", "Biometric SDKs"],
                  considerations:
                    "Handled device constraints, validation feedback loops, and secure identity payload packaging.",
                  url: "#",
                  gradient: "from-navy-600 to-navy-800",
                  image: "/assets/assisted.png",
                },
                {
                  title: "NIMC Assisted Enrollment Desktop",
                  problem:
                    "Desktop enrollment stations required stable biometric processing and controlled synchronization.",
                  architecture:
                    "Delivered Electron/Node.js desktop workflows integrated with biometric services, queue-driven sync, and controlled local persistence.",
                  tech: ["ElectronJS", "TypeScript", "Node.js", "SQLite", "Queues"],
                  considerations:
                    "Improved cross-platform stability, synchronization reliability, secure local data handling, and operational recovery paths.",
                  url: "#",
                  gradient: "from-navy-700 to-navy-900",
                  image: "/assets/desktop.png",
                },
                {
                  title: "Lagos State Revenue Portal",
                  problem:
                    "Revenue operations required a secure payment-enabled platform for public and internal stakeholders.",
                  architecture:
                    "Implemented backend modules for tax workflows, payment integration, and structured reporting paths.",
                  tech: [".NET MVC", "MSSQL", "Payment Integrations", "Secure APIs"],
                  considerations:
                    "Prioritized transaction integrity, access control, and long-term maintainability.",
                  url: "https://revenue.lagosstate.gov.ng/",
                  gradient: "from-navy-600 to-navy-800",
                  image: "/assets/lrp.png",
                },
                {
                  title: "Osun State Property System",
                  problem:
                    "Property taxation required dependable data capture, processing workflows, and secure backend access.",
                  architecture:
                    "Built service logic for tax calculations, record management, and operational workflows across web and mobile touchpoints.",
                  tech: ["Laravel", "Java", "Android", "SQL", "Workflow APIs"],
                  considerations:
                    "Focused on consistent tax computation, secure storage, and operational reliability.",
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
                  whileHover={{ y: -2 }}
                >
                  <Card className="panel-card group h-full transition-colors duration-300">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.01] sm:h-48"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-30 mix-blend-overlay`}
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="outline-badge text-xs">
                            {project.tech[0]}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <CardTitle className="mb-3 text-lg text-[#F8FAFC] transition-colors group-hover:text-[#60A5FA] sm:text-xl">
                          {project.title}
                        </CardTitle>
                        <div className="space-y-2">
                          <p className="text-sm text-[#94A3B8] sm:text-base">
                            <span className="font-medium text-[#60A5FA]">
                              Problem:
                            </span>{" "}
                            {project.problem}
                          </p>
                          <p className="text-sm text-[#94A3B8] sm:text-base">
                            <span className="font-medium text-[#60A5FA]">
                              Architecture:
                            </span>{" "}
                            {project.architecture}
                          </p>
                          <p className="text-sm text-[#94A3B8] sm:text-base">
                            <span className="font-medium text-[#60A5FA]">
                              Scalability/Security:
                            </span>{" "}
                            {project.considerations}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4">
                      <CardDescription className="text-xs uppercase tracking-[0.18em] text-[#94A3B8] sm:text-sm">
                        Technologies
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-[#1E293B] text-[#94A3B8] text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="secondary-button w-full text-xs sm:text-sm"
                        onClick={() => openInNewTab(project.url)}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Project Reference
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
              Contact{" "}
              <span className="section-accent">
                Details
              </span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-[#94A3B8] sm:mb-12 sm:text-xl">
              Open to senior backend, platform, and cloud engineering roles,
              especially teams building identity infrastructure, fintech
              systems, distributed backend platforms, and reliability-focused
              cloud services.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card
                  className="panel-card transform-gpu transition-colors"
                  onClick={openEmailClient}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <Mail className="mx-auto mb-4 h-6 w-6 text-[#60A5FA] sm:h-8 sm:w-8" />
                    <h3 className="mb-2 text-base font-semibold text-[#F8FAFC] sm:text-lg">
                      Email
                    </h3>
                    <p className="break-all text-sm text-[#94A3B8] sm:text-base">
                      ayomideogbede@yahoo.com
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card
                  className="panel-card transform-gpu transition-colors"
                  onClick={initiateCall}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <Phone className="mx-auto mb-4 h-6 w-6 text-[#60A5FA] sm:h-8 sm:w-8" />
                    <h3 className="mb-2 text-base font-semibold text-[#F8FAFC] sm:text-lg">
                      Phone
                    </h3>
                    <p className="text-sm text-[#94A3B8] sm:text-base">
                      +234 812 696 3575
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="panel-card transform-gpu transition-colors">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <MapPin className="mx-auto mb-4 h-6 w-6 text-[#60A5FA] sm:h-8 sm:w-8" />
                    <h3 className="mb-2 text-base font-semibold text-[#F8FAFC] sm:text-lg">
                      Location
                    </h3>
                    <p className="text-sm text-[#94A3B8] sm:text-base">
                      Katampe, Abuja, Nigeria
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="primary-button w-full sm:w-auto"
                onClick={openEmailClient}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Send Message
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="secondary-button w-full sm:w-auto"
                onClick={() => openInNewTab("https://www.github.com/ay4real")}
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="secondary-button w-full sm:w-auto"
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
      <footer className="relative z-10 border-t border-[#1E293B] px-4 py-6 sm:px-6 sm:py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm text-[#94A3B8] sm:text-base">
            © {new Date().getFullYear()} Ayomide Ogbede, C.itp, MCPN. Backend
            Engineer • Cloud-Native Systems • Identity Infrastructure
          </p>
          <p className="mt-2 text-xs text-[#94A3B8] sm:text-sm">
            Senior Backend Engineer • Distributed Systems • Secure API
            Platforms
          </p>
        </div>
      </footer>
    </div>
  );
}
