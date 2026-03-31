import { generateText } from "ai";
import { inngest } from "./client";
import { google } from "@ai-sdk/google";

export const demoGenerate = inngest.createFunction(
  { id: "demo-generate" },
  { event: "demo/generate" },
    
     async ({ step }) => {
     const result=await step.run("generate-text", async () => {
       return await generateText({
        model: google("gemini-2.5-flash"),
        prompt: "Write the best recipe for chilli paneer",
      });
    });
    return result;
   
  }
);