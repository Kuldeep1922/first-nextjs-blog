"use client"
import * as React from "react";
import { cn } from "@/lib/utils";


const AboutHero = () => {
  return (
    <section className="about-hero bg-background text-foreground py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="hero-content text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Our Blog</h1>
          <p className="text-lg">
            Welcome to our programming blog where we share insights, tutorials, and projects to help you become a better developer.
          </p>
        </div>

        {/* Showcase Section */}
        <div className="showcase grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={cn(
                "showcase-item bg-muted p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105",
                "animate-fade-in"
              )}
            >
              <div className="image-placeholder bg-gray-300 h-48 mb-4 rounded"></div>
              <h2 className="text-xl font-semibold mb-2">Project {item}</h2>
              <p className="text-sm text-muted-foreground">
                A brief description of the project goes here. Learn more about the technologies and challenges we faced.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;