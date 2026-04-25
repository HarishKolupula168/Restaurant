
import Image from 'next/image'

const About = () => {
  const stats = [
    { icon: '🏆', label: 'Years of Excellence', value: '15+' },
    { icon: '👥', label: 'Happy Customers', value: '50K+' },
    { icon: '⏰', label: 'Daily Service', value: '12hrs' },
    { icon: '❤️', label: 'Signature Dishes', value: '25+' },
  ]

  const features = [
    {
      title: 'Farm to Table',
      description: 'We source the freshest ingredients from local farms and suppliers, ensuring quality and supporting our community.',
      image: 'https://tse4.mm.bing.net/th/id/OIP.7OkA0aSto9WxJQbVl08wgwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      title: 'Expert Chefs',
      description: 'Our culinary team brings years of experience and passion to every dish, creating unforgettable dining experiences.',
      image: 'https://tse2.mm.bing.net/th/id/OIP.WIfaMb8CDqdaWqS5v0lQegHaDt?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      title: 'Elegant Ambiance',
      description: 'From intimate dinners to grand celebrations, our restaurant provides the perfect setting for any occasion.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    },
  ]

  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-secondary-900 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a passion for exceptional cuisine and warm hospitality, 
            our restaurant has been serving memorable dining experiences for over 15 years.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-secondary-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif text-secondary-900 mb-6">
              A Culinary Journey
            </h3>
            <div className="space-y-4 text-secondary-600 leading-relaxed">
              <p>
                Our journey began in 2009 with a simple vision: to create a dining destination 
                where exceptional food meets warm hospitality. What started as a small family-run 
                establishment has grown into one of the region&apos;s most celebrated restaurants.
              </p>
              <p>
                We believe that great dining is more than just food—it&apos;s about creating memories, 
                fostering connections, and celebrating life's special moments. Our commitment to 
                quality, innovation, and service has earned us numerous accolades and, more importantly, 
                the loyalty of our cherished guests.
              </p>
              <p>
                Every dish that leaves our kitchen tells a story of passion, creativity, and respect 
                for ingredients. We invite you to become part of our story and experience the magic 
                that happens when culinary artistry meets genuine hospitality.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=700&fit=crop"
              alt="Restaurant Interior"
              width={600}
              height={700}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden rounded-lg mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl font-semibold text-secondary-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
