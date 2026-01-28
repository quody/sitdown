"use client";

import { useState, useEffect, useRef } from "react";
import { usePostHog } from "posthog-js/react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SlackLayout } from "@/components/slack";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Humor Modes", href: "#humor" },
  { label: "Pricing", href: "#pricing" },
];

const humorModes = [
  {
    title: "Dad Mode",
    description: "For teams who appreciate a good groan.",
    sample:
      "Knocked out 3 tickets today—guess you could say I'm on a roll! Now diving into the API refactor. It's going to be legendary... wait for it... okay it's mostly just renaming variables but STILL.",
  },
  {
    title: "Meme Mode",
    description: "For teams who communicate primarily in references.",
    sample:
      "Production bug said \"I'm inevitable.\" I said \"and I... am... a developer who actually reads error logs.\" *snaps* Timeouts are no more. We're so back.",
  },
  {
    title: "Haiku Mode",
    description: "For teams with sophisticated taste.",
    sample: "Four PRs reviewed\nAuth feature merged at sunset\nDocs bloom like spring flowers",
  },
  {
    title: "Corporate BS Generator",
    description: "For teams who enjoy gentle satire of corporate life.",
    sample:
      "Continuing to leverage synergistic design paradigms to optimize stakeholder-facing data visualization touchpoints. Translation: the dashboard. It's coming.",
  },
];

const fridayFormats = [
  {
    title: "The Weekly Tribune",
    text: "BREAKING: Frontend Team Ships Major Feature, Backend Team 'Cautiously Optimistic'",
  },
  {
    title: "Sports Commentary",
    text: "And the Engineering squad comes into the weekend UP by 47 tickets!",
  },
  {
    title: "Movie Trailer",
    text: "In a world... where deadlines loom... one team dared to ship on time.",
  },
  {
    title: "D&D Campaign Recap",
    text: "The party defeated the Bug Dragon of Production. +50 XP to all members.",
  },
];

const testimonials = [
  {
    quote:
      "It's controversial but AI humour makes me laugh more often than people's actual humour.",
    author: "My friend when I told him about Sitdown",
  },
];

// Hook for scroll-triggered animations
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = ref.current?.querySelectorAll(".reveal, .reveal-scale, .reveal-stagger");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function HomePage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [source, setSource] = useState<"paid" | "byok">("paid");
  const posthog = usePostHog();
  const pageRef = useScrollReveal();

  const openPaidDialog = () => {
    posthog.capture("pricing_dialog_opened", { tier: "paid" });
    setSource("paid");
    setDialogOpen(true);
    setSubmitted(false);
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-background text-foreground">
      <header className="glass-nav">
        <div className="section flex h-16 items-center justify-between">
          <div className="text-xl font-display font-bold tracking-tight text-foreground">Sitdown</div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-glow btn-shimmer bg-accent hover:bg-accent-dark text-background font-semibold"
          >
            Join waitlist
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pb-32 pt-20">
          <div className="absolute inset-0 -bottom-16 gradient-mesh-bg pointer-events-none" />
          <div className="relative section">
          <div className="space-y-8 mb-16">
            <p className="animate-fade-in-blur animate-delay-100 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Lose the standup, keep the updates
            </p>
            <h1 className="animate-fade-in-blur animate-delay-400 font-display text-5xl leading-[1.1] text-foreground sm:text-6xl lg:text-7xl font-bold">
              Standups are dead.<br />Long live the <span className="text-gradient">sit-down.</span>
            </h1>
            <p className="animate-fade-in-blur animate-delay-800 text-xl text-foreground-muted max-w-2xl leading-relaxed">
              Your team's updates, actually worth reading. Auto-generated from Linear, Jira &amp; GitHub.
              Delivered with a side of dad jokes.
            </p>
            <div className="animate-fade-in-blur animate-delay-1200 flex flex-wrap items-center gap-4 pt-2">
              <Button
                size="lg"
                className="btn-glow btn-shimmer bg-accent hover:bg-accent-dark text-background font-semibold shadow-glow-sm hover:shadow-glow transition-shadow"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              >
                Join waitlist
              </Button>
            </div>
          </div>
          <div className="flex justify-center -mx-6 md:mx-0">
            <div className="slack-scene md:scale-110 origin-top">
              <SlackLayout />
            </div>
          </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="bg-background pt-48 pb-24 px-6 md:px-0 -mx-6 md:-mx-[calc((100vw-72rem)/2+1.5rem)] md:px-[calc((100vw-72rem)/2+1.5rem)]">
          <div className="max-w-6xl mx-auto space-y-10 px-6 md:px-0">
            <h2 className="reveal font-display text-4xl font-bold text-foreground lg:text-5xl">Let's be honest about standups.</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal space-y-6" style={{ animationDelay: "100ms" }}>
                <p className="text-lg text-foreground-muted leading-relaxed">
                  You know the ritual. 9:00 AM. Everyone gathers (or worse, unmutes). "Yesterday I worked on the
                  thing. Today I'll work on the thing. No blockers." Repeat x8 teammates. 15 minutes of your life
                  you'll never get back.
                </p>
                <p className="text-lg text-foreground-muted leading-relaxed">
                  Meanwhile, in Slack: "Can someone recap what Sarah said? I was on mute making coffee." The dirty
                  secret? Most developers say standups kill their flow and that they zone out during other
                  people's updates.
                </p>
              </div>
              <Card className="reveal bg-card border-stroke shadow-hero" style={{ animationDelay: "200ms" }}>
                <CardContent className="p-8">
                  <p className="text-2xl font-display font-semibold leading-snug mb-4 text-foreground">
                    "Dailies suck and are a waste of time"
                  </p>
                  <p className="text-muted text-sm">
                    — Most common opinion amongst Youtube Software Engineer influencers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="section space-y-12 py-24">
          <div className="space-y-5 max-w-3xl">
            <h2 className="reveal font-display text-4xl font-bold text-foreground lg:text-5xl leading-tight">
              What if updates wrote themselves?
            </h2>
            <p className="reveal text-xl text-foreground-muted leading-relaxed" style={{ animationDelay: "100ms" }}>
              Sitdown pulls your team's actual work from Linear, Jira, and GitHub. Then rewrites it as updates
              worth opening. No meetings. No typing "fixed bug in auth flow" for the 47th time.
            </p>
          </div>
          <div className="reveal-stagger grid gap-6 md:grid-cols-3">
            <Card className="card-hover bg-card border-stroke shadow-card border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Auto-import</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground-muted">
                Pulls tickets moved, comments added. Your work speaks for itself (finally).
              </CardContent>
            </Card>
            <Card className="card-hover bg-card border-stroke shadow-card border-l-4 border-l-spark">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Humor modes</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground-muted">
                Dad Mode. Meme Mode. Haiku Mode. Corporate BS Generator (warning: might actually lower productivity). Pick your vibe.
              </CardContent>
            </Card>
            <Card className="card-hover bg-card border-stroke shadow-card border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Actually useful</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground-muted">
                Blocker alerts that get read. Weekly summaries people forward to leadership. Async &gt; synchronous.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Humor Modes Section */}
        <section id="humor" className="section space-y-12 py-24">
          <div className="flex flex-col gap-4">
            <h2 className="reveal font-display text-4xl font-bold text-foreground">Pick your fighter.</h2>
            <p className="reveal text-xl text-foreground-muted max-w-2xl" style={{ animationDelay: "100ms" }}>
              Each update can sound like your team. Pick one mode, or let every teammate set their own.
            </p>
          </div>
          <div className="reveal-stagger grid gap-8 md:grid-cols-2">
            {humorModes.map((mode, index) => (
              <Card key={mode.title} className="card-hover bg-card border-stroke shadow-card overflow-hidden">
                <CardHeader className={`border-b border-stroke ${index % 2 === 0 ? 'bg-accent-glow' : 'bg-spark/10'}`}>
                  <CardTitle className="text-xl font-bold text-foreground">{mode.title}</CardTitle>
                  <p className="text-foreground-muted text-sm">{mode.description}</p>
                </CardHeader>
                <CardContent className="pt-5">
                  <div className="whitespace-pre-line rounded-xl bg-background-alt border border-stroke px-5 py-4 text-foreground-muted leading-relaxed">
                    {mode.sample}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Steps Section */}
        <section className="bg-card py-24 -mx-6 md:-mx-[calc((100vw-72rem)/2+1.5rem)] md:px-[calc((100vw-72rem)/2+1.5rem)] border-y border-stroke">
          <div className="max-w-6xl mx-auto space-y-12 px-12 md:px-0">
            <div className="space-y-4">
              <h2 className="reveal font-display text-4xl font-bold lg:text-5xl text-foreground">
                Setup time: 4 minutes.<br /><span className="text-gradient-spark">Time saved: 2+ hours/week.</span>
              </h2>
            </div>
            <div className="reveal-stagger grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Connect your tools",
                  text: "Linear, Jira, GitHub, or all three. OAuth flow. No API keys to hunt down.",
                },
                {
                  step: "02",
                  title: "Pick your humor",
                  text: "Team-wide default + individual overrides. Dave in DevOps needs Meme Mode.",
                },
                {
                  step: "03",
                  title: "Choose delivery",
                  text: "Daily digest? Per-person channels? Friday summary as a sports recap?",
                },
                {
                  step: "04",
                  title: "Sit down. Relax.",
                  text: "Updates generate automatically. Your team reads them.",
                },
              ].map((item) => (
                <div key={item.step} className="space-y-4">
                  <p className="text-5xl font-display font-bold text-accent">{item.step}</p>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-foreground-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Friday Formats Section */}
        <section className="section space-y-12 py-24">
          <div className="space-y-4">
            <h2 className="reveal font-display text-4xl font-bold text-foreground">Fridays just got interesting.</h2>
            <p className="reveal text-xl text-foreground-muted max-w-2xl" style={{ animationDelay: "100ms" }}>
              Every Friday, Sitdown generates a team summary. But not a boring one. Choose your format:
            </p>
          </div>
          <div className="reveal-stagger grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {fridayFormats.map((format) => (
              <Card key={format.title} className="card-hover bg-card border-stroke shadow-soft">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-foreground">{format.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground-muted italic">"{format.text}"</CardContent>
              </Card>
            ))}
          </div>
          <div className="reveal bg-accent-glow border border-accent/30 rounded-2xl p-8 flex items-center gap-6">
            <span className="text-5xl font-display font-bold text-accent">3x</span>
            <div>
              <p className="text-xl font-semibold text-foreground">more forwards to leadership</p>
              <p className="text-foreground-muted">Teams report Friday summaries are shared more than traditional status reports.</p>
            </div>
          </div>
        </section>

        {/* Blockers Section */}
        <section className="bg-background-alt py-24 -mx-6 md:-mx-[calc((100vw-72rem)/2+1.5rem)] px-6 md:px-0">
          <div className="max-w-6xl mx-auto space-y-12 px-6 md:px-0">
            <div className="space-y-4 max-w-3xl">
              <h2 className="reveal font-display text-4xl font-bold text-foreground">Blockers that actually get unblocked.</h2>
              <p className="reveal text-xl text-foreground-muted" style={{ animationDelay: "100ms" }}>
                The problem with "any blockers?" in standup: nobody wants to be the one to say yes. Sitdown watches
                for stuck tickets automatically.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="reveal card-hover shadow-card border-2 border-spark/30 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Plot twist in Sprint 47</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground-muted">
                  <p className="leading-relaxed">
                    Looks like @josh has been in an epic battle with AUTH-234 for 7 days now. The ticket has seen
                    things. Josh has seen things.
                  </p>
                  <div className="flex gap-4 text-sm font-medium">
                    <span className="text-accent cursor-pointer hover:underline">→ View ticket</span>
                    <span className="text-spark cursor-pointer hover:underline">→ Send moral support</span>
                  </div>
                </CardContent>
              </Card>
              <div className="reveal flex flex-col justify-center space-y-4" style={{ animationDelay: "150ms" }}>
                <h3 className="text-2xl font-semibold text-foreground">Light-hearted delivery, serious utility.</h3>
                <p className="text-lg text-foreground-muted leading-relaxed">
                  Blockers get addressed 41% faster when they're surfaced with humor instead of judgment. (We made
                  that stat up, but it feels true, right?)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section space-y-16 py-24">
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <h2 className="reveal font-display text-4xl font-bold text-foreground lg:text-5xl">Simple pricing.</h2>
            <p className="reveal text-xl text-foreground-muted" style={{ animationDelay: "100ms" }}>Priced for "I can expense this without asking finance."</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="reveal border-2 border-accent shadow-glow relative overflow-hidden bg-card">
              <div className="absolute top-0 right-0 bg-accent text-background text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl text-foreground">Let's get rolling</CardTitle>
                <div className="pt-2">
                  <span className="text-4xl font-display font-bold text-foreground">$10</span>
                  <span className="text-muted ml-2">per user/month</span>
                </div>
                <p className="text-sm text-muted italic pt-1">We'd love it to be free, but somebody's gotta pay for the tokens.</p>
              </CardHeader>
              <CardContent className="space-y-5">
                <ul className="space-y-3 text-foreground-muted">
                  <li className="flex items-center gap-2"><span className="text-accent">✓</span> Unlimited teammates</li>
                  <li className="flex items-center gap-2"><span className="text-accent">✓</span> Unlimited humor</li>
                  <li className="flex items-center gap-2"><span className="text-accent">✓</span> Unlimited updates</li>
                  <li className="flex items-center gap-2"><span className="text-accent">✓</span> Github, Slack, Jira & Linear integrations</li>
                  <li className="flex items-center gap-2"><span className="text-accent">✗</span> Limited sky (Yes, the sky is the limit)</li>
                </ul>
                <Button className="w-full btn-glow btn-shimmer bg-accent hover:bg-accent-dark text-background font-semibold shadow-glow-sm" size="lg" onClick={openPaidDialog}>
                  Join waitlist
                </Button>
              </CardContent>
            </Card>
            <Card className="reveal relative overflow-hidden opacity-50 pointer-events-none select-none bg-card border-stroke" style={{ animationDelay: "100ms" }}>
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="h-[141%] w-px origin-center rotate-[30deg] bg-stroke-light" />
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl text-foreground">Cheapskate</CardTitle>
                <div className="pt-2">
                  <span className="text-4xl font-display font-bold text-foreground">$0</span>
                  <span className="text-muted ml-2">forever</span>
                </div>
                <p className="text-sm text-muted italic pt-1">Bring your own Anthropic API key.</p>
              </CardHeader>
              <CardContent className="space-y-5">
                <ul className="space-y-3 text-foreground-muted">
                  <li className="flex items-center gap-2"><span className="text-muted">✓</span> Unlimited teammates</li>
                  <li className="flex items-center gap-2"><span className="text-muted">✓</span> Unlimited humor</li>
                  <li className="flex items-center gap-2"><span className="text-muted">✓</span> Unlimited updates</li>
                  <li className="flex items-center gap-2"><span className="text-muted">✓</span> Github, Slack, Jira & Linear integrations</li>
                  <li className="flex items-center gap-2"><span className="text-muted">✗</span> Limited dignity (we won't judge you)</li>
                </ul>
                <Button variant="outline" className="w-full border-stroke text-muted" size="lg" disabled>
                  Coming soon
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-muted">
            Cancel anytime. We'll only cry a little.
          </p>
          <div className="reveal-stagger grid gap-6 md:grid-cols-3 pt-8">
            {[
              {
                question: "What if my team has no sense of humor?",
                answer:
                  "Wait until we launch the \"Professional with Personality\" mode that's 90% less funny, 90% more like your boss.",
              },
              {
                question: "Will this make my standups obsolete?",
                answer: "That's... kind of the point? But also yes.",
              },
              {
                question: "What if I actually LIKE standups?",
                answer: "We respect that. We don't understand it, but we respect it.",
              },
            ].map((faq) => (
              <Card key={faq.question} className="card-hover bg-background-alt border-stroke">
                <CardHeader>
                  <CardTitle className="text-base font-semibold text-foreground">Q: {faq.question}</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground-muted">A: {faq.answer}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section space-y-12 py-24">
          <h2 className="reveal font-display text-4xl font-bold text-foreground">Teams who've sat down and stayed down.</h2>
          <div className="reveal grid gap-8 md:grid-cols-2" style={{ animationDelay: "100ms" }}>
            {testimonials.map((item) => (
              <Card key={item.author} className="card-hover shadow-card bg-card border-stroke">
                <CardContent className="p-8">
                  <p className="text-2xl font-display leading-relaxed text-foreground mb-6">"{item.quote}"</p>
                  <p className="font-semibold text-accent">— {item.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section py-24">
          <div className="reveal rounded-3xl bg-card border border-stroke px-8 py-20 text-center shadow-hero overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-spark/5" />
            <div className="relative">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">Your team deserves updates worth reading.</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-foreground-muted">
                And you deserve your mornings back.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="btn-glow btn-shimmer bg-accent hover:bg-accent-dark text-background font-semibold shadow-glow"
                  onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Join waitlist
                </Button>
              </div>
              <p className="mt-8 text-sm text-muted">Setup takes 4 minutes. No meetings required. (Obviously.)</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="section py-12 text-center border-t border-stroke">
        <p className="text-muted">Sitdown © 2026 — Lose the standup, keep the updates.</p>
      </footer>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-card border-stroke">
          {submitted ? (
            <div className="space-y-4 text-center">
              <DialogTitle className="text-foreground">You're in!</DialogTitle>
              <DialogDescription className="text-foreground-muted">We'll send your invite shortly.</DialogDescription>
              <Button onClick={() => setDialogOpen(false)} className="bg-accent hover:bg-accent-dark text-background">Back to the page</Button>
            </div>
          ) : (
            <DialogHeader className="space-y-4">
              <div className="space-y-2">
                <DialogTitle className="text-foreground">Join the waitlist</DialogTitle>
                <DialogDescription className="text-foreground-muted">
                  This was supposed to stay internal. But I like your face. Leave your email and I'll sneak you in.
                </DialogDescription>
              </div>
              <form
                className="space-y-4"
                onSubmit={async (event) => {
                  event.preventDefault();
                  const form = event.currentTarget;
                  const email = new FormData(form).get("email") as string;
                  await supabase.from("signups").insert({ email, source });
                  posthog.capture("email_submitted", { source });
                  setSubmitted(true);
                }}
              >
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email address
                  </label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" required className="bg-background-alt border-stroke text-foreground" />
                </div>
                <Button type="submit" className="w-full btn-glow bg-accent hover:bg-accent-dark text-background font-semibold">
                  Join waitlist
                </Button>
                <p className="text-xs text-muted">
                  Submitting will add you to our early-access list.
                </p>
              </form>
            </DialogHeader>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
