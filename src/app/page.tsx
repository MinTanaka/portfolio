
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function main() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b-2">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
            MinTanaka&apos;s Portfolio
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Work
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                コードもデザインも、<br/>ボーダーフリーで。
              </h1>
              <p className="text-muted-foreground">
                I&apos;`m a creative professional with a passion for designing visually stunning and user-friendly digital
                products. Let&apos;s bring your ideas to life.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Work
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width={800}
                height={600}
                alt="Hero Image"
                className="aspect-video w-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Work</h2>
              <p className="mt-2 text-muted-foreground">A selection of my latest projects.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="#"
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Project 1"
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">Project 1</h3>
                  <p className="text-sm text-white/80">A brief description of the project.</p>
                </div>
              </Link>
              <Link
                href="#"
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Project 2"
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">Project 2</h3>
                  <p className="text-sm text-white/80">A brief description of the project.</p>
                </div>
              </Link>
              <Link
                href="#"
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Project 3"
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">Project 3</h3>
                  <p className="text-sm text-white/80">A brief description of the project.</p>
                </div>
              </Link>
              <Link
                href="#"
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Project 4"
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">Project 4</h3>
                  <p className="text-sm text-white/80">A brief description of the project.</p>
                </div>
              </Link>
              <Link
                href="#"
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Project 5"
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">Project 5</h3>
                  <p className="text-sm text-white/80">A brief description of the project.</p>
                </div>
              </Link>
              <Link
                href="#"
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Project 6"
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">Project 6</h3>
                  <p className="text-sm text-white/80">A brief description of the project.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s Work Together</h2>
              <p className="text-muted-foreground">
                I`&apos;`d love to hear about your project and how I can help. Fill out the form below and I&apos;ll get back to you
                as soon as possible.
              </p>
            </div>
            <Card>
              <CardContent>
                <form className="grid gap-4">
                  <Input type="text" placeholder="Name" className="w-full" />
                  <Input type="email" placeholder="Email" className="w-full" />
                  <Textarea placeholder="Message" className="w-full" rows={4} />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
            <nav className="flex gap-4">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Work
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
} 
function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
export default main