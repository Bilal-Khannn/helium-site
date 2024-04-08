import Link from 'next/link';
export const Header = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="items-center mt-7 flex gap-6 font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-custom-orange transition delay-150">
                <Link href={'#'}>Tokenomics</Link>
                <Link href={'#'}>Roadmap</Link>
                <Link href={'#'}>Integrations</Link>
                <Link href={'#'}>Art</Link>
                <Link href={'#'}>NFTs</Link>
            </div>
        </div>
    );
};
