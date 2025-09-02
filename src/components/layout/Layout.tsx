import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollStyle from '../ui/ScrollBar'; 
import ChatCard from '../ui/ChatCard';
import ChatPopup from '../ui/ChatPopup';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>      
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 134, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>

      <div className="fixed top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-br-full"></div>
      <div className="fixed bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-full"></div>

        <Header />
        
        <main className="relative">
          {children}
        </main>
        <Footer />
        <ScrollStyle />        
    </div>
    
  );
} 