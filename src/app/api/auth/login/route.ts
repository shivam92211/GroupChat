// src/app/api/auth/login/route.ts


import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import  prisma  from '../../../../lib/prisma'; 

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; 

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h', // Set token expiration
    });

    // Return response
    return NextResponse.json({ message: 'Login successful!', token }, { status: 200 });
  } catch (error) {
    console.error('Error in login route:', error);
    return NextResponse.json({ message: 'Internal Server Error.' }, { status: 500 });
  }
}
