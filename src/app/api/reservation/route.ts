import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'date', 'time', 'guests']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log the reservation data (in a real app, you'd save this to a database)
    console.log('New reservation:', {
      ...body,
      timestamp: new Date().toISOString(),
    })

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email to customer
    // 3. Send notification to restaurant staff
    // 4. Check availability and confirm reservation

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { 
        message: 'Reservation received successfully! We will contact you shortly to confirm.',
        reservationId: Math.random().toString(36).substr(2, 9)
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Reservation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
