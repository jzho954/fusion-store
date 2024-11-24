import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import Stripe from 'stripe'


const prisma = new PrismaClient()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-10-28.acacia',
})



export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { items } = body

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}




