import {generateText} from 'ai'
import {inngest} from '@/inngest/client'
import { google } from '@ai-sdk/google';

// const google = createGoogleGenerativeAI({
//     apiKey:"AIzaSyCxRoINIVcbainIR0eWY86i4o8OtTVQzYY",
// })

export async function POST() {

   await inngest.send({
        name:'demo/generate',
        data:{}
   });
    return Response.json({});
}