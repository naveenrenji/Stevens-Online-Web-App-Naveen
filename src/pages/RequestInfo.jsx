import React from 'react';
import PageHero from '../components/shared/PageHero';
import LeadCaptureForm from '../components/forms/LeadCaptureForm';

export default function RequestInfo() {
  return (
    <div className="bg-stevens-gray-50 font-stevens-body">
      <PageHero 
        title="Request Information"
        subtitle="Let's connect. Complete the form below and an enrollment advisor will be in touch to answer your questions."
      />
      <div className="py-stevens-section">
        <div className="max-w-7xl mx-auto px-stevens-lg">
          <div className="grid stevens-md:grid-cols-2 gap-stevens-2xl items-start">
            <div className="space-y-stevens-lg">
              <h2 className="font-stevens-display text-stevens-3xl stevens-md:text-stevens-4xl font-stevens-bold text-stevens-gray-900">We look forward to hearing from you.</h2>
              <h3 className="font-stevens-display text-stevens-xl font-stevens-semibold text-stevens-gray-900">To better support your needs, choose a department:</h3>
              <div className="space-y-stevens-md text-stevens-gray-900">
                <div>
                  <p className="font-stevens-semibold">Online Master of Engineering in Engineering Management Enrollment:</p>
                  <p>551.277.2702</p>
                  <p>onlineadmissions@stevens.edu</p>
                  <a href="https://calendly.com/n3-stevens/30min" target="_blank" rel="noopener noreferrer" className="inline-block mt-stevens-sm">
                    <span className="btn-stevens-secondary px-stevens-lg py-stevens-sm rounded-stevens-md">Schedule a Call</span>
                  </a>
                </div>
                <div>
                  <p className="font-stevens-semibold">Online Master of Science in Computer Science Enrollment:</p>
                  <p>551.277.2702</p>
                  <p>onlineadmissions@stevens.edu</p>
                  <a href="https://calendly.com/n3-stevens/30min" target="_blank" rel="noopener noreferrer" className="inline-block mt-stevens-sm">
                    <span className="btn-stevens-secondary px-stevens-lg py-stevens-sm rounded-stevens-md">Schedule a Call</span>
                  </a>
                </div>
                <div>
                  <p className="font-stevens-semibold">Online MBA Enrollment:</p>
                  <p>551.277.2702</p>
                  <p>onlineadmissions@stevens.edu</p>
                  <a href="https://calendly.com/n3-stevens/30min" target="_blank" rel="noopener noreferrer" className="inline-block mt-stevens-sm">
                    <span className="btn-stevens-secondary px-stevens-lg py-stevens-sm rounded-stevens-md">Schedule a Call</span>
                  </a>
                </div>
                <div>
                  <p className="font-stevens-semibold">Financial Aid:</p>
                  <p>201.216.3400</p>
                  <p>financialaid@stevens.edu</p>
                </div>
                <div>
                  <p className="font-stevens-semibold">University Inquiries:</p>
                  <p>201.216.5000</p>
                </div>
              </div>
            </div>
            <div>
              <LeadCaptureForm 
                title="Get Program Details"
                subtitle="An admissions advisor will contact you shortly."
                showEducationLevel={true}
                sourcePage="request_info_page"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}