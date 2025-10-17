import { Award, Globe, Star, Target, Clock, Network, ThumbsUp } from 'lucide-react';
import ExploreProgramPageTemplate from '../components/program-pages/ExploreProgramPageTemplate';

const ExploreMSDSE = () => {
  const msdseData = {
    // Hero Section
    heroTitle: "Earn Your M.Eng. in Applied Data Science Online.",
    programName: "Build What's Next.",
    heroSubtitle: "Gain the skills to turn data into intelligent systems that power the future.",
    bgImage: "/assets/images/stevens-manhattan-skyline-ds.webp", 
    programCode: "msdse",
    // badges: [
    //   { text: "GMAT/GRE Not Required", icon: Award },
    //   { text: "100% Online", icon: Globe },
    //   { text: "30 Credits", icon: Star }
    // ],
    
    // ======================================================
    // Statistics
    statistics: [
      {
        number: "Top 20",
        label: "For Best Career Placement",
        description: "Ranked among the top private schools for best career placement by the Princeton Review (2024)."
      },
      {
        number: "Top 10",
        label: "For ROI",
        description: "Stevens ranks among the top 10 in the nation for ROI, according to U.S. News & World Report (2025).²"
      },
      {
        number: "99%",
        label: "Employment",
        description: "99% of MSCS graduates in the Class of 2023 accepted job offers within three months of graduating."
      },
      {
        number: "#15",
        label: "For Best Value",
        description: "Payscale (2024)."
      },
      {
        number: "7x",
        label: "Winner",
        description: "U.S. Distance Learning Association's 21st Century Award for Best Practices in Distance Learning."
      },
    ],
    
    // Why Choose Stevens Section
    whyChooseStevensTitle: "WHY CHOOSE STEVENS",
    whyChooseStevensSubtitle: "CAREER-ALIGNED CURRICULUM",
    whyChooseStevensContent: `
      <p>Investing in your future with a graduate degree from Stevens is a smart choice. You will gain access to the same quality programs and distinguished faculty as on-campus graduate students while having the flexibility to study from anywhere in the world. From our nationally recognized stature, to studying with experienced faculty, to connecting with over 50,000 global alumni, we offer unique advantages to support your graduate study.</p>
      
      <p>Our faculty produce groundbreaking research that enables better planning and policy, improves healthcare and treatment, builds our understanding of critical questions, shares useful insight, and makes life safer, more secure and more comfortable. The researchers, practitioners and entrepreneurs that comprise the Stevens Institute of Technology faculty bring innovation and insight to students across disciplines and around the world.</p>
    `,
    whyChooseStevensVideo: "/assets/videos/Stevens Online Home - 1.mp4", // Placeholder
    whyChooseStevensVideoCover: "/assets/videos/video-cover-3.avif", // Placeholder
  
    // Program Benefits
    programBenefitsTitle: "Program Overview",
    programBenefitsDescription: "Data science is transforming every industry, from finance and healthcare to energy, logistics, and media. The M.Eng. in Applied Data Science from Stevens builds the technical, analytical, and ethical skills required to lead in this data-driven world.<br/><br/>Through a curriculum grounded in engineering rigor and real-world application, students master data integration, big data systems, AI model design, and interactive visualization. Coursework combines hands-on projects, case studies, and research-based learning to deliver technical depth with professional relevance. <ul class='list-disc pl-5 my-5'><li>Curriculum bridges engineering precision with AI-driven innovation.</li><li>Learn from faculty shaping industry practice in AI ethics, big data, and machine learning.</li><li>Apply your skills through hands-on projects and real-world case studies.</li><li>Benefit from a flexible, asynchronous online experience built for working professionals.</li><li>Join a network of Stevens alumni leading at companies like Google, Deloitte, JPMorgan Chase, IBM, and Meta.</li></ul>",
        programBenefitsImage: "/assets/images/1-explore-msai.jpg", // Placeholder
    programBenefitsHighlights: [
      {
        title: "Excellence in Online Education",
        description: "StevensOnline is a seven-time winner of the 21st Century Award for Best Practices in Distance Learning by the United States Distance Learning Association."
      },
      {
        title: "Engineering-First Approach",
        description: "Learn distributed systems, cloud platforms, data pipelines, and MLOps from faculty with real-world engineering experience."
      },
      {
        title: "Industry Partnerships",
        description: "Benefit from Stevens' strong connections with leading tech companies and access to cutting-edge tools and platforms."
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
        value: "12",
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
    
   // New Fall 2025 Section
    newFall2025Badge: "NEW FOR FALL 2025",
    newFall2025Title: "START YOUR DEGREE WITH 2 ASYNCHRONOUS COURSES",
    newFall2025Description: `
      <p>Starting this fall, the first phase of your program has been redesigned around your schedule, and the first two courses you take will now be asynchronous.</p>
      
      <p>Our new asynchronous course format helps you balance graduate study with work and life, without sacrificing the structure or support that defines a Stevens education.</p>
    `,
    newFall2025Benefits: [
      {
        icon: Globe,
        text: "NO LIVE CLASS SESSIONS — LEARN ON YOUR OWN TIME"
      },
      {
        icon: Target,
        text: "WEEKLY MILESTONES THAT KEEP YOU ACCOUNTABLE AND ON TRACK"
      },
      {
        icon: Clock,
        text: "ACCESS TO FACULTY OFFICE HOURS, AI-POWERED ASSISTANCE AND PEER DISCUSSIONS"
      },
      {
        icon: Network,
        text: "DESIGNED FOR WORKING PROFESSIONALS SEEKING FLEXIBILITY AND MOMENTUM"
      },
      {
        icon: ThumbsUp,
        text: "APPLY IN UNDER 5 MINUTES WITH OUR STREAMLINED ASAP APP — NO SUPPLEMENTAL DOCUMENTS REQUIRED (BACHELOR'S DEGREE REQUIRED)"
      }
    ],
    newFall2025Image: "/assets/images/1-explore-mem.webp",
    
    // Just Launched Section
    justLaunchedBadge: "Just Launched",
    justLaunchedTitle: "New Flexible Application Options",
    justLaunchedDescription: `
      <p>We've introduced new application options designed to make enrollment more accessible. These options reduce prerequisite requirements and offer the opportunity to take trial courses.</p>
      
      <p>To learn more, speak with your enrollment advisor to determine the approach that best suits your background, goals and schedule.</p>
    `,
    justLaunchedButtonText: "Request Flexible App Info",
    justLaunchedButtonLink: "#",
    justLaunchedImage: "/assets/images/2-explore-mem.webp",
    
    // Contact
    contactTitle: "Want to Learn More?",
    contactDescription: "Request more information to learn about the upcoming cohort of the Online Master of Engineering in Applied Data Science program.",
    contactButtonText: "Contact Us"
  };

  return <ExploreProgramPageTemplate {...msdseData} />;
};

export default ExploreMSDSE;
