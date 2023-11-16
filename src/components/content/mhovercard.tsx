import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Mhovercard() {
  return (
    <HoverCard>
      <HoverCardTrigger className="p-2 border">Hover</HoverCardTrigger>
      <HoverCardContent className="bg-slate-800">
        The React Framework – created and maintained by @vercel.
      </HoverCardContent>
    </HoverCard>
  );
}
