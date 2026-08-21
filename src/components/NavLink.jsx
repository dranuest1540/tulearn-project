function NavLink({ linkName, href }) {
    return (
        <li className="hover:text-secondary max-[992px]:py-2.5">
            <a href={href} className="no-underline text-inherit">
                {linkName}
            </a>
        </li>
    )
}

export default NavLink