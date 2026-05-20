import { auth } from '@/lib/auth'; // Your Better Auth server instance
import { headers } from 'next/headers'; // Next.js specific helper

export async function getServerSession() {
  const session = await auth.api.getSession({
    headers: await headers(), // Passes cookies/auth tokens to the API
  });

  return session; // Returns the session object or null if unauthenticated
}
