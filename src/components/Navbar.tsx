import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Terminal } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useTheme } from '@/hooks/useTheme';

type Props = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export default function Navbar({ theme, toggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.85)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Primary">
          <button
            onClick={() => handleNav('home')}
            className="group flex items-center gap-2.5"
            aria-label="Go to home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan/40 bg-ink-900 font-mono text-cyan shadow-glow-cyan transition-transform group-hover:scale-105">
              <Terminal className="h-4.5 w-4.5" />
            </span>
            <span className="hidden font-mono text-sm font-bold tracking-tight sm:block">
              <span className="text-cyan">praneet</span>
              <span className="text-muted">@devops</span>
              <span className="text-mint">:~$</span>
            </span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    active === link.id ? 'text-cyan' : 'text-muted hover:text-[rgb(var(--text))]'
                  }`}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-cyan to-mint"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgb(var(--border))] text-muted transition-colors hover:border-cyan hover:text-cyan"
            >
              {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgb(var(--border))] text-muted transition-colors hover:border-cyan hover:text-cyan lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 h-full w-72 max-w-[80vw] border-l border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))] p-6 pt-20"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNav(link.id)}
                      className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                        active === link.id
                          ? 'bg-cyan/10 text-cyan'
                          : 'text-muted hover:bg-ink-700 hover:text-[rgb(var(--text))]'
                      }`}
                    >
                      <span className="font-mono text-xs text-cyan/60 mr-2">/</span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-[rgb(var(--border))] pt-4 font-mono text-xs text-muted">
                <div>{profile.name}</div>
                <div className="text-cyan">{profile.role}</div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
