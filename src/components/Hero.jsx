import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';
import Button from "./Button";
import HeroImage from "../../public/assets/hero-img.png";

function Hero() {
    const typedElement = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: [
                'modern learning platform',
                'future ready skills',
                'career starter today',
                'online learning hub'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            cursorChar: '|',
            loop: true,
            backDelay: 2000,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="hero" className="flex pb-5 items-center justify-around gap-5 max-[1200px]:px-10 max-[992px]:flex-wrap max-[992px]:justify-center max-[992px]:gap-7 max-[992px]:px-10">

            {/* LEFT CONTAINER */}
            <div className="max-[992px]:w-full max-[992px]:text-center">

                <h1 className="title text-[56px] font-bold leading-[1.2] text-primary max-[1200px]:text-[48px] max-[992px]:text-[44px] max-[576px]:text-[38px]">
                    Learn Skills
                    <br />
                    <span className="text-secondary">
                        Achieve More
                    </span>
                </h1>

                <p className="mt-3 text-xl leading-[1.4] max-[1200px]:text-lg max-[576px]:text-base">
                    TuLearn is{' '}
                    <span ref={typedElement} className="font-semibold text-secondary"></span>
                    <br />
                    for everyone, everywhere.
                </p>

                <div className="mt-5 flex flex-row flex-wrap gap-2.5 max-[992px]:justify-center">

                    <Button href="#" buttonName="Explore Course" className="rounded-xl px-5 py-2.5 border-primary bg-primary text-white hover:border-gray-400/60 hover:bg-transparent hover:text-black" />
                    
                    <Button href="#" buttonName="How It Works" className="rounded-xl px-5 py-2.5 border-secondary text-secondary hover:bg-secondary hover:text-white">
                        <FontAwesomeIcon icon={faPlay} className="mr-1" />
                    </Button>

                </div>

            </div>

            {/* RIGHT CONTAINER */}
            <img src={HeroImage} alt="Education" className="hero-image w-full max-w-187.5 max-[1200px]:max-w-137.5 max-[992px]:mt-7.5 max-[992px]:max-w-150 max-[576px]:max-w-full" />

        </section>
    );
}

export default Hero