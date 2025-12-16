import { Trophy, Sparkles } from 'lucide-react';

export default function Appreciations() {
  const appreciations = [
    {
      title: 'Excellence in Catering Services',
      institution: 'Indian Hotel & Restaurant Association',
      year: '2023',
      icon: '🏆'
    },
    {
      title: 'Best Caterer Award',
      institution: 'National Catering Federation',
      year: '2023',
      icon: '🥇'
    },
    {
      title: 'Customer Choice Award',
      institution: 'Event Management Association of India',
      year: '2022',
      icon: '⭐'
    },
    {
      title: 'Quality & Service Excellence',
      institution: 'Federation of Indian Chambers of Commerce',
      year: '2022',
      icon: '🌟'
    },
    {
      title: 'Best Food Quality Recognition',
      institution: 'Indian Food Safety Institute',
      year: '2023',
      icon: '✅'
    },
    {
      title: 'Preferred Service Provider',
      institution: 'Government Events Management Bureau',
      year: '2023',
      icon: '👑'
    },
    {
      title: 'Green Catering Initiative Award',
      institution: 'Environmental & Sustainable Business Council',
      year: '2022',
      icon: '🌱'
    },
    {
      title: 'Community Service Recognition',
      institution: 'Municipal Social Welfare Department',
      year: '2023',
      icon: '💚'
    }
  ];

  return (
    <section id="appreciations" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <Trophy className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Awards & Recognitions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" style={{ lineHeight: '1.5' }}>
            Honored with appreciation and awards from prestigious institutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {appreciations.map((appreciation, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-amber-200"
            >
              <div className="text-5xl md:text-6xl mb-4 text-center">
                {appreciation.icon}
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 text-center">
                {appreciation.title}
              </h3>

              <p className="text-sm md:text-base text-amber-600 font-semibold text-center mb-3">
                {appreciation.institution}
              </p>

              <div className="text-center">
                <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                  {appreciation.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 rounded-2xl p-6 md:p-8 border-2 border-amber-300">
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="w-8 h-8 text-amber-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Commitment to Excellence
              </h3>
            </div>
            <p className="text-gray-700" style={{ lineHeight: '1.6' }}>
              These awards and recognitions reflect our unwavering commitment to delivering exceptional
              quality, maintaining the highest food safety standards, and providing outstanding customer service.
              Every recognition motivates us to continuously improve and exceed expectations for our valued clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
