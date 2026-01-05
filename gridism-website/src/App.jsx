import { useLenis } from './hooks/useLenis';
import './App.css';

function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 flex items-center justify-center overflow-hidden">
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-6">
            Gridism
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light">
            Building the future, one pixel at a time
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen bg-gradient-to-b from-gray-950 to-black flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed">
            We're a creative studio specializing in cutting-edge web experiences.
            Our mission is to transform ideas into stunning digital realities.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-16">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Design</h3>
              <p className="text-gray-400">
                Beautiful, user-centric designs that captivate and convert.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Development</h3>
              <p className="text-gray-400">
                Lightning-fast, scalable web applications built with modern tech.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-2xl border border-gray-800 hover: border-gray-700 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Strategy</h3>
              <p className="text-gray-400">
                Data-driven strategies that elevate your brand and drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-950 flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Featured Work
          </h2>
          <p className="text-lg md: text-xl lg:text-2xl text-gray-400 mb-12">
            Coming soon... Our best projects showcased. 
          </p>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
            <div className="h-64 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all"></div>
            <div className="h-64 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12">
            Ready to bring your vision to life? Get in touch. 
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500">
            © 2026 Gridism. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;