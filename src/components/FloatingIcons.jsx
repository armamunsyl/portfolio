import Image from "next/image";

export default function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      
      <Image
        src="/icons/code.png"
        width={60}
        height={60}
        alt="code icon"
        className="floating-icon absolute top-20 left-12 opacity-40 float-up"
      />

      <Image
        src="/icons/react.png"
        width={60}
        height={60}
        alt="react icon"
        className="floating-icon absolute top-1/3 right-16 opacity-40 float-diag-right"
      />

      <Image
        src="/icons/js.png"
        width={60}
        height={60}
        alt="js icon"
        className="floating-icon absolute bottom-32 left-20 opacity-40 float-rotate"
      />

      <Image
        src="/icons/mongo.png"
        width={60}
        height={60}
        alt="mongo icon"
        className="floating-icon absolute bottom-16 right-32 opacity-40 float-wobble"
      />

      <Image
        src="/icons/terminal.png"
        width={100}
        height={100}
        alt="terminal icon"
        className="floating-icon absolute top-1/2 left-1/2 opacity-40 float-diag-left"
      />

      <Image
        src="/icons/gear.png"
        width={60}
        height={60}
        alt="gear icon"
        className="floating-icon absolute top-10 right-1/3 opacity-40 float-down"
      />
      <Image
        src="/icons/firebase.png"
        width={60}
        height={60}
        alt="firebase icon"
        className="floating-icon absolute top-12 right-1/2 opacity-40 float-rotate"
      />

      <Image
        src="/icons/tailwind.png"
        width={60}
        height={60}
        alt="tailwind icon"
        className="floating-icon absolute top-40 left-1/5 opacity-60 float-wobble"
      />
      
    </div>
  );
}
