import { Cloud, Settings, Lock, TrendingUp, Brain, Palette, Globe, BarChart, Sliders } from "lucide-react";

export default function Blogs() {
  return (
    <div>
      {/* What We Do Section */}
      <section className="bg-primary-dark pt-[10rem] pb-[2.5rem] px-6">
        <div className="max-w-6xl mx-auto text-center">
<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
  Insights & Innovation
</h1>
<p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
  Explore expert perspectives, industry trends, and actionable strategies that empower you to stay ahead in the evolving world of technology, business, and innovation.
</p>

          
          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-gray mb-4">Blog1</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis cum necessitatibus natus ipsum ipsam minima commodi, itaque sequi aperiam, quis expedita quasi maiores debitis, enim doloremque deserunt accusantium modi.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-gray mb-4">Blog2</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam itaque ipsam aliquid, porro eos voluptas. Ratione perspiciatis incidunt culpa soluta, accusantium laborum hic corporis earum voluptatibus corrupti consequuntur cumque.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-gray mb-4">Blog3</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur inventore, porro autem, eius id dolorum, vitae quisquam labore doloremque ratione assumenda ad? Magnam, voluptate ad quos rem quae molestiae!</p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
