import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.recipeIngredient.deleteMany()
  await prisma.recipeInstruction.deleteMany()
  await prisma.recipe.deleteMany()
  // Clear existing data
  await prisma.product.deleteMany()

  // Add your existing products
  await prisma.product.createMany({
    data: [
      {
        name: "New Dorito",
        price: 4.99,
        category: "chips",
        description: "Nacho Cheese Flavored Tortilla Chips",
        imageUrl: "/images/doritos.jpg"
      },
      {
        name: "Lays",
        price: 4.99,
        category: "chips",
        description: "Classic Potato Chips",
        imageUrl: "/images/lays.jpg"
      },
      {
        name: "Pringles",
        price: 4.99,
        category: "chips",
        description: "Original Potato Crisps",
        imageUrl: "/images/pringles.jpg"
      },
      {
        name: "Cheetos",
        price: 4.99,
        category: "chips",
        description: "Crunchy Cheese Flavored Snacks",
        imageUrl: "/images/cheetos.jpg"
      },
      {
        name: "Snickers",
        price: 2.99,
        category: "chocolate",
        description: "Chocolate Bar with Peanuts, Caramel and Nougat",
        imageUrl: "/images/snickers.jpg"
      },
      {
        name: "M&Ms",
        price: 2.99,
        category: "chocolate",
        description: "Milk Chocolate Candies",
        imageUrl: "/images/m&ms.jpg"
      },
      {
        name: "KitKat",
        price: 2.99,
        category: "chocolate",
        description: "Crisp Wafer Bar covered in Chocolate",
        imageUrl: "/images/kitkat.jpg"
      },
      {
        name: "Twix",
        price: 2.99,
        category: "chocolate",
        description: "Cookie Bars covered in Caramel and Chocolate",
        imageUrl: "/images/twix.jpg"
      },
      {
        name: "Coca Cola",
        price: 1.99,
        category: "drinks",
        description: "Classic Carbonated Soft Drink",
        imageUrl: "/images/coke.jpg"
      },
      {
        name: "Pepsi",
        price: 1.99,
        category: "drinks",
        description: "Carbonated Soft Drink",
        imageUrl: "/images/pepsi.jpg"
      },
      {
        name: "Sprite",
        price: 1.99,
        category: "drinks",
        description: "Lemon-Lime Flavored Soft Drink",
        imageUrl: "/images/sprite.jpg"
      },
      {
        name: "Fanta",
        price: 1.99,
        category: "drinks",
        description: "Orange Flavored Soft Drink",
        imageUrl: "/images/fanta.jpg"
      }
    ]
  })
  for (const recipe of recipeData) {
    await prisma.recipe.create({
      data: {
        name: recipe.name,
        description: recipe.description,
        imageUrl: recipe.imageUrl,
        featured: recipe.featured,
        category: recipe.category,
        difficulty: recipe.difficulty,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        servings: recipe.servings,
        ingredients: {
          create: recipe.ingredients.create
        },
        instructions: {
          create: recipe.instructions.create
        }
      }
    })
  }

  console.log('Database has been seeded! 🌱')
}

const recipeData = [
    {
      name: 'Mochi Churro Ice Cream Sandwich',
      description: 'A chewy, sweet fusion of Japanese mochi and Latin American churros, filled with creamy vanilla ice cream',
      imageUrl: '/images/fusion-recipe-1.jpg',
      featured: true,
      category: 'fusion',
      difficulty: 'medium',
      prepTime: 30,
      cookTime: 15,
      servings: 4,
      ingredients: {
        create: [
          { name: 'Mochi balls', amount: '2-3', unit: 'pieces' },
          { name: 'Churro strips', amount: '4', unit: 'pieces' },
          { name: 'Vanilla ice cream', amount: '1', unit: 'cup' },
          { name: 'Cinnamon sugar', amount: '1/4', unit: 'cup' },
          { name: 'Chocolate sauce', amount: '2', unit: 'tbsp' }
        ]
      },
      instructions: {
        create: [
          { stepNumber: 1, instruction: 'Warm the churro strips in the oven at 350°F for 2-3 minutes' },
          { stepNumber: 2, instruction: 'Flatten each mochi ball into a disc shape' },
          { stepNumber: 3, instruction: 'Place a scoop of vanilla ice cream between two mochi discs' },
          { stepNumber: 4, instruction: 'Roll the edges in cinnamon sugar' },
          { stepNumber: 5, instruction: 'Wrap a warm churro strip around the sandwich' },
          { stepNumber: 6, instruction: 'Drizzle with chocolate sauce and serve immediately' }
        ]
      }
    },
    {
      name: 'Spicy Tamarind Sriracha Popcorn',
      description: 'A spicy and tangy snack that combines Mexican tamarind candy and Sriracha for a bold fusion popcorn.',
      imageUrl: '/images/fusion-recipe-2.jpg',
      featured: true,
      category: 'fusion',
      difficulty: 'easy',
      prepTime: 15,
      cookTime: 10,
      servings: 2,
      ingredients: {
        create: [
          { name: 'Popcorn', amount: 'x', unit: 'cup' },
          { name: 'Tamarind candy', amount: '2-3', unit: 'pieces' },
          { name: 'Sriracha sauce', amount: '1-2', unit: 'tbsp' },
          { name: 'butter or coconut oil', amount: '1', unit: 'tbsp' },
          { name: '1/4 tsp chili powder (optional, for extra spice)', amount: '1', unit: 'tbsp' }
        ]
      },
      instructions: {
        create: [
          { stepNumber: 1, instruction: 'Melt the butter or coconut oil in a small saucepan over low heat.' },
          { stepNumber: 2, instruction: 'Add the tamarind candy to the pan, stirring until it melts and blends with the butter/oil. This may take a few minutes.'},
          { stepNumber: 3, instruction: 'Add a few drops of Sriracha sauce and mix well to create a spicy, tangy sauce' },
          { stepNumber: 4, instruction: 'Pour the tamarind-Sriracha mixture over the popcorn and toss to coat evenly.'},
          { stepNumber: 5, instruction: 'Sprinkle with a pinch of chili powder for an extra kick, if desired. Serve warm.' }
        ]
      }
    },
    {
      name: 'Sushi Burrito',
      description: 'Giant sushi roll wrapped like a burrito with Mexican-inspired fillings',
      imageUrl: '/images/fusion-recipe-3.jpg',
      featured: true,
      category: 'fusion',
      difficulty: 'medium',
      prepTime: 45,
      cookTime: 15,
      servings: 2,
      ingredients: {
        create: [
          { name: 'Sushi rice', amount: '2', unit: 'cups' },
          { name: 'Nori sheets', amount: '2', unit: 'large sheets' },
          { name: 'Seared tuna', amount: '8', unit: 'oz' },
          { name: 'Avocado', amount: '1', unit: 'whole' },
          { name: 'Jalapeño', amount: '1', unit: 'piece' },
          { name: 'Cilantro', amount: '1/4', unit: 'cup' },
          { name: 'Chipotle mayo', amount: '3', unit: 'tbsp' }
        ]
      },
      instructions: {
        create: [
          { stepNumber: 1, instruction: 'Prepare sushi rice according to package instructions' },
          { stepNumber: 2, instruction: 'Sear tuna and slice into strips' },
          { stepNumber: 3, instruction: 'Slice avocado and jalapeño' },
          { stepNumber: 4, instruction: 'Place nori sheet on bamboo mat, cover with rice' },
          { stepNumber: 5, instruction: 'Layer tuna, avocado, jalapeño, and cilantro' },
          { stepNumber: 6, instruction: 'Drizzle with chipotle mayo' },
          { stepNumber: 7, instruction: 'Roll tightly using bamboo mat and seal edges with water' }
        ]
      }
    },
    {
      name: 'Thai Curry Pizza',
      description: 'Italian pizza base with creamy Thai green curry sauce and fusion toppings',
      imageUrl: '/images/fusion-recipe-4.jpg',
      featured: true,
      category: 'fusion',
      difficulty: 'hard',
      prepTime: 40,
      cookTime: 20,
      servings: 4,
      ingredients: {
        create: [
          { name: 'Pizza dough', amount: '1', unit: 'ball' },
          { name: 'Thai green curry paste', amount: '3', unit: 'tbsp' },
          { name: 'Coconut milk', amount: '1/2', unit: 'cup' },
          { name: 'Mozzarella cheese', amount: '2', unit: 'cups' },
          { name: 'Chicken breast', amount: '1', unit: 'piece' },
          { name: 'Bell peppers', amount: '2', unit: 'pieces' },
          { name: 'Thai basil', amount: '1/4', unit: 'cup' }
        ]
      },
      instructions: {
        create: [
          { stepNumber: 1, instruction: 'Preheat oven to 450°F with pizza stone' },
          { stepNumber: 2, instruction: 'Mix curry paste with coconut milk for sauce' },
          { stepNumber: 3, instruction: 'Roll out pizza dough and spread curry sauce' },
          { stepNumber: 4, instruction: 'Top with cooked chicken, peppers, and cheese' },
          { stepNumber: 5, instruction: 'Bake for 15-20 minutes until crust is golden' },
          { stepNumber: 6, instruction: 'Garnish with fresh Thai basil' }
        ]
      }
    }
  ]





main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })