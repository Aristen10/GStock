import Navbar from "./components/NavBar";
import ScrollReveal from "./components/ScrollReveal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black pt-20">
      <Navbar />
      
      
      <main className="flex-grow">
        <ScrollReveal>
          <div className="space-y-2 space-x-8 px-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              GStock
            </h1>
            <p className="text-gray-500 text-md">
              Solution professionnelle de gestion de stock pour un suivi précis, 
              une organisation optimale et une meilleure performance de votre activité.
            </p>
          </div>
        </ScrollReveal>
      </main>

      
      <Footer />
    </div>
  );
}