import Image from 'next/image'
export default function AboutSection() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 relative"
        >
            <div className="relative">
                <Image
                    src="/profile5.png"
                    width={380}
                    height={380}
                    className="rounded-xl"
                    alt="Picture of the author"
                />

                <div className="absolute inset-0 rounded-xl bg-pink-500 opacity-40 blur-2xl -z-10"></div>
            </div>

            <div className="max-w-xl text-center md:text-left">
                <h2 className="text-4xl font-bold text-white mb-4">
                    About <span className="text-pink-500">Me</span>
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    I’m a Full-Stack Developer passionate about building modern, fast and
                    visually appealing web applications. I focus on clean UI, smooth
                    user-experience, and scalable architecture.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    My primary tools include{" "}
                    <span className="text-pink-500">React, Next.js, TailwindCSS,</span>{" "}
                    and for backend development I work with{" "}
                    <span className="text-pink-500">Node.js and MongoDB.</span>
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                    I enjoy creating high-quality digital experiences that combine
                    performance, aesthetics, and functionality.
                </p>
            </div>
        </section>
    );
}
