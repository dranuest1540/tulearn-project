import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';

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
        <section id="hero" className="flex items-center justify-around px-20 py-5 mt-25 max-[992px]:flex-wrap">

            {/* LEFT CONTAINER */}
            <div>

                <h1 className="title text-[56px] font-bold leading-[1.2] text-primary">
                    Learn Skills
                    <br />
                    <span className="text-secondary">
                        Achieve More
                    </span>
                </h1>

                <p className="text-xl leading-[1.4]">
                    TuLearn is a{' '}
                    <span ref={typedElement} className="text-secondary font-semibold"></span>
                    <br />
                    for everyone, everywhere.
                </p>

                <div className="mt-5 flex flex-wrap justify-around gap-2.5">

                    <a href="#" className="rounded-[10px] border border-primary bg-primary px-5 py-2.5 text-white no-underline transition-all ease-in duration-100 hover:border-gray-400/60 hover:bg-transparent hover:font-bold hover:text-black">
                        Explore Courses
                    </a>

                    <a href="#" className="flex items-center rounded-[10px] border border-gray-400/60 px-5 py-2.5 font-bold text-black no-underline transition-all ease-in duration-100 hover:border-primary hover:bg-primary hover:font-normal hover:text-white">
                        <FontAwesomeIcon icon={faPlay} className="mr-1" />
                        How It Works
                    </a>

                </div>

            </div>

            {/* RIGHT CONTAINER */}
            <img src="/assets/hero-img.png" alt="Education" className="hero-image w-full max-w-187.5 max-[1200px]:max-w-137.5 max-[992px]:mt-7.5" />

        </section>
    );
}

export default Hero;