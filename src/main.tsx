import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("main.tsx executing");

function initApp() {
  console.log("Document ready state:", document.readyState);
  
  const rootElement = document.getElementById("root");
  console.log("Root element:", rootElement);

  if (rootElement) {
    console.log("Creating React root");
    createRoot(rootElement).render(<App />);
    console.log("React app rendered");
  } else {
    console.error("Root element not found");
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
