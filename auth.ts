import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

Credentials({
  async authorize(credentials) {
    const parsed = z
      .object({ email: z.string().email(), password: z.string().min(6) })
      .safeParse(credentials);

    if (!parsed.success) return null;

    const { email, password } = parsed.data;

    // Simulate user check
    if (email === 'admin@example.com' && password === 'password123') {
      return { id: '1', name: 'Admin', email }; // must match `User` type
    }

    return null;
  }
})