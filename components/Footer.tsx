import { Separator } from './ui/separator';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <div className=' max-w-6xl mx-auto'>
            <div className="flex justify-center items-center my-8 gap-4">
                <Image
                    src={'/bull-logo.jpeg'}
                    alt="bull logo"
                    height={80}
                    width={80}
                    className="rounded-full"
                    priority
                />
                <p className='italic text-3xl'>Starkbull</p>
            </div>
            <div className="flex justify-center items-center gap-8 text-custom-orange">
                <Link
                    href={'www.google.com'}
                    target="_blank"
                    className="text-5xl "
                >
                    <FaXTwitter />
                </Link>
                <Link
                    className="text-5xl"
                    href={'www.google.com'}
                    target="_blank"
                >
                    <FaTelegramPlane />
                </Link>
                <Link
                    className="text-5xl"
                    href={'www.google.com'}
                    target="_blank"
                >
                    <FaDiscord />
                </Link>
            </div>
            <Separator className="my-8" />
            <p className="text-center text-lg">
                © 2024 Starkbull • All Rights Reserved
            </p>
        </div>
    );
};
