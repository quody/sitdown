"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePostHog } from "posthog-js/react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Humor Modes", href: "#humor" },
  { label: "Pricing", href: "#pricing" },
];

const digestData = {
  channel: "#standup",
  timestamp: "Today at 9:15 AM",
  title: "Today's Sitdown Digest ☕",
  users: [
    {
      name: "sarah.chen",
      items: [
        { emoji: "✅", text: "Completed auth token refresh logic", ticket: "ENG-342", joke: "tokens now tokenin'" },
        { emoji: "✅", text: "Shipped error boundary for dashboard", ticket: "ENG-358", joke: "because even dashboards need emotional support sometimes. Boundaries are healthy." },
        { emoji: "🚧", text: "Wrestling with flaky CI tests", ticket: "ENG-401", joke: "CI stands for \"Consistently Irritating\"" },
      ],
      question: "User somehow has a negative balance, should that even be possible?",
    },
    {
      name: "marcus.rivera",
      items: [
        { emoji: "✅", text: "Finished API rate limiting middleware", ticket: "ENG-389", joke: "slow down there, buckaroo" },
      ],
    },
    {
      name: "jenna.reed",
      items: [
        { emoji: "✅", text: "Merged user preferences migration", ticket: "ENG-377", joke: "data's got a new home" },
      ],
    },
  ],
  footer: "That's a wrap! Ship safe out there 🫡",
  threadReplies: 3,
};

const fridayDigestData = {
  channel: "#product",
  timestamp: "Today at 3:15 PM",
  title: "Friday Product Summary 🎉",
  users: [
    {
      name: "alex.thompson",
      items: [
        { emoji: "🚀", text: "Launched new onboarding flow to 100% of users", ticket: "PROD-112", joke: "they grow up so fast" },
        { emoji: "📊", text: "Conversion up 23% since Tuesday", ticket: "PROD-108", joke: "stonks" },
      ],
    },
    {
      name: "priya.sharma",
      items: [
        { emoji: "✅", text: "Closed 14 user interviews this week", ticket: "PROD-98", joke: "my calendar is now a crime scene" },
        { emoji: "📝", text: "Drafted Q2 roadmap proposal", ticket: "PROD-115", joke: "it's giving... ambitious" },
      ],
      question: "Should we prioritize mobile app or integrations for Q2?",
    },
    {
      name: "david.kim",
      items: [
        { emoji: "🎨", text: "Finalized new design system tokens", ticket: "PROD-103", joke: "pixels have never looked so organized" },
      ],
    },
  ],
  footer: "Weekend mode: activated. Touch grass responsibly 🌿",
  threadReplies: 7,
};

const humorModes = [
  {
    title: "Dad Mode",
    description: "For teams who appreciate a good groan.",
    sample:
      "Knocked out 3 tickets today—guess you could say I'm on a roll! 🥁 Now diving into the API refactor. It's going to be legendary... wait for it... okay it's mostly just renaming variables but STILL.",
  },
  {
    title: "Meme Mode",
    description: "For teams who communicate primarily in references.",
    sample:
      "Production bug said \"I'm inevitable.\" I said \"and I... am... a developer who actually reads error logs.\" *snaps* Timeouts are no more. We're so back.",
  },
  {
    title: "Haiku Mode",
    description: "For teams with ✨ sophisticated ✨ taste.",
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
    title: "📰 The Weekly Tribune",
    text: "BREAKING: Frontend Team Ships Major Feature, Backend Team 'Cautiously Optimistic'",
  },
  {
    title: "🏈 Sports Commentary",
    text: "And the Engineering squad comes into the weekend UP by 47 tickets!",
  },
  {
    title: "🎬 Movie Trailer",
    text: "In a world... where deadlines loom... one team dared to ship on time.",
  },
  {
    title: "🎲 D&D Campaign Recap",
    text: "The party defeated the Bug Dragon of Production. +50 XP to all members.",
  },
];

const testimonials = [
  {
    quote:
      "We replaced our 12 PM standup with Sitdown three months ago. It removed a big distraction, and uncovers more blockers than our daily ever did.",
    author: "CTO, 20-person startup",
  },
  {
    quote:
      "It's controversial but AI humour makes me laugh more often than our team's actual humour.",
    author: "Head of Engineering",
  },
];

const logos: string[] = [];

export default function HomePage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [source, setSource] = useState<"paid" | "byok">("paid");
  const [isFlipped, setIsFlipped] = useState(false);
  const posthog = usePostHog();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startFlipTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 8000);
  }, []);

  const triggerFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
    startFlipTimer();
  }, [startFlipTimer]);

  useEffect(() => {
    startFlipTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startFlipTimer]);

  useEffect(() => {
    const h2Element = document.querySelector("#problem h2");
    if (!h2Element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerFlip();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(h2Element);
    return () => observer.disconnect();
  }, [triggerFlip]);

  const openPaidDialog = () => {
    posthog.capture("pricing_dialog_opened", { tier: "paid" });
    setSource("paid");
    setDialogOpen(true);
    setSubmitted(false);
  };

  const openByokDialog = () => {
    posthog.capture("pricing_dialog_opened", { tier: "byok" });
    setSource("byok");
    setDialogOpen(true);
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="glass-nav">
        <div className="section flex h-16 items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">Sitdown</div>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
          <Button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>Get started</Button>
        </div>
      </header>

      <main>
        <section className="section grid gap-12 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="animate-fade-in-blur animate-delay-100 text-sm font-semibold uppercase tracking-[0.3em] text-muted">
              Lose the standup, keep the updates
            </p>
            <h1 className="animate-fade-in-blur animate-delay-200 font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Standups are dead.<br />Long live the sit-down.
            </h1>
            <p className="animate-fade-in-blur animate-delay-300 text-lg text-muted">
              Your team's updates, actually worth reading. Auto-generated from Linear, Jira &amp; GitHub.
              Delivered with a side of dad jokes.
            </p>
            <div className="animate-fade-in-blur animate-delay-400 flex flex-wrap items-center gap-4">
              <Button size="lg" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
                Get started →
              </Button>
            </div>
            <p className="animate-fade-in-blur animate-delay-500 text-sm font-semibold text-foreground">
              Join teams who've reclaimed many hours of meeting time
            </p>
          </div>
          <div className="animate-fade-in-blur animate-delay-300 flip-card">
            <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
              <div className="flip-card-front">
                <Card className="gradient-ring overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-2 border-b border-stroke px-4 py-3">
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                        {digestData.channel}
                      </span>
                      <span className="text-xs text-muted">{digestData.timestamp}</span>
                    </div>
                    <div className="space-y-4 px-4 py-4">
                      <p className="font-semibold text-foreground">{digestData.title}</p>
                      {digestData.users.map((user, index) => (
                        <div
                          key={user.name}
                          className={index > 0 ? "border-t border-stroke pt-3" : ""}
                        >
                          <p className="mb-2 text-sm">
                            <span className="rounded bg-accent/10 px-1.5 py-0.5 font-medium text-accent">
                              @{user.name}
                            </span>
                          </p>
                          <ul className="space-y-1.5 text-sm text-muted">
                            {user.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                {item.emoji}{" "}
                                {item.text}
                                {item.ticket && (
                                  <span className="ml-1 text-muted/70">[{item.ticket}]</span>
                                )}
                                {item.joke && (
                                  <span className="text-muted/70"> — {item.joke}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                          {user.question && (
                            <p className="mt-2 text-sm text-amber-600">
                              🙋 {user.name.split(".")[0].charAt(0).toUpperCase() + user.name.split(".")[0].slice(1)} asked: [ENG-421] "{user.question}"
                            </p>
                          )}
                        </div>
                      ))}
                      <p className="pt-2 text-sm text-muted">{digestData.footer}</p>
                    </div>
                    <div className="border-t border-stroke bg-background/50 px-4 py-2">
                      <p className="text-xs text-muted">🧵 {digestData.threadReplies} replies</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flip-card-back">
                <Card className="gradient-ring overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-2 border-b border-stroke px-4 py-3">
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                        {fridayDigestData.channel}
                      </span>
                      <span className="text-xs text-muted">{fridayDigestData.timestamp}</span>
                    </div>
                    <div className="space-y-4 px-4 py-4">
                      <p className="font-semibold text-foreground">{fridayDigestData.title}</p>
                      {fridayDigestData.users.map((user, index) => (
                        <div
                          key={user.name}
                          className={index > 0 ? "border-t border-stroke pt-3" : ""}
                        >
                          <p className="mb-2 text-sm">
                            <span className="rounded bg-accent/10 px-1.5 py-0.5 font-medium text-accent">
                              @{user.name}
                            </span>
                          </p>
                          <ul className="space-y-1.5 text-sm text-muted">
                            {user.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                {item.emoji}{" "}
                                {item.text}
                                {item.ticket && (
                                  <span className="ml-1 text-muted/70">[{item.ticket}]</span>
                                )}
                                {item.joke && (
                                  <span className="text-muted/70"> — {item.joke}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                          {user.question && (
                            <p className="mt-2 text-sm text-amber-600">
                              🙋 {user.name.split(".")[0].charAt(0).toUpperCase() + user.name.split(".")[0].slice(1)} asked: "{user.question}"
                            </p>
                          )}
                        </div>
                      ))}
                      <p className="pt-2 text-sm text-muted">{fridayDigestData.footer}</p>
                    </div>
                    <div className="border-t border-stroke bg-background/50 px-4 py-2">
                      <p className="text-xs text-muted">🧵 {fridayDigestData.threadReplies} replies</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="section space-y-6 py-16">
          <h2 className="text-3xl font-semibold">Let's be honest about standups.</h2>
          <p className="max-w-3xl text-muted">
            You know the ritual. 9:00 AM. Everyone gathers (or worse, unmutes). "Yesterday I worked on the
            thing. Today I'll work on the thing. No blockers." Repeat x8 teammates. 15 minutes of your life
            you'll never get back.
          </p>
          <p className="max-w-3xl text-muted">
            Meanwhile, in Slack: "Can someone recap what Sarah said? I was on mute making coffee." The dirty
            secret? Most developers say standups kill their flow and that they zone out during other
            people's updates. We're all just performing productivity instead of actually being productive.
          </p>
          <Card className="max-w-3xl bg-foreground text-white shadow-hero">
            <CardContent className="p-6 text-sm">
              “Dailies suck and are a waste of time” — Most common opinion amongst Youtube Software Engineer influencers
            </CardContent>
          </Card>
        </section>

        <section id="solution" className="section space-y-8 py-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">What if updates wrote themselves? And people actually read them?</h2>
            <p className="max-w-3xl text-muted">
              Sitdown pulls your team's actual work from Linear, Jira, and GitHub. Then rewrites it as updates
              worth opening. No meetings. No typing "fixed bug in auth flow" for the 47th time. Just automated
              updates with enough personality to make your PM snort-laugh.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>📥 Auto-import</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted">
                Pulls commits, PRs, tickets moved, comments added. Your work speaks for itself (finally).
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>✨ Humor modes</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted">
                Dad Mode. Meme Mode. Haiku Mode. Corporate BS Generator (for irony). Pick your vibe.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>📊 Actually useful</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted">
                Blocker alerts that get read. Weekly summaries people forward to leadership. Async &gt; synchronous.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="humor" className="section space-y-8 py-16">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold">Pick your fighter.</h2>
            <p className="max-w-2xl text-muted">
              Each update can sound like your team. Pick one mode, or let every teammate set their own.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {humorModes.map((mode) => (
              <Card key={mode.title} className="bg-white">
                <CardHeader>
                  <CardTitle>{mode.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted">
                  <p>{mode.description}</p>
                  <div className="whitespace-pre-line rounded-2xl border border-stroke bg-background px-4 py-3 text-foreground">
                    {mode.sample}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="section space-y-8 py-16">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Setup time: 4 minutes. Time saved: 3+ hours/week.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "Step 1",
                title: "Connect your tools",
                text: "Linear, Jira, GitHub, or all three. OAuth flow. No API keys to hunt down.",
              },
              {
                step: "Step 2",
                title: "Pick your humor settings",
                text: "Team-wide default + individual overrides. Because Dave in DevOps needs Meme Mode and that's valid.",
              },
              {
                step: "Step 3",
                title: "Choose your delivery",
                text: "Daily digest? Per-person channels? Friday team summary written as a sports recap? You do you.",
              },
              {
                step: "Step 4",
                title: "Sit down. Relax.",
                text: "Updates generate automatically. Your team reads them (we have the engagement data to prove it).",
              },
            ].map((item) => (
              <Card key={item.step}>
                <CardHeader className="pb-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{item.step}</p>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted">{item.text}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="section space-y-8 py-16">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Fridays just got interesting.</h2>
            <p className="max-w-2xl text-muted">
              Every Friday, Sitdown generates a team summary. But not a boring one. Choose your format:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {fridayFormats.map((format) => (
              <Card key={format.title}>
                <CardHeader>
                  <CardTitle>{format.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted">“{format.text}”</CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-foreground text-white">
            <CardContent className="p-6 text-sm">
              Teams report Friday summaries are forwarded to leadership 3x more than traditional status reports.
              Turns out executives also enjoy not being bored.
            </CardContent>
          </Card>
        </section>

        <section className="section space-y-8 py-16">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Blockers that actually get unblocked.</h2>
            <p className="max-w-3xl text-muted">
              The problem with "any blockers?" in standup: nobody wants to be the one to say yes. Sitdown watches
              for stuck tickets automatically. Then surfaces them in a way that's impossible to ignore.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>🚨 Plot twist in Sprint 47</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted">
                <p>
                  Looks like @josh has been in an epic battle with AUTH-234 for 7 days now. The ticket has seen
                  things. Josh has seen things.
                </p>
                <p>→ View ticket | → Send moral support</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Light-hearted delivery, serious utility.</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted">
                Blockers get addressed 41% faster when they're surfaced with humor instead of judgment. (We made
                that stat up, but it feels true, right?)
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="pricing" className="section space-y-8 py-16">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Priced for "I can expense this without asking finance."</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2 border-accent">
              <CardHeader>
                <CardTitle>Let's get rolling</CardTitle>
                <p className="text-3xl font-semibold"><span className="line-through line-through-width-20 decoration-accent/60 decoration-2">$10 per user/month</span></p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted">
                <p className="text-xs italic">We wish it was free, but we have to pay for tokens.</p>
                <ul className="space-y-2">
                  <li>✓ Unlimited teammates</li>
                  <li>✓ Unlimited humor</li>
                  <li>✓ Unlimited updates</li>
                  <li>✓ Slack, Jira & Linear integrations</li>
                  <li>✗ Limited sky (yes, the sky is the limit)</li>
                </ul>
                <Button className="w-full" onClick={openPaidDialog}>
                  Join waitlist
                </Button>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden opacity-50 pointer-events-none select-none">
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="h-[141%] w-px origin-center rotate-[30deg] bg-stroke" />
              </div>
              <CardHeader>
                <CardTitle>Cheapskate</CardTitle>
                <p className="text-3xl font-semibold">$0</p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted">
                <p className="text-xs italic">Love the product but hate paying? Bring your own Anthropic API key.</p>
                <ul className="space-y-2">
                  <li>✓ Unlimited teammates</li>
                  <li>✓ Unlimited humor</li>
                  <li>✓ Unlimited updates</li>
                  <li>✓ Slack, Jira & Linear integrations</li>
                  <li>✗ Limited dignity (we won't judge... much)</li>
                </ul>
                <Button variant="outline" className="w-full" disabled>
                  Coming soon
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-muted">
            Cancel anytime. We'll only cry a little.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                question: "What if my team has no sense of humor?",
                answer:
                  "We have a \"Professional with Personality\" mode that's 90% useful, 10% whimsy. Baby steps.",
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
              <Card key={faq.question} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-base">Q: {faq.question}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted">A: {faq.answer}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="section space-y-8 py-16">
          <h2 className="text-3xl font-semibold">Teams who've sat down and stayed down.</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.author}>
                <CardContent className="space-y-3 p-6 text-sm text-muted">
                  <p>“{item.quote}”</p>
                  <p className="font-semibold text-foreground">— {item.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-muted">
            {logos.map((logo) => (
              <span key={logo} className="rounded-full border border-stroke bg-white px-4 py-2">
                {logo}
              </span>
            ))}
          </div>
        </section>

        <section className="section py-16">
          <div className="rounded-[32px] bg-foreground px-6 py-16 text-center text-white">
            <h2 className="font-display text-3xl">Your team deserves updates worth reading.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/80">
              And you deserve your mornings back.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
                Get started →
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                Book a demo
              </Button>
            </div>
            <p className="mt-6 text-xs text-white/70">Setup takes 4 minutes. No meetings required. (Obviously.)</p>
          </div>
        </section>
      </main>

      <footer className="section pb-12 text-center text-sm text-muted">
        Sitdown © 2026 — Lose the standup, keep the updates.
      </footer>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          {submitted ? (
            <div className="space-y-4 text-center">
              <DialogTitle>You're in!</DialogTitle>
              <DialogDescription>We'll send your invite shortly. 🚀</DialogDescription>
              <Button onClick={() => setDialogOpen(false)}>Back to the page</Button>
            </div>
          ) : (
            <DialogHeader className="space-y-4">
              <div className="space-y-2">
                <DialogTitle>Join the waitlist</DialogTitle>
                <DialogDescription>
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
                    Work email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <Button type="submit" className="w-full">
                  Request access
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
