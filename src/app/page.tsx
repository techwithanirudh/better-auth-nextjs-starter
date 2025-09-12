import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="container flex min-h-[calc(100dvh-3.5rem)] flex-col items-center justify-center gap-10 p-6 sm:p-10">
      <section className="text-center">
        <h1 className="mb-4 text-balance font-bold text-4xl sm:text-5xl md:text-6xl">Welcome to Next.js Starter</h1>
        <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
          A minimal, clean Next.js starter with TypeScript, Tailwind CSS, shadcn/ui, dark mode, toasts, and a page-load progress bar.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/components">Components</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="https://nextjs.org/docs" target="_blank" className="inline-flex items-center gap-2">Next.js Docs <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>

      <section className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tech stack</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, next-themes, sonner, bprogress
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ready to extend</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Add your own routes, APIs, and components. Auth and database are intentionally omitted for a clean start.
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
