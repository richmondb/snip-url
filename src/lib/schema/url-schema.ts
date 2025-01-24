import {z} from 'zod';

export const urlSchema = z.object({
    url: z.string().refine((value) => /^(https?):\/\/(?=.*\.[a-z]{2,})[^\s$.?#].[^\s]*$/i.test(value), {
        message: 'Please enter a valid URL',})
})