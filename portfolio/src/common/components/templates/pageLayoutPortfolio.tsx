import { ReactNode } from "react";
import { Footer } from "../organisms/footer";
import { Header } from "../organisms/header";
import { ShareSocial } from "../molecules/shareSocial";

type Props = {
    children: ReactNode;
};

export function PageLayoutPortfolio({ children }: Props) {
    return (
        <>
            <Header />
            <ShareSocial />
            <div className="w-full flex justify-center items-start">
                {children}
            </div>
            <Footer />
        </>

    );
}
