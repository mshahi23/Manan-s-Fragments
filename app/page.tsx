export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center mt-10">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-4">
          Thoughts & Hobbies
        </h1>
        <p className="text-xl light:text-gray-500 max-w-2xl mx-auto">
          A space for philosophy, political thoughts, and creative projects. 
          Built with Next.js for my professional portfolio.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="p-8 border rounded-2xl hover:shadow-lg transition-shadow bg-gray-50">
          <h2 className="text-2xl font-bold mb-2 text-blue-600">Latest Post</h2>
          <p className="text-gray-600">Coming soon: My first dive into MDX content.</p>
        </div>
        <div className="p-8 border rounded-2xl hover:shadow-lg transition-shadow bg-gray-50">
          <h2 className="text-2xl font-bold mb-2 text-purple-600">Spotify Link</h2>
          <p className="text-gray-600">Embedding my favorite study playlist here soon.</p>
        </div>
      </div>
    </main>
  );
}