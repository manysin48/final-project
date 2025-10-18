import React from "react";

export default function Footer() {
  return (
    <>
      <footer class="bg-gray-900 text-gray-400 py-12">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-white text-lg font-semibold mb-4">Company</h3>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-white text-lg font-semibold mb-4">Product</h3>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-white text-lg font-semibold mb-4">Resources</h3>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Webinars
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-white text-lg font-semibold mb-4">Connect</h3>
              <div class="flex space-x-4 mb-4">
                <a
                  href="#"
                  class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
              <p class="text-sm">
                Subscribe to our newsletter for the latest updates
              </p>
              <div class="mt-3 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  class="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button class="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  <i class="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
              <a
                href="#"
                class="text-white text-2xl font-bold flex items-center"
              >
                <i class="fas fa-crown text-yellow-500 mr-2"></i> BrandName
              </a>
            </div>
            <div class="text-sm">
              &copy; 2023 BrandName. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
