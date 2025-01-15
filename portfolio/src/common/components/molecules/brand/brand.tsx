import { GeistMono } from 'geist/font/mono';

import { LogoIcon } from "../../atoms/logo";
import { cn } from "@/common/utils";

export function Brand() {
    return ( 
        <div className={cn(GeistMono.className,"flex gap-1 items-center font-semibold")}>
            <LogoIcon />
            <div className="">kuanngyn</div>
        </div>
     );
}