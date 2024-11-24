import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/types";
import { TrendingUp, Flame } from 'lucide-react';

interface BestSellersProps {
  products: Product[];
  
}


export function BestSellers({ products }: BestSellersProps) {
  return (
    <section className="mb-12">
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
        <TrendingUp className="mr-2 h-8 w-8 text-yellow-300 animate-pulse" />
        Best Sellers
      </h2>
      <p className="text-center text-lg text-purple-700 mb-8">Discover our top-selling fusion flavors!</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0,4).map(product => (
          <Card key={product.id} className="relative overflow-hidden group shadow-lg rounded-lg">
            <CardContent className="p-4">
              <div className="relative h-[200px] mb-4 overflow-hidden rounded-md bg-white">
                <img
                  src={`/placeholder.svg?height=200&width=200&text=${product.name}`}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-purple-800">{product.name}</h3>
              <p className="text-pink-600 font-bold">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Add to Cart
              </Button>
            </CardFooter>
<Badge className="absolute top-2 right-2 overflow-hidden bg-gradient-to-r from-yellow-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
              <Flame className="inline-block mr-1 h-4 w-4" />
              HOT
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
}
