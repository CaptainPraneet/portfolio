import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, Send, Phone } from 'lucide-react';
import Section from '@/components/ui/Section';
import { profile } from '@/data/portfolio';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact — ${name || 'Recruiter'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section
      id="contact"
      eyebrow="// ./connect"
      title="Contact"
      subtitle="Let's connect — open to DevOps, cloud, and deployment engineering opportunities."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Terminal-style form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="panel-dark overflow-hidden rounded-2xl shadow-card-dark"
        >
          <div className="flex items-center gap-2 border-b border-ink-600 bg-ink-800/60 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-rose/80" />
            <span className="h-3 w-3 rounded-full bg-amber/80" />
            <span className="h-3 w-3 rounded-full bg-mint/80" />
            <span className="ml-2 font-mono text-xs text-ink-300">praneet@devops: ~/connect</span>
          </div>
          <form onSubmit={onSubmit} className="space-y-4 p-5 font-mono">
            <div>
              <label htmlFor="c-name" className="mb-1 block text-xs text-ink-300">
                <span className="text-mint">praneet@devops</span>:~$ name
              </label>
              <input
                id="c-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                className="w-full rounded-lg border border-ink-600 bg-ink-900/60 px-3 py-2.5 text-sm text-cyan outline-none transition-colors focus:border-cyan"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="c-email" className="mb-1 block text-xs text-ink-300">
                <span className="text-mint">praneet@devops</span>:~$ email
              </label>
              <input
                id="c-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full rounded-lg border border-ink-600 bg-ink-900/60 px-3 py-2.5 text-sm text-cyan outline-none transition-colors focus:border-cyan"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="c-message" className="mb-1 block text-xs text-ink-300">
                <span className="text-mint">praneet@devops</span>:~$ message
              </label>
              <textarea
                id="c-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-ink-600 bg-ink-900/60 px-3 py-2.5 text-sm text-cyan outline-none transition-colors focus:border-cyan"
                placeholder="Your message..."
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              <Send className="h-4 w-4" />
              Send Message
            </button>
            <p className="text-center text-[11px] text-ink-400">
              Opens your email client — no fake success messages.
            </p>
          </form>
        </motion.div>

        {/* Contact options */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          <a
            href={`mailto:${profile.email}`}
            className="panel group flex items-center gap-4 p-4 transition-colors hover:border-cyan/60"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
              <Mail className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted">Email</div>
              <div className="text-sm font-semibold">{profile.email}</div>
            </div>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="panel group flex items-center gap-4 p-4 transition-colors hover:border-cyan/60"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
              <Github className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted">GitHub</div>
              <div className="text-sm font-semibold">github.com/CaptainPraneet</div>
            </div>
          </a>

          {profile.linkedin ? (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="panel group flex items-center gap-4 p-4 transition-colors hover:border-cyan/60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
                <Linkedin className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted">LinkedIn</div>
                <div className="text-sm font-semibold">{profile.linkedin}</div>
              </div>
            </a>
          ) : (
            <div className="panel flex items-center gap-4 p-4 opacity-60">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[rgb(var(--border))] text-muted">
                <Linkedin className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted">LinkedIn</div>
                <div className="text-sm text-muted">Not available — connect via email or GitHub</div>
              </div>
            </div>
          )}

          <a
            href={`tel:${profile.phone}`}
            className="panel group flex items-center gap-4 p-4 transition-colors hover:border-cyan/60"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
              <Phone className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted">Phone</div>
              <div className="text-sm font-semibold">{profile.phone}</div>
            </div>
          </a>

          <a
            href={profile.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="panel group flex items-center gap-4 p-4 transition-colors hover:border-mint/60"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-mint/30 bg-mint/10 text-mint">
              <Download className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted">Resume</div>
              <div className="text-sm font-semibold">Download PDF</div>
            </div>
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
