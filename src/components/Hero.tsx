'use client'

import { useState, useEffect } from 'react'
import { FiPlay, FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Experience Fine Dining',
      subtitle: 'Discover exceptional cuisine in an elegant atmosphere',
      description: 'Join us for an unforgettable culinary journey where tradition meets innovation',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop',
    },
    {
      title: 'Artisanal Culinary Excellence',
      subtitle: 'Fresh ingredients, masterful preparation',
      description: 'Our chefs craft each dish with passion and precision using the finest ingredients',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop',
    },
    {
      title: 'Perfect Moments',
      subtitle: 'Create memories that last a lifetime',
      description: 'Whether it\'s a romantic dinner or special celebration, we make every moment special',
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&h=1080&fit=crop',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
  }

  const scrollToMenu = () => {
    const menuSection = document.querySelector('#menu')
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToReservation = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-xl md:text-2xl text-primary-300 mb-6">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToMenu}
                  className="btn-primary flex items-center justify-center space-x-2 group"
                >
                  <span>Explore Menu</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  onClick={scrollToReservation}
                  className="btn-secondary flex items-center justify-center space-x-2 group"
                >
                  <span>Make Reservation</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary-500 w-16'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/70 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
