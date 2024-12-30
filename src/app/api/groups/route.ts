import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Import your Prisma client
import { getUserIdFromToken } from "../../../utils/auth"; // Utility to get user ID from token

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const { name, description } = body;

    if (!name || name.trim() === "") {
      return NextResponse.json({ error: "Group name is required" }, { status: 400 });
    }

    // Get user ID from token
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = getUserIdFromToken(token);
    if (!userId) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
    }

    // Verify if the user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create the group
    const group = await prisma.group.create({
      data: {
        name,
        description: description || null,
        creatorId: userId, // Set the creator of the group
        members: {
          create: {
            userId: userId,
          },
        },
        admins: {
          create: {
            userId: userId,
          },
        },
      },
    });

    return NextResponse.json(group, { status: 201 });
  } catch (error) {
    console.error("Error creating group:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
