'use client';
import { ModeToggle } from '@/components/mode-toggle';
import { Header } from '../components/Header';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SquareArrowOutUpRight } from 'lucide-react';
import { ProgressDemo } from '@/components/ui/progress';
import { Detail } from '@/components/Detail';
import { AccordionDemo } from '@/components/ui/accordion';
import { Footer } from '@/components/Footer';
import Count from '@/components/Counter';
import { ThreeDCardDemo } from '@/components/3d-card';
import { SparklesCore } from '@/components/sparkles';
import {
    marketing,
    launchNewDAppsInitiative,
    launchSAASDApp,
    launchStakingDApp,
    recruitTeamMembers
} from '@/components/data/roadmap';
import Link from 'next/link';
import { teamMembers } from '@/components/data/team';

export default function Home() {
    return (
        <div className="relative">
            <div className="absolute h-full w-[100%] overflow-hidden">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#EA580C"
                />
            </div>

            <div className="absolute right-7 top-7 hidden lg:block">
                <ModeToggle />
            </div>
            <Header />

            <section className="mt-40 max-w-[85%] mx-auto">
                <div className=" gap-40 flex lg:flex-row flex-col justify-center items-center">
                    <Image
                        src={'/bull-logo.jpeg'}
                        alt="bull logo"
                        height={400}
                        width={400}
                        className="rounded-full w-[100%] hidden lg:block lg:w-[40%] h-fit"
                        priority
                    />

                    <div className="lg:w-[60%] w-[100%]">
                        <div className="flex md:gap-6  flex-col md:flex-row">
                            <Link
                                href="https://app.ekubo.org/?inputCurrency=STRK&amount=1&outputCurrency=STBULL"
                                target="__blank"
                                className="z-50 text-white relative my-8 items-center text-lg lg:text-xl xl:text-2xl px-8 py-4 rounded-[2rem] flex gap-4 bg-custom-orange w-fit"
                                rel="noreferrer noopener"
                            >
                                Buy on ekubo <SquareArrowOutUpRight />
                            </Link>

                            <Link
                                href="https://dexscreener.com/starknet/0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d-0x06a541d142645c5b3c092377deff902bb35f1c6217164cdd2eb71ed7c75889a8-1020847100762815390390123822295304634-5982-0x0"
                                target="__blank"
                                className="z-50 mb-8 md:my-8 text-white relative items-center text-lg lg:text-xl xl:text-2xl px-8 py-4 rounded-[2rem] flex gap-4 bg-custom-orange w-fit"
                                rel="noreferrer noopener"
                            >
                                Price Chart <SquareArrowOutUpRight />
                            </Link>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="italic text-custom-orange font-semibold text-2xl">
                                Unveiling Starkbull: What Sets It Apart?
                            </h1>
                            <p className=" text-xl">
                                Dive into the StarkBull universe, where $STBULL
                                powers a decentralized ecosystem, proving trust
                                through unruggable features
                            </p>
                        </div>
                        <div className="mt-5 flex flex-col gap-2">
                            <h1 className="italic text-custom-orange font-semibold text-2xl">
                                What is Starkbull ?
                            </h1>
                            <p className=" text-xl">
                                $STBULL is a utility token utilized across the
                                StarkBull ecosystem of decentralized
                                applications (DApps). It is not a meme coin;
                                rather, it was launched with an unruggable
                                feature as a demonstration of good faith by the
                                founders.
                            </p>
                        </div>

                        <div className="flex gap-8 my-8 flex-col md:flex-row w-fit">
                            <Detail number="25000+" value="Holders" />
                            <Detail number="40000+" value="Airdropped" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-40 w-[100%] mx-auto relative" id="roadmap">
                <div className="relative z-10 lg:max-w-6xl mx-auto w-[90%]">
                    <div className="w-full p-12 border rounded-xl border-custom-orange dark:bg-black">
                        <h1 className="text-center text-custom-orange text-3xl md:text-4xl lg:text-5xl mb-16 font-bold">
                            Roadmap
                        </h1>
                        <div className="flex flex-col gap-12 justify-center items-center">
                            <div className="flex flex-col gap-8 w-full">
                                <div className="flex items-center gap-6">
                                    <ProgressDemo value={20} />
                                    <span className="text-2xl text-custom-orange flex gap-1">
                                        <Count value={20} /> %
                                    </span>
                                </div>
                                <AccordionDemo data={marketing} />
                            </div>
                            <div className="flex flex-col gap-8 w-full">
                                <div className="flex items-center gap-6">
                                    <ProgressDemo value={50} />
                                    <span className="text-2xl text-custom-orange flex gap-1">
                                        <Count value={50} />%
                                    </span>
                                </div>
                                <AccordionDemo data={launchStakingDApp} />
                            </div>
                            <div className="flex flex-col gap-8 w-full">
                                <div className="flex items-center gap-6">
                                    <ProgressDemo value={88} />
                                    <span className="text-2xl text-custom-orange flex gap-1">
                                        <Count value={88} />%
                                    </span>
                                </div>
                                <AccordionDemo data={launchSAASDApp} />
                            </div>
                            <div className="flex flex-col gap-8 w-full">
                                <div className="flex items-center gap-6">
                                    <ProgressDemo value={88} />
                                    <span className="text-2xl text-custom-orange flex gap-1">
                                        <Count value={88} />%
                                    </span>
                                </div>
                                <AccordionDemo data={recruitTeamMembers} />
                            </div>
                            <div className="flex flex-col gap-8 w-full">
                                <div className="flex items-center gap-6">
                                    <ProgressDemo value={88} />
                                    <span className="text-2xl text-custom-orange flex gap-1">
                                        <Count value={88} />%
                                    </span>
                                </div>
                                <AccordionDemo
                                    data={launchNewDAppsInitiative}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full" id="team">
                <h1 className="text-center text-custom-orange text-3xl  md:text-4xl lg:text-5xl font-bold">
                    Our team
                </h1>
                <div className="flex justify-center items-center gap-x-8 flex-wrap mt-20 2xl:mt-64">
                    {teamMembers.map((member, index) => {
                        return (
                            <ThreeDCardDemo
                                key={index}
                                name={member.name}
                                profession={member.profession}
                                github={member.github}
                                telegram={member.telegram}
                                twitter={member.twitter}
                                url="/bull-sticker.jpg"
                                className={index === 1 ? '2xl:-mt-96' : ''}
                            />
                        );
                    })}
                </div>
            </section>

            <section className="mt-40 pb-20 dark:pt-10 w-[100%] dark:bg-black dark:border dark:border-t-custom-orange">
                <Footer />
            </section>
        </div>
    );
}
