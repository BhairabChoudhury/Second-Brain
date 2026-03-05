import type { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
       <div className="pr-2"> 
        {icon}
       </div> 
       <div>
         {text} 
       </div>
    </div>
  );
}
