import { Root, Submit } from "@radix-ui/react-form";
import { FieldInputCustomizable } from '../../molecules/fieldInput';
import { TextAreaCustomizable } from "../../molecules/textArea";
import { ButtonSubmitCustomizable } from "../../atoms/button";

export function CustomizazbleFormContact() {
    return (
        <Root className="w-[260px]">
            <FieldInputCustomizable
                label="Email"
                messageMissing="Please enter your email"
                messageMismatch="Please provide a valid email"
            />

            <TextAreaCustomizable
                label="Question"
                messageMissing="Please enter a question"
            />

            <Submit asChild>
                <ButtonSubmitCustomizable name="Send for me!"/>
            </Submit>
        </Root>
    );
}