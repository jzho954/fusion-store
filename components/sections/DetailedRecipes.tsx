import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ExternalLink, ChefHat, ArrowRight } from 'lucide-react'

interface Recipe {
  id: number
  name: string
  description: string
  imageUrl: string
  ingredients: {
    id: number
    name: string
    amount: string
    unit: string
  }[]
  instructions: {
    id: number
    stepNumber: number
    instruction: string
  }[]
}



export function DetailedRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/recipes')
        if (!response.ok) {
          throw new Error('Failed to fetch recipes')
        }
        const data = await response.json()
        setRecipes(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load recipes')
        console.error('Error fetching recipes:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  if (isLoading) {
    return <div>Loading recipes...</div>
  }

  if (error) {
    return <div>Error loading recipes: {error}</div>
  }

  if (!recipes.length) {
    return <div>No recipes found</div>
  }
  return (
    <section className="my-12">
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        <ChefHat className="mr-2 h-8 w-8 text-yellow-300 animate-bounce" />
        Fusion Recipes
      </h2>
      <p className="text-center text-lg text-purple-700 mb-8">Exciting fusion flavors to try at home!</p>
      <Tabs defaultValue={recipes[0].id.toString()} className="w-full">
        <div className="md:hidden">
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <TabsList className="w-full flex">
              {recipes.slice(0,3).map((recipe) => (
                <TabsTrigger key={recipe.id} value={recipe.id.toString()} className="flex-shrink-0 px-4">
                  {recipe.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollArea>
        </div>
        
        <div className="hidden md:block">
          <TabsList className="grid w-full grid-cols-3">
            {recipes.slice(0,3).map((recipe) => (
              <TabsTrigger key={recipe.id} value={recipe.id.toString()}>
                {recipe.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {recipes.map((recipe) => (
          <TabsContent key={recipe.id} value={recipe.id.toString()}>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle>{recipe.name}</CardTitle>
                <CardDescription>{recipe.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative w-full h-0 pb-[100%] md:pb-[75%]">
                    <Image
                      src={recipe.imageUrl}
                      alt={recipe.name}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-purple-700">Ingredients</h3>
                      <ScrollArea className="h-40 rounded-md border p-4">
                        <ul className="list-disc pl-5 space-y-1">
                          {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient.id}>
                              {ingredient.amount} {ingredient.unit} {ingredient.name}
                            </li>
                          ))}
                        </ul>
                      </ScrollArea>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-purple-700">Instructions</h3>
                      <ScrollArea className="h-40 rounded-md border p-4">
                        <ol className="list-decimal pl-5 space-y-1">
                          {recipe.instructions.map((instruction) => (
                            <li key={instruction.id}>{instruction.instruction}</li>
                          ))}
                        </ol>
                      </ScrollArea>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
                <Link href={`/recipes/${recipe.id}`} passHref>
                  <Button variant="outline" className="w-full sm:w-auto flex items-center text-purple-600 border-purple-600 hover:bg-purple-50">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Full Recipe
                  </Button>
                </Link>
                <Button variant="default" className="w-full sm:w-auto flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600">
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
          className="px-6 py-2 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
          onClick={() => window.location.href='/recipes'}
        >
          View All Recipes
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}