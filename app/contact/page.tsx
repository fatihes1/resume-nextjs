import PhoneMockup from "@/app/components/ContactSection/PhoneMockup";

export default function Contact() {
    return (
        <div>
            <div
                className="lg:calc-h-full-20 h-screen overflow-y-auto overflow-x-hidden lg:overflow-hidden pb-8 lg:pb-0 md:pt-14 dark:bg-dark_background"
            >
                <div className="container mx-auto mt-4 lg:mt-14">
                    <div className="flex flex-col lg:flex-row justify-center">
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <PhoneMockup class="animate__animated animate__fadeInLeftBig"/>
                        </div>
                        <div
                            className="w-full lg:w-1/2 flex flex-col items-start animate__animated animate__fadeInRightBig"
                        >
                            <h1
                                className="text-5xl mt-5 lg:mt-0 font-bold text-center mx-auto sm:mx-auto lg:text-4xl lg:ml-0 lg:text-start text-gray-700 dark:text-purple-700"
                            >
                                Get in Touch With Me!
                            </h1>
                            <div className="mx-auto lg:ml-0">
                                <img
                                    src="/assets/images/hand3.png"
                                    alt="hand"
                                    className="w-full animate__animated hidden lg:flex animate__shakeX animate__infinite infinite animate__slower 3s"
                                />
                                <img
                                    src="/assets/images/hand2.png"
                                    alt="hand"
                                    className="w-full animate-bounce-slow mt-8 lg:hidden mx-auto"
                                />
                            </div>
                            <div
                                className="flex flex-col mx-4 lg:mr-8 text-center lg:text-left items-center lg:items-start gap-y-6 mt-5"
                            >
                                <h2
                                    className="text-2xl lg:text-xl font-medium text-gray-600 dark:text-gray-100"
                                >
                                    Hello, you can get in touch with me via the phone connections on
                                    the side. You are free to enquire about whatever you are
                                    interested in, solicit advise from others, and of course, offer
                                    your own.
                                </h2>
                                <h2
                                    className="text-2xl lg:text-xl font-medium text-gray-600 dark:text-gray-100"
                                >
                                    Please click the button below to view my CV if you are thinking
                                    about hiring me.
                                </h2>
                                <div className="text-center pb-20">
                                    <a
                                        v-wave
                                        href="https://github.com/fatihes1/CV/blob/main/Fatih%20Es%20-%20Resume.pdf"
                                        target="_blank"
                                        aria-label=""
                                        className="inline-flex w-full h-10 px-10 py-5 border-2 items-center font-semibold transition-colors duration-200 rounded-lg dark:bg-purple-700 dark:text-gray-50 dark:hover:bg-slate-50 dark:hover:text-purple-700 bg-brand_background hover:bg-purple-700 text-purple-700 hover:text-white border-purple-700 hover:border-purple-700"
                                    >
                                        Show CV
                                        <svg
                                            className="inline-block w-3 ml-2"
                                            fill="currentColor"
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}