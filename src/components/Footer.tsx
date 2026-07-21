import { ArrowUp, Github, Mail, Download, Linkedin } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-[rgb(var(--border))] py-12">
      <div className="container-page">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xl font-extrabold gradient-text">PRANEET HASE</span>
            </div>
            <p className="mt-1 font-mono text-sm text-cyan">{profile.role}</p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Computer Engineering fresher focused on DevOps, cloud, and deployment automation.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-cyan"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
              {profile.linkedin ? (
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm transition-colors hover:text-cyan"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-cyan"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </li>
              <li>
                <a
                  href={profile.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-cyan"
                >
                  <Download className="h-4 w-4" /> Resume
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">Terminal</h4>
            <div className="panel-dark rounded-lg p-4 font-mono text-xs">
              <div className="text-ink-300">
                <span className="text-mint">praneet@devops</span>
                <span className="text-ink-400">:~$ </span>
                <span className="text-cyan">echo "Thanks for visiting"</span>
              </div>
              <div className="mt-1 text-ink-200">&gt; Keep Building.</div>
              <div className="text-ink-200">&gt; Keep Learning.</div>
              <div className="text-ink-200">&gt; Keep Deploying. 🚀</div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[rgb(var(--border))] pt-6 sm:flex-row">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Praneet Hase · DevOps Engineer
          </p>
          <button
            onClick={toTop}
            className="inline-flex items-center gap-2 rounded-lg border border-[rgb(var(--border))] px-4 py-2 text-xs font-semibold transition-colors hover:border-cyan hover:text-cyan"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
