"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from './button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import { ModeToggle } from '../ThemeButton';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const [progress, setProgress] = React.useState(0)
    const pathName = usePathname()

    React.useEffect(() => {
        setProgress(30)
        setTimeout(() => {
            setProgress(70)
        }, 100);
        setTimeout(() => {
            setProgress(100)
        }, 800);
    }, [pathName])

    React.useEffect(() => {
        setTimeout(() => {
            setProgress(0)
        }, 900);
    }, [])

    return (
        <nav className=" p-4 bg-background/50 sticky top-0  backdrop-blur border-b z-10">
            <LoadingBar
                color="#f11946"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="container mx-auto flex justify-between items-center">
                <div className=" text-lg font-bold">
                    <Link href="/">
                        Kuldeep
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="text-gray-300 hover:text-white hover:bg-gray-700  transition-transform duration-300 ease-in-out transform hover:scale-105 px-2 py-1 rounded">Home</Link>
                    <Link href="/about" className="text-gray-300 hover:text-white hover:bg-gray-700  transition-transform duration-300 ease-in-out transform hover:scale-105 px-2 py-1 rounded">About</Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white hover:bg-gray-700  transition-transform duration-300 ease-in-out transform hover:scale-105 px-2 py-1 rounded">Contact</Link>
                    <Link href="/blog" className="text-gray-300 hover:text-white hover:bg-gray-700  transition-transform duration-300 ease-in-out transform hover:scale-105 px-2 py-1 rounded">Blog</Link>
                    <div className="flex gap-4 items-center">
                        <Button className="mx-1">Login</Button>
                        <Button>SignUp</Button>
                        <ModeToggle />
                    </div>
                </div>
                <div className="md:hidden">
                    <Sheet>
                        <span className="mr-6">
                            <ModeToggle />
                        </span>
                        <SheetTrigger>
                            {/* Hamburger Icon */}
                            <svg className=" w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </SheetTrigger>

                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">Kuldeep Blog</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6">
                                        <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                                        <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
                                        <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                                        <Link href="/blog" className="text-gray-300 hover:text-white">Contact</Link>
                                        <div>
                                            <Button className="mx-1 text-xs">Login</Button>
                                            <Button className="mx-1 text-xs">SignUp</Button>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>

        </nav>
    );
};

export default Navbar;
