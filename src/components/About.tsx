import { Award, Heart, Users, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Heart, label: 'Events Catered', value: '1000+' },
    { icon: Clock, label: 'On-Time Delivery', value: '100%' }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" style={{ lineHeight: '1.5' }}>
            Crafting culinary experiences with passion and dedication
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 mb-4" style={{ lineHeight: '1.5' }}>
              Founded with a passion for authentic flavors and exceptional service, Hemlata Food Services
              has been serving delightful culinary experiences for over 15 years. We believe that food
              brings people together and creates lasting memories.
            </p>
            <p className="text-gray-600 mb-4" style={{ lineHeight: '1.5' }}>
              Our team of experienced chefs and dedicated staff work tirelessly to ensure every event
              is a success. From intimate gatherings to grand celebrations, we handle every detail
              with care and professionalism.
            </p>
            <p className="text-gray-600" style={{ lineHeight: '1.5' }}>
              We source the finest ingredients and prepare each dish with love and attention to detail.
              Our commitment to quality and customer satisfaction has made us a trusted name in catering services.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white rounded-lg p-3 shadow-md">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quality Assured</h4>
                  <p className="text-gray-600 text-sm" style={{ lineHeight: '1.5' }}>
                    Premium ingredients and authentic recipes
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white rounded-lg p-3 shadow-md">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Made with Love</h4>
                  <p className="text-gray-600 text-sm" style={{ lineHeight: '1.5' }}>
                    Every dish prepared with care and passion
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white rounded-lg p-3 shadow-md">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                  <p className="text-gray-600 text-sm" style={{ lineHeight: '1.5' }}>
                    Experienced chefs and professional staff
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
