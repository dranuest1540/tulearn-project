import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUserTie, faChartLine, faAward } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <section id="about" className="px-20 py-5 grid grid-cols-4 justify-items-center max-[992px]:grid-cols-2 max-[992px]:gap-y-7.5 max-[768px]:grid-cols-1">

            <div className="flex w-58.75 items-center gap-5">
                <div className="rounded-[50px] bg-[#dcf5ff] p-2.5 text-[30px] text-[#0360da]">
                    <FontAwesomeIcon icon={faClock} />
                </div>

                <div>
                    <h3>Learn Anytime</h3>
                    <p className="mt-1.25 text-[#5a5a5a]">
                        Access courses anytime, anywhere
                    </p>
                </div>
            </div>


            <div className="flex w-58.75 items-center gap-5">
                <div className="rounded-[50px] bg-[#dcf5ff] p-2.5 text-[30px] text-[#0360da]">
                    <FontAwesomeIcon icon={faUserTie} />
                </div>

                <div>
                    <h3>Expert Instructors</h3>
                    <p className="mt-1.25 text-[#5a5a5a]">
                        Learn from industry professionals
                    </p>
                </div>
            </div>


            <div className="flex w-58.75 items-center gap-5">
                <div className="rounded-[50px] bg-[#dcf5ff] p-2.5 text-[30px] text-[#0360da]">
                    <FontAwesomeIcon icon={faChartLine} />
                </div>

                <div>
                    <h3>Track Progress</h3>
                    <p className="mt-1.25 text-[#5a5a5a]">
                        Monitor your learning journey
                    </p>
                </div>
            </div>


            <div className="flex w-58.75 items-center gap-5">
                <div className="rounded-[50px] bg-[#dcf5ff] p-2.5 text-[30px] text-[#0360da]">
                    <FontAwesomeIcon icon={faAward} />
                </div>

                <div>
                    <h3>Get Certified</h3>
                    <p className="mt-1.25 text-[#5a5a5a]">
                        Earn certificates to boost your career
                    </p>
                </div>
            </div>

        </section>
    );
}

export default About;