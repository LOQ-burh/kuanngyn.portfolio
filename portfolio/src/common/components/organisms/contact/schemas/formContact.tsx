import * as yup from 'yup';

import { ContactFormState } from '../interfaces';

export const contactFormSchema: yup.ObjectSchema<ContactFormState> = yup.object({
    fullName: yup.string().required('Tên đầy đủ là bắt buộc'),
    mail: yup.string().email().required('Email là bắt buộc'),
    phone: yup.string().required('Số điện thoại là bắt buộc'),
    message: yup.string().required('Nội dung tin nhắn là bắt buộc'),
}) 