import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CATEGORIES_INFORMATION } from "../constant/categories";

function Categories() {
    return (
        <section id="categories" className='py-5'>

            <h2 className="text-2xl font-bold">
                Explore Top Categories
            </h2>

            <a href="#" className="mt-0 flex justify-end gap-2.5 text-blue-600 no-underline max-[480px]:mt-2.5 max-[480px]:justify-start">
                View All
                <FontAwesomeIcon icon={faArrowRight} />
            </a>

            <div className="my-7.5 flex flex-row flex-wrap items-center justify-between max-[768px]:justify-center">

                {CATEGORIES_INFORMATION.map((category) => (
                    <div key={category.title} className="flex py-3 my-1 w-62 flex-col items-center justify-center rounded-[20px] border-4 border-[#0199f0] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.04] hover:shadow-[0_16px_10px_rgba(0,0,0,0.15)]">

                        <img src={category.image} alt={category.title} className="w-full max-w-20" />

                        <h3 className="mt-2 font-bold text-lg/5">
                            {category.title}
                        </h3>

                        <p className="mt-1 text-base text-gray-600">
                            {category.courses}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Categories;