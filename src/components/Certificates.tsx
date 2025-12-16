import { Award, CheckCircle } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      name: 'FSSAI Certification',
      issuer: 'Food Safety and Standards Authority of India',
      year: '2023',
      description: 'Licensed food business operator with highest food safety standards'
    },
    {
      name: 'ISO 9001:2015',
      issuer: 'International Organization for Standardization',
      year: '2022',
      description: 'Quality Management System certification'
    },
    {
      name: 'ISO 22000:2018',
      issuer: 'International Organization for Standardization',
      year: '2023',
      description: 'Food Safety Management System certification'
    },
    {
      name: 'HACCP Certification',
      issuer: 'Hazard Analysis and Critical Control Points',
      year: '2023',
      description: 'Certified safe food handling and preparation procedures'
    },
    {
      name: 'GST Registration',
      issuer: 'Government of India',
      year: 'Active',
      description: 'Registered food service business with GST compliance'
    },
    {
      name: 'Trade License',
      issuer: 'Municipal Corporation',
      year: 'Active',
      description: 'Valid municipal trade license for food catering business'
    }
  ];

  return (
    <section id="certificates" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Licenses
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" style={{ lineHeight: '1.5' }}>
            We maintain the highest standards of quality and food safety
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {cert.name}
              </h3>

              <p className="text-sm md:text-base text-blue-600 font-semibold mb-3">
                {cert.issuer}
              </p>

              <p className="text-gray-600 mb-4" style={{ lineHeight: '1.5' }}>
                {cert.description}
              </p>

              <div className="bg-white rounded-lg px-3 py-2 inline-block">
                <span className="text-sm font-semibold text-gray-700">Year: {cert.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-base md:text-lg text-gray-700 mb-4" style={{ lineHeight: '1.5' }}>
            All certifications are current and regularly renewed. We comply with all national and international
            food safety and quality standards to ensure the best service to our clients.
          </p>
        </div>
      </div>
    </section>
  );
}
