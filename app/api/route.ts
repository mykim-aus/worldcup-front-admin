import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  console.log(data);

  return NextResponse.json({ data });
}

/**
 * @swagger
 * /post:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */
export async function POST() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  console.log(data);

  return NextResponse.json({ data });
}
