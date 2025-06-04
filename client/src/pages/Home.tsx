import { Rocket, Shield, Users, Heart, ArrowRight, Cloud, Server, Database, Zap, Globe, Lock } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-dark px-6 pt-[7.5rem] pb-[5rem] relative overflow-hidden hero-bg-pattern">
        {/* Floating Background Icons */}
        <div className="absolute inset-0 pointer-events-none mt-[2rem]">
          <Cloud className="absolute top-20 left-10 text-white/10 w-16 h-16 floating-icon" />
          <Server className="absolute top-32 right-20 text-accent-yellow/20 w-12 h-12 floating-icon-delayed" />
          <Database className="absolute bottom-40 left-20 text-white/10 w-14 h-14 floating-icon" />
          <Zap className="absolute top-1/2 right-10 text-accent-yellow/15 w-10 h-10 floating-icon-delayed" />
          <Globe className="absolute bottom-20 right-32 text-white/10 w-18 h-18 floating-icon" />
          <Lock className="absolute top-1/4 left-1/4 text-accent-yellow/10 w-8 h-8 floating-icon-delayed" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Growth Through<br />
            <span className="text-accent-yellow">Cloud Innovation</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Scalable, secure, and future-ready cloud solutions designed to fuel your business success.
          </h2>
          <p className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto">
            At Harihar Tech, we enable businesses to thrive in the digital age by delivering cutting-edge cloud infrastructure, DevOps automation, and AI-powered solutions. Our expert team transforms complex technical challenges into competitive advantages, ensuring your business stays ahead in an ever-evolving technological landscape.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-accent-yellow text-primary-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 pulse-glow shadow-lg">
              Partner With Us
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View Our Solutions
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get a free consultation
            </button>
            
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-text-gray mb-2">Blazing-Fast Deployments</h3>
              <p className="text-gray-600">Deploy at lightning speed with our optimized CI/CD pipelines</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-text-gray mb-2">Military-Grade Security</h3>
              <p className="text-gray-600">Enterprise-level security with zero-trust architecture</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-text-gray mb-2">Expert Engineering Team</h3>
              <p className="text-gray-600">Seasoned professionals with deep cloud expertise</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-text-gray mb-2">Trusted by Growing Businesses</h3>
              <p className="text-gray-600">Empowering businesses across India to reach new heights</p>
            </div>
          </div>
          
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl font-semibold text-text-gray italic">
              "Built on reliability. Designed for scale. Delivered with heart."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
