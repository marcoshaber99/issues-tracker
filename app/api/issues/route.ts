import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

// Define the schema for the body
const createIssueSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(1000),
});

export async function POST(request: NextRequest) {
  //body
  const body = await request.json();

  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
