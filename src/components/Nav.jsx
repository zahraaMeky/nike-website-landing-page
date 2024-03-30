import headerlogo from "../assets/images/header-logo.svg"
import hamburger from "../assets/icons/hamburger.svg"
import {navLinks} from "../constants"
function Nav() {
  return (
    <header className="py-8 w-full absolute padding-x">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
            <img src={headerlogo} alt="NIKE" width={130} height={29}/>
        </a>
        <ul className="flex flex-1 items-center gap-10 justify-center max-lg:hidden">
        {navLinks.map((link) => (
            <li className="font-montserrat leading-normal text-lg text-slate-gray" key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
            <img src={hamburger} width={25} height={25} alt="hamburger"/>
        </div>
      </nav>
    </header>
  )
}

export default Nav
