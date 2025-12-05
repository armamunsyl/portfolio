"use client";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold text-center mb-4">
        Skills & <span className="text-pink-500">Expertise</span>
      </h2>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
        Tools and technologies I use to build modern, fast and scalable web applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-pink-400">Frontend</h3>
          <ul className="space-y-2 text-gray-200">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>TailwindCSS</li>
            <li>DaisyUI</li>
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Backend</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Tools & Platforms</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Git & GitHub</li>
            <li>Netlify</li>
            <li>Vercel</li>
            <li>Firebase</li>
            <li>Postman</li>
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-green-400">Other Skills</h3>
          <ul className="space-y-2 text-gray-200">
            <li>REST APIs</li>
            <li>JWT Authentication</li>
            <li>UI/UX Fundamentals</li>
            <li>Problem Solving</li>
            <li>Responsive Design</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
