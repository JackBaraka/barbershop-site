import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white flex items-center justify-center text-3xl font-bold">
      🎉 Tailwind is working!
    </div>
  );
}
/* 
  Improved Home.jsx: Add a hero section with a call-to-action button and a brief description.
*/


function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center drop-shadow-lg">
        Welcome to Barbershop
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-center max-w-xl">
        Experience the best grooming services in town. Book your appointment today and enjoy a fresh new look!
      </p>
      <Link
        to="/booking"
        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition"
      >
        Book Now
      </Link>
    </section>
  );
}

export { HeroSection };