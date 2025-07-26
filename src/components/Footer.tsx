import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand & Contact */}
          <div>
            <div className="text-2xl font-bold mb-4">Patrick Hein</div>
            <p className="text-background/80 mb-4">
              Software Engineer & Startup Consultant
            </p>
            <a 
              href="mailto:patrick@hein.so" 
              className="text-background/80 hover:text-background transition-colors"
            >
              patrick@hein.so
            </a>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-background/80 hover:text-background transition-colors">
                Home
              </a>
              <a href="#services" className="block text-background/80 hover:text-background transition-colors">
                Services
              </a>
              <a href="#portfolio" className="block text-background/80 hover:text-background transition-colors">
                Portfolio
              </a>
              <a href="#testimonials" className="block text-background/80 hover:text-background transition-colors">
                Testimonials
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://www.linkedin.com/in/patrick-hein/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ThisIsIPat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:patrick@hein.so"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Patrick Hein. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;