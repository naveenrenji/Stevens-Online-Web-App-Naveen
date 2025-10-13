import React from 'react';
import { Award, Globe, Star } from 'lucide-react';
import ExploreProgramPageTemplate from '../components/program-pages/ExploreProgramPageTemplate';

const ExploreMSDS = () => {
  const msdsData = {
    // Hero Section
    heroTitle: "Data Scientist is Ranked the No. 1 Role Increasing in Demand by World Economic Forum",
   
    heroSubtitle: "Master data science skills through our 100% online curriculum led by industry-recognized faculty.",
    bgImage: "/assets/images/1-explore-msds.jpg", // Placeholder
    programCode: "msds",
    badges: [
      { text: "GMAT/GRE Not Required", icon: Award },
      { text: "100% Online", icon: Globe },
     
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
    programBenefitsImage: "/assets/images/2-explore-msds.jpg", // Placeholder
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
    
    // Additional Why Choose Stevens Section
    additionalWhyChooseStevensTitle: "DATA SCIENTIST JOBS ARE PROJECTED TO GROW 35% BY 2032.²",
    additionalWhyChooseStevensSubtitle: "CAREER-ALIGNED CURRICULUM",
    additionalWhyChooseStevensContent: `
      <p>From Python and SQL to predictive modeling and data visualization, you'll advance your statistical thinking and technical acumen and graduate with the expertise to meet the critical needs of a growing job sector. Future-proof your career with a top-ranked, interdisciplinary M.S. in Data Science from Stevens.</p>
    `,
    additionalWhyChooseStevensImage: "/assets/images/3-explore-msds.jpg",
    
    // Contact
    contactTitle: "Want to Learn More?",
    contactDescription: "Request more information to learn about the upcoming cohort of the Online Master of Science in Data Science program.",
    contactButtonText: "Contact Us"
  };

  return <ExploreProgramPageTemplate {...msdsData} />;
};

export default ExploreMSDS;

