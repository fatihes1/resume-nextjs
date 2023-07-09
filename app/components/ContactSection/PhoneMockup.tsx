import SocialIcon from "@/app/components/ContactSection/SocialIcon";

interface PhoneMockupProps {
    class: string;
}
import CONTACT_INFO from "../../../public/assets/info/contact.json";

const PhoneMockup = ({ class: className }:PhoneMockupProps) => {
    return (
        <div className={className}>
            <div className="mockup-phone border-primary">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <div className="flex flex-col justify-between w-full h-full bg-gradient-to-tl from-purple-400/70 to-purple-100/40">
                            <div className="my-12 mx-5">
                                <div className="flex flex-wrap gap-x-2 gap-y-8 animate__animated animate__fadeInDownBig">
                                    {CONTACT_INFO.map((contact, index) => (
                                        <SocialIcon key={index} icon={contact} />
                                    ))}
                                </div>
                            </div>
                            <div className="mb-10 mx-5">
                                <div className="flex flex-wrap gap-x-2 gap-y-8">
                                    <a
                                        href="#"
                                        className="flex flex-col gap-y-1 items-center justify-center h-16 w-16 cursor-not-allowed"
                                        target="_blank"
                                    >
                                        <img
                                            className="w-14 h-14"
                                            src="/assets/images/social/phone.svg"
                                            alt="Phone"
                                        />
                                        <h1 className="text-sm font-semibold text-gray-700">Phone</h1>
                                    </a>
                                    <a
                                        href="https://www.google.com/search?q=fatih+es&oq=fatih+es&aqs=chrome..69i57j0i131i433i512j46i131i433i512j69i60l5.3978j0j4&client=ubuntu&sourceid=chrome&ie=UTF-8"
                                        className="flex flex-col gap-y-1 items-center justify-center h-16 w-16"
                                        target="_blank"
                                    >
                                        <img
                                            className="w-14 h-14"
                                            src="/assets/images/social/safari.svg"
                                            alt="Safari"
                                        />
                                        <h1 className="text-sm font-semibold text-gray-700">Safari</h1>
                                    </a>
                                    <a
                                        href="mailto:develop.fatihes@gmail.com"
                                        className="flex flex-col gap-y-1 items-center justify-center h-16 w-16"
                                        target="_blank"
                                    >
                                        <img
                                            className="w-14 h-14"
                                            src="/assets/images/social/mail.svg"
                                            alt="Mail"
                                        />
                                        <h1 className="text-sm font-semibold text-gray-700">Mail</h1>
                                    </a>
                                    <a
                                        href="https://open.spotify.com/user/r0g28k6i5dkyn0bxdytn8do8e"
                                        className="flex flex-col gap-y-1 items-center justify-center h-16 w-16"
                                        target="_blank"
                                    >
                                        <img
                                            className="w-14 h-14"
                                            src="/assets/images/social/spotify.svg"
                                            alt="Spotify"
                                        />
                                        <h1 className="text-sm font-semibold text-gray-700">Spotify</h1>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PhoneMockup;