import React, { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {  Music } from 'lucide-react'
const recipesWithTiktok = [
  {
    id: 1,
    name: 'Mochi Churro Ice Cream Sandwich',
    description: 'A chewy, sweet fusion of Japanese mochi and Latin American churros.',
    tiktokEmbed: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@snackpass/video/7306290825170930986" data-video-id="7306290825170930986" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@snackpass" href="https://www.tiktok.com/@snackpass?refer=embed">@snackpass</a> Churro ice cream sandwiches are where it's at <a title="churros" target="_blank" href="https://www.tiktok.com/tag/churros?refer=embed">#churros</a> <a target="_blank" title="♬ original sound - snackpass" href="https://www.tiktok.com/music/original-sound-7306290899854674730?refer=embed">♬ original sound - snackpass</a> </section> </blockquote>`
  },
  {
    id: 2,
    name: 'Matcha Horchata Latte',
    description: 'A refreshing fusion drink that blends Japanese matcha and Mexican horchata.',
    tiktokEmbed: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@matchakari/video/7232501339794722094" data-video-id="7232501339794722094" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@matchakari" href="https://www.tiktok.com/@matchakari?refer=embed">@matchakari</a> Matcha Horchata to celebrate the weekend! <a target="_blank" title="♬ Bounce When She Walk - Ohboyprince" href="https://www.tiktok.com/music/Bounce-When-She-Walk-7200065594014731054?refer=embed">♬ Bounce When She Walk - Ohboyprince</a> </section> </blockquote>`
  },
  {
    id: 3,
    name: 'Spicy Tamarind Sriracha Popcorn',
    description: 'A spicy and tangy snack with Mexican tamarind candy and Sriracha.',
    tiktokEmbed: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@snacktime/video/7233480412348971000" data-video-id="7233480412348971000" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@snacktime" href="https://www.tiktok.com/@snacktime?refer=embed">@snacktime</a> Spicy Tamarind Sriracha Popcorn <a target="_blank" title="♬ original sound - snacktime" href="https://www.tiktok.com/music/original-sound-7233480412348971000?refer=embed">♬ original sound - snacktime</a> </section> </blockquote>`
  },
]

export function TiktokRecipeSection() {
  useEffect(() => {
    // Load the TikTok embed script
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 flex items-center">
        <Music className="mr-2 h-8 w-8 text-pink-500" />
        TikTok Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipesWithTiktok.slice(0, 3).map((recipe) => (
          <Card key={recipe.id} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>{recipe.name}</CardTitle>
              <p className="text-gray-500">{recipe.description}</p>
            </CardHeader>
            <CardContent>
              <div dangerouslySetInnerHTML={{ __html: recipe.tiktokEmbed }} />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
