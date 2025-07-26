import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Brand & Contact */}
          <div>
            <div className="text-2xl font-bold mb-4">Patrick Hein</div>
            <p className="text-background/80 mb-4">
              Software Engineer for Startups
            </p>
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
                href="#booking"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                Contact
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