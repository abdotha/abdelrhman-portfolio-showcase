
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Linkedin, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CredlyBadge {
  data: {
    id: string;
    attributes: {
      name: string;
      description: string;
      image_url: string;
      issued_at: string;
      badge_template: {
        name: string;
        description: string;
        image_url: string;
      };
      issuer: {
        name: string;
      };
      public_url: string;
    };
  };
}

const Index = () => {
  const [badges, setBadges] = useState<CredlyBadge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCredlyBadges = async () => {
      try {
        const response = await fetch('https://www.credly.com/users/abdelrhman-ayman.c436c9f0/badges.json');
        const data = await response.json();
        setBadges(data.data || []);
      } catch (error) {
        console.error('Error fetching Credly badges:', error);
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
            </div>
          ) : badges.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {badges.map((badge) => (
                <Card key={badge.data.id} className="p-6 shadow-lg hover:shadow-xl transition-all hover-scale">
                  <CardContent className="text-center">
                    <img 
                      src={badge.data.attributes.image_url || badge.data.attributes.badge_template.image_url} 
                      alt={badge.data.attributes.name}
                      className="w-24 h-24 mx-auto mb-4 rounded-lg"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {badge.data.attributes.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {badge.data.attributes.issuer.name}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {badge.data.attributes.description || badge.data.attributes.badge_template.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {new Date(badge.data.attributes.issued_at).toLocaleDateString()}
                      </span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(badge.data.attributes.public_url, '_blank')}
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
              <p className="text-gray-600 text-lg">No badges found. Please check back later.</p>
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
