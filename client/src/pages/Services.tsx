import { Cloud, Settings, Lock, TrendingUp, Brain, Palette, Globe, BarChart, Sliders } from "lucide-react";

export default function Services() {
  return (
    <div>
      {/* What We Do Section */}
      <section className="bg-primary-dark pt-[10rem] pb-[2.5rem] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Do</h1>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            We deliver innovative cloud solutions that transform how businesses operate, scale, and compete in the digital marketplace.
          </p>
          
          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-gray mb-4">Cloud Infrastructure Setup</h3>
              <p className="text-gray-600">Complete Azure, AWS, or GCP infrastructure design and implementation tailored to your business needs.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-gray mb-4">DevOps & Automation</h3>
              <p className="text-gray-600">Streamlined CI/CD pipelines, Terraform infrastructure as code, and automated deployment processes.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-gray mb-4">Security & Compliance</h3>
              <p className="text-gray-600">Zero-trust security models, end-to-end encryption, and compliance with ISO 27001 and HIPAA standards.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-gray mb-4">Monitoring & Optimization</h3>
              <p className="text-gray-600">Real-time monitoring with Grafana, Azure Monitor, and comprehensive cost analysis and optimization.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-gray mb-4">AI/ML & Data Engineering</h3>
              <p className="text-gray-600">Data lakes, analytics pipelines, and ML model deployment to unlock business intelligence.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-gray mb-4">UI/UX</h3>
              <p className="text-gray-600">Crafting intuitive interfaces and delightful user journeys that drive your business forward.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-gray mb-4">Websites, Mobile apps and Softwares</h3>
              <p className="text-gray-600">Delivering custom web, mobile, and software solutions to drive growth and streamline operations.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-gray mb-4">Business Analytics</h3>
              <p className="text-gray-600">Transforming your data into actionable business intelligence using Power BI, Tableau, and advanced analytics.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sliders className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-gray mb-4">AIOps, MLOps & DataOps</h3>
              <p className="text-gray-600">Streamlining AI, ML, and data workflows with intelligent automation, featuring Azure Data Factory and Databricks CI/CD.</p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-gray text-center mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-accent-yellow w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary-dark font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-text-gray mb-4">Discover & Assess</h3>
              <p className="text-gray-600">We analyze your current infrastructure and identify optimization opportunities.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-accent-yellow w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary-dark font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-text-gray mb-4">Architect the Solution</h3>
              <p className="text-gray-600">Custom cloud architecture designed for scalability, security, and performance.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-accent-yellow w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary-dark font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-text-gray mb-4">Deploy & Integrate</h3>
              <p className="text-gray-600">Seamless implementation with minimal downtime and comprehensive testing.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-accent-yellow w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary-dark font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-text-gray mb-4">Monitor & Support</h3>
              <p className="text-gray-600">Ongoing monitoring, optimization, and 24/7 support to ensure peak performance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
