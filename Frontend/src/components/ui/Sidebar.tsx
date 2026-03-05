
import  {TwitterIcon} from "../../icons/TwitterIcon";
import  {YoutubeIcon } from "../../icons/YoutubeIcon";
import  {SidebarItem}  from "./SidebarItem";
import { Logo } from "../../icons/Logo";
export function Sidebar (){
    return (
       <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="pt-4 flex text-3xl items-center font-bold ">
         <div className=" pr-2">
            <Logo/>
             </div>
            Brainly
        </div>
           <div className="pt-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
         </div>

       </div>
    )
}