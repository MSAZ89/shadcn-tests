import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Mavatar() {
  return (
    <div className="flex flex-col gap-2 flex-wrap">
      <div className="flex gap-2 flex-wrap">
        <Avatar>
          <AvatarImage title="Avatar" src="https://picsum.photos/42/25" />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage title="Avatar" src="https://picsum.photos/43/25" />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage title="Avatar" src="https://picsum.photos/44/25" />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Avatar>
          <AvatarImage title="Avatar" src="https://picsum.photos/45/25" />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage title="Avatar" src="https://picsum.photos/46/25" />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage title="Avatar" src="https://picsum.photos/47/25" />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Avatar>
          <AvatarImage title="Avatar" src="https://picsum.photos/48/25" />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage title="Avatar" src="https://picsum.photos/49/25" />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage title="Avatar" src="https://picsum.photos/50/25" />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
