'use client';
import Career from "@/app/components/SkillsSection/Career";
import Skills from "@/app/components/SkillsSection/Skills";
import Image from "next/image";

const Cover = () => {
    return (
        <div className="mx-auto lg:max-w-screen-xl">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 animate__animated animate__backInRight">
                    <h1
                        className="text-center text-3xl xl:text-5xl mx-auto xl:mt-10 font-bold text-gray-700 dark:text-gray-100"
                    >
                        Check Out My Skills
                    </h1>
                    <Image src="/assets/images/avatar1.png" alt={'avatar'} width={80} height={80} className="w-80 h-80 mx-auto"/>
                    <Skills />
                </div>
                <div
                    className="w-full lg:w-1/2 flex flex-col animate__animated animate__backInLeft"
                >
                    <h1
                        className="text-center text-3xl xl:text-5xl mx-auto xl:mt-10 font-bold text-gray-700 dark:text-gray-100"
                    >
                        Experiences
                    </h1>
                    <Career />
                </div>
            </div>
        </div>
    )
};

export default Cover;