import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { POPULAR_INFORMATION } from "../constant/popular";
import Card from './Card';

function Popular() {
    return (
        <section id="popular" className="py-5">

            {/* TITLE */}
            <h2 className="text-2xl font-bold">
                Popular Courses
            </h2>

            {/* VIEW ALL */}
            <a href="#" className="mt-0 flex justify-end gap-2.5 text-blue-600 no-underline max-[480px]:mt-2.5 max-[480px]:justify-start">
                View All
                <FontAwesomeIcon icon={faArrowRight} />
            </a>

            {/* COURSE CONTAINER */}
            <div className="my-7.5 grid grid-cols-4 justify-between gap-10 max-[1200px]:grid-cols-3 max-[992px]:grid-cols-2 max-[768px]:grid-cols-1">

                {POPULAR_INFORMATION.map((course) => (
                    <Card 
                        key={course.title} 
                        cardTitle={course.title} 
                        cardIcon={course.icon} 
                        cardRating={course.rating} 
                        cardStudents={course.students} 
                        cardDescription={course.description} 
                        cardLevel={course.level}                         
                    />
                ))}

            </div>

        </section>
    );
}

export default Popular;