 import { ShareIcon } from "../../icons/ShareIcon";
 //@ts-ignore
import Dashboard from "../../pages/Dashboard";
 
interface Cardprops {
   title :string ;
   link :string ;
   type : "twitter"|"youtube" |"instragram"; // tipe of content 
}
 export function Card ({title ,link,type } :Cardprops) { 
         return (
           <div>  
        {/* Card Container  */}
    <div  className="p-4 bg-yellow-200  shadow-lg  rounded-md border-gray-300  max-w-72 min-h-72 min-w-72">
     <div className="flex justify-between " >
        {/* Left Section: Title with Icon */}
        <div className="flex items-center text-md">
            <div className="pr-2 text-gray-500">
            <ShareIcon size="md"/>  
            </div>
          {title} 
        </div>
          {/* Right Section: Links with Icons */}
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
            <ShareIcon size='md'/>
            </div>
            <div className="text-gray-500">
           <ShareIcon size='md'/>
            </div>
          </div>
     </div>
     <div className="pt-4" >
      {type === "youtube" && (
                        <iframe
                            className="w-full rounded-sm"
                            src={

                             link.includes("youtu.be")
                           ?link.replace("youtu.be/", "www.youtube.com/embed/").split("?")[0]
                           :link.replace("watch?v=", "embed/")
                              
                              }
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    )}

                    {/* Render Twitter embed if type is "twitter" */}
                    {type === "twitter" && (
                        <blockquote className="twitter-tweet">
                            <a href={link.replace("x.com", "twitter.com")}></a>
                        </blockquote>
                    )}
     </div>
    </div>
 </div>

   )
}

/*
 {type === "twitter" && link && (
    <blockquote className="twitter-tweet">
      <a href={link.replace("x.com", "twitter.com")}></a>
    </blockquote>
  )}

*/