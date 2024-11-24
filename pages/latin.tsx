'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Search, ShoppingCart, ChevronRight, Sun, Music, ChefHat, ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ScrollArea } from "@/components/ui/scroll-area"

const latinCategories = [
  { id: 'asian', name: 'See Our Asian Selection' },
  { id: '', name: 'Or Our Fusion' }
]

const latinProducts = [
  { id: 1, name: 'Spicy Tamarind Candy', price: 3.99, category: 'mexican', image: "/placeholder.svg?height=200&width=200", flag: "🇲🇽", sale: true },
  { id: 2, name: 'Guava Pastries', price: 6.99, category: 'brazilian', image: "/placeholder.svg?height=200&width=200", flag: "🇧🇷" },
  { id: 4, name: 'Dulce de Leche', price: 4.99, category: 'colombian', image: "/placeholder.svg?height=200&width=200", flag: "🇨🇴" },
  { id: 5, name: 'Elote Corn Chips', price: 3.49, category: 'mexican', image: "/placeholder.svg?height=200&width=200", flag: "🇲🇽" },
  { id: 6, name: 'Pão de Queijo Mix', price: 7.99, category: 'brazilian', image: "/placeholder.svg?height=200&width=200", flag: "🇧🇷", sale: true },
  { id: 8, name: 'Obleas', price: 3.99, category: 'colombian', image: "/placeholder.svg?height=200&width=200", flag: "🇨🇴" },
  { id: 9, name: 'Chicharrones', price: 4.49, category: 'mexican', image: "/placeholder.svg?height=200&width=200", flag: "🇲🇽" },
  { id: 10, name: 'Brigadeiros', price: 5.99, category: 'brazilian', image: "/placeholder.svg?height=200&width=200", flag: "🇧🇷" },
  { id: 12, name: 'Bocadillo', price: 4.79, category: 'colombian', image: "/placeholder.svg?height=200&width=200", flag: "🇨🇴" },
]

const latinRecipes = [
  {
    id: 200,
    name: 'Arepas with Guava Paste and Cheese',
    description: 'A delicious Colombian-Venezuelan fusion snack 🇨🇴🇻🇪',
    image: "/placeholder.svg?height=300&width=400",
    ingredients: [
      '2 cups pre-cooked cornmeal (Harina PAN)',
      '2 ½ cups warm water',
      '1 teaspoon salt',
      '1 tablespoon vegetable oil',
      'Guava paste (Bocadillo/Membrillo)',
      'Queso fresco or mozzarella cheese'
    ],
    instructions: [
      'In a bowl, mix the pre-cooked cornmeal, warm water, salt, and vegetable oil until a smooth dough forms. Let it rest for 5 minutes.',
      'Divide the dough into equal portions and shape them into flat, round discs about ½ inch thick.',
      'Heat a skillet over medium heat and cook the arepas for 5–7 minutes on each side until golden brown.',
      'Slice the arepas open and fill them with slices of guava paste and cheese.',
      'Serve warm and enjoy this sweet and savory treat.'
    ],
    imageUrl : "/images/fusion-recipe-1.jpg"
  },
  {
    id: 201,
    name: 'Mexican Spicy Tamarind Candy (Pulparindo) Popsicles',
    description: 'A tangy and spicy frozen treat from Mexico 🇲🇽',
    image: "/placeholder.svg?height=300&width=400",
    ingredients: [
      '4 Pulparindo tamarind candies',
      '2 cups water',
      '½ cup sugar',
      'Juice of 2 limes',
      'Tajín chili powder'
    ],
    instructions: [
      'In a saucepan, combine water and sugar. Heat until the sugar dissolves, then let it cool.',
      'Chop the Pulparindo candies into small pieces and add them to the sugar water, stirring until they dissolve.',
      'Add lime juice to the mixture and stir well.',
      'Pour the mixture into popsicle molds and sprinkle a pinch of Tajín chili powder into each mold.',
      'Insert sticks and freeze for at least 4 hours or until solid.',
      'Unmold and enjoy these spicy, tangy popsicles.'
    ],
    imageUrl : "/images/fusion-recipe-1.jpg"
  },
  {
    id: 203,
    name: 'Plantain Chips with Aji Amarillo Dip',
    description: 'A crunchy Peruvian snack with a spicy dip 🇵🇪',
    image: "/placeholder.svg?height=300&width=400",
    ingredients: [
      '2 green plantains',
      'Vegetable oil for frying',
      'Salt to taste',
      'Aji Amarillo paste',
      '½ cup mayonnaise',
      'Juice of 1 lime'
    ],
    instructions: [
      'Peel the plantains and slice them thinly using a mandoline or sharp knife.',
      'Heat vegetable oil in a deep pan over medium-high heat.',
      'Fry the plantain slices in batches until golden and crispy. Remove and drain on paper towels. Season with salt.',
      'In a bowl, mix Aji Amarillo paste, mayonnaise, and lime juice until well combined.',
      'Serve the plantain chips with the Aji Amarillo dip on the side.'
    ],
    imageUrl : "/images/fusion-recipe-1.jpg"
  }
]

export default function LatinPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const router = useRouter()
  const recipesSectionRef = useRef<HTMLElement>(null)

  const filteredProducts = latinProducts.filter(product => 
    activeCategory === 'all' || product.category === activeCategory
  )

  useEffect(() => {
    if (router.query.scrollTo === 'recipes' && recipesSectionRef.current) {
      recipesSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [router.query])

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50">
      <Header 
        categories={latinCategories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/latino.webp"
          alt="Latin Flavors Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/60 via-green-600/50 to-green-500/60 flex flex-col justify-center items-center text-white p-4 backdrop-blur-[2px]">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg animate-pulse" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Sabores Latinos
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8 drop-shadow-md" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Discover the Rich Flavors of Latin America
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-500 text-green-800 hover:bg-yellow-400 hover:text-green-900 transition-colors duration-300 transform hover:scale-105 border-2 border-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Explore Now
            </Button>
          </div>
        </div>
        {/* Latin American Flags */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {Array.from(new Set(latinProducts.map(product => product.flag))).map((flag, index) => (
            <span key={index} className="text-4xl animate-bounce" style={{animationDelay: `${Math.random()}s`}}>
              {flag}
            </span>
          ))}
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Featured Latin Products */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800 flex items-center justify-center" style={{ fontFamily: "'Dancing Script', cursive" }}>
            <Sun className="mr-2 h-8 w-8 text-yellow-500" />
            Featured Latin Snacks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 4).map((product) => (
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
                      ¡Oferta!
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-green-800" style={{ fontFamily: "'Poppins', sans-serif" }}>{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.category} {product.flag}</p>
                  <p className="text-lg font-bold text-yellow-600">${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-green-500 text-white hover:from-yellow-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* View All Products Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800 flex items-center justify-center" style={{ fontFamily: "'Dancing Script', cursive" }}>
            <Music className="mr-2 h-8 w-8 text-yellow-500" />
            More Latin Delights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {latinProducts.slice(4).map((product) => (
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
                      ¡Oferta!
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-green-800" style={{ fontFamily: "'Poppins', sans-serif" }}>{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.category} {product.flag}</p>
                  <p className="text-lg font-bold text-yellow-600">${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-green-500 text-white hover:from-yellow-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/all-products">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-green-500 text-white hover:from-yellow-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300">
                View All Products
              </Button>
            </Link>
          </div>
        </section>

        {/* Latin Recipes Section */}
        <section id="recipes" ref={recipesSectionRef} className="mb-12 bg-gradient-to-r from-yellow-100 to-green-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-green-600 flex items-center justify-center" style={{ fontFamily: "'Dancing Script', cursive" }}>
            <ChefHat className="mr-2 h-8 w-8 text-yellow-500" />
            Authentic Latin Recipes
          </h2>
          <p className="text-green-800 mb-6 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Discover the rich flavors of Latin America with our easy-to-make recipes!
          </p>
          <Tabs defaultValue={latinRecipes[0].id.toString()} className="w-full">
            {/* Mobile view: Scrollable horizontal list */}
            <div className="md:hidden">
              <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                <TabsList className="w-full flex">
                  {latinRecipes.map((recipe) => (
                    <TabsTrigger 
                      key={recipe.id} 
                      value={recipe.id.toString()}
                      className="flex-shrink-0 px-4"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
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
                {latinRecipes.map((recipe) => (
                  <TabsTrigger key={recipe.id} value={recipe.id.toString()} style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {recipe.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {latinRecipes.map((recipe) => (
              <TabsContent key={recipe.id} value={recipe.id.toString()}>
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle style={{ fontFamily: "'Dancing Script', cursive" }}>{recipe.name}</CardTitle>
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
                          <h3 className="text-lg font-semibold mb-2 text-green-800" style={{ fontFamily: "'Poppins', sans-serif" }}>Ingredients</h3>
                          <ScrollArea className="h-40 rounded-md border p-4 bg-yellow-50">
                            <ul className="list-disc pl-5 space-y-1 text-green-700">
                              {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          </ScrollArea>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-green-800" style={{ fontFamily: "'Poppins', sans-serif" }}>Instructions</h3>
                          <ScrollArea className="h-40 rounded-md border p-4 bg-yellow-50">
                            <ol className="list-decimal pl-5 space-y-1 text-green-700">
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
                    <Link href={`/recipes/${recipe.id}?returnTo=latin`} passHref>
                      <Button variant="outline" className="w-full sm:w-auto flex items-center text-green-600 border-green-600 hover:bg-green-50">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Full Recipe
                      </Button>
                    </Link>
                    <Button variant="default" className="w-full sm:w-auto flex items-center bg-gradient-to-r from-yellow-500 to-green-500 text-white hover:from-yellow-600 hover:to-green-600">
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
              className="px-6 py-2 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-green-500 text-white hover:from-yellow-600 hover:to-green-600 transition-all duration-300"
              onClick={() => window.location.href='/recipes'}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              View All Recipes
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-yellow-500 to-green-500 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>Stay Updated on Latin Flavors</h2>
            <p className="mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Subscribe to our newsletter for the latest Latin snack news and exclusive offers!</p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-64 bg-white text-green-800 placeholder-green-400"
                required
              />
              <Button type="submit" className="w-full sm:w-auto bg-green-700 text-white hover:bg-green-800 transform hover:scale-105 transition-all duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Subscribe
              </Button>
            </form>
          </div>
        </section>

        {/* Asian Section Link */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-800 flex items-center justify-center" style={{ fontFamily: "'Dancing Script', cursive" }}>
            <Sun className="mr-2 h-8 w-8 text-yellow-500" />
            Explore Asian Flavors
          </h2>
          <Link href="/asian">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-green-500 text-white hover:from-yellow-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Discover Asian Snacks
            </Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}