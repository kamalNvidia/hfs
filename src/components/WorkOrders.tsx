import { FileText, Briefcase } from 'lucide-react';

export default function WorkOrders() {
  const workOrders = [
    {
      organization: 'Government of India - Ministry of Culture',
      event: 'Annual National Conference 2023',
      guests: '2,500+',
      date: 'March 2023',
      status: 'Completed'
    },
    {
      organization: 'State Government - Education Department',
      event: 'Educational Summit & Awards Ceremony',
      guests: '1,800+',
      date: 'February 2023',
      status: 'Completed'
    },
    {
      organization: 'Municipal Corporation',
      event: 'Civic Celebration & Public Welfare Event',
      guests: '3,000+',
      date: 'January 2023',
      status: 'Completed'
    },
    {
      organization: 'Government Medical Institute',
      event: 'Annual Medical Conference',
      guests: '1,200+',
      date: 'December 2022',
      status: 'Completed'
    },
    {
      organization: 'State Tourism Board',
      event: 'Tourism Promotion Event',
      guests: '2,200+',
      date: 'November 2022',
      status: 'Completed'
    },
    {
      organization: 'Public Sector Bank',
      event: 'Employee Appreciation Program',
      guests: '1,500+',
      date: 'October 2022',
      status: 'Completed'
    }
  ];

  return (
    <section id="work-orders" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Government Work Orders
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" style={{ lineHeight: '1.5' }}>
            Trusted by government agencies and prestigious institutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            {workOrders.map((order, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-600"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                        {order.organization}
                      </h3>
                      <p className="text-base md:text-lg text-blue-600 font-semibold mb-2">
                        {order.event}
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg whitespace-nowrap flex-shrink-0">
                    <span className="text-sm md:text-base font-semibold">{order.status}</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 text-sm md:text-base">Guests:</span>
                    <span className="font-semibold text-gray-900 text-sm md:text-base">{order.guests}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 text-sm md:text-base">Date:</span>
                    <span className="font-semibold text-gray-900 text-sm md:text-base">{order.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 md:p-8 text-center text-white">
          <p className="text-base md:text-lg mb-4" style={{ lineHeight: '1.5' }}>
            Our proven track record with government institutions and public sector organizations demonstrates
            our reliability, professionalism, and commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
