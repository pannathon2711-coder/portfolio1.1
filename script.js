/**
 * Cyber/Tech Web Portfolio - Pannathon Phetthong (ICT Sripatum University)
 * Core Logic: Multi-Language (TH/EN), Cyber Canvas, Web Audio API, Filters, and Modals
 */

/* ===================================================================
   1. Multi-Language Dictionary (TH / EN)
   =================================================================== */
const i18nData = {
  th: {
    spec_student: "รหัสนักศึกษา",
    spec_faculty: "คณะ / สาขา",
    spec_status: "สถานะระบบ",
    nav_hero: "หน้าแรก (Home)",
    nav_about: "เกี่ยวกับ & การศึกษา",
    nav_skills: "ทักษะ & ความเชี่ยวชาญ",
    nav_projects: "โครงงาน & ผลงาน",
    nav_certs: "กิจกรรม & เกียรติบัตร",
    nav_contact: "ติดต่อฉัน (Contact)",
    hero_badge: "🟢 ระบบพร้อมทำงาน // แฟ้มสะสมผลงานนักศึกษา ICT",
    hero_greeting: "สวัสดีครับ ยินดีต้อนรับสู่พอร์ตโฟลิโอ",
    hero_desc: "นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม ผู้มีความหลงใหลในสถาปัตยกรรมระบบเครือข่าย (Network Infrastructure), คลาวด์คอมพิวติ้ง (Cloud Computing) และการพัฒนา Full-Stack Web Application ที่ปลอดภัยและมีประสิทธิภาพสูง",
    btn_view_about: "ประวัติ & การศึกษา (About & Edu)",
    btn_view_projects: "สำรวจโครงงาน (Projects)",
    btn_contact_me: "ติดต่อฉัน (Contact)",
    btn_cv: "ดาวน์โหลด Resume / CV",
    stat_gpa: "เกรดเฉลี่ยสะสม (GPA)",
    stat_projects: "ผลงานโครงงานที่สร้าง",
    stat_dedication: "ความมุ่งมั่น & พัฒนาต่อเนื่อง",
    about_title: "เกี่ยวกับฉัน & ประวัติการศึกษา",
    about_heading: "ความมุ่งมั่นและเป้าหมายในวิชาชีพ ICT",
    about_p1: "สวัสดีครับ! ผม <strong>นายปัณณธร เพชรทอง (Pannathon Phetthong)</strong> กำลังศึกษาระดับปริญญาตรี ณ <strong>มหาวิทยาลัยศรีปทุม (Sripatum University)</strong> คณะเทคโนโลยีสารสนเทศ สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT)",
    about_p2: "ด้วยความสนใจอย่างลึกซึ้งในระบบสารสนเทศยุคใหม่ ผมมุ่งเน้นการบูรณาการระหว่าง <em>Infrastructure & Network Engineering</em> กับ <em>Modern Full-Stack Web Development</em> เพื่อสร้างโซลูชันที่เสถียร รองรับการขยายตัว และปลอดภัยตามมาตรฐานสากล",
    trait_1_title: "Network & System Design",
    trait_1_desc: "ออกแบบและจำลองระบบเครือข่าย LAN/WAN, Routing & Switch",
    trait_2_title: "Modern Web Development",
    trait_2_desc: "พัฒนาเว็บด้วย Tailwind CSS, JavaScript ES6+, React & API",
    trait_3_title: "Cloud & Virtualization",
    trait_3_desc: "จัดการ Linux Server, Docker Containers & Virtual Machines",
    trait_4_title: "Cyber Awareness & ICT",
    trait_4_desc: "ความตระหนักรู้ด้านความปลอดภัยไซเบอร์และ พ.ร.บ. ข้อมูล",
    edu_timeline_title: "เส้นทางการศึกษา (Education Timeline)",
    edu_spu_name: "มหาวิทยาลัยศรีปทุม (Sripatum University)",
    edu_spu_year: "2565 - ปัจจุบัน (กำลังศึกษา)",
    edu_spu_degree: "ปริญญาตรี วท.บ. สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) | คณะเทคโนโลยีสารสนเทศ",
    edu_spu_desc: "ศึกษาเจาะลึกระบบเครือข่ายคอมพิวเตอร์, การสื่อสารโทรคมนาคม, สถาปัตยกรรมคลาวด์, การพัฒนาเว็บแอปพลิเคชัน และเทคโนโลยีสารสนเทศยุคใหม่",
    edu_surasak_name: "โรงเรียนสุรศักดิ์มนตรี",
    edu_surasak_level: "มัธยมศึกษาตอนปลาย (ม.4 - ม.6)",
    edu_surasak_field: "สำเร็จการศึกษาระดับมัธยมศึกษาปีที่ 4 - 6 (กรุงเทพมหานคร)",
    edu_surasak_desc: "ศึกษาหลักสูตรมัธยมศึกษาตอนปลาย เสริมสร้างทักษะการคิดวิเคราะห์ คณิตศาสตร์ วิทยาศาสตร์ และพื้นฐานเทคโนโลยีคอมพิวเตอร์ เพื่อเตรียมพร้อมสู่ระดับอุดมศึกษา",
    edu_tangon_name: "โรงเรียนเทศบาล ๑ (แตงอ่อนเผดิมวิทยา)",
    edu_tangon_level: "มัธยมศึกษาตอนต้น (ม.1 - ม.3)",
    edu_tangon_field: "สำเร็จการศึกษาระดับมัธยมศึกษาปีที่ 1 - 3",
    edu_tangon_desc: "ปูพื้นฐานการเรียนรู้ด้านวิชาการ การคิดคำนวณ ตลอดจนกิจกรรมและทักษะการทำงานร่วมกับผู้อื่นอย่างสร้างสรรค์",
    edu_thakham_name: "โรงเรียนเทศบาลเมืองท่าข้าม ๓",
    edu_thakham_level: "ประถมศึกษา (ป.1 - ป.6)",
    edu_thakham_field: "สำเร็จการศึกษาระดับประถมศึกษาปีที่ 1 - 6",
    edu_thakham_desc: "สำเร็จการศึกษาระดับชั้นประถมศึกษา ปลูกฝังระเบียบวินัย ความคิดริเริ่มสร้างสรรค์ และจุดเริ่มต้นของความใฝ่รู้ด้านเทคโนโลยี",
    info_snapshot: "ข้อมูลสังเขป (SUMMARY)",
    lbl_name: "ชื่อ-สกุล:",
    lbl_eng_name: "Name (EN):",
    lbl_faculty: "คณะ / สาขา:",
    lbl_phone: "เบอร์โทรศัพท์:",
    lbl_location: "ที่ตั้ง:",
    lbl_status: "สถานะ:",
    val_status: "พร้อมรับงานและฝึกงาน (Available)",
    spu_spirit: "จิตวิญญาณแห่ง SPU ICT: เรียนกับตัวจริง ประสบการณ์จริง",
    spu_spirit_desc: "มุ่งเน้นการลงมือปฏิบัติจริง (Hands-on Practice) ผ่านแล็บเครือข่าย การจำลองระบบเสมือนจริง และพัฒนาโปรเจกต์ที่ตอบโจทย์อุตสาหกรรมดิจิทัลแห่งอนาคต",
    skills_title: "ทักษะ & ความเชี่ยวชาญ",
    skills_subtitle: "ทักษะด้านระบบเครือข่ายคอมพิวเตอร์, การพัฒนาเว็บแอปพลิเคชัน, คลาวด์ และเครื่องมือสารสนเทศ",
    cat_net: "Network & Infrastructure",
    cat_net_sub: "เครือข่าย & สถาปัตยกรรมระบบ",
    cat_web: "Web & Software Dev",
    cat_web_sub: "พัฒนาเว็บแอปพลิเคชัน",
    cat_cloud: "Cloud & Database",
    cat_cloud_sub: "ฐานข้อมูล & ระบบคลาวด์",
    cat_sec: "Security & DevTools",
    cat_sec_sub: "ความปลอดภัย & เครื่องมือ",
    projects_title: "โครงงาน & ผลงานเด่น",
    p1_desc: "ระบบจำลองและตรวจจับทราฟฟิกเครือข่ายภายในมหาวิทยาลัยศรีปทุม พร้อมแดชบอร์ดแสดงผลค่าสถานะ IoT และแจ้งเตือนอัตโนมัติเมื่อเกิดแบนด์วิดท์ผิดปกติ",
    p2_desc: "เว็บแอปพลิเคชันสำหรับตรวจสอบและประเมินช่องโหว่ความปลอดภัยเบื้องต้น (เช่น SSL/TLS status, Missing Security Headers, XSS risks) พร้อมออกรายงาน PDF",
    p3_desc: "ระบบสารสนเทศเพื่อการจัดการคิวตรวจคนไข้และนัดหมายออนไลน์ รองรับการส่งแจ้งเตือนผ่าน SMS/Line Notify และจัดเก็บเวชระเบียนบนฐานข้อมูลเชิงสัมพันธ์",
    p4_desc: "ระบบคลาวด์เซิร์ฟเวอร์ส่วนตัวสำหรับนักศึกษา จัดเก็บบน Linux Server พร้อมระบบเข้ารหัสข้อมูล AES-256 การจัดการสิทธิ์ผู้ใช้งาน และสำรองข้อมูลอัตโนมัติ",
    btn_view_detail: "ดูรายละเอียดโครงงาน",
    certs_title: "กิจกรรม & เกียรติบัตร",
    certs_subtitle: "การเข้าร่วมอบรมเชิงปฏิบัติการ การแข่งขันนวัตกรรม และการพัฒนาทักษะวิชาชีพอย่างต่อเนื่อง",
    c1_title: "Cisco CCNA Networking Essentials",
    c1_desc: "ผ่านการทดสอบและอบรมการคอนฟิกเครือข่ายคอมพิวเตอร์ การเชื่อมต่อเราเตอร์ สวิตช์ และการแก้ไขปัญหาบนโครงสร้างพื้นฐานเครือข่าย",
    c2_title: "SPU IT Innovation Hackathon",
    c2_desc: "เข้าร่วมแข่งขันระดมไอเดียและสร้างโปรโตไทป์นวัตกรรม ICT Smart City เพื่อแก้ไขปัญหาการเดินทางและการเชื่อมต่อข้อมูลสารสนเทศ",
    c3_title: "Google Cloud Computing Foundations",
    c3_desc: "ผ่านหลักสูตรโครงสร้างพื้นฐานคลาวด์ การจัดการ Virtual Machine, Cloud Storage และบริการคลาวด์คอมพิวติ้งระดับพื้นฐาน",
    contact_title: "ติดต่อฉัน",
    contact_subtitle: "สนใจร่วมงาน พูดคุยแลกเปลี่ยนด้านเทคโนโลยี หรือติดต่อเพื่อโอกาสฝึกงาน/ร่วมงาน",
    contact_phone_lbl: "TELEPHONE / เบอร์โทรศัพท์",
    btn_call_now: "โทรออกทันที",
    btn_copy: "คัดลอก",
    contact_email_lbl: "EMAIL / อีเมลติดต่อ",
    contact_univ_lbl: "ACADEMIC INSTITUTION / สถาบัน",
    contact_social_lbl: "NETWORK NODES / โซเชียลมีเดีย",
    form_title: "ส่งข้อความถึงปัณณธร (Send Message)",
    form_desc: "ระบบรับส่งข้อความตรงถึงนักศึกษา ตอบกลับภายใน 24 ชั่วโมง",
    form_lbl_name: "ชื่อของคุณ (Your Name) *",
    form_lbl_email: "อีเมลของคุณ (Your Email) *",
    form_lbl_subject: "หัวข้อติดต่อ (Subject) *",
    form_lbl_msg: "ข้อความ (Message) *",
    btn_submit: "ส่งข้อความทันที (TRANSMIT MESSAGE)"
  },
  en: {
    spec_student: "STUDENT ID",
    spec_faculty: "FACULTY",
    spec_status: "SYSTEM STATUS",
    nav_hero: "Home",
    nav_about: "About & Education",
    nav_skills: "Skills & Matrix",
    nav_projects: "Featured Projects",
    nav_certs: "Certs & Activities",
    nav_contact: "Contact Me",
    hero_badge: "🟢 SYSTEM ONLINE // ICT STUDENT PORTFOLIO",
    hero_greeting: "HELLO WORLD, I AM",
    hero_desc: "ICT student in School of Information Technology at Sripatum University (SPU). Passionate about Network Infrastructure, Cloud Systems, and Modern Full-Stack Web Applications with top-tier security and performance.",
    btn_view_about: "About & Education",
    btn_view_projects: "Explore Projects",
    btn_contact_me: "Contact Me",
    btn_cv: "Download Resume / CV",
    stat_gpa: "Cumulative GPA",
    stat_projects: "Projects Completed",
    stat_dedication: "Dedication & Growth",
    about_title: "About Me & Education",
    about_heading: "Passion & Career Objective in ICT",
    about_p1: "Hello! I am <strong>Mr. Pannathon Phetthong</strong>, currently pursuing my Bachelor's degree at <strong>Sripatum University (SPU)</strong>, Faculty of Information Technology, majoring in Information and Communication Technology (ICT).",
    about_p2: "Driven by a profound enthusiasm for modern computing systems, I specialize in bridging <em>Infrastructure & Network Engineering</em> with <em>Modern Full-Stack Web Development</em> to deliver resilient, scalable, and secure digital architectures.",
    trait_1_title: "Network & System Design",
    trait_1_desc: "Architecture design for LAN/WAN, VLANs, Routing & Switching",
    trait_2_title: "Modern Web Development",
    trait_2_desc: "Responsive web apps with Tailwind CSS, JavaScript ES6+, React & APIs",
    trait_3_title: "Cloud & Virtualization",
    trait_3_desc: "Management of Linux Server, Docker Containers & Virtual Machines",
    trait_4_title: "Cyber Awareness & ICT",
    trait_4_desc: "Security best practices, vulnerability mitigation & data laws",
    edu_timeline_title: "Education Timeline",
    edu_spu_name: "Sripatum University (SPU)",
    edu_spu_year: "2022 - Present (Undergraduate)",
    edu_spu_degree: "B.Sc. in Information & Communication Technology (ICT) | School of IT",
    edu_spu_desc: "Deep focus on computer networking, telecommunications, cloud architecture, full-stack software development, and modern enterprise IT solutions.",
    edu_surasak_name: "Surasakmontree School",
    edu_surasak_level: "High School (Grades 10 - 12 / M.4 - M.6)",
    edu_surasak_field: "Graduated High School Education (Bangkok)",
    edu_surasak_desc: "Completed high school curriculum with strong focus on science, mathematics, analytical thinking, and foundational computer sciences.",
    edu_tangon_name: "Thesaban 1 (Tang-on Phadoem Witthaya) School",
    edu_tangon_level: "Middle School (Grades 7 - 9 / M.1 - M.3)",
    edu_tangon_field: "Graduated Lower Secondary Education",
    edu_tangon_desc: "Strengthened academic foundations, computational logic, team collaboration, and extracurricular learning.",
    edu_thakham_name: "Thesaban Mueang Tha Kham 3 School",
    edu_thakham_level: "Primary School (Grades 1 - 6 / P.1 - P.6)",
    edu_thakham_field: "Graduated Primary Education",
    edu_thakham_desc: "Completed foundational primary education, cultivating discipline, creative curiosity, and early passion for technology.",
    info_snapshot: "PROFILE SUMMARY",
    lbl_name: "Full Name (TH):",
    lbl_eng_name: "Full Name (EN):",
    lbl_faculty: "Faculty / Major:",
    lbl_phone: "Phone Number:",
    lbl_location: "Location:",
    lbl_status: "Status:",
    val_status: "Available for Internships & Projects",
    spu_spirit: "SPU ICT Spirit: Learn with Real Professionals, Gain Real Experience",
    spu_spirit_desc: "Emphasis on real hands-on practice through networking labs, system virtualization, and developing projects that meet industry benchmarks.",
    skills_title: "Skills & Capabilities",
    skills_subtitle: "Specialized in Computer Networking, Web Development, Cloud Systems & DevTools",
    cat_net: "Network & Infrastructure",
    cat_net_sub: "Routing, Switching & Architecture",
    cat_web: "Web & Software Dev",
    cat_web_sub: "Full-Stack Web Development",
    cat_cloud: "Cloud & Database",
    cat_cloud_sub: "Databases & Cloud Architecture",
    cat_sec: "Security & DevTools",
    cat_sec_sub: "Cybersecurity & Workflows",
    projects_title: "Featured Projects",
    p1_desc: "Campus-wide network simulation and traffic monitor for Sripatum University, featuring an IoT status dashboard with automated bandwidth anomaly alerts.",
    p2_desc: "Web application for scanning and assessing fundamental security vulnerabilities (SSL/TLS status, missing security headers, XSS) with instant PDF report export.",
    p3_desc: "Online clinical appointment and patient queue management portal with SMS/Line Notify alerts and relational medical record database management.",
    p4_desc: "Secure self-hosted cloud storage for students hosted on Linux Server, with AES-256 data encryption, role-based access control, and automated backup.",
    btn_view_detail: "View Project Details",
    certs_title: "Activities & Certifications",
    certs_subtitle: "Continuous professional growth through technical workshops, hackathons, and certifications.",
    c1_title: "Cisco CCNA Networking Essentials",
    c1_desc: "Certified in networking fundamentals, router and switch configuration, and network troubleshooting through Cisco Networking Academy.",
    c2_title: "SPU IT Innovation Hackathon",
    c2_desc: "Collaborated in an intensive hackathon to prototype an ICT Smart City solution improving transit data exchange.",
    c3_title: "Google Cloud Computing Foundations",
    c3_desc: "Earned foundational credentials in Cloud Virtual Machines, Storage, and core enterprise cloud services.",
    contact_title: "Get in Touch",
    contact_subtitle: "Interested in collaboration, internship opportunities, or discussing ICT projects?",
    contact_phone_lbl: "TELEPHONE / DIRECT CALL",
    btn_call_now: "Call Directly",
    btn_copy: "Copy",
    contact_email_lbl: "EMAIL ADDRESS",
    contact_univ_lbl: "ACADEMIC INSTITUTION",
    contact_social_lbl: "NETWORK NODES / SOCIALS",
    form_title: "Transmit Message to Pannathon",
    form_desc: "Direct messaging pipeline. Responses delivered within 24 hours.",
    form_lbl_name: "Your Name *",
    form_lbl_email: "Your Email Address *",
    form_lbl_subject: "Subject *",
    form_lbl_msg: "Your Message *",
    btn_submit: "TRANSMIT MESSAGE NOW"
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'th';

/* ===================================================================
   2. Web Audio API Synthesizer (Cyber Sound FX)
   =================================================================== */
let soundEnabled = true;
let audioCtx = null;

function playCyberBeep(freq = 620, type = 'sine', duration = 0.06) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio context not allowed without interaction
  }
}

/* ===================================================================
   3. Initialization on DOM Loaded
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initCyberCanvas();
  initTypewriter();
  initNavigation();
  initFilters();
  initContactForm();
  initAudioToggles();
});

/* ===================================================================
   4. Language Switcher Logic
   =================================================================== */
function initLanguage() {
  applyLanguage(currentLang);

  document.querySelectorAll('.lang-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'th' ? 'en' : 'th';
      localStorage.setItem('portfolio-lang', currentLang);
      applyLanguage(currentLang);
      playCyberBeep(880, 'triangle', 0.08);
      showToast(currentLang === 'th' ? 'เปลี่ยนภาษาเป็น: ภาษาไทย' : 'Switched language to: English');
    });
  });
}

function applyLanguage(lang) {
  const dict = i18nData[lang] || i18nData.th;

  // Update text inside elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update button labels
  document.querySelectorAll('.lang-label').forEach(el => {
    el.textContent = lang.toUpperCase();
  });

  // Update placeholders
  const nameInput = document.getElementById('form-name');
  const subjectInput = document.getElementById('form-subject');
  const msgInput = document.getElementById('form-message');

  if (nameInput) nameInput.placeholder = lang === 'th' ? 'เช่น สมชาย ใจดี' : 'e.g. Alex Johnson';
  if (subjectInput) subjectInput.placeholder = lang === 'th' ? 'เช่น โอกาสร่วมงาน / เสนอโปรเจกต์ไอซีที' : 'e.g. Internship Opportunity / ICT Collaboration';
  if (msgInput) msgInput.placeholder = lang === 'th' ? 'รายละเอียดข้อความ หรือสิ่งที่ต้องการติดต่อ...' : 'Tell me about your project, timeline or inquiries...';
}

/* ===================================================================
   5. Typewriter Effect
   =================================================================== */
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const thPhrases = [
    "นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) ม.ศรีปทุม",
    "มุ่งมั่นพัฒนาด้าน Network Infrastructure & Cisco Systems",
    "สร้างสรรค์ Modern Web Applications ด้วย Tailwind & JavaScript",
    "หลงใหลในเทคโนโลยี Cloud Computing & Cybersecurity"
  ];

  const enPhrases = [
    "ICT Student at Sripatum University (SPU)",
    "Passionate about Network Infrastructure & Cisco Systems",
    "Crafting Modern Web Applications with Tailwind & JavaScript",
    "Enthusiastic about Cloud Computing & Cyber Defense"
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let speed = 70;

  function type() {
    const phrases = currentLang === 'th' ? thPhrases : enPhrases;
    const current = phrases[phraseIdx % phrases.length];

    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      speed = 35;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      speed = 65;
    }

    if (!isDeleting && charIdx === current.length) {
      speed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      speed = 350;
    }

    setTimeout(type, speed);
  }

  type();
}

/* ===================================================================
   6. Cyber Network Canvas (Soft Crimson Nodes & Connecting Rays)
   =================================================================== */
function initCyberCanvas() {
  const canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let nodes = [];
  const maxDistance = 140;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createNodes();
  }

  function createNodes() {
    nodes = [];
    const count = Math.floor((width * height) / 18000);
    for (let i = 0; i < count; i++) {
      const isGold = Math.random() > 0.4;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 1.8 + 1,
        color: isGold ? 'rgba(245, 158, 11, ' : 'rgba(244, 63, 94, ',
        glow: isGold ? '#f59e0b' : '#f43f5e'
      });
    }
  }

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines (Gold & Warm accents)
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.35;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = a.glow === '#f59e0b' 
            ? `rgba(245, 158, 11, ${alpha})` 
            : `rgba(244, 63, 94, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Check distance with mouse cursor
      const mdx = a.x - mouse.x;
      const mdy = a.y - mouse.y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < 120) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(251, 191, 36, ${0.45 * (1 - mDist / 120)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // Draw individual nodes
    for (let node of nodes) {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color + '0.85)';
      ctx.shadowColor = node.glow;
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(render);
  }

  window.addEventListener('resize', resize);
  resize();
  render();
}

/* ===================================================================
   7. Navigation & Scrollspy
   =================================================================== */
function initNavigation() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-overlay');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');

  // Mobile menu drawer
  mobileMenuBtn?.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
    playCyberBeep(700, 'sine', 0.05);
  });

  overlay?.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  });

  navItems.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
      overlay?.classList.add('hidden');
      playCyberBeep(600, 'triangle', 0.05);
    });
  });

  // Active section scrollspy
  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentId}`) {
        item.classList.add('active');
      }
    });
  });
}

/* ===================================================================
   8. Project Filtering & Modal
   =================================================================== */
const projectDetails = {
  1: {
    titleTH: "SPU Smart Campus IoT & Network Monitor",
    titleEN: "SPU Smart Campus IoT & Network Monitor",
    category: "Network Infrastructure & IoT",
    descTH: "ระบบจำลองและมอนิเตอร์แบนด์วิดท์เครือข่ายภายในมหาวิทยาลัยศรีปทุม เพื่อตรวจจับความผิดปกติของทราฟฟิก (Traffic Anomalies) และแสดงผลค่าข้อมูลเซ็นเซอร์ IoT ในจุดสำคัญของแคมปัสแบบเรียลไทม์",
    descEN: "Simulation and real-time network traffic monitor built for Sripatum University campus. Detects anomalous spikes, monitors network health, and visualizes IoT telemetry nodes across academic buildings.",
    featuresTH: [
      "จำลองโครงข่ายหลักด้วย Cisco Packet Tracer: Core Switches, Distribution Switches และ Access Points",
      "ระบบแจ้งเตือนอัตโนมัติผ่าน Webhook เมื่อมีการใช้แบนด์วิดท์เกิน 85%",
      "แดชบอร์ดเว็บแสดงผลค่าความหนาแน่นและสถานะการเชื่อมต่อ (Ping, Latency, Packet Loss)"
    ],
    featuresEN: [
      "Simulated campus core topology with Cisco Packet Tracer (Core, Distribution & Access Layer)",
      "Automated webhook notification on network threshold exceeding 85%",
      "Interactive web dashboard tracking latency, packet loss, and access point density"
    ],
    tech: ["Cisco Packet Tracer", "JavaScript ES6+", "REST API", "MQTT", "Tailwind CSS"]
  },
  2: {
    titleTH: "CyberShield Web Vulnerability Scanner",
    titleEN: "CyberShield Web Vulnerability Scanner",
    category: "Cybersecurity & Web Dev",
    descTH: "เครื่องมือเว็บช่วยตรวจสอบช่องโหว่ความปลอดภัยเบื้องต้นของเว็บไซต์ เช่น การขาดหายไปของ Security Headers (CSP, HSTS, X-Frame-Options), การเปิดพอร์ตที่เสี่ยง และการตรวจสอบเวอร์ชัน SSL Certificate",
    descEN: "Web-based security audit utility assessing standard web vulnerabilities including missing HTTP security headers (CSP, HSTS, X-Content-Type), SSL cipher strength, and known exposure risks.",
    featuresTH: [
      "วิเคราะห์ HTTP Response Headers และให้คะแนนความปลอดภัย (A+ ถึง F)",
      "ระบบแนะนำวิธีแก้ไขและตัวอย่างโค้ดคอนฟิก Nginx / Apache ให้ปลอดภัย",
      "สามารถ Export รายงานผลการตรวจสอบเป็น PDF สรุปส่งอาจารย์หรือผู้ดูแลระบบได้"
    ],
    featuresEN: [
      "Real-time HTTP header parser grading website defense posture (A+ to F)",
      "Security hardening recommendations with sample Nginx / Apache configurations",
      "Instant PDF audit report generation for system administrators"
    ],
    tech: ["Node.js", "Express", "Tailwind CSS", "PDFKit", "OWASP Standards"]
  },
  3: {
    titleTH: "MedConnect ICT Telehealth & Clinic Portal",
    titleEN: "MedConnect ICT Telehealth & Clinic Portal",
    category: "Full-Stack Web Application",
    descTH: "ระบบเว็บแอปพลิเคชันสำหรับการบริหารจัดการคลินิกและคิวตรวจออนไลน์ ออกแบบฐานข้อมูลเชิงสัมพันธ์ตามหลัก Database Normalization พร้อมระบบแจ้งเตือนคิวตรวจผ่าน Line Notify",
    descEN: "Healthcare queue and appointment management portal. Features 3NF relational database architecture, doctor schedule synchronization, and instant queue alerts via Line Notify API.",
    featuresTH: [
      "ระบบจองคิวออนไลน์และเลือกแพทย์ผู้เชี่ยวชาญตามแผนก",
      "การจัดเก็บและค้นหาประวัติการรักษาอย่างรวดเร็วด้วย MySQL Indexing",
      "ระบบแจ้งเตือนคิวตรวจแบบเรียลไทม์ไปยังสมาร์ตโฟนคนไข้"
    ],
    featuresEN: [
      "Online appointment scheduling with doctor specialization filters",
      "Optimized patient record lookup powered by indexed MySQL relational schema",
      "Real-time queue ticket progress notifications delivered via Line Notify"
    ],
    tech: ["PHP 8.2", "MySQL", "Tailwind CSS", "Line Messaging API", "Chart.js"]
  },
  4: {
    titleTH: "NovaCloud Secure Private Cloud Storage",
    titleEN: "NovaCloud Secure Private Cloud Storage",
    category: "Cloud & Linux Infrastructure",
    descTH: "ระบบคลาวด์สตอเรจส่วนตัวติดตั้งบน Linux Server (Ubuntu) พร้อมคอนฟิก Docker Containers, Nginx Reverse Proxy และเข้ารหัสไฟล์ข้อมูลด้วยอัลกอริทึม AES-256 เพื่อความปลอดภัยสูงสุด",
    descEN: "Self-hosted private cloud storage deployed on Linux Ubuntu Server. Features containerized Docker services, Nginx reverse proxy with SSL termination, and client-side AES-256 data encryption.",
    featuresTH: [
      "ระบบอัปโหลด ดาวน์โหลด และสร้างแชร์ลิงก์แบบกำหนดอายุเวลาได้",
      "ระบบสิทธิ์ผู้ใช้งาน (RBAC) และการจัดการพื้นที่จัดเก็บรายบุคคล",
      "สคริปต์ Cron Job สำหรับการสำรองข้อมูล (Automated Backup) รายวัน"
    ],
    featuresEN: [
      "File management with expirable secure share links",
      "Role-Based Access Control (RBAC) with individual quota enforcement",
      "Automated daily snapshot backup via Linux Bash and Cron jobs"
    ],
    tech: ["Linux Ubuntu", "Docker", "Nginx", "AES-256", "Bash Scripting"]
  }
};

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
      playCyberBeep(720, 'sine', 0.05);
    });
  });
}

window.openProjectModal = function(id) {
  const project = projectDetails[id];
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  const isTH = currentLang === 'th';

  const title = isTH ? project.titleTH : project.titleEN;
  const desc = isTH ? project.descTH : project.descEN;
  const features = isTH ? project.featuresTH : project.featuresEN;

  content.innerHTML = `
    <div class="border-b border-cyber-border/60 pb-3">
      <span class="text-xs font-mono text-rose-300 px-2 py-0.5 rounded bg-rose-950/60 border border-cyber-border">${project.category}</span>
      <h3 class="text-xl sm:text-2xl font-cyber font-bold text-white mt-2">${title}</h3>
    </div>
    
    <p class="text-sm text-slate-300 leading-relaxed font-body">${desc}</p>

    <div>
      <h4 class="text-xs font-cyber font-bold text-cyber-neon uppercase tracking-wider mb-2">
        ${isTH ? '✦ คุณสมบัติและฟังก์ชันสำคัญ' : '✦ Key Architecture & Features'}
      </h4>
      <ul class="space-y-1.5 text-xs text-slate-400 font-mono list-disc list-inside">
        ${features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <div>
      <h4 class="text-xs font-cyber font-bold text-cyber-neon uppercase tracking-wider mb-2">
        ${isTH ? '✦ เทคโนโลยีที่ใช้ (Tech Stack)' : '✦ Tech Stack & Environment'}
      </h4>
      <div class="flex flex-wrap gap-1.5">
        ${project.tech.map(t => `<span class="cyber-chip">${t}</span>`).join('')}
      </div>
    </div>

    <div class="pt-4 border-t border-cyber-border/40 flex justify-end gap-3">
      <button onclick="closeProjectModal()" class="px-4 py-2 rounded-lg bg-cyber-surface border border-cyber-border hover:border-cyber-crimson text-xs font-mono text-white transition-all">
        ${isTH ? 'ปิดหน้าต่าง' : 'Close'}
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  playCyberBeep(850, 'triangle', 0.08);
};

window.closeProjectModal = function() {
  document.getElementById('project-modal')?.classList.add('hidden');
  playCyberBeep(500, 'sine', 0.05);
};

// Close modal on background click
document.getElementById('project-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'project-modal') {
    closeProjectModal();
  }
});

/* ===================================================================
   9. Contact Form & Clipboard
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusBox = document.getElementById('form-status');
  const downloadBtn = document.getElementById('download-cv-btn');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    playCyberBeep(980, 'sine', 0.12);

    const isTH = currentLang === 'th';
    statusBox.className = 'mt-4 p-3 rounded-lg text-xs font-mono bg-emerald-950/80 border border-emerald-500 text-emerald-300';
    statusBox.textContent = isTH 
      ? `✓ ขอบคุณครับคุณ ${name}! ข้อความถูกส่งเข้าสู่ระบบแล้ว นายปัณณธรจะติดต่อกลับโดยเร็วที่สุดครับ`
      : `✓ Thank you, ${name}! Your transmission has been received. Pannathon will reply promptly.`;
    statusBox.classList.remove('hidden');

    form.reset();
    showToast(isTH ? 'ส่งข้อความสำเร็จแล้ว!' : 'Message transmitted successfully!');

    setTimeout(() => {
      statusBox.classList.add('hidden');
    }, 8000);
  });

  // Download CV prompt
  downloadBtn?.addEventListener('click', () => {
    playCyberBeep(750, 'sine', 0.08);
    const isTH = currentLang === 'th';
    showToast(isTH ? 'กำลังดาวน์โหลด Resume นายปัณณธร เพชรทอง...' : 'Downloading Pannathon Phetthong Resume...');
    
    // Simulate download of CV markdown summary
    const cvText = `RESUME / CURRICULUM VITAE
----------------------------------------
Name: นายปัณณธร เพชรทอง (Mr. Pannathon Phetthong)
Phone: 080-085-5329
LINE ID: 27112549
Instagram: Few_mx15
Email: pannathon.phet@spumail.net
Location: Bangkok, Thailand

EDUCATION / ประวัติการศึกษา
1. มหาวิทยาลัยศรีปทุม (Sripatum University)
   - ปริญญาตรี วท.บ. สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) [2565 - ปัจจุบัน]
2. โรงเรียนสุรศักดิ์มนตรี (Surasakmontree School)
   - มัธยมศึกษาตอนปลาย (ม.4 - ม.6)
3. โรงเรียนเทศบาล ๑ (แตงอ่อนเผดิมวิทยา) (Thesaban 1 Tang-on Phadoem Witthaya School)
   - มัธยมศึกษาตอนต้น (ม.1 - ม.3)
4. โรงเรียนเทศบาลเมืองท่าข้าม ๓ (Thesaban Mueang Tha Kham 3 School)
   - ประถมศึกษา (ป.1 - ป.6)

TECHNICAL SKILLS / ทักษะความเชี่ยวชาญ
- Cisco Packet Tracer, Network Infrastructure, TCP/IP, VLAN, Routing & Switching
- HTML5, Modern CSS3, Tailwind CSS, JavaScript ES6+, React, PHP, MySQL
- Linux (Ubuntu/Debian), Docker, Cloud Computing Fundamentals, Cybersecurity
- Status: Available for Internships & Projects
----------------------------------------`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Resume_Pannathon_Phetthong_ICT.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

window.copyToClipboard = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    playCyberBeep(880, 'sine', 0.08);
    showToast(currentLang === 'th' ? `คัดลอกเบอร์ ${text} สำเร็จแล้ว!` : `Copied ${text} to clipboard!`);
  }).catch(() => {
    showToast(`เบอร์ติดต่อ: ${text}`);
  });
};

/* ===================================================================
   10. Toast Notification Helper
   =================================================================== */
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.remove('hidden');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3500);
}

/* ===================================================================
   11. Audio Toggles
   =================================================================== */
function initAudioToggles() {
  const soundBtn = document.getElementById('sound-btn');
  const mobileSoundBtn = document.getElementById('mobile-sound-btn');

  function toggleAudio() {
    soundEnabled = !soundEnabled;
    const label = document.querySelector('.sound-label');
    const dot = document.querySelector('.sound-status-dot');

    if (label) label.textContent = soundEnabled ? 'AUDIO: ON' : 'AUDIO: OFF';
    if (dot) {
      dot.className = soundEnabled 
        ? 'sound-status-dot w-2 h-2 rounded-full bg-cyber-crimson shadow-[0_0_6px_rgba(244,63,94,0.8)]'
        : 'sound-status-dot w-2 h-2 rounded-full bg-slate-600';
    }

    if (soundEnabled) {
      playCyberBeep(800, 'sine', 0.06);
      showToast(currentLang === 'th' ? 'เปิดระบบเสียงไซเบอร์' : 'Cyber audio enabled');
    } else {
      showToast(currentLang === 'th' ? 'ปิดระบบเสียง' : 'Cyber audio muted');
    }
  }

  soundBtn?.addEventListener('click', toggleAudio);
  mobileSoundBtn?.addEventListener('click', toggleAudio);
}
