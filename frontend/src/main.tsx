import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider.tsx';


const PUBLISHABLE_KEY = "pk_test_dG91Z2gtYmxvd2Zpc2gtMjUuY2xlcmsuYWNjb3VudHMuZGV2JA";
;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
console.log(PUBLISHABLE_KEY);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
<AuthProvider>
< BrowserRouter>
<App />
</BrowserRouter>
</AuthProvider>
    </ClerkProvider>
  </StrictMode>,
)
