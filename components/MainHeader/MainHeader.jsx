import Link from "next/link";
import logo from "@/assets/logo.png";
import cssStyles from "./MainHeader.module.css";
import Image from "next/image";
import MainHeaderBackgroud from "./MainHeaderBackgroud";
import NavLink from "./NavLink";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackgroud />
            <header className={cssStyles.header}>
                <Link href="/" className={cssStyles.logo}>
                    <Image src={logo} alt="website logo" priority />
                    NextLevel Food
                </Link>

                <nav className={cssStyles.nav}>
                    <ul>
                        <li>
                            <NavLink href={"/meals"}>Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/community"}>Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}