import { ReactNode } from "react";
import { Header } from "../organisms/header";
import { ShareSocial } from "../molecules/shareSocial";
import { CursorGlobal } from "../atoms/cursor";

type Props = {
    children: ReactNode;
};

export function PageLayoutPortfolio({ children }: Props) {
    return (
        <>
            <Header />
            <ShareSocial />
            <div className="flex justify-center items-start">
                <div className="flex justify-center flex-col items-center w-[1222px] min-h-[72vh]">
                    {children}
                </div>  
            </div>
            <CursorGlobal />
        </>
    );
}
