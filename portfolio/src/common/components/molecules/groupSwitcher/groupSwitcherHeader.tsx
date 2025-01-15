import { LocaleSwitcher, ThemeSwitcher } from "../../atoms/switch";

export function GroupSwitcherHeader() {
    return ( 
        <div className="flex gap-2">
            <LocaleSwitcher/>
            <ThemeSwitcher />
        </div>
     );
}
