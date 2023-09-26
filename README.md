This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install

Then npx prisma generate
     npx prisma db push

npm run dev
```

For Backend I used an ORM named PrismaDB.

I managed our CRUD REST requiriments by using SSR of NextJS, you can take a look at app/api/tasks folder.

For Database MongoDB, I created an instance in the cloud, so if you want to test the app locally, you can create your instance and connect it or connect via cloud from Atlas https://www.mongodb.com/atlas/database, just edit the .env DATABASE_URL=<AND PUT HERE THE GIVEN URL HERE>.

You must to create an account to https://clerk.com/, It's a third-party service for authentication, so you must to enter this 5 .env if you want to run locally with your own users.
CLERK_SECRET_KEY=<AND PUT HERE THE GIVEN SECRET KEY>

This 5 .env left NEED to keep their values, copy it into your .env too.

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

For Frontend I use SHADCN UI, it provides components you can easily insert into your app and are completely customisable, themeable.
For frontend framework I used TailwindCSS.

I created only 1 Collection in MongoDB, because Clerk provides your own user, so if you try the app, you can have different "Tasks" from other users.

This app was made using TypeScript and it wasn't necessary a global state manager for the persistence.

For cache I used the default, that comes with Nextjs. That's why the app is faster than a REACT APP.

Just in case run again the next 3 commands
```
npx prisma generate
npx prisma db push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
