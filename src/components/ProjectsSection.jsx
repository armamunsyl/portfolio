import GlassProjectCard from "./GlassProjectCard";
import MotionSection from "./MotionSection";

export default function ProjectsSection() {
  return (
    <MotionSection id="projects" className="py-20 px-4 md:px-6" delay={0.15}>

      <h1 className="text-4xl text-white font-bold mb-10 text-center">
        Featured <span className="text-pink-500">Projects</span>
      </h1>

      <div
        className="
        flex flex-col
        md:flex-row
        md:overflow-x-auto
        overflow-y-hidden
        gap-6
        lg:gap-4
        snap-y md:snap-x snap-mandatory
        no-scrollbar
        "
      >

        <div className="snap-center flex-shrink-0 w-full md:w-auto">
          <GlassProjectCard
            images={[
              "/newimg1.png",
              "/newimg2.png",
              "/newimg3.png"
            ]}
            title="ScholarStream"
            description="A scholarship discovery and management platform that helps students find, filter, and apply for global scholarships with ease."
            features={[
              "Fully responsive, recruiter-friendly UI",
              "Server-side search, filter, and sorting",
              "Scholarship categories (Full Fund, Partial Fund)",
              "Secure authentication and role-based access",
              "Application tracking and user dashboard",
              "Modern REST API with scalable backend"
            ]}
            links={{
              live: "https://scholarshipbd.vercel.app/",
              client: "https://github.com/armamunsyl/ScholarStream-Client",
              server: "https://github.com/armamunsyl/ScholarStream-Server"
            }}
          />
        </div>

        <div className="snap-center flex-shrink-0 w-full md:w-auto">
          <GlassProjectCard
            images={[
              "/projects/11.png",
              "/projects/12.png",
              "/projects/13.png"
            ]}
            title="FinEase"
            description="Personal finance management system built with modern UI and smooth automation."
            features={[
              "Full responsive design",
              "Secure user authentication",
              "Income & Expense tracking",
              "Advanced filtering"
            ]}
            links={{
              live: "https://fineasey.netlify.app/",
              client: "https://github.com/armamunsyl/Finance-Management-client",
              server: "https://github.com/armamunsyl/finease-server"
            }}
          />
        </div>

        <div className="snap-center flex-shrink-0 w-full md:w-auto">
          <GlassProjectCard
            images={[
              "/projects/21.png",
              "/projects/22.png",
              "/projects/23.png"
            ]}
            title="GadgateShop"
            description="A modern Next.js e-commerce platform designed with clean UI and smooth UX."
            features={[
              "Fully responsive pages",
              "Product filtering",
              "Modern dashboard layout",
              "Fast UI performance"
            ]}
            links={{
              live: "https://next-js-project-sigma-gilt.vercel.app/",
              client: "https://github.com/armamunsyl/Next-JS-Project"
            }}
          />
        </div>

        

      </div>
    </MotionSection>
  );
}
