export default function Footer() {
  return (
    <footer className="relative mt-40">

      {/* AVATAR */}
      <div className="absolute -top-39 left-1/2 -translate-x-1/2 z-20">
        <img
          src="/avatars/developer.png"
          alt="Developer Avatar"
          className="w-[180px] h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* FOOTER BODY */}
      <div
        className="
          w-full
          bg-gradient-to-b
          from-[#1a002b]
          via-[#2a0047]
          to-[#070010]
          pt-40 pb-14
          text-center
          text-white
          rounded-t-[55px]
          border-t border-[#ffffff15]
        "
      >
        <h2 className="text-3xl font-bold mb-3">
          Thanks for Visiting!
        </h2>

        <p className="opacity-70 max-w-xl mx-auto mb-6">
          Building modern applications with passion, creativity, and clean code.
        </p>

        <div className="flex justify-center gap-6 mt-4 text-lg">
          <a
            href="https://github.com/armamunsyl"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.facebook.com/armamunsyl"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            Facebook
          </a>
          <a
            href="mailto:you@example.com"
            className="hover:text-pink-500 transition"
          >
            Email
          </a>
        </div>

        <p className="opacity-50 text-sm mt-8 tracking-wide">
          © 2025 Abdur Rahman Mamun — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
