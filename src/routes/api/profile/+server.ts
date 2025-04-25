import { PrismaClient } from '@prisma/client';
import { json, type RequestHandler } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

declare global {
  namespace App {
    interface Locals {
      user?: { id: string };
    }
  }
}

const prisma = new PrismaClient();

export const GET: RequestHandler = async ({ locals }) => {
  try {
    const userId = locals.user?.id;
    if (!userId) {
      return json({ error: 'User not logged in' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      select: {
        username: true,
        email: true,
        mobile: true,
        createdAt: true,
      },
    });

    if (!user) {
      return json({ error: 'User not found' }, { status: 404 });
    }

    return json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return json({ error: 'Failed to fetch user profile' }, { status: 500 });
  }
};

export const _handle: Handle = async ({ event, resolve }) => {
  // Retrieve session data from cookies or headers
  const sessionCookie = event.request.headers.get('cookie'); // Replace with your session logic
  console.log('Session Cookie:', sessionCookie); // Debugging

  if (sessionCookie) {
    // Decode the session and populate `locals.user`
    const session = decodeSession(sessionCookie); // Replace with your session decoding logic
    console.log('Decoded Session:', session); // Debugging

    if (session) {
      event.locals.user = { id: session.userId }; // Populate `locals.user`
      console.log('User in locals:', event.locals.user); // Debugging
    }
  }

  return resolve(event);
};

// Example session decoding function (replace with your logic)
function decodeSession(cookie: string) {
  // Decode the session cookie and return the user data
  // Replace this with your actual session decoding logic
  return { userId: '1' }; // Example user ID
}