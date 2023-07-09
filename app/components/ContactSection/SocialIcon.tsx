interface SocialIconProps {
    icon: {
        url: string;
        image: string;
        name: string;
    };
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
    return (
        <a
            href={icon.url}
            className="flex flex-col gap-y-1 items-center justify-center h-16 w-16 hover:animate-bounce-slow transition-all"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                className="w-12 h-12"
                src={`/assets/images/social/${icon.image}.svg`}
                alt={icon.name}
            />
            <h1 className="text-sm font-semibold text-gray-700">{icon.name}</h1>
        </a>
    );
};

export default SocialIcon;