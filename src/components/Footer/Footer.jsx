import React from "react";

function Footer() {
  return (
    <footer className="mt-9 bg-blue-600  text-gray-200 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Equipify</h1>
          <p className="text-sm text-gray-300">
            Your one-stop destination for premium sports equipment.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
          <a href="/about" className="hover:text-yellow-400 transition">
            About Us
          </a>
          <a href="/products" className="hover:text-yellow-400 transition">
            Products
          </a>
          <a href="/contact" className="hover:text-yellow-400 transition">
            Contact Us
          </a>
          <a href="/faq" className="hover:text-yellow-400 transition">
            FAQ
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300 hover:text-blue-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300 hover:text-blue-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300 hover:text-pink-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.975.975 1.243 2.242 1.305 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.305 3.608-.975.975-2.242 1.243-3.608 1.305-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.305-.975-.975-1.243-2.242-1.305-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.305-3.608.975-.975 2.242-1.243 3.608-1.305 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.012-4.947.072-1.545.07-2.956.542-4.043 1.629-1.087 1.087-1.559 2.498-1.629 4.043-.06 1.277-.072 1.688-.072 4.947s.012 3.67.072 4.947c.07 1.545.542 2.956 1.629 4.043 1.087 1.087 2.498 1.559 4.043 1.629 1.277.06 1.688.072 4.947.072s3.67-.012 4.947-.072c1.545-.07 2.956-.542 4.043-1.629 1.087-1.087 1.559-2.498 1.629-4.043.06-1.277.072-1.688.072-4.947s-.012-3.67-.072-4.947c-.07-1.545-.542-2.956-1.629-4.043-1.087-1.087-2.498-1.559-4.043-1.629-1.277-.06-1.688-.072-4.947-.072z" />
            </svg>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-300">
          <p>Copyright © {new Date().getFullYear()} Equipify. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
