import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* 
        We use next/image to load the user's exact logo file. 
        The image should be placed in the public folder as 'logo.png' 
      */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full p-1 overflow-hidden shadow-lg border-2 border-white/10">
        <Image
          src="/logo.png"
          alt="Outlaw Styling Studio"
          fill
          className="object-cover scale-[1.3]"
          priority
        />
      </div>
    </div>
  );
}
