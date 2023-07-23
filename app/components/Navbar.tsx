'use client';
import Link from "next/link"
import Logo from '../../public/assets/images/es.png'
import Image from "next/image";
import React, {useState} from "react";
import {Drawer} from "antd";
const Navbar = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    return (
        <>
            <div
                className="fixed-top container hidden lg:flex dark:bg-dark_background mx-auto justify-between w-full bg-brand_background items-center font-bold mt-2 h-20 bg-white"
            >
                <div className="ml-20">
                    <Link href="/">
                        <Image
                            className="w-28 lg:w-20 xl:w-28 dark:hidden"
                            src={Logo}
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="mr-20">
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
                        className="fixed-top flex flex-row items-center justify-between px-4 pt-2 bg-brand_background dark:bg-dark_background"
                    >
                        <label className="swap swap-rotate p-2 rounded-md">

                            <input type="checkbox" />

                            <svg
                                className="swap-off dark:fill-gray-200 fill-current w-10 h-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                                />
                            </svg>

                            <svg
                                className="swap-on dark:fill-gray-200 fill-current w-10 h-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                                />
                            </svg>
                        </label>
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
                                <Drawer  placement="right" onClose={() => setShowDrawer(false)} open={showDrawer}>
                                    <ul
                                        className="flex flex-col gap-y-5 text-2xl text-gray-700 dark:text-gray-200 items-center"
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
                                        <li className="text-sm -mt-4">Created by Fatih ES © 2022</li>

                                    </ul>
                                </Drawer>
                            )
                        }
                    </div>
                </div>

            </div>
        </>
    )
};

export default Navbar;