import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';
import { FOOTER_ICONS } from "../constant/footer";
import FooterLink from './FooterLink';

function Footer() {

    return (
        <footer className="grid grid-cols-3 bg-[rgba(120,170,250,0.1)] px-20 py-5 max-[992px]:grid-cols-2 max-[992px]:items-center max-[992px]:justify-center max-[992px]:gap-y-2.5 max-[992px]:px-10 max-[768px]:grid-cols-1">

            {/* FOOTER ABOUT */}
            <section id="footer-about">

                <Logo className='w-7.5' />

                <p className="information pt-2.5 leading-6">
                    Empowering learners to achieve their goals
                    <br />
                    through quality educations.
                </p>

            </section>

            {/* FOOTER COPYRIGHT */}
            <section id="footer-copyright" className="flex flex-col items-center justify-center max-[768px]:order-1 max-[768px]:mt-2.5">

                <p>
                    <FontAwesomeIcon icon={faCopyright} />
                    {' '}2026{' '}
                    <span className="font-bold">
                        TuLearn
                    </span>
                    . All rights reserved.
                </p>

                <div className="flex gap-1 pt-2.5 text-[26px]">
                    {FOOTER_ICONS.map((item) => (
                        <FooterLink key={item.href} href={item.href} icon={item.icon} />
                    ))}
                </div>

            </section>

            {/* FOOTER NEWSLETTER */}
            <section id="footer-newsletter" className="flex flex-col justify-self-end leading-6.25 max-[992px]:justify-self-start">
                <h4 className="font-bold">Newsletter</h4>
                <p>Get the lastest updates and learning tips.</p>
                <form className="mt-2.5">
                    <input type="email" placeholder="Your email" className="rounded-[5px] border-0 bg-[#f6f7f9] px-5 py-2.5 text-[#7b8293] shadow-[0_0_10px_rgba(0,0,0,0.2)] outline-none" />
                    <button type="submit" className="ml-2.5 rounded-[5px] border-0 bg-[#0199f0] px-3.75 py-2.5 text-white transition-all duration-100 hover:bg-transparent hover:text-[#0199f0] hover:shadow-[0_0_10px_rgba(1,153,240,0.5)] max-[480px]:mx-auto max-[480px]:mt-2.5">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </form>

            </section>

        </footer>
    );
}

export default Footer;