
import { HoverEffect } from "./card-hover-effect";
import { projects } from "@/data/projects";

export default function Hero() {

    return (
        <div className="bg-[#f4cdce] min-h-screen">
            <h1 className="text-[#552e42] tracking-wide p-6 underline font-extrabold text-6xl font-cute">Digital Love Letters</h1>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>
    )
}