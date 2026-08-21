import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Card({ cardTitle, cardDescription, cardIcon, cardLevel, cardRating, cardStudents }) {
    return (
        <div>

            {/* TOP CARD */}
            <div className="flex items-center justify-around gap-0.5 rounded-t-[15px] bg-linear-to-r from-[#00204d] to-[#0199f0] p-5 text-white">

                <div className="information">
                    <h3 className="text-xl/5 font-bold">
                        {cardTitle}
                    </h3>

                    <p className="pt-2.5 text-base/5">
                        {cardDescription}
                    </p>
                </div>

                <div className="shrink-0 rounded-[50px] bg-black/10 p-3.75 text-[40px]">
                    <FontAwesomeIcon icon={cardIcon} />
                </div>

            </div>

            {/* BOTTOM CARD */}
            <div className="flex items-center justify-around rounded-b-[15px] border border-t-0 border-black/30 px-0 py-2.5">

                <p>
                    {cardLevel}
                </p>

                <div className="font-bold">
                    <span className="mr-1 text-yellow-400">
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                    {cardRating}
                </div>

                <p>
                    {cardStudents}
                </p>

            </div>

        </div>
    )
}

export default Card