import React from 'react';
import ExploreProgramPageTemplate from '../components/program-pages/ExploreProgramPageTemplate';

const ExploreMEM = () => {
  const memData = {
    // Hero Section
    heroTitle: "Built for Engineers Who Want to Lead",
    programName: "Online Master of Engineering in Engineering Management",
    
    // Lead Capture
    scholarshipText: "Prospective students who apply by August 5, 2025, may qualify for up to $16K in tuition grants and scholarship funds.",
    
    // Statistics
    statistics: [
      {
        number: "Top 20",
        label: "For Best Career Placement",
        description: "Ranked among the top private schools for best career placement by The Princeton Review (2024)."
      },
      {
        number: "Up to $16K",
        label: "Off Tuition",
        description: "Eligible students who apply by August 5, 2025, qualify for up to $16,000 off tuition through grants and scholarship funds."
      },
      {
        number: "Top 10",
        label: "for ROI",
        description: "Stevens ranks among the top 10 in the nation for ROI, according to U.S. News & World Report (2025).²"
      },
      {
        number: "No. 6",
        label: "In the Nation",
        description: "Named the No. 6 Best Online Master's in Industrial Engineering Program in the country by U.S. News & World Report (2025)."
      }
    ],
    
    // Program Benefits
    programBenefitsTitle: "Program Benefits",
    programBenefitsDescription: "The Stevens Online MEM is a technical leadership degree — built by engineers, for engineers — that blends systems thinking, project execution and organizational strategy. You'll gain the cross-functional fluency top employers demand while building deep technical expertise in data science, modeling and risk analysis. We produce engineering leaders capable of creating, applying and managing technology to solve complex issues, invent new processes and products, build new enterprises and gain insights from their data. 100% of 2023 MEM graduates landed jobs within 3 months at companies like BMW, Lockheed Martin, Goldman Sachs and Turner Construction.¹",
    programBenefitsHighlights: [
      {
        title: "Program Highlights:",
        description: "Two in-demand concentrations: Managerial Analytics or Supply Chain and Logistics Management"
      },
      {
        title: "Built for engineers:",
        description: "Combines technical depth with leadership and strategy for cross-functional fluency"
      },
      {
        title: "T-shaped skills employers value:",
        description: "Python, forecasting, analytics and leadership"
      }
    ],
    
    // Program Details
    programDetails: [
      {
        value: "Not Required",
        label: "GRE/GMAT"
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
    keyDates: [
      {
        label: "Early Submit",
        date: "October 14, 2025"
      },
      {
        label: "Priority Submit", 
        date: "November 11, 2025"
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
    keyDatesNote: "*Applicants who apply by the early submit deadline and are admitted may be eligible for a $250 deposit waiver. Applicants who receive education assistance from employers or other tuition discounts are not eligible. Other eligibility conditions may apply.",
    
    // Additional Sections for MEM-specific content
    additionalSections: [
      {
        className: "py-stevens-3xl bg-stevens-white",
        content: (
          <div>
            <div className="text-center mb-stevens-xl">
              <span className="inline-block bg-stevens-primary text-stevens-white px-stevens-md py-stevens-sm rounded-stevens-md text-stevens-sm font-medium mb-stevens-lg">
                New for Fall 2025
              </span>
              <h2 className="font-stevens-display text-stevens-3xl text-stevens-primary mb-stevens-lg">
                Start Your Degree With 2 Asynchronous Courses
              </h2>
              <p className="text-stevens-lg text-stevens-gray-700 mb-stevens-lg">
                Starting this fall, the first phase of your program has been redesigned around your schedule, and the first two courses you take will now be asynchronous.
              </p>
              <p className="text-stevens-lg text-stevens-gray-700 mb-stevens-xl">
                Our new asynchronous course format helps you balance graduate study with work and life, without sacrificing the structure or support that defines a Stevens education.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stevens-lg">
              <div className="text-center">
                <div className="bg-stevens-primary/10 rounded-stevens-lg p-stevens-lg mb-stevens-md">
                  <div className="w-12 h-12 bg-stevens-primary rounded-full mx-auto mb-stevens-sm"></div>
                </div>
                <p className="text-stevens-gray-700">No live class sessions — learn on your own time</p>
              </div>
              
              <div className="text-center">
                <div className="bg-stevens-primary/10 rounded-stevens-lg p-stevens-lg mb-stevens-md">
                  <div className="w-12 h-12 bg-stevens-primary rounded-full mx-auto mb-stevens-sm"></div>
                </div>
                <p className="text-stevens-gray-700">Weekly milestones that keep you accountable and on track</p>
              </div>
              
              <div className="text-center">
                <div className="bg-stevens-primary/10 rounded-stevens-lg p-stevens-lg mb-stevens-md">
                  <div className="w-12 h-12 bg-stevens-primary rounded-full mx-auto mb-stevens-sm"></div>
                </div>
                <p className="text-stevens-gray-700">Access to faculty office hours, AI-powered assistance and peer discussions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-stevens-primary/10 rounded-stevens-lg p-stevens-lg mb-stevens-md">
                  <div className="w-12 h-12 bg-stevens-primary rounded-full mx-auto mb-stevens-sm"></div>
                </div>
                <p className="text-stevens-gray-700">Designed for working professionals seeking flexibility and momentum</p>
              </div>
              
              <div className="text-center">
                <div className="bg-stevens-primary/10 rounded-stevens-lg p-stevens-lg mb-stevens-md">
                  <div className="w-12 h-12 bg-stevens-primary rounded-full mx-auto mb-stevens-sm"></div>
                </div>
                <p className="text-stevens-gray-700">Apply in under 5 minutes with our streamlined ASAP app — no supplemental documents required (Bachelor's degree required)</p>
              </div>
            </div>
          </div>
        )
      },
      {
        className: "py-stevens-3xl bg-stevens-gray-50",
        content: (
          <div>
            <div className="text-center mb-stevens-xl">
              <span className="inline-block bg-stevens-gold text-stevens-primary px-stevens-md py-stevens-sm rounded-stevens-md text-stevens-sm font-medium mb-stevens-lg">
                Just Launched
              </span>
              <h2 className="font-stevens-display text-stevens-3xl text-stevens-primary mb-stevens-lg">
                New Flexible Application Options
              </h2>
              <p className="text-stevens-lg text-stevens-gray-700 mb-stevens-lg">
                We've introduced new application options designed to make enrollment more accessible. These options reduce prerequisite requirements and offer the opportunity to take trial courses.
              </p>
              <p className="text-stevens-lg text-stevens-gray-700 mb-stevens-xl">
                To learn more, speak with your enrollment advisor to determine the approach that best suits your background, goals and schedule.
              </p>
              <a href="#" className="btn-stevens-primary">
                Request Flexible App Info
              </a>
            </div>
          </div>
        )
      }
    ],
    
    // Contact
    contactTitle: "Want to Learn More?",
    contactDescription: "Request more information to learn about the upcoming cohort of the Online Master of Engineering in Engineering Management program.",
    contactButtonText: "Contact Us"
  };

  return <ExploreProgramPageTemplate {...memData} />;
};

export default ExploreMEM;
