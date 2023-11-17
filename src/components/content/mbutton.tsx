import { Button } from "@/components/ui/button";

export default function Mbutton() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button className="border bg-slate-200 text-black hover:text-white">
        Normal
      </Button>
      <Button className="hover:bg-slate-600" variant="outline">
        Outline
      </Button>
      <Button className="hover:border-slate-400 hover:border transition-all border-slate-500 border">
        Outline 2
      </Button>
    </div>
  );
}
