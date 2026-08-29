import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { REASON_INFORMATION } from "../constant/authReason";

function AuthReason() {
    return (
        <section className="mt-3">
            <div className="max-w-xs mx-auto bg-white/50 rounded-xl flex items-center p-3 gap-5">
                {REASON_INFORMATION.map((list) => (
                    <div key={list.title} className="basis-1/3 text-center">
                        <FontAwesomeIcon icon={list.icon} className="bg-white p-2 rounded-full text-2xl text-secondary" />
                        <p className="text-sm">{list.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AuthReason