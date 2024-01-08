import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from "next";
//prisma
//import { PrismaClient, Prisma } from '@prisma/client'
//const prisma = new PrismaClient()
//Next cors

const url = 'https://jsonplaceholder.typicode.com/comments?postId=1'



export async function GET (req: NextApiRequest, res: NextApiResponse){
  const response = await fetch(url)
  console.log(response)

  return NextResponse.json(response)
}

export async function POST(req: NextApiRequest, res: NextApiResponse){
  //const body = await req

  return NextResponse.json({message: "el post funciona correctamente"})
}

export function PUT(req: NextApiRequest, res: NextApiResponse){

  return NextResponse.json({message: "estamos en PUT"})
}

export function DELETE(req: NextApiRequest, res: NextApiResponse){

  return NextResponse.json({message: "DELETE!!!!!!!!!"})
}
