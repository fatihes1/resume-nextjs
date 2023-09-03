'use client';
import Link from "next/link"
import Logo from '../../public/assets/images/es.png'
import LogoWhite from '../../public/assets/images/es_white.png'
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {Drawer} from "antd";
const Navbar = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [isSystemDarkMode, setIsSystemDarkMode] = useState(false);

    useEffect(() => {
        const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
        darkMode.addEventListener("change", (e) => {
            const newColorScheme = e.matches ? "dark" : "light";
            setIsSystemDarkMode(newColorScheme === "dark");
        });
        setIsSystemDarkMode(darkMode.matches);
    }, [isSystemDarkMode]);

    return (
        <div className={'dark:bg-dark_background pt-2'}>
            <div
                className="fixed-top container hidden lg:flex dark:bg-dark_background mx-auto justify-between w-full bg-white items-center font-bold pt-2 h-20 "
            >
                <div className="pl-20">
                    <Link href="/">
                        <Image
                            className="w-28 lg:w-20 xl:w-28 dark:hidden"
                            src={Logo}
                            alt="logo"
                        />
                        <Image
                            className={"w-28 lg:w-20 xl:w-28 hidden dark:inline-block"}
                            src={LogoWhite} alt={"logo"} />
                    </Link>
                </div>
                <div className="pr-20">
                    <ul
                        className="flex flex-row lg:gap-x-8 lg:text-lg xl:text-2xl lg:text-center gap-x-16 text-2xl text-gray-700 dark:text-gray-200 items-center"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About Me</Link>
                        </li>
                        <li>
                            <Link href="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact & Follow Me</Link>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="drawer drawer-end lg:hidden">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">

                    <div
                        className="fixed-top flex flex-row items-center justify-between px-4 pt-2 bg-white/80 dark:bg-dark_background"
                    >

                        <Link href="/">
                            <img
                                className="w-24 dark:hidden"
                                src="/assets/images/es.png"
                                alt="logo"
                            />
                            <img
                                className="w-24 hidden dark:inline-block"
                                src="/assets/images/es_white.png"
                                alt="logo "
                            />
                        </Link>

                        <label onClick={() => setShowDrawer(true)} htmlFor="my-drawer-4" className="btn btn-circle swap swap-rotate">
                            <svg
                                className="swap-off fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
                                />
                            </svg>

                            <svg
                                className="swap-on fill-red-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 512 512"
                            >
                                <polygon
                                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
                                />
                            </svg>
                        </label>
                        {
                            showDrawer && (
                                // eslint-disable-next-line react/jsx-no-undef
                                <Drawer  placement="right" onClose={() => setShowDrawer(false)} open={showDrawer}
                                    style={{backgroundColor: isSystemDarkMode ? '#252525' : '#F3F4F6'}}
                                >
                                    <ul
                                        className="flex flex-col gap-y-5 text-2xl text-gray-700 dark:text-gray-200 dark:bg-dark_background items-center"
                                    >
                                        <li className="focus:bg-slate-50">
                                            <Link onClick={() => setShowDrawer(false)} href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link onClick={() => setShowDrawer(false)} href="/about"
                                            >About Me</Link
                                            >
                                        </li>
                                        <li>
                                            <Link onClick={() => setShowDrawer(false)} href="/skills"
                                            >Skills</Link
                                            >
                                        </li>
                                        <li>
                                            <Link onClick={() => setShowDrawer(false)} href="/contact"
                                            >Contact & Follow Me</Link
                                            >
                                        </li>
                                        <li className="text-sm opacity-70 -mt-2">Created by Fatih ES © 2022</li>

                                    </ul>
                                </Drawer>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Navbar;