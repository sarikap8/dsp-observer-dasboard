import Image from "next/image";

export default function Login() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/striped-pattern.jpg"
        alt="Background"
        fill
        className="object-cover opacity-3"
        priority
        
      />
      <div className="absolute left-[8vw] top-1/2 -translate-y-1/2 w-[30vw] max-w-[400px] min-w-[200px]">
        <Image
          src="/next-for-autism-logo.svg"
          alt="Next.js Logo"
          width={500}
          height={500}
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="absolute right-[5vw] top-1/2 -translate-y-1/2 w-[45vw] max-w-[45vw] bg-white rounded-lg shadow-lg p-[2vw]">
        {/*<h2 className="text-2xl font-bold mb-4">Login</h2>}
        {/* Add your login form here */}
      </div>
    </div>
  );
}

