"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollToTopButton from "@/components/component/ScrollToTopButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function main() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    { name: "React", image: "/react.png" },
    { name: "Next.js", image: "/next.svg" },
    { name: "TypeScript", image: "/ts-logo-256.svg" },
    { name: "Node.js", image: "/nodejs.png" },
    { name: "Python", image: "/python.png" },
    { name: "AWS", image: "/amazon-web-services.png" },
    { name: "Docker", image: "/docker-logo.webp" },
    { name: "Git", image: "/github.png" },
  ];

  return (
    <div className="flex flex-1 flex-col bg-background pt-0">
      <div className="rounded-lg fixed p-5 bg-slate-200">
        <ScrollToTopButton showAfter={100}/>
      </div>
      <header className="sticky top-0 z-50 border-b-2 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
            runa.dev
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Contact
            </button>
          </nav>
          <Button className="md:hidden">
            <MenuIcon className="size-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto max-w-6xl px-0 py-16 md:px-6 md:py-24 ">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                「いろいろ」やる。
              </h1>
              <p className="text-muted-foreground">
                I&apos;m a creative professional with a passion for designing
                visually stunning and user-friendly digital products. Let&apos;s
                bring your ideas to life.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection('work')}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  View Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="work" className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                作ったもの
              </h2>
              <p className="mt-2 text-muted-foreground">
                A selection of my projects.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
              <Link
                href="#"
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/猫谷ルナ.svg"
                  width={600}
                  height={400}
                  alt="Project 1"
                  className="aspect-video w-full object-cover blur-sm"
                />
                <div className="from-black/70 to-transparent absolute inset-0 bg-gradient-to-t p-4">
                  <h3 className="text-white text-2xl font-semibold">
                    VTuberロゴ作成
                  </h3>
                  <p className="text-white/80 text-sm">
                    VTuber風のロゴの作成・デザイン
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="https://images.unsplash.com/photo-1528459199957-0ff28496a7f6?q=80&w=2843&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={600}
                  height={400}
                  alt="Project 2"
                  className="aspect-[3/2] w-full object-cover blur-sm overflow-hidden"
                />
                <div className="from-black/70 to-transparent absolute inset-0 bg-gradient-to-t p-4">
                  <h3 className="text-white text-2xl font-semibold">
                    MOMO-FONT
                  </h3>
                  <p className="text-white/80 text-sm">
                    クラウドを活用したフォント管理アプリ
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Project 3"
                  className="aspect-video w-full object-cover"
                />
                <div className="from-black/70 to-transparent absolute inset-0 bg-gradient-to-t p-4">
                  <h3 className="text-white text-2xl font-semibold">
                    Mi-Admin
                  </h3>
                  <p className="text-white/80 text-sm">
                    Minecraftの管理画面アプリ
                  </p>
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
                <div className="from-black/70 to-transparent absolute inset-0 bg-gradient-to-t p-4">
                  <h3 className="text-white text-2xl font-semibold">
                    IoT-Dashboard
                  </h3>
                  <p className="text-white/80 text-sm">
                    IoTデバイスのダッシュボード
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section id="about" className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                自己紹介
              </h2>
              <p className="text-muted-foreground">
                こんにちは、MinTanakaです。私は開発者として、デザインからウェブアプリケーションの実装まで幅広く携わっています。
              </p>
              <p className="text-muted-foreground">
                技術スタック
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>フロントエンド開発（React, Next.js, TypeScript）</li>
                <li>バックエンド開発（Node.js,  Python）</li>
                <li>データベース設計と管理（SQL, NoSQL）</li>
                <li>UI/UXデザイン</li>
                <li>クラウドサービスの活用（AWS, Google Cloud）</li>
                <li>基本情報技術者</li>
              </ul>
              <p className="text-muted-foreground">
                デザインと技術、リアルとバーチャルが融合した社会をつくりたいと考えています。
              </p>
            </div>
            <div className="relative overflow-hidden rounded-4xl w-64 h-64 mx-auto mt-14">
              <img
                src="/github_ore.png"
                width={256}
                height={256}
                alt="MinTanaka's profile"
                className="w-full h-full object-cover  border-2 border-white"
              >

              </img>
            </div>
          </div>
        </section>
        <section id="framework" className="container mx-auto max-w-6xl px-4 pb-0 py-16 md:px-6 md:py-24">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
              技術スタック
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {techStack.map((tech, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="border-2">
                        <CardContent className="flex flex-col items-center justify-center p-8">
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="w-24 h-24 object-contain mb-6"
                          />
                          <h3 className="font-semibold text-xl">{tech.name}</h3>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 md:-left-12" />
              <CarouselNext className="right-0 md:-right-12" />
            </Carousel>
          </section>
        <section id="contact" className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-8  md:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                お問い合わせ
              </h2>
              <p className="text-muted-foreground">
                案件、お仕事、質問等のお問い合わせはこちらから。
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
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-2 rounded-full shadow-lg transition-all duration-300 hover:opacity-80 hover:scale-110 overflow-hidden"
          aria-label="トップに戻る"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rounded-full"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      )}
      <footer className="bg-muted py-6">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 MinTanaka. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <Link
                href="#"
                className="text-sm font-medium underline-offset-4 hover:underline"
                prefetch={false}
              >
                Work
              </Link>
              <Link
                href="#"
                className="text-sm font-medium underline-offset-4 hover:underline"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm font-medium underline-offset-4 hover:underline"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
function MenuIcon(props: any) {
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
  );
}
export default main;