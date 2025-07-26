import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import CalendlyModal from "@/components/CalendlyModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    //{ label: "Portfolio", href: "#portfolio" },
    //{ label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Brand/Logo */}
          <div className="text-2xl font-bold text-foreground">
            Patrick Hein
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <CalendlyModal variant="default" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Book a Strategy Call
            </CalendlyModal>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2 transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <CalendlyModal 
                variant="default" 
                size="default" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold text-center"
              >
                Book a Strategy Call
              </CalendlyModal>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;