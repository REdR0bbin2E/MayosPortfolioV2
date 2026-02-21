import React, { useState } from 'react';
import { Blocks, Youtube, Github, Linkedin, Mail, Instagram, ExternalLink, Award, Code, User, Trophy, X, ExternalLink as LinkIcon, Heart, Zap, Star } from 'lucide-react';
import { animate, AnimatePresence, motion } from 'framer-motion';

// --- Assets ---
import Mayo from './assets/Mayo.png';
import CrewCreate from './assets/crewCreate.png';
import Nocturne from './assets/Nocturne.png';
import Echoes from './assets/echoes.png';
import CommConnect from './assets/CommConnect.png';
import Navi from './assets/Navi.png';
import PaWebsite from './assets/paWebsite.png';
import PersonalWebsite from './assets/PersonalWeb.png';
import Placeholder from './assets/Placeholder1.jpg';
import Navi2 from './assets/Navi2.png';
import MayosResume from './assets/Mayowa_Akinyede_Resume.pdf';
import Ragnarok from './assets/Ragnarok.png';
import Quantum from './assets/Quantum.png';

// --- PIXEL DECORATION COMPONENT ---
const PixelIcon = ({ icon: Icon, color }) => (
  <div style={{
    display: 'inline-flex',
    padding: '8px',
    background: '#000',
    border: `2px solid ${color}`,
    boxShadow: `4px 4px 0px 0px ${color}`,
    marginRight: '15px',
    verticalAlign: 'middle'
  }}>
    <Icon size={24} color={color} />
  </div>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('projects');
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(null);

  const openModal = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalType(null);
  };




  // --- FULL ORIGINAL DATA ---
  const profileName = "Mayowa Akinyede";
  const profileSubtitle = "Fullstack | Quantum Computing | Game Dev";

  const resumeData = {
    education: {
      university: "University of Texas at Dallas",
      degree: "B.S. in Computer Science; Minor in Business Intelligence & Analytics",
      gpa: "3.5/4.0",
      dates: "Aug. 2024",
      location: "Richardson, TX",
      coursework: "Linear Algebra, Computer Architecture, Discrete Math"
    },
    skills: {
      languages: "Java, C++, Swift, Lua, JavaScript, TypeScript, HTML/CSS, SQL, Python",
      frameworks: "React, React Native, Electron, Node.js, Expo, Firebase",
      libraries: "Firebase SDK, Expo Router, Framer Motion, Reanimated, Axios",
      devTools: "Git, Figma, VS Code, Expo CLI",
      concepts: "Data Structures, Algorithms, OOP, API Integration, UI/UX, Fullstack Dev, AI Integration"
    },
    experience: [
      {
        title: "Frontend Software Engineer",
        company: "Nocturne Dream Logger (ACM Projects)",
        location: "Richardson, TX",
        dates: "Jan. 2025 - May 2025",
        description: [
          "Led frontend development for a 12-week cross-functional project, designing scalable architecture, reusable UI components, and intuitive navigation to enhance user experience and maintainability.",
          "Engineered integration of **OpenAI GPT + DALL·E 3 APIs** for automated dream analysis, recurring theme detection, and AI-powered visual storytelling of user-submitted logs."
        ]
      },
      {
        title: "Technical Consultant Agent",
        company: "Best Buy - Geek Squad",
        location: "Allen, TX",
        dates: "Dec. 2024 - May 2025",
        description: [
          "Diagnosed and optimized **50+ customer devices per week** including laptops and mobile systems, performing hardware replacements and OS reinstalls that extended device lifespan and enhanced service delivery.",
          "Collaborated with a cross-functional **10-agent team**, contributing to knowledge sharing and consistently maintaining a **95% satisfaction rating** at the No. 1 ranked Best Buy in North Texas."
        ]
      },
    ],
    projects: [
      {
        title: "Navi.v2 (AI Dashboard)",
        tech: ["Electron", "Node.js", "OpenAI", "ElevenLabs", "Gemini API"],
        dates: "Oct. 2025 - Present",
        description: [
          "Engineering an **AI-powered desktop dashboard** using **Electron**, consolidating productivity tools (Spotify, Zoom) into a unified interface with system stat monitoring and voice-controlled app management via **PowerShell**.",
          "Integrated **GPT-4o (STT)** and **ElevenLabs (TTS)** for bidirectional voice interaction, alongside **NodeMailer** for email automation, **Spotify API** for media control, and **Gemini API** for document generation.",
          "Developed a companion **Chrome Extension** that parses resumes into JSON for autofilling applications and utilizes on-page text extraction for context-aware AI Q&A."
        ],
        blurb: "AI-powered desktop assistant & dashboard.",
        image: Navi2, // Ensure you have this import or switch to Navi
        status: "WIP",
        liveLink: null,
        repoLink: null,
        demoLink: "https://streamable.com/afgifk",
        demoLink2: "https://streamable.com/s2t8we",
        test: true // Set to true so it appears in the Resume/Projects section

      },
      {
        title: "Project: Ragnarok - RBX USER: RedRobbin23",
        blurb: "A Vinland Saga / Norse Mythology Inspired Roblox Game",
        description: ["This is a solo-developed action game heavily inspired by Norse mythology. The game is currently in its early testing phase, meaning the sole focus right now is on perfecting the combat and movement systems."
          , "Send me your username for testing and Ill whitelist you so you can jump in, test the mechanics, and please reach out to me directly if you have any feedback, bugs, or questions related to development and testing! Also the code for the combat and movement system is made using a state system inspired setup."],
        tech: ["Roblox Studio", "Lua", "Moon Animator", "Blender"],
        image: Ragnarok,
        status: "WIP",
        liveLink: "https://www.roblox.com/games/80150039147564/Rag-Test",
        repoLink: null,
        demoLink: "https://streamable.com/szedsz",
        demoLink2: "https://streamable.com/9uoig2",
        test: false
      },
      {
        title: "Crew Create",
        tech: ["React", "Vite", "Firebase", "No Gen-AI"],
        dates: "Jun. 2025 - Present",
        description: [
          "Developing a **fullstack collaboration platform** for indie game developers to share projects, communicate in real-time, and streamline workflows. Featuring hand-made responsive UI and optimized state management.",
          "Implemented **Firebase authentication, real-time database, and monetization tools**, supporting secure user access, persistent project data, and  payment tracking for sustainable growth."
        ],
        blurb: "Fullstack platform for indie game devs.",
        image: CrewCreate,
        status: "WIP",
        liveLink: null,
        repoLink: "https://github.com/REdR0bbin2E/UpdateWebsite",
        demoLink: "https://streamable.com/9zt7hu",
        demoLink2: null,
        test: true
      },
      {
        title: "Nocturne Dream Logger",
        tech: ["React Native", "Expo", "TypeScript", "OpenAI"],
        dates: "Jan. 2025 - May 2025",
        description: [
          "Nocturne is an AI powered dream logger React Native based application developed during UTD's ACM Projects Spring '25 that allowed the user to bring their dreams to life. ",
          "Nocturne was built using MongoDB for our backend alongside OpenAI's API and DALLE-3 for image generations."
        ],
        blurb: "AI-powered dream analysis mobile app.",
        image: Nocturne,
        status: "static",
        liveLink: null,
        repoLink: "https://github.com/REdR0bbin2E/Nocturne",
        demoLink: "https://streamable.com/2wl9pp",
        test: true
      },
      {
        title: "Quantum Computing Research",
        blurb: "Research I've done on quantum qubit error mitigation.",
        description: "Through an independent study and mentorship program, I conducted targeted research on quantum qubit error mitigation to address hardware noise and computational reliability. Utilizing Python and the Qiskit framework, the project focuses on analyzing error models and implementing software-level strategies to stabilize quantum circuits. This ongoing work explores practical solutions to one of the most significant challenges in modern quantum computing.",
        tech: ["Qiskit", "Python"],
        image: Quantum,
        status: "static",
        liveLink: null,
        repoLink: null,
        test: false
      },
      {
        title: "Interactive Elimination Game",
        tech: ["React", "Firebase", "Cloud Storage"],
        dates: "Oct. 2025",
        description: [
          "Engineered a **real-time, browser-based voting and elimination game** using React for the frontend and **Firebase Firestore** for instant data synchronization across all clients.",
          "Created a password-protected **Host Console (Admin)** to manage the game flow, including setting question rounds, changing player points, and managing elimination.",
          "Implemented secure player registration with **Firebase Storage** for image uploads, ensuring a robust, full-stack application for live gameplay. If you'd like to check it out please let me know! Link is private for consent reasons."
        ],
        blurb: "Real-time voting and elimination game.",
        image: PaWebsite,
        status: "deployed",
        liveLink: null,
        repoLink: null,
        demoLink: null,
        demoLink2: null,

        test: false
      },
      {
        title: "Personal Portfolio Site",
        blurb: "A responsive, modern web portfolio.",
        description: "This very portfolio! A fully responsive single-page application built with React, styled using inline CSS for rapid prototyping, and focused on performance and clean UI/UX design.",
        tech: ["React", "HTML/CSS", "JavaScript"],
        image: PersonalWebsite,
        status: "deployed",
        liveLink: null,
        repoLink: "https://github.com/janedoe/portfolio-site",
        demoLink: null,
        demoLink2: null,
        test: false
      }
      ,
      {
        title: "Late Night Jammin (LNJ)",
        blurb: "Game jam style website for friend groups.",
        description: "WIP.",
        tech: ["TBD", "TBD", "TBD"],
        image: Placeholder,
        status: null,
        liveLink: null,
        repoLink: null,
        test: false
      },
      {
        title: "K-pop Trading Game (KTG)",
        blurb: "K-pop E-card trading game.",
        description: "WIP.",
        tech: ["TBD", "TBD", "TBD"],
        image: Placeholder,
        status: null,
        liveLink: null,
        repoLink: null,
        demoLink: null,
        demoLink2: null,
        test: false
      }
    ],
    leadership: [
      {
        title: "Logistics Officer",
        organization: "ACM Community",
        location: "UT Dallas",
        dates: "2024 - Present",
        description: [
          "Organized **hands-on workshops and socials** with 50+ attendees, covering web/mobile development topics (React, Expo, CI/CD) to strengthen technical skills and peer collaboration."
        ]
      },
      {
        title: "Workshops Officer",
        organization: "FinTech",
        location: "UT Dallas",
        dates: "2024 - Present",
        description: [
          "Coordinated technical sessions on **blockchain, finance, and software engineering**, introducing students to emerging technologies and practical career applications through engaging events."
        ]
      },
      {
        title: "Peer Advisor",
        organization: "Residence Hall Housing (RHH)",
        location: "UT Dallas",
        dates: "2024 - Present",
        description: [
          "Hosted monthly community events and provided peer mentorship, fostering residential engagement, academic support, and a positive student living environment for all residents."
        ]
      }
    ],
    hobbies: [
      {
        title: "Skating",
        description: "I’ve been skating for about three months now, and honestly, it’s been a blast. I can land the basics—ollies, kickflips, and shove-its (on good days)! Skating’s become my go-to way to clear my head after long study sessions."
      },
      {
        title: "Music",
        description: "Music’s always been part of who I am. I was in band all through middle and high school—marching band included—and played both the clarinet and alto sax. Lately, I’ve been trying to dust off those skills again. I’m also a huge concert person."
      },
      {
        title: "Soccer & Volleyball",
        description: "I grew up loving sports, especially soccer and volleyball. They’re a fun way to stay active and competitive, but mostly I just love the team vibe."
      },
      {
        title: "Anime & Manga",
        description: "I’m a big fan of anime and manga—especially shonen series like Hunter x Hunter and Naruto. I love the creativity, the world-building, and those moments that make you want to train like you’re about to unlock your own power-up arc."
      },
      {
        title: "Game Development",
        description: "I started out making games in Roblox Studio back in the day (shoutout to my younger self experimenting with Lua scripts). Recently, I’ve been diving into indie game development—something about creating interactive worlds just clicks with me."
      }
    ]
  };

  const hackathons = [
    {
      title: "Hack Arlington 2025",
      project: "Echo",
      achievement: "Explore Project",
      date: "Oct 2025",
      blurb: "Conversational memorial companion that keeps the voice of loved ones close.",
      description: "Echo reimagines remembrance by blending AI conversation, voice synthesis, and memory preservation into a single mobile experience. Users craft an “Echo” by sharing stories, tone, and traits, then hold natural conversations powered by Google Gemini while Fish.Audio recreates the familiar warmth of their loved one’s voice. Every session is saved, creating an ongoing journal of healing and reflection.",
      tech: ["React Native", "Expo", "FastAPI", "Auth0", "MongoDB Atlas", "Google Gemini", "Fish.Audio"],
      teamSize: 3,
      duration: "24 hours",
      repoLink: "https://github.com/REdR0bbin2E/voice",
      devpostLink: "https://devpost.com/software/echos-vprx96",
      image: Echoes
    },
    {
      title: "HackUNT x NSBE 2025",
      project: "CommConnect",
      achievement: "Explore Project",
      date: "Oct 2025",
      blurb: "Campus-wide platform that pairs students with meaningful service opportunities.",
      description: "CommConnect helps college students turn empathy into action. We aggregated volunteer postings from partner organizations, layered in skill-matching filters, and built automated reminders so students can discover, register, and show up for service in just a few taps. A lightweight admin portal keeps community partners in the loop with real-time sign-up metrics.",
      tech: ["React", "Node.js", "Firebase", "Google Maps API"],
      teamSize: 4,
      duration: "24 hours",
      repoLink: "https://github.com/REdR0bbin2E/hackUNTNSBE",
      devpostLink: null,
      image: CommConnect
    },
    {
      title: "HackUTD 2025",
      project: "NAVI",
      achievement: "Explore Project",
      date: "Nov 2025",
      blurb: "Hands-free desktop agent that listens, sees, and completes multi-step workflows.",
      description: "NAVI (Neural Agent for Visual Interaction) combines low-latency speech recognition, pose-aware gesture control, and multimodal reasoning to orchestrate your desktop like a teammate. Say, “Summarize this PDF and email it to Dr. Smith,” and NAVI plans every action—from reading the document to drafting and sending the email—while 'TensorRT-powered gesture tracking keeps the experience accessible for users with limited mobility.'",
      tech: ["Electron", "React", "NVIDIA Track", "GPT-o4 API", "ElevenLabs"],
      teamSize: 4,
      duration: "24 hours",
      repoLink: "https://github.com/cheeky4life/navi",
      devpostLink: "https://devpost.com/software/navi-jp2be3",
      image: Navi
    }
  ];

  const researchAssessments = [
    { link: "https://docs.google.com/document/d/1P9n5F55VIexlKzyS7Bg7nHKNUtiAgu2JcgRD1dDAst4/edit?usp=sharing" },
    { link: "https://docs.google.com/document/d/1IrDdLbNw9wVrI16qvCJdTBCMh-1dT283Udcq-moBzOA/edit?usp=sharing" },
    { link: "https://docs.google.com/document/d/1ZB7soTs3EaP0bMvjfv1DeBnsKfFIcn6Zgna-HO7O9ac/edit?usp=sharing" },
    { link: "https://docs.google.com/document/d/1hgWC3GK7tb7H4M3t75ASKbqQEIevQTlTuBCvsRG9ZtM/edit?usp=sharing" },
    { link: "https://docs.google.com/document/d/1dJ2_A7Lb51nbljOinu6m4eZQXAz9OKPiEvEgN2fyRAU/edit?usp=sharing" },

  ];

  const interviewAssessments = [
    { link: "https://docs.google.com/document/d/1baypP68C4dZI1sGoQklR7NZCqaVYHpvJ2taZf_6fVfI/edit?usp=sharing" },

  ];

  const mentorAssesments = [
    { link: "https://docs.google.com/document/d/1Kh7kvru2rHzEmec4ZnH1-Ik5v9kbS3MmRAv4ERFzQjQ/edit?usp=sharing" },
    { link: "https://docs.google.com/document/d/1qW73gPKV0mLGVHN8chVrOb8E7knjxfKvcqlEEyIWxiY/edit?usp=sharing" },
  ];

  const socials = [
    { name: "GitHub", icon: Github, link: "https://github.com/REdR0bbin2E", username: "@REdR0bbin2E" },
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/mayowa-akinyede-cs/", username: "Mayowa Akinyede" },
    { name: "Email", icon: Mail, link: null, username: "Mayo.akin2@gmail.com" },
    { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/akacompsci/", username: "@akacompsci" },
    { name: "YouTube", icon: Youtube, link: null, username: "Coming Soon.." },
    { name: "Roblox", icon: Blocks, link: "https://www.roblox.com/users/159131420/profile", username: "RedRobbin23" }
  ];

  // Helper to process text formatting (converting **text** to bold)
  const formatText = (text) => {
    if (!text) return "";
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  const getStatusBadge = (status) => {
    const baseStyle = {
      padding: '4px 10px',
      fontSize: '0.7rem',
      fontFamily: '"Inter", sans-serif',
      fontWeight: '600',
      border: '1px solid',
      borderRadius: '4px',
      color: '#fff',
      textTransform: 'uppercase',
      display: 'inline-block',
      letterSpacing: '0.5px',
    };

    if (status === 'deployed') return { style: { ...baseStyle, background: '#10b981', borderColor: '#059669' }, text: 'Live' };
    if (status === 'WIP') return { style: { ...baseStyle, background: '#f59e0b', borderColor: '#d97706' }, text: 'In Progress' };
    if (status === 'static') return { style: { ...baseStyle, background: '#6b7280', borderColor: '#4b5563' }, text: 'Completed' };
    return { style: baseStyle, text: 'Unknown' };
  };

  return (
    <div style={styles.portfolio}>
      {/* GLOBAL FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap');
        
        body { margin: 0; background-color: #f0f7ff; }
        strong { color: #0052a3; font-weight: 600; }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 12px; }
        ::-webkit-scrollbar-track { background: #e8f2ff; }
        ::-webkit-scrollbar-thumb { background: #4a90e2; border-radius: 6px; }
        ::-webkit-scrollbar-thumb:hover { background: #2e5c9e; }
      `}</style>

      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={styles.avatarContainer}
          >
            <img src={Mayo} style={styles.pixelAvatar} alt="Profile" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={styles.name}
          >
            {profileName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={styles.subtitle}
          >
            {profileSubtitle}
          </motion.p>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav style={styles.navigation}>
        {['projects', 'hackathons', 'resume', 'socials'].map((section) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              ...styles.navButton,
              ...(activeSection === section ? styles.navButtonActive : {})
            }}
            onClick={() => setActiveSection(section)}
          >
            {section === 'projects' && <Code size={20} />}
            {section === 'hackathons' && <Trophy size={20} />}
            {section === 'resume' && <User size={20} />}
            {section === 'socials' && <Award size={20} />}
            <span style={{ marginTop: '8px' }}>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
          </motion.button>
        ))}
      </nav>

      <main style={styles.main}>
        {activeSection === 'projects' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <Code size={28} style={{ marginRight: '15px', color: '#0052a3' }} />
              Projects
            </h2>
            <div style={styles.grid}>
              {resumeData.projects.map((project, idx) => {
                const badge = getStatusBadge(project.status);


                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0, 102, 204, 0.15)' }}
                    style={styles.card}
                    onClick={() => openModal(project, 'project')}
                  >
                    <div style={styles.cardImageWrapper}>
                      <img src={project.image || Placeholder} alt={project.title} style={styles.cardImage} />
                      <div style={{ position: 'absolute', top: 10, right: 10 }}>
                        <span style={badge.style}>{badge.text}</span>
                      </div>
                    </div>
                    <div style={styles.cardContent}>
                      <h3 style={styles.cardTitle}>{project.title}</h3>
                      <p style={styles.cardBlurb}>{project.blurb}</p>
                      <div style={styles.techStack}>
                        {project.tech.slice(0, 3).map((t, i) => (
                          <span key={i} style={styles.techBadge}>{t}</span>
                        ))}
                        {project.tech.length > 3 && <span style={styles.techBadge}>+{project.tech.length - 3}</span>}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}

        {activeSection === 'hackathons' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <Trophy size={28} style={{ marginRight: '15px', color: '#0052a3' }} />
              Hackathons & Achievements
            </h2>
            <div style={styles.grid}>
              {hackathons.map((hack, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0, 102, 204, 0.15)' }}
                  style={{ ...styles.card, borderColor: '#0066cc' }}
                  onClick={() => openModal(hack, 'hackathon')}
                >
                  <div style={styles.cardImageWrapper}>
                    <img src={hack.image || Placeholder} style={styles.cardImage} alt="hack" />
                  </div>
                  <div style={styles.cardContent}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, gap: 10 }}>
                      <div>
                        <h3 style={{ ...styles.cardTitle, color: '#0a2444', fontSize: '1rem', margin: 0 }}>{hack.title}</h3>
                        <p style={{ color: '#0052a3', fontFamily: '"Inter", sans-serif', fontSize: '0.9rem', fontWeight: '600', margin: '4px 0 0 0' }}>Project: {hack.project}</p>
                      </div>
                      <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.75rem', fontWeight: '600', color: '#2e5c9e', whiteSpace: 'nowrap' }}>{hack.date}</span>
                    </div>
                    <p style={styles.cardBlurb}>{hack.blurb}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: 'auto', fontSize: '0.8rem', color: '#0052a3', fontWeight: '600' }}>
                      <Star size={12} fill="#0052a3" /> {hack.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'resume' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <User size={28} style={{ marginRight: '15px', color: '#0052a3' }} />
              Experience & Skills
            </h2>
            <div style={styles.resumeContainer}>

              {/* EDUCATION - MAIN QUEST */}
              <div style={styles.rpgBox}>
                <h3 style={styles.rpgHeader}>Education</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                  <div>
                    <h4 style={styles.rpgSubHeader}>{resumeData.education.degree}</h4>
                    <p style={styles.rpgText}>{resumeData.education.university}</p>
                    <p style={{ ...styles.rpgText, color: '#00e5ff', marginTop: '5px' }}>
                      Coursework: {resumeData.education.coursework}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', minWidth: '150px' }}>
                    <div style={styles.xpBadge}>GPA: {resumeData.education.gpa}</div>
                    <p style={styles.rpgText}>{resumeData.education.dates}</p>
                    <p style={styles.rpgText}>{resumeData.education.location}</p>
                  </div>
                </div>
              </div>

              {/* SKILLS - INVENTORY */}
              <div style={styles.rpgBox}>
                <h3 style={styles.rpgHeader}>Skills</h3>
                <div style={styles.skillGrid}>
                  {Object.entries(resumeData.skills).map(([key, value]) => (
                    <div key={key} style={styles.skillCol}>
                      <h4 style={styles.skillTitle}>{key.toUpperCase()}</h4>
                      <div style={styles.skillBarContainer}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXPERIENCE - SIDE QUESTS */}
              <div style={styles.rpgBox}>
                <h3 style={styles.rpgHeader}>Experience</h3>
                {resumeData.experience.map((job, i) => (
                  <div key={i} style={{ marginBottom: '30px', borderBottom: i !== resumeData.experience.length - 1 ? '2px dashed #333' : 'none', paddingBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                      <h4 style={styles.rpgSubHeader}>{job.title}</h4>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontFamily: 'VT323', color: '#ff0055', fontSize: '1.2rem', display: 'block' }}>{job.dates}</span>
                        <span style={{ fontFamily: 'VT323', color: '#aaa', fontSize: '1rem' }}>{job.location}</span>
                      </div>
                    </div>
                    <p style={{ fontFamily: 'VT323', color: '#00e5ff', fontSize: '1.2rem', marginBottom: '10px' }}>{job.company}</p>
                    <ul style={styles.pixelList}>
                      {job.description.map((desc, j) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: formatText(desc) }} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* PROJECTS (TEST=TRUE) */}
              <div style={styles.rpgBox}>
                <h3 style={styles.rpgHeader}>Featured Projects</h3>
                {resumeData.projects.filter(p => p.test === true).map((project, idx) => (
                  <div key={idx} style={{ marginBottom: '20px', borderBottom: '2px dashed #333', paddingBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4 style={styles.rpgSubHeader}>{project.title}</h4>
                      <span style={{ fontFamily: 'VT323', color: '#ff0055' }}>{project.dates}</span>
                    </div>
                    <p style={{ ...styles.rpgText, fontSize: '1rem', color: '#aaa', marginBottom: '10px' }}>
                      Tech: {project.tech.join(', ')}
                    </p>
                    <ul style={styles.pixelList}>
                      {Array.isArray(project.description) ?
                        project.description.map((d, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: formatText(d) }} />
                        ))
                        : <li dangerouslySetInnerHTML={{ __html: formatText(project.description) }} />
                      }
                    </ul>
                  </div>
                ))}
              </div>

              {/* LEADERSHIP */}
              <div style={styles.rpgBox}>
                <h3 style={styles.rpgHeader}>Leadership</h3>
                {resumeData.leadership.map((role, idx) => (
                  <div key={idx} style={{ marginBottom: '20px' }}>
                    <h4 style={styles.rpgSubHeader}>{role.title} @ {role.organization}</h4>
                    <p style={{ ...styles.rpgText, color: '#aaa', fontSize: '1rem' }}>{role.dates}</p>
                    <ul style={styles.pixelList}>
                      {role.description.map((desc, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: formatText(desc) }} />
                      ))}
                    </ul>
                  </div>
                ))}
                <div style={{ marginTop: '15px', padding: '12px', background: '#f8f9fa', borderLeft: '4px solid #0066cc', borderRadius: '6px' }}>
                  <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.75rem', fontWeight: '600', color: '#0066cc', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Affiliations</p>
                  <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.95rem', color: '#666', margin: 0 }}>UTD National Society of Black Engineers • Anime Orchestra Ensemble • InterVarsity Fellowship</p>
                </div>
              </div>

              {/* HOBBIES */}
              <div style={styles.rpgBox}>
                <h3 style={styles.rpgHeader}>Interests</h3>
                {resumeData.hobbies.map((hobby, idx) => (
                  <div key={idx} style={{ marginBottom: '15px' }}>
                    <h4 style={{ ...styles.rpgSubHeader, color: '#00e5ff' }}>{hobby.title}</h4>
                    <p style={styles.rpgText}>{hobby.description}</p>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href={MayosResume} style={styles.downloadBtn}>Download Resume</a>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'socials' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <Mail size={28} style={{ marginRight: '15px', color: '#0052a3' }} />
              Connect
            </h2>
            <div style={styles.grid}>
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0, 102, 204, 0.15)' }}
                  style={{ ...styles.socialCard, borderColor: '#e8e8e8' }}
                >
                  <social.icon size={40} color="#0052a3" />
                  <h3 style={styles.socialText}>{social.name}</h3>
                  <span style={{ fontFamily: '"Inter", sans-serif', color: '#666', fontSize: '0.85rem' }}>{social.username}</span>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* PIXEL MODAL */}
      <AnimatePresence>
        {selectedItem && selectedItem.title === "Quantum Computing Research" && (
          <div style={styles.modalOverlay} onClick={closeModal}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={styles.modal}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={styles.modalHeaderBar}>
                <span>{selectedItem.title}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeModal}
                  style={styles.closeBtn}
                >
                  <X size={18} />
                </motion.button>
              </div>
              <div style={styles.modalInner}>
                <img src={selectedItem.image || Placeholder} style={styles.modalImg} alt="detail" />

                {/* Tech Tags */}
                <div style={{ marginBottom: '20px' }}>
                  {selectedItem.tech.map((t, i) => (
                    <span key={i} style={styles.techBadge}>{t}</span>
                  ))}
                </div>


                {/* Description Rendering */}
                <div style={{ ...styles.modalDesc, marginTop: "5%" }}>
                  {Array.isArray(selectedItem.description)
                    ? selectedItem.description.map((desc, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: formatText(desc) }} style={{ marginBottom: '10px' }} />
                    ))
                    : <p dangerouslySetInnerHTML={{ __html: formatText(selectedItem.description) }} />
                  }
                </div>


                <div style={{}}>
                  <h2>Mentor</h2>
                  <a href='https://www.linkedin.com/in/jamiegillvalor/'>Jamie Lee Gill</a>
                </div>


                <div style={{ marginTop: "5%" }}>
                  <h2>Mentor Assesments</h2>
                  <div style={{ width: "100%" }}>
                    {mentorAssesments.map((item, index) => (
                      <motion.a whileHover={{ scale: 1.05 }} href={item.link} style={{ ...styles.techBadge, backgroundColor: "rgba(55, 14, 103, 0.8)", borderWidth: 1, borderColor: "black", margin: 3 }}>
                        <h3 style={{ color: "white" }}>Mentor Assesment {index + 1}</h3>
                      </motion.a>
                    ))}
                  </div>
                </div>



                <div style={{ marginTop: "5%" }}>
                  <h2>Research Assesments</h2>
                  <div style={{ width: "100%" }}>
                    {researchAssessments.map((item, index) => (
                      <motion.a whileHover={{ scale: 1.05 }} href={item.link} style={{ ...styles.techBadge, backgroundColor: "rgba(33, 126, 232, 0.5)", borderWidth: 1, borderColor: "black", margin: 3 }}>
                        <h3 style={{ color: "white" }}>Research Assesment {index + 1}</h3>
                      </motion.a>
                    ))}
                  </div>
                </div>


                <div style={{ marginTop: "5%" }}>
                  <h2>Interview Assessments</h2>
                  <div style={{ width: "100%" }}>

                    {interviewAssessments.map((item, index) => (
                      <motion.a whileHover={{ scale: 1.05 }} href={item.link} style={{ ...styles.techBadge, backgroundColor: "rgba(199, 33, 232, 0.8)", borderWidth: 1, borderColor: "black", margin: 3 }}>
                        <h3 style={{ color: "white" }}>Interview Assesment {index + 1}</h3>
                      </motion.a>
                    ))}
                  </div>
                </div>




              </div>
            </motion.div>
          </div>

        )
        }


        {
          selectedItem && selectedItem.title !== "Quantum Computing Research" && (
            <div style={styles.modalOverlay} onClick={closeModal}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                style={styles.modal}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={styles.modalHeaderBar}>
                  <span>{selectedItem.title}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeModal}
                    style={styles.closeBtn}
                  >
                    <X size={18} />
                  </motion.button>
                </div>
                <div style={styles.modalInner}>
                  <img src={selectedItem.image || Placeholder} style={styles.modalImg} alt="detail" />

                  {/* Modal Title Block */}
                  <div style={{ borderBottom: '1px solid #d4e8f7', paddingBottom: '12px', marginBottom: '20px' }}>
                    <h2 style={styles.modalTitle}>{selectedItem.title}</h2>
                    {modalType === 'hackathon' && <p style={{ color: '#0052a3', fontFamily: '"Inter", sans-serif', fontSize: '0.9rem', fontWeight: '600', margin: '6px 0 0 0' }}>Achievement: {selectedItem.achievement}</p>}
                  </div>

                  {/* Tech Tags */}
                  <div style={{ marginBottom: '20px' }}>
                    {selectedItem.tech.map((t, i) => (
                      <span key={i} style={styles.techBadge}>{t}</span>
                    ))}
                  </div>

                  {/* Description Rendering */}
                  <div style={styles.modalDesc}>
                    {Array.isArray(selectedItem.description)
                      ? selectedItem.description.map((desc, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: formatText(desc) }} style={{ marginBottom: '10px' }} />
                      ))
                      : <p dangerouslySetInnerHTML={{ __html: formatText(selectedItem.description) }} />
                    }
                  </div>

                  {/* Hackathon Specific Details */}
                  {modalType === 'hackathon' && (
                    <div style={{ background: '#f0f7ff', padding: '12px', marginBottom: '20px', border: '1px solid #d4e8f7', borderRadius: '8px' }}>
                      <p style={{ fontFamily: '"Inter", sans-serif', color: '#0a2444', fontSize: '0.9rem', margin: '0 0 6px 0' }}><strong>Team Size:</strong> {selectedItem.teamSize} people</p>
                      <p style={{ fontFamily: '"Inter", sans-serif', color: '#0a2444', fontSize: '0.9rem', margin: 0 }}><strong>Duration:</strong> {selectedItem.duration}</p>
                    </div>
                  )}

                  {/* Buttons */}
                  <div style={styles.actionRow}>
                    {selectedItem.liveLink && selectedItem.liveLink !== '#' && (
                      <motion.a
                        href={selectedItem.liveLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ ...styles.actionBtn, background: '#10b981', color: '#ffffff' }}
                        target="_blank"
                      >
                        <LinkIcon size={16} /> View Live
                      </motion.a>
                    )}
                    {selectedItem.repoLink && (
                      <motion.a
                        href={selectedItem.repoLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={styles.actionBtn}
                        target="_blank"
                      >
                        <Github size={16} /> View Code
                      </motion.a>
                    )}

                    {selectedItem.demoLink && (
                      <motion.a
                        href={selectedItem.demoLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={styles.actionBtn}
                        target="_blank"
                      >
                        <ExternalLink size={16} /> Demo
                      </motion.a>
                    )}

                    {selectedItem.demoLink2 && (
                      <motion.a
                        href={selectedItem.demoLink2}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={styles.actionBtn}
                        target="_blank"
                      >
                        <ExternalLink size={16} /> Demo 2
                      </motion.a>
                    )}

                    {selectedItem.devpostLink && (
                      <motion.a
                        href={selectedItem.devpostLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ ...styles.actionBtn, background: '#6366f1', color: '#ffffff' }}
                        target="_blank"
                      >
                        <ExternalLink size={16} /> Devpost
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )
        }
      </AnimatePresence >

    </div >
  );
}

// --- RETRO STYLES ---
const styles = {
  portfolio: {
    minHeight: '100vh',
    backgroundColor: '#f0f7ff',
    color: '#1a3a52',
    fontFamily: '"Inter", sans-serif',
    overflowX: 'hidden',
  },
  hero: {
    textAlign: 'center',
    padding: '100px 20px 60px',
    background: 'linear-gradient(180deg, #e8f4ff 0%, #f0f7ff 100%)',
    borderBottom: '1px solid #d4e8f7',
  },
  heroContent: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  avatarContainer: {
    width: '120px',
    height: '120px',
    margin: '0 auto 30px',
    position: 'relative',
    background: '#ffffff',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid #0052a3',
    boxShadow: '0 6px 20px rgba(0, 82, 163, 0.25)',
  },
  pixelAvatar: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  name: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#0a2444',
    marginBottom: '12px',
    lineHeight: '1.3',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#2e5c9e',
    marginBottom: '0',
    letterSpacing: '0.5px',
    fontWeight: '500',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    padding: '30px 20px',
    background: '#ffffff',
    borderBottom: '2px solid #d4e8f7',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 8px rgba(0, 82, 163, 0.06)',
  },
  navButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#f0f7ff',
    border: '1px solid #c5ddf0',
    color: '#1a3a52',
    padding: '12px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.85rem',
    fontWeight: '500',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  navButtonActive: {
    background: '#0052a3',
    color: '#ffffff',
    borderColor: '#0052a3',
    boxShadow: '0 4px 16px rgba(0, 82, 163, 0.4)',
  },
  main: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '60px 20px 100px',
  },
  sectionTitle: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#0a2444',
    marginBottom: '50px',
    display: 'flex',
    alignItems: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '28px',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #d4e8f7',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0, 82, 163, 0.08)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
  },
  cardImageWrapper: {
    height: '180px',
    borderBottom: '1px solid #d4e8f7',
    position: 'relative',
    background: '#e8f4ff',
    flexShrink: 0,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.95,
  },
  cardContent: {
    padding: '20px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#0a2444',
    lineHeight: '1.4',
  },
  cardBlurb: {
    fontSize: '0.95rem',
    color: '#2e5c9e',
    marginBottom: '12px',
    lineHeight: '1.5',
    flexGrow: 1,
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginTop: 'auto',
  },
  techBadge: {
    background: '#e8f4ff',
    color: '#0052a3',
    padding: '4px 10px',
    fontSize: '0.8rem',
    border: '1px solid #c5ddf0',
    fontFamily: '"Fira Code", monospace',
    display: 'inline-block',
    borderRadius: '4px',
    fontWeight: '500',
  },
  achievementBadge: {
    marginTop: '10px',
    marginBottom: '10px',
    background: '#fef3c7',
    color: '#92400e',
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '6px 10px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    borderRadius: '4px',
    border: '1px solid #fcd34d',
  },
  // RPG RESUME STYLES
  resumeContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },
  rpgBox: {
    background: '#ffffff',
    border: '1px solid #d4e8f7',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0, 82, 163, 0.08)',
    position: 'relative',
  },
  rpgHeader: {
    fontFamily: '"Inter", sans-serif',
    color: '#0052a3',
    fontSize: '1.1rem',
    fontWeight: '700',
    borderBottom: '2px solid #4a90e2',
    paddingBottom: '12px',
    marginBottom: '24px',
    letterSpacing: '0.5px',
  },
  rpgSubHeader: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#0a2444',
    marginBottom: '8px',
    lineHeight: '1.4',
  },
  rpgText: {
    fontSize: '0.95rem',
    color: '#2e5c9e',
    lineHeight: '1.6',
    marginBottom: '5px',
  },
  skillGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
  },
  skillCol: {
    marginBottom: '0'
  },
  skillBarContainer: {
    background: '#f0f7ff',
    padding: '12px',
    border: '1px solid #c5ddf0',
    color: '#1a3a52',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    borderRadius: '6px',
    fontFamily: '"Inter", sans-serif',
  },
  skillTitle: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.75rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#0052a3',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  xpBadge: {
    background: '#d4e8f7',
    color: '#0052a3',
    display: 'inline-block',
    padding: '4px 10px',
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.75rem',
    fontWeight: '600',
    marginBottom: '8px',
    borderRadius: '4px',
    border: '1px solid #a8d5f0',
  },
  pixelList: {
    listStyle: 'disc',
    paddingLeft: '20px',
    fontSize: '0.95rem',
    lineHeight: '1.7',
    color: '#1a3a52',
  },
  downloadBtn: {
    display: 'inline-block',
    background: '#0052a3',
    color: '#ffffff',
    border: 'none',
    padding: '12px 28px',
    fontFamily: '"Inter", sans-serif',
    fontWeight: '600',
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(0, 82, 163, 0.3)',
    cursor: 'pointer',
  },
  // SOCIALS
  socialCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
    background: '#ffffff',
    border: '1px solid #d4e8f7',
    textDecoration: 'none',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0, 82, 163, 0.08)',
    transition: 'all 0.3s ease',
  },
  socialText: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '1rem',
    fontWeight: '600',
    margin: '12px 0 4px',
    color: '#0a2444',
  },
  // MODAL
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(10, 36, 68, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000,
    backdropFilter: 'blur(4px)',
  },
  modal: {
    width: '90%',
    maxWidth: '700px',
    background: '#ffffff',
    border: '1px solid #d4e8f7',
    borderRadius: '16px',
    boxShadow: '0 20px 60px rgba(0, 82, 163, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '90vh',
  },
  modalHeaderBar: {
    background: '#f0f7ff',
    color: '#0a2444',
    padding: '16px 24px',
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    borderBottom: '1px solid #d4e8f7',
    borderRadius: '16px 16px 0 0',
  },
  closeBtn: {
    background: '#e8f4ff',
    border: '1px solid #c5ddf0',
    cursor: 'pointer',
    color: '#2e5c9e',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 8px',
    borderRadius: '6px',
    transition: 'all 0.2s ease',
  },
  modalInner: {
    padding: '28px',
    overflowY: 'auto',
  },
  modalImg: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    border: '1px solid #d4e8f7',
    marginBottom: '24px',
    borderRadius: '8px',
  },
  modalTitle: {
    fontFamily: '"Inter", sans-serif',
    color: '#0a2444',
    marginBottom: '8px',
    lineHeight: '1.4',
    fontSize: '1.4rem',
    fontWeight: '700',
  },
  modalDesc: {
    fontSize: '0.95rem',
    lineHeight: '1.7',
    color: '#1a3a52',
    marginBottom: '24px',
    fontFamily: '"Inter", sans-serif',
  },
  actionRow: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginTop: '24px',
  },
  actionBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: '#0052a3',
    color: '#ffffff',
    padding: '10px 18px',
    fontFamily: '"Inter", sans-serif',
    fontSize: '0.85rem',
    fontWeight: '600',
    textDecoration: 'none',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }
};