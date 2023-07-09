import React from "react";
export default function Header() {
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10 min-w-full">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀 HackNews</a>
        </h1>
        <div>
          <button
            id="mobile-open-button"
            className="text-3xl sm:hidden focus:outline-none"
          >
            &#9776;
          </button>
          <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
            <a href="#" className="hover:opacity-90">
              News
            </a>
            <a href="#" className="hover:opacity-90">
              Newest
            </a>
            <a href="#" className="hover:opacity-90">
              Ask
            </a>
            <a href="#" className="hover:opacity-90">
              Show
            </a>
            <a href="#" className="hover:opacity-90">
              Jobs
            </a>
          </nav>
        </div>
      </section>
    </header>
  );
}
