'use client'

import { useState, useEffect } from 'react'
import { Search, ShoppingCart, TrendingUp, Music } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BestSellers } from "@/components/sections/BestSellers"

import { AllProducts } from "@/components/sections/AllProducts"
import { Header } from "@/components/Header"
import { FeaturedBanner } from "@/components/FeaturedBanner"
import { Footer } from "@/components/Footer"
import { DetailedRecipes } from './sections/DetailedRecipes'
import { TiktokRecipeSection } from './sections/TiktokRecipeSection '
export function StoreLayout() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState<string | null>(null)

  const categories = [
    { id: '', name: 'Fusion Flavors' },
    { id: 'latin', name: 'Latin Flavors' },
    { id: 'asian', name: 'Asian Flavors' },
   
  ]

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/products')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        const error = err instanceof Error ? err.message : 'An unknown error occurred'
        setError(error)
        console.error('Error fetching products:', err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (error) {
    return <div>Error loading products: {error}</div>
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100">
      <Header 
        categories={categories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
      />
      <FeaturedBanner />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          
          
        </div>

        <BestSellers products={products} />
        
        <div className="my-12 border-t-4 border-dashed border-purple-300"></div>
        
        {/* <Recipes recipes={recipes} /> */}
        <DetailedRecipes />
        
        <div className="my-12 border-t-4 border-dashed border-purple-300"></div>
        
        <AllProducts 
          products={products} 
          activeCategory={activeCategory} 
          categories={categories}
        />

        <TiktokRecipeSection />
        
        
      </main>
      <Footer/>
    </div>
  )
}