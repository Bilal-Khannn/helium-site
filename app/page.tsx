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
                        <Button
                            size={'lg'}
                            className="my-8 text-lg lg:text-xl xl:text-2xl p-8 rounded-[2rem] flex gap-4"
                        >
                            Buy on Bull <SquareArrowOutUpRight />
                        </Button>

                        <div className="flex flex-col gap-2">
                            <h1 className="italic text-custom-orange font-semibold text-2xl">
                                A community first initiative
                            </h1>
                            <p className=" text-xl">
                                Welcome to Starkbull, a community-driven meme
                                token on a mission. Our objective is to reach
                                the masses using our cute memey anime dog power.
                            </p>
                        </div>
                        <div className="mt-5 flex flex-col gap-2">
                            <h1 className="italic text-custom-orange font-semibold text-2xl">
                                Why Starkbull ?
                            </h1>
                            <p className=" text-xl">
                                On Starknet, there is a tradition to name
                                projects after anime characters. Many
                                contributors, developers, and users adhere to
                                this anime project culture. The ecosystem has
                                Madara, Satoru, Beerus, Deoxys, Ekubo, Garaga,
                                Tsubasa, Kakarot ... It now counts one more!
                                Starkbull.
                            </p>
                        </div>

                        {/* <div className="flex gap-8 my-8">
                            <Detail number="25000+" value="Holders" />
                            <Detail number="40000+" value="Airdropped" />
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="my-40 w-[100%] mx-auto relative" id="roadmap">
                <div className="relative z-10 lg:max-w-6xl mx-auto w-[80%]">
                    <div className="w-full p-12 border rounded-xl border-custom-orange dark:bg-black">
                        <h1 className="text-center text-custom-orange text-5xl mb-16 font-bold">
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
                                <AccordionDemo />
                            </div>
                            <div className="flex flex-col gap-8 w-full">
                                <div className="flex items-center gap-6">
                                    <ProgressDemo value={50} />
                                    <span className="text-2xl text-custom-orange flex gap-1">
                                        <Count value={50} />%
                                    </span>
                                </div>
                                <AccordionDemo />
                            </div>
                            <div className="flex flex-col gap-8 w-full">
                                <div className="flex items-center gap-6">
                                    <ProgressDemo value={88} />
                                    <span className="text-2xl text-custom-orange flex gap-1">
                                        <Count value={88} />%
                                    </span>
                                </div>
                                <AccordionDemo />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <h1 className="text-center text-custom-orange text-5xl font-bold">
                    Our team
                </h1>
                <div className="flex justify-center items-center gap-x-8 flex-wrap mt-20 2xl:mt-64">
                    <ThreeDCardDemo
                        name="Alpha"
                        profession="Frontend Developer"
                        url="/bull-sticker.jpg"
                    />
                    <ThreeDCardDemo
                        name="You"
                        profession="Cairo Dev, Smart Contract Auditor"
                        url="/bull-sticker.jpg"
                        className='2xl:-mt-96'
                    />
                    <ThreeDCardDemo
                        name="Your Friend"
                        profession="Marketing Lead"
                        url="/bull-sticker.jpg"
                    />
                </div>
            </section>

            <section className="mt-40 pb-20 dark:pt-10 w-[100%] dark:bg-black dark:border dark:border-t-custom-orange">
                <Footer />
            </section>
        </div>
    );
}
