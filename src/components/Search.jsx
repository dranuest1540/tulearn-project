import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search() {
    return (
        <form action="" method="get" className="py-1.25 px-2.5 rounded-md bg-[rgb(246,247,249)] text-[#7b8293] flex items-center max-[480px]:w-full">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search courses..." className="outline-0 p-1.25 text-black text-xs bg-transparent max-[480px]:w-full" />
        </form>
    )
}

export default Search