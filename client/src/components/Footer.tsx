export default function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">Harihar Tech</h3>
            <p className="text-sm leading-snug">
              Empowering businesses through innovative cloud solutions and cutting-edge technology partnerships.
            </p>
          </div>

          {/* Services in two columns */}
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <div className="grid grid-cols-2 gap-x-4 text-sm">
              <ul className="space-y-1">
                <li>Cloud Infrastructure</li>
                <li>DevOps & Automation</li>
                <li>Security & Compliance</li>
                <li>Monitoring & Optimization</li>
                <li>AI/ML & Data Engineering</li>
              </ul>
              <ul className="space-y-1">
                <li>UI/UX</li>
                <li>Web & Mobile Apps</li>
                <li>Business Analytics</li>
                <li>AIOps, MLOps & DataOps</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <div className="text-sm space-y-1">
              <p>contact@yourcompany.com</p>
              <p>+91 8767937077</p>
              <p>Nagpur, India</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm">
          <p>&copy; 2024 Harihar Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
