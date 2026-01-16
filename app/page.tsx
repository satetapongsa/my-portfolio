"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, Code2, Database, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Config Animation เล็กน้อย
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      {/* Background Grid Effect (ทำให้ดู Tech) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* Hero Section */}
      <div className="z-10 max-w-4xl w-full text-center space-y-8">
        
        {/* Badge "Hello World" */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm text-green-400 font-mono mb-4"
        >
          <Terminal size={14} />
          <span>Hello World, I'm Online</span>
        </motion.div>

        {/* ชื่อและตำแหน่ง */}
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 pb-2"
        >
          Your Name
        </motion.h1>

        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-400 md:text-2xl font-light"
        >
          Full Stack Developer & UI/UX Enthusiast
        </motion.p>

        {/* Short Bio */}
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          ผมเป็นนักพัฒนาที่หลงใหลในการสร้าง Web Application ที่ไม่เพียงแค่ทำงานได้ แต่ต้อง "ลื่นไหล" และ "สวยงาม" เชี่ยวชาญใน Modern Javascript Stack และพร้อมเรียนรู้เทคโนโลยีใหม่ๆ เสมอ
        </motion.p>

        {/* Social Links (Buttons) */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <SocialButton href="https://github.com/yourusername" icon={<Github />} label="GitHub" />
          <SocialButton href="https://linkedin.com/in/yourusername" icon={<Linkedin />} label="LinkedIn" />
          <SocialButton href="mailto:your@email.com" icon={<Mail />} label="Contact Me" />
        </motion.div>

      </div>

      {/* Tech Stack Area */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 flex gap-8 text-gray-600 z-10"
      >
        <div className="flex flex-col items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer">
            <Code2 size={24} />
            <span className="text-xs">Frontend</span>
        </div>
        <div className="flex flex-col items-center gap-2 hover:text-green-400 transition-colors cursor-pointer">
            <Database size={24} />
            <span className="text-xs">Backend</span>
        </div>
        <div className="flex flex-col items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer">
            <Globe size={24} />
            <span className="text-xs">Deploy</span>
        </div>
      </motion.div>

    </main>
  );
}

// Component ปุ่มกดแยกออกมาเพื่อให้ code สะอาด
function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-black/50 text-white hover:border-white/30 transition-all backdrop-blur-sm"
      >
        {icon}
        <span>{label}</span>
      </motion.button>
    </Link>
  );
}