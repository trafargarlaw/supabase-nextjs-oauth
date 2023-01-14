# Next.js + Tailwind CSS + Supabase + OAuth Boilerplate

This is a boilerplate project that sets up a Next.js app with Tailwind CSS, Supabase, and OAuth authentication.

## Prerequisites
- Node.js version 14 or higher
- A [Supabase project](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs#create-a-project) and OAuth app set up
- A provider enabled in your Supabase project ( discord in this project )

## Getting started
1. Clone this repository


2. Install the dependencies
```npm install```

3. Create a new file named `.env.local` in the root of the project.
4. Fill the `.env.template` with the necessary environment variables.
5. Rename `.env.template` to `.env.local` or `.env.development` or `.env.production` depending on the environment you want to use.
6. Start the development server
npm run dev

7. Open `http://localhost:3000` in your browser

## OAuth setup
1. Go to your OAuth provider and create a new application.
2. Take note of the `client_id` and `client_secret`
3. In your Supabase project, enable the provider you just created.

## Deployment
This project is ready for deployment on Vercel or any other platform that supports Node.js.

## Built With
- [Next.js](https://nextjs.org/) - A framework for building server-rendered React applications.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [Supabase](https://supabase.io/) - An open-source Firebase alternative.

## Acknowledgments
- [Next.js documentation](https://nextjs.org/docs)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Supabase documentation](https://docs.supabase.io/)
