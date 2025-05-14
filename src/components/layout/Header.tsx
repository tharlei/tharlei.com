import { Menu, Moon, Sun, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import React from 'react';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { useIsMobile } from '@/hooks/use-mobile';

import { useLocale } from '../../contexts/LocaleContext';
import { useTheme } from '../../contexts/ThemeContext';

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold tracking-tighter">
          Tharlei
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="transition-colors hover:text-primary"
                onClick={e => {
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
                className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md p-0 hover:bg-accent"
              >
                <span className="text-base">{locale === 'en' ? '🇺🇸' : '🇧🇷'}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem
                className="flex cursor-pointer items-center gap-2"
                onClick={() => setLocale('en')}
              >
                <span className="text-base">🇺🇸</span>
                <span>English</span>
                {locale === 'en' && <span className="ml-auto">✓</span>}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex cursor-pointer items-center gap-2"
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
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {/* Mobile Menu Button with Drawer */}
          {isMobile && (
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent direction="right" className="left-auto right-0 w-[280px] rounded-l-lg">
                <div className="px-4 py-6">
                  <div className="mb-6 flex items-center justify-between">
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
