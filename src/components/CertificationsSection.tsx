import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface Accolade {
  category: string;
  title: string;
  issuer: string;
  description: string;
  badge: string;
  year: string;
}

const accolades: Accolade[] = [
  {
    category: 'CERTIFICATION',
    title: 'Innovation Ambassador Training – Foundation Level',
    issuer: 'MoE Innovation Cell & AICTE',
    description: 'Certified Foundation Level Innovation Ambassador by the Ministry of Education Innovation Cell and AICTE.',
    badge: 'MoE / AICTE',
    year: '2026',
  },
  {
    category: 'MICROSOFT CERTIFIED',
    title: 'Database Administration Fundamentals',
    issuer: 'Microsoft',
    description: 'Professional certification validating proficiency in database management systems, relational concepts, and security administration.',
    badge: 'MICROSOFT',
    year: '2023',
  },
  {
    category: 'NPTEL CERTIFICATION',
    title: 'Management Information Systems',
    issuer: 'NPTEL / IIT',
    description: 'Specialized coursework certification covering enterprise IT architectures, system design, and information system strategy.',
    badge: 'NPTEL',
    year: '2026',
  },
  {
    category: 'COMPETITION WINNER',
    title: '1st Prize – D-Festa Technical Event',
    issuer: 'D-Festa Technical Competition',
    description: 'Awarded 1st Prize in the nationwide PowerPoint Presentation Competition for technical system architecture design.',
    badge: '1ST PRIZE',
    year: '2023',
  },
  {
    category: 'OPEN SOURCE',
    title: 'GirlScript Summer of Code 2025 Contributor',
    issuer: 'GirlScript Foundation',
    description: 'Contributed feature enhancements, bug resolutions, and code reviews across 3 active open-source software repositories.',
    badge: 'GSSOC 2025',
    year: '2025',
  },
  {
    category: 'HACKATHON',
    title: 'Gateway Hackathon Participant',
    issuer: 'Christ University',
    description: 'Competed in the intense multi-hour Gateway Hackathon building innovative full-stack solutions under time constraints.',
    badge: 'HACKATHON',
    year: '2023',
  },
];

interface LeadershipRole {
  title: string;
  organization: string;
  impact: string;
  metrics: string;
}

const leadershipRoles: LeadershipRole[] = [
  {
    title: 'Student IPR Coordinator',
    organization: 'SIH Internal Hackathon',
    impact: 'Organised the college-level Smart India Hackathon internal event, managing logistics and mentoring 15+ student engineering teams.',
    metrics: '15+ Teams Coordinated',
  },
  {
    title: 'Google Student Ambassador',
    organization: 'Google Developer Student Clubs',
    impact: 'Conducted 5 comprehensive technical workshops introducing Firebase, Google Cloud, and web dev basics to 100+ students.',
    metrics: '100+ Students Taught',
  },
  {
    title: 'AI Workshop Conductor',
    organization: 'Technical AI Workshops',
    impact: 'Organised and led hands-on AI tool fundamentals sessions, covering prompt engineering and AI model API integrations.',
    metrics: '50+ Students across 3 Sessions',
  },
  {
    title: 'Student Innovation Ambassador',
    organization: "MoE's Innovation Cell",
    impact: 'Promoted campus startup culture, entrepreneurship initiatives, and technological innovation projects.',
    metrics: 'MoE Campus Leader',
  },
  {
    title: 'Singularity India Summit Attendee',
    organization: 'Singularity Summit 2025',
    impact: 'Attended global summit sessions on Artificial Intelligence, Robotics, and Quantum Computing trends.',
    metrics: 'AI & Robotics Summit',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="accolades"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Studio Glows */}
      <div className="absolute top-1/4 right-1/4 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / CERTIFICATIONS &amp; LEADERSHIP
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              CERTIFICATIONS &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              COMMUNITY LEADERSHIP.
            </span>
          </h2>
        </motion.div>

        {/* Grid 1: Certifications & Competitions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {accolades.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="relative p-7 rounded-sm border border-[#8C6D4F]/30 bg-[#0E0C0A]/90 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37]/80 hover:shadow-[0_12px_35px_rgba(212,175,55,0.12)] group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#D4AF37]">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 border border-[#8C6D4F]/30 bg-[#16120E] text-[#C4B5A5]">
                    {item.badge}
                  </span>
                </div>

                <h3
                  className="text-2xl font-normal tracking-wide text-white mb-2 group-hover:text-[#F7E7C4] transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {item.title}
                </h3>

                <span
                  className="block text-[10.5px] font-mono text-[#8C6D4F] mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.issuer} • {item.year}
                </span>

                <p
                  className="text-xs text-[#A8988B] font-light leading-relaxed group-hover:text-[#D5CBC0] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Header 2: Leadership Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 pt-6 border-t border-[#8C6D4F]/20"
        >
          <h3
            className="text-3xl sm:text-4xl tracking-wide text-white uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="text-[#D4AF37]">LEADERSHIP &amp; </span>
            <span>TECHNICAL WORKSHOPS</span>
          </h3>
        </motion.div>

        {/* Grid 2: Leadership & Community */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipRoles.map((role) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-6 rounded-sm border border-[#8C6D4F]/25 bg-[#080605] hover:border-[#D4AF37]/60 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <h4
                  className="text-2xl text-white group-hover:text-[#F7E7C4] transition-colors uppercase leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {role.title}
                </h4>
                <span className="text-[9.5px] font-mono text-[#D4AF37] px-2 py-0.5 border border-[#D4AF37]/30 bg-[#120F0C]">
                  {role.metrics}
                </span>
              </div>

              <span
                className="block text-[10px] font-mono tracking-wider uppercase text-[#8C6D4F] mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {role.organization}
              </span>

              <p
                className="text-xs text-[#A8988B] font-light leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {role.impact}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
