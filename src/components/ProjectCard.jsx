import Image from "next/image";

export default function ProjectCard({ image, title, overview, features, live, client, server }) {
  return (
    <div className="flex-shrink-0 w-[900px] h-[500px] rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden flex shadow-xl">
      
      {/* LEFT — PROJECT IMAGE */}
      <div className="w-1/2 h-full relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT — PROJECT DETAILS */}
      <div className="w-1/2 p-10 text-white flex flex-col justify-center gap-4">
        
        <h2 className="text-3xl font-bold">{title}</h2>

        <p className="text-gray-300">{overview}</p>

        <div>
          <h3 className="text-xl font-semibold mb-2">Features</h3>
          <ul className="list-disc ml-5 text-gray-300">
            {features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 mt-4 text-sm">
          <a href={live} target="_blank" className="text-pink-400 hover:underline">🔗 Live Demo</a>
          <a href={client} target="_blank" className="text-pink-400 hover:underline">💻 Client GitHub</a>
          <a href={server} target="_blank" className="text-pink-400 hover:underline">🖥 Server GitHub</a>
        </div>
      </div>
    </div>
  );
}
