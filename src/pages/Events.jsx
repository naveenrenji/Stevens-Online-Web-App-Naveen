import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageHero from '../components/shared/PageHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, PlayCircle } from 'lucide-react';

export default function Events() {
  const spotlight = {
    title: 'The StevensOnline Experience: Current Student Perspectives',
    status: 'Ongoing',
    length: '45 minutes',
    url: 'https://event.on24.com/wcc/r/4631363/587A841E8E970D8EC05BA6F4AB4CEA5E'
  };

  const onDemandGroups = [
    {
      heading: 'ONLINE MBA',
      items: [
        {
          title: 'Student Voices: Real Stories From Stevens Graduate Programs',
          status: 'Ongoing',
          length: '45 minutes',
          url: 'https://event.on24.com/wcc/r/4970051/3D4408B63146F35B069766B71328D7CE'
        },
        {
          title: 'Depth and Breadth: Exploring MBA Concentrations at Stevens',
          status: 'Ongoing',
          length: '30 minutes',
          url: 'https://event.on24.com/wcc/r/4970049/94A0379A4671307D3BD1329BF230A114'
        },
        {
          title: 'Upskilling Your MBA: Bringing Technology and Business Together',
          status: 'Ongoing',
          length: '30 minutes',
          url: 'https://event.on24.com/wcc/r/4631559/8DACF3B1055C849FFDC65E94FFFA4C4A'
        },
        {
          title: 'A Technology-Focused MBA With Stevens Online',
          status: 'Ongoing',
          length: '30 minutes',
          url: 'https://event.on24.com/wcc/r/4791542/DAB3D7D2D76CEC991DF5B0C71A91E4CF'
        }
      ]
    },
    {
      heading: 'ONLINE MASTER OF ENGINEERING IN ENGINEERING MANAGEMENT (MEM)',
      items: [
        {
          title: 'Student Voices: Real Stories From Stevens Graduate Programs',
          status: 'Ongoing',
          length: '45 minutes',
          url: 'https://event.on24.com/wcc/r/4970051/3D4408B63146F35B069766B71328D7CE'
        },
        {
          title: 'Start With Two Courses. Step Into Engineering Leadership',
          status: 'Ongoing',
          length: '30 minutes',
          url: 'https://event.on24.com/wcc/r/4970047/F7AEF7F7E214EFD9A417BC81BE6BA906'
        },
        {
          title: 'Exploring the Online Master’s in Engineering Management at Stevens',
          status: 'Ongoing',
          length: '19 minutes',
          url: 'https://event.on24.com/wcc/r/4666985/156784FFB13710F1FFCF29E5C6DBAD13'
        }
      ]
    },
    {
      heading: 'ONLINE M.S. IN COMPUTER SCIENCE',
      items: [
        {
          title: 'Exploring the Online M.S. in Computer Science at Stevens Institute of Technology',
          status: 'Ongoing',
          length: '11 minutes',
          url: 'https://event.on24.com/wcc/r/4455089/34FF45D9104354C225403F6B63A29F26'
        },
        {
          title: 'Start With Two Courses. Step Into Computer Science',
          status: 'Ongoing',
          length: '30 minutes',
          url: 'https://event.on24.com/wcc/r/4970040/A6ED251C21B790E2D79369BFB149380A'
        },
        {
          title: 'Online M.S. in Computer Science: Areas of Focus',
          status: 'Ongoing',
          length: '12 minutes',
          url: 'https://event.on24.com/wcc/r/4894227/042446D9C5E18BF3F4D7CD9A7604B1EA'
        }
      ]
    }
  ];

  const supportEvents = [
    {
      title: 'Application Overview: Online MBA',
      length: '15 minutes',
      url: 'https://event.on24.com/wcc/r/4670707/F1184BBC4542A137E5E8852AA0FF2DBE'
    },
    {
      title: 'Application Walkthrough: Computer Science',
      length: '10 minutes',
      url: 'https://event.on24.com/wcc/r/4455092/4C10B1C30D8D20926A28C1A21C667A29'
    }
  ];

  return (
    <div>
      <PageHero
        title="Stevens Institute of Technology"
        subtitle="Virtual Events"
        bgImage="/assets/images/1-event-scaled.webp"
      />

      

      {/* On-Demand Content */}
      <div className="py-stevens-section bg-stevens-white">
        <div className="max-w-stevens-content-max mx-auto px-stevens-sm stevens-md:px-stevens-lg stevens-xl:px-stevens-xl">
          <h3 className="font-stevens-display text-stevens-2xl font-stevens-bold text-stevens-gray-900 mb-stevens-md">Watch On-Demand Content</h3>
          <p className="text-stevens-gray-700 mb-stevens-xl max-w-3xl">At Stevens, we host a variety of events for prospective and current students covering topics such as application strategy, program information, the student experience and our online platform. Our on-demand content is instantly available, so you can watch at your convenience.</p>

          <div className="space-y-stevens-xl">
            {onDemandGroups.map((group) => (
              <div key={group.heading}>
                <h4 className="font-stevens-display text-stevens-xl font-stevens-semibold text-stevens-gray-900 mb-stevens-md">{group.heading}</h4>
                <div className="grid stevens-md:grid-cols-2 stevens-lg:grid-cols-3 gap-stevens-lg">
                  {group.items.map((item) => (
                    <Card key={item.title} className="h-full border-stevens-gray-100 ">
                      <CardContent className="p-stevens-lg flex flex-col h-full pt-stevens-lg">
                        <h5 className="font-stevens-semibold text-stevens-gray-900 mb-stevens-xs">{item.title}</h5>
                        <div className="text-stevens-sm text-stevens-gray-700 mb-stevens-md">{item.status}</div>
                        <div className="flex items-center gap-stevens-xs text-stevens-sm text-stevens-gray-700 mb-stevens-lg">
                          <Clock className="w-4 h-4"/> {item.length}
                        </div>
                        <div className="mt-auto">
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <Button className="btn-stevens-outline text-stevens-white">Watch Now</Button>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Support Events */}
      <div className="py-stevens-section bg-stevens-gray-100">
        <div className="max-w-stevens-content-max mx-auto px-stevens-sm stevens-md:px-stevens-lg stevens-xl:px-stevens-xl">
          <h3 className="font-stevens-display text-stevens-2xl font-stevens-bold text-stevens-gray-900 mb-stevens-lg">Application Support Events</h3>
          <div className="grid stevens-md:grid-cols-2 gap-stevens-lg">
            {supportEvents.map((e) => (
              <Card key={e.title} className="border-stevens-gray-100">
                <CardContent className="p-stevens-lg pt-stevens-lg flex items-center justify-between">
                  <div>
                    <h4 className="font-stevens-semibold text-stevens-gray-900 mb-stevens-xs">{e.title}</h4>
                    <div className="flex items-center gap-stevens-xs text-stevens-sm text-stevens-gray-700"><Clock className="w-4 h-4"/> {e.length}</div>
                  </div>
                  <a href={e.url} target="_blank" rel="noopener noreferrer">
                    <Button className="btn-stevens-outline text-stevens-white">Watch Now</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Virtual Events */}
      {/* <div className="py-stevens-section bg-stevens-gray-50">
        <div className="max-w-stevens-content-max mx-auto px-stevens-sm stevens-md:px-stevens-lg stevens-xl:px-stevens-xl text-center">
          <h3 className="font-stevens-display text-stevens-2xl font-stevens-bold text-stevens-gray-900 mb-stevens-sm">Upcoming Virtual Events</h3>
          <p className="text-stevens-gray-700 mb-stevens-lg">Mark your calendar for upcoming live events. Attendees will receive an application fee waiver.</p>
          <p className="text-stevens-gray-600">Check back soon for more upcoming events.</p>
        </div>
      </div> */}

      {/* One-on-One CTA */}
      <div className="py-stevens-section bg-stevens-white">
        <div className="max-w-stevens-content-max mx-auto px-stevens-sm stevens-md:px-stevens-lg stevens-xl:px-stevens-xl text-center">
          <h3 className="font-stevens-display text-stevens-2xl font-stevens-bold text-stevens-gray-900 mb-stevens-sm">Schedule a One-On-One Application Walkthrough</h3>
          <p className="text-stevens-gray-700 mb-stevens-lg max-w-3xl mx-auto">Take some of the stress out of applying. Connect with the enrollment team today for answers to your questions about eligibility, requirements, application best practices and more.</p>
          <Link to={createPageUrl('RequestInfo')}>
            <Button className="btn-stevens-primary">Make an Appointment</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}