function AuthLogo() {
    return (
        <header className="flex justify-start items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}assets/banner.png`} alt="TuLearn" className="w-14" />
                <div className="font-manrope">
                    <h2 className="font-bold text-primary text-lg">Tu<span className="text-secondary">Learn</span></h2>
                    <p className="text-sm tracking-tight italic">Learn Skill, Achieve More</p>
                </div>
        </header>
    )
}

export default AuthLogo