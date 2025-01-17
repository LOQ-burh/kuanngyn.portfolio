import { Field, Label, Message, Control } from "@radix-ui/react-form";

export interface TextAreaCustomizable {
    label: string;
    messageMissing: string;
}
export function TextAreaCustomizable({
    label,
    messageMissing
}: TextAreaCustomizable) {
    return (
        <Field className="mb-2.5 grid" name="question">
            <div className="flex items-baseline justify-between">
                <Label className="text-[15px] font-medium leading-[35px] text-white">
                    {label}
                </Label>
                <Message
                    className="text-[13px] text-white opacity-80"
                    match="valueMissing"
                >
                    {messageMissing}
                </Message>
            </div>
            <Control asChild>
                <textarea
                    className="box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded bg-blackA2 p-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                    required
                />
            </Control>
        </Field>
    );
}
