import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function ComponentsPage() {
  return (
    <main className="container space-y-6 p-6 md:p-10">
      <h1 className="font-bold text-3xl md:text-4xl">Components</h1>
      <p className="text-muted-foreground">A few examples from shadcn/ui.</p>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Button</CardTitle>
            <CardDescription>Variants you can use</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Input</CardTitle>
            <CardDescription>Simple text input</CardDescription>
          </CardHeader>
          <CardContent>
            <Input placeholder="Type something..." />
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
