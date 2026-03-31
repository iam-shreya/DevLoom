import {generateText} from 'ai'

import { google } from '@ai-sdk/google';

// const google = createGoogleGenerativeAI({
//     apiKey:"AIzaSyCxRoINIVcbainIR0eWY86i4o8OtTVQzYY",
// })

export async function POST() {

    const response = await generateText({
        model:google('gemini-2.5-flash'),
        prompt:'Write a chilli panner recipe for 4 people',
    })
    return Response.json({response});
}