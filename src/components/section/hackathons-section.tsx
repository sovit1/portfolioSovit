/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";

export default function HackathonsSection() {
  return (
    <section id="hackathons">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Achievements</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </div>
        <Timeline className="p-0">
          {DATA.hackathons.map((hackathon) => {
            const result = "result" in hackathon ? (hackathon as { result?: string }).result : undefined;
            const rank = "rank" in hackathon ? (hackathon as { rank?: string }).rank : undefined;

            return (
            <TimelineItem key={hackathon.title + hackathon.dates} className="w-full flex items-stretch gap-4 sm:gap-6">
              <TimelineConnectItem
                className="items-start pt-5"
                lineClassName="group-data-[orientation=vertical]:top-[3.75rem] group-data-[orientation=vertical]:h-[calc(100%-0.5rem)]"
              >
                {hackathon.image ? (
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                )}
              </TimelineConnectItem>
              <article className="flex flex-1 flex-col justify-start gap-3 rounded-xl border border-border bg-background p-5 transition-all duration-200 hover:ring-2 hover:ring-muted min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 flex-col gap-1">
                    {hackathon.title && (
                      <h3 className="font-semibold leading-none">{hackathon.title}</h3>
                    )}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                      {hackathon.dates && <time>{hackathon.dates}</time>}
                      {hackathon.dates && hackathon.location && <span aria-hidden>/</span>}
                      {hackathon.location && <span>{hackathon.location}</span>}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    {rank && (
                      <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 text-center">
                        <span className="text-xs font-bold text-primary">{rank}</span>
                      </div>
                    )}
                    {result && (
                      <Badge
                        variant="outline"
                        className="h-6 shrink-0 px-2.5 text-[11px] font-semibold"
                      >
                        {result}
                      </Badge>
                    )}
                  </div>
                </div>
                {hackathon.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {hackathon.description}
                  </p>
                )}
                {hackathon.links && hackathon.links.length > 0 && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {hackathon.links.map((link, idx) => (
                      <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
}
