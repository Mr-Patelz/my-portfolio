import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink, 
  Database, 
  Cloud, 
  Code, 
  Award, 
  GraduationCap, 
  ChevronRight,
  Terminal,
  Cpu,
  Layers,
  Server,
  Send,
  Menu,
  X,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useState, useEffect } from "react";

const SectionHeader = ({ title, icon: Icon, id }: { title: string; icon: any; id?: string }) => (
  <div className="flex items-center gap-3 mb-6 md:mb-8" id={id}>
    <div className="p-2 bg-gcp-blue/10 rounded-lg shrink-0">
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-gcp-blue" />
    </div>
    <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-800 uppercase">{title}</h2>
  </div>
);

const ExperienceCard = ({ 
  project, 
  role, 
  description, 
  tech, 
  isLast 
}: { 
  project: string; 
  role: string; 
  description: string[]; 
  tech: string;
  isLast?: boolean;
}) => (
  <div className="relative pl-6 md:pl-8 pb-10 md:pb-12 group">
    {!isLast && <div className="absolute left-[11px] top-8 bottom-0 w-px bg-slate-200 group-hover:bg-gcp-blue/30 transition-colors" />}
    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-gcp-blue bg-white z-10 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-gcp-blue" />
    </div>
    <div className="glass-card p-5 md:p-6 hover:shadow-md transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-1">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">{project}</h3>
          <p className="text-gcp-blue font-medium text-sm md:text-base">{role}</p>
        </div>
      </div>
      <ul className="space-y-2.5 md:space-y-3 mb-5 md:mb-6">
        {description.map((item, idx) => (
          <li key={idx} className="flex gap-2.5 text-slate-600 text-sm md:text-base leading-relaxed">
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-slate-300 shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {tech.split(', ').map((t, idx) => (
          <span key={idx} className="px-2.5 py-0.5 md:px-3 md:py-1 bg-slate-100 text-slate-600 text-[10px] md:text-xs font-mono rounded-full border border-slate-200">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const SkillGroup = ({ title, skills, icon: Icon }: { title: string; skills: string[]; icon: any }) => (
  <div className="glass-card p-5 md:p-6">
    <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold">
      <Icon className="w-5 h-5 text-gcp-blue shrink-0" />
      <span className="text-sm md:text-base">{title}</span>
    </div>
    <div className="flex flex-wrap gap-1.5 md:gap-2">
      {skills.map((skill, idx) => (
        <span key={idx} className="px-2.5 py-1 md:px-3 md:py-1.5 bg-white text-slate-700 text-xs md:text-sm rounded-lg border border-slate-200 shadow-sm hover:border-gcp-blue/30 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen selection:bg-gcp-blue/20">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gcp-blue z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-white/95 backdrop-blur-md shadow-sm py-3 md:py-4" : "bg-transparent py-5 md:py-6"}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-6 flex justify-between items-center">
          <a href="#" className={`text-xl font-bold tracking-tight transition-colors ${isScrolled || isMenuOpen ? "text-slate-900" : "text-white"}`}>
            JM<span className="text-gcp-blue">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-gcp-blue ${isScrolled ? "text-slate-600" : "text-slate-300"}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 bg-gcp-blue text-white text-sm font-semibold rounded-full hover:bg-gcp-blue/90 transition-all shadow-md shadow-gcp-blue/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-xl transition-all active:scale-95 ${isScrolled || isMenuOpen ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-0 top-[60px] w-full bg-white z-40 md:hidden overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-6 h-full">
                {navLinks.map((link, idx) => (
                  <motion.a 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={link.name} 
                    href={link.href} 
                    className="text-2xl font-bold text-slate-800 flex items-center justify-between group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="text-slate-300 group-hover:text-gcp-blue transition-colors" />
                  </motion.a>
                ))}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto pb-20"
                >
                  <div className="flex flex-col gap-4">
                    <a 
                      href="#contact" 
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full py-4 bg-gcp-blue text-white text-center font-bold rounded-2xl shadow-lg shadow-gcp-blue/20 block"
                    >
                      Get in Touch
                    </a>
                  </div>
                  <div className="flex justify-center gap-6 mt-8">
                    <a href="https://linkedin.com/in/jagapathi-patel-7457b5198" className="p-3 bg-slate-100 rounded-xl text-slate-600">
                      <Linkedin size={20} />
                    </a>
                    <a href="mailto:jagapathipatels@gmail.com" className="p-3 bg-slate-100 rounded-xl text-slate-600">
                      <Mail size={20} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-slate-900 text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4285F4_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="section-container relative z-10 pt-32 pb-16 md:pt-48 md:pb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gcp-blue/20 border border-gcp-blue/30 text-gcp-blue text-xs md:sm font-medium mb-6">
              <Cloud className="w-4 h-4" />
              <span>GCP Data Engineer</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Jagapathi <span className="text-gcp-blue">Modhulakari</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Building scalable ETL/ELT and data pipelines for enterprise banking clients using Google Cloud Platform. 
              Specialized in batch processing, cloud migrations, and production data platform optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gcp-blue text-white font-bold rounded-2xl shadow-lg shadow-gcp-blue/20 flex items-center justify-center gap-2 hover:bg-gcp-blue/90 transition-all active:scale-95"
              >
                Hire Me
                <ArrowRight size={20} />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 text-slate-300 mt-12">
              <a href="mailto:jagapathipatels@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-gcp-blue/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm md:text-base">jagapathipatels@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 group">
                <div className="p-2.5 bg-white/5 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm md:text-base">Hyderabad, India</span>
              </div>
              <a href="https://linkedin.com/in/jagapathi-patel-7457b5198" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-gcp-blue/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-sm md:text-base">LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="space-y-0">
        {/* Summary Section */}
        <section className="bg-white border-b border-slate-200">
          <div className="section-container py-12 md:py-16">
            <motion.div {...fadeIn} className="max-w-4xl">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed italic border-l-4 border-gcp-blue/30 pl-6">
                "Google Cloud Data Engineer with 3.7+ years of experience building scalable ETL/ELT and data pipelines for enterprise banking clients. 
                Proven experience migrating enterprise applications and data pipelines from on-premise environments to GCP while improving performance and operational stability."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-slate-50 scroll-mt-20" id="experience">
          <div className="section-container py-16 md:py-20">
            <SectionHeader title="Work Experience" icon={Database} />
            
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-200 shrink-0">
                  <span className="text-xl font-bold text-slate-800">TCS</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800">Tata Consultancy Services</h3>
                  <p className="text-xs md:text-sm text-slate-500">Aug 2022 – Present | Hyderabad, India</p>
                </div>
              </div>

              <div className="space-y-0">
                <ExperienceCard 
                  project="Project 2: Lloyds Bank"
                  role="Data Engineer"
                  description={[
                    "Migrated on-prem OBMI data pipelines to Google Cloud Platform, enabling scalable cloud-based batch data processing.",
                    "Built ingestion pipelines using batch ingestion process framework for performing data quality validation, format standardization, ORC conversion, and loading datasets into Big Query raw tables.",
                    "Implemented curation pipelines applying business transformations using DataProc to generate curated datasets for analytics and reporting.",
                    "Enabled hybrid data integration by transferring curated datasets via outbound FTH jobs to on-prem Global Data Warehouse (GDW).",
                    "Optimized Dataproc cluster configurations and processing logic, improving pipeline performance and reducing runtime by 30–40%."
                  ]}
                  tech="Dataproc, Cloud Composer, DAG’s, BigQuery, Cloud Storage, Cloud Logging, Monitoring, Jenkins, Harness, Git, TWSD, Saviynt"
                />
                <ExperienceCard 
                  project="Project 1: Deutsche Bank"
                  role="Data Engineer"
                  isLast
                  description={[
                    "Developed scalable ETL pipelines to ingest structured files from SFTP sources into GCS landing zones.",
                    "Implemented business transformation pipelines using Cloud Dataflow to cleanse and load curated datasets into BigQuery.",
                    "Designed orchestration DAGs using Cloud Composer for automated pipeline scheduling and dependency handling.",
                    "Implemented schema validations and data quality checks to ensure reliable analytics consumption.",
                    "Supported CI/CD deployment workflows using Git, Jenkins and Spinnaker for automated releases."
                  ]}
                  tech="Dataflow, BigQuery, GCS, Composer, Cloud Logging, Cloud Monitoring, Jenkins, GitHub, Spinnaker"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white scroll-mt-20" id="skills">
          <div className="section-container py-16 md:py-20">
            <SectionHeader title="Technical Skills" icon={Code} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <SkillGroup 
                title="Cloud Services" 
                skills={["BigQuery", "Cloud Dataflow", "Dataproc", "Data-fusion", "Cloud Composer", "Cloud Storage", "Pub/Sub", "Compute Engine", "IAM", "Kubernetes"]} 
                icon={Cloud}
              />
              <SkillGroup 
                title="Data Engineering" 
                skills={["ETL/ELT Pipelines", "Batch Processing", "Data Quality Validation", "Data Transformation", "Workflow Orchestration", "TWSD", "Saviynt"]} 
                icon={Database}
              />
              <SkillGroup 
                title="Programming" 
                skills={["Python", "SQL", "Java", "Linux"]} 
                icon={Terminal}
              />
              <SkillGroup 
                title="DevOps & CI/CD" 
                skills={["Jenkins", "Harness", "Spinnaker", "Git", "Artifact Registry"]} 
                icon={Cpu}
              />
              <SkillGroup 
                title="Infrastructure" 
                skills={["Performance Optimization", "Monitoring", "Troubleshooting", "Production Support"]} 
                icon={Server}
              />
              <SkillGroup 
                title="Process" 
                skills={["CR Management", "SLA Compliance", "Root Cause Analysis", "Hybrid Integration"]} 
                icon={Layers}
              />
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="bg-slate-900 text-white scroll-mt-20" id="certifications">
          <div className="section-container py-16 md:py-20">
            <div className="flex items-center gap-3 mb-10 md:mb-12">
              <div className="p-2 bg-white/10 rounded-lg shrink-0">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-gcp-yellow" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight uppercase">GCP Certifications</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                "Google Professional Cloud Architect",
                "Google Cloud Professional DevOps Engineer",
                "Google Cloud Associate Cloud Engineer",
                "Google Cloud Associate Data Practitioner"
              ].map((cert, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeIn}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-5 md:p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gcp-yellow/20 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-gcp-yellow" />
                  </div>
                  <span className="text-base md:text-lg font-medium leading-tight">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white scroll-mt-20" id="education">
          <div className="section-container py-16 md:py-20">
            <SectionHeader title="Education" icon={GraduationCap} />
            <div className="space-y-4 md:space-y-6">
              <div className="glass-card p-6 md:p-8 flex flex-col sm:flex-row gap-5 md:gap-6 items-start">
                <div className="p-3 md:p-4 bg-slate-100 rounded-2xl shrink-0">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">Bachelor of Technology – Computer Science</h3>
                  <p className="text-sm md:text-base text-slate-500 mb-2">Sree Dattha Group of Institutions | 2019 – 2022</p>
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[10px] md:text-xs font-medium rounded-full">Graduated</div>
                </div>
              </div>
              <div className="glass-card p-6 md:p-8 flex flex-col sm:flex-row gap-5 md:gap-6 items-start">
                <div className="p-3 md:p-4 bg-slate-100 rounded-2xl shrink-0">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">Diploma – Computer Engineering</h3>
                  <p className="text-sm md:text-base text-slate-500 mb-2">Government Polytechnic College | 2016 – 2019</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-slate-50 scroll-mt-20" id="contact">
          <div className="section-container py-16 md:py-20">
            <SectionHeader title="Get In Touch" icon={Mail} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
              <motion.div {...fadeIn}>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-tight">Let's build something scalable together.</h3>
                <p className="text-slate-600 mb-8 text-base md:text-lg leading-relaxed">
                  I'm always open to discussing data engineering projects, cloud architecture, or production support opportunities. 
                </p>
                
                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gcp-blue/10 flex items-center justify-center text-gcp-blue shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] md:text-sm text-slate-500 uppercase font-bold tracking-wider">Email</p>
                      <a href="mailto:jagapathipatels@gmail.com" className="text-base md:text-lg font-semibold text-slate-800 hover:text-gcp-blue transition-colors truncate block">
                        jagapathipatels@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gcp-blue/10 flex items-center justify-center text-gcp-blue shrink-0">
                      <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] md:text-sm text-slate-500 uppercase font-bold tracking-wider">LinkedIn</p>
                      <a href="https://linkedin.com/in/jagapathi-pat-7457b5198" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-semibold text-slate-800 hover:text-gcp-blue transition-colors truncate block">
                        linkedin.com/in/jagapathi-patel
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gcp-blue/10 flex items-center justify-center text-gcp-blue shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-sm text-slate-500 uppercase font-bold tracking-wider">Location</p>
                      <p className="text-base md:text-lg font-semibold text-slate-800">Hyderabad, India</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                {...fadeIn}
                className="glass-card p-6 md:p-8 bg-white"
              >
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-gcp-green/10 rounded-full flex items-center justify-center text-gcp-green mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-gcp-blue font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form 
                    className="space-y-5 md:space-y-6" 
                    action="https://formspree.io/f/your-form-id" // User needs to replace this
                    method="POST"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmitting(true);
                      const form = e.target as HTMLFormElement;
                      const data = new FormData(form);
                      try {
                        const response = await fetch("https://formspree.io/f/your-form-id", { // User needs to replace this
                          method: "POST",
                          body: data,
                          headers: {
                            'Accept': 'application/json'
                          }
                        });
                        if (response.ok) {
                          setIsSubmitted(true);
                          form.reset();
                        } else {
                          alert("Oops! There was a problem submitting your form");
                        }
                      } catch (error) {
                        alert("Oops! There was a problem submitting your form");
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold text-slate-700 uppercase">Name</label>
                        <input name="name" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gcp-blue focus:ring-2 focus:ring-gcp-blue/20 outline-none transition-all text-sm md:text-base" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold text-slate-700 uppercase">Email</label>
                        <input name="email" required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gcp-blue focus:ring-2 focus:ring-gcp-blue/20 outline-none transition-all text-sm md:text-base" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-slate-700 uppercase">Subject</label>
                      <input name="subject" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gcp-blue focus:ring-2 focus:ring-gcp-blue/20 outline-none transition-all text-sm md:text-base" placeholder="Project Inquiry" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-slate-700 uppercase">Message</label>
                      <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gcp-blue focus:ring-2 focus:ring-gcp-blue/20 outline-none transition-all resize-none text-sm md:text-base" placeholder="Hello, I'd like to talk about..." />
                    </div>
                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full py-3.5 md:py-4 bg-gcp-blue text-white font-bold rounded-xl hover:bg-gcp-blue/90 transition-all shadow-lg shadow-gcp-blue/20 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4 md:w-5 md:h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-white/5">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Jagapathi <span className="text-gcp-blue">Modhulakari</span></h2>
            <p className="text-sm md:text-base text-slate-400">GCP Data Engineer • Building the future of data.</p>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/jagapathi-patel-7457b5198" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 hover:text-gcp-blue hover:border-gcp-blue/30 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:jagapathipatels@gmail.com"
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 hover:text-gcp-blue hover:border-gcp-blue/30 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-slate-500 text-xs md:text-sm">
            © {new Date().getFullYear()} • Jagapathi Modhulakari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
