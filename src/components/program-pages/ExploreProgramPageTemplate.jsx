import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

const ExploreProgramPageTemplate = ({
  // Hero Section Props
  heroTitle,
  heroSubtitle,
  programName,
  
  // Lead Capture Props
  scholarshipText,
  
  // Statistics Props
  statistics,
  
  // Program Benefits Props
  programBenefitsTitle,
  programBenefitsDescription,
  programBenefitsHighlights,
  
  // Program Details Props
  programDetails,
  
  // Key Dates Props
  keyDates,
  
  // FAQ Props
  faqs,
  
  // Contact Props
  contactTitle,
  contactDescription,
  contactButtonText,
  
  // Additional Sections (optional)
  additionalSections = []
}) => {
  const [selectedEducation, setSelectedEducation] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: ''
  });

  const handleEducationChange = (value) => {
    setSelectedEducation(value);
    if (value) {
      setShowForm(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-stevens-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stevens-primary to-stevens-maroon-dark text-stevens-white py-stevens-3xl">
        <div className="max-w-7xl mx-auto px-stevens-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-stevens-display text-stevens-hero mb-stevens-lg text-shadow-stevens-hero">
              {heroTitle}
            </h1>
            <h2 className="font-stevens-display text-stevens-4xl mb-stevens-xl text-shadow-stevens-body">
              {programName}
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="bg-stevens-gray-50 py-stevens-2xl">
        <div className="max-w-4xl mx-auto px-stevens-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="font-stevens-display text-stevens-3xl text-stevens-primary mb-stevens-lg">
              TELL US ABOUT YOURSELF.
            </h2>
            
            {scholarshipText && (
              <p className="text-stevens-lg text-stevens-gray-700 mb-stevens-xl">
                {scholarshipText}
              </p>
            )}

            <div className="bg-stevens-white rounded-stevens-lg shadow-stevens-md p-stevens-xl">
              <div className="mb-stevens-lg">
                <label className="block text-stevens-sm font-medium text-stevens-gray-700 mb-stevens-sm">
                  LEVEL OF EDUCATION*
                </label>
                <select
                  value={selectedEducation}
                  onChange={(e) => handleEducationChange(e.target.value)}
                  className="form-stevens-input w-full"
                >
                  <option value="">(Select One)</option>
                  <option value="bachelors">Bachelor's</option>
                  <option value="masters-progress">Master's in Progress</option>
                  <option value="masters">Master's</option>
                  <option value="doctorate">Doctorate</option>
                </select>
              </div>

              {showForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.5 }}
                  className="space-y-stevens-md"
                >
                  <h3 className="font-stevens-display text-stevens-2xl text-stevens-primary mb-stevens-md">
                    YOU'RE ALMOST DONE!
                  </h3>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-stevens-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-stevens-md">
                      <div>
                        <label className="form-stevens-label">FIRST NAME*</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="form-stevens-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-stevens-label">LAST NAME*</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="form-stevens-input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="form-stevens-label">EMAIL ADDRESS*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-stevens-input"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-stevens-md">
                      <div>
                        <label className="form-stevens-label">PHONE NUMBER*</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-stevens-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-stevens-label">ZIP CODE*</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="form-stevens-input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="text-stevens-sm text-stevens-gray-600 mb-stevens-md">
                      By submitting this form, you agree to be contacted by Stevens Institute of Technology and its partners via email, phone, or text for program information and application guidance. You grant us permission to call or text you at this number, and that contact may be made using automated dialing systems and/or an artificial or prerecorded voice.
                    </div>
                    
                    <button type="submit" className="btn-stevens-primary w-full">
                      Continue
                    </button>
                  </form>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

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

      {/* Program Benefits Section */}
      <section className="py-stevens-3xl bg-stevens-gray-50">
        <div className="max-w-7xl mx-auto px-stevens-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-stevens-display text-stevens-3xl text-stevens-primary mb-stevens-xl text-center">
              {programBenefitsTitle}
            </h2>
            
            <div className="prose prose-lg max-w-none text-stevens-gray-700 mb-stevens-xl">
              <p className="text-stevens-lg leading-relaxed">
                {programBenefitsDescription}
              </p>
            </div>

            {programBenefitsHighlights && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stevens-lg">
                {programBenefitsHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card-stevens"
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
          </motion.div>
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

      {/* Key Dates Section */}
      <section className="py-stevens-3xl bg-stevens-gray-50">
        <div className="max-w-4xl mx-auto px-stevens-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-stevens-display text-stevens-3xl text-stevens-primary mb-stevens-xl">
              Key Dates & Deadlines
            </h2>
            
            <div className="bg-stevens-white rounded-stevens-lg shadow-stevens-md p-stevens-xl">
              <div className="space-y-stevens-md">
                {keyDates.map((date, index) => (
                  <div key={index} className="flex justify-between items-center py-stevens-sm border-b border-stevens-gray-200 last:border-b-0">
                    <span className="font-medium text-stevens-gray-700">{date.label}</span>
                    <span className="text-stevens-gray-600">{date.date}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-stevens-sm text-stevens-gray-600 mt-stevens-lg text-left">
                {keyDates.note}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
              
              <div className="space-y-stevens-md">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card-stevens"
                  >
                    <button className="w-full text-left flex justify-between items-center">
                      <h3 className="font-stevens-display text-stevens-lg text-stevens-primary">
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-5 h-5 text-stevens-gray-400" />
                    </button>
                    <div className="mt-stevens-md text-stevens-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                ))}
              </div>
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
            <a href="#" className="btn-stevens-secondary">
              {contactButtonText}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExploreProgramPageTemplate;
