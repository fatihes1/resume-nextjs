import Link from "next/link"
import WelcomePicture from '../../public/assets/images/welcome.png'
import Image from "next/image"
const Header = () => {
    return (
        <header className={'mt-20 '}>
            <div className="flex lg:mx-auto flex-col lg:flex-row">
                <div className="container mx-auto lg:calc-h-full-40">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-col gap-y-1 lg:gap-y-3 w-full lg:w-1/2 animate__animated animate__fadeInLeftBig">
                            <div className="ml-6 lg:ml-0">
                                <span
                                    className="w-16 h-16 border-4 border-brand_green rounded-full grid place-items-center relative lg:mb-4 animate-spin-slow"
                                >
                                    <span
                                        className="absolute -top-6 -left-10 w-16 h-16 bg-brand_green scale-95 rounded-full -z-1 bg-opacity-25 dark:bg-opacity-100"
                                    ></span>
                                </span>
                            </div>
                            <div
                                className="font-bold text-5xl sm:text-center lg:text-start lg:text-6xl xl:text-7xl ml-5 lg:ml-20 mt-2 lg:mt-14"
                            >
                                <h1 className="dark:text-gray-200">
                                    Hi! I am
                                    <span
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-brand_green to-purple-600 ml-4">Fatih</span>
                                     <span
                                        className="text-brand_orange lg:text-start lg:text-4xl text-2xl block mt-4"
                                    >
                                        Software Developer
                                        </span>
                                </h1>
                            </div>
                            <div className="ml-5 lg:ml-20 mt-1 lg:mt-4 sm:text-center lg:text-start">
                                <h2 className="text-gray-600 dark:text-gray-200 font-bold lg:text-2xl">
                                    from Ankara, Turkey
                                </h2>
                            </div>

                            <Link
                                href="/about"
                                className="lg:text-sm bg-gradient-to-b sm:mx-auto from-brand_red2/75 to-brand_red2 w-1/2 lg:w-1/2 px-5 lg:px-10 py-2 lg:py-4 text-center rounded-full ml-5 lg:ml-20 mt-4 font-bold text-white animate-bounce-slow duration-300b"
                            >
                                DISCOVER
                            </Link>

                            <div className="flex justify-end mr-10 lg:mr-20 mt-7">
                                <span
                                    className="w-10 h-10 border-4 border-brand_orange rounded-full grid place-items-center relative mb-4 animate-spin-slow"
                                >
                                    <span
                                        className="absolute -bottom-10 -left-10 w-14 h-14 bg-brand_orange scale-150 rounded-full -z-1 bg-opacity-25 dark:bg-opacity-100"
                                    ></span>
                                </span>
                            </div>
                        </div>
                        <div
                            className="flex lg:justify-items-start sm:w-4/5 sm:mx-auto lg:w-1/2 lg:h-2/3 lg:my-auto animate__animated animate__fadeInRightBig"
                        >
                            <Image src={WelcomePicture} alt="welcome_header" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;