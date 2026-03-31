// localhost:3000/demo

'use client'
import {Button} from "@/components/ui/button"
import { AwardIcon } from "lucide-react";
import { useState } from "react"

export default function DemoPage(){
    const [loading , setLoading] = useState(false);
    const [loading2 , setLoading2] = useState(false);
    
    const handleBocking = async ()=>{
        setLoading(true)
        await fetch('/api/demo/blocking',{method:"POST"})
    }   
    const  handleBackground = async() =>{
        setLoading2(true)
        await fetch('/api/demo/background',{method:"POST"});
        setLoading2(false);
    }
    return(
        <div className="p-8 space-x-4">
            <Button onClick={handleBocking}>
                {loading?"Loading...":"Blokcing"}
            </Button>
            <Button onClick={handleBackground}>
                {loading2?"Loading...":"background"}
            </Button>

        </div>
    )
}