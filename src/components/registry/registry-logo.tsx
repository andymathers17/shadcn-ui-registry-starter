import { FlagIcon, Squirrel } from "lucide-react";

export function RegistryLogo() {
  return (
    <>
      <div className="flex-shrink-0 rounded-md bg-primary p-1">
        <FlagIcon className="size-5 text-secondary" />
      </div>
      <span className="font-semibold">ClearGov</span>
    </>
  );
}
