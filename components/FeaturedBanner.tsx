import { Button } from "@/components/ui/button";
import { TrendingUp, Music } from 'lucide-react';

export function FeaturedBanner() {
  return (
    <section className="mb-12 relative h-[60vh] min-h-[400px] w-full overflow-hidden rounded-lg">
      <img  
        src="/images/snack-main.webp" 
        alt="Fusion Flavors Hero" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-600/40 to-yellow-500/40 flex flex-col justify-center items-center text-white p-4 backdrop-blur-[0.5px]">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg animate-pulse" style={{ fontFamily: "'Pacifico', cursive" }}>
            Fusion Flavors
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 drop-shadow-md" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Where East Meets West in Culinary Delight
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-800 hover:bg-yellow-300 hover:text-purple-900 transition-colors duration-300 transform hover:scale-105 border-2 border-yellow-400"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Explore Fusion
          </Button>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <span className="text-4xl animate-bounce">🇯🇵</span> {/* Replace with appropriate flag icons */}
        <span className="text-4xl animate-bounce">🇲🇽</span> {/* Add more flags if needed */}
      </div>
    </section>
  );
}
