'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Search, ShoppingCart, ChevronRight, Sun, Music, ChefHat, ArrowRight, ExternalLink, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ScrollArea } from "@/components/ui/scroll-area"

const asianCategories = [
  { id: 'latin', name: 'See Our Latin Selection' },
  { id: '', name: 'Or Our Fusion' },
]

const asianProducts = [
  { id: 1, name: 'Pocky Sticks', price: 2.99, category: 'japanese', image: "/placeholder.svg?height=200&width=200", sale: true },
  { id: 2, name: 'Shin Ramyun', price: 1.99, category: 'korean', image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: 'Dried Seaweed Snack', price: 3.49, category: 'korean', image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: 'Matcha KitKat', price: 4.99, category: 'japanese', image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: 'Shrimp Crackers', price: 2.49, category: 'chinese', image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: 'Mochi Ice Cream', price: 5.99, category: 'japanese', image: "/placeholder.svg?height=200&width=200", sale: true },
  { id: 7, name: 'Tom Yum Flavored Chips', price: 3.29, category: 'thai', image: "/placeholder.svg?height=200&width=200" },
  { id: 8, name: 'Bubble Tea Kit', price: 9.99, category: 'taiwanese', image: "/placeholder.svg?height=200&width=200" },
  { id: 9, name: 'Wasabi Peas', price: 2.79, category: 'japanese', image: "/placeholder.svg?height=200&width=200" },
  { id: 10, name: 'Honey Butter Chips', price: 3.99, category: 'korean', image: "/placeholder.svg?height=200&width=200" },
  { id: 11, name: 'White Rabbit Candy', price: 2.49, category: 'chinese', image: "/placeholder.svg?height=200&width=200" },
  { id: 12, name: 'Durian Chips', price: 4.49, category: 'thai', image: "/placeholder.svg?height=200&width=200" },
]

const asianRecipes = [
  {
    id: 101,
    name: 'Matcha Mochi Donuts',
    description: 'Chewy Japanese-inspired donuts with a matcha glaze 🇯🇵',
    image: '/images/asian-recipe-1.jpg',
    ingredients: [
      '1 cup mochiko (sweet rice flour)',
      '1/4 cup sugar',
      '1/2 cup milk',
      '1 egg',
      '1 tsp baking powder',
      'Matcha powder for glaze',
      'Powdered sugar'
    ],
    instructions: [
      'Preheat the oven to 350°F (175°C) and grease a donut pan.',
      'In a bowl, mix mochiko, sugar, and baking powder.',
      'In a separate bowl, whisk milk and egg, then add to the dry ingredients. Stir until smooth.',
      'Pour the batter into the donut pan and bake for 15 minutes.',
      'For the glaze, mix powdered sugar with a pinch of matcha powder and enough water to create a thick glaze.',
      'Dip donuts in matcha glaze and let set. Enjoy!'
    ],
    imageUrl : "/images/fusion-recipe-1.jpg"
  },
  {
    id: 102,
    name: 'Korean Honey Butter Chips',
    description: 'Crispy potato chips with a sweet and savory honey butter coating 🇰🇷',
    image: '/images/asian-recipe-2.jpg',
    ingredients: [
      '2 large potatoes, thinly sliced',
      '2 tbsp butter',
      '1 tbsp honey',
      'A pinch of salt',
      'Fresh parsley for garnish (optional)'
    ],
    instructions: [
      'Preheat the oven to 400°F (200°C).',
      'Lay potato slices on a baking sheet lined with parchment paper and bake for 20 minutes, or until golden and crispy.',
      'Melt butter in a saucepan and add honey and salt, stirring until combined.',
      'Drizzle the honey butter mixture over the chips and toss to coat evenly.',
      'Garnish with fresh parsley, if desired, and serve warm.'
    ],
    imageUrl : "/images/fusion-recipe-1.jpg"
  },
  {
    id: 103,
    name: 'Spicy Ramen Snack Mix',
    description: 'A crunchy, spicy snack mix made with broken ramen noodles, nuts, and sesame seeds 🇨🇳',
    image: '/images/asian-recipe-3.jpg',
    ingredients: [
      '1 pack instant ramen noodles, uncooked and broken into pieces',
      '1/2 cup peanuts',
      '1/4 cup sesame seeds',
      '1 tbsp soy sauce',
      '1 tbsp sriracha',
      '1 tbsp sesame oil'
    ],
    instructions: [
      'Preheat the oven to 350°F (175°C).',
      'In a bowl, combine broken ramen noodles, peanuts, and sesame seeds.',
      'In a separate bowl, mix soy sauce, sriracha, and sesame oil. Pour over the dry ingredients and toss to coat.',
      'Spread the mixture on a baking sheet and bake for 10-12 minutes, stirring halfway through, until golden and crispy.',
      'Let cool and enjoy!'
    ],
    imageUrl : "/images/fusion-recipe-1.jpg"
  }
];

const asianFlags = [
  { country: 'China', emoji: '🇨🇳' },
  { country: 'Japan', emoji: '🇯🇵' },
  { country: 'Korea', emoji: '🇰🇷' },
  { country: 'Thailand', emoji: '🇹🇭' },
  { country: 'Vietnam', emoji: '🇻🇳' },
  { country: 'Taiwan', emoji: '🇹🇼' },
]

export default function AsianPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const router = useRouter()
  const recipesSectionRef = useRef<HTMLElement>(null)

  const filteredProducts = asianProducts.filter(product => 
    activeCategory === 'all' || product.category === activeCategory
  )

  useEffect(() => {
    // Handle the scroll after the page has fully loaded
    const handleScroll = () => {
      if (router.query.returnTo === 'recipes' && recipesSectionRef.current) {
        // Add a small delay to ensure the DOM is ready
        setTimeout(() => {
          recipesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    // Call handleScroll when the component mounts or when router.query changes
    handleScroll();

    // Also listen for route changes
    router.events.on('routeChangeComplete', handleScroll);

    return () => {
      router.events.off('routeChangeComplete', handleScroll);
    };
  }, [router.query, router.events]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      <Header 
        categories={asianCategories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/asian.webp"
          alt="Asian Flavors Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-800/60 via-red-700/50 to-yellow-700/60 flex flex-col justify-center items-center text-white p-4 backdrop-blur-[2px]">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-300 mb-4 drop-shadow-lg animate-pulse" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              アジアの味
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8 drop-shadow-md" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              Discover the Exquisite Flavors of Asia
            </p>
            <Button 
              size="lg" 
              className="bg-red-700 text-yellow-300 hover:bg-red-800 hover:text-yellow-200 transition-colors duration-300 transform hover:scale-105 border-2 border-yellow-400"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              Explore Now
            </Button>
          </div>
        </div>
        {/* Asian Flags */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {asianFlags.map((flag) => (
            <span key={flag.country} className="text-4xl animate-bounce" style={{animationDelay: `${Math.random()}s`}}>
              {flag.emoji}
            </span>
          ))}
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Featured Asian Products */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-800 flex items-center justify-center" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            <TrendingUp className="mr-2 h-8 w-8 text-red-600" />
            Trending Asian Snacks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 8).map((product) => (
              <Card key={product.id} className="group overflow-hidden border-2 border-yellow-300 hover:border-yellow-500 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.sale && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm font-bold animate-pulse">
                      Hot Deal
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-red-800" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                  <p className="text-lg font-bold text-yellow-600">${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white hover:from-red-700 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Asian Recipes Section */}
        <section id="recipes" ref={recipesSectionRef} className="mb-12 bg-gradient-to-r from-red-100 to-yellow-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600 flex items-center justify-center" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            <ChefHat className="mr-2 h-8 w-8 text-red-600" />
            Authentic Asian Recipes
          </h2>
          <p className="text-red-800 mb-6 text-center" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            Discover the rich flavors of Asia with our easy-to-make recipes!
          </p>
          <Tabs defaultValue={asianRecipes[0].id.toString()} className="w-full">
            {/* Mobile view: Scrollable horizontal list */}
            <div className="md:hidden">
              <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                <TabsList className="w-full flex">
                  {asianRecipes.map((recipe) => (
                    <TabsTrigger 
                      key={recipe.id} 
                      value={recipe.id.toString()}
                      className="flex-shrink-0 px-4"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      {recipe.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </ScrollArea>
            </div>
            
            {/* Desktop view: Grid layout */}
            <div className="hidden md:block">
              <TabsList className="grid w-full grid-cols-3">
                {asianRecipes.map((recipe) => (
                  <TabsTrigger key={recipe.id} value={recipe.id.toString()} style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {recipe.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {asianRecipes.map((recipe) => (
              <TabsContent key={recipe.id} value={recipe.id.toString()}>
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle style={{ fontFamily: "'Noto Serif JP', serif" }}>{recipe.name}</CardTitle>
                    <CardDescription>{recipe.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="relative w-full h-0 pb-[100%] md:pb-[75%]">
                        <Image
                          src={recipe.imageUrl}
                          alt={recipe.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-red-800" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>Ingredients</h3>
                          <ScrollArea className="h-40 rounded-md border p-4 bg-yellow-50">
                            <ul className="list-disc pl-5 space-y-1 text-red-700">
                              {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          </ScrollArea>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-red-800" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>Instructions</h3>
                          <ScrollArea className="h-40 rounded-md border p-4 bg-yellow-50">
                            <ol className="list-decimal pl-5 space-y-1 text-red-700">
                              {recipe.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                              ))}
                            </ol>
                          </ScrollArea>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
    <Link 
      href={{
        pathname: `/recipes/${recipe.id}`,
        query: { returnTo: 'recipes' }
      }} 
      passHref
    >
      <Button variant="outline" className="w-full sm:w-auto flex items-center text-red-600 border-red-600 hover:bg-red-50">
        <ExternalLink className="w-4 h-4 mr-2" />
        View Full Recipe
      </Button>
    </Link>
                    <Button variant="default" className="w-full sm:w-auto flex items-center bg-gradient-to-r from-red-600 to-yellow-500 text-white hover:from-red-700 hover:to-yellow-600">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add Ingredients to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
          <div className="text-center mt-6">
            <Button 
              className="px-6 py-2 text-lg font-semibold bg-gradient-to-r from-red-600 to-yellow-500 text-white hover:from-red-700 hover:to-yellow-600 transition-all duration-300"
              onClick={() => window.location.href='/recipes'}
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              View All Recipes
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>Stay Updated on Asian Flavors</h2>
            <p className="mb-6" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>Subscribe to our newsletter for the latest Asian snack news and exclusive offers!</p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-64 bg-white text-red-800 placeholder-red-400"
                required
              />
              <Button type="submit" className="w-full sm:w-auto bg-green-700 text-white hover:bg-green-800 transform hover:scale-105 transition-all duration-300" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}