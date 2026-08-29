import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function AuthFooter() {
    return (
        <footer className="bg-blue-100 flex justify-center p-3 font-bodoni">
            <p className="text-base text-primary">
                <FontAwesomeIcon icon={faCopyright} /> 2026 TuLearn. All rights reserved.
            </p>
        </footer>
    )
}

export default AuthFooter