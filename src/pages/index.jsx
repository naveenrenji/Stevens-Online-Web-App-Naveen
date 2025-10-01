    import React from "react";
import Layout from "./Layout.jsx";

import Home from "./Home";

import ASAP from "./ASAP";

import Tuition from "./Tuition";

import RequestInfo from "./RequestInfo";

import MBA from "./MBA";

import MSCS from "./MSCS";

import MEM from "./MEM";

import ExploreMBA from "./ExploreMBA";

import ExploreMEM from "./ExploreMEM";

import ComparePrograms from "./ComparePrograms";

import Events from "./Events";

import Blog from "./Blog";

import EngineeringEssentials from "./EngineeringEssentials";

import MasteringComputerScience from "./MasteringComputerScience";

import OnlineMBASuccess from "./OnlineMBASuccess";

import OtherPrograms from "./OtherPrograms";


import ProfessionalEducation from "./ProfessionalEducation";

import Certificates from "./Certificates";

import OnlineExperience from "./OnlineExperience";

import TuitionOutcomes from "./TuitionOutcomes";

import Admissions from "./Admissions";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Navigate } from "react-router-dom";

const PAGES = {
  Home: Home,

  ASAP: ASAP,

  Tuition: Tuition,

  RequestInfo: RequestInfo,

  MBA: MBA,

  MSCS: MSCS,

  MEM: MEM,

  ExploreMBA: ExploreMBA,

  ExploreMEM: ExploreMEM,

  ComparePrograms: ComparePrograms,

  Events: Events,

  Blog: Blog,

  EngineeringEssentials: EngineeringEssentials,

  MasteringComputerScience: MasteringComputerScience,

  OnlineMBASuccess: OnlineMBASuccess,

  OtherPrograms: OtherPrograms,

 

  ProfessionalEducation: ProfessionalEducation,

  Certificates: Certificates,

  OnlineExperience: OnlineExperience,

  TuitionOutcomes: TuitionOutcomes,

  Admissions: Admissions,
};

function _getCurrentPage(url) {
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }
  let urlLastPart = url.split("/").pop();
  if (urlLastPart.includes("?")) {
    urlLastPart = urlLastPart.split("?")[0];
  }

  if (urlLastPart === '' || urlLastPart.toLowerCase() === 'home') {
    return 'Home';
  }
  const pageName = Object.keys(PAGES).find(
    (page) => page.toLowerCase() === urlLastPart.toLowerCase()
  );
  return pageName || 'Home';
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
  const location = useLocation();
  const currentPage = _getCurrentPage(location.pathname);
  React.useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <Layout currentPageName={currentPage}>
      <Routes>
        <Route path="/" element={<Home />} />

         <Route path="/Home" element={<Home />} />

         <Route path="/ASAP" element={<ASAP />} />

        <Route path="/tuition-and-financial-aid/" element={<Tuition />} />
        {/* Legacy path redirects for Tuition */}
        <Route path="/Tuition" element={<Navigate to="/tuition-and-financial-aid/" replace />} />
        <Route path="/tuition" element={<Navigate to="/tuition-and-financial-aid/" replace />} />

        <Route path="/RequestInfo" element={<RequestInfo />} />

        <Route path="/online-mba/" element={<MBA />} />
        {/* Legacy path redirect for MBA */}
        <Route path="/MBA" element={<Navigate to="/online-mba/" replace />} />

        <Route path="/online-masters-computer-science-mscs/" element={<MSCS />} />
        {/* Legacy path redirect for MSCS */}
        <Route path="/MSCS" element={<Navigate to="/online-masters-computer-science-mscs/" replace />} />

        <Route path="/online-masters-engineering-management/" element={<MEM />} />
        {/* Legacy path redirect for MEM */}
        <Route path="/MEM" element={<Navigate to="/online-masters-engineering-management/" replace />} />

        <Route path="/explore/online-mba/" element={<ExploreMBA />} />

        <Route path="/explore/online-masters-engineering-management/" element={<ExploreMEM />} />

        <Route path="/compare-our-programs/" element={<ComparePrograms />} />
        {/* Legacy redirects to preserve old links */}
        <Route path="/ComparePrograms" element={<Navigate to="/compare-our-programs/" replace />} />

        <Route path="/events/" element={<Events />} />
        {/* Legacy path redirects for Events */}
        <Route path="/Events" element={<Navigate to="/events/" replace />} />
        <Route path="/events" element={<Navigate to="/events/" replace />} />

        <Route path="/blog/" element={<Blog />} />
        <Route path="/blog/:slug/" element={<Blog />} />

        <Route path="/topics/engineering-essentials/" element={<EngineeringEssentials />} />
        <Route path="/topics/engineering-essentials/:slug/" element={<EngineeringEssentials />} />

        <Route path="/topics/mastering-computer-science/" element={<MasteringComputerScience />} />
        <Route path="/topics/mastering-computer-science/:slug/" element={<MasteringComputerScience />} />

        <Route path="/topics/online-mba-success/" element={<OnlineMBASuccess />} />
        <Route path="/topics/online-mba-success/:slug/" element={<OnlineMBASuccess />} />

        <Route path="/topics/uncategorized/" element={<OtherPrograms />} />
        <Route path="/topics/uncategorized/:slug/" element={<OtherPrograms />} />


        <Route
          path="/ProfessionalEducation"
          element={<ProfessionalEducation />}
        />

        <Route path="/Certificates" element={<Certificates />} />

        <Route path="/online-learning-experience/" element={<OnlineExperience />} />
        {/* Legacy path redirects for Online Experience */}
        <Route path="/OnlineExperience" element={<Navigate to="/online-learning-experience/" replace />} />
        <Route path="/OnlineLearning" element={<Navigate to="/online-learning-experience/" replace />} />

        <Route path="/TuitionOutcomes" element={<TuitionOutcomes />} />

        <Route path="/admissions/" element={<Admissions />} />
        {/* Legacy path redirects for Admissions */}
        <Route path="/Admissions" element={<Navigate to="/admissions/" replace />} />
        <Route path="/admissions" element={<Navigate to="/admissions/" replace />} />
      </Routes>
    </Layout>
  );
}

export default function Pages() {
  return (
    <Router>
      <PagesContent />
    </Router>
  );
}
