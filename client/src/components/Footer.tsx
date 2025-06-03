export default function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Harihar Tech</h3>
            <p className="text-sm leading-relaxed">
              Empowering businesses through innovative cloud solutions and cutting-edge technology partnerships.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="text-sm space-y-2">
              <li>Cloud Infrastructure</li>
              <li>DevOps & Automation</li>
              <li>Security & Compliance</li>
              <li>Monitoring & Optimization</li>
              <li>AI/ML & Data Engineering</li>
              <li>UI/UX</li>
              <li>Websites, Mobile apps and Softwares</li>
              <li>Business Analytics</li>
              <li>AIOps, MLOps & DataOps</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="text-sm space-y-2">
              <p>contact@yourcompany.com</p>
              <p>+91 8767937077</p>
              <p>Nagpur, India</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Harihar Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
