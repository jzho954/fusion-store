import { Search, ShoppingCart, TrendingUp, Music } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export function Header({ categories, activeCategory, setActiveCategory }: any) {
  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          <Link href="/" className="flex items-center">
            <span className="mr-2">FusionSnacks</span>
            <TrendingUp className="h-6 w-6" />
          </Link>
        </h1>
        <nav className="hidden md:flex space-x-4">
          {categories.map((category: any) => (
            <Link key={category.id} href={`/${category.id}`}>
              <Button 
                variant={activeCategory === category.id ? "secondary" : "ghost"}
                onClick={() => setActiveCategory(category.id)}
                className="bg-purple-500 hover:bg-white hover:text-purple-500 transition-colors duration-300"
              >
                {category.name}
              </Button>
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input 
              type="search" 
              placeholder="Search..." 
              className="pl-8 bg-white/20 text-white placeholder-white/70 border-transparent focus:border-white"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/70" />
          </div>
          <Button size="icon" variant="ghost" className="text-white hover:bg-white hover:text-purple-500">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button size="icon" variant="ghost" className="text-white hover:bg-white hover:text-purple-500">
            <Music className="h-5 w-5" />
            <span className="sr-only">Trending</span>
          </Button>
        </div>
      </div>
    </header>
  );
}