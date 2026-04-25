'use client'

import { useState } from 'react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers')

  const categories = [
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🍽️' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' },
  ]

  const menuItems = {
    appetizers: [
      {
        name: 'Bruschetta Classica',
        description: 'Toasted bread with fresh tomatoes, basil, garlic, and olive oil',
        price: '$12',
        tags: ['Vegetarian'],
        popular: true,
      },
      {
        name: 'Calamari Fritti',
        description: 'Golden fried squid rings with zesty marinara sauce',
        price: '$16',
        tags: ['Seafood'],
        popular: false,
      },
      {
        name: 'Caprese Salad',
        description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze',
        price: '$14',
        tags: ['Vegetarian'],
        popular: true,
      },
      {
        name: 'Soup of the Day',
        description: 'Chef\'s daily creation with seasonal ingredients',
        price: '$10',
        tags: ['Daily Special'],
        popular: false,
      },
    ],
    mains: [
      {
        name: 'Grilled Salmon',
        description: 'Atlantic salmon with lemon butter sauce, served with seasonal vegetables',
        price: '$28',
        tags: ['Seafood', 'Healthy'],
        popular: true,
      },
      {
        name: 'Ribeye Steak',
        description: '12oz prime ribeye with herb butter and roasted potatoes',
        price: '$42',
        tags: ['Signature'],
        popular: true,
      },
      {
        name: 'Chicken Parmesan',
        description: 'Breaded chicken breast with marinara sauce and melted mozzarella',
        price: '$24',
        tags: ['Classic'],
        popular: false,
      },
      {
        name: 'Vegetarian Risotto',
        description: 'Creamy arborio rice with seasonal vegetables and parmesan',
        price: '$22',
        tags: ['Vegetarian'],
        popular: false,
      },
    ],
    desserts: [
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
        price: '$10',
        tags: ['Signature', 'Vegetarian'],
        popular: true,
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
        price: '$12',
        tags: ['Popular'],
        popular: true,
      },
      {
        name: 'Panna Cotta',
        description: 'Silky vanilla custard with berry compote',
        price: '$9',
        tags: ['Light'],
        popular: false,
      },
    ],
    beverages: [
      {
        name: 'House Wine Selection',
        description: 'Red, white, and rosé options from local vineyards',
        price: '$8/glass',
        tags: ['Wine'],
        popular: false,
      },
      {
        name: 'Craft Cocktails',
        description: 'Signature mixes by our expert bartenders',
        price: '$14',
        tags: ['Cocktails'],
        popular: true,
      },
      {
        name: 'Fresh Juices',
        description: 'Daily squeezed orange, apple, and seasonal options',
        price: '$6',
        tags: ['Fresh'],
        popular: false,
      },
    ],
  }

  const currentItems = menuItems[activeCategory as keyof typeof menuItems] || []

  return (
    <section id="menu" className="bg-secondary-50 section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-secondary-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted menu featuring fresh, seasonal ingredients 
            and innovative culinary creations that delight the senses.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-secondary-700 hover:bg-secondary-100 border border-secondary-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold text-secondary-900">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span className="bg-primary-100 text-primary-600 text-xs px-2 py-1 rounded-full font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-secondary-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-secondary-100 text-secondary-600 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-primary-600">
                    {item.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif text-secondary-900 mb-4">
              Dietary Preferences?
            </h3>
            <p className="text-secondary-600 mb-6">
              We accommodate various dietary restrictions and preferences. 
              Please inform your server about any allergies or special requirements.
            </p>
            <button className="btn-primary">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
