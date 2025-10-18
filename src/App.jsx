import "./App.css";

function App() {
  return (
    <>
      <section class="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        <div class="container mx-auto px-6 py-24 relative z-10">
          <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 mb-12 lg:mb-0">
              <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Build Amazing{" "}
                <span class="gradient-text bg-gradient-to-r from-pink-500 to-yellow-500">
                  Products Experiences
                </span>
              </h1>
              <p class="text-xl text-blue-100 mb-8 max-w-lg">
                Our platform helps you create stunning websites and applications
                with minimal effort and maximum creativity.
              </p>
              <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button class="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold hover:from-pink-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg">
                  Get Started Free
                </button>
                <button class="bg-white bg-opacity-20 text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-30 transition-all border border-white border-opacity-30">
                  Learn More
                </button>
              </div>
            </div>
            <div class="lg:w-1/2 flex justify-center">
              <div class="relative w-full max-w-md">
                <div class="absolute -top-10 -left-10 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-30"></div>
                <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
                <img
                  src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                  alt="Hero Image"
                  class="relative z-10 w-full floating"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <span class="text-sm font-semibold tracking-wider uppercase text-blue-600">
              Features
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Everything You Need to Succeed
            </h2>
            <p class="max-w-2xl mx-auto text-gray-600 mt-4">
              Our platform is packed with powerful features designed to help you
              build, grow, and scale your business.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div class="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                <img src="./img-1.jpg" alt="" />
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">
                  Lightning Fast
                </h3>
                <p class="text-gray-600 mb-4">
                  Optimized for performance with instant load times and smooth
                  animations that delight your users.
                </p>
                <a
                  href="#"
                  class="text-blue-600 font-semibold inline-flex items-center"
                >
                  Learn more <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div class="h-48 bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
                <img src="./img-2.jpg" alt="" className="w-40 h-40" />
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">
                  Beautiful Design
                </h3>
                <p class="text-gray-600 mb-4">
                  Stunning templates and customization options to make your
                  project stand out from the crowd.
                </p>
                <a
                  href="#"
                  class="text-blue-600 font-semibold inline-flex items-center"
                >
                  Learn more <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div class="h-48 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                <img src="./img-3.jpg" alt="" className="w-40 h-40" />
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">
                  Secure & Reliable
                </h3>
                <p class="text-gray-600 mb-4">
                  Enterprise-grade security and 99.9% uptime guarantee to keep
                  your business running smoothly.
                </p>
                <a
                  href="#"
                  class="text-blue-600 font-semibold inline-flex items-center"
                >
                  Learn more <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div class="p-6">
              <div class="text-5xl font-bold mb-2">10K+</div>
              <div class="text-indigo-200 font-medium">Happy Customers</div>
            </div>
            <div class="p-6">
              <div class="text-5xl font-bold mb-2">99.9%</div>
              <div class="text-indigo-200 font-medium">Uptime</div>
            </div>

            <div class="p-6">
              <div class="text-5xl font-bold mb-2">5M+</div>
              <div class="text-indigo-200 font-medium">Daily Requests</div>
            </div>

            <div class="p-6">
              <div class="text-5xl font-bold mb-2">24/7</div>
              <div class="text-indigo-200 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <span class="text-sm font-semibold tracking-wider uppercase text-blue-600">
              Testimonials
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              What Our Customers Say
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 transform hover:scale-105 transition-all">
              <div class="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Johnson"
                  class="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 class="font-bold text-gray-900">Sarah Johnson</h4>
                  <p class="text-blue-600">CEO, TechStart</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "This platform transformed our business. The ease of use
                combined with powerful features is unmatched in the industry."
              </p>
              <div class="mt-4 text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500 transform hover:scale-105 transition-all">
              <div class="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Michael Chen"
                  class="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 class="font-bold text-gray-900">Michael Chen</h4>
                  <p class="text-purple-600">Marketing Director</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "The customer support is exceptional. They helped us migrate our
                entire infrastructure with zero downtime."
              </p>
              <div class="mt-4 text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pink-500 transform hover:scale-105 transition-all">
              <div class="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Emma Rodriguez"
                  class="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 class="font-bold text-gray-900">Emma Rodriguez</h4>
                  <p class="text-pink-600">Product Manager</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "We've seen a 300% increase in conversions since implementing
                their solution. Simply game-changing!"
              </p>
              <div class="mt-4 text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p class="max-w-2xl mx-auto text-blue-100 mb-8 text-xl">
            Join thousands of satisfied customers who are already building the
            future with our platform.
          </p>
          <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button class="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:bg-opacity-10 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
