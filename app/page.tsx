import { ModeToggle } from '@/components/mode-toggle';
import { Header } from '../components/Header';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SquareArrowOutUpRight } from 'lucide-react';
import { ProgressDemo } from '@/components/ui/progress';
import { Detail } from '@/components/Detail';
import { CardDemo } from '@/components/ui/card';
import { AccordionDemo } from '@/components/ui/accordion';
import { Footer } from '@/components/Footer';
import Count from '@/components/Counter';

export default function Home() {
    return (
        <div className="relative">
            <div className="absolute right-7 top-7">
                <ModeToggle />
            </div>
            <Header />

            <section className="mt-40 max-w-[85%] mx-auto">
                <div className=" gap-40 flex">
                    <Image
                        src={'/bull-logo.jpeg'}
                        alt="bull logo"
                        height={400}
                        width={400}
                        className="rounded-full w-[40%] h-fit"
                        priority
                    />
                    <div className="w-[60%]">
                        <Button
                            size={'lg'}
                            className="my-8 text-2xl p-8 rounded-[2rem] flex gap-4"
                        >
                            Buy on Bull <SquareArrowOutUpRight />
                        </Button>
                        <div className="flex flex-col gap-2">
                            <h1 className="italic text-custom-orange font-semibold text-2xl">
                                A community first initiative
                            </h1>
                            <p className="text-xl">
                                Welcome to Starkbull, a community-driven meme
                                token on a mission. Our objective is to reach
                                the masses using our cute memey anime dog power.
                            </p>
                        </div>
                        <div className="mt-5 flex flex-col gap-2">
                            <h1 className="italic text-custom-orange font-semibold text-2xl">
                                Why Starkbull ?
                            </h1>
                            <p className="text-xl">
                                On Starknet, there is a tradition to name
                                projects after anime characters. Many
                                contributors, developers, and users adhere to
                                this anime project culture. The ecosystem has
                                Madara, Satoru, Beerus, Deoxys, Ekubo, Garaga,
                                Tsubasa, Kakarot ... It now counts one more!
                                Starkbull.
                            </p>
                        </div>

                        <div className="flex gap-8 my-8">
                            <Detail number="25000+" value="Holders" />
                            <Detail number="40000+" value="Airdropped" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-40 max-w-6xl mx-auto relative" id="roadmap">
                <div className="relative z-10">
                    <div className="w-full p-12 border rounded-xl border-custom-orange dark:bg-black">
                        <h1 className="text-center text-custom-orange text-5xl mb-16">
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
                {/* <div className="absolute -bottom-40 right-0 z-50">
                    <Image
                        src={'/bull-sticker.jpg'}
                        alt="bull logo"
                        height={400}
                        width={400}
                        className="rounded-3xl"
                        priority
                    />
                </div> */}
            </section>

            <section className="mt-40 mb-20 max-w-6xl mx-auto">
                <Footer />
            </section>
        </div>
    );
}
