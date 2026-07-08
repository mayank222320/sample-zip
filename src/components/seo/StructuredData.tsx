import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

// Organization Schema
export const OrganizationSchema = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EyeQlytics Technologies Pvt. Ltd.",
    "alternateName": "CopMap",
    "url": "https://copmap.in",
    "logo": "https://copmap.in/Copmap-logo.png",
    "description": "Leading provider of law enforcement automation solutions in India",
    "foundingDate": "2023",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9970283329",
        "contactType": "customer service",
        "email": "admin@copmap.in",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10/81, Near SJP Petrol Pump, Bidkin",
      "addressLocality": "Aurangabad",
      "addressRegion": "Maharashtra",
      "postalCode": "431105",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/eyeqlytics-technologies-pvt-ltd/"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "knowsAbout": [
      "Police Automation",
      "Law Enforcement Technology",
      "Bandobast Planning",
      "Bandobast App",
      "Police Patrolling App",
      "Digital Patrolling Management",
      "Officer Tracking",
      "Patrol Management",
      "Police Digitization Software",
      "E-Policing Solutions",
      "Smart Police Station Management",
      "Paperless Police Station Software",
      "Digital Transformation in Law Enforcement",
      "Police Duty Automation Software",
      "Automated Police Attendance Tracking",
      "Law Enforcement Personnel Management System",
      "Police Leave Management Software",
      "Digital Roster System for Police",
      "Smart Policing Technology",
      "Data-driven Law Enforcement Software",
      "Real-time Police Operations Command Center",
      "Intelligent Patrol Management System",
      "Police Force Modernization Platform"
    ]
  };

  return <StructuredData data={organizationData} />;
};

// Software Application Schema
export const SoftwareApplicationSchema = () => {
  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CopMap",
    "description": "Revolutionary law enforcement automation platform for police operations management across India",
    "url": "https://copmap.in",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "softwareVersion": "2.0",
    "datePublished": "2024-01-01",
    "author": {
      "@type": "Organization",
      "name": "EyeQlytics Technologies Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "description": "Free demo available",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Smart Bandobast Planning",
      "Automated Bandobast Allocation",
      "Real-time Officer Tracking",
      "Digital Patrolling Management",
      "Police Patrolling App",
      "Force Requirements Workflow",
      "Automated Police Attendance Tracking",
      "Digital Roster System for Police",
      "Police Leave Management",
      "Paperless Police Station",
      "Mobile App Integration",
      "Data-driven Law Enforcement Analytics"
    ],
    "screenshot": "https://copmap.in/map_element.webp",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return <StructuredData data={softwareData} />;
};

// FAQ Schema
export const FAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is CopMap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CopMap is a comprehensive law enforcement automation platform designed to digitize and streamline police operations across India. It provides tools for bandobast planning, officer tracking, patrol management, and automated documentation."
        }
      },
      {
        "@type": "Question",
        "name": "How does CopMap help police operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CopMap transforms manual police processes into automated workflows, enabling real-time coordination, smart deployment planning, live officer tracking, and comprehensive reporting. This results in improved efficiency, transparency, and accountability."
        }
      },
      {
        "@type": "Question",
        "name": "Is CopMap suitable for all police departments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CopMap is scalable and can be used by police stations, divisions, districts, and state-level departments. It's designed to work across all levels of the Indian police hierarchy."
        }
      },
      {
        "@type": "Question",
        "name": "How can I request a demo of CopMap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can request a demo by visiting our contact page, calling +91-9970283329, or scheduling directly through our Calendly link. Our team will provide a comprehensive 30-minute demonstration."
        }
      }
    ]
  };

  return <StructuredData data={faqData} />;
};

// WebSite Schema
export const WebSiteSchema = () => {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CopMap",
    "url": "https://copmap.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://copmap.in/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return <StructuredData data={websiteData} />;
};

export default StructuredData;
