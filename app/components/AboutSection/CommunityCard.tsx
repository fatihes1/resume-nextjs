import Image from "next/image";

interface PropsType  {
    community: {
        detailURL: string,
        id: number,
        image: string,
        start_date: string,
        end_date: string,
        title: string,
    }
};

const CommunityCard = ({community}:PropsType) => {
    return (
        <a
            href={community.detailURL}
            target="_blank"
            className="w-11/12 lg:w-full lg:h-32 h-28 md:mt-4 rounded-md md:rounded-2xl shadow-md md:shadow-xl hover:bg-brand_orange/60 dark:hover:bg-brand_orange transition-colors bg-brand_orange/30 dark:bg-brand_orange/90 flex flex-row gap-x-3 md:gap-x-6 items-center justify-between p-3 md:p-4 cursor-pointer"
        >
            <div className="w-3/12 items-center justify-center h-full flex">
                <Image
                    width={100}
                    height={100}
                src={`/assets/images/${community.image}`}
                alt={community.title}
                className="w-full h-full rounded-lg grid place-items-center relative object-scale-down"
                />
            </div>
            <div className="w-6/12 justify-start h-full flex flex-col">
                <h1
                    className="font-semibold text-gray-700 md:text-lg lg:text-lg dark:text-gray-200"
                >
                    {community.title}
                </h1>
                <a
                    target="_blank"
                    href={community.detailURL}
                    className="font-medium text-gray-700 text-sm hover:underline dark:text-gray-800"
                >
                    <pre>$&nbsp;Show program&aposs page  </pre>
                </a>
            </div>
            <div
                className="w-3/12 items-end lg:justify-center h-full lg:text-xs flex flex-col gap-y-0 dark:text-gray-100 text-black font-semibold"
            >
                <h1>{community.start_date}</h1>
                <h1 className="items-center">-</h1>
                <h1>{community.end_date}</h1>
            </div>
        </a>
    )
};
export default CommunityCard;