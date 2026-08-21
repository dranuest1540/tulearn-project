import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ABOUT_INFORMATION } from "../constant/about";

function About() {
    return (
        <section id="about" className="py-6 grid grid-cols-4 justify-items-center max-[992px]:grid-cols-2 max-[992px]:gap-y-7.5 max-[768px]:grid-cols-1">
            {ABOUT_INFORMATION.map((item) => (
                <div key={item.title} className="flex w-58.75 items-center gap-5">
                    <div className="flex shrink-0 items-center justify-center rounded-[50px] bg-[#dcf5ff] p-2.5 text-[30px] text-[#0360da]">
                        <FontAwesomeIcon icon={item.icon} />
                    </div>

                    <div className="information">
                        <h3 className="font-bold text-lg">
                            {item.title}
                        </h3>

                        <p className="mt-1.25 text-gray-600 text-base/5">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default About;