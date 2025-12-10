/* eslint-disable react/no-unescaped-entities */
"use client";

import { Heart, Palette, Sparkles, Target, Users } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Emma Johnson",
      role: "Founder & Lead Designer",
      bio: "With over 10 years of nail art experience, Emma brings creativity and passion to every design.",
      image: "/team/emma.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Tech Developer",
      bio: "Sarah combines her coding skills with a love for beauty to create seamless digital experiences.",
      image: "/team/sarah.jpg",
    },
    {
      name: "Maya Rodriguez",
      role: "Creative Director",
      bio: "Maya's artistic vision and trend forecasting keep NailStudio at the forefront of nail fashion.",
      image: "/team/maya.jpg",
    },
    {
      name: "Lena Park",
      role: "Customer Experience",
      bio: "Lena ensures every client feels valued and leaves with a smile and beautiful nails.",
      image: "/team/lena.jpg",
    },
  ];

  const values = [
    {
      icon: <Heart className='h-6 w-6' />,
      title: "Passion for Beauty",
      description:
        "We believe everyone deserves to feel beautiful and confident.",
    },
    {
      icon: <Sparkles className='h-6 w-6' />,
      title: "Creativity & Innovation",
      description: "Pushing boundaries with new designs and techniques.",
    },
    {
      icon: <Users className='h-6 w-6' />,
      title: "Community First",
      description: "Building a supportive community of nail art lovers.",
    },
    {
      icon: <Target className='h-6 w-6' />,
      title: "Excellence",
      description: "Striving for perfection in every detail of our work.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Designs Created" },
    { number: "5K+", label: "Happy Clients" },
    { number: "100+", label: "Color Options" },
    { number: "24/7", label: "Design Access" },
  ];

  return (
    <main className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-linear-to-br from-pink-50 via-white to-pink-100 py-16 md:py-24'>
        <div className='absolute top-10 right-10 opacity-20'>
          <Sparkles className='h-24 w-24 text-[#BA4576]' />
        </div>
        <div className='absolute bottom-10 left-10 opacity-20'>
          <Heart className='h-24 w-24 text-[#BA4576]' />
        </div>

        <div className='container relative mx-auto px-4 md:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='mb-6 text-4xl font-bold text-gray-900 md:text-6xl'>
              About <span className='text-[#BA4576]'>NailStudio</span>
            </h1>
            <p className='mb-8 text-lg text-gray-700 md:text-xl'>
              Where creativity meets technology to bring your nail art dreams to
              life. We're passionate about making nail design accessible, fun,
              and beautiful for everyone.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button className='bg-[#BA4576] hover:bg-[#A93A6A] text-white px-8 py-3 rounded-full'>
                Start Designing
              </Button>
              <Button
                variant='outline'
                className='border-[#BA4576] text-[#BA4576] hover:bg-pink-50 px-8 py-3 rounded-full'
              >
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className='py-16 md:py-20'>
        <div className='container mx-auto px-4 md:px-8'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='mb-6 text-3xl font-bold text-gray-900 md:text-4xl'>
                Our Story
              </h2>
              <div className='space-y-4 text-gray-700'>
                <p>
                  NailStudio began as a small passion project in 2022, born from
                  a simple idea: what if everyone could design their perfect
                  nails before visiting a salon?
                </p>
                <p>
                  Our founder, Emma, noticed that many people struggled to
                  communicate their nail design ideas to technicians. She wanted
                  to create a tool that would bridge that gap and empower people
                  to visualize their creativity.
                </p>
                <p>
                  Today, we're a team of designers, developers, and nail
                  enthusiasts working together to make nail design accessible to
                  everyone, everywhere.
                </p>
              </div>
            </div>
            <div className='relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl'>
              {/* Placeholder for story image */}
              <div className='absolute inset-0 bg-linear-to-br from-pink-200 to-purple-300 flex items-center justify-center'>
                <div className='text-center'>
                  <Palette className='h-20 w-20 text-white mx-auto mb-4' />
                  <p className='text-white text-xl font-semibold'>
                    Our Journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className='bg-pink-50 py-16 md:py-20'>
        <div className='container mx-auto px-4 md:px-8'>
          <div className='text-center mb-12'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl'>
              Our Values
            </h2>
            <p className='text-gray-700 max-w-2xl mx-auto'>
              These principles guide everything we do at NailStudio
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {values.map((value, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow'
              >
                <div className='h-12 w-12 rounded-full bg-[#BA4576] text-white flex items-center justify-center mb-4'>
                  {value.icon}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {value.title}
                </h3>
                <p className='text-gray-600'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className='py-16 md:py-20'>
        <div className='container mx-auto px-4 md:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-4xl font-bold text-[#BA4576] mb-2 md:text-5xl'>
                  {stat.number}
                </div>
                <div className='text-gray-700'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
