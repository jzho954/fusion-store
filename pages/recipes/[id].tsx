import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { ArrowLeft, Heart, Share2, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from an API or database
const recipes = [
  {
    id: 1,
    name: 'Mochi Churro Ice Cream Sandwich',
    description: 'A chewy, sweet fusion of Japanese mochi and Latin American churros, paired with a refreshing scoop of ice cream.',
    imageUrl: '/images/fusion-recipe-1.jpg',
    ingredients: [
      '2-3 Mochi balls (any flavor, typically strawberry or matcha works well)',
      'Churro strips or mini churros',
      'Vanilla or coconut ice cream',
      'Cinnamon powder (for dusting)',
      'Chocolate or caramel sauce (optional)'
    ],
    instructions: [
      'Slightly warm the churro strips if they\'re cold, or use freshly made churros.',
      'Flatten the mochi balls gently with your hands to create a small "bun."',
      'Place a small scoop of ice cream on one mochi layer, top with a churro strip, and add another flattened mochi on top to create a sandwich.',
      'Dust with cinnamon powder and drizzle with chocolate or caramel sauce if desired.',
      'Enjoy immediately as a handheld fusion dessert!'
    ],
    tiktokEmbed: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@snackpass/video/7306290825170930986" data-video-id="7306290825170930986" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@snackpass" href="https://www.tiktok.com/@snackpass?refer=embed">@snackpass</a> Cookie sandwich who? Churro ice cream sandwiches are where it's at @La Churreria  <a title="churros" target="_blank" href="https://www.tiktok.com/tag/churros?refer=embed">#churros</a> <a title="icecreamsandwich" target="_blank" href="https://www.tiktok.com/tag/icecreamsandwich?refer=embed">#icecreamsandwich</a> <a title="nyc" target="_blank" href="https://www.tiktok.com/tag/nyc?refer=embed">#nyc</a> <a title="nolita" target="_blank" href="https://www.tiktok.com/tag/nolita?refer=embed">#nolita</a> <a title="nycfood" target="_blank" href="https://www.tiktok.com/tag/nycfood?refer=embed">#nycfood</a> <a title="lachurreria" target="_blank" href="https://www.tiktok.com/tag/lachurreria?refer=embed">#lachurreria</a> <a title="snackpass" target="_blank" href="https://www.tiktok.com/tag/snackpass?refer=embed">#snackpass</a> <a target="_blank" title="♬ original sound - snackpass" href="https://www.tiktok.com/music/original-sound-7306290899854674730?refer=embed">♬ original sound - snackpass</a> </section> </blockquote>`
  },
  {
    id: 2,
    name: 'Spicy Tamarind Sriracha Popcorn',
    description: 'A spicy and tangy snack that combines Mexican tamarind candy and Sriracha for a bold fusion popcorn.',
    imageUrl: '/images/fusion-recipe-2.jpg',
    ingredients: [
      '1 bag of plain or lightly salted popcorn',
      '2-3 pieces of tamarind candy (Mexican spicy tamarind candy works well)',
      '1-2 tsp Sriracha sauce',
      '1 tbsp butter or coconut oil (for melting the tamarind candy)',
      '1/4 tsp chili powder (optional, for extra spice)'
    ],
    instructions: [
      'Melt the butter or coconut oil in a small saucepan over low heat.',
      'Add the tamarind candy to the pan, stirring until it melts and blends with the butter/oil. This may take a few minutes.',
      'Add a few drops of Sriracha sauce and mix well to create a spicy, tangy sauce.',
      'Pour the tamarind-Sriracha mixture over the popcorn and toss to coat evenly.',
      'Sprinkle with a pinch of chili powder for an extra kick, if desired. Serve warm.'
    ]
  },
  {
    id: 3,
    name: 'Matcha Horchata Latte',
    description: 'A refreshing fusion drink that blends the earthy flavors of Japanese matcha with the creamy, cinnamon-infused Mexican horchata.',
    imageUrl: '/images/fusion-recipe-3.webp',
    ingredients: [
      '1 cup horchata (homemade or store-bought)',
      '1 tsp matcha powder',
      '1/4 cup hot water (not boiling, around 175°F or 80°C)',
      'Ice cubes',
      'Cinnamon powder (for garnish)'
    ],
    instructions: [
      'Prepare matcha by whisking the matcha powder with hot water until smooth and slightly frothy.',
      'Fill a glass with ice cubes and pour horchata over the ice until the glass is about 3/4 full.',
      'Slowly pour the prepared matcha over the horchata to create a layered effect.',
      'Sprinkle a pinch of cinnamon powder on top for garnish.',
      'Stir before drinking and enjoy the creamy, earthy, and spiced fusion!'
    ],
    tiktokEmbed: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@matchakari/video/7232501339794722094" data-video-id="7232501339794722094" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@matchakari" href="https://www.tiktok.com/@matchakari?refer=embed">@matchakari</a> Matcha Horchata to celebrate the weekend! <a title="matchatok" target="_blank" href="https://www.tiktok.com/tag/matchatok?refer=embed">#matchatok</a> <a title="matchadrinklovers" target="_blank" href="https://www.tiktok.com/tag/matchadrinklovers?refer=embed">#matchadrinklovers</a> <a title="drinksomematcha" target="_blank" href="https://www.tiktok.com/tag/drinksomematcha?refer=embed">#drinksomematcha</a> <a title="matchacafe" target="_blank" href="https://www.tiktok.com/tag/matchacafe?refer=embed">#matchacafe</a> <a title="matchalattelovers" target="_blank" href="https://www.tiktok.com/tag/matchalattelovers?refer=embed">#matchalattelovers</a> <a title="matchalatterecipe" target="_blank" href="https://www.tiktok.com/tag/matchalatterecipe?refer=embed">#matchalatterecipe</a> <a target="_blank" title="♬ Bounce When She Walk - Ohboyprince" href="https://www.tiktok.com/music/Bounce-When-She-Walk-7200065594014731054?refer=embed">♬ Bounce When She Walk - Ohboyprince</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`
  },
  
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
    },
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
    
  
  
]

export default function FullRecipe() {
  const router = useRouter()
  const { id } = router.query

  const recipe = recipes.find(r => r.id === Number(id))

  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <>
      <Head>
        <title>{recipe.name} | Fusion Recipes</title>
        <meta name="description" content={recipe.description} />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <Button variant="ghost" onClick={() => router.back()}>
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-bold text-center flex-1">{recipe.name}</h1>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Heart className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{recipe.name}</CardTitle>
              <CardDescription>{recipe.description}</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="relative w-full h-0 pb-[30%] mb-4">
                <Image
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                  <ScrollArea className="h-48 rounded-md border p-4">
                    <ul className="list-disc pl-5 space-y-1">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
                  <ScrollArea className="h-48 rounded-md border p-4">
                    <ol className="list-decimal pl-5 space-y-1">
                      {recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ol>
                  </ScrollArea>
                </div>
              </div>
            </CardContent>
          </Card>

          {recipe.tiktokEmbed && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Video Review</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-w-16 aspect-h-9">
                  <div dangerouslySetInnerHTML={{ __html: recipe.tiktokEmbed }} />
                </div>
              </CardContent>
            </Card>
          )}

          <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg p-4 flex justify-center">
            <Button className="w-auto max-w-xs flex items-center justify-center py-2 px-4 text-base">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add Ingredients to Cart
            </Button>
          </div>

        </main>
      </div>
    </>
  )
}