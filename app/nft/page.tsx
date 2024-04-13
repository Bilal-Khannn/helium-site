'use client';
import { AuroraBackground } from '@/components/aurora-background';
import { motion } from 'framer-motion';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';

export default function NFT() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: 'easeInOut'
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-3xl md:text-7xl font-bold text-custom-orange text-center">
                    Coming Soon...
                </div>

                <div className="flex md:gap-6  flex-col md:flex-row justify-center items-center">
                    <Link
                        href="https://app.ekubo.org/?inputCurrency=STRK&amount=1&outputCurrency=STBULL"
                        target="__blank"
                        className="z-50 text-white relative my-8 items-center text-lg lg:text-xl xl:text-2xl px-8 py-4 rounded-[2rem] flex gap-4 bg-custom-orange w-fit"
                    >
                        Buy on ekubo <SquareArrowOutUpRight />
                    </Link>

                    <Link
                        href="https://dexscreener.com/starknet/0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d-0x06a541d142645c5b3c092377deff902bb35f1c6217164cdd2eb71ed7c75889a8-1020847100762815390390123822295304634-5982-0x0"
                        target="__blank"
                        className="z-50 mb-8 md:my-8 text-white relative items-center text-lg lg:text-xl xl:text-2xl px-8 py-4 rounded-[2rem] flex gap-4 bg-custom-orange w-fit"
                    >
                        Price Chart <SquareArrowOutUpRight />
                    </Link>
                </div>
            </motion.div>
        </AuroraBackground>
    );
}
