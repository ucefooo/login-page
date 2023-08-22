import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    pages: {
        signIn: '/sign-in',
        signOut: '/',
    },
    session: {
      strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
                return null;
            }
            const user = await db.user.findUnique({
              where: {
                email: credentials?.email,
              },
            });
            if (!user) {
              return null;
            }
            const passwordMatch = await compare(credentials.password,user.password);
            if (!passwordMatch){
                return null;
            }
                return {
                    id: `${user.id}`,
                    email: user.email,
                    username: user.username
                };
            }
        })
      ],
      callbacks: {
        async jwt({ token, user }) {
          if (user) {
            return {
              ...token,
              username: user.username,
            };
          }
          return token;
        },
        async session({ session, token }) {
          return {
            ...session,
            user: {
              ...session.user,
              username: token.username,
            },
          };
        },
      }
      
}