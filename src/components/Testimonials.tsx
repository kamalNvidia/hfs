import { Star, User } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Wedding Organizer',
      company: 'Celebrations India',
      text: 'Hemlata Food Services made our wedding reception absolutely memorable. The food was exquisite, and the service was impeccable. Every guest was impressed.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Event Manager',
      company: 'Grand Events Co.',
      text: 'Working with Hemlata has been a game-changer for our events. Their team is professional, punctual, and delivers consistently high-quality catering every single time.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Amit Patel',
      role: 'CEO',
      company: 'Tech Solutions Ltd',
      text: 'We have used Hemlata for multiple corporate events. They understand our requirements perfectly and always exceed expectations. Highly recommended!',
      rating: 5,
      image: '👨‍💻'
    },
    {
      name: 'Deepika Singh',
      role: 'Event Coordinator',
      company: 'Luxury Banquets',
      text: 'The attention to detail and quality of food is outstanding. Hemlata handles large-scale events with such ease and professionalism. They are our go-to caterers now.',
      rating: 5,
      image: '👩‍🎓'
    },
    {
      name: 'Vikram Desai',
      role: 'Restaurant Owner',
      company: 'Hospitality Group',
      text: 'I recommend Hemlata Food Services to all my clients. Their authentic recipes, quality ingredients, and exceptional service set them apart from competitors.',
      rating: 5,
      image: '👨‍🍳'
    },
    {
      name: 'Neha Gupta',
      role: 'Party Planner',
      company: 'Celebrations Plus',
      text: 'From intimate gatherings to grand celebrations, Hemlata has never disappointed us. Their creativity in menu design and flawless execution is remarkable.',
      rating: 5,
      image: '👩‍🎨'
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" style={{ lineHeight: '1.5' }}>
            Real testimonials from satisfied clients and event organizers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-yellow-100"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic" style={{ lineHeight: '1.6' }}>
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base md:text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-orange-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 md:p-8">
            <div className="flex justify-center items-baseline space-x-2 mb-2">
              <span className="text-4xl md:text-5xl font-bold text-gray-900">4.9/5</span>
              <span className="text-lg text-gray-600">Average Rating</span>
            </div>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mt-3">Based on 500+ client reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
