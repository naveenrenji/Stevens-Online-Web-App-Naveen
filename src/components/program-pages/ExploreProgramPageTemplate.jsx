import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Check, Award, Globe, Star, Target, Clock, Network, ThumbsUp } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PageHero from '../shared/PageHero';
import LeadCaptureForm from '../forms/LeadCaptureForm';
import VideoPlayer from '../shared/VideoPlayer';
import { trackConversion, CONVERSION_LABELS } from '@/utils/gtmTracking';

const ExploreProgramPageTemplate = ({
  // Hero Section Props
  heroTitle,
  heroSubtitle,
  programName,
  bgImage,
  badges = [],
  programCode = '',
  
  // Statistics Props
  statistics,
  
  // Program Benefits Props
  programBenefitsTitle,
  programBenefitsDescription,
  programBenefitsHighlights,
  programBenefitsImage = "/assets/images/stevens-campus.png",
  
  // Program Details Props
  programDetails,
  
  // Excellence Section Props
  excellenceSectionTitle,
  excellenceSectionItems,
  
  // Additional Why Choose Stevens Section Props
  additionalWhyChooseStevensTitle,
  additionalWhyChooseStevensSubtitle,
  additionalWhyChooseStevensContent,
  additionalWhyChooseStevensImage,
  
  // Key Dates Props
  keyDates,
  keyDatesTerm = "SPRING 2026",
  keyDatesNote,
  
  // FAQ Props
  faqs,
  
  // Contact Props
  contactTitle,
  contactDescription,
  contactButtonText,
  
  // Additional Sections (optional)
  additionalSections = [],
  
  // Why Choose Stevens Section Props
  whyChooseStevensTitle = "WHY CHOOSE STEVENS",
  whyChooseStevensSubtitle = "CAREER-ALIGNED CURRICULUM",
  whyChooseStevensContent = "",
  whyChooseStevensVideo = "/assets/videos/Stevens Online MBA - 1.mp4",
  whyChooseStevensVideoCover = "/assets/videos/video-cover-1.avif",
  
  // New Fall 2025 Section Props
  newFall2025Badge ,
  newFall2025Title ,
  newFall2025Description = "",
  newFall2025Benefits = [],
  newFall2025Image ,
  
  // Just Launched Section Props
  justLaunchedBadge = "JUST LAUNCHED",
  justLaunchedTitle = "",
  justLaunchedDescription = "",
  justLaunchedButtonText = "",
  justLaunchedButtonLink = "#",
  justLaunchedImage = "/assets/images/stevens-campus.png"
}) => {

  return (
    <div className="min-h-screen bg-stevens-white">
      {/* PageHero Component */}
      <PageHero
        titleLines={[heroTitle, programName]}
        subtitle={heroSubtitle}
        bgImage={bgImage}
        badges={badges}
        primaryCta={{ label: 'Request Information', to: 'RequestInfo' }}
        secondaryCta={{ label: 'Apply Now', href: 'https://gradadmissions.stevens.edu/apply/?pk=GRNP' }}
        rightContent={
          <div className="animate-in slide-in-from-right duration-700 delay-300 w-full flex justify-center lg:justify-end">
            <LeadCaptureForm 
              title="Request Information"
              subtitle="Get detailed program information and connect with an enrollment advisor."
              sourcePage={`explore_${programCode}_page`}
              programOfInterest={programCode}
            />
          </div>
        }
      />

      
      {/* Statistics Section */}
      <section className="py-stevens-3xl bg-stevens-white">
        <div className="max-w-7xl mx-auto px-stevens-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-stevens-lg">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-stevens-display text-stevens-4xl text-stevens-primary mb-stevens-sm">
                  {stat.number}
                </h3>
                <h4 className="font-stevens-display text-stevens-lg text-stevens-gray-700 mb-stevens-sm">
                  {stat.label}
                </h4>
                <p className="text-stevens-sm text-stevens-gray-600">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Stevens Section */}
      <section className="py-stevens-3xl bg-stevens-white">
        <div className="max-w-7xl mx-auto px-stevens-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-stevens-2xl items-center">
              {/* Left Column - Text Content on Desktop, Video on Mobile */}
              <div className="space-y-stevens-lg lg:order-1 order-2">
                <h2 className="font-stevens-display text-stevens-lg text-stevens-gray-600 uppercase tracking-wide">
                  {whyChooseStevensTitle}
                </h2>
                
                <h3 className="font-stevens-display text-stevens-3xl stevens-md:text-stevens-4xl text-stevens-gray-900 font-stevens-bold uppercase tracking-wide">
                  {whyChooseStevensSubtitle}
                </h3>
                
                <div className="prose prose-lg max-w-none text-stevens-gray-700">
                  <div 
                    className="text-stevens-lg leading-relaxed space-y-stevens-lg"
                    dangerouslySetInnerHTML={{ __html: whyChooseStevensContent }}
                  />
                </div>
              </div>

              {/* Right Column - Video Player on Desktop, Text on Mobile */}
              <div className="relative lg:order-2 order-1">
                <VideoPlayer
                  src={whyChooseStevensVideo}
                  poster={whyChooseStevensVideoCover}
                  title="Why Choose Stevens"
                  description="Learn about Stevens Institute of Technology's career-aligned curriculum"
                  className="w-full"
                  showControls={true}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Program Benefits Section */}
      <section className="py-stevens-3xl bg-stevens-white">
        <div className="max-w-7xl mx-auto px-stevens-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-stevens-2xl items-center">
              {/* Left Column - Image on Desktop, Text on Mobile */}
              <div className="relative lg:order-1 order-2">
                <div className=" max-h-[400px] rounded-stevens-lg overflow-hidden shadow-stevens-xl">
                  <img 
                    src={programBenefitsImage} 
                    alt={`${programBenefitsTitle || 'Program Benefits'} illustration`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Right Column - Text Content on Desktop, Image on Mobile */}
              <div className="space-y-stevens-lg lg:order-2 order-1">
                <h2 className="font-stevens-display text-stevens-3xl stevens-md:text-stevens-4xl text-stevens-gray-900 font-stevens-bold uppercase tracking-wide">
                  <span className="inline-block bg-stevens-primary text-stevens-white px-stevens-md py-stevens-sm rounded-stevens-sm">
                    {programBenefitsTitle}
                  </span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-stevens-gray-700">
                  <div 
                    className="text-stevens-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: programBenefitsDescription }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Program Benefits Highlights Section */}
      <section className="py-stevens-3xl bg-stevens-gray-50">
      <div className="max-w-7xl mx-auto px-stevens-md">
      {programBenefitsHighlights && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-stevens-lg">
                    {programBenefitsHighlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-stevens-gray-50 p-stevens-lg rounded-stevens-md"
                      >
                        <h3 className="font-stevens-display text-stevens-xl text-stevens-primary mb-stevens-md">
                          {highlight.title}
                        </h3>
                        <p className="text-stevens-gray-600">
                          {highlight.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
      </div>
      </section>

      {/* Program Details Section */}
      <section className="py-stevens-3xl bg-stevens-white">
        <div className="max-w-7xl mx-auto px-stevens-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-stevens-lg">
            {programDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-stevens-display text-stevens-3xl text-stevens-primary mb-stevens-sm">
                  {detail.value}
                </h3>
                <p className="text-stevens-lg text-stevens-gray-700">
                  {detail.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      {excellenceSectionItems && excellenceSectionItems.length > 0 && (
        <section className="py-stevens-3xl bg-stevens-gray-50">
          <div className="max-w-7xl mx-auto px-stevens-md">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-stevens-xl">
                {excellenceSectionItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-left"
                  >
                    <div className="flex items-center gap-stevens-md mb-stevens-md">
                      <div className="w-12 h-12 bg-stevens-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-stevens-white" />
                      </div>
                      <h3 className="font-stevens-display text-stevens-lg text-stevens-gray-900 font-stevens-bold uppercase tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-stevens-gray-700 text-stevens-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* New Fall 2025 Section */}
      {newFall2025Title && (
        <section className="py-stevens-3xl bg-stevens-gray-600 text-stevens-white">
          <div className="max-w-7xl mx-auto px-stevens-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-stevens-2xl items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-stevens-lg">
                  {/* Red Badge */}
                  <div className="inline-block">
                    <span className="bg-stevens-primary text-stevens-white px-stevens-md py-stevens-sm text-stevens-sm font-stevens-bold uppercase tracking-wide rounded-stevens-sm">
                      {newFall2025Badge}
                    </span>
                  </div>
                  
                  {/* Main Title */}
                  <h2 className="font-stevens-display text-stevens-3xl stevens-md:text-stevens-4xl text-stevens-white font-stevens-bold uppercase tracking-wide leading-tight">
                    {newFall2025Title}
                  </h2>
                  
                  {/* Description */}
                  <div className="prose prose-lg max-w-none text-stevens-white">
                    <div 
                      className="text-stevens-lg leading-relaxed space-y-stevens-lg"
                      dangerouslySetInnerHTML={{ __html: newFall2025Description }}
                    />
                  </div>
                  
                  {/* Benefits List */}
                  {newFall2025Benefits.length > 0 && (
                    <div className="space-y-stevens-md">
                      {newFall2025Benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon || Globe;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex items-start gap-stevens-md"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-stevens-primary rounded-full flex items-center justify-center">
                              <IconComponent className="w-4 h-4 text-stevens-white" />
                            </div>
                            <p className="text-stevens-white text-stevens-sm font-stevens-medium uppercase tracking-wide">
                              {benefit.text}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Right Column - Image (Mobile/Tablet) */}
                
                <div className="relative w-full h-full hidden lg:block">
                  <div className="rounded-stevens-lg overflow-hidden shadow-stevens-xl">
                    <img 
                      src={newFall2025Image} 
                      alt={`${newFall2025Title} illustration`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      {/* Just Launched Section */}
      {justLaunchedTitle && (
        <section className="py-stevens-3xl bg-stevens-white">
          <div className="max-w-7xl mx-auto px-stevens-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-stevens-2xl items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-stevens-lg">
                  {/* Gold Badge */}
                  <div className="inline-block">
                     <span className="bg-stevens-primary text-stevens-white px-stevens-md py-stevens-sm text-stevens-sm font-stevens-bold uppercase tracking-wide rounded-stevens-sm">
                      {justLaunchedBadge}
                    </span>
                  </div>
                  
                  {/* Main Title */}
                  <h2 className="font-stevens-display text-stevens-3xl stevens-md:text-stevens-4xl text-stevens-gray-900 font-stevens-bold uppercase tracking-wide leading-tight">
                    {justLaunchedTitle}
                  </h2>
                  
                  {/* Description */}
                  <div className="prose prose-lg max-w-none text-stevens-gray-700">
                    <div 
                      className="text-stevens-lg leading-relaxed space-y-stevens-lg"
                      dangerouslySetInnerHTML={{ __html: justLaunchedDescription }}
                    />
                  </div>
                  
                  {/* CTA Button */}
                  {justLaunchedButtonText && (
                    <div className="pt-stevens-md">
                      <a 
                        href={justLaunchedButtonLink} 
                        className="btn-stevens-outline border-stevens-primary text-stevens-primary hover:bg-stevens-primary hover:text-stevens-white px-stevens-lg py-stevens-md rounded-stevens-md font-stevens-semibold transition-all duration-stevens-normal inline-block"
                      >
                        {justLaunchedButtonText}
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Column - Image */}
                <div className="relative">
                  <div className=" max-h-[500px] rounded-stevens-lg overflow-hidden shadow-stevens-xl">
                    <img 
                      src={justLaunchedImage} 
                      alt={`${justLaunchedTitle} illustration`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      {/* Key Dates Section */}
      <section className="py-stevens-3xl bg-stevens-gray-50">
        <div className="max-w-6xl mx-auto px-stevens-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header Section with more spacing */}
            <div className="mb-stevens-3xl">
              <h2 className="font-stevens-display text-stevens-3xl stevens-md:text-stevens-4xl text-stevens-gray-900 font-stevens-bold uppercase tracking-wide mb-stevens-md text-left">
                Key Dates & Deadlines
              </h2>
              
              <h3 className="font-stevens-display text-stevens-2xl stevens-md:text-stevens-3xl text-stevens-gray-900 font-stevens-bold uppercase tracking-wide text-left">
                {keyDatesTerm}
              </h3>
            </div>
            
            {/* Timeline Container */}
            <div className="relative mb-stevens-3xl">
              {/* Horizontal Timeline Line - Desktop Only */}
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-stevens-gray-900"></div>
              
              {/* Vertical Timeline Line - Mobile/Tablet */}
              <div className="lg:hidden absolute top-8 left-6 w-0.5 bg-stevens-gray-900 h-full"></div>
              
              {/* Timeline Items */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-stevens-xl">
                {keyDates.map((date, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Desktop Timeline Marker */}
                    <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-stevens-gray-900 rounded-none"></div>
                    
                    {/* Mobile/Tablet Timeline Marker */}
                    <div className="lg:hidden absolute top-8 left-4 transform -translate-x-1/2 w-4 h-4 bg-stevens-gray-900 rounded-none"></div>
                    
                    {/* Content with responsive spacing */}
                    <div className="text-left lg:pt-stevens-2xl pl-stevens-3xl lg:pl-0">
                      <h4 className="font-stevens-display text-stevens-lg text-stevens-gray-900 font-stevens-bold uppercase tracking-wide mb-stevens-md">
                        {date.label}
                      </h4>
                      <p className="text-stevens-base text-stevens-gray-900 font-stevens-medium mb-stevens-md">
                        {date.date}
                      </p>
                      {date.description && (
                        <p className="text-stevens-sm text-stevens-gray-700 leading-relaxed">
                          {date.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Footnote with more spacing */}
            {keyDatesNote && (
              <div className="mt-stevens-3xl">
                <p className="text-stevens-sm text-stevens-gray-700 leading-relaxed text-left max-w-4xl">
                  {keyDatesNote}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Additional Why Choose Stevens Section */}
      {additionalWhyChooseStevensTitle && (
        <section className="py-stevens-3xl bg-stevens-white">
          <div className="max-w-7xl mx-auto px-stevens-md">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-stevens-2xl items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-stevens-lg">
                  <h2 className="font-stevens-display text-stevens-lg text-stevens-gray-600 uppercase tracking-wide">{additionalWhyChooseStevensSubtitle}</h2>
                  <h3 className="font-stevens-display text-stevens-3xl stevens-md:text-stevens-4xl text-stevens-gray-900 font-stevens-bold uppercase tracking-wide">{additionalWhyChooseStevensTitle}</h3>
                  <div className="prose prose-lg max-w-none text-stevens-gray-700">
                    <div className="text-stevens-lg leading-relaxed space-y-stevens-lg" dangerouslySetInnerHTML={{ __html: additionalWhyChooseStevensContent }} />
                  </div>
                </div>
                
                {/* Right Column - Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-stevens-lg overflow-hidden shadow-stevens-xl">
                    <img 
                      src={additionalWhyChooseStevensImage} 
                      alt={`${additionalWhyChooseStevensTitle} illustration`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-stevens-3xl bg-stevens-white">
          <div className="max-w-4xl mx-auto px-stevens-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-stevens-display text-stevens-3xl text-stevens-primary mb-stevens-xl text-center">
                Frequently Asked Questions
              </h2>
              
              <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      )}

      {/* Additional Sections */}
      {additionalSections.map((section, index) => (
        <section key={index} className={section.className || "py-stevens-3xl bg-stevens-white"}>
          <div className="max-w-7xl mx-auto px-stevens-md">
            {section.content}
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="py-stevens-3xl bg-stevens-primary text-stevens-white">
        <div className="max-w-4xl mx-auto px-stevens-md text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-stevens-display text-stevens-3xl mb-stevens-lg">
              {contactTitle}
            </h2>
            <p className="text-stevens-lg mb-stevens-xl">
              {contactDescription}
            </p>
            <a 
              href="https://calendly.com/n3-stevens/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-stevens-outline bg-stevens-white text-stevens-primary hover:bg-stevens-gray-50 hover:text-stevens-maroon-dark px-stevens-lg rounded-stevens-md font-stevens-semibold transition-all duration-stevens-normal inline-block"
              onClick={() => trackConversion(CONVERSION_LABELS.REQUEST_INFO)}
            >
              {contactButtonText}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExploreProgramPageTemplate;
