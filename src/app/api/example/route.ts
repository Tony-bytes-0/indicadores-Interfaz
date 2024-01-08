import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from "next";

import {conn} from '@/database/database'

type Data = {
  message: string; time: string; 
}

export async function GET(req: NextApiRequest, res: NextApiResponse){

  const response = await conn.query('SELECT NOW()')

  return NextResponse.json({message: "texto aqui", time: response.rows[0].now })
}

