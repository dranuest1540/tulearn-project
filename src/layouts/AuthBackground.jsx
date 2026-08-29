import AuthFooter from "../components/AuthFooter"
import AuthHero from "../components/AuthHero"
import AuthLogo from "../components/AuthLogo"
import AuthReason from "../components/AuthReason"

function AuthBackground({ children, heroData }) {
    return (
        <>
            <main className="min-h-screen font-bodoni bg-slate-100">
                <div className="flex items-center justify-center p-5">
                    <div className="w-full max-w-5xl flex rounded-3xl overflow-hidden shadow-xl">

                        {/* LEFT CONTAINER */}
                        <div className="hidden md:block md:basis-1/2 bg-linear-to-b from-white to-blue-200">
                            <div className="max-w-md mx-auto px-10 py-7">

                                <AuthLogo />

                                <AuthHero {...heroData} />

                                <AuthReason />

                            </div>
                        </div>

                        {/* RIGHT CONTAINER */}
                        <div className="flex-1 md:basis-1/2 bg-white">
                            <div className="max-w-md mx-auto py-14 px-7">

                                {/* TITLE */}
                                <h1 className="text-4xl font-bold">{heroData.header} <span className="hidden sm:inline">{heroData.headerIcon}</span></h1>
                                <p className="text-base mt-2">
                                    {heroData.subHeader}
                                </p>

                                { children }

                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <AuthFooter />
        </>
    )
}

export default AuthBackground