'use client';

import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          About
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-[#1e293b] rounded-lg shadow-lg p-8">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Software Developer with 2+ years of experience in React, Next.js,
              Angular, and TypeScript. Based in Leeds, UK.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
