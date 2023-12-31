import React from "react";
const date = new Date();

export default function Footer() {
  return (
    <footer className="px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {date.getFullYear()} Tyler. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS.
      </p>
    </footer>
  );
}
