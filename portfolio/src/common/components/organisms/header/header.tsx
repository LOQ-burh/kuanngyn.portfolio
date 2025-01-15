import { LineFullWidth } from "../../atoms/line";
import { LocaleSwitcher } from "../../atoms/switch";
import { Brand } from "../../molecules/brand";
import { Navigation } from "../../molecules/navigation";

export function Header() {
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="w-[1222px] bg-slate-850 flex justify-center">
                    <nav className="container flex justify-between p-2 text-white">
                        <Brand />
                        <Navigation />
                        <LocaleSwitcher />
                    </nav>
                </div>
            </div>
            <LineFullWidth />
        </>
    );
}
