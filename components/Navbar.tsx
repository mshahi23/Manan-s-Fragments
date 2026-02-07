import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: "Philosophy", href: "/philosophy" },
    { name: "Hobbies", href: "/hobbies" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 py-4 px-8 flex justify-between items-center transition-colors">
      <div className="relative group font-bold text-xl tracking-tighter cursor-pointer">
        <Link href="/">
          Person's Fragments

          {/*Animated underline on hover*/}
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-500 ease-in-out group-hover:w-full" />
        </Link>
      </div>
      
      <div className="flex gap-8 text-sm font-medium uppercase tracking-widest">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="relative group py-1 transition-colors hover:text-brand"
          >
            {link.name}
            
            {/*Animated underline on hover*/}
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand transition-all duration-300 ease-in-out group-hover:w-full" />
          </Link>
        ))}
      </div>
    </nav>
  );
}