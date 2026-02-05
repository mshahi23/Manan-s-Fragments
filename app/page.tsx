export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-black">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
          Status: <code className="font-bold ml-2 text-green-600">Development Mode</code>
        </p>
      </div>

      <div className="text-center mt-10">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-4">
          Thoughts & Hobbies
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
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