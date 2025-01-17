import { ReactNode } from "react";
// import { Footer } from "../organisms/footer";
// import { Header } from "../organisms/header";
// import { ShareSocial } from "../molecules/shareSocial";

export default function PageLayoutBlog({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <>
            {/* <Header /> */}
            {/* <ShareSocial /> */}
            <div className="w-full flex justify-center items-start">
                {children}
            </div>
            {/* <Footer /> */}
        </>

    );
}
