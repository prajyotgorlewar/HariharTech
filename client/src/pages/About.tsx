import { Mail, Phone, MapPin } from "lucide-react";

export default function About() {
  return (
    <div>
      <section className="bg-primary-dark pt-[10rem] pb-[2.5rem] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-bold text-white mb-12 italic">
            "We're not just a service provider — we're your cloud partner."
          </blockquote>
          
          <p className="text-lg text-gray-300 mb-16 leading-relaxed">
            Our team's passion for cloud engineering drives us to create tailored, secure solutions that form the foundation of long-term partnerships. We believe in empowering businesses through technology, not just implementing it. Every solution we architect is designed with your growth, security, and success in mind, ensuring that your cloud infrastructure becomes a strategic advantage rather than just another operational tool.
          </p>
          
          {/* Contact Box */}
          <div className="bg-white rounded-xl p-8 shadow-xl max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-text-gray mb-6">Get In Touch</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-4">
                <div className="bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center">
                  <Mail className="text-primary-dark h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-text-gray">Email</p>
                  <p className="text-gray-600">contact@yourcompany.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center">
                  <Phone className="text-primary-dark h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-text-gray">Phone</p>
                  <p className="text-gray-600">+91 8767937077</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary-dark h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-text-gray">Location</p>
                  <p className="text-gray-600">Nagpur, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-text-gray italic">
            "We don't just implement technology — we empower businesses to lead with it."
          </blockquote>
        </div>
      </section>
    </div>
  );
}
