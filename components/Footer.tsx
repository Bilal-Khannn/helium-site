'use client';
import { Separator } from './ui/separator';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import queryString from 'query-string';
import { Button } from './ui/button';
import { MdEmail } from 'react-icons/md';

export const Footer = () => {
    const router = useRouter();

    // const handleClick = () => {
    //     const emailAddress = 'contact@starkbull.xyz';
    //     const subject = 'Contact Us';
    //     const body = 'Hello Starkbull Team,';
    //     const queryStringParams = queryString.stringify({ subject, body });
    //     const mailtoLink = `mailto:${emailAddress}?${queryStringParams}`;

    //     router.push(mailtoLink);
    // };

    const handleClick = () => {
        const emailAddress = 'contact@starkbull.xyz';
        const subject = 'Contact Us';
        const body = 'Hello Starkbull Team,';
        const queryStringParams = queryString.stringify({ subject, body });
        const mailtoLink = `mailto:${emailAddress}?${queryStringParams}`;

        // Open the mailto link in a new tab/window
        window.open(mailtoLink, '_blank');
    };

    return (
        <div className=" max-w-6xl mx-auto">
            <div className="flex justify-center items-center my-8 gap-4">
                <Image
                    src={'/bull-logo.jpeg'}
                    alt="bull logo"
                    height={80}
                    width={80}
                    className="rounded-full"
                    priority
                />
                <p className="italic text-3xl">Starkbull</p>
            </div>

            <div className="flex justify-center items-center mb-10">
                <Button className="z-50" size={'lg'} onClick={handleClick}>
                    <span className="mr-2 text-lg">
                        <MdEmail />
                    </span>
                    Contact Us{' '}
                </Button>
            </div>

            <div className="flex justify-center items-center gap-8 text-custom-orange">
                <Link
                    href="https://twitter.com/starkbull_off"
                    target="__blank"
                    rel="noreferrer noopener"
                    className="text-5xl z-50"
                >
                    <FaXTwitter />
                </Link>
                <Link
                    className="text-5xl z-50"
                    href="https://t.me/starkbullchat"
                    target="__blank"
                    rel="noreferrer noopener"
                >
                    <FaTelegramPlane />
                </Link>
            </div>
            <Separator className="my-8" />
            <p className="text-center text-lg">
                © 2024 Starkbull • All Rights Reserved
            </p>
        </div>
    );
};
