# Rezigco Landing Page

This is the landing page for Rezigco, an AI-powered real estate solutions company.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app` - Contains the main page and layout files
- `src/components` - Contains reusable UI components
- `public` - Contains static assets like images and fonts

## Technologies Used

- Next.js (Pages Router)
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- FontAwesome for icons

This project uses optimized animations and responsive design to create a modern user experience.

## Deployment

This project is optimized for deployment on Cloudflare Pages with the following features:

- Optimized build process that removes cache files automatically
- Custom webpack configuration for smaller bundle sizes
- Static export with full animation support
- Total bundle size reduced to under 120KB

To deploy your own version:

```bash
# Build for production
npm run build:cf

# Check bundle size
find .next -type f -size +10M
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
