import React, { useState } from 'react';
import { Youtube, Github, Linkedin, Mail, Instagram, ExternalLink, Award, Code, User, Trophy, X, ExternalLink as LinkIcon, Heart, Zap, Star } from 'lucide-react';
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
  const profileTitle = "PLAYER 1: READY";
  const profileSubtitle = "Fullstack | Quantum Computing | Game Dev";

  const resumeData = {
    education: {
      university: "University of Texas at Dallas",
      degree: "B.S. in Computer Science; Minor in Business Intelligence & Analytics",
      gpa: "3.7/4.0",
      dates: "Aug. 2024 - May 2027",
      location: "Richardson, TX",
      coursework: "Linear Algebra, Computer Architecture, Discrete Math"
    },
    skills: {
      languages: "Java, C++, Swift, Lua, JavaScript, TypeScript, HTML/CSS, SQL",
      frameworks: "React, React Native, Electron, Node.js, Expo, Firebase",
      libraries: "Firebase SDK, Expo Router, Framer Motion, Reanimated, Axios",
      devTools: "Git, Figma, VS Code, Expo CLI",
      concepts: "Data Structures, Algorithms, OOP, API Integration, UI/UX, Fullstack Dev"
    },
    experience: [
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
      {
        title: "Frontend Software Engineer",
        company: "ACM Projects",
        location: "RIchardson, TX",
        dates: "Jan. 2025 - May 2025",
        description: [
          "Led frontend development for a 12-week cross-functional project, designing scalable architecture, reusable UI components, and intuitive navigation to enhance user experience and maintainability.",
          "Engineered integration of **OpenAI GPT + DALL·E 3 APIs** for automated dream analysis, recurring theme detection, and AI-powered visual storytelling of user-submitted logs."
        ],
      },
    ],
    projects: [
      {
        title: "Navi (AI Dashboard)",
        tech: ["Electron", "Node.js", "OpenAI", "ElevenLabs", "Gemini API"],
        dates: "Oct. 2025 - Present",
        description: [
          "Engineered an **AI-powered desktop dashboard** using **Electron**, consolidating productivity tools (Spotify, Zoom) into a unified interface with system stat monitoring and voice-controlled app management via **PowerShell**.",
          "Integrated **GPT-4o (STT)** and **ElevenLabs (TTS)** for bidirectional voice interaction, alongside **NodeMailer** for email automation, **Spotify API** for media control, and **Gemini API** for document generation.",
          "Developed a companion **Chrome Extension** that parses resumes into JSON for autofilling applications and utilizes on-page text extraction for context-aware AI Q&A."
        ],
        blurb: "AI-powered desktop assistant & dashboard.",
        image: Navi2, // Ensure you have this import or switch to Navi
        status: "WIP",
        liveLink: null,
        repoLink: null,
        test: true // Set to true so it appears in the Resume/Projects section
      },
      {
        title: "Crew Create",
        tech: ["React", "Vite", "Firebase"],
        dates: "Jun. 2025 - Present",
        description: [
          "Developing a **fullstack collaboration platform** for indie game developers to share projects, communicate in real-time, and streamline workflows, featuring responsive UI and optimized state management.",
          "Implemented **Firebase authentication, real-time database, and monetization tools**, supporting secure user access, persistent project data, and integrated payment tracking for sustainable growth."
        ],
        blurb: "Fullstack platform for indie game devs.",
        image: CrewCreate,
        status: "static",
        liveLink: null,
        repoLink: "https://github.com/REdR0bbin2E/UpdateWebsite",
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
        test: true
      },
      {
        title: "Interactive Elimination Game",
        tech: ["React", "Firebase", "Cloud Storage"],
        dates: "Oct. 2025",
        description: [
          "Engineered a **real-time, browser-based voting and elimination game** utilizing **React** for the frontend and **Firebase Firestore** for instant data synchronization across all clients.",
          "Developed a password-protected **Host Console (Admin)** to manage the game flow, including setting question rounds, adjusting player points, and managing elimination.",
          "Implemented secure player registration with **Firebase Storage** for image uploads, ensuring a robust, full-stack application for live, interactive gameplay."
        ],
        blurb: "Real-time voting and elimination game.",
        image: PaWebsite,
        status: "deployed",
        liveLink: null,
        repoLink: null,
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
        test: false
      },
      {
        title: "Late Night Jammin (LNJ)",
        blurb: "Game jam style website for friend groups.",
        description: "WIP.",
        tech: ["TBD", "TBD", "TBD"],
        image: Placeholder,
        status: "WIP",
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
        status: "WIP",
        liveLink: null,
        repoLink: null,
        test: false
      }
    ],
    leadership: [
      {
        title: "Logistics Officer",
        organization: "ACM Community",
        dates: "2024 - Present",
        description: [
          "Organized **hands-on workshops** and socials with 50+ attendees, covering web/mobile development topics (React, Expo, CI/CD) to strengthen technical skills and peer collaboration."
        ]
      },
      {
        title: "Workshops Officer",
        organization: "FinTech Workshop",
        dates: "2024 - Present",
        description: [
          "Coordinated technical sessions on **blockchain, finance, and software engineering**, introducing students to emerging technologies and practical career applications through engaging events."
        ]
      },
      {
        title: "Peer Advisor",
        organization: "Residence Hall Housing (RHH)",
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

  const socials = [
    { name: "GitHub", icon: Github, link: "https://github.com/REdR0bbin2E", username: "@REdR0bbin2E" },
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/mayowa-akinyede-cs/", username: "Mayowa Akinyede" },
    { name: "Email", icon: Mail, link: null, username: "Mayo.akin2@gmail.com" },
    { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/akacompsci/", username: "@akacompsci" },
    { name: "YouTube", icon: Youtube, link: null, username: "Coming Soon.." }
  ];

  // Helper to process text formatting (converting **text** to bold)
  const formatText = (text) => {
    if (!text) return "";
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  const getStatusBadge = (status) => {
    const baseStyle = {
      padding: '4px 8px',
      fontSize: '12px',
      fontFamily: '"Press Start 2P", cursive',
      border: '2px solid #000',
      boxShadow: '2px 2px 0px 0px #000',
      color: '#000',
      textTransform: 'uppercase',
      display: 'inline-block'
    };

    if (status === 'deployed') return { style: { ...baseStyle, background: '#00ff00' }, text: 'ONLINE' };
    if (status === 'WIP') return { style: { ...baseStyle, background: '#ffff00' }, text: 'LOADING' };
    if (status === 'static') return { style: { ...baseStyle, background: '#a8a8a8' }, text: 'LOCKED' };
    return { style: baseStyle, text: 'UNKNOWN' };
  };

  return (
    <div style={styles.portfolio}>
      {/* GLOBAL FONTS & CRT EFFECT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
        
        body { margin: 0; background-color: #1a1a2e; }
        strong { color: #00e5ff; font-weight: normal; } /* Highlight bold words in cyan */
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 12px; }
        ::-webkit-scrollbar-track { background: #1a1a2e; border-left: 2px solid #333; }
        ::-webkit-scrollbar-thumb { background: #ff0055; border: 2px solid #000; }
        ::-webkit-scrollbar-thumb:hover { background: #ff4d88; }

        /* CRT Scanline Effect */
        .scanlines {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
          pointer-events: none; z-index: 9999;
        }
      `}</style>

      <div className="scanlines"></div>

      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.avatarContainer}>
            <img src={Mayo} style={styles.pixelAvatar} alt="Profile" />
            <div style={styles.onlineStatus}></div>
          </div>
          <h1 style={styles.name}>{profileName}</h1>
          <div style={styles.levelBadge}>LEVEL 19 <span style={{ color: '#ff0055' }}>DEV</span></div>
          <p style={styles.subtitle}>{profileSubtitle}</p>
          <div style={styles.statsRow}>
            <span style={styles.statItem}><Heart size={16} fill="red" color="red" /> HP 100/100</span>
            <span style={styles.statItem}><Zap size={16} fill="yellow" color="yellow" /> MP 100/100</span>
          </div>
        </div>
      </header>

      {/* NES CONTROLLER STYLE NAV */}
      <nav style={styles.navigation}>
        {['projects', 'hackathons', 'resume', 'socials'].map((section) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95, y: 0 }}
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
            <span style={{ marginTop: '8px' }}>{section.toUpperCase()}</span>
          </motion.button>
        ))}
      </nav>

      <main style={styles.main}>
        {activeSection === 'projects' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <PixelIcon icon={Code} color="#00e5ff" />
              SELECT MISSION
            </h2>
            <div style={styles.grid}>
              {resumeData.projects.map((project, idx) => {
                const badge = getStatusBadge(project.status);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
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
              <PixelIcon icon={Trophy} color="#ffd700" />
              ACHIEVEMENTS
            </h2>
            <div style={styles.grid}>
              {hackathons.map((hack, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  style={{ ...styles.card, border: '4px solid #ffd700', boxShadow: '8px 8px 0px 0px #b8860b' }}
                  onClick={() => openModal(hack, 'hackathon')}
                >
                  <div style={styles.cardImageWrapper}>
                    <img src={hack.image || Placeholder} style={styles.cardImage} alt="hack" />
                  </div>
                  <div style={styles.cardContent}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <span style={{ fontFamily: 'VT323', fontSize: '1.2rem', color: '#fff', background: '#333', padding: '2px 6px' }}>{hack.date}</span>
                      <span style={{ fontFamily: 'VT323', fontSize: '1.2rem', color: '#ffd700' }}>{hack.duration}</span>
                    </div>
                    <h3 style={{ ...styles.cardTitle, color: '#ffd700', fontSize: '1.1rem' }}>{hack.title}</h3>
                    <p style={{ color: '#fff', fontFamily: 'VT323', fontSize: '1.3rem', marginBottom: '8px' }}>Project: {hack.project}</p>
                    <div style={styles.achievementBadge}>
                      <Star size={12} fill="#000" /> {hack.achievement}
                    </div>
                    <p style={styles.cardBlurb}>{hack.blurb}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'resume' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <PixelIcon icon={User} color="#ff0055" />
              PLAYER STATS
            </h2>
            <div style={styles.resumeContainer}>

              {/* EDUCATION - MAIN QUEST */}
              <div style={styles.rpgBox}>
                <h3 style={styles.rpgHeader}>MAIN QUEST (EDUCATION)</h3>
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
                <h3 style={styles.rpgHeader}>INVENTORY (SKILLS)</h3>
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
                <h3 style={styles.rpgHeader}>SIDE QUESTS (EXPERIENCE)</h3>
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
                <h3 style={styles.rpgHeader}>COMPLETED RAIDS (PROJECTS)</h3>
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
                <h3 style={styles.rpgHeader}>GUILD LEADERSHIP</h3>
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
                <div style={{ marginTop: '15px', padding: '10px', background: '#222', borderLeft: '4px solid #ff0055' }}>
                  <p style={{ fontFamily: '"Press Start 2P"', fontSize: '0.7rem', color: '#fff' }}>OTHER AFFILIATIONS:</p>
                  <p style={{ fontFamily: 'VT323', fontSize: '1.2rem', color: '#aaa' }}>UTD National Society of Black Engineers • Anime Orchestra Ensemble • InterVarsity Fellowship</p>
                </div>
              </div>

              {/* HOBBIES */}
              <div style={styles.rpgBox}>
                <h3 style={styles.rpgHeader}>CHARACTER TRAITS (HOBBIES)</h3>
                {resumeData.hobbies.map((hobby, idx) => (
                  <div key={idx} style={{ marginBottom: '15px' }}>
                    <h4 style={{ ...styles.rpgSubHeader, color: '#00e5ff' }}>{hobby.title}</h4>
                    <p style={styles.rpgText}>{hobby.description}</p>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href={MayosResume} style={styles.downloadBtn}>DOWNLOAD_RESUME.PDF</a>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'socials' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <PixelIcon icon={Mail} color="#00ff00" />
              MULTIPLAYER LOBBY
            </h2>
            <div style={styles.grid}>
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  style={{ ...styles.socialCard, borderColor: idx % 2 === 0 ? '#00e5ff' : '#ff0055' }}
                >
                  <social.icon size={48} color={idx % 2 === 0 ? "#00e5ff" : "#ff0055"} />
                  <h3 style={styles.socialText}>{social.name}</h3>
                  <span style={{ fontFamily: 'VT323', color: '#fff', fontSize: '1.2rem' }}>{social.username}</span>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* PIXEL MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <div style={styles.modalOverlay} onClick={closeModal}>
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 10 }}
              style={styles.modal}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={styles.modalHeaderBar}>
                <span>ITEM_DETAILS.exe</span>
                <button onClick={closeModal} style={styles.closeBtn}><X size={16} /></button>
              </div>
              <div style={styles.modalInner}>
                <img src={selectedItem.image || Placeholder} style={styles.modalImg} alt="detail" />

                {/* Modal Title Block */}
                <div style={{ borderBottom: '2px solid #333', paddingBottom: '15px', marginBottom: '15px' }}>
                  <h2 style={styles.modalTitle}>{selectedItem.title}</h2>
                  {modalType === 'hackathon' && <p style={{ color: '#ffd700', fontFamily: 'VT323', fontSize: '1.4rem' }}>{selectedItem.achievement}</p>}
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
                  <div style={{ background: '#222', padding: '10px', marginBottom: '20px', border: '1px solid #444' }}>
                    <p style={{ fontFamily: 'VT323', color: '#fff' }}><strong>Team Size:</strong> {selectedItem.teamSize}</p>
                    <p style={{ fontFamily: 'VT323', color: '#fff' }}><strong>Duration:</strong> {selectedItem.duration}</p>
                  </div>
                )}

                {/* Buttons */}
                <div style={styles.actionRow}>
                  {selectedItem.liveLink && selectedItem.liveLink !== '#' && (
                    <a href={selectedItem.liveLink} style={{ ...styles.actionBtn, background: '#00ff00', color: 'black' }} target="_blank">
                      <LinkIcon size={16} /> LAUNCH
                    </a>
                  )}
                  {selectedItem.repoLink && (
                    <a href={selectedItem.repoLink} style={styles.actionBtn} target="_blank">
                      <Github size={16} /> SOURCE_CODE
                    </a>
                  )}
                  {selectedItem.devpostLink && (
                    <a href={selectedItem.devpostLink} style={{ ...styles.actionBtn, background: '#00e5ff', color: 'black' }} target="_blank">
                      <ExternalLink size={16} /> DEVPOST
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

// --- RETRO STYLES ---
const styles = {
  portfolio: {
    minHeight: '100vh',
    backgroundColor: '#1a1a2e',
    color: '#e0e0e0',
    fontFamily: '"VT323", monospace',
    overflowX: 'hidden',
  },
  hero: {
    textAlign: 'center',
    padding: '80px 20px 40px',
    background: 'linear-gradient(180deg, #16213e 0%, #1a1a2e 100%)',
    borderBottom: '4px solid #000',
  },
  avatarContainer: {
    width: '140px',
    height: '140px',
    margin: '0 auto 20px',
    position: 'relative',
    background: '#000',
    padding: '4px',
    border: '4px solid #fff',
    boxShadow: '8px 8px 0px 0px #ff0055',
  },
  pixelAvatar: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  onlineStatus: {
    width: '20px',
    height: '20px',
    background: '#00ff00',
    position: 'absolute',
    bottom: '-10px',
    right: '-10px',
    border: '2px solid #000',
    boxShadow: '2px 2px 0px 0px #000',
  },
  name: {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '2rem',
    color: '#fff',
    textShadow: '4px 4px #ff0055',
    marginBottom: '10px',
    lineHeight: '1.5',
  },
  levelBadge: {
    display: 'inline-block',
    background: '#000',
    color: '#fff',
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '0.8rem',
    padding: '8px 16px',
    border: '2px solid #333',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#00e5ff',
    marginBottom: '15px',
    letterSpacing: '1px',
    maxWidth: '600px',
    margin: '0 auto 15px',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '0.7rem',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    padding: '30px 20px',
    background: '#1a1a2e',
  },
  navButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#222',
    border: '4px solid #444',
    borderBottom: '4px solid #111',
    borderRight: '4px solid #111',
    color: '#fff',
    padding: '15px 25px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '0.7rem',
    outline: 'none',
  },
  navButtonActive: {
    background: '#ff0055',
    borderColor: '#ff99bb',
    borderBottomColor: '#990033',
    borderRightColor: '#990033',
    boxShadow: '0 0 15px #ff0055',
  },
  main: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px 100px',
  },
  sectionTitle: {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '1.5rem',
    color: '#fff',
    marginBottom: '40px',
    display: 'flex',
    alignItems: 'center',
    textShadow: '2px 2px #000',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
  },
  card: {
    background: '#16213e',
    border: '4px solid #00e5ff',
    boxShadow: '8px 8px 0px 0px #005f6b',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImageWrapper: {
    height: '180px',
    borderBottom: '4px solid #00e5ff',
    position: 'relative',
    background: '#000',
    flexShrink: 0,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.9,
  },
  cardContent: {
    padding: '20px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '1rem',
    marginBottom: '10px',
    color: '#00e5ff',
    lineHeight: '1.4',
  },
  cardBlurb: {
    fontSize: '1.2rem',
    color: '#cccccc',
    marginBottom: '15px',
    lineHeight: '1.2',
    flexGrow: 1,
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: 'auto',
  },
  techBadge: {
    background: '#333',
    color: '#fff',
    padding: '4px 8px',
    fontSize: '0.9rem',
    border: '1px solid #555',
    fontFamily: '"VT323", monospace',
    display: 'inline-block',
  },
  achievementBadge: {
    marginTop: '10px',
    marginBottom: '10px',
    background: '#ffd700',
    color: '#000',
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '0.6rem',
    padding: '8px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    boxShadow: '2px 2px 0 #b8860b',
  },
  // RPG RESUME STYLES
  resumeContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  rpgBox: {
    background: '#111',
    border: '2px solid #fff',
    padding: '25px',
    boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
    position: 'relative',
  },
  rpgHeader: {
    fontFamily: '"Press Start 2P", cursive',
    color: '#ffd700',
    fontSize: '1rem',
    borderBottom: '2px solid #ffd700',
    paddingBottom: '10px',
    marginBottom: '20px',
    letterSpacing: '1px',
  },
  rpgSubHeader: {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '0.9rem',
    color: '#fff',
    marginBottom: '8px',
    lineHeight: '1.4',
  },
  rpgText: {
    fontSize: '1.3rem',
    color: '#aaa',
    lineHeight: '1.4',
    marginBottom: '5px',
  },
  skillGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  skillCol: {
    marginBottom: '10px'
  },
  skillBarContainer: {
    background: '#222',
    padding: '10px',
    border: '1px solid #444',
    color: '#00e5ff',
    fontSize: '1.1rem',
    lineHeight: '1.4',
  },
  skillTitle: {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '0.7rem',
    marginBottom: '10px',
    color: '#ff0055',
  },
  xpBadge: {
    background: '#ff0055',
    color: '#fff',
    display: 'inline-block',
    padding: '4px 8px',
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '0.6rem',
    marginBottom: '5px',
  },
  pixelList: {
    listStyle: 'square',
    paddingLeft: '20px',
    fontSize: '1.3rem',
    lineHeight: '1.5',
    color: '#ddd',
  },
  downloadBtn: {
    display: 'inline-block',
    background: '#000',
    color: '#00ff00',
    border: '2px solid #00ff00',
    padding: '15px 30px',
    fontFamily: '"Press Start 2P", cursive',
    textDecoration: 'none',
    boxShadow: '4px 4px 0px 0px #005500',
    transition: 'all 0.2s',
  },
  // SOCIALS
  socialCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
    background: '#000',
    border: '2px solid #fff',
    textDecoration: 'none',
    boxShadow: '6px 6px 0px 0px #333',
  },
  socialText: {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '1rem',
    margin: '15px 0 5px',
    color: '#fff',
  },
  // MODAL
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000,
    backdropFilter: 'blur(4px)',
  },
  modal: {
    width: '90%',
    maxWidth: '700px',
    background: '#16213e',
    border: '4px solid #fff',
    boxShadow: '15px 15px 0px 0px #000',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '90vh',
  },
  modalHeaderBar: {
    background: '#fff',
    color: '#000',
    padding: '8px 15px',
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '0.8rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
  },
  closeBtn: {
    background: 'red',
    border: '2px solid #000',
    cursor: 'pointer',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '4px',
  },
  modalInner: {
    padding: '20px',
    overflowY: 'auto',
  },
  modalImg: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    border: '2px solid #fff',
    marginBottom: '20px',
    imageRendering: 'pixelated',
  },
  modalTitle: {
    fontFamily: '"Press Start 2P", cursive',
    color: '#ff0055',
    marginBottom: '5px',
    lineHeight: '1.4',
    fontSize: '1.2rem',
  },
  modalDesc: {
    fontSize: '1.3rem',
    lineHeight: '1.6',
    color: '#e0e0e0',
    marginBottom: '20px',
    fontFamily: '"VT323", monospace',
  },
  actionRow: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  actionBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: '#fff',
    color: '#000',
    padding: '12px 20px',
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '0.7rem',
    textDecoration: 'none',
    boxShadow: '4px 4px 0px 0px #000',
  }
};