function Button({ href, buttonName, className, children}) {
    return (        
        <a href={href} className={`${className} border py-1.75 px-3 no-underline font-bold text-center transition-all duration-100 ease-in max-[480px]:w-full`}>
            {children}
            {buttonName}
        </a>        
    )
}

export default Button