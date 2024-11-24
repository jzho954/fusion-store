import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const recipes = await prisma.recipe.findMany({
      include: {
        ingredients: true,
        instructions: {
          orderBy: {
            stepNumber: 'asc'
          }
        }
      }
    })
    return NextResponse.json(recipes)
  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch recipes' },
      { status: 500 }
    )
  }
}