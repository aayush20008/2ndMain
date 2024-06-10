'use client';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <nav className='fixed top-0 left-0 right-0 p-4 md:p-6 md:gap-5 shadow-md bg-white z-50'>
            <div className="container mx-auto flex flex-row md:flex-row justify-between items-center">
                <a className="text-lg md:text-xl font-bold" href="#">2ndMain Project</a>
                {
                    session ? (
                        <>
                            <Button className='w-auto md:w-auto mr-4 ml-2 md:ml-0' onClick={() => signOut()}>Logout</Button>
                        </>
                    ) : (
                        <Link href='/sign-in'>
                            <Button className='w-full md:w-auto'>Login</Button>
                        </Link>
                    )
                }
            </div>
        </nav>
    );
}

export default Navbar;
