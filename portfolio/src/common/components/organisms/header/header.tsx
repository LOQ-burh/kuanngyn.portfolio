import { LineFullWidth } from "../../atoms/line";
import { Brand } from "../../molecules/brand";
import { GroupSwitcherHeader } from "../../molecules/groupSwitcher";
import { Navigation } from "../../molecules/navigation";

export function Header() {
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="w-[1222px] bg-slate-850 flex justify-center">
                    <nav className="container flex justify-between p-2">
                        <Brand />
                        <Navigation />
                        <GroupSwitcherHeader />
                    </nav>
                </div>
            </div>
            <LineFullWidth />
        </>
    );
}
