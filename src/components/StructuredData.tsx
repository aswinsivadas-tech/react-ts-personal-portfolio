import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    // Person Schema
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Aswin Sivadas',
      url: 'https://aswinsivadas.com/',
      image: 'https://aswinsivadas.com/assets/profile.png',
      jobTitle: 'Full Stack Developer',
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Full Stack Developer (MERN Stack)',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Irinjalakuda, Thrissur',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://github.com/aswinsivadas-tech',
        'https://linkedin.com/in/aswinsivadas-tech',
        'https://dev.to/aswinsivadas-tech',
        'https://x.com/aswinsivadas-tech',
        'https://leetcode.com/u/Aswinsivadas/',
        'https://twitter.com/aswinsivadas-tech',
      ],
      knowsAbout: [
        'Full Stack Development',
        'MERN Stack',
        'Node.js',
        'Nest.js',
        'React.js',
        'Express.js',
        'Next.js',
        'Node.js',
        'TypeScript',
        'MongoDB',
        'PostgreSQL',
        'Web Development',
        'Software Engineering',
      ],
    };

    // ProfessionalService Schema
    const professionalServiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Aswin Sivadas - Full Stack Development Services',
      description:
        'Full Stack Developer (MERN, Node.js, Nest.js)  specializing in React, Next.js, Node.js, Nest.js, TypeScript, MongoDB, and PostgreSQL.',
      provider: {
        '@type': 'Person',
        name: 'Aswin Sivadas',
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      serviceType: [
        'Web Development',
        'Full Stack Development',
        'MERN Stack Development',
        'Software Development',
      ],
    };

    // Website Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Aswin Sivadas Portfolio',
      url: 'https://aswinsivadas.tech/',
      description: 'Portfolio website of Aswin Sivadas - Full Stack Developer',
      author: {
        '@type': 'Person',
        name: 'Aswin Sivadas',
      },
    };

    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach(script => script.remove());

    // Add Person schema
    const personScript = document.createElement('script');
    personScript.type = 'application/ld+json';
    personScript.text = JSON.stringify(personSchema);
    document.head.appendChild(personScript);

    // Add ProfessionalService schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.text = JSON.stringify(professionalServiceSchema);
    document.head.appendChild(serviceScript);

    // Add Website schema
    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.text = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteScript);

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach(script => script.remove());
    };
  }, []);

  return null;
}
