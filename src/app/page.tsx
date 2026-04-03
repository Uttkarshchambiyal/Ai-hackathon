import { Hero } from "@/components/blocks/hero"
import { DottedSurface } from "@/components/ui/dotted-surface"

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-foreground relative flex flex-col items-center">
      <DottedSurface />
      <Hero
        title="Your Ultimate Study Buddy Awaits"
        subtitle="Join a community where students can share notes, collaborate on assignments, and get help for their studies. Ace your exams together."
        actions={[
          {
            label: "Get Started",
            href: "/chat",
            variant: "outline"
          },
          {
            label: "Get Help",
            href: "/help",
            variant: "default"
          }
        ]}
        titleClassName="text-5xl md:text-6xl font-extrabold"
        subtitleClassName="text-lg md:text-xl max-w-[600px]"
        actionsClassName="mt-8"
      />
    </div>
  )
}
