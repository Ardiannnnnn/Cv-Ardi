import React from 'react';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Calendar, Award, BookOpen, Code, Briefcase, User } from 'lucide-react';

interface CVData {
  personalInfo: {
    name: string;
    age: number;
    degree: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  skills: {
    programming: string[];
    web: string[];
    database: string[];
    tools: string[];
    soft: string[];
  };
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    gpa: string;
    relevant_courses: string[];
  }>;
  experience: Array<{
    position: string;
    company: string;
    period: string;
    description: string[];
  }>;
  projects: Array<{
    name: string;
    tech: string[];
    description: string;
    github: string;
    demo: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    year: string;
  }>;
  languages: Array<{
    language: string;
    level: string;
  }>;
}

interface CVTemplateProps {
  data: CVData;
}

const CVTemplate: React.FC<CVTemplateProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{data.personalInfo.name}</h1>
            <p className="text-xl text-blue-100 mb-4">{data.personalInfo.title}</p>
            <p className="text-blue-100 mb-2">{data.personalInfo.degree} • Age: {data.personalInfo.age}</p>
          </div>
          <div className="mt-4 md:mt-0 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{data.personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <a href={data.personalInfo.website} className="hover:underline">{data.personalInfo.website}</a>
            </div>
            <div className="flex gap-4 mt-3">
              <a href={data.personalInfo.linkedin} className="hover:text-blue-200">
                <Linkedin size={20} />
              </a>
              <a href={data.personalInfo.github} className="hover:text-blue-200">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Professional Summary */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <User className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Professional Summary</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Code className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.programming.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Web Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.web.map((skill, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Database</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.database.map((skill, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.tools.map((skill, index) => (
                  <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
          </div>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                <p className="text-gray-600 text-sm flex items-center gap-1 mb-3">
                  <Calendar size={14} />
                  {exp.period}
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Code className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-700 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-sm">
                  <a href={project.github} className="text-blue-600 hover:underline flex items-center gap-1">
                    <Github size={14} />
                    Code
                  </a>
                  <a href={project.demo} className="text-blue-600 hover:underline flex items-center gap-1">
                    <Globe size={14} />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Education</h2>
          </div>
          {data.education.map((edu, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-green-600 font-medium">{edu.institution}</p>
              <p className="text-gray-600 text-sm mb-2">{edu.year} • GPA: {edu.gpa}</p>
              <div>
                <span className="text-sm text-gray-700 font-medium">Relevant Courses: </span>
                <span className="text-sm text-gray-600">{edu.relevant_courses.join(', ')}</span>
              </div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">Certifications</h2>
            </div>
            <div className="space-y-3">
              {data.certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">Languages</h2>
            </div>
            <div className="space-y-3">
              {data.languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <span className="font-medium text-gray-800">{lang.language}</span>
                  <span className="text-gray-600 text-sm">{lang.level}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CVTemplate;
