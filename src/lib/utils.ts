import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Declare Calendly global object
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/patrick-hein/hello'
    });
  }
};

export const initInlineCalendly = (elementId: string) => {
  if (window.Calendly) {
    const element = document.getElementById(elementId);
    if (element) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/patrick-hein/hello',
        parentElement: element
      });
    }
  }
};
