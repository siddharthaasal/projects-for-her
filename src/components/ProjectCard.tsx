"use client";


import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";


interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    link: string;
}

export default function ProjectCard({ title, description, imageSrc, imageAlt, link }: ProjectCardProps) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 text-left dark:text-neutral-300"
                >
                    {description}
                </CardItem>
                <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                >
                    <img
                        src={imageSrc}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={imageAlt}
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    {/* <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="a"
                        href="https://github.com/siddharthaasal/fitness-hub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Try now →
                    </CardItem> */}
                    <CardItem
                        translateZ={20}
                        translateX={40}
                        as="a"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Open
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
