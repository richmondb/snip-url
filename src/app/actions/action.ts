'use server'

import {urlSchema} from "@/lib/schema/url-schema";
import {insertUrl} from "@/db/db";
import generateShortCode from "@/lib/generate-short-url";
import {revalidatePath} from "next/cache";

type returnState = | {
    success: boolean,
    message?: string,
    errors?:{
        url?: string[]
    } | null
    input?: string,
}| undefined

export const addUrl = async (prevState: returnState,form: FormData) => {

    // const url  = form.get('url')
    //
    // console.log('url', url)

    const formData = {
        url: form.get('url')
    }

    console.log(formData)

    // await new Promise((resolve) => setTimeout(resolve, 1000))

    const parsedUrl = urlSchema.safeParse(formData)

    console.log("parsedurl success", parsedUrl.success)

    if (!parsedUrl.success) {
        const errors = parsedUrl.error.flatten().fieldErrors;
        console.error(
            {
                success: false,
                message: '',
                errors: errors,
                input: (formData.url as string)
            }
        )

        revalidatePath('/')

        return {
            success: false,
            message: '',
            errors: errors,
            input: (formData.url as string)
        }
    }

    const uid = generateShortCode()

    console.log(uid)

    const result = insertUrl(formData.url as string, uid)

    console.log(result)

    revalidatePath('/')

    return {
        success: true,
        message: 'Successfully inserted',
        errors: null,
        input: (formData.url as string)
    }

}