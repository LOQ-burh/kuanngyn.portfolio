import { ContactFormState } from "../interfaces";

export interface ContactFormRequest extends ContactFormState {
    sessionId: string;
}