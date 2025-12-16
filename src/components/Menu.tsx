import { Leaf } from 'lucide-react';

export default function Menu() {
  const menuCategories = [
    {
      name: 'Starters',
      items: [
        { name: 'Paneer Tikka', description: 'Marinated cottage cheese grilled to perfection', veg: true },
        { name: 'Vegetable Spring Rolls', description: 'Crispy rolls with fresh vegetables', veg: true },
        { name: 'Hara Bhara Kabab', description: 'Spinach and pea patties with spices', veg: true },
        { name: 'Dahi Ke Kebab', description: 'Yogurt-based soft kebabs', veg: true }
      ]
    },
    {
      name: 'Main Course',
      items: [
        { name: 'Paneer Butter Masala', description: 'Cottage cheese in rich tomato gravy', veg: true },
        { name: 'Dal Makhani', description: 'Creamy black lentils slow-cooked overnight', veg: true },
        { name: 'Veg Biryani', description: 'Aromatic basmati rice with mixed vegetables', veg: true },
        { name: 'Chole Bhature', description: 'Spiced chickpeas with fluffy fried bread', veg: true },
        { name: 'Kadai Paneer', description: 'Cottage cheese with bell peppers and spices', veg: true },
        { name: 'Malai Kofta', description: 'Vegetable dumplings in creamy sauce', veg: true }
      ]
    },
    {
      name: 'Breads',
      items: [
        { name: 'Butter Naan', description: 'Soft leavened bread with butter', veg: true },
        { name: 'Garlic Naan', description: 'Naan topped with garlic and herbs', veg: true },
        { name: 'Tandoori Roti', description: 'Whole wheat flatbread from tandoor', veg: true },
        { name: 'Paratha', description: 'Layered whole wheat flatbread', veg: true }
      ]
    },
    {
      name: 'Desserts',
      items: [
        { name: 'Gulab Jamun', description: 'Sweet milk dumplings in sugar syrup', veg: true },
        { name: 'Rasmalai', description: 'Soft cheese patties in sweetened milk', veg: true },
        { name: 'Gajar Halwa', description: 'Carrot pudding with nuts and ghee', veg: true },
        { name: 'Kheer', description: 'Rice pudding with cardamom and nuts', veg: true }
      ]
    }
  ];

  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" style={{ lineHeight: '1.5' }}>
            A selection of our popular dishes. Custom menus available on request.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {menuCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-orange-600">
                {category.name}
              </h3>

              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-gray-900 text-base md:text-lg">
                        {item.name}
                      </h4>
                      {item.veg && (
                        <div className="flex items-center bg-green-100 rounded px-2 py-1">
                          <Leaf className="w-4 h-4 text-green-600" />
                        </div>
                      )}
                    </div>
                    <p className="text-sm md:text-base text-gray-600" style={{ lineHeight: '1.5' }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-gradient-to-r from-orange-100 via-amber-100 to-orange-100 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-gray-700 mb-4" style={{ lineHeight: '1.5' }}>
            This is just a sample of our offerings. We can customize menus based on your preferences,
            dietary requirements, and event theme.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Request Custom Menu
          </button>
        </div>
      </div>
    </section>
  );
}
