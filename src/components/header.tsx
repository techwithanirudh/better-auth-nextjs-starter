import Link from "next/link"
import { Github } from "lucide-react"
import { APP_NAME, logo } from "@/lib/constants"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-12 items-center justify-between border-b bg-background/60 px-safe-or-4 backdrop-blur md:h-14 md:px-safe-or-6">
      <Link href="/" className="flex items-center gap-2 font-bold">
        {logo}
        {APP_NAME}
      </Link>

      <nav className="hidden items-center gap-4 md:flex">
        <Link href="/" className="text-sm text-foreground/80 hover:text-foreground">Home</Link>
        <Link href="/about" className="text-sm text-foreground/80 hover:text-foreground">About</Link>
        <Link href="/components" className="text-sm text-foreground/80 hover:text-foreground">Components</Link>
      </nav>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="size-8 rounded-full" asChild>
          <Link href="https://github.com/techwithanirudh/better-auth-nextjs-starter" target="_blank" aria-label="GitHub repository">
            <Github className="size-4" />
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  )
}
