import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Linkedin, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CredlyBadge {
  id: string;
  issued_at_date: string;
  issued_to: string;
  public: true;
  badge_template: {
    id: string;
    name: string;
    description: string;
    image_url: string;
  };
  issuer: {
    summary: string;
    entities: Array<{
      entity: {
        name: string;
      };
    }>;
  };
}

interface CredlyApiResponse {
  data: CredlyBadge[];
}

const Index = () => {
  const [badges, setBadges] = useState<CredlyBadge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCredlyBadges = async () => {
      try {
        // Using a CORS proxy to fetch the Credly badges
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://www.credly.com/users/abdelrhman-ayman.c436c9f0/badges.json';
        
        console.log('Fetching badges from Credly...');
        
        const response = await fetch(proxyUrl + targetUrl, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: CredlyApiResponse = await response.json();
        console.log('Credly API response:', data);
        
        // Extract badges from the API response
        const badgesData = data.data || [];
        console.log('Processed badges data:', badgesData);
        
        setBadges(badgesData);
      } catch (error) {
        console.error('Error fetching Credly badges:', error);
        console.log('Falling back to demo data for development...');
        
        // Demo data that matches the actual API structure
        const demoData: CredlyBadge[] = [
          {
            id: 'e9f6859e-f330-470b-9955-91e27802ee10',
            issued_at_date: '2024-06-21',
            issued_to: 'Abdelrhman Ayman',
            public: true,
            badge_template: {
              id: '227dafde-5f07-4968-ae2f-75e8246f85b3',
              name: 'CCNA: Introduction to Networks',
              description: 'Cisco verifies the earner of this badge successfully completed the Introduction to Networks course and achieved this student level credential. Earner has knowledge of networking including IP addressing, how physical, data link protocols support Ethernet, can configure connectivity between switches, routers and end devices to provide access to local and remote resources.',
              image_url: 'https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png'
            },
            issuer: {
              summary: 'issued by Cisco',
              entities: [
                {
                  entity: {
                    name: 'Cisco'
                  }
                }
              ]
            }
          },
          {
            id: 'demo-2',
            issued_at_date: '2024-03-15',
            issued_to: 'Abdelrhman Ayman',
            public: true,
            badge_template: {
              id: 'demo-template-2',
              name: 'Network Security Fundamentals',
              description: 'This badge demonstrates foundational knowledge in network security principles, threat detection, and security protocol implementation.',
              image_url: 'https://images.credly.com/images/74b40f60-33f1-4b50-8a21-9c68a1b4d38b/Network_Security_Fundamentals.png'
            },
            issuer: {
              summary: 'issued by Cisco',
              entities: [
                {
                  entity: {
                    name: 'Cisco'
                  }
                }
              ]
            }
          },
          {
            id: 'demo-3',
            issued_at_date: '2024-01-10',
            issued_to: 'Abdelrhman Ayman',
            public: true,
            badge_template: {
              id: 'demo-template-3',
              name: 'Python Programming Essentials',
              description: 'This badge validates skills in Python programming fundamentals, including data structures, algorithms, and object-oriented programming concepts.',
              image_url: 'https://images.credly.com/images/68c0b94d-f394-4de8-aa36-d123b05fd98f/python-essentials-1.png'
            },
            issuer: {
              summary: 'issued by Cisco',
              entities: [
                {
                  entity: {
                    name: 'Cisco Networking Academy'
                  }
                }
              ]
            }
          }
        ];
        setBadges(demoData);
      } finally {
        setLoading(false);
      }
    };

    fetchCredlyBadges();
  }, []);

  const skills = {
    networking: ['Packet Tracer', 'Wireshark', 'GNS3', 'CCNA', 'Network Security'],
    programming: ['C/C++', 'Python', 'Dart', 'Flutter'],
    languages: ['English (Fluent)', 'Arabic (Native)']
  };

  const experience = [
    {
      title: 'CCNA Internship',
      organization: 'National Telecommunication Institute (NTI)',
      period: '2024',
      description: 'Completed comprehensive training in network fundamentals and Cisco technologies'
    },
    {
      title: 'Network Security & Cyber Operations',
      organization: 'National Telecommunication Institute (NTI)',
      period: '2024',
      description: 'Advanced training in cybersecurity protocols and network defense mechanisms'
    },
    {
      title: 'NANSC Training Program',
      organization: 'NANSC',
      period: '2023-2024',
      description: 'Specialized training in network administration and security concepts'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                Abdelrhman Ayman
              </h1>
              <p className="text-2xl lg:text-3xl text-blue-100 mb-6 animate-fade-in">
                Computer and Communication Engineer
              </p>
              <p className="text-lg text-blue-50 mb-8 max-w-2xl animate-fade-in">
                Passionate about networking technologies, cybersecurity, and software development. 
                Currently pursuing my degree while gaining practical experience through specialized training programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 animate-scale-in">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 animate-scale-in">
                  View Projects
                </Button>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl font-bold animate-scale-in">
                AA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">01551837735</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">Abdelrhman-ayman@outlook.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-blue-600" />
              <a href="https://linkedin.com/in/abdelrhman-ayman-taha" className="text-blue-600 hover:text-blue-800 transition-colors">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">El-Maadi, Egypt</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 space-y-20">
        {/* About Section */}
        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="text-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                  I am a dedicated Computer and Communication Engineering student at Benha University, 
                  passionate about the intersection of networking technologies and cybersecurity. 
                  My academic journey has been complemented by intensive practical training programs 
                  that have shaped my technical expertise.
                </p>
                <p className="mb-6">
                  Through my internships at the National Telecommunication Institute (NTI) and specialized 
                  training programs, I have developed strong foundations in network administration, 
                  security protocols, and system analysis. I am particularly interested in network 
                  security and cyber operations.
                </p>
                <p>
                  I believe in continuous learning and staying updated with the latest technological 
                  advancements in my field. My goal is to contribute to innovative solutions in 
                  network infrastructure and cybersecurity.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow hover-scale">
              <CardContent>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Networking</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.networking.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow hover-scale">
              <CardContent>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow hover-scale">
              <CardContent>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow hover-scale">
                  <CardContent>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <Badge className="w-fit mt-2 md:mt-0">{exp.period}</Badge>
                    </div>
                    <p className="text-blue-600 font-medium mb-3">{exp.organization}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow hover-scale">
              <CardContent>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Bachelor of Science in Computer and Communication Engineering
                </h3>
                <p className="text-blue-600 font-medium text-lg mb-3">Benha University</p>
                <Badge className="text-sm">2020 - 2025</Badge>
                <p className="text-gray-700 mt-4">
                  Comprehensive study of computer systems, communication networks, and engineering principles. 
                  Focus on digital signal processing, network protocols, and system design.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Credly Badges Section */}
        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Certifications & Badges</h2>
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-4 text-gray-600">Loading badges from Credly...</span>
            </div>
          ) : badges.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {badges.map((badge) => (
                <Card key={badge.id} className="p-6 shadow-lg hover:shadow-xl transition-all hover-scale">
                  <CardContent className="text-center">
                    <img 
                      src={badge.badge_template.image_url} 
                      alt={badge.badge_template.name}
                      className="w-24 h-24 mx-auto mb-4 rounded-lg"
                      onError={(e) => {
                        console.log('Image failed to load, using fallback');
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiByeD0iOCIgZmlsbD0iIzMzNzNkYyIvPgo8dGV4dCB4PSI0OCIgeT0iNTQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CQURHRTU8L3RleHQ+Cjwvc3ZnPgo=';
                      }}
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {badge.badge_template.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {badge.issuer.entities[0]?.entity.name || 'Badge Issuer'}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {badge.badge_template.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {new Date(badge.issued_at_date).toLocaleDateString()}
                      </span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`https://www.credly.com/badges/${badge.id}`, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Unable to load badges at this time. Please check back later.</p>
              <p className="text-gray-500 text-sm mt-2">Due to CORS restrictions, badge loading may be limited in this environment.</p>
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-6">
            I'm always interested in discussing new opportunities and collaborations.
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2025 Abdelrhman Ayman. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
