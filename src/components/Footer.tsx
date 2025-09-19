import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 text-neutral-500">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm">
          &copy; {currentYear} Manav Sanger. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <Link
            href="https://github.com/manavsanger"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/manav-sanger"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:communicate.manav@gmail.com"
            className="hover:text-charcoal transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
