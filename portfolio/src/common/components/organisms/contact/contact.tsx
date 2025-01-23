import { CustomizableFormContact } from "../formContact";

export function ContactPage() {
    return (
        <div className="w-[1222px] h-[80vh] mb-2">
            <h2 className="text-6xl font-semibold">Contact</h2>
            <div className="flex justify-between gap-x-4 mt-14">
                <div className="text-xl">
                    <div className="w-max">Have a Question?</div>
                    <div className="mt-2 w-max">Or Just want to say Hi? Drop me a message!</div>
                </div>
                <CustomizableFormContact />
            </div>
        </div>
    );
}
