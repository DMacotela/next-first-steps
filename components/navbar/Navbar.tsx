import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems=[
    {text: "About", path: "/about"}, 
    {text: "Pricing", path: "/pricing"}, 
    {text: "Contact", path: "/contact"}]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link className="flex items-center" href="/">
        <HomeIcon className="mr-2" />
            <span>Home</span>
        </Link>
        
        <div className="flex flex-1"></div>
        {
            navItems.map(navItem=>(
                <ActiveLink key={navItem.path} {...navItem}  />
            ))
        }
    </nav>
  )
}
