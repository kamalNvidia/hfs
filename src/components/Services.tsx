import { Cake, Users2, Briefcase, Home, PartyPopper, UtensilsCrossed } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cake,
      title: 'Wedding Catering',
      description: 'Make your special day unforgettable with our exquisite wedding menus and impeccable service.',
      features: ['Custom Menus', 'Live Counters', 'Professional Staff']
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional catering for business meetings, conferences, and corporate celebrations.',
      features: ['Timely Service', 'Flexible Options', 'Professional Setup']
    },
    {
      icon: PartyPopper,
      title: 'Birthday Parties',
      description: 'Celebrate with delicious food and fun presentation for all ages.',
      features: ['Theme Menus', 'Decoration Support', 'Entertainment Options']
    },
    {
      icon: Users2,
      title: 'Social Gatherings',
      description: 'Perfect catering solutions for family reunions, anniversaries, and celebrations.',
      features: ['Flexible Menu', 'Any Guest Count', 'Full Service']
    },
    {
      icon: Home,
      title: 'Home Parties',
      description: 'Enjoy restaurant-quality food in the comfort of your home.',
      features: ['Setup & Cleanup', 'Fresh Preparation', 'Custom Portions']
    },
    {
      icon: UtensilsCrossed,
      title: 'Custom Catering',
      description: 'Tailored menus for any special occasion or dietary requirement.',
      features: ['Personalized Service', 'Dietary Options', 'Special Requests']
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" style={{ lineHeight: '1.5' }}>
            Comprehensive catering solutions for every occasion
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 md:mb-6" style={{ lineHeight: '1.5' }}>
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm md:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
