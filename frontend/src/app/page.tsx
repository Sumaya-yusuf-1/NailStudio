/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { Button } from "./components/ui/Button";
import { Award, Heart, Palette, Sparkles, Star } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {/* HERO */}
        <section className="bg-[#FFF6F4] border-b">
          <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-[1.2fr_1fr] md:items-center md:px-8 md:py-16 lg:py-20">
            {/*  text + buttons */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-xs uppercase tracking-[0.25em] text-pink-500">
                NailStudio
              </p>

              <h1 className="text-balance text-3xl font-normal leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Create Your
                <br />
                Perfect Nail Design
              </h1>

              <p className="max-w-md text-pretty text-sm text-gray-700 md:text-base">
                Design your ideal nails with customizable shapes, colors, glitter,
                stickers and patterns. Save your favourites to the gallery.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row md:gap-4">
                <Link href='/create'>
                <Button
                  size="lg"
                  className="w-full rounded-md bg-pink-600 px-6 text-white hover:bg-pink-700 md:px-8 sm:w-auto"
                >
                  Start Designing
                </Button></Link>
                <Link href='/gallery'>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-md border-pink-500 bg-white px-6 text-pink-600 hover:bg-pink-50 md:px-8 sm:w-auto"
                >
                  View Gallery
                </Button></Link>
              </div>
            </div>

            {/* collage card */}
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
              {/* Card background */}
              <div className="absolute inset-0 rounded-4xl bg-white shadow-xl shadow-pink-200/40" />

              {/* Collage image */}
              <div className="absolute inset-3 overflow-hidden rounded-[28px] -rotate-3 md:inset-4">
                <Image
                  src="/women-wearing-beautiful-nail-polish.jpg"
                  alt="Beautiful nail designs"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* WAVE Part */}
        <section className="relative">
          <div className="relative overflow-hidden bg-linear-to-br from-pink-300 via-pink-400 to-pink-500">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
              <Image
                src="/bg-second.png" 
                alt=""
                fill
                className="object-cover"
              />
            </div>

           
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
              <svg
                className="relative block h-16 w-full md:h-24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4 py-16 md:px-8 md:py-24">
              <h2 className="mb-12 text-center text-balance text-3xl font-normal text-gray-900 sm:text-4xl md:mb-16 md:text-5xl">
                Design beautiful
                <br />
                Nails online
              </h2>

              <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
                {/* Card 1 */}
                <div className="space-y-3 rounded-xl bg-white p-5 md:p-6">
                  <div className="flex items-center gap-3">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 shrink-0 md:h-8 md:w-8"
                    >
                      <path
                        d="M16 4L12 12H8L6 16L8 20H12L16 28L20 20H24L26 16L24 12H20L16 4Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle cx="16" cy="8" r="2" fill="currentColor" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900 md:text-base">
                        Choose, shape
                      </p>
                      <p className="text-sm text-gray-700 md:text-base">&amp; color</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="space-y-3 rounded-xl bg-white p-5 md:p-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-7 w-7 shrink-0 md:h-8 md:w-8" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 md:text-base">
                        Add glitter
                      </p>
                      <p className="text-sm text-gray-700 md:text-base">
                        &amp; effects
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="space-y-3 rounded-xl bg-white p-5 md:p-6 sm:col-span-2 md:col-span-1">
                  <div className="flex items-center gap-3">
                    <Heart className="h-7 w-7 shrink-0 md:h-8 md:w-8" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 md:text-base">
                        Save your
                      </p>
                      <p className="text-sm text-gray-700 md:text-base">designs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR SERVICES */}
        <section className="bg-white py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mb-4 text-balance text-3xl font-normal text-gray-900 md:text-4xl">
                Our Services
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-sm text-gray-600 md:text-base">
                Professional nail care and design services tailored to your style.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              <div className="space-y-4 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 md:h-16 md:w-16">
                  <Palette className="h-7 w-7 text-pink-600 md:h-8 md:w-8" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 md:text-xl">
                  Custom Design
                </h3>
                <p className="text-pretty text-sm text-gray-600 md:text-base">
                  Choose from thousands of colors and patterns or create your own unique design.
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 md:h-16 md:w-16">
                  <Sparkles className="h-7 w-7 text-pink-600 md:h-8 md:w-8" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 md:text-xl">
                  Premium Effects
                </h3>
                <p className="text-pretty text-sm text-gray-600 md:text-base">
                  Add glitter, chrome, matte or glossy finishes to make your nails stand out.
                </p>
              </div>

              <div className="space-y-4 text-center sm:col-span-2 md:col-span-1">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 md:h-16 md:w-16">
                  <Award className="h-7 w-7 text-pink-600 md:h-8 md:w-8" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 md:text-xl">
                  Expert Care
                </h3>
                <p className="text-pretty text-sm text-gray-600 md:text-base">
                  Professional nail care with attention to health and long-lasting results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT DESIGNS */}
        <section className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mb-4 text-balance text-3xl font-normal text-gray-900 md:text-4xl">
                Recent Designs
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-sm text-gray-600 md:text-base">
                Get inspired by our latest nail art creations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {[
                "/elegant-nude-nails-with-gold-accent-nail-art.jpg",
                "/pink-glitter-gradient-nails.jpg",
                "/blue-chrome-metallic-nails.jpg",
                "/french-manicure-with-floral-design.jpg",
              ].map((src) => (
                <div key={src} className="relative h-48 cursor-pointer overflow-hidden rounded-lg md:h-64">
                  <Image
                    src={src}
                    alt="Nail design"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 text-center md:mt-10">
              <Button
                variant="outline"
                className="bg-transparent border-gray-300 px-6 text-gray-700 hover:bg-gray-100 md:px-8"
              >
                View Full Gallery
              </Button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-white py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mb-4 text-balance text-3xl font-normal text-gray-900 md:text-4xl">
                What Our Clients Say
              </h2>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              {[
                {
                  quote:
                    "The design tool is amazing! I was able to visualize exactly what I wanted before my appointment.",
                  name: "Sarah Johnson",
                  role: "Regular Client",
                },
                {
                  quote:
                    "Best nail studio experience I've ever had. The staff is professional and the results are stunning!",
                  name: "Emily Chen",
                  role: "VIP Member",
                },
                {
                  quote:
                    "I love how my nails turned out! The custom design feature made it so easy to get exactly what I wanted.",
                  name: "Maria Garcia",
                  role: "Happy Client",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="space-y-4 rounded-lg bg-gray-50 p-6 md:p-8 sm:col-span-1 last:sm:col-span-2 last:md:col-span-1"
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-pink-400 text-pink-400 md:h-5 md:w-5"
                      />
                    ))}
                  </div>
                  <p className="text-pretty text-sm text-gray-700 md:text-base">
                    "{item.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-pink-200" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 md:text-base">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-600 md:text-sm">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-linear-to-br from-pink-300 via-pink-400 to-pink-500 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center md:px-8">
            <h2 className="mb-4 text-balance text-3xl font-normal text-white md:mb-6 md:text-4xl">
              Ready to Start Designing?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-pretty text-base text-white/90 md:mb-8 md:text-lg">
              Join thousands of happy clients and create your perfect nail design today.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row md:gap-4">
              <Button
                size="lg"
                className="w-full rounded-md hover:-none  px-6 text-black  md:px-8 sm:w-auto"
              >
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-md border-white px-6 bg-transparent  hover:bg-transparent hover:text-white md:px-8 sm:w-auto"
              >
                Explore Designs
              </Button>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
}