import React from 'react';
import { Award, Globe, Star } from 'lucide-react';
import ExploreProgramPageTemplate from '../components/program-pages/ExploreProgramPageTemplate';

const ExploreMSDS = () => {
  const msdsData = {
    // Hero Section
    heroTitle: "Data Scientist is Ranked the No. 1 Role Increasing in Demand by World Economic Forum",
    programName: "Earn Your M.S. in Data Science Fully Online",
    heroSubtitle: "Master data science skills through our 100% online curriculum led by industry-recognized faculty.",
    bgImage: "/assets/images/stevens-campus.png", // Placeholder
    programCode: "msds",
    badges: [
      { text: "GMAT/GRE Not Required", icon: Award },
      { text: "100% Online", icon: Globe },
      { text: "30 Credits", icon: Star }
    ],
    
    // Statistics
    statistics: [
      {
        number: "97%",
        label: "Employment",
        description: "Three months after graduation, 97% of MSDS graduates in the Class of 2023 accepted job offers.¹"
      },
      {
        number: "7X",
        label: "Winner",
        description: "21st Century Award for Best Practices in Distance Learning by the United States Distance Learning Association."
      },
      {
        number: "Top 20",
        label: "For Best Career Placement",
        description: "Ranked among the top private schools for best career placement by the Princeton Review (2024)."
      },
      {
        number: "No. 10",
        label: "In the Nation",
        description: "Recognized as the No. 10 Online Master's in Data Science program in the country by UniversityHQ (2023)."
      }
    ],
    
    // Why Choose Stevens Section
    whyChooseStevensTitle: "WHY CHOOSE STEVENS",
    whyChooseStevensSubtitle: "CAREER-ALIGNED CURRICULUM",
    whyChooseStevensContent: `
      <p><strong>DATA SCIENTIST JOBS ARE PROJECTED TO GROW 35% BY 2032.²</strong></p>
      
      <p>From Python and SQL to predictive modeling and data visualization, you'll advance your statistical thinking and technical acumen and graduate with the expertise to meet the critical needs of a growing job sector. Future-proof your career with a top-ranked, interdisciplinary M.S. in Data Science from Stevens.</p>
    `,
    whyChooseStevensVideo: "/assets/videos/Stevens Online MBA - 1.mp4", // Placeholder
    whyChooseStevensVideoCover: "/assets/videos/video-cover-1.avif", // Placeholder
    
    // Program Benefits
    programBenefitsTitle: "Program Benefits",
    programBenefitsDescription: "The Online M.S. in Data Science (MSDS) prepares you to hone your data science skills through our 100% online, leading-edge curriculum led by industry-recognized faculty. You'll have access to one of the top algorithmic theory teams in the world and learn to leverage big data to drive better decisions. Stevens designed the Online M.S. in Data Science curriculum to align with in-demand industry skills and emerging technologies while equipping students with a strong foundation in theory and academic areas of inquiry.",
    programBenefitsImage: "/assets/images/stevens-campus.png", // Placeholder
    programBenefitsHighlights: [
      {
        title: "Excellence in Online Education",
        description: "StevensOnline is a seven-time winner of the 21st Century Award for Best Practices in Distance Learning by the United States Distance Learning Association."
      },
      {
        title: "Industry-Aligned Curriculum",
        description: "Learn Python, SQL, predictive modeling, data visualization and more from faculty who are experts in their fields."
      },
      {
        title: "Top Algorithmic Theory Team",
        description: "Access to one of the world's leading algorithmic theory teams for cutting-edge research and insights."
      }
    ],
    
    // Program Details
    programDetails: [
      {
        value: "Not Required",
        label: "GMAT/GRE"
      },
      {
        value: "30",
        label: "Credits"
      },
      {
        value: "10",
        label: "Courses"
      },
      {
        value: "100%",
        label: "Online"
      }
    ],
    
    // Key Dates
    keyDatesTerm: "SPRING 2026",
    keyDates: [
      {
        label: "Early Submit",
        date: "October 14, 2025",
        description: "Deposit Waiver* and Application Fee Waiver Available."
      },
      {
        label: "Priority Submit", 
        date: "November 11, 2025",
        description: "Application Fee Waiver Available and Early Application Review."
      },
      {
        label: "Final Submit",
        date: "January 5, 2026"
      },
      {
        label: "Start of Classes",
        date: "January 20, 2026"
      }
    ],
    keyDatesNote: "*Applicants who apply by the early submit deadline and are admitted may be eligible for a $250 deposit waiver. Applicants who receive tuition discounts are not eligible. Other eligibility conditions may apply.",
    
    // FAQ
    faqs: [
      {
        question: "WHAT IS DATA SCIENCE?",
        answer: "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from structured and unstructured data. It combines aspects of statistics, computer science, and domain expertise to analyze and interpret complex data."
      },
      {
        question: "WHAT CAREER OPPORTUNITIES ARE AVAILABLE FOR DATA SCIENCE GRADUATES?",
        answer: "Data science graduates can pursue careers as data scientists, data analysts, machine learning engineers, business intelligence analysts, and data engineers at companies across various industries including technology, finance, healthcare, and retail."
      },
      {
        question: "IS THE ONLINE M.S. IN DATA SCIENCE ACCREDITED?",
        answer: "Yes. Stevens Institute of Technology has been continually accredited by the Middle States Commission on Higher Education (MSCHE) since 1927. Stevens is accredited until 2027 and the next self-study evaluation is scheduled to take place during 2026-2027."
      },
      {
        question: "WHAT PROGRAMMING LANGUAGES WILL I LEARN?",
        answer: "The program focuses on Python and SQL, which are the most widely used languages in data science. You'll also gain experience with tools for data visualization, statistical analysis, and machine learning."
      },
      {
        question: "HOW LONG DOES IT TAKE TO COMPLETE THE PROGRAM?",
        answer: "The Online M.S. in Data Science requires 30 credits (10 courses). Most students complete the program in approximately two years when taking courses part-time while working full-time."
      }
    ],
    
    // Contact
    contactTitle: "Want to Learn More?",
    contactDescription: "Request more information to learn about the upcoming cohort of the Online Master of Science in Data Science program.",
    contactButtonText: "Contact Us"
  };

  return <ExploreProgramPageTemplate {...msdsData} />;
};

export default ExploreMSDS;

