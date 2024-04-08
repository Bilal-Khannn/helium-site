import { ModeToggle } from '@/components/mode-toggle';
import { Header } from '../components/Header';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SquareArrowOutUpRight } from 'lucide-react';
import { Detail } from '@/components/detail';
import { ProgressDemo } from '@/components/ui/progress';

export default function Home() {
    return (
        <div className="relative">
            <div className="absolute right-7 top-7">
                <ModeToggle />
            </div>
            <Header />

            <section className="mt-40 max-w-7xl mx-auto">
                <div className=" gap-40 flex">
                    <Image
                        src={'/bull-logo.jpeg'}
                        alt="bull logo"
                        height={400}
                        width={400}
                        className="rounded-full w-[40%] h-fit"
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

            <section className='my-40 max-w-4xl mx-auto'>
                <h1 className='text-center text-custom-orange text-5xl mb-16'>Roadmap</h1>
               <ProgressDemo />
            </section>
        </div>
    );
}
