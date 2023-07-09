import {Tab} from "@headlessui/react";

const Skills = () => {
    const categories = {
        "Front End": [
            {
                id: 1,
                title: "Vue 3 : The Progressive JavaScript Framework",
                image: "vue",
            },
            {
                id: 2,
                title: "Tailwind CSS : A Utility-First CSS Framework",
                image: "tailwind-css",
            },
            {
                id: 3,
                title:
                    "React / Native : A JavaScript library for building user interfaces",
                image: "react",
            },
        ],
        "Back End": [
            {
                id: 1,
                title: "Laravel : The PHP Framework for Web Artisans",
                image: "laravel",
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: "Django : The Web framework for perfectionists with deadlines",
                image: "django",
                commentCount: 24,
                shareCount: 12,
            },
            {
                id: 3,
                title: "Express JS : Fast, unopinionated, minimalist web framework",
                image: "nodejs",
                commentCount: 24,
                shareCount: 12,
            },
        ],
        DevOps: [
            {
                id: 1,
                title: "AWS : Amazon Web Services",
                image: "aws",
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "Docker : Build, Ship, and Run Any App, Anywhere",
                image: "docker",
                commentCount: 1,
                shareCount: 2,
            },
            {
                id: 3,
                title: "GNU Linux : The Free Operating System",
                image: "linux",
                commentCount: 1,
                shareCount: 2,
            },
        ],
        "AI/ ML": [
            {
                id: 1,
                title:
                    "TensorFlow : An end-to-end open source platform for machine learning",
                image: "tensorflow",
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "Seaborn / Matplotlib : Statistical data visualization",
                image: "seaborn",
                commentCount: 1,
                shareCount: 2,
            },
        ],
    }
    return (
        <div className={'mx-auto'}>
            <div className="w-full max-w-lg px-2 py-6 xl:py-16 sm:px-0">
                <Tab.Group>
                    <Tab.List className="flex justify-around space-x-1 rounded-xl bg-brand_red2 p-1 lg:w-10/12 lg:mx-auto">
                        {Object.keys(categories).map((category) => (
                            <Tab key={category}>
                                {({ selected }) => (
                                    <div
                                        className={`w-full rounded-lg py-2.5 text-sm font-semibold leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-brand_red2 focus:outline-none focus:ring-2 font-semibold ${
                                            selected
                                                ? 'bg-white px-5 shadow text-brand_red2 dark:text-white dark:bg-gray-800'
                                                : 'text-white px-5 hover:bg-white/[0.12] hover:text-white bg-brand_red2'
                                        }`}
                                    >
                                        {category}
                                    </div>
                                )}
                            </Tab>
                        ))}
                    </Tab.List>

                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className="rounded-xl bg-white dark:bg-dark_background p-3 lg:w-10/12 lg:mx-auto ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 lg:w-10/12 lg:mx-auto"
                            >
                                <ul>
                                    {posts.map((post: any) => (
                                        <li
                                            key={post.id}
                                            className="relative rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200 cursor-pointer"
                                        >
                                            <div className="flex flex-row items-center">
                                                <img
                                                    src={`/assets/images/programming/${post.image}.svg`}
                                                    className="w-10 h-10 p-1"
                                                    alt="avatar"
                                                />
                                                <h3 className="text-sm font-medium leading-5 ml-2 text-gray-800 dark:text-gray-100">
                                                    {post.title}
                                                </h3>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
};

export default Skills;