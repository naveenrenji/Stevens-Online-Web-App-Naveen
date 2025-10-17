import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl, buildCanonicalUrl } from "@/utils";
import { BOOKING_URLS } from "@/config/constants";
import {
  ChevronDown,
  Menu,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  ArrowRight,
  X,
  BookOpen,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ChatbotButton from "@/components/chat/ChatbotButton";
import { trackConversion, CONVERSION_LABELS } from "@/utils/gtmTracking";
import "@/globals.css";

const degreeProgramItems = [
  { name: "Online MBA", page: "online-mba/" },
  { name: "M.S. in Computer Science", page: "online-masters-computer-science-mscs/" },
  // { name: "M.S. in Data Science", page: "online-masters-data-science-msds/" }, // Temporarily disabled
  { name: "M.S. in Data Science and Engineering", page: "online-masters-data-science-engineering/" },
  { name: "M.S. in Engineering Management", page: "online-masters-engineering-management/" },
];

const mainNavLinks = [
  // The "Degree Programs" and "Tuition & Admissions" are handled separately with custom dropdowns.
  // { name: "Certificates & Short Courses", page: "Certificates" },
 
  { name: "Online Experience", page: "online-learning-experience/" },
  { name: "Blog", page: "Blog/" },
];

const tuitionAdmissionsItems = [
  { name: "Admissions", page: "Admissions/" },
  { name: "Tuition & Financial Aid", page: "Tuition" },
  { name: "Events", page: "Events/" },
 
];

const mobileNavLinks = [
  {
    name: "Degree Programs",
    isDropdown: true,
    items: degreeProgramItems.concat({
      name: "Compare All Programs",
      page: "compare-our-programs/",
    }),
  },
  {
    name: "Tuition & Admissions",
    isDropdown: true,
    items: tuitionAdmissionsItems,
  },
  ...mainNavLinks,
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const [showASAPBanner, setShowASAPBanner] = React.useState(true);
  const [showTopNav, setShowTopNav] = React.useState(true);
  const initialWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const [isMobile, setIsMobile] = React.useState(initialWidth < 768);
  const [isTabletOrMobile, setIsTabletOrMobile] = React.useState(initialWidth <= 1024);
  const [isHoveringRedNav, setIsHoveringRedNav] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [degreeDropdownOpen, setDegreeDropdownOpen] = React.useState(false);
  const [tuitionDropdownOpen, setTuitionDropdownOpen] = React.useState(false);
  const hoverTimeoutRef = React.useRef(null);
  const degreeHoverTimeoutRef = React.useRef(null);
  const tuitionHoverTimeoutRef = React.useRef(null);
  const prevASAPVisibleRef = React.useRef(true);

  React.useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Lightweight debounce using a single timer; avoids rapid state flips and extra renders
    let resizeTimer = null;
    let scrollTimer = null;

    const handleResizeNow = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTabletOrMobile(width <= 1024);
    };

    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResizeNow, 120);
    };

    const handleScrollNow = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
      setShowBackToTop(scrollY > 300);
      // Hide top nav when near top
      setShowTopNav(scrollY < 50);
    };

    const handleScroll = () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(handleScrollNow, 120);
    };

    // Add global protection against external script interference
    const addGlobalProtection = () => {
      const style = document.createElement("style");
      style.id = "navigation-protection";
      style.textContent = `
        /* Global protection for navigation elements */
        header[class*="z-[9998]"] {
          z-index: 9998 !important;
          position: sticky !important;
          pointer-events: auto !important;
        }
        
        header[class*="z-[9998]"] * {
          pointer-events: auto !important;
          z-index: inherit !important;
        }
        
        div[class*="z-[9996]"] {
          z-index: 9996 !important;
          position: fixed !important;
          pointer-events: auto !important;
        }
        
        div[class*="z-[9996]"] * {
          pointer-events: auto !important;
          z-index: inherit !important;
        }
        
        div[class*="z-[9997]"] {
          z-index: 9997 !important;
          position: relative !important;
          pointer-events: auto !important;
        }
        
        div[class*="z-[9997]"] * {
          pointer-events: auto !important;
          z-index: inherit !important;
        }
        
        /* Pentagon badge protection - Highest z-index to stay above mobile menu */
        div[class*="z-[9999]"]:not(.mobile-menu-offset):not(.mobile-menu-overlay):not([role="dialog"]):not([data-radix-dialog-overlay]) {
          z-index: 10000 !important;
          position: fixed !important;
          pointer-events: none !important; /* Container transparent to clicks */
          top: 3.5rem !important; /* Force desktop positioning */
          width: 100% !important; /* Ensure full width for container alignment */
        }
        
        /* Mobile pentagon badge protection */
        @media (max-width: 1024px) {
          div[class*="z-[9999]"]:not(.mobile-menu-offset):not(.mobile-menu-overlay):not([role="dialog"]):not([data-radix-dialog-overlay]) {
            top: 1rem !important; /* Force mobile positioning */
          }
        }
        
        /* Pentagon badge link - make it clickable */
        div[class*="z-[9999]"]:not(.mobile-menu-offset):not(.mobile-menu-overlay):not([role="dialog"]):not([data-radix-dialog-overlay]) a,
        div[class*="z-[9999]"]:not(.mobile-menu-offset):not(.mobile-menu-overlay):not([role="dialog"]):not([data-radix-dialog-overlay]) a * {
          pointer-events: auto !important;
          z-index: inherit !important;
        }
        
        /* Ensure buttons and links remain clickable */
        button, a, [role="button"] {
          pointer-events: auto !important;
        }
        
        /* Fix horizontal overflow issues on mobile that affect button positioning */
        @media (max-width: 768px) {
          body, html {
            overflow-x: hidden !important;
          }
          
          /* Keep red nav visible on mobile while overflow-x is hidden */
          header.group.sticky {
            position: fixed !important;
            top: 0 !important;
            left: 0;
            right: 0;
            z-index: 9998 !important;
          }

          /* Compensate layout for fixed header height (approx 64px) */
          body {
            padding-top: 64px !important;
          }
          
          
          
          /* Protect chatbot and back-to-top buttons from container overflow */
          button[class*="bottom-6"][class*="right-6"],
          button[class*="bottom-20"][class*="right-6"],
          .chat-button-container {
            position: fixed !important;
            right: 1.5rem !important;
          }
        }
        
        /* Dropdown menu protection - ensure they appear above all navigation elements */
        [data-radix-popper-content-wrapper],
        [data-radix-dropdown-menu-content],
        [role="menu"],
        .dropdown-content {
          z-index: 10001 !important;
          position: fixed !important;
          pointer-events: auto !important;
        }
        
        [data-radix-popper-content-wrapper] *,
        [data-radix-dropdown-menu-content] *,
        [role="menu"] *,
        .dropdown-content * {
          pointer-events: auto !important;
          z-index: inherit !important;
        }
        
        
        /* Reset external script z-index interference */
        *:not(header):not(header *):not([class*="z-[9"]):not([data-radix-popper-content-wrapper]):not([data-radix-dropdown-menu-content]):not([role="menu"]) {
          z-index: auto !important;
        }
      `;

      // Remove existing protection if it exists
      const existing = document.getElementById("navigation-protection");
      if (existing) {
        existing.remove();
      }

      document.head.appendChild(style);
    };

    // Perform one synchronous measurement to avoid initial flicker
    handleResizeNow();
    handleScrollNow();
    addGlobalProtection();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (resizeTimer) clearTimeout(resizeTimer);
      if (scrollTimer) clearTimeout(scrollTimer);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (degreeHoverTimeoutRef.current) {
        clearTimeout(degreeHoverTimeoutRef.current);
      }
      if (tuitionHoverTimeoutRef.current) {
        clearTimeout(tuitionHoverTimeoutRef.current);
      }
      // Clean up protection styles
      const protection = document.getElementById("navigation-protection");
      if (protection) {
        protection.remove();
      }
    };
  }, []);

  // Reset hover state when page changes
  React.useEffect(() => {
    // Clear any pending hover timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    
    // Reset hover state to false when page changes
    setIsHoveringRedNav(false);
    
    // Reset dropdown states
    setDegreeDropdownOpen(false);
    setTuitionDropdownOpen(false);
    // Close mobile menu and restore ASAP banner when navigating to a new page
    setMobileMenuOpen(false);
    if (prevASAPVisibleRef.current) {
      setShowASAPBanner(true);
    }
  }, [location.pathname]);

  // Update canonical tag on route change
  React.useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    const canonicalHref = buildCanonicalUrl(location.pathname);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalHref);
  }, [location.pathname]);

  const isActive = (page) => currentPageName === page;

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Pentagon Badge Overlay - shows at top, hides when scrolled */}
      <div
        className={`fixed z-[9999] transition-all duration-50 ease-out w-full ${
          !isTabletOrMobile ? "top-14" : "top-4"
        } ${
          (isScrolled && !isHoveringRedNav) 
            ? "opacity-0 -translate-y-4 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
        onMouseEnter={() => {
          if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
          }
          setIsHoveringRedNav(true);
        }}
        onMouseLeave={() => {
          hoverTimeoutRef.current = setTimeout(() => {
            setIsHoveringRedNav(false);
          }, 100); // Small delay to prevent flickering
        }}
      >
        <div className="w-full">
           <div className="flex items-center h-16 pl-stevens-lg lg:pl-stevens-xl">
            <div className="flex-shrink-0">
              <Link
                to={createPageUrl("Home")}
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <img
                    src="/assets/logos/Stevens-web-logo-sized-400x400.png"
                    alt="Stevens Institute of Technology Pentagon Badge"
                    className="pentagon-shape-extended bg-stevens-white"
                  />
                  {/* Triangle shape extending from bottom - matches badge width */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 triangle-desktop triangle-mobile">
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Red Navigation Bar */}
      <header
        className={`group sticky z-[9998] transition-all duration-stevens-normal bg-stevens-red ${
          (showTopNav || isHoveringRedNav) && !isMobile
            ? "stevens-lg:top-16 top-0"
            : "top-0"
        } ${isScrolled ? "shadow-stevens-lg" : ""} hover:stevens-lg:top-16 hover:top-0`}
      >
        {/* Invisible hover area for badge display */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-auto opacity-0"
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) {
              clearTimeout(hoverTimeoutRef.current);
            }
            setIsHoveringRedNav(true);
          }}
          onMouseLeave={() => {
            hoverTimeoutRef.current = setTimeout(() => {
              setIsHoveringRedNav(false);
            }, 100);
          }}
        ></div>
        {/* Top Grey Navigation Bar */}
        <div
          className={`bg-stevens-gray-800 text-stevens-white transition-all duration-stevens-normal z-[9996] ${
            showTopNav || isHoveringRedNav
              ? "translate-y-0"
              : "-translate-y-full"
          } fixed top-0 w-full hidden stevens-lg:block hover:translate-y-0 group-hover:translate-y-0`}
        >
          {/* Invisible hover area for badge display */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-auto opacity-0"
            onMouseEnter={() => {
              if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
              }
              setIsHoveringRedNav(true);
            }}
            onMouseLeave={() => {
              hoverTimeoutRef.current = setTimeout(() => {
                setIsHoveringRedNav(false);
              }, 100);
            }}
          ></div>
          <div className="w-full">
            <div
              className="flex items-center justify-end h-16 text-stevens-sm px-stevens-md lg:px-stevens-lg"
            >
              <div className="flex items-center space-x-stevens-md ">
                <a
                  href="https://www.stevens.edu/corporate-relations"
                  className="menu-item-link font-stevens-bitter text-stevens-sm text-stevens-white hover:text-stevens-white hover:underline hover:font-bold transition-colors duration-stevens-fast"
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    setIsHoveringRedNav(true);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                      setIsHoveringRedNav(false);
                    }, 100);
                  }}
                >
                  Corporate Relations
                </a>
                <a
                  href="https://www.stevens.edu/development-alumni-engagement"
                  className="menu-item-link font-stevens-bitter text-stevens-sm text-stevens-white hover:text-stevens-white hover:underline hover:font-bold transition-colors duration-stevens-fast"
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    setIsHoveringRedNav(true);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                      setIsHoveringRedNav(false);
                    }, 100);
                  }}
                >
                  Alumni
                </a>
                <a
                  href="https://stevensducks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-item-link font-stevens-bitter text-stevens-sm text-stevens-white hover:text-stevens-white hover:underline hover:font-bold transition-colors duration-stevens-fast"
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    setIsHoveringRedNav(true);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                      setIsHoveringRedNav(false);
                    }, 100);
                  }}
                >
                  Athletics
                </a>
                <a
                  href="https://www.stevens.edu/admission-aid/visit-stevens"
                  className="menu-item-link font-stevens-bitter text-stevens-sm text-stevens-white hover:text-stevens-white hover:underline hover:font-bold transition-colors duration-stevens-fast"
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    setIsHoveringRedNav(true);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                      setIsHoveringRedNav(false);
                    }, 100);
                  }}
                >
                  Visit
                </a>
                <a
                  href="https://www.stevens.edu/apply"
                  className="menu-item-link font-stevens-bitter text-stevens-sm text-stevens-white hover:text-stevens-white hover:underline hover:font-bold transition-colors duration-stevens-fast"
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    setIsHoveringRedNav(true);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                      setIsHoveringRedNav(false);
                    }, 100);
                  }}
                >
                  Apply
                </a>
                <a
                  href="https://www.stevens.edu/development-alumni-engagement/give-to-stevens"
                  className="menu-item-link font-stevens-bitter text-stevens-sm text-stevens-white hover:text-stevens-white hover:underline hover:font-bold transition-colors duration-stevens-fast"
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    setIsHoveringRedNav(true);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                      setIsHoveringRedNav(false);
                    }, 100);
                  }}
                >
                  Give
                </a>
              </div>
              <div className="flex items-center space-x-stevens-md ml-stevens-lg">
                <DropdownMenu>
                  <DropdownMenuTrigger 
                    className="menu-item-link font-stevens-bitter text-stevens-sm text-stevens-white hover:text-stevens-white hover:underline hover:font-bold transition-colors duration-stevens-fast flex items-center"
                    onMouseEnter={() => {
                      if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                      }
                      setIsHoveringRedNav(true);
                    }}
                    onMouseLeave={() => {
                      hoverTimeoutRef.current = setTimeout(() => {
                        setIsHoveringRedNav(false);
                      }, 100);
                    }}
                  >
                    Info For <ChevronDown className="w-3 h-3 ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="bg-stevens-white border border-stevens-gray-200 shadow-stevens-lg z-[10001]"
                    sideOffset={10}
                    align="start"
                    onMouseEnter={() => {
                      if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                      }
                      setIsHoveringRedNav(true);
                    }}
                    onMouseLeave={() => {
                      hoverTimeoutRef.current = setTimeout(() => {
                        setIsHoveringRedNav(false);
                      }, 100);
                    }}
                  >
                    <DropdownMenuItem>
                      <a
                        href="https://www.stevens.edu/hr"
                        className="text-stevens-gray-900  hover:underline hover:font-bold transition-colors duration-stevens-fast w-full block py-2 px-3"
                      >
                        Faculty and Staff
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a
                        href="https://www.stevens.edu/information-for-parents-and-families"
                        className="text-stevens-gray-900 hover:underline hover:font-bold transition-colors duration-stevens-fast w-full block py-2 px-3"
                      >
                        Parents and Families
                      </a>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <a
                        href="https://www.stevens.edu/media-relations"
                        className="text-stevens-gray-900  hover:underline hover:font-bold transition-colors duration-stevens-fast w-full block py-2 px-3"
                      >
                        Media
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <a
                  href="https://login.stevens.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stevens-white hover:underline hover:font-bold transition-colors duration-stevens-fast"
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    setIsHoveringRedNav(true);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                      setIsHoveringRedNav(false);
                    }, 100);
                  }}
                >
                  myStevens
                </a>
                <a
                  href="https://search.stevens.edu/s/search.html?collection=21772~sp-search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stevens-white hover:underline hover:font-bold transition-colors duration-stevens-fast"
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    setIsHoveringRedNav(true);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                      setIsHoveringRedNav(false);
                    }, 100);
                  }}
                >
                  <Search className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Top Red Navigation Bar */}
        <div className="w-full px-stevens-md lg:px-stevens-lg">
            <div className="flex items-center justify-between h-16 w-full">
            {/* Logo - Left */}
            <div className="flex-shrink-0 overflow-visible">
              <Link
                to={createPageUrl("Home")}
                className="flex items-center gap-2 stevens-md:gap-3 transition-opacity duration-stevens-normal hover:opacity-80"
              >
                <div className="relative overflow-visible ">
                  {/* Main Logo - shows when scrolled, hidden at top (covered by badge) */}
                  <img
                    src="/assets/logos/Stevens-Wordmark-RGB_WHT.png"
                    alt="Stevens Institute of Technology Professional Education Logo" 
                    className={`h-12 stevens-md:h-16 w-[137px] transition-opacity duration-300 mobile-logo-height logo-responsive-width ${
                      isScrolled && !isHoveringRedNav
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Right Aligned */}
            <div className="hidden stevens-lg:flex ml-auto">
              <nav className="flex items-center gap-stevens-xl">
                <DropdownMenu open={degreeDropdownOpen} onOpenChange={setDegreeDropdownOpen}>
                  <DropdownMenuTrigger
                    className={`group relative font-stevens-nav font-normal uppercase tracking-wider flex items-center cursor-pointer transition-colors duration-stevens-normal ${
                      isActive("MBA") ||
                      isActive("MSCS") ||
                      // isActive("MSDS") || // Temporarily disabled
                      isActive("MSDSE") ||
                      isActive("MEM") ||
                      isActive("ComparePrograms")
                        ? "text-stevens-white/80"
                        : "text-stevens-white hover:text-stevens-white/80"
                    }`}
                    onMouseEnter={() => {
                      if (degreeHoverTimeoutRef.current) {
                        clearTimeout(degreeHoverTimeoutRef.current);
                      }
                      if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                      }
                      setDegreeDropdownOpen(true);
                      setIsHoveringRedNav(true);
                    }}
                    onMouseLeave={() => {
                      degreeHoverTimeoutRef.current = setTimeout(() => {
                        setDegreeDropdownOpen(false);
                      }, 100);
                      hoverTimeoutRef.current = setTimeout(() => {
                        setIsHoveringRedNav(false);
                      }, 100);
                    }}
                  >
                    Degree Programs{" "}
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-stevens-normal ${degreeDropdownOpen ? 'rotate-180' : ''}`} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-96 p-stevens-md shadow-stevens-lg border border-stevens-gray-100 bg-stevens-white/95 backdrop-blur-sm animate-in slide-in-from-top-2 duration-stevens-normal z-[10001]"
                    sideOffset={4}
                    align="start"
                    onMouseEnter={() => {
                      if (degreeHoverTimeoutRef.current) {
                        clearTimeout(degreeHoverTimeoutRef.current);
                      }
                      if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                      }
                      setDegreeDropdownOpen(true);
                      setIsHoveringRedNav(true);
                    }}
                    onMouseLeave={() => {
                      degreeHoverTimeoutRef.current = setTimeout(() => {
                        setDegreeDropdownOpen(false);
                      }, 100);
                      hoverTimeoutRef.current = setTimeout(() => {
                        setIsHoveringRedNav(false);
                      }, 100);
                    }}
                  >
                    <div className="grid grid-cols-2 gap-stevens-md">
                      <div className="flex flex-col space-y-1">
                        {degreeProgramItems.map((item) => (
                        <DropdownMenuItem key={item.name} asChild>
                            <Link
                              to={createPageUrl(item.page)}
                              className="font-stevens-nav font-semibold text-stevens-gray-900 p-stevens-sm rounded-stevens-md transition-colors duration-stevens-fast text-stevens-base"
                              /*inline styles to prevent css injection overwriting from asap page */
                              style={{
                                color: "#1f2937",
                                backgroundColor: "transparent",
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.color = "#ffffff";
                                e.target.style.backgroundColor = "#a32638";
                                e.target.style.textDecoration = "underline";
                                e.target.style.fontWeight = "700";
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.color = "#1f2937";
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.textDecoration = "none";
                                e.target.style.fontWeight = "600";
                              }}
                            >
                              {item.name}
                            </Link>
                        </DropdownMenuItem>
                        ))}
                      </div>
                      <div className="flex flex-col space-y-1">
                        <DropdownMenuItem asChild>
                          <Link
                            to="/compare-our-programs/"
                            className="font-stevens-nav font-semibold text-stevens-gray-900 p-stevens-sm rounded-stevens-md transition-colors duration-stevens-fast flex items-center text-stevens-base"
                            /*inline styles to prevent css injection overwriting from asap page */
                            style={{
                              color: "#1f2937",
                              backgroundColor: "transparent",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.color = "#ffffff";
                              e.target.style.backgroundColor = "#a32638";
                              e.target.style.textDecoration = "underline";
                              e.target.style.fontWeight = "700";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = "#1f2937";
                              e.target.style.backgroundColor = "transparent";
                              e.target.style.textDecoration = "none";
                              e.target.style.fontWeight = "600";
                            }}
                          >
                              Compare All Programs
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </DropdownMenuItem>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu open={tuitionDropdownOpen} onOpenChange={setTuitionDropdownOpen}>
                  <DropdownMenuTrigger
                    className={`group relative font-stevens-nav font-normal uppercase tracking-wider flex items-center cursor-pointer transition-colors duration-stevens-normal ${
                      isActive("Tuition") || isActive("Events") || isActive("Admissions")
                        ? "text-stevens-white/80"
                        : "text-stevens-white hover:text-stevens-white/80"
                    }`}
                    onMouseEnter={() => {
                      if (tuitionHoverTimeoutRef.current) {
                        clearTimeout(tuitionHoverTimeoutRef.current);
                      }
                      if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                      }
                      setTuitionDropdownOpen(true);
                      setIsHoveringRedNav(true);
                    }}
                    onMouseLeave={() => {
                      tuitionHoverTimeoutRef.current = setTimeout(() => {
                        setTuitionDropdownOpen(false);
                      }, 100);
                      hoverTimeoutRef.current = setTimeout(() => {
                        setIsHoveringRedNav(false);
                      }, 100);
                    }}
                  >
                    Tuition & Admissions{" "}
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-stevens-normal ${tuitionDropdownOpen ? 'rotate-180' : ''}`} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-40 p-stevens-md shadow-stevens-lg border border-stevens-gray-100 bg-stevens-white/95 backdrop-blur-sm animate-in slide-in-from-top-2 duration-stevens-normal z-[10001]"
                    sideOffset={4}
                    align="start"
                    onMouseEnter={() => {
                      if (tuitionHoverTimeoutRef.current) {
                        clearTimeout(tuitionHoverTimeoutRef.current);
                      }
                      if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                      }
                      setTuitionDropdownOpen(true);
                      setIsHoveringRedNav(true);
                    }}
                    onMouseLeave={() => {
                      tuitionHoverTimeoutRef.current = setTimeout(() => {
                        setTuitionDropdownOpen(false);
                      }, 100);
                      hoverTimeoutRef.current = setTimeout(() => {
                        setIsHoveringRedNav(false);
                      }, 100);
                    }}
                  >
                    <div className="flex flex-col space-y-1">
                      {tuitionAdmissionsItems.map((item) => (
                        <DropdownMenuItem key={item.name} asChild>
                          <Link
                            to={createPageUrl(item.page)}
                            className=" font-stevens-nav font-semibold text-stevens-gray-900 p-stevens-sm rounded-stevens-md transition-colors duration-stevens-fast text-stevens-base"
                            style={{ color: "#1f2937", backgroundColor: "transparent" }}
                            onMouseEnter={(e) => {
                              e.target.style.color = "#ffffff";
                              e.target.style.backgroundColor = "#a32638";
                              e.target.style.textDecoration = "underline";
                              e.target.style.fontWeight = "700";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = "#1f2937";
                              e.target.style.backgroundColor = "transparent";
                              e.target.style.textDecoration = "none";
                              e.target.style.fontWeight = "600";
                            }}
                          >
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                {mainNavLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.page}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative font-stevens-nav font-normal uppercase tracking-wider transition-colors duration-stevens-normal text-stevens-white hover:text-stevens-white/80"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={createPageUrl(link.page)}
                        className={`relative font-stevens-nav font-normal uppercase tracking-wider transition-colors duration-stevens-normal ${
                          isActive(link.page)
                            ? "text-stevens-white/80"
                            : "text-stevens-white hover:text-stevens-white/80"
                        }`}
                        onMouseEnter={() => {
                          if (hoverTimeoutRef.current) {
                            clearTimeout(hoverTimeoutRef.current);
                          }
                          setIsHoveringRedNav(true);
                        }}
                        onMouseLeave={() => {
                          hoverTimeoutRef.current = setTimeout(() => {
                            setIsHoveringRedNav(false);
                          }, 100);
                        }}
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
              </nav>
            </div>

            {/* Mobile Menu Button - Right */}
            <div className="stevens-lg:hidden flex items-center">
              <Sheet open={mobileMenuOpen} onOpenChange={(open) => {
                if (open) {
                  prevASAPVisibleRef.current = showASAPBanner;
                  setShowASAPBanner(false);
                } else {
                  if (prevASAPVisibleRef.current) {
                    setShowASAPBanner(true);
                  }
                }
                setMobileMenuOpen(open);
              }}>
                  <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-stevens-white hover:text-stevens-white/80 hover:bg-stevens-white/10"
                  >
                      <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
              <SheetContent 
                side="right" 
                className="mobile-menu-offset w-full stevens-sm:w-80 bg-stevens-white p-0 border-l border-stevens-gray-200 overflow-y-auto"
              >
                    <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex h-16 items-center justify-between p-stevens-md border-b border-stevens-gray-200 bg-stevens-primary">
                    
                      </div>

                  {/* Mobile Menu CTA Buttons - Top */}
                  <div className="p-stevens-md border-b border-stevens-gray-200 bg-stevens-gray-50 space-y-stevens-sm">
                    <a
                      href="https://www.stevens.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full btn-stevens-secondary hover:text-stevens-primary bg-stevens-white text-stevens-primary hover:bg-stevens-gray-100 font-stevens-semibold px-stevens-lg py-stevens-md rounded-stevens-md transition-colors duration-stevens-normal text-stevens-sm uppercase tracking-wider">
                        Stevens.edu
                      </Button>
                    </a>
                    <a
                      href={BOOKING_URLS.SCHEDULE_CALL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      onClick={() => trackConversion(CONVERSION_LABELS.SCHEDULE_CALL)}
                    >
                      <Button className="w-full bg-stevens-white text-stevens-primary hover:bg-stevens-gray-100 font-stevens-semibold px-stevens-lg py-stevens-md rounded-stevens-md">
                        Schedule a Call
                      </Button>
                      
                    </a>
                  </div>

                  {/* Mobile Menu Links */}
                  <nav className="flex-1 overflow-y-auto">
                    <div className="py-stevens-md">
                          {mobileNavLinks.map((link) => {
                            if (link.isDropdown) {
                              return (
                            <div key={link.name} className="border-b border-stevens-gray-200">
                              <button
                                className="w-full px-stevens-md py-stevens-md text-left font-stevens-semibold text-stevens-gray-900 hover:bg-stevens-gray-50 transition-colors duration-stevens-normal flex items-center justify-between"
                                onClick={(e) => {
                                  const content = e.currentTarget.nextElementSibling;
                                  const icon = e.currentTarget.querySelector('svg');
                                  if (content.classList.contains('hidden')) {
                                    content.classList.remove('hidden');
                                    icon.classList.add('rotate-180');
                                  } else {
                                    content.classList.add('hidden');
                                    icon.classList.remove('rotate-180');
                                  }
                                }}
                              >
                                {link.name}
                                <ChevronDown className="w-4 h-4 transition-transform duration-stevens-normal" />
                              </button>
                              <div className="hidden bg-stevens-gray-50">
                                {link.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      to={createPageUrl(item.page)}
                                    className="block px-stevens-lg py-stevens-sm text-stevens-gray-700 hover:text-stevens-primary hover:bg-stevens-white transition-colors duration-stevens-normal"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                        {item.name}
                                      </Link>
                                ))}
                              </div>
                                  </div>
                          );
                            }
                            return link.external ? (
                              <a
                                key={link.name}
                                href={link.page}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-stevens-md py-stevens-md font-stevens-semibold text-stevens-gray-900 hover:bg-stevens-gray-50 border-b border-stevens-gray-200 transition-colors duration-stevens-normal"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {link.name}
                              </a>
                            ) : (
                              <Link
                                key={link.name}
                                to={createPageUrl(link.page)}
                                className="block px-stevens-md py-stevens-md font-stevens-semibold text-stevens-gray-900 hover:bg-stevens-gray-50 border-b border-stevens-gray-200 transition-colors duration-stevens-normal"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {link.name}
                              </Link>
                            );
                      })}
                    </div>
                  </nav>

                  {/* Mobile Menu CTA */}
                  <div className="p-stevens-md border-t border-stevens-gray-200 bg-stevens-gray-50 space-y-stevens-sm">
                    <a
                      href="https://calendly.com/n3-stevens/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-stevens-white text-stevens-primary hover:bg-stevens-gray-100 font-stevens-semibold px-stevens-lg py-stevens-md rounded-stevens-md">
                        Schedule a Call
                      </Button>
                              </a>
                          </div>
                    </div>
                  </SheetContent>
                </Sheet>
            </div>

            {/* CTA Section - Desktop Only */}
            <div className="hidden stevens-lg:flex items-center gap-stevens-md ml-stevens-lg">
            <div className="flex items-center gap-stevens-sm">
                <a
                  href="https://calendly.com/n3-stevens/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion(CONVERSION_LABELS.SCHEDULE_CALL)}
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    setIsHoveringRedNav(true);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                      setIsHoveringRedNav(false);
                    }, 100);
                  }}
                >
                 
                  <Button className="btn-stevens-secondary bg-stevens-white text-stevens-primary hover: font-stevens-semibold px-stevens-lg py-stevens-md rounded-stevens-md transition-colors duration-stevens-normal text-stevens-sm uppercase tracking-wider">
                    Schedule a Call
                  </Button>
                </a>
              </div>

              </div>
            </div>
          </div>
      </header>
      
      {/* ASAP Banner */}
      {showASAPBanner && (
        <div
          className={`bg-stevens-gray-400 text-stevens-primary py-3 px-stevens-md relative z-[9997] ${
            showTopNav && !isMobile ? "stevens-lg:mt-16 mt-0" : "mt-0"
          } transition-all duration-stevens-normal`}
        >
          <div className="max-w-stevens-content-max mx-auto px-stevens-md lg:px-stevens-lg">
            {/* Full Alert on Large Screens */}
            <div className="hidden lg:flex items-center justify-center gap-stevens-sm text-center">
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              <div className="text-stevens-sm font-medium">
                <strong>ASAP Application:</strong> Start with two courses & earn full admission based on your performance. No full degree commitment required! 
                <Link
                  to={createPageUrl("ASAP/")}
                  className="ml-2 underline hover:no-underline font-semibold transition-opacity duration-stevens-fast hover:opacity-80"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Condensed Alert on Medium Screens */}
            <div className="hidden md:flex lg:hidden items-center justify-center gap-stevens-sm text-center">
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              <div className="text-stevens-sm font-medium">
                <strong>ASAP Application:</strong> Start with 2 courses & earn admission. 
                <Link
                  to={createPageUrl("ASAP/")}
                  className="ml-2 underline hover:no-underline font-semibold transition-opacity duration-stevens-fast hover:opacity-80"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Minimal Alert on Small Screens */}
            <div className="flex md:hidden items-center justify-center gap-stevens-sm text-center">
              <BookOpen className="w-3 h-3 flex-shrink-0" />
              <div className="text-stevens-xs font-medium">
                <strong>ASAP:</strong> 
                <Link
                  to={createPageUrl("ASAP/")}
                  className="ml-1 underline hover:no-underline font-semibold transition-opacity duration-stevens-fast hover:opacity-80"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowASAPBanner(false);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stevens-primary hover:text-stevens-primary/80 transition-colors duration-stevens-fast cursor-pointer z-[9999]"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <main
        className={`flex-grow ${!showASAPBanner && !isTabletOrMobile ? "main-content-padding" : ""}`}
      >
        {children}
      </main>

      <footer className="bg-gray-950 text-white">
        <div className="max-w-stevens-content-max mx-auto px-stevens-md lg:px-stevens-lg py-stevens-section">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-stevens-gap-lg">
             <div className="lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
              <Link
                to={createPageUrl("Home")}
                className="mb-6 transition-opacity duration-300 hover:opacity-80"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <img
                  src="/assets/logos/Stevens-Wordmark-RGB_WHT.png"
                  alt="Stevens Institute of Technology Logo"
                  className="h-16 w-auto"
                />
               </Link>
            </div>
            <div className="lg:col-start-3">
              <h3 className="font-display text-lg font-semibold mb-4 text-white">
                Quick Links
              </h3>
              <div className="space-y-2">
                <Link
                  to="/compare-our-programs/"
                  className="block text-gray-300 hover:text-white hover:underline hover:font-bold transition-all duration-300"
                >
                  Degree Programs
                </Link>
                {/* <Link
                  to={createPageUrl("Certificates")}
                  className="block text-gray-300 hover:text-white hover:underline hover:font-bold transition-all duration-300"
                >
                  Certificates & Short Courses
                </Link> */}
                <Link
                  to="/online-learning-experience/"
                  className="block text-gray-300 hover:text-white hover:underline hover:font-bold transition-all duration-300"
                >
                  The Online Experience
                </Link>
                <Link
                  to={createPageUrl("Tuition")}
                  className="block text-gray-300 hover:text-white hover:underline hover:font-bold transition-all duration-300"
                >
                  Tuition & Financial Aid
                </Link>
                <Link
                  to={createPageUrl("RequestInfo")}
                  className="block text-gray-300 hover:text-white hover:underline hover:font-bold transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
             <div>
              <h3 className="font-display text-lg font-semibold mb-4 text-white">
                Connect With Us
              </h3>
              {/* Social Media Icons Section - Connect With Us */}
              <div className="flex space-x-4 justify-center md:justify-start">
                {/* Facebook Social Media Link */}
                <a
                  href="https://www.facebook.com/Stevens1870"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-300 icon-button"
                  aria-label="Follow Stevens on Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>

                {/* Twitter/X Social Media Link */}
                <a
                  href="https://x.com/followstevens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-300 icon-button"
                  aria-label="Follow Stevens on Twitter/X"
                >
                  <Twitter className="w-6 h-6" />
                </a>

                {/* Instagram Social Media Link */}
                <a
                  href="https://www.instagram.com/followstevens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-300 icon-button"
                  aria-label="Follow Stevens on Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>

                {/* LinkedIn Social Media Link */}
                <a
                  href="https://www.linkedin.com/school/stevens-institute-of-technology/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-300 icon-button"
                  aria-label="Connect with Stevens on LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

                {/* YouTube Social Media Link */}
                <a
                  href="https://www.youtube.com/c/stevensinstituteoftechnology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-300 icon-button"
                  aria-label="Subscribe to Stevens on YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              <div className="mt-6 space-y-2 text-sm">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>201.216.5000</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>graduate@stevens.edu</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Hoboken, NJ 07030</span>
                </div>
              </div>
            </div>
           </div>
           <div className="border-t border-gray-400 mt-12 pt-8 text-center text-sm text-gray-300">
            <p>
              &copy; 2025 Stevens Institute of Technology. All rights reserved.
            </p>
           </div>
        </div>
      </footer>

      {showBackToTop && (
      <button
          className="fixed bottom-6 right-6 bg-stevens-maroon hover:bg-stevens-maroon-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-[9998]"
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      
      {/* Interactive Chatbot Button */}
      <ChatbotButton />
    </div>
  );
}
