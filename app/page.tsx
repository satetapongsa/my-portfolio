"use client";

import { motion, useScroll, useSpring, useMotionTemplate, useMotionValue, Variants, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, Code2, Database, Cpu, Layers, Server, ArrowDown, ExternalLink, Briefcase, User, Code, FolderGit2, MessageSquareQuote, ArrowUp, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect, MouseEvent, useCallback } from "react";
import { TypeAnimation } from 'react-type-animation';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const config = {
  name: "SATETAPONG",
  titles: [
    "Full Stack Developer", 2000,
    "UI/UX Enthusiast", 2000,
    "Open Source Contributor", 2000,
    "Problem Solver", 2000,
  ],
  bio_short: "เปลี่ยนไอเดียให้เป็น Reality ด้วย Code คุณภาพสูง หลงใหลใน Performance และ User Experience ที่ยอดเยี่ยม",
  bio_long: "ผมคือ Developer ที่เชื่อว่า 'Code ที่ดีคือศิลปะ' ด้วยประสบการณ์ในการออกแบบระบบตั้งแต่ระดับ Microservices ไปจนถึง Pixel-Perfect Frontend ผมพร้อมที่จะรับมือกับความท้าทายทางเทคนิคที่ซับซ้อน และส่งมอบโซลูชันที่เหนือความคาดหมาย",
  links: {
    github: "https://github.com/satetapongsa",
    linkedin: "https://www.linkedin.com/in/satetapong-sanguansuk/",
    instagram: "https://www.instagram.com/manhideyi/",
    facebook: "https://www.facebook.com/wirburus.h.ng.lok.sinangein.kheiyw/",
    // ✅ แก้ไข: เป็น gmail เรียบร้อย
    email: "mailto:satetapongs@gmail.com",
  },
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Lines of Code", value: "1M+" },
    { label: "Coffees Consumed", value: "∞" },
  ],
  services: [
    {
      title: "Frontend Architecture",
      description: "ออกแบบโครงสร้าง Frontend ขนาดใหญ่ ให้ดูแลรักษาง่าย โหลดไว และรองรับ SEO",
      icon: <Layers size={24} />,
    },
    {
      title: "Scalable Backend",
      description: "พัฒนาระบบหลังบ้านที่รองรับคนใช้งานหลักแสน พร้อมระบบ Security มาตรฐานสากล",
      icon: <Database size={24} />,
    },
    {
      title: "DevOps & Cloud",
      description: "ตั้งค่า Server, CI/CD Pipeline และจัดการ Cloud Infrastructure (AWS/GCP) แบบอัตโนมัติ",
      icon: <Server size={24} />,
    },
    {
      title: "UI/UX Engineering",
      description: "เปลี่ยน Design ให้เป็น Code ที่ Pixel-perfect และมี Interaction ที่ลื่นไหลระดับ 60fps",
      icon: <Cpu size={24} />,
    },
  ],
  skillCategories: [
    {
      title: "Frontend powerhouse",
      skills: [
        { name: "React / Next.js", icon: <Code2 /> },
        { name: "TypeScript", icon: <Terminal /> },
        { name: "Tailwind CSS", icon: <Layers /> },
        { name: "Framer Motion", icon: <Cpu /> },
      ]
    },
    {
      title: "Backend & Data",
      skills: [
        { name: "Node.js / Nest", icon: <Server /> },
        { name: "PostgreSQL", icon: <Database /> },
        { name: "Redis", icon: <Database /> },
        { name: "GraphQL", icon: <Code /> },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: <Cpu /> },
        { name: "AWS", icon: <Server /> },
        { name: "Git / CI/CD", icon: <FolderGit2 /> },
      ]
    }
  ],
  experience: [
    {
      company: "Tech Giants Co.", role: "Senior Full Stack Developer", year: "2022 - Present",
      description: "นำทีมพัฒนาแพลตฟอร์ม SaaS ขนาดใหญ่ รองรับผู้ใช้ 100k+ คนต่อวัน, ออกแบบสถาปัตยกรรม Microservices ด้วย Node.js และ Kubernetes"
    },
    {
      company: "Innovative Solutions", role: "Frontend Lead", year: "2019 - 2022",
      description: "รับผิดชอบดูแล Design System ทั้งหมดของบริษัท, พัฒนา Web App ด้วย Next.js และลดเวลาโหลดหน้าเว็บลง 40%"
    },
    {
      company: "Freelance", role: "Web Developer", year: "2017 - 2019",
      description: "ส่งมอบโปรเจกต์ E-commerce และ Corporate Website คุณภาพสูงให้กับลูกค้ากว่า 20 รายทั่วโลก"
    },
  ],
  projects: [
    {
      title: "Project MYRIOX ENTERPRISE AI",
      description: "แพลตฟอร์ม AI Data Analytics ที่ทรงพลังที่สุด มาพร้อมแดชบอร์ดแสดงผลข้อมูลแบบ Real-time และระบบ AI Chat อัจฉริยะที่ช่วยวิเคราะห์ข้อมูลเชิงลึกได้อย่างแม่นยำ พร้อมการโต้ตอบที่ลื่นไหล",
      tech: ["Next.js 14", "Python", "TensorFlow", "FastAPI", "Socket.io", "Tailwind CSS"],
      link: "https://myriox.vercel.app/", 
      github: "https://github.com/satetapongsa/MYRIOX-AI", 
      featured: true,
      image: "/mai.png"
    },
    {
      title: "Nexus Cowork",
      description: "แพลตฟอร์มสำหรับเขียนโน้ตและจัดการงานที่มาพร้อมฟังก์ชันการสร้างพื้นที่ทำงาน (Workspace) แบบรวมศูนย์ ช่วยให้การจัดการโปรเจคในระดับ Enterprise เป็นเรื่องง่ายและมีประสิทธิภาพ",
      tech: ["React", "Web3.js", "Tailwind CSS", "Chart.js"],
      link: "https://nexus-cowork.vercel.app/", 
      github: "https://github.com/satetapongsa/Nexus-Cowork", 
      featured: false,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
    },
    {
      title: "DevPortfolio Ultimate",
      description: "เว็บไซต์พอร์ตโฟลิโอส่วนตัวเวอร์ชันล่าสุดที่ออกแบบมาอย่างพิถีพิถัน เน้นประสบการณ์ผู้ใช้ (UX) ที่ลื่นไหลด้วยแอนิเมชันขั้นสูง พร้อมการปรับแต่งประสิทธิภาพและ SEO เพื่อให้เข้าถึงผู้คนได้ดีที่สุด",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React", "tsparticles"],
      link: "https://satetapong-portfolio.vercel.app/", 
      github: "https://github.com/satetapongsa/my-portfolio", 
      featured: false,
      image: "/portfolio.png"
    },
  ],
  testimonials: [
    {
      name: "Sarah Johnson", role: "CTO at StartupX",
      quote: "DevName เป็นหนึ่งใน Developer ที่เก่งที่สุดที่ผมเคยร่วมงานด้วย เขาสามารถเปลี่ยน requirements ที่ซับซ้อนให้เป็นระบบที่ใช้งานง่ายและมีประสิทธิภาพสูง"
    },
    {
      name: "Michael Chen", role: "Product Manager",
      quote: "การทำงานกับเขาลื่นไหลมาก เขามีความเข้าใจทั้งในมุมมองของ Tech และ Business ทำให้โปรเจกต์สำเร็จลุล่วงไปได้ด้วยดีเสมอ"
    }
  ]
};

const fadeInUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const staggerContainer: Variants = { visible: { transition: { staggerChildren: 0.15 } } };

export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    return scrollY.onChange((latest) => setIsScrolled(latest > 100));
  }, [scrollY]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <main ref={containerRef} onMouseMove={handleMouseMove} className="min-h-screen bg-[#050505] text-white relative overflow-hidden scroll-smooth selection:bg-purple-500/30">

      <DevLogo />
      <BackToTopButton isScrolled={isScrolled} onClick={scrollToTop} />

      {/* --- 🌟 BACKGROUND SYSTEMS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
              },
              modes: { grab: { distance: 150, links: { opacity: 0.5 } } },
            },
            particles: {
              color: { value: ["#a855f7", "#3b82f6"] },
              links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.1, width: 1 },
              move: { enable: true, speed: 1, direction: "none", outModes: { default: "bounce" } },
              number: { density: { enable: true, area: 800 }, value: 60 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <Spotlight mouseX={mouseX} mouseY={mouseY} />
      </div>

      {/* --- 🧭 FLOATING NAVBAR --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : -100, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-4 inset-x-0 mx-auto max-w-fit z-50 px-6 py-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-lg shadow-lg flex items-center gap-6 text-sm font-mono"
      >
        <NavLink href="#about" icon={<User size={16} />} label="About" />
        <NavLink href="#services" icon={<Layers size={16} />} label="Services" />
        <NavLink href="#projects" icon={<Code size={16} />} label="Work" />
        <div className="h-4 w-[1px] bg-white/20"></div>
        <NavLink href={config.links.github} icon={<Github size={16} />} label="Git" external />
      </motion.nav>

      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-5xl">

        {/* --- 🦸‍♂️ SECTION 1: HERO --- */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center pt-20 pb-20 relative">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8 relative z-20">

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/50 border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)] backdrop-blur-md text-sm text-green-400 font-mono cursor-crosshair">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>System Online. Ready to Code.</span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1 variants={fadeInUp} className="text-7xl md:text-9xl font-extrabold tracking-tighter">
                Hi, I'm <span className="relative inline-block">
                  <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 opacity-70"></span>
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">{config.name}</span>
                </span>
              </motion.h1>
              <motion.div variants={fadeInUp} className="text-2xl md:text-4xl font-light text-gray-300 h-[40px] flex justify-center items-center font-mono">
                <span>Here to be your&nbsp;</span>
                <TypeAnimation sequence={config.titles} wrapper="span" speed={50} repeat={Infinity} className="font-bold text-purple-400" />
              </motion.div>
            </div>

            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-gray-400 text-xl leading-relaxed font-light">{config.bio_short}</motion.p>

            {/* ✅✅✅ NEW: SOCIAL BAR ABOVE BUTTONS ✅✅✅ */}
            <motion.div variants={fadeInUp} className="flex gap-6 justify-center items-center mt-4 mb-4">
              <SocialIconBtn href={config.links.github} icon={<Github size={22} />} />
              <SocialIconBtn href={config.links.linkedin} icon={<Linkedin size={22} />} />
              <SocialIconBtn href={config.links.facebook} icon={<Facebook size={22} />} />
              <SocialIconBtn href={config.links.instagram} icon={<Instagram size={22} />} />
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-5">
              <MainButton href="#projects" icon={<Code />} label="View My Work" primary />
              {/* ปุ่มนี้จะทำงานถูกต้องแล้วครับ */}
              <MainButton href={config.links.email} icon={<Mail />} label="Get In Touch" isCopy />
            </motion.div>

          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 15, 0] }} transition={{ delay: 2.5, duration: 2, repeat: Infinity }} className="absolute bottom-10 text-gray-500 flex flex-col items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest">Scroll Down</span><ArrowDown size={24} className="text-purple-500" />
          </motion.div>
        </section>

        {/* --- 📊 SECTION 1.5: IMPACT STATS --- */}
        <section className="py-10 border-y border-white/5 bg-white/[0.02]">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {config.stats.map((stat, index) => (<StatsItem key={index} stat={stat} index={index} />))}
          </motion.div>
        </section>

        {/* --- 🧠 SECTION 2: ABOUT & CATEGORIZED SKILLS --- */}
        <section id="about" className="py-32 relative">
          <SectionHeader title="About Me" icon={<User />} subtitle="ทำความรู้จักตัวตนและสกิลของผม" />
          <div className="grid lg:grid-cols-5 gap-12 items-start mt-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-2 relative group rounded-3xl p-[1px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 z-10 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-xs text-right pointer-events-none"><p>class Developer {"{"}</p><p>&nbsp;&nbsp;this.passion = true;</p><p>{"}"}</p></div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4"><Terminal size={20} className="text-purple-400 group-hover:text-cyan-400 transition-colors" /> The Origin Story</h3>
                <p className="text-gray-300 leading-relaxed text-lg font-light group-hover:text-white transition-colors">{config.bio_long}</p>
              </div>
            </motion.div>
            <div className="lg:col-span-3 space-y-8">
              {config.skillCategories.map((category, catIndex) => (
                <motion.div key={catIndex} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h4 className="text-lg font-mono text-purple-300 mb-4 flex items-center gap-2"><span className="h-[1px] w-4 bg-purple-500 inline-block"></span> {category.title}</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {category.skills.map((skill, index) => (<SkillCard key={index} skill={skill} />))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 🛠️ SECTION 2.5: SERVICES --- */}
        <section id="services" className="py-20 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 text-center">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2"><Layers className="text-purple-400" /> Area of Expertise</h3>
            <p className="text-gray-400">มากกว่าแค่เขียนโค้ด คือการส่งมอบโซลูชันที่ตอบโจทย์ธุรกิจ</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.services.map((service, index) => (<ServiceCard key={index} service={service} index={index} />))}
          </motion.div>
        </section>

        {/* --- 💼 SECTION 3: EXPERIENCE TIMELINE --- */}
        <section id="experience" className="py-32 relative">
          <SectionHeader title="Experience" icon={<Briefcase />} subtitle="เส้นทางการทำงานและความสำเร็จในอดีต" />
          <div className="mt-20 relative max-w-3xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent opacity-30 md:-translate-x-1/2"></div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="space-y-12">
              {config.experience.map((job, index) => (<TimelineItem key={index} job={job} index={index} />))}
            </motion.div>
          </div>
        </section>

        {/* --- 🚀 SECTION 4: PROJECTS (Updated with Images) --- */}
        <section id="projects" className="py-32 relative">
          <SectionHeader title="Featured Projects" icon={<FolderGit2 />} subtitle="ผลงานระดับ Masterpiece ที่คัดสรรมาแล้ว" />
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {config.projects.map((project, index) => (<ProjectCard key={index} project={project} index={index} />))}
          </div>
        </section>

        {/* --- 💬 SECTION 4.5: TESTIMONIALS --- */}
        <section className="py-32 relative border-t border-white/5">
          <SectionHeader title="Testimonials" icon={<MessageSquareQuote />} subtitle="เสียงตอบรับจากผู้ที่เคยร่วมงานด้วย" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {config.testimonials.map((item, index) => (<TestimonialCard key={index} item={item} />))}
          </motion.div>
        </section>

        {/* --- 📬 SECTION 5: FOOTER --- */}
        <section className="py-40 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          <motion.h3 initial="hidden" whileInView="visible" variants={fadeInUp} className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-6">Ready to create something <br /> extraordinary?</motion.h3>
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="pt-8">
            <MainButton href={config.links.email} icon={<Mail size={20} />} label="Start a Conversation" primary size="large" isCopy />
          </motion.div>
          <footer className="mt-32 pt-8 border-t border-white/5 text-gray-500 text-sm font-mono flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4"><Link href={config.links.github} className="hover:text-white"><Github size={18} /></Link><Link href={config.links.linkedin} className="hover:text-white"><Linkedin size={18} /></Link></div>
            <p>© {new Date().getFullYear()} {config.name} <span className="text-purple-500">::</span> Crafted with passion & code.</p>
          </footer>
        </section>
      </div>
    </main>
  );
}

// =========================================
// 🧩 SUB-COMPONENTS
// =========================================

// ✅ แก้ไข: ใช้ motion.a เพื่อให้ลิ้งค์ภายนอกทำงานได้สมบูรณ์
function SocialIconBtn({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all shadow-lg backdrop-blur-sm cursor-pointer flex items-center justify-center"
    >
      {icon}
    </motion.a>
  );
}

function TestimonialCard({ item }: { item: any }) {
  return (
    <motion.div variants={fadeInUp} className="p-8 bg-white/5 border border-white/10 rounded-3xl relative backdrop-blur-sm hover:border-purple-500/30 transition-colors">
      <div className="text-purple-500 mb-6 opacity-50"><MessageSquareQuote size={40} /></div>
      <p className="text-gray-300 italic text-lg leading-relaxed mb-6">"{item.quote}"</p>
      <div><h4 className="text-white font-bold">{item.name}</h4><p className="text-purple-400 text-sm font-mono">{item.role}</p></div>
    </motion.div>
  )
}

function BackToTopButton({ isScrolled, onClick }: { isScrolled: boolean, onClick: () => void }) {
  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} onClick={onClick} className="fixed bottom-8 right-8 z-50 p-3 bg-purple-600/80 hover:bg-purple-500 text-white rounded-full shadow-lg backdrop-blur-md border border-white/20">
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function DevLogo() {
  const variants: Variants = { idle: { y: [0, -5, 0], rotate: [0, 2, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }, hover: { scale: 1.2, rotate: 10, filter: "drop-shadow(0 0 15px rgba(139, 92, 246, 0.8))" } };
  const pathVariants: Variants = { idle: { pathLength: 1, opacity: 0.8 }, hover: { pathLength: [0, 1], opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } } };
  return (
    <div className="fixed top-6 left-6 z-50 mix-blend-screen pointer-events-auto">
      <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 cursor-pointer" variants={variants} initial="idle" animate="idle" whileHover="hover">
        <defs><linearGradient id="dev-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#22d3ee" /><stop offset="50%" stopColor="#a855f7" /><stop offset="100%" stopColor="#ec4899" /></linearGradient></defs>
        <motion.path d="M10 20L4 12L10 4" stroke="url(#dev-grad)" variants={pathVariants} />
        <motion.path d="M14 4L20 12L14 20" stroke="url(#dev-grad)" variants={pathVariants} />
        <motion.path d="M8 21L16 3" stroke="url(#dev-grad)" className="opacity-50" variants={pathVariants} />
      </motion.svg>
    </div>
  );
}

function Spotlight({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
  let springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  let springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  let background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(120, 50, 255, 0.15), transparent 80%)`;
  return <motion.div className="absolute inset-0 z-10 opacity-70 mix-blend-screen" style={{ background }} />;
}

function SectionHeader({ title, subtitle, icon }: { title: string, subtitle?: string, icon?: React.ReactNode }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center space-y-4 relative z-10">
      <div className="inline-flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 text-purple-400 mb-2 shadow-lg shadow-purple-500/10">{icon}</div>
      <h3 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">{title}</h3>
      {subtitle && <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">{subtitle}</p>}
    </motion.div>
  )
}

function SkillCard({ skill }: { skill: any }) {
  return (
    <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className="group relative rounded-2xl p-[1px] cursor-default">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500 pointer-events-none" />
      <div className="absolute inset-0 rounded-2xl animate-rainbow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-4 flex flex-col items-center gap-3 text-center border border-white/10 group-hover:border-transparent transition-colors z-10">
        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 text-gray-300 group-hover:text-white transition-colors shadow-sm">{skill.icon}</div>
        <span className="text-sm font-semibold text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 transition-all">{skill.name}</span>
      </div>
    </motion.div>
  )
}

function StatsItem({ stat, index }: { stat: any, index: number }) {
  return (
    <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:border-purple-500/50 transition-colors">
      <h4 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">{stat.value}</h4>
      <p className="text-gray-400 font-mono text-sm uppercase tracking-wider">{stat.label}</p>
    </motion.div>
  )
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  return (
    <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="group relative p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all">
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]"></div>
      <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">{service.icon}</div>
      <h4 className="relative z-10 text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{service.title}</h4>
      <p className="relative z-10 text-gray-400 leading-relaxed text-sm group-hover:text-gray-300">{service.description}</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.div>
  )
}

function TimelineItem({ job, index }: { job: any, index: number }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div variants={fadeInUp} className={`relative flex items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-1 flex flex-col items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-black border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10 relative">
          <div className="absolute inset-1 rounded-full bg-purple-400 animate-ping opacity-75"></div>
        </div>
      </div>
      <div className={`ml-20 md:ml-0 ${isEven ? 'md:mr-[50%]' : 'md:ml-[50%]'} md:px-8 w-full`}>
        <div className={`p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm relative hover:border-purple-500/30 transition-all group ${isEven ? 'md:text-right' : ''}`}>
          <span className="absolute top-0 -translate-y-1/2 inline-block px-3 py-1 text-xs font-mono font-bold bg-black border border-purple-500/50 text-purple-300 rounded-full shadow-sm">{job.year}</span>
          <h4 className="text-xl font-bold text-white mt-2 group-hover:text-purple-300 transition-colors">{job.role}</h4>
          <h5 className="text-purple-400 font-mono text-sm mb-4">{job.company}</h5>
          <p className="text-gray-400 text-sm leading-relaxed">{job.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

// 📌 Updated ProjectCard to support Images
function ProjectCard({ project, index }: { project: any, index: number }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      className={`group relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.2)] ${project.featured ? 'md:col-span-2 md:flex md:gap-8 bg-gradient-to-br from-[#111] to-[#0a0a0a]' : ''}`}
    >
      {/* --- 🖼️ Image Section --- */}
      <div
        className={`h-48 w-full relative overflow-hidden bg-gray-900 cursor-pointer ${project.featured ? 'md:h-auto md:w-2/5' : ''}`}
        onClick={() => setShowOptions(true)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>

        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-gray-300 backdrop-blur-md z-10 shadow-lg">
          {project.featured ? '🌟 Featured Build' : '📂 Project'}
        </div>

        {/* --- Selection Overlay --- */}
        <AnimatePresence>
          {showOptions && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="absolute inset-0 z-20 bg-black/70 flex flex-col items-center justify-center p-6 gap-4"
              onClick={(e: MouseEvent) => { e.stopPropagation(); setShowOptions(false); }}
            >
              <div className="text-center space-y-1 mb-2">
                <p className="text-xs font-mono text-purple-400 uppercase tracking-widest">Select Action</p>
                <h5 className="text-lg font-bold text-white">Project Details</h5>
              </div>

              <div className="flex flex-col w-full gap-3" onClick={(e: MouseEvent) => e.stopPropagation()}>
                {project.link !== "#" && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 px-4 py-3 bg-white text-black rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                    <ExternalLink size={18} /> Open Live Website
                  </motion.a>
                )}
                {project.github !== "#" && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-sm backdrop-blur-md hover:bg-white/20 transition-all"
                  >
                    <Github size={18} /> View on GitHub
                  </motion.a>
                )}
                {/* Fallback if both are # */}
               {project.link === "#" && project.github === "#" && (
                  <p className="text-gray-400 text-xs italic text-center">Links coming soon...</p>
               )}
            </div>
         </motion.div>
      )}
   </AnimatePresence>
      </div>

      {/* --- 📝 Content Section --- */}
      <div className={`p-8 flex flex-col relative z-10 ${project.featured ? 'md:w-3/5 md:py-12' : ''}`}>
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-purple-300 group-hover:to-blue-300 transition-all">{project.title}</h4>
          <div className="flex gap-3 text-gray-400">
            {project.github !== "#" && <a href={project.github} target="_blank" className="hover:text-purple-400 transition-colors"><Github size={18} /></a>}
            {project.link !== "#" && <a href={project.link} target="_blank" className="hover:text-blue-400 transition-colors"><ExternalLink size={18} /></a>}
          </div>
        </div>
        <p className="text-gray-400 mb-6 flex-grow font-light leading-relaxed">{project.description}</p>
        <ul className="flex flex-wrap gap-2 text-xs font-mono text-purple-300/80">
          {project.tech.map((t: string, i: number) => (
            <li key={i} className="px-2.5 py-1 bg-purple-900/20 border border-purple-500/20 rounded-md group-hover:border-purple-500/40 transition-colors">{t}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

// ✅ แก้ไข: ใช้ motion.a เพื่อให้ปุ่มหลักรองรับ mailto ได้สมบูรณ์
function MainButton({ href, icon, label, primary = false, size = "normal", isCopy = false } : { href: string, icon: React.ReactNode, label: string, primary?: boolean, size?: "normal" | "large", isCopy?: boolean }) {
    const isLarge = size === "large";
    const [copied, setCopied] = useState(false);

    const handleClick = async (e: any) => {
        if (isCopy) {
            e.preventDefault();
            const email = href.replace('mailto:', '');
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };
    
    return (
      <motion.a 
        href={isCopy ? "#" : href}
        onClick={handleClick}
        target={(!isCopy && href.startsWith('http')) ? "_blank" : undefined}
        rel={(!isCopy && href.startsWith('http')) ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }} 
        className={`relative group flex items-center gap-3 rounded-full transition-all duration-300 font-bold overflow-hidden cursor-pointer ${isLarge ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base'} ${primary ? 'bg-white text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] border border-transparent' : 'bg-black/50 text-white border border-white/20 hover:bg-white/10 hover:border-white/40'}`}
      >
        <AnimatePresence>
          {copied && (
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               className="absolute inset-0 bg-purple-600 text-white flex items-center justify-center z-20 text-sm font-mono"
            >
               Email Copied!
            </motion.div>
          )}
        </AnimatePresence>
        {primary && <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>}
        <span className={`${primary ? 'group-hover:text-purple-600' : ''} transition-colors`}>{icon}</span>
        <span>{label}</span>
      </motion.a>
    )
}

function NavLink({ href, icon, label, external }: { href: string, icon: React.ReactNode, label: string, external?: boolean }) {
  return (
    <Link href={href} target={external ? "_blank" : undefined} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors relative group">
      {icon}
      <span>{label}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
    </Link>
  )
}
