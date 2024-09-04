import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#41102D] text-white text-center p-4 md:p-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left md:text-center">
        {/* About Us Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">About BharatPhilately</h2>
          <p className="text-sm">
            BharatPhilately is the ultimate destination for stamp collectors. Explore, collect, showcase, and trade a vast collection of stamps from around the world.
          </p>
          <p className="mt-4 text-sm">
            <strong>Email:</strong> contact@bharatphilately.com
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> +91 123-456-7890
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Quick Links</h2>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li className="mb-2">
              <a href="/about" className="hover:underline">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/services" className="hover:underline">Services</a>
            </li>
            <li className="mb-2">
              <a href="/blog" className="hover:underline">Blog</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
            <li className="mb-2">
              <a href="/faqs" className="hover:underline">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Support</h2>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="/help-center" className="hover:underline">Help Center</a>
            </li>
            <li className="mb-2">
              <a href="/shipping" className="hover:underline">Shipping Policy</a>
            </li>
            <li className="mb-2">
              <a href="/returns" className="hover:underline">Returns Policy</a>
            </li>
            <li className="mb-2">
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
            </li>
            <li className="mb-2">
              <a href="/terms" className="hover:underline">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h2>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-4 rounded text-black"
            />
            <button
              type="submit"
              className="w-full p-2 bg-white text-[#41102D] font-bold rounded hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4">
            <h3 className="font-bold mb-2">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <i className="fa-brands fa-square-facebook text-xl md:text-2xl"></i>
              <i className="fa-brands fa-square-twitter text-xl md:text-2xl"></i>
              <i className="fa-brands fa-square-instagram text-xl md:text-2xl"></i>
              <i className="fa-brands fa-linkedin text-xl md:text-2xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-sm">
        <p>&copy; 2024 BharatPhilately. All rights reserved.</p>
        <p className="mt-2">
          <a href="/terms" className="hover:underline">Terms of Service</a> | 
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
