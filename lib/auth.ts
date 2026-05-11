import prisma from '@/lib/prisma';
import { Role } from '@/prisma/generated/prisma/enums';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';

export const auth = betterAuth({
  user: {
    additionalFields: {
      phoneNumber: {
        type: 'string',
        required: false,
      },

      role: {
        type: 'string',
        required: false,
        defaultValue: Role.STUDENT,
      },
    },
  },
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
});
export type session = typeof auth.$Infer.Session;
export type user = typeof auth.$Infer.Session.user;
