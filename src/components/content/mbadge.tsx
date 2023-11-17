import { Badge } from "@/components/ui/badge";

export default function Mbadge() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge
          title="Add Friend"
          className="bg-slate-400 hover:scale-110 transition-all hover:cursor-pointer hover:border-1 border-slate-200 px-4 border text-sm hover:border-transparent rounded-none"
          variant="outline"
        >
          Tag 1
        </Badge>
        <Badge
          title="Follow"
          className="bg-slate-100 text-black hover:scale-110 transition-all hover:cursor-pointer hover:border-1 border-slate-200 px-4 border text-sm hover:border-transparent rounded-none"
          variant="outline"
        >
          Tag 2
        </Badge>
        <Badge
          title="Report User"
          className="bg-green-400 hover:scale-110 transition-all hover:cursor-pointer hover:border-1 border-slate-200 px-4 border text-sm hover:border-transparent rounded-none"
          variant="outline"
        >
          Approved
        </Badge>
        <Badge
          title="Report User"
          className="bg-red-400 hover:scale-110 transition-all hover:cursor-pointer hover:border-1 border-slate-200 px-4 border text-sm hover:border-transparent rounded-none"
          variant="outline"
        >
          Denied
        </Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge
          title="Add Friend"
          className="bg-slate-600 hover:scale-110 transition-all hover:cursor-pointer hover:border-1 border-white border-2 text-sm hover:border-transparent"
          variant="outline"
        >
          Tag 1
        </Badge>
        <Badge
          title="Follow"
          className="bg-slate-200 text-black hover:scale-110 transition-all hover:cursor-pointer hover:border-1 border-white border-2 text-sm hover:border-transparent"
          variant="outline"
        >
          Tag 2
        </Badge>
        <Badge
          title="Report User"
          className="bg-green-600 hover:scale-110 transition-all hover:cursor-pointer hover:border-1 border-white border-2 text-sm hover:border-transparent"
          variant="outline"
        >
          Approved
        </Badge>
        <Badge
          title="Report User"
          className="bg-red-600 hover:scale-110 transition-all hover:cursor-pointer hover:border-1 border-white border-2 text-sm hover:border-transparent"
          variant="outline"
        >
          Denied
        </Badge>
      </div>
    </div>
  );
}
