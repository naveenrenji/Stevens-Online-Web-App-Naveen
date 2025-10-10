import React from 'react';
import ProgramPageTemplate from '../components/program-pages/ProgramPageTemplate';
import { Award, Check, Star, TrendingUp, BrainCircuit, Target, Users, Briefcase } from 'lucide-react';

const programData = {
  code: 'msds',
  hero: {
    titleLines: ['Online Master\'s in Data Science (MSDS)'],
    subtitle: "Master the technical, analytical and practical skills to accelerate careers in fintech, business intelligence, database management and more.",
    bgImage: "/assets/images/HEADER-0865.jpg",
    primaryCta: { label: 'Request Information', to: 'RequestInfo' },
    secondaryCta: { label: 'Apply Now', href: 'https://gradadmissions.stevens.edu/apply/?pk=GRNP' },
    badges: [
      { text: "97% Employment", icon: Award },
      { text: "7x Award Winner", icon: Star },
      { text: "Top 20 Career Placement", icon: TrendingUp }
    ]
  },
  quickFacts: {
    atAGlance: [
      { value: "97%", label: "Employment Rate" },
      { value: "30", label: "Credit Hours" },
      { value: "10", label: "Courses" },
      { value: "100%", label: "Online" },
      { value: "2 Years", label: "Completion" },
      { value: "Math-Based", label: "Foundation" }
    ],
    termStartDate: "Spring 2026: January 20, 2026",
    details: `
      <ul>
        <li>30 Credit Hours</li>
        <li>10 Courses</li>
        <li>100% Online</li>
        <li>2 Years or Less Completion Time*</li>
        <li>Math-based understanding of data science</li>
        <li>Technical proficiency in leading industry tools</li>
      </ul>
      <p class="text-xs mt-2">*Total time to complete the program may vary based on the number of credits taken each semester.</p>
    `
  },
  overview: {
    title: "Stevens Online Master's in Data Science Degree Overview",
    description: `
      <p>Stevens' online master's in data science program equips students with the education they need to master the technical, analytical and practical skills to accelerate careers in fintech, business intelligence and analytics, database management and academia — as well as government positions requiring skills in data analysis.</p>
      
      <p>Our online data science students engage in challenging, rigorous coursework that fosters a deep, math-based understanding of data science in addition to technical proficiency in the leading industry tools, including:</p>
      
      <ul>
        <li><strong>Python and R, SQL, Hadoop, Hive, and TensorFlow</strong></li>
        <li><strong>Machine learning and deep learning</strong></li>
        <li><strong>Predictive modeling</strong></li>
        <li><strong>Advanced statistical and optimization methods</strong></li>
        <li><strong>Supervised/unsupervised learning</strong></li>
        <li><strong>Neural networks</strong></li>
        <li><strong>Natural language processing (NLP)</strong></li>
        <li><strong>Data visualization</strong></li>
      </ul>
      
      <p>Courses focus on data science skills that are increasingly in demand across industries and sectors, and they are taught by industry experts who are redefining how data is used to drive impact. Our online curriculum is influenced by the corporate headquarters and bustling tech startups in New York City, just next door to our campus.</p>
    `,
    keySkills: [
      "Machine Learning", "Deep Learning", "Predictive Modeling", "Statistical Analysis", 
      "Data Visualization", "Natural Language Processing", "Big Data Technologies", 
      "Python Programming", "R Programming", "SQL", "Hadoop", "TensorFlow"
    ]
  },
  rankings: [
    {
      ranking: "97%",
      description: "EMPLOYMENT",
      source: "Three months after graduation, 97% of MSDS graduates in the Class of 2023 accepted job offers.",
      note: "1"
    },
    {
      ranking: "7x",
      description: "WINNER",
      source: "21st Century Award for Best Practices in Distance Learning by the United States Distance Learning Association."
    },
    {
      ranking: "Top 20",
      description: "FOR BEST CAREER PLACEMENT",
      source: "Ranked among the top private schools for best career placement by the Princeton Review (2024)."
    },
    {
      ranking: "No. 10",
      description: "IN THE NATION",
      source: "Recognized as the No. 10 Online Master's in Data Science program in the country by UniversityHQ (2023)."
    }
  ],
  career: {
    title: "Data Science Career Outlook",
    description: `
      <p>Demand for qualified data science professionals has risen significantly over the past decade. Currently, there are numerous opportunities in the field — and the U.S. Bureau of Labor Statistics (BLS) projects employment in data science to grow by 36% from now until 2031 (which equals an average of 13,500 new openings for data scientists each year).</p>
      
      <p>The states with the highest employment of data scientists include California, New York, Texas, North Carolina and Illinois — though numerous remote data science jobs are available — and salaries for many data science roles reach well into the six figures.</p>
    `,
    jobTitles: [
      { title: "Data Scientist", salary: "$108,014" },
      { title: "Statistician", salary: "$104,104" },
      { title: "Data Analyst", salary: "$108,000" },
      { title: "Business Intelligence Developer", salary: "$123,000" },
      { title: "Big Data Engineer", salary: "$129,000" },
      { title: "Business Intelligence Analyst", salary: "$135,000" },
      { title: "Data Modeler", salary: "$139,000" },
      { title: "Natural Sciences Manager", salary: "$157,747" },
      { title: "Machine Learning Engineer", salary: "$165,000" },
      { title: "Data Architect", salary: "$182,000" }
    ],
    topCompanies: [
      "AMAZON",
      "GOOGLE", 
      "MICROSOFT",
      "IBM",
      "FACEBOOK",
      "APPLE",
      
    ],
    source: "Lightcast, 2024 and Glassdoor, 2024"
  },
  
  commonJobTitles: {
    title: "Related Career Fields",
    jobs: [
      { title: "Data Scientist", salary: "$108,014" },
      { title: "Statistician", salary: "$104,104" },
      { title: "Data Analyst", salary: "$108,000" },
      { title: "Business Intelligence Developer", salary: "$123,000" },
      { title: "Big Data Engineer", salary: "$129,000" },
      { title: "Business Intelligence Analyst", salary: "$135,000" },
      { title: "Data Modeler", salary: "$139,000" },
      { title: "Natural Sciences Manager", salary: "$157,747" },
      { title: "Machine Learning Engineer", salary: "$165,000" },
      { title: "Data Architect", salary: "$182,000" }
    ]
  },
  
  topCompanies: {
    title: "Top Companies",
    companies: [
      "AMAZON",
      "GOOGLE", 
      "MICROSOFT",
      "IBM",
      "FACEBOOK",
      "APPLE",
      "TESLA",
      "NETFLIX",
      "SPOTIFY",
      "UBER",
      "AIRBNB",
      "SALESFORCE"
    ]
  },
  
  curriculum: {
    description: "Below are the Traditional and Advanced course sequences for the M.S. in Data Science program. Students will engage in coursework on the following topics to develop skills as data scientists who can glean insights and aid in informed decision-making. The MSDS program consists of 30 credit hours, with 10 courses, and is 100% online.",
    courseTabs: {
      traditional: {
        title: "Traditional Coursework",
        content: `
          <div class="space-y-stevens-lg">
            <div>
              <h4 class="course-section-header">TERM 1</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="ma574">MA 574 FOUNDATIONAL MATHEMATICS FOR DATA SCIENCE (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="ma574">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course provides students with the essential background in calculus and linear algebra needed to pursue the study of Data Science. Topics include limits, derivatives and integrals of (multivariable) functions; vectors and matrices; vector spaces and subspaces; norms and projections; basis and dimension; eigenvalues and eigenvectors; singular values; continuous optimization; and maps between Euclidean spaces and Jacobians. Throughout, various applications to Data Science will be considered, with hands-on numerical and coding exercises supplementing the theory.</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="ma540">MA 540 PROBABILITY (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="ma540">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course provides the theoretical basis for studying the properties of modern statistical and machine learning methods. Students will learn the definitions and properties of probability spaces, random variables, distributions, expectations and limit theorems. Students will work with density functions, conditional expectations, and convergence of random variables. After successful completion of this course, students will be able to determine the probability distribution function and density of random variables/vectors, use the properties of expectations and higher-order moments in computations, and examine the appropriate convergence of random variables given specific situations. Students will also be able to apply results from probability theory to study the properties of sample statistics such as estimators.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="course-section-header">TERM 2</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="ma541">MA 541 STATISTICAL METHODS (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="ma541">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course offers an introduction to exploratory data analysis and the use of basic statistical tools. Topics will include data collection; descriptive statistics, and graphical and tabular treatment of quantitative, qualitative, and count data; detecting relations between variables; confidence intervals and hypothesis testing for one and two samples; simple and multiple linear regression; analysis of variance; design of experiments; and nonparametric methods. Selected topics, such as quality control and time series analysis, may also be included. Statistical software will be used throughout the course and statistical inference will be based on examples using real data. Students will participate in group projects of data analysis. They will be trained in the different phases of the professional statistician's work, namely: data collection, description, analysis, testing, and presentation of the conclusions. Prerequisite: MA 540.</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="ma544">MA 544 NUMERICAL LINEAR ALGEBRA FOR BIG DATA (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="ma544">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course will introduce foundational ideas as well as advanced techniques in linear algebra that are employed in computational science of big data. Students will work with vector-matrix representation of various types of structured and unstructured data and how different models and processes could be understood in terms of linear algebra operations and algorithms. Efficient implementation of algorithms for high dimensional data by using Randomized Numerical Linear Algebra will be one of the focal points. Students will develop and improve their coding skills in Python and MATLAB for implementation of several algorithms. In addition, students will read past and current literature in machine learning and data science to familiarize themselves with current trends and challenges in linear algebra for solving real life problems. Prerequisites: MA 123, MA 124 or equivalent, MA 232 or equivalent, MA 222 or equivalent, and have basic knowledge of MATLAB (FE 516) or Python (FE 520).</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="course-section-header">TERM 3</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="ma576">MA 576 OPTIMIZATION FOR DATA SCIENCE (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="ma576">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">The objective of this course is to introduce the students to the theory and methods of optimization used in data science. The first portion of the class focuses on elements of convex analysis and subgradient calculus for non-smooth functions, optimality conditions for differentiable and for non-smooth optimization problems, and Lagrangian duality. The main part of the class discusses numerical methods for optimization with a focus and application to problems arising in data science. Approaches to large-scale/big-data optimization problems will be covered, including stochastic gradient methods and distributed optimization algorithms. Prerequisites: MA 574, MA 544.</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="ma641">MA 641 TIME SERIES ANALYSIS (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="ma641">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course provides a broad and systematic introduction to time series models and their applications to modeling and prediction. It utilizes real-world examples to apply a variety of time series models and methods. After successful completion of this course, students will be able to work with stationarity and measures of dependency, time series regression, graphical analysis, trend and seasonality detection and removal, and moving-average filtering. Students will also be able to apply linear time series analysis, spectral analysis, and multivariate time series methods. Additional topics that will be covered include long-memory processes, unit root testing, volatility modeling, state space models and Kalman filtering.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="course-section-header">TERM 4</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="bia662">BIA 662 AUGMENTED INTELLIGENCE AND GENERATIVE AI (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="bia662">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course uses advanced technologies, such as IBM's Blue Mix and Google's TensorFlow, as building blocks, allowing student teams to exercise their ingenuity to develop applications that use AI and machine learning in entirely new business application areas. The products of cognitive computing are beginning to appear in the marketplace, while so-called "deep-learning" AI applications are finding their way into healthcare, energy management, security, marketing and financial services. This course explores the area of cognitive computing and its implications for today's world of big data analytics and evidence-based decision-making. Topics covered as part of this seminar include cognitive computing design principles, natural language processing, knowledge representation, advanced analytics, as well as IBM's Watson DeepQA and Google's TensorFlow deep learning architectures. Students will have an opportunity to build cognitive applications as well as explore how knowledge-based artificial intelligence and deep learning are impacting the field of data science.</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="bia678">BIA 678 BIG DATA TECHNOLOGIES (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="bia678">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">The field of Big Data is emerging as one of the transformative business processes of recent times. It utilizes classic techniques from Business Intelligence & Analysis, along with new tools and processes to deal with the volume, velocity, and variety associated with big data. As they enter the workforce, a significant percentage of BIA students will be directly involved with big data either as technologists, managers, or users. This course will build on their understanding of the basic concepts of BI&A to provide them with the background to succeed in the evolving data centric world, not only from the point of view of the technologies required, but in terms of management, governance, and organization. Tools will include Hadoop, Hbase, and related software.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="course-section-header">TERM 5</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="cs584">CS 584 NATURAL LANGUAGE PROCESSING (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="cs584">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course will provide an introduction to dynamic programming as the most popular methodology for learning and control of dynamic stochastic systems. We discuss basic models, some theoretical results, and numerical methods for these problems. They will be developed starting from basic models of dynamical systems, through finite-horizon stochastic problems, to infinite-horizon stochastic models of fully or partially observable systems. Throughout the class, special attention will be paid to the application of dynamic programming to statistical learning. The class will include introduction to approximate dynamic programming techniques, which are used in statistical learning, such as tree-based methods for classification, Bayesian learning, among others. The concepts and methods will be illustrated by various applications including learning in stochastic networks, engineering, business, and finance. Prerequisites: MA 547, MA 623.</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="bia660">BIA 660 WEB MINING (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="bia660">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">In this course, students will learn through hands-on experience how to extract data from the web and analyze web-scale data using distributed computing. Students will learn different analysis methods that are widely used across the range of internet companies, from start-ups to online giants like Amazon or Google. At the end of the course, students will apply these methods to answer a real scientific question.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      advanced: {
        title: "Advanced Coursework",
        content: `
          <div class="space-y-stevens-lg">
            <div>
              <h4 class="course-section-header">TERM 1</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="ma547">MA 547 MACHINE LEARNING (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="ma547">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course provides an introduction to the basic concepts, theory, and algorithms in machine learning that are used in a variety of application domains. It also provides exposure to a range of modern machine learning tools. Topics include Supervised Learning (linear regression, logistic regression, support vector machines, decision trees), Unsupervised Learning (clustering, dimensionality reduction), and best practices in machine learning (model selection, evaluation metrics, regularization). The course emphasizes both the mathematical foundations and practical implementation of these methods.</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="ma540-advanced">MA 540 PROBABILITY (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="ma540-advanced">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course provides the theoretical basis for studying the properties of modern statistical and machine learning methods. Students will learn the definitions and properties of probability spaces, random variables, distributions, expectations and limit theorems. Students will work with density functions, conditional expectations, and convergence of random variables. After successful completion of this course, students will be able to determine the probability distribution function and density of random variables/vectors, use the properties of expectations and higher-order moments in computations, and examine the appropriate convergence of random variables given specific situations. Students will also be able to apply results from probability theory to study the properties of sample statistics such as estimators.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="course-section-header">TERM 2</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="ma541-advanced">MA 541 STATISTICAL METHODS (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="ma541-advanced">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course offers an introduction to exploratory data analysis and the use of basic statistical tools. Topics will include data collection; descriptive statistics, and graphical and tabular treatment of quantitative, qualitative, and count data; detecting relations between variables; confidence intervals and hypothesis testing for one and two samples; simple and multiple linear regression; analysis of variance; design of experiments; and nonparametric methods. Selected topics, such as quality control and time series analysis, may also be included. Statistical software will be used throughout the course and statistical inference will be based on examples using real data. Students will participate in group projects of data analysis. They will be trained in the different phases of the professional statistician's work, namely: data collection, description, analysis, testing, and presentation of the conclusions. Prerequisite: MA 540.</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="ma544-advanced">MA 544 NUMERICAL LINEAR ALGEBRA FOR BIG DATA (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="ma544-advanced">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course will introduce foundational ideas as well as advanced techniques in linear algebra that are employed in computational science of big data. Students will work with vector-matrix representation of various types of structured and unstructured data and how different models and processes could be understood in terms of linear algebra operations and algorithms. Efficient implementation of algorithms for high dimensional data by using Randomized Numerical Linear Algebra will be one of the focal points. Students will develop and improve their coding skills in Python and MATLAB for implementation of several algorithms. In addition, students will read past and current literature in machine learning and data science to familiarize themselves with current trends and challenges in linear algebra for solving real life problems. Prerequisites: MA 123, MA 124 or equivalent, MA 232 or equivalent, MA 222 or equivalent, and have basic knowledge of MATLAB (FE 516) or Python (FE 520).</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="course-section-header">TERM 3</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="ma623-advanced">MA 623 DEEP LEARNING (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="ma623-advanced">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course introduces the basic concepts of deep learning (DL), which is one of the most rapidly growing areas in machine learning. It is designed for students with or without an ML background. The course will cover fundamental ML, computer vision, and natural language problems and DL tools for solving the problems. The students will be able to use DL methods for solving real-world ML problems. The homework is mostly implementation and programming using the Python language and popular DL frameworks such as TensorFlow and Keras. Knowledge and skills in Python programming and linear algebra are strictly required. Probability theory, statistics, and numerical analysis are recommended but not required. Knowledge of machine learning and artificial intelligence is helpful but unnecessary.</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="ma641-advanced">MA 641 TIME SERIES ANALYSIS (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="ma641-advanced">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course provides a broad and systematic introduction to time series models and their applications to modeling and prediction. It utilizes real-world examples to apply a variety of time series models and methods. After successful completion of this course, students will be able to work with stationarity and measures of dependency, time series regression, graphical analysis, trend and seasonality detection and removal, and moving-average filtering. Students will also be able to apply linear time series analysis, spectral analysis, and multivariate time series methods. Additional topics that will be covered include long-memory processes, unit root testing, volatility modeling, state space models and Kalman filtering.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="course-section-header">TERM 4</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="bia662-advanced">BIA 662 AUGMENTED INTELLIGENCE AND GENERATIVE AI (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="bia662-advanced">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course uses advanced technologies, such as IBM's Blue Mix and Google's TensorFlow, as building blocks, allowing student teams to exercise their ingenuity to develop applications that use AI and machine learning in entirely new business application areas. The products of cognitive computing are beginning to appear in the marketplace, while so-called "deep-learning" AI applications are finding their way into healthcare, energy management, security, marketing and financial services. This course explores the area of cognitive computing and its implications for today's world of big data analytics and evidence-based decision-making. Topics covered as part of this seminar include cognitive computing design principles, natural language processing, knowledge representation, advanced analytics, as well as IBM's Watson DeepQA and Google's TensorFlow deep learning architectures. Students will have an opportunity to build cognitive applications as well as explore how knowledge-based artificial intelligence and deep learning are impacting the field of data science.</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="bia678-advanced">BIA 678 BIG DATA TECHNOLOGIES (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="bia678-advanced">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">The field of Big Data is emerging as one of the transformative business processes of recent times. It utilizes classic techniques from Business Intelligence & Analysis, along with new tools and processes to deal with the volume, velocity, and variety associated with big data. As they enter the workforce, a significant percentage of BIA students will be directly involved with big data either as technologists, managers, or users. This course will build on their understanding of the basic concepts of BI&A to provide them with the background to succeed in the evolving data centric world, not only from the point of view of the technologies required, but in terms of management, governance, and organization. Tools will include Hadoop, Hbase, and related software.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="course-section-header">TERM 5</h4>
              <div class="space-y-stevens-md">
                <div class="course-item">
                  <button class="course-toggle" data-target="cs584-advanced">CS 584 NATURAL LANGUAGE PROCESSING (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="cs584-advanced">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">This course will provide an introduction to dynamic programming as the most popular methodology for learning and control of dynamic stochastic systems. We discuss basic models, some theoretical results, and numerical methods for these problems. They will be developed starting from basic models of dynamical systems, through finite-horizon stochastic problems, to infinite-horizon stochastic models of fully or partially observable systems. Throughout the class, special attention will be paid to the application of dynamic programming to statistical learning. The class will include introduction to approximate dynamic programming techniques, which are used in statistical learning, such as tree-based methods for classification, Bayesian learning, among others. The concepts and methods will be illustrated by various applications including learning in stochastic networks, engineering, business, and finance. Prerequisites: MA 547, MA 623.</p>
                  </div>
                </div>
                
                <div class="course-item">
                  <button class="course-toggle" data-target="bia660-advanced">BIA 660 WEB MINING (3)<span class="course-arrow">▼</span></button>
                  <div class="course-content hidden" id="bia660-advanced">
                    <p class="text-stevens-sm text-stevens-gray-700 leading-relaxed">In this course, students will learn through hands-on experience how to extract data from the web and analyze web-scale data using distributed computing. Students will learn different analysis methods that are widely used across the range of internet companies, from start-ups to online giants like Amazon or Google. At the end of the course, students will apply these methods to answer a real scientific question.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      }
    }
  },
  whyStevens: {
    title: "Why Choose Stevens' MS in Data Science For Your Online Master's Degree in Data Science?",
    description: `
      <p>Stevens Institute of Technology is ranked number eight in <em>U.S. News and World Report's</em> "Best Online Master's in Computer Technology Programs" for 2023. Stevens was also ranked 13 in The Princeton Review's "Top 20 U.S. Private Schools for Best Career Placement" (2022) and 14 on PayScale's list of "Best Value Colleges" (2021). Stevens online master's in data science program graduates are employed by Amazon, Disney Streaming Services, Bank of America, Two Sigma Investments and Cityblock Health. Stevens faculty members consult with companies such as Microsoft, IBM and Google, while others have won National Science Foundation CAREER awards. These elements earned Stevens seven 21st Century Awards for Best Practices in Distance Learning.</p>
      
      <p>The Stevens Online Master of Science in Data Science coursework is offered 100% online, and students can finish the program in two years or less. The Stevens M.S. in Data Science program lives in the math department — and the program's emphasis on foundational data science mathematics ensures a deep understanding of data science that enables our students to adapt and respond to accelerated changes in technology post-graduation. Upon completion of the program, Stevens data science master's program graduates are equipped with the expertise to analyze and interpret large datasets, glean valuable and actionable insights and support informed decision-making.</p>
    `
  },
  alumni: {
    title: "MSDS Alumni Have Gone On To Be Employed At Organizations Such As:",
    companies: [
      "AMAZON",
      "NEW YORK UNIVERSITY", 
      "DISNEY STREAMING SERVICES",
      "BANK OF AMERICA",
      "CITYBLOCK HEALTH",
      "TWO SIGMA INVESTMENTS"
    ]
  },
  faculty: {
    title: "Faculty",
    members: [
      {
        name: "Michael Zabarankin",
        title: "Professor and Department Chair of the Department of Mathematical Sciences",
        image: "/assets/avatars/msds-avatar/michael-zabarankin-stevens-msds.jpeg"
      },
      {
        name: "Eduardo Bonelli",
        title: "Teaching Professor",
        image: "/assets/avatars/msds-avatar/eduardo-bonelli-stevens-faculty.jpg"
      },
      {
        name: "Darinka Dentcheva",
        title: "Professor",
        image: "/assets/avatars/msds-avatar/darinka-dentcheva-stevens-faculty.jpg"
      },
      {
        name: "Hadi Safari Katesari",
        title: "Teaching Assistant Professor",
        image: "/assets/avatars/msds-avatar/hadi-safari-katesari-stevens-faculty.jpg"
      },
      {
        name: "Upendra Prasad",
        title: "Lecturer",
        image: "/assets/avatars/msds-avatar/upendra-prasad-stevens-faculty.jpg"
      },
      {
        name: "Pedro Andres Vilanova-Guerra",
        title: "Teaching Assistant Professor",
        image: "/assets/avatars/msds-avatar/pedro-andres-vilanova-guerra-stevens-faculty.jpg"
      }
    ]
  },
  faqs: [
    {
      q: "Is an online master's degree in data science worth it?",
      a: "Our graduates think so. A survey of the Class of 2021 taken three months after graduation found that 100% of the Stevens online data science master's program graduates had accepted job offers. Prospective students are often attracted to our program because they are looking to accelerate their careers, and holding an advanced degree is becoming an expectation in the data science field (according to a 2017 Burtch Works study, 49% of data scientists have a master's degree and an additional 41% have earned a Ph.D.)."
    },
    {
      q: "Is earning a data science degree difficult?",
      a: "The Stevens online data science master's program is demanding, and its requirements are the most restrictive within our portfolio. The ideal MSDS program candidate possesses professional experience in mathematics, computer science, tech or business and has a strong background in mathematics and statistics. This selectivity guarantees a student will be among a highly-proficient, high-potential cohort."
    },
    {
      q: "Which math courses does an online master's of data science cover?",
      a: "The Stevens Online Master of Science in Data Science curriculum includes coursework in Foundational Mathematics for Data Science, Probability, Statistical Methods and Numerical Linear Algebra for Big Data."
    }
  ],
  accreditation: {
    description: "Stevens Institute of Technology has been continually accredited by the <a href='https://www.msche.org/institution/0235/' target='_blank' rel='noopener noreferrer' class=' underline hover:text-stevens-gray-500 transition-colors duration-stevens-normal'>Middle States Commission on Higher Education (MSCHE)</a> since 1927. Stevens is accredited until 2027 and the next self-study evaluation is scheduled to take place during 2026-2027."
  }
};

export default function MSDS() {
  return <ProgramPageTemplate programData={programData} />;
}