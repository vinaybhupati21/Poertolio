import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  CurvedArrow,
  WavyUnderline,
  SmileyFace,
  SketchArrowDown,
  DatabaseIcon,
  ChartIcon,
  MonitorIcon,
  CheckIcon,
} from "@/components/DecorativeElements";
import { Database, TrendingUp, Activity, Mail, Linkedin, Github, ChevronLeft, ChevronRight, Star } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {isInView ? count : 0}{suffix}
    </span>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Vinay's expertise in SQL Server optimization reduced our query times by 70%. His proactive monitoring saved us from multiple potential outages.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      rating: 5,
    },
    {
      text: "The Grafana dashboards Vinay built gave us real-time visibility we never had before. Game-changer for our operations team.",
      author: "Michael Rodriguez",
      role: "VP Engineering",
      rating: 5,
    },
    {
      text: "Migrating to the cloud seemed daunting, but Vinay managed it flawlessly with zero downtime. Exceptional technical skills and communication.",
      author: "Emily Watson",
      role: "Head of Infrastructure",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.div
            className="text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-foreground">Vinay</span>{" "}
            <span className="text-primary">Bhupathi</span>
          </motion.div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-about">
                About
              </a>
              <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-skills">
                Skills
              </a>
              <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-experience">
                Experience
              </a>
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-projects">
                Projects
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-contact">
                Contact
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <Badge variant="secondary" className="text-sm px-4 py-2" data-testid="badge-greeting">
              Hi, I'm Vinay Bhupathi
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="text-hero-title"
          >
            <span className="text-foreground">Database </span>
            <span className="text-primary italic relative inline-block">
              meets
              <WavyUnderline className="absolute -bottom-2 left-0 right-0 w-full h-4 text-accent" />
            </span>
            <br />
            <span className="text-foreground">Performance</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            data-testid="text-hero-subtitle"
          >
            I specialize in database administration, performance tuning, and transforming complex data
            into actionable business insights using tools like Qlik Sense and Grafana.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full"
              asChild
              data-testid="button-get-in-touch"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <SketchArrowDown className="w-16 h-20 text-muted-foreground" />
          </motion.div>
        </motion.div>

        <div className="absolute top-20 right-10 hidden lg:block">
          <CurvedArrow className="w-32 h-16 text-accent opacity-40" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8 text-center hover-elevate transition-transform duration-300" data-testid="card-stat-years">
                <div className="text-6xl md:text-7xl font-black text-primary mb-2" data-testid="text-stat-years">
                  5<span className="text-4xl">+</span>
                </div>
                <div className="text-lg font-semibold text-foreground mb-1" data-testid="text-stat-years-label">Years</div>
                <div className="text-sm text-muted-foreground">of Experience</div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 text-center hover-elevate transition-transform duration-300" data-testid="card-stat-servers">
                <div className="text-6xl md:text-7xl font-black text-secondary mb-2" data-testid="text-stat-servers">
                  50<span className="text-4xl">+</span>
                </div>
                <div className="text-lg font-semibold text-foreground mb-1" data-testid="text-stat-servers-label">Servers</div>
                <div className="text-sm text-muted-foreground">Managed Daily</div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 text-center hover-elevate transition-transform duration-300" data-testid="card-stat-uptime">
                <div className="text-6xl md:text-7xl font-black text-accent mb-2" data-testid="text-stat-uptime">
                  99.9<span className="text-4xl">%</span>
                </div>
                <div className="text-lg font-semibold text-foreground mb-1" data-testid="text-stat-uptime-label">Uptime</div>
                <div className="text-sm text-muted-foreground">Maintained</div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-testid="text-section-about">
              About <span className="text-primary italic">Me</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground" data-testid="text-about-intro">
                With over 5 years of hands-on experience, I am a dedicated and results-oriented data
                professional. My expertise spans the full spectrum of MS SQL Server administration—from
                installation and high-availability configuration to performance tuning and 24/7 support.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-about-passion">
                I thrive on ensuring data integrity, security, and optimal performance for critical systems.
                Beyond my DBA role, I am passionate about leveraging data to drive business growth.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-about-qlik">
                As a Qlik Analyst, I develop end-to-end reporting solutions, provide daily business
                intelligence updates, and contribute strategic ideas based on data-driven insights. My
                experience with Grafana for real-time monitoring further bridges the gap between raw data
                and actionable intelligence.
              </p>
            </div>

            <div className="relative">
              <Card className="p-8 space-y-4" data-testid="card-expertise">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" data-testid="text-expertise-database-title">Database Expert</h3>
                    <p className="text-sm text-muted-foreground" data-testid="text-expertise-database-desc">
                      Master of MS SQL Server with deep expertise in performance optimization
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" data-testid="text-expertise-analytics-title">Analytics Pro</h3>
                    <p className="text-sm text-muted-foreground" data-testid="text-expertise-analytics-desc">
                      Transform complex data into clear insights with Qlik Sense
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Activity className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" data-testid="text-expertise-monitoring-title">Monitoring Specialist</h3>
                    <p className="text-sm text-muted-foreground" data-testid="text-expertise-monitoring-desc">
                      Real-time system monitoring and alerting with Grafana
                    </p>
                  </div>
                </div>
              </Card>
              <div className="absolute -top-4 -right-4 hidden lg:block">
                <SmileyFace className="w-16 h-16 text-accent opacity-30" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-testid="text-section-skills">
              Technical <span className="text-primary italic">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-subtitle">
              A comprehensive toolkit for database excellence and business intelligence
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: DatabaseIcon, title: "Database Admin", color: "primary", skills: ["Installation & Config", "Backup & Restore", "High Availability", "Performance Tuning", "Security Management", "24/7 Support"] },
              { icon: ChartIcon, title: "Business Intelligence", color: "secondary", skills: ["Qlik Sense Dev", "End-to-End Reporting", "Business Logic", "Data Modeling"] },
              { icon: MonitorIcon, title: "Monitoring & Alerts", color: "accent", skills: ["Grafana Dashboards", "Real-time Alerting", "Performance Counters"] },
              { icon: Database, title: "Other Technologies", color: "chart-4", skills: ["MongoDB Admin", "Database Design", "Query Optimization", "Migration"] },
            ].map((category, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card className="p-6 h-full hover-elevate transition-all duration-300" data-testid={`card-skill-${idx}`}>
                  <div className={`p-4 bg-${category.color}/10 rounded-lg w-fit mb-4`}>
                    <category.icon className={`w-12 h-12 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4" data-testid={`text-skill-title-${idx}`}>{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIdx) => (
                      <li key={skillIdx} className="text-sm text-muted-foreground flex items-start gap-2" data-testid={`text-skill-${idx}-${skillIdx}`}>
                        <CheckIcon className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-testid="text-section-experience">
              Work <span className="text-primary italic">Experience</span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-experience-current">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" data-testid="text-job-title-current">Senior SQL DBA / Qlik Analyst</h3>
                    <p className="text-lg text-primary font-semibold" data-testid="text-company-current">Future Company Inc.</p>
                  </div>
                  <Badge variant="secondary" className="w-fit mt-2 md:mt-0" data-testid="badge-date-current">
                    2021 - Present
                  </Badge>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3" data-testid="text-achievement-current-0">
                    <CheckIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Administered and maintained over 50 mission-critical MS SQL Server instances, ensuring 99.9% uptime</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="text-achievement-current-1">
                    <CheckIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Developed and automated key business reports in Qlik Sense, reducing manual reporting time by 80%</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="text-achievement-current-2">
                    <CheckIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Designed and implemented Grafana dashboards for real-time performance monitoring of database servers</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="text-achievement-current-3">
                    <CheckIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Led a successful database upgrade project from SQL Server 2016 to 2019 with zero downtime</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-experience-previous">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" data-testid="text-job-title-previous">MS SQL Database Administrator</h3>
                    <p className="text-lg text-primary font-semibold" data-testid="text-company-previous">Previous Tech Solutions</p>
                  </div>
                  <Badge variant="secondary" className="w-fit mt-2 md:mt-0" data-testid="badge-date-previous">
                    2018 - 2021
                  </Badge>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3" data-testid="text-achievement-previous-0">
                    <CheckIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Managed daily database operations including backups, restores, and user access control</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="text-achievement-previous-1">
                    <CheckIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Collaborated with development teams to optimize SQL queries, improving application response times by 30%</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="text-achievement-previous-2">
                    <CheckIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Configured and managed AlwaysOn Availability Groups for high availability and disaster recovery</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="text-achievement-previous-3">
                    <CheckIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Provided 24/7 on-call support for production database environments</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-testid="text-section-projects">
              Key <span className="text-primary italic">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-subtitle">
              Transformative solutions that drive real business impact
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8 h-full hover-elevate transition-all duration-300" data-testid="card-project-monitoring">
                <div className="p-4 bg-accent/10 rounded-lg w-fit mb-6">
                  <Activity className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4" data-testid="text-project-monitoring-title">Real-Time Infrastructure Monitoring</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="text-project-monitoring-desc">
                  Created a comprehensive monitoring solution using Grafana to visualize server health,
                  query performance, and resource utilization in real-time. Configured alerts for proactive
                  issue resolution.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" data-testid="badge-tech-grafana">Grafana</Badge>
                  <Badge variant="secondary" data-testid="badge-tech-sql">MS SQL Server</Badge>
                  <Badge variant="secondary" data-testid="badge-tech-perf">Performance Counters</Badge>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 h-full hover-elevate transition-all duration-300" data-testid="card-project-dashboard">
                <div className="p-4 bg-secondary/10 rounded-lg w-fit mb-6">
                  <TrendingUp className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4" data-testid="text-project-dashboard-title">Sales Performance Dashboard</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="text-project-dashboard-desc">
                  Developed an interactive Qlik Sense dashboard for the sales department, providing insights
                  into KPIs, regional performance, and product trends, contributing to a 10% increase in
                  sales efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" data-testid="badge-tech-qlik">Qlik Sense</Badge>
                  <Badge variant="secondary" data-testid="badge-tech-modeling">Data Modeling</Badge>
                  <Badge variant="secondary" data-testid="badge-tech-logic">Business Logic</Badge>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 h-full hover-elevate transition-all duration-300" data-testid="card-project-migration">
                <div className="p-4 bg-primary/10 rounded-lg w-fit mb-6">
                  <Database className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4" data-testid="text-project-migration-title">Database Migration to Cloud</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="text-project-migration-desc">
                  Contributed to a project migrating on-premise SQL Server databases to a cloud environment,
                  focusing on data integrity, minimal downtime window, and post-migration performance
                  validation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" data-testid="badge-tech-mssql">MS SQL Server</Badge>
                  <Badge variant="secondary" data-testid="badge-tech-azure">Azure SQL</Badge>
                  <Badge variant="secondary" data-testid="badge-tech-migration">Data Migration</Badge>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-testid="text-section-testimonials">
              What <span className="text-primary italic">People Say</span>
            </h2>
          </motion.div>

          <Card className="p-12 relative" data-testid="card-testimonial">
            <div className="flex justify-center mb-6" data-testid="rating-stars">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-center leading-relaxed mb-8 text-foreground" data-testid="text-testimonial-quote">
              "{testimonials[currentTestimonial].text}"
            </p>

            <div className="text-center">
              <p className="font-bold text-lg" data-testid="text-testimonial-author">{testimonials[currentTestimonial].author}</p>
              <p className="text-muted-foreground" data-testid="text-testimonial-role">{testimonials[currentTestimonial].role}</p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
                data-testid="button-testimonial-prev"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
                data-testid="button-testimonial-next"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="absolute -top-6 -left-6 hidden lg:block">
              <SmileyFace className="w-20 h-20 text-accent opacity-20" />
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-muted/30 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-testid="text-section-contact">
              Get In <span className="text-primary italic">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-contact-subtitle">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you
              have any questions or just want to connect!
            </p>

            <Card className="p-12 mb-8">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Mail className="w-6 h-6 text-primary" />
                <a
                  href="mailto:vinay.bhupathi@gmail.com"
                  className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors"
                  data-testid="link-email"
                >
                  vinay.bhupathi@gmail.com
                </a>
              </div>

              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full" asChild data-testid="button-linkedin">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild data-testid="button-github">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </Card>

            <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild data-testid="button-email-cta">
              <a href="mailto:vinay.bhupathi@gmail.com">Send me an email</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-muted-foreground">
          <p>© 2024 Vinay Bhupathi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}