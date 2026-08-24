import Image from '../../public/assets/banner.png'

function Logo({ className }) {
    return (
        <div>
            <a href="#" className="flex items-center justify-start gap-1.25">
                <img src={Image} alt="Logo" className={className} />
                <span className="text-2xl font-manrope font-bold text-primary">
                    Tu<span className="text-secondary">Learn</span>
                </span>
            </a>
        </div>
    )
}

export default Logo