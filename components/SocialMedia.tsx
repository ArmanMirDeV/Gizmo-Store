import React from "react";
import {
  Youtube,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Slack,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "GitHub",
    href: "https://github.com/ArmanMirDeV",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "LinkedIn",
    href: "www.linkedin.com/in/armanmirdev",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/Arman.Mir.8583",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://slack.com/",
    icon: <Slack className="w-5 h-5" />,
  },
];

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialMedia = ({className, iconClassName, tooltipClassName}:Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5  ", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild >
              <Link
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("p-2 border rounded-full hover:text-white hoverEffect hover:border-shop_light_green ", iconClassName)}>
                
                {item?.icon}{" "}

              </Link>
            </TooltipTrigger>

            <TooltipContent className={cn("bg-white text-darkColor font-semibold border-shop_light_green ", tooltipClassName)} >
              {
                item?.title
              }
            </TooltipContent>


          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;


