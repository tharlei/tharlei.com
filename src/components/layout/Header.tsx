
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from '../../contexts/LocaleContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

const Header: React.FC = () => {
  const { locale, setLocale, t } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const handleNavigation = (path: string) => {
    if (location.pathname !== path) {
      document.body.classList.add('page-transitioning');
      setTimeout(() => {
        navigate(path);
        setTimeout(() => {
          document.body.classList.remove('page-transitioning');
        }, 100);
      }, 300);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-background/80 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter">Tharlei</Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex space-x-6">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  if (location.pathname !== link.path) {
                    e.preventDefault();
                    handleNavigation(link.path);
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
        
        <div className="flex items-center space-x-2">
          {/* Language Switcher with improved dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9 rounded-md overflow-hidden p-0 flex items-center justify-center hover:bg-accent"
              >
                <span className="text-base">{locale === 'en' ? '🇺🇸' : '🇧🇷'}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setLocale('en')}
              >
                <span className="text-base">🇺🇸</span>
                <span>English</span>
                {locale === 'en' && <span className="ml-auto">✓</span>}
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setLocale('pt')}
              >
                <span className="text-base">🇧🇷</span>
                <span>Português</span>
                {locale === 'pt' && <span className="ml-auto">✓</span>}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          
          {/* Mobile Menu Button with Drawer */}
          {isMobile && (
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent direction="right" className="w-[280px] right-0 left-auto rounded-l-lg">
                <div className="px-4 py-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">Menu</h3>
                    <DrawerClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </DrawerClose>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map(link => (
                      <Button
                        key={link.path}
                        variant="ghost"
                        className="justify-start text-lg"
                        onClick={() => handleNavigation(link.path)}
                      >
                        {link.name}
                      </Button>
                    ))}
                  </nav>
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
