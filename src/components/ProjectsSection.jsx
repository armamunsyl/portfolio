import GlassProjectCard from "./GlassProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">

      <h1 className="text-4xl text-white font-bold mb-10 text-center">
        Featured <span className="text-pink-500">Projects</span>
      </h1>

      <div className="flex gap-12 overflow-x-scroll snap-x snap-mandatory pb-10">

        {/* PROJECT 1 */}
        <div className="snap-center">
          <GlassProjectCard 
            images={[
              "/projects/store-home.png",
              "/projects/store-login.png",
              "/projects/store-product.png",
              "/projects/store-dashboard.png"
            ]}
            title="NeonBytes Store"
            description="Modern e-commerce UI designed using vibrant neon colors and smooth animations."
            features={[
              "Full responsive design",
              "Live search system",
              "Wishlist with LocalStorage",
              "Advanced filtering"
            ]}
          />
        </div>

        {/* PROJECT 2 */}
        <div className="snap-center">
          <GlassProjectCard 
            images={[
              "/projects/replizz-dashboard.png",
              "/projects/replizz-login.png",
              "/projects/replizz-flow.png"
            ]}
            title="Replizz Automation"
            description="A smart Facebook Messenger automation platform powered by n8n workflows."
            features={[
              "Messenger automation",
              "Webhook execution",
              "Admin dashboard",
              "Real-time logs"
            ]}
          />
        </div>

      </div>
    </section>
  );
}
