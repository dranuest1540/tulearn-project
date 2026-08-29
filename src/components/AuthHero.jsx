function AuthHero({ title, highlight, description, image }) {
    return (
        <section className="mt-5">
            <h1 className="text-4xl text-primary font-bold">
                {title} <span className="block text-secondary">{highlight}</span>
            </h1>
            <p className="text-lg">
                {description}
            </p>
            <img src={image} alt="Auth Banner" className="w-full max-w-sm mx-auto" />
        </section>
    )
}

export default AuthHero