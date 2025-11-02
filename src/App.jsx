import React, { useState } from 'react';
import { Youtube, Github, Linkedin, Mail, Instagram, ExternalLink, Award, Code, User, Trophy, X, ExternalLink as LinkIcon, Lock } from 'lucide-react'; // Added Instagram and Lock icons
import { animate, AnimatePresence, motion, scale } from 'framer-motion'
import Mayo from './assets/Mayo.png';
import CrewCreate from './assets/crewCreate.png';
import Nocturne from './assets/Nocturne.png';
import PaWebsite from './assets/paWebsite.png';
import PersonalWebsite from './assets/PersonalWeb.png';
import Placeholder from './assets/Placeholder1.jpg';
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

  // --- START: UPDATED DATA WITH NEW PROJECT AND INSTAGRAM ---

  const profileName = "Mayowa Akinyede"; // Replace with actual name
  const profileTitle = "Hello World! This is my digital portfolio please feel free to reach out with feedback.";
  const profileSubtitle = "Fullstack & Quantum Computing Enthusiast";

  const resumeData = {
    education: {
      university: "University of Texas at Dallas",
      degree: "Bachelor of Science in Computer Science",
      gpa: "3.7/4.0",
      dates: "Aug. 2024 - May 2027", // Updated to fit typical 4-year degree timeline for 2027 grad
      location: "Richardson, TX",
      coursework: "Linear Algebra, Computer Architecture, Discrete Math"
    },
    skills: {
      languages: "Java, C++, Swift, Lua, JavaScript, TypeScript, HTML/CSS",
      frameworks: "React, React Native, Node.js, Expo, Firebase, Q# (Microsoft Quantum Workshop)",
      libraries: "Firebase SDK, Expo Router, Framer Motion, Reanimated, Axios, Qiskit",
      devTools: "Git, Figma, VS Code, Expo CLI",
      concepts: "Data Structures, Algorithms, OOP, UI/UX, Fullstack Development, Quantum Computing Basics"
    },
    experience: [
      {
        title: "Technical Consultant Agent",
        company: "Best Buy - Geek Squad",
        location: "Allen, TX",
        dates: "Dec. 2024 - May 2025",
        description: [
          "Diagnosed, repaired, and optimized 50+ customer devices per week including laptops, desktops, and mobile systems, performing hardware replacements, virus removals, and OS reinstalls that restored functionality and extended device lifespan.",
          "Collaborated with a cross-functional 10-agent team, contributing to knowledge sharing, process improvements, and consistently maintaining a 99% satisfaction rating at the No. 1 ranked Best Buy in North Texas."
        ]
      },
      {
        title: "Independent Study & Mentorship (ISM)",
        company: "Mentee: Quantum Computing",
        location: "Frisco, TX",
        dates: "Aug. 2023 - May 2024",
        description: [
          "Conducted independent research on Quantum Error Mitigation, applying noise-reduction techniques on small quantum circuits and presenting findings at a professional symposium to peers and faculty experts.",
          "Strengthened professional research and communication skills by collaborating with an industry mentor through weekly meetings, reports, and technical presentations, gaining valuable experience in collaborative project development."
        ]
      }
    ],
    projects: [
      {
        title: "Interactive Elimination Game",
        tech: ["React", "Firebase", "Cloud Storage"],
        dates: "Oct. 2025",
        // Concise resume bullets
        description: [
          "(Live Link Isnt Set because of Privacy reasons reach out if ur curious about it!) Engineered a **real-time, browser-based voting and elimination game** utilizing **React** for the frontend and **Firebase Firestore** for instant data synchronization across all clients.",
          "Developed a password-protected **Host Console (Admin)** to manage the game flow, including setting question rounds, adjusting player points, and managing elimination.",
          "Implemented secure player registration with **Firebase Storage** for image uploads, ensuring a robust, full-stack application for live, interactive gameplay."
        ],
        // Expanded portfolio content
        blurb: "Real-time voting and elimination game.",
        image: PaWebsite,
        status: "deployed",
        liveLink: null,
        repoLink: null,
        test: false
      },
      {
        title: "Create Collaborate (Crew Create)",
        tech: ["React", "Vite", "Firebase"],
        dates: "Jun. 2025 - Present",
        description: [
          "Developing a **fullstack collaboration platform** for indie game developers to share projects, communicate in real-time, and streamline workflow, featuring responsive UI and optimized state management.",
          "Implemented **Firebase authentication, real-time database, and monetization tools**, supporting secure user access, persistent project data, and integrated payment tracking for sustainable growth."
        ],
        blurb: "Fullstack platform for indie game devs.",
        image: CrewCreate,
        status: "WIP",
        liveLink: "#",
        repoLink: "https://github.com/REdR0bbin2E/UpdateWebsite",
        test: true
      },
      {
        title: "Nocturnal Dream Logger (Nocturne)",
        tech: ["React Native", "Expo", "TypeScript", "OpenAI APIs"],
        dates: "Jan. 2025 - May 2025",
        description: [
          "Led frontend development for a 12-week cross-functional project of 4 engineers, designing scalable architecture, reusable UI components, and intuitive navigation to enhance user experience and maintainability.",
          "Engineered integration of **OpenAI GPT + DALLE-3 APIs** for automated dream analysis, recurring theme detection, and AI-powered visual storytelling of user-submitted logs."
        ],
        blurb: "AI-powered dream analysis mobile app.",
        image: Nocturne,
        status: "static", // Updated to new static tag
        liveLink: null, // Set to null/empty to hide link button
        repoLink: "https://github.com/REdR0bbin2E/Nocturne", // Example private repo link
        test: true
      },
      {
        title: "Personal Portfolio Site",
        blurb: "A responsive, modern web portfolio.",
        description: "This very portfolio! A fully responsive single-page application built with React, styled using inline CSS for rapid prototyping, and focused on performance and clean UI/UX design. Demonstrates proficiency in React state management, component architecture, and responsive design principles.",
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
      },
      {
        title: "Manga To Video (MTV)",
        blurb: "Manga to video converter.",
        description: "WIP.",
        tech: ["TBD", "TBD", "TBD"],
        image: Placeholder,
        status: "WIP",
        liveLink: null,
        repoLink: null,
        test: false
      },
    ],
    leadership: [
      {
        title: "Logistics Officer",
        organization: "ACM Community",
        dates: "2024 - Present",
        description: [
          "Organized and facilitated **hands-on workshops/socials** with 50+ attendees, covering web/mobile development topics such as React, Expo, and deployment pipelines to strengthen technical skills and peer collaboration."
        ]
      },
      {
        title: "Workshops Officer",
        organization: "FinTech Workshop",
        dates: "2024 - Present",
        description: [
          "Coordinated technical sessions on **blockchain, finance, and software engineering**, introducing students to emerging technologies and practical career applications through engaging events and socials."
        ]
      },
      {
        title: "Peer Advisor",
        organization: "Residence Hall Housing (RHH)",
        dates: "2024 - Present",
        description: [
          "Hosted monthly community events and provided peer mentorship, fostering residential engagement, academic support, and a positive student living environment for each and every one of my residents."
        ]
      }
    ],
    hobbies: [
      {
        title: "Skating",
        description: "I’ve been skating for about three months now, and honestly, it’s been a blast. I can land the basics—ollies, kickflips, and shove-its (on good days)! Skating’s become my go-to way to clear my head after long study sessions. Nothing beats cruising around and just feeling free for a while."
      },
      {
        title: "Music",
        description: "Music’s always been part of who I am. I was in band all through middle and high school—marching band included—and played both the clarinet and alto sax. Lately, I’ve been trying to dust off those skills again. I’m also a huge concert person; I’ve seen Grent Perez, Vansire, and Ginger Root live, and I swear there’s nothing like that post-concert energy."
      },
      {
        title: "Soccer & Volleyball",
        description: "I grew up loving sports, especially soccer and volleyball. They’re a fun way to stay active and competitive, but mostly I just love the team vibe—lots of laughs, energy, and the occasional overly serious match that feels like the World Cup."
      },
      {
        title: "Anime & Manga",
        description: "I’m a big fan of anime and manga—especially shonen series like Hunter x Hunter and Naruto. I love the creativity, the world-building, and those moments that make you want to train like you’re about to unlock your own power-up arc."
      },
      {
        title: "Game Development",
        description: "I started out making games in Roblox Studio back in the day (shoutout to my younger self experimenting with Lua scripts). Recently, I’ve been diving into indie game development—something about creating interactive worlds just clicks with me. Nintendo was a huge inspiration growing up; my old DS is probably what first made me want to build worlds of my own."
      }


    ]
  };

  // The 'projects' array in the component is used for the Projects tab.
  // We'll merge the resume projects with the dummy projects for a more complete portfolio showcase.

  const hackathons = [
    {
      title: "HackUTA 2025",
      project: "Echo",
      achievement: "More Info",
      date: "Oct 2025",
      blurb: "AI-powered Grief Reduction Application",
      description: "Echo is a mobile app that transforms memories into living, interactive experiences. Using advanced AI and voice synthesis, it allows users to create digital memorials of loved ones—preserving their voice, personality, and spirit through heartfelt conversations. Built with empathy and modern technology, Echo offers a safe space for reflection, healing, and ongoing connection beyond loss.",
      tech: ["Python", "Gemini API", "Flask", "React", "Auth0", "Fish Audio API"],
      teamSize: 4,
      duration: "24 hours"
    },
    {
      title: "UNTNSBE Bytes for Borders",
      project: "CommConnect",
      achievement: "More Info",
      date: "Oct 2025",
      blurb: "Volunteering opportunities website",
      description: "CommConnect is a website that connects college students with local volunteering oportunities in the area.",
      tech: ["React", "Node.js", "Firebase", "Clark API"],
      teamSize: 4,
      duration: "24 hours"
    }
  ];

  const socials = [
    { name: "GitHub", icon: Github, link: "https://github.com/REdR0bbin2E", username: "@REdR0bbin2E" },
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/mayowa-akinyede-cs/", username: "Mayowa Akinyede" },
    { name: "Email", icon: Mail, link: null, username: "Mayo.akin2@gmail.com" },
    { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/akacompsci/", username: "@akacompsci" }, // New Instagram entry
    { name: "YouTube", icon: Youtube, link: null, username: "Coming Soon.." }
  ];

  // --- END: UPDATED DATA WITH NEW PROJECT AND INSTAGRAM ---

  // Helper function to render resume list items (used for Experience, Projects, Leadership)
  const renderResumeList = (items) => (
    <ul style={styles.resumeList}>
      {items.map((item, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul>
  );

  // Helper function to determine project status badge style and text
  const getStatusBadge = (status) => {
    if (status === 'deployed') {
      return { style: styles.statusDeployed2, text: '✓ Deployed' };
    } else if (status === 'WIP') {
      return { style: styles.statusWIP2, text: '🚧 WIP' };
    } else if (status === 'static') {
      return { style: styles.statusStatic2, text: '🔒 Static/Private' };
    }
    return { style: styles.statusWIP2, text: '🚧 WIP' }; // Default fallback
  };


  return (
    <div style={styles.portfolio}>
      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.profileCircle}>
            <img src={Mayo} size={64} style={{ maxWidth: "125px", borderRadius: 360 }} />
          </div>
          <h1 style={styles.name}>{profileName}</h1>
          <p style={styles.title}>{profileTitle}</p>
          <p style={styles.subtitle}>{profileSubtitle}</p>
        </div>
        <div style={styles.heroDecoration}></div>
      </header>

      <nav style={styles.navigation}>
        <motion.button
          whileHover={{ scale: 1.1 }}

          style={{ ...styles.navButton, ...(activeSection === 'projects' ? styles.navButtonActive : {}) }}
          onClick={() => setActiveSection('projects')}
        >
          <Code size={20} />
          <span>Projects</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}

          style={{ ...styles.navButton, ...(activeSection === 'hackathons' ? styles.navButtonActive : {}) }}
          onClick={() => setActiveSection('hackathons')}
        >
          <Trophy size={20} />
          <span>Hackathons</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}

          style={{ ...styles.navButton, ...(activeSection === 'resume' ? styles.navButtonActive : {}) }}
          onClick={() => setActiveSection('resume')}
        >
          <User size={20} />
          <span>Resume</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}

          style={{ ...styles.navButton, ...(activeSection === 'socials' ? styles.navButtonActive : {}) }}
          onClick={() => setActiveSection('socials')}
        >
          <Award size={20} />
          <span>Connect</span>
        </motion.button>
      </nav>

      <main style={styles.main}>
        {activeSection === 'projects' && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Personal Projects</h2>
            <div style={styles.grid}>
              {resumeData.projects.map((project, idx) => {
                const { style: statusStyle, text: statusText } = getStatusBadge(project.status);
                return (
                  <motion.div
                    key={idx}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, border: "2px #dbafafff" }}
                    style={{ ...styles.card, animationDelay: `${idx * 0.1}s` }}
                    onClick={() => openModal(project, 'project')}
                  >
                    <div style={styles.projectImage}>
                      {/* Fallback image if a project doesn't have one */}
                      <img src={project.image || "https://images.unsplash.com/photo-1542831371-29b0f74f9449?w=400&h=250&fit=crop"} alt={project.title} style={styles.image} />
                      <span style={statusStyle}>
                        {statusText}
                      </span>
                    </div>
                    <div style={styles.cardContent}>
                      <div style={styles.cardHeader}>
                        <h3 style={styles.cardTitle}>{project.title}</h3>
                      </div>
                      <p style={styles.cardDescription}>{project.blurb}</p>
                      <div style={styles.techStack}>
                        {project.tech.map((tech, i) => (
                          <span key={i} style={styles.techBadge}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )
        }

        {
          activeSection === 'hackathons' && (
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Hackathon Achievements</h2>
              <div style={styles.grid}>
                {hackathons.map((hack, idx) => (
                  <div
                    key={idx}
                    style={{ ...styles.card, ...styles.hackCard, animationDelay: `${idx * 0.1}s` }}
                    onClick={() => openModal(hack, 'hackathon')}
                  >
                    <div style={styles.hackHeader}>
                      <Trophy size={24} color="#743636" />
                      <span style={styles.hackDate}>{hack.date}</span>
                    </div>
                    <h3 style={styles.cardTitle}>{hack.title}</h3>
                    <p style={styles.hackProject}>{hack.project}</p>
                    <p style={styles.cardDescription}>{hack.blurb}</p>
                    <div style={styles.achievement}>{hack.achievement}</div>
                  </div>
                ))}
              </div>
            </div>
          )
        }

        {
          activeSection === 'resume' && (
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Resume</h2>
              <div style={styles.resumeContainer}>
                <div style={styles.resumeSection}>
                  <h3 style={styles.resumeSectionTitle}>Education</h3>
                  <div style={styles.resumeItem}>
                    <h4 style={styles.resumeItemTitle}>{resumeData.education.degree}</h4>
                    <p style={styles.resumeItemSubtitle}>{resumeData.education.university} • {resumeData.education.dates}</p>
                    <p style={styles.resumeItemDetail}>GPA: {resumeData.education.gpa}</p>
                    <p style={{ ...styles.resumeItemDetail, marginTop: 10 }}>Relevant Coursework: **{resumeData.education.coursework}**</p>

                  </div>
                </div>

                <div style={styles.resumeSection}>
                  <h3 style={styles.resumeSectionTitle}>Technical Skills</h3>
                  <div style={styles.skillsGrid}>
                    <div style={styles.skillCategory}>
                      <h4 style={styles.skillCategoryTitle}>Languages</h4>
                      <p style={styles.skillList}>{resumeData.skills.languages}</p>
                    </div>
                    <div style={styles.skillCategory}>
                      <h4 style={styles.skillCategoryTitle}>Frameworks</h4>
                      <p style={styles.skillList}>{resumeData.skills.frameworks}</p>
                    </div>
                    <div style={styles.skillCategory}>
                      <h4 style={styles.skillCategoryTitle}>Libraries</h4>
                      <p style={styles.skillList}>{resumeData.skills.libraries}</p>
                    </div>
                    <div style={styles.skillCategory}>
                      <h4 style={styles.skillCategoryTitle}>Developer Tools</h4>
                      <p style={styles.skillList}>{resumeData.skills.devTools}</p>
                    </div>
                    <div style={styles.skillCategory}>
                      <h4 style={styles.skillCategoryTitle}>Concepts</h4>
                      <p style={styles.skillList}>{resumeData.skills.concepts}</p>
                    </div>
                  </div>
                </div>

                <div style={styles.resumeSection}>
                  <h3 style={styles.resumeSectionTitle}>Experience</h3>
                  {resumeData.experience.map((job, idx) => (
                    <div style={styles.resumeItem} key={idx}>
                      <h4 style={styles.resumeItemTitle}>{job.title}</h4>
                      <p style={styles.resumeItemSubtitle}>{job.company} • {job.dates}</p>
                      {renderResumeList(job.description)}
                    </div>
                  ))}
                </div>

                <div style={styles.resumeSection}>
                  <h3 style={styles.resumeSectionTitle}>Projects</h3>
                  {/* Reusing existing project data to display in resume format */}
                  {resumeData.projects.map((project, idx) => (


                    project.test === true && (
                      <div style={styles.resumeItem} key={idx}>
                        <h4 style={styles.resumeItemTitle}>{project.title}</h4>
                        <p style={styles.resumeItemSubtitle}>Technologies: {project.tech.join(', ')} • {project.dates}</p>
                        {/* Remove bold markdown for resume list item to keep it clean */}
                        {renderResumeList(project.description.map(desc => desc.replace(/\*\*/g, '')))}
                      </div>
                    )




                  ))}
                </div>

                <div style={styles.resumeSection}>
                  <h3 style={styles.resumeSectionTitle}>Leadership & Involvement</h3>
                  {resumeData.leadership.map((role, idx) => (
                    <div style={styles.resumeItem} key={idx}>
                      <h4 style={styles.resumeItemTitle}>{role.title} ({role.organization})</h4>
                      <p style={styles.resumeItemSubtitle}>UT Dallas • {role.dates}</p>
                      {renderResumeList(role.description.map(desc => desc.replace(/\*\*/g, '')))}
                    </div>
                  ))}
                  <h4 style={{ color: "#583434ff" }}>Other Involvement:</h4>
                  <p style={{ color: "black" }}>UTD National Society of Black Engineers • Anime Orchestra Ensemble • InterVarsity Fellowship</p>



                </div>

                <div style={styles.resumeSection}>
                  <h3 style={styles.resumeSectionTitle}>Hobbies & Interests</h3>
                  {resumeData.hobbies.map((hobby, idx) => (
                    <div style={{ ...styles.resumeItem, color: "#6f6464ff" }} key={idx}>

                      <h4>{hobby.title}
                        <p style={{ fontWeight: 400 }}>{hobby.description}</p>

                      </h4>
                    </div>
                  ))}
                </div>


                <div style={styles.downloadButton}>
                  <a href="#" style={styles.downloadLink}>
                    Download Full Resume (PDF)
                  </a>
                </div>
              </div>
              <p style={styles.resumeNote}>*Project bullet points on the **'Projects'** tab are expanded with technical context and live links for an in-depth portfolio review.</p>
            </div>
          )
        }

        {
          activeSection === 'socials' && (
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Let's Connect</h2>
              <div style={styles.socialsGrid}>
                {socials.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.link}
                      style={{ ...styles.socialCard, animationDelay: `${idx * 0.1}s`, border: "2px solid white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div style={styles.socialIcon}>
                        <Icon size={32} />
                      </div>
                      <h3 style={styles.socialName}>{social.name}</h3>
                      <p style={styles.socialUsername}>{social.username}</p>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          )
        }
      </main >

      {/* Modal */}
      {
        selectedItem && (
          <div style={styles.modalOverlay} onClick={closeModal}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button style={styles.closeButton} onClick={closeModal}>
                <X size={24} />
              </button>

              {modalType === 'project' && (
                <>
                  <img src={selectedItem.image} alt={selectedItem.title} style={styles.modalImage} />
                  <div style={styles.modalContent}>
                    <div style={styles.modalHeader}>
                      <h2 style={styles.modalTitle}>{selectedItem.title}</h2>
                      <span style={getStatusBadge(selectedItem.status).style}>
                        {getStatusBadge(selectedItem.status).text}
                      </span>
                    </div>
                    <p style={styles.modalDescription}>
                      {/* Render detailed description for projects, emphasizing bolded words */}
                      {Array.isArray(selectedItem.description)
                        ? selectedItem.description.map((desc, i) => <p key={i} dangerouslySetInnerHTML={{ __html: desc.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} style={{ margin: '8px 0', lineHeight: '1.6' }} />)
                        : selectedItem.description}
                    </p>
                    <div style={styles.techStack}>
                      {selectedItem.tech.map((tech, i) => (
                        <span key={i} style={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                    <div style={styles.modalButtons}>
                      {selectedItem.liveLink && selectedItem.liveLink !== '#' && (
                        <a href={selectedItem.liveLink} target="_blank" rel="noopener noreferrer" style={styles.primaryButton}>
                          <LinkIcon size={20} />
                          <span>View Live Site</span>
                        </a>
                      )}
                      {selectedItem.repoLink && (
                        <a href={selectedItem.repoLink} target="_blank" rel="noopener noreferrer" style={selectedItem.liveLink && selectedItem.liveLink !== '#' ? styles.secondaryButton : styles.primaryButton}>
                          <Github size={20} />
                          <span>View Repository</span>
                        </a>
                      )}
                    </div>
                  </div>
                </>
              )}

              {modalType === 'hackathon' && (
                <div style={styles.modalContent}>
                  <div style={styles.modalHeader}>
                    <Trophy size={32} color="#743636" />
                    <h2 style={styles.modalTitle}>{selectedItem.title}</h2>
                  </div>
                  <div style={styles.hackathonDetails}>
                    <div style={styles.detailItem}>
                      <strong>Project:</strong> {selectedItem.project}
                    </div>
                    <div style={styles.detailItem}>
                      <strong>Achievement:</strong> {selectedItem.achievement}
                    </div>
                    <div style={styles.detailItem}>
                      <strong>Date:</strong> {selectedItem.date}
                    </div>
                    <div style={styles.detailItem}>
                      <strong>Team Size:</strong> {selectedItem.teamSize} members
                    </div>
                    <div style={styles.detailItem}>
                      <strong>Duration:</strong> {selectedItem.duration}
                    </div>
                  </div>
                  <p style={styles.modalDescription}>{selectedItem.description}</p>
                  <div style={styles.techStack}>
                    {selectedItem.tech.map((tech, i) => (
                      <span key={i} style={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      }

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div >
  );
}

const styles = {
  portfolio: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #F7E7CE 0%, #DBD5B2 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  hero: {
    position: 'relative',
    background: 'linear-gradient(135deg, #562C2C 0%, #743636 100%)',
    padding: '80px 20px',
    textAlign: 'center',
    overflow: 'hidden',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    animation: 'fadeInUp 1s ease-out',
  },
  heroDecoration: {
    position: 'absolute',
    top: '-50%',
    right: '-10%',
    width: '600px',
    height: '600px',
    background: 'rgba(219, 213, 178, 0.1)',
    borderRadius: '50%',
    animation: 'float 6s ease-in-out infinite',
  },
  profileCircle: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #743636 0%, #562C2C 100%)',
    margin: '0 auto 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '4px solid #F7E7CE',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    animation: 'float 3s ease-in-out infinite',
  },
  name: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#F7E7CE',
    margin: '0 0 8px 0',
    letterSpacing: '-1px',
  },
  title: {
    fontSize: '24px',
    color: '#DBD5B2',
    margin: '0 0 8px 0',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: '16px',
    color: '#F7E7CE',
    opacity: 0.9,
    margin: 0,
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    padding: '32px 20px',
    flexWrap: 'wrap',
  },
  navButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    border: '2px solid #562C2C',
    background: 'white',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#562C2C',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  navButtonActive: {
    background: 'linear-gradient(135deg, #562C2C 0%, #743636 100%)',
    color: '#F7E7CE',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(86, 44, 44, 0.3)',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px 80px',
    width: '100%',
    boxSizing: 'border-box',
  },
  section: {
    animation: 'fadeInUp 0.6s ease-out',
  },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#562C2C',
    marginBottom: '32px',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    animation: 'fadeInUp 0.6s ease-out',
    border: '2px solid transparent',
    cursor: 'pointer',
  },
  projectImage: {
    position: 'relative',
    width: '100%',
    height: '200px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  // --- START: UPDATED STATUS STYLES WITH STATIC TAG ---
  statusDeployed: {
    position: 'absolute',
    top: '12px',
    right: '55px',
    padding: '6px 12px',
    background: '#10b981',
    color: 'white',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  },
  statusWIP: {
    position: 'absolute',
    top: '12px',
    right: '55px',
    padding: '6px 12px',
    background: '#f59e0b',
    color: 'white',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  },
  statusStatic: {
    position: 'absolute',
    top: '12px',
    right: '55px',
    padding: '6px 12px',
    background: '#4b5563', // A dark grey/blue for static/private
    color: 'white',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  },
  statusDeployed2: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '6px 12px',
    background: '#10b981',
    color: 'white',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  },
  statusWIP2: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '6px 12px',
    background: '#f59e0b',
    color: 'white',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  },
  statusStatic2: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '6px 12px',
    background: '#4b5563', // A dark grey/blue for static/private
    color: 'white',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  },
  // --- END: UPDATED STATUS STYLES WITH STATIC TAG ---
  cardContent: {
    padding: '24px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginBottom: '12px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#562C2C',
    margin: 0,
    flex: 1,
  },
  cardDescription: {
    fontSize: '14px',
    color: '#34352C',
    lineHeight: '1.6',
    marginBottom: '16px',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  techBadge: {
    padding: '4px 12px',
    background: 'linear-gradient(135deg, #DBD5B2 0%, #F7E7CE 100%)',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#562C2C',
  },
  hackCard: {
    borderLeft: '4px solid #743636',
    padding: '24px',
  },
  hackHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  hackDate: {
    fontSize: '12px',
    color: '#743636',
    fontWeight: '600',
    background: '#F7E7CE',
    padding: '4px 12px',
    borderRadius: '20px',
  },
  hackProject: {
    fontSize: '16px',
    color: '#743636',
    fontWeight: '600',
    marginBottom: '8px',
  },
  achievement: {
    marginTop: '16px',
    padding: '8px 16px',
    background: 'linear-gradient(135deg, #562C2C 0%, #743636 100%)',
    color: '#F7E7CE',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    textAlign: 'center',
  },
  socialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  socialCard: {
    background: 'white',
    borderRadius: '16px',
    padding: '32px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    display: 'block',
    textDecoration: 'none',
    color: '#562C2C',
    border: '1px solid #ddd',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
      border: '1px solid #743636',
    },
  },
  socialIcon: {
    color: '#743636',
    marginBottom: '16px',
  },
  socialName: {
    fontSize: '20px',
    fontWeight: '700',
    margin: '0 0 4px 0',
  },
  socialUsername: {
    fontSize: '14px',
    color: '#34352C',
    margin: 0,
  },
  // Resume Styles
  resumeContainer: {
    background: 'white',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  resumeSection: {
    borderBottom: '1px solid #eee',
    paddingBottom: '20px',
    '&:last-child': {
      borderBottom: 'none',
      paddingBottom: '0',
    },
  },
  resumeSectionTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#743636',
    borderBottom: '2px solid #F7E7CE',
    paddingBottom: '8px',
    marginBottom: '20px',
  },
  resumeItem: {
    marginBottom: '15px',
  },
  resumeItemTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#562C2C',
    margin: '0 0 4px 0',
  },
  resumeItemSubtitle: {
    fontSize: '14px',
    color: '#34352C',
    margin: '0 0 8px 0',
    fontStyle: 'italic',
  },
  resumeItemDetail: {
    fontSize: '14px',
    color: '#34352C',
    margin: '0 0 4px 0',
    '& strong': {
      fontWeight: '700',
    },
  },
  resumeList: {
    paddingLeft: '20px',
    margin: '8px 0 0 0',
    fontSize: '14px',
    color: '#34352C',
    lineHeight: '1.6',
    listStyleType: 'disc',
    '& li': {
      marginBottom: '4px',
    },
    '& strong': {
      fontWeight: '700',
      color: '#562C2C',
    },
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  skillCategory: {
    padding: '10px',
    border: '1px solid #F7E7CE',
    borderRadius: '8px',
    background: '#fcfcf8',
  },
  skillCategoryTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#743636',
    marginBottom: '8px',
  },
  skillList: {
    fontSize: '14px',
    color: '#34352C',
    margin: 0,
  },
  resumeNote: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#562C2C',
    marginTop: '20px',
    fontStyle: 'italic',
  },
  // Modal Styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    animation: 'fadeIn 0.3s ease-out',
  },
  modal: {
    background: 'white',
    borderRadius: '16px',
    maxWidth: '800px',
    width: '90%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    animation: 'fadeInUp 0.4s ease-out',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    left: '15px',
    background: 'none',
    borderRadius: 1000,
    padding: 5,
    paddingBottom: 3,
    paddingTop: 3,
    background: "#d6bcbcff",
    cursor: 'pointer',
    color: '#562C2C',
    zIndex: 100,
  },
  modalImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  },
  modalContent: {
    padding: '30px',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  modalTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#562C2C',
    margin: 0,
  },
  modalDescription: {
    fontSize: '16px',
    color: '#34352C',
    lineHeight: '1.8',
    marginBottom: '20px',
    whiteSpace: 'pre-wrap',
  },
  modalButtons: {
    display: 'flex',
    gap: '16px',
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #743636 0%, #562C2C 100%)',
    color: 'white',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'opacity 0.3s ease',
    '&:hover': {
      opacity: 0.9,
    },
  },
  secondaryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    background: 'white',
    border: '2px solid #562C2C',
    color: '#562C2C',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'background 0.3s ease',
    '&:hover': {
      background: '#F7E7CE',
    },
  },
  hackathonDetails: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '10px',
    marginBottom: '20px',
    padding: '15px',
    background: '#F7E7CE',
    borderRadius: '8px',
  },
  detailItem: {
    fontSize: '14px',
    color: '#34352C',
    '& strong': {
      color: '#743636',
      fontWeight: '700',
    },
  },
  downloadButton: {
    textAlign: 'center',
    marginTop: '30px',
  },
  downloadLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    background: '#743636',
    color: 'white',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'opacity 0.3s ease',
    '&:hover': {
      opacity: 0.9,
    },
  }
};