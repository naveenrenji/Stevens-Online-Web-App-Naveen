import ProgramPageTemplate from '../components/program-pages/ProgramPageTemplate';
import { Award, Check, Star } from 'lucide-react';
import { createPageUrl } from '@/utils';

const programData = {
  code: 'msdse',
  // ==================================================================
  hero: {
    titleLines: ['Earn Your M.Eng. in Applied Data Science Online.'],
    subtitle: "Build What’s Next. Gain the skills to turn data into intelligent systems that power the future.",
    bgImage: "/assets/images/stevens-manhattan-skyline-ds.webp",
    primaryCta: { label: 'Request Information', to: 'RequestInfo' },
    secondaryCta: { label: 'Apply Now', href: 'https://gradadmissions.stevens.edu/apply/?pk=GRNP' },
    // badges: [
    //   { text: "Industry-Ready Skills", icon: Award },
    //   { text: "Cutting-Edge Curriculum", icon: Star },
    //   { text: "Career Growth", icon: TrendingUp }
    // ]
  },
  // ==================================================================
  quickFacts: {
    atAGlance: [
      { value: "30", label: "Credit Hours" },
      { value: "10", label: "Courses" },
      { value: "100%", label: "Online" },
      { value: "2 Years", label: "Completion" },
      { value: "Hands-On", label: "Projects" },
      { value: "Industry", label: "Focused" }
    ],
    termStartDate: "Spring 2026: January 20, 2026",
    details: `
      <ul>
        <li>30 Credit Hours</li>
        <li>10 Courses</li>
        <li>100% Online</li>
        <li>2 Years or Less Completion Time*</li>
        <li>Integrated data science and engineering curriculum</li>
        <li>Real-world capstone projects</li>
      </ul>
      <p class="text-xs mt-2">*Total time to complete the program may vary based on the number of credits taken each semester.</p>
    `
  },
  // ==================================================================
  overview: {
    title: "Program Overview",
    description: `
      <p>Data science is transforming every industry, from finance and healthcare to energy, logistics, and media. The M.Eng. in Applied Data Science from Stevens builds the technical, analytical, and ethical skills required to lead in this data-driven world.</p>
      
      <p>Through a curriculum grounded in engineering rigor and real-world application, students master data integration, big data systems, AI model design, and interactive visualization. Coursework combines hands-on projects, case studies, and research-based learning to deliver technical depth with professional relevance.</p>
      
      <p>Program at a Glance:</p>

      <ul class='my-5'>
        <li><strong>Format: 100% Online</strong></li>
        <li><strong>Duration: Approximately 2 years (30 credits)</strong></li>
        <li><strong>Accreditation: Middle States Commission on Higher Education</strong></li>
      </ul>
      
    `,
    keySkills: [
      "Machine Learning Engineering", "Data Pipeline Design", "Cloud Architecture", "Distributed Systems", 
      "MLOps", "Big Data Processing", "Software Engineering", "System Design",
      "Python", "Java", "Spark", "Kubernetes", "Docker", "AWS"
    ]
  },
  // ==================================================================
  rankings: [
    {
      ranking: "99%",
      description: "EMPLOYMENT",
      source: "99% of MSCS graduates in the Class of 2023 accepted job offers within three months of graduating.",
      note: ""
    },
    {
      ranking: "7x",
      description: "Winner",
      source: "U.S. Distance Learning Association's 21st Century Award for Best Practices in Distance Learning."
    },
    {
      ranking: "7x",
      description: "ROI",
      source: "average ROI within five years."
    },
    {
      ranking: "#15",
      description: "For Best Value",
      source: "Payscale (2024)."
    },
    {
      ranking: "#15",
      description: "Best Online Graduate Engineering Program",
      source: "U.S. News & World Report"
    }
  ],
  // ==================================================================
  career: {
    title: "Data Science and Engineering Career Outlook",
    description: `
      <p>Turn Complex Data into Competitive Advantage. Data scientists and AI engineers remain among the fastest-growing and highest-paid roles globally. With expertise in machine learning, big data, and visualization, Stevens graduates are prepared to lead analytics initiatives, guide strategy, and drive measurable impact.</p>
      
      <h3 class='mt-4'><strong>Potential Roles:</strong></h3>
      <ul class='list-disc pl-6'>
        <li>Data Scientist</li>
        <li>Machine Learning Engineer</li>
        <li>AI Systems Architect</li>
        <li>Data Visualization Specialist</li>
        <li>Quantitative Analyst</li>
        <li>Business Intelligence Engineer</li>
      </ul>
    `,
    // jobTitles: [
    //   { title: "Data Engineer", salary: "$125,000" },
    //   { title: "Machine Learning Engineer", salary: "$165,000" },
    //   { title: "Data Architect", salary: "$182,000" },
    //   { title: "MLOps Engineer", salary: "$145,000" },
    //   { title: "Big Data Engineer", salary: "$129,000" },
    //   { title: "AI Engineer", salary: "$155,000" },
    //   { title: "Cloud Data Engineer", salary: "$140,000" },
    //   { title: "Data Platform Engineer", salary: "$150,000" },
    //   { title: "Senior Data Scientist", salary: "$135,000" },
    //   { title: "Principal Engineer - Data", salary: "$195,000" }
    // ],
    topCompanies: [
      "Technology",
      "Finance",
      "Healthcare",
      "Energy",
      "Manufacturing",
      "Consulting",
      "Government",
    ],
    // source: "Glassdoor and LinkedIn, 2024"
  },
  // ==================================================================
  // commonJobTitles: {
  //   title: "Related Career Fields",
  //   jobs: [
  //     { title: "Data Engineer", salary: "$125,000" },
  //     { title: "Machine Learning Engineer", salary: "$165,000" },
  //     { title: "Data Architect", salary: "$182,000" },
  //     { title: "MLOps Engineer", salary: "$145,000" },
  //     { title: "Big Data Engineer", salary: "$129,000" },
  //     { title: "AI Engineer", salary: "$155,000" },
  //     { title: "Cloud Data Engineer", salary: "$140,000" },
  //     { title: "Data Platform Engineer", salary: "$150,000" },
  //     { title: "Senior Data Scientist", salary: "$135,000" },
  //     { title: "Principal Engineer - Data", salary: "$195,000" }
  //   ]
  // },
  // ==================================================================
  topCompanies: {
    title: "Industries Hiring Stevens Graduates",
    description: "According to the U.S. Bureau of Labor Statistics, employment in data science is projected to grow 35% through 2032—more than seven times faster than the average for all occupations.",
    companies: [
      "Technology",
      "Finance",
      "Healthcare",
      "Energy",
      "Manufacturing",
      "Consulting",
      "Government",
    ]
  },
// ==================================================================
  whatYoullLearn: {
    title: "What You Will Learn",
    description: `You'll gain the practical experience and technical foundation needed to apply data science across real-world challenges:`,
    modules: [
      {
        title: "Mathematics & Foundations",
        // description: "Students build a foundation in the architecture, development and deployment of complex software systems, with an emphasis on scalability, performance and systems-level thinking.",
        skills: [
          "Linear algebra, calculus, and optimization for data modeling",
          "Forecasting and time series analysis",
        ]
      },
      {
        title: "Programming & Systems",
        skills: [
          "Python, R, SQL, TensorFlow, Spark, Tableau, and cloud computing frameworks",
          "Scalable data architecture and integration pipelines",
        ]
      },
      {
        title: "Machine Learning & AI",
        skills: [
          "Supervised and unsupervised learning",
          "Deep learning and neural networks",
          "Generative AI, prompt engineering, and augmented intelligence",
          "Ethical management of AI technologies",
        ]
      },
      {
        title: "Data Visualization & Communication",
        skills: [
          "Tableau dashboards, Julius.ai, Power BI, and Python visualization libraries",
          "Storytelling through visual analytics and ethical data design",
        ] 
      },
      {
        title: "Applied Analytics & Business Intelligence",
        skills: [
          "Marketing and operational analytics ",
          "Web and text mining",
          "Data governance and risk management",
        ]
      }
    ],
  },
// ==================================================================
  whyStevens:{
    title: "Why Choose Stevens?",
    description: `
      <h3 class='mb-4'><strong>Innovation Meets Integrity</strong></h3>
      <ul>
        <li>Curriculum bridges engineering precision with AI-driven innovation.</li>
        <li>Learn from faculty shaping industry practice in AI ethics, big data, and machine learning.</li>
        <li>Apply your skills through hands-on projects and real-world case studies.</li>
        <li>Benefit from a flexible, asynchronous online experience built for working professionals.</li>
        <li>Join a network of Stevens alumni leading at companies like Google, Deloitte, JPMorgan Chase, IBM, and Meta.</li>
      </ul>
    `,

  },
  // ==================================================================
  curriculum: {
    title: "Program Curriculum",
    // description: "The M.S. in Data Science and Engineering program combines rigorous data science fundamentals with practical software engineering skills. Students will complete 30 credit hours across 10 courses, all delivered 100% online. The curriculum is designed to prepare graduates for leadership roles in data-intensive organizations.",
    courseTabs: {
      traditional: {
        title: "Sample Course Sequence",
        content: `
          <div class="space-y-stevens-lg">
            <div>
              <h4 class="course-section-header">TERM 1 — Foundations of Data Science</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="dse501">MA 574<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="dse501">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">Foundational Mathematics for Data Science.</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="dse510">CS 513<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="dse510">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">Data Analytics & Machine Learning</p>
                  </div>
                </div>

                <div class="course-item">
                  <button class="course-toggle" data-target="dse5111">MIS 636<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="dse5111">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">Data Integration for Business Intelligence</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="course-section-header">Term 2 — Applied Analytics</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="dse520">CS 559<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="dse520">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">Machine Learning</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="dse530">BIA 660<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="dse530">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">Web Mining</p>
                  </div>
                </div>

                 <div class="course-item">
                  <button class="course-toggle" data-target="dse532">BIA 672<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="dse532">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">Marketing Analytics</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="course-section-header">Term 3 — Advanced AI and Big Data</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="dse540">CS 583<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="dse540">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">Deep Learning</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="dse550">BIA 662<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="dse550">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">Augmented Intelligence and Generative AI</p>
                  </div>
                </div>

                <div class="course-item">
                  <button class="course-toggle" data-target="dse552">BIA 678<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="dse552">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">Big Data Technologies</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="course-section-header">Term 4 — Visualization and Strategy</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="dse560">FA 550<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="dse560">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">Data Visualization Applications</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="dse570">BIA 568<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="dse570">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">Management of AI Technologies</p>
                  </div>
                </div>

                <div class="course-item">
                  <button class="course-toggle" data-target="dse572">MA 641<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="dse572">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">Time Series Analysis I</p>
                  </div>
                </div>

                <div class="course-item">
                  <button class="course-toggle" data-target="dse574">Capstone Project<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="dse574">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">Applied Data Science in Practice</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p>Note: Actual course order may vary based on term availability.</p>
          </div>
        `,
      },
      advanced: {
        title: "Capstone Experience",
        content: `
          <div class="space-y-stevens-lg">
            <div>
              <h4 class="course-section-header">Apply Data Science to a Real-World Challenge</h4>
              <div class="space-y-stevens-md">
                <p>n the culminating capstone project, students collaborate to solve a real business or societal problem using advanced analytics and AI-driven solutions. Projects focus on measurable outcomes—ranging from optimizing supply chains to developing predictive health systems.</p>
                
                <h5><strong>Sample Project Topics:</strong></h5>
                <ul>
                  <li>Predictive modeling for renewable energy forecasting</li>
                  <li>AI-driven optimization of financial portfolio performance</li>
                  <li>Natural language processing for sentiment and risk analysis</li>
                  <li>Generative AI solutions for marketing and product innovation</li>
                </ul>
              </div>
            </div>
            
          </div>
        `
      }
    }
  },
  // ==================================================================
  faculty: {
    description: "Our faculty are experienced educators and active researchers who offer industry insights.",
    members: [
      { name: "Dr. Alkis Vazacopoulos", title: "Management of AI Technologies, Generative AI Systems", image: "/assets/avatars/msdsen-avatar/Vazacopoulos.webp" },
      { name: "Dr. Khasha Dehnad", title: "Machine Learning and Predictive Analytics", image: "/assets/avatars/msdsen-avatar/Dehnad.webp" },
      { name: "Dr. Brian Moriarty", title: "Data Visualization and Ethical Communication", image: "/assets/avatars/msdsen-avatar/Brian_Moriarty.webp" },
      { name: "Dr. Justo Karell", title: "Deep Learning and Neural Systems", image: "/assets/avatars/msdsen-avatar/Justo_Karell.webp" },
      { name: "Dr. Matthew Romney", title: "Mathematical Foundations for Data Science", image: "/assets/avatars/msdsen-avatar/Matthew_Romney.webp" },
    ]
  },
// ==================================================================
  admissions: {
      options: [
        { title: "Standard Application", featured: false, description: `<p>Complete the Standard application and submit the following for review:</p><ul class="list-disc pl-5 mt-2 space-y-1"><li>Bachelor’s degree</li><li>Two letters of recommendation</li><li>Statement of purpose</li><li>Academic transcripts</li><li>Résumé</li></ul>`, buttonText: "Apply Now", url: "https://gradadmissions.stevens.edu/apply/?pk=GRNP" },
        { title: "ASAP Application", featured: true, description: `<p>Enroll in two eight-week asynchronous courses and gain full admission to the program by earning a grade of “B” or better in each.</p><ul class="list-disc pl-5 mt-2 space-y-1"><li>Bachelor’s degree required</li><li>No letters of recommendation required</li></ul>`, buttonText: "Apply Now", url: createPageUrl('ASAP') }
      ],
      consultation: { title: "Wondering Which Application Is Right for You?", buttonText: "Get In Touch", url: createPageUrl('RequestInfo') }
    },
    // ==================================================================
    keyDates: {
      headers: ["Term", "Early Submit", "Priority Submit", "Final Submit", "Start of Classes"],
      rows: [
        { 
          event: "Spring 2026", 
          date: "October 14, 2025", 
          details: "Deposit Waiver* and Application Fee Waiver Available.",
          priorityDate: "November 11, 2025",
          priorityDetails: "Application Fee Waiver Available and Early Application Review.",
          finalDate: "January 5, 2026",
          startDate: "January 20, 2026"
        }
      ],
      footnote: "*Applicants who apply by the early submit deadline and are admitted may be eligible for a $250 deposit waiver. Other conditions may apply."
    },
    // ==================================================================
    tuition: {
      cards: [],
      description: `<h3 class="font-bold text-xl mb-4">New for 2025: Up to $16,708 off Tuition Through Grants and Scholarships</h3><p>At Stevens, we’re committed to reducing the financial barriers to graduate education. That’s why we offer grant and scholarship programs designed to help you achieve your goals.</p>`,
      grants: [
          { title: "Aspire Grant (for standard applicants)", description: "$6,708 in tuition support for the first two asynchronous courses." },
          { title: "Pathway Grant (for ASAP applicants)", description: "$6,708 in tuition support for the first two asynchronous courses." },
          { title: "Dean’s Merit Scholar Program", description: "Eligible students may qualify for scholarship support based on academic merit. Contact your enrollment advisor to learn more." }
      ]
    },
    // ==================================================================
    events: {
    title: "On-Demand Content",
    description: "At Stevens, we host a variety of events for prospective and current students covering topics such as application strategy, program information, the student experience and our online platform. Our on-demand content is instantly available, so you can watch at your convenience.",
    fallbackText: "Check back soon for more upcoming events.",
    items: [
      // { title: "Exploring the Online M.S. in Computer Science at Stevens Institute of Technology", status: "Ongoing", length: "11 minutes", url: "https://event.on24.com/wcc/r/4455089/34FF45D9104354C225403F6B63A29F26" },
      { title: "Student Voices: Real Stories From Stevens Graduate Programs", status: "Ongoing", length: "45 minutes", url: "https://event.on24.com/wcc/r/4970051/3D4408B63146F35B069766B71328D7CE" },
      { title: "Start With Two Courses. Step Into Computer Science", status: "Ongoing", length: "30 minutes", url: "https://event.on24.com/wcc/r/4970040/A6ED251C21B790E2D79369BFB149380A" },
      // { title: "Online M.S. in Computer Science: Areas of Focus", status: "Ongoing", length: "12 minutes", url: "https://event.on24.com/wcc/r/4894227/042446D9C5E18BF3F4D7CD9A7604B1EA" },
      { title: "Financial Aid Overview: Stevens Institute of Technology", status: "Ongoing", length: "10 minutes", url: "https://event.on24.com/wcc/r/4666980/B9E38A55EDE8C93A4D0D5D8E6AFE7A0B" },
      { title: "Exploring the Online M.S. in Computer Science at Stevens Institute of Technology", status: "Ongoing", length: "23 minutes", url: "https://event.on24.com/wcc/r/4666987/F64CF45C62A5CFE0E6F6E6E7467BD8A0" },
      { title: "Application Walkthrough: Data Science and Computer Science", status: "Ongoing", length: "24 minutes", url: "https://event.on24.com/wcc/r/4455092/4C10B1C30D8D20926A28C1A21C667A29" },
       { title: "Application Overview: Online Master's in Engineering Management", status: "Ongoing", length: "24 minutes", url: "https://event.on24.com/wcc/r/4666982/E2AD4B0C42B0A05A6CB87A9F0D5C04B9" }
    ]
  },
  // ==================================================================
  accreditation: `Stevens Institute of Technology has been continually accredited by the <a href="https://www.msche.org/" target="_blank" rel="noopener noreferrer" class="text-stevens-white underline hover:text-stevens-gray-500 transition-colors duration-stevens-normal">Middle States Commission on Higher Education (MSCHE)</a> since 1927. Stevens is accredited until 2027 and the next self-study evaluation is scheduled to take place during 2026-2027.`
};

export default function MSDSE() {
  return <ProgramPageTemplate programData={programData} useApplicationModal={true} />;
}
