import { LineFullWidth } from "../../atoms/line";
import { LocaleSwitcher } from "../../atoms/switch";
import { Brand } from "../../molecules/brand";
import { Navigation } from "../../molecules/navigation";

export function Header() {
    return (
        <div className="w-full ">
            <div className="bg-slate-850 flex justify-center">
                <nav className="container flex justify-between p-2 text-white">
                    <Brand />
                    <Navigation />
                    <LocaleSwitcher />
                </nav>
            </div>
            <LineFullWidth />
        </div>
    );
}
