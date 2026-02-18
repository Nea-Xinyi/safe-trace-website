import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Resources from "./pages/Resources";
import Policies from "./pages/Policies";
import Purpose from "./pages/Purpose";
import Businesses from "./pages/Businesses";
import Research from "./pages/Research";
import SafeTraceApp from "./pages/SafeTraceApp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AccessibilityProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/purpose" element={<Purpose />} />
                <Route path="/businesses" element={<Businesses />} />
                <Route path="/research" element={<Research />} />
                <Route path="/safetrace-app" element={<SafeTraceApp />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AccessibilityProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
