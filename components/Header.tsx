'use client';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ModeToggle } from './mode-toggle';
import { useState } from 'react';
import { MobileNavSheet } from './ui/sheet';

export const Header = () => {
    const [sheetOpen, setSheetOpen] = useState<boolean>(false);
    return (
        <>
            <MobileNavSheet sheetOpen={sheetOpen} setSheetOpen={setSheetOpen} />
            <div className=" items-center justify-center hidden lg:flex">
                <div className=" items-center mt-7 flex gap-12 font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-custom-orange transition delay-150">
                    <Link href={'#'}>Tokenomics</Link>
                    <Link href={'#roadmap'} scroll={true}>
                        Roadmap
                    </Link>
                    <Link href={'#'}>Integrations</Link>
                    <Link href={'#'}>Art</Link>
                    <Link href={'#'}>NFTs</Link>
                </div>
            </div>
            <div className="flex justify-between items-center lg:hidden m-6 z-50">
                <div
                    className="text-custom-orange text-4xl cursor-pointer"
                    onClick={() => {
                        setSheetOpen(true);
                    }}
                >
                    <GiHamburgerMenu />
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </>
    );
};
