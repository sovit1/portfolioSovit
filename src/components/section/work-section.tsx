/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, type KeyboardEvent } from "react";
import { Badge } from "@/components/ui/badge";
import { Timeline, TimelineConnectItem, TimelineItem } from "@/components/timeline";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-10 p-1 border rounded-full shadow ring-2 ring-border bg-card flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-10 bg-card p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  const handleCardOpen = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    url: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardOpen(url);
    }
  };

  return (
    <Timeline className="p-0">
      {DATA.work.map((work) => (
        <TimelineItem
          key={`${work.company}-${work.start}`}
          className="w-full flex items-stretch gap-4 sm:gap-6"
        >
          <TimelineConnectItem
            className="items-start pt-5"
            lineClassName="group-data-[orientation=vertical]:top-[3.75rem] group-data-[orientation=vertical]:h-[calc(100%-0.5rem)]"
          >
            <LogoImage src={work.logoUrl} alt={work.company} />
          </TimelineConnectItem>
          <article
            role="button"
            tabIndex={0}
            onClick={() => handleCardOpen(work.href)}
            onKeyDown={(event) => handleCardKeyDown(event, work.href)}
            className="group flex flex-1 flex-col gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] hover:border-foreground/20 hover:ring-2 hover:ring-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold leading-none">{work.company}</h3>
                  {work.badges.map((badge) => (
                    <Badge
                      key={badge}
                      variant="outline"
                      className="h-5 px-2 text-[11px] font-medium"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{work.title}</p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                  <time className="tabular-nums">
                    {work.start} - {work.end ?? "Present"}
                  </time>
                  <span aria-hidden>/</span>
                  <span>{work.location}</span>
                </div>
              </div>
              <div
                className="text-muted-foreground hover:text-foreground transition-colors rounded-sm"
                aria-label={`Open ${work.company}`}
              >
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </div>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {work.description
                .split("\n")
                .map((item) => item.replace(/^-\s*/, "").trim())
                .filter(Boolean)
                .map((item) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
          </article>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
