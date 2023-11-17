import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import geralt from "../../assets/geralt.jpg";

export default function Mhovercard() {
  return (
    <>
      <div className="flex gap-4 flex-wrap">
        <HoverCard>
          <HoverCardTrigger className="p-2 border hover:cursor-pointer">
            Hover
          </HoverCardTrigger>
          <HoverCardContent className="bg-slate-800 w-full">
            <h2 className="text-lg font-bold">Card 1</h2>
            <p>The React Framework – created and maintained by @vercel.</p>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="p-2 border hover:cursor-pointer">
            Hover 2
          </HoverCardTrigger>
          <HoverCardContent className="bg-white text-black w-full h-1/2 border-slate-600">
            <h2 className="text-lg font-bold">Card 2</h2>
            <p>Another card with a different style 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿</p>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="p-2 border hover:cursor-pointer">
            Hover 3
          </HoverCardTrigger>
          <HoverCardContent className="bg-white text-black w-full border-slate-600">
            <h2 className="text-lg font-bold">Card 3</h2>
            <img width={200} src={geralt} />
          </HoverCardContent>
        </HoverCard>
      </div>
      <p className="mt-4">
        It is a long established fact that a reader will be
        <span>
          {" "}
          <HoverCard>
            <HoverCardTrigger className="hover:cursor-pointer text-blue-400">
              distracted
            </HoverCardTrigger>
            <HoverCardContent className="bg-slate-800 w-full">
              <p>Unable to concentrate because one's mind is preoccupied.</p>
            </HoverCardContent>
          </HoverCard>{" "}
        </span>
        by the readable content of a page when looking at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal distribution
        of letters, as opposed to using 'Content here, content here', making it
        look like readable{" "}
        <span>
          {" "}
          <HoverCard>
            <HoverCardTrigger className="hover:cursor-pointer text-blue-400">
              English
            </HoverCardTrigger>
            <HoverCardContent className="bg-slate-800 w-full">
              <p>
                English is a West Germanic language in the Indo-European
                language family, whose speakers, called Anglophones, originated
                in early medieval England.
              </p>
            </HoverCardContent>
          </HoverCard>
        </span>
        . Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy. Various versions have
        evolved over the years, sometimes by accident, sometimes on purpose
        (injected humour and the like).
      </p>
    </>
  );
}
