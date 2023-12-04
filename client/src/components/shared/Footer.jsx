const Footer = () => {
  return (
    <div className="mt-20 bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">WinWave</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main St, Cityville</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Facebook
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Twitter
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Instagram
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Subscribe</h2>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 text-white p-2 rounded-l"
              />
              <button className="bg-blue-500 text-white p-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Pages</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
