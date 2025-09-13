import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "About this Next.js Starter",
}

export default function AboutPage() {
  return (
    <main className="container max-w-3xl space-y-4 p-6 md:p-10">
      <h1 className="font-bold text-3xl md:text-4xl">About</h1>
      <p className="text-muted-foreground">
        This is a minimal Next.js starter focused on a clean foundation: TypeScript, App Router, Tailwind CSS v4, and shadcn/ui. It includes dark mode, toasts, and a page-load progress bar.
      </p>
      <p className="text-muted-foreground">
        It intentionally excludes authentication and database setup so you can integrate your preferred solutions later.
      </p>
    </main>
  )
}
