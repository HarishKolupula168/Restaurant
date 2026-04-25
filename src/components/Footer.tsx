
const Footer = () => {
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Opening Hours',
      links: [
        { name: 'Mon-Thu: 11:00 AM - 10:00 PM', href: '#' },
        { name: 'Fri-Sat: 11:00 AM - 11:00 PM', href: '#' },
        { name: 'Sunday: 12:00 PM - 9:00 PM', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: '📘', href: '#', label: 'Facebook' },
    { icon: '🐦', href: '#', label: 'Twitter' },
    { icon: '📷', href: '#', label: 'Instagram' },
    { icon: '📺', href: '#', label: 'YouTube' },
  ]

  const contactInfo = [
    { icon: '📍', text: '123 Restaurant Street, City, State 12345' },
    { icon: '📞', text: '+1 (555) 123-4567' },
    { icon: '✉️', text: 'info@restaurant.com' },
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Restaurant</h3>
            <p className="text-secondary-300 leading-relaxed">
              Experience the finest dining with our exceptional cuisine and elegant atmosphere. 
              We create memorable moments through food.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks[0].links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              {footerLinks[1].links.map((link, index) => (
                <li key={index}>
                  <span className="text-secondary-300">{link.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0">{info.icon}</span>
                  <span className="text-secondary-300">{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-300 text-sm">
              © 2024 Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
