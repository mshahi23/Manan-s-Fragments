import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-8 flex justify-between items-center text-black">
      <div className="font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity">
        <Link href="/">Manan's Fragments
        </Link>
      </div>
      
      <div className="flex gap-8 text-sm font-medium text-gray-600 uppercase tracking-widest">
        <Link href="/philosophy" className="hover:text-black transition-colors">Philosophy</Link>
        <Link href="/hobbies" className="hover:text-black transition-colors">Hobbies</Link>
        <Link href="/about" className="hover:text-black transition-colors">About</Link>
      </div>
    </nav>
  );
}