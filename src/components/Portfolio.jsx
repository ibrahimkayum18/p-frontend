import { useState } from "react";
import { X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Piedrasar Shopify Store",
    image: "https://i.ibb.co.com/CppLtq8Z/screencapture-piedrasarshop-2026-07-25-04-36-21.png", // Replace with your screenshot
    description:
      "Premium Shopify store for volcanic cooking stones with a modern, elegant, and conversion-focused shopping experience.",

    content: `
Piedrasar is a premium Shopify store specializing in natural volcanic cooking stones, grilling accessories, and hospitality products. The goal of this project was to create a modern, elegant, and conversion-focused eCommerce experience that reflects the brand's premium identity while making product discovery simple and intuitive.

I designed and developed a responsive Shopify storefront with a clean navigation structure, custom collection pages, and a user-friendly shopping experience. The store was optimized for desktop and mobile devices, ensuring fast performance and seamless browsing across all screen sizes.

My work included:

• Shopify theme customization
• Custom homepage & sections
• Product organization
• Collection setup
• Menu optimization
• Essential Shopify app integration
• Conversion Rate Optimization (CRO)
• UX/UI improvements
• Trust-building elements
• Mobile optimization

The result is a scalable, visually appealing, and high-performing Shopify store that effectively showcases premium products while providing customers with a smooth shopping experience.
    `,
  },

  {
    id: 2,
    title: "HYYGIA Shopify Store",
    image: "https://i.ibb.co.com/cKsLj9Ds/screencapture-hyygia-2026-07-25-01-42-47.png",
    description:
      "High-converting Shopify single-product store designed to maximize conversions through UX and CRO.",

    content: `
HYYGIA is a high-converting Shopify single-product store focused on a premium shower filter designed to improve skin and hair health by reducing water impurities.

The goal was to create a clean, trustworthy, and conversion-focused shopping experience that clearly communicates the product's benefits and encourages purchases.

Key work completed:

• Custom Shopify storefront
• Mobile-first responsive design
• Product page optimization
• Benefit-focused landing page
• CRO implementation
• Speed optimization
• SEO optimization
• Trust-building sections
• Essential Shopify apps
• Streamlined checkout experience

Every section was strategically designed to improve engagement, reduce drop-offs, and increase conversion rates while maintaining a premium brand identity.
    `,
  },

  {
    id: 3,
    title: "Bedmode Shopify Store",
    image: "https://i.ibb.co.com/N6jP2byF/screencapture-bedmode-co-uk-2026-07-25-00-50-30.png",
    description:
      "Complete Shopify store design and optimization with launch-ready functionality and conversion improvements.",

    content: `
Designed and optimized the Bedmode Shopify store to create a seamless shopping experience and prepare the business for successful online sales.

Key Contributions

• Designed and customized the Shopify storefront
• Optimized product pages for higher conversions
• Uploaded and organized products
• Customized product layouts
• Configured email automation
• Installed and configured Shopify apps
• Improved navigation & UX
• Added trust-building elements
• Optimized for desktop & mobile
• Quality assurance testing
• Delivered a fully launch-ready Shopify store

Technologies Used

• Shopify
• Liquid
• HTML
• CSS
• JavaScript
• Shopify Apps
• Klaviyo
• Email Automation
• CRO
• UX/UI Design
    `,
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="relative py-10 md:py-24 bg-gradient-to-b from-black via-[#050806] to-black text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#95BF47]/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-500/10 blur-[180px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:35px_35px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}

        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-green-400 text-sm font-medium mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#95BF47] via-emerald-400 to-green-300 bg-clip-text text-transparent">
              Shopify Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            A selection of Shopify stores I've designed, developed, and
            optimized to improve user experience, increase conversions, and
            drive business growth.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-green-500/20 bg-[#0d0d0d]/90 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#95BF47]/60 hover:shadow-[0_0_35px_rgba(149,191,71,0.18)]"
            >
              {/* Image */}

              <div className="overflow-hidden h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-top object-cover transition duration-[5000ms] group-hover:object-bottom"
                />
              </div>

              {/* Content */}

              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#95BF47] transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 line-clamp-3">
                  {project.description}
                </p>

                <button className="mt-6 text-[#95BF47] font-semibold flex items-center gap-2">
                  View Details →

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-green-500/20 bg-[#0d0d0d]">

            {/* Close */}

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black flex items-center justify-center"
            >
              <X size={22} />
            </button>

            {/* Image */}

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full"
            />

            {/* Content */}

            <div className="p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#95BF47]">
                {selectedProject.title}
              </h2>

              <div className="whitespace-pre-line text-gray-300 leading-8 text-lg">
                {selectedProject.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}