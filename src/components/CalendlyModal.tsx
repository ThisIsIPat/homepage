import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { initInlineCalendly } from "@/lib/utils";

interface CalendlyModalProps {
  children: React.ReactNode;
  variant?: "default" | "hero" | "cta";
  size?: "default" | "sm" | "lg";
  className?: string;
}

const CalendlyModal = ({ 
  children, 
  variant = "default", 
  size = "default",
  className 
}: CalendlyModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure the dialog is rendered
      setTimeout(() => {
        initInlineCalendly("calendly-inline-widget");
      }, 100);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={variant as any} 
          size={size as any} 
          className={className}
        >
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-white">
        <div 
          id="calendly-inline-widget" 
          className="w-full h-[80vh] min-h-[600px]"
          style={{
            minWidth: '320px',
            height: '80vh'
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal; 