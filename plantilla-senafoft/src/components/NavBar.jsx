import { useContext } from "react";
import {
    Bars3BottomLeftIcon,
    UserCircleIcon,
    ArrowLeftEndOnRectangleIcon
} from "@heroicons/react/24/solid";

import { GlobalContext } from "../context/GlobalContext";

const NavBar = () => {

    const { setIsMenuOpen, isMenuOpen } = useContext(GlobalContext);

    const hanldeMenuState = () => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);

    return (
        <div className="flex gap-2 justify-end py-4">
            <Bars3BottomLeftIcon onClick={hanldeMenuState} className="w-8 cursor-pointer xl:hidden"/>
            <UserCircleIcon className="w-8 cursor-pointer"/>
            <ArrowLeftEndOnRectangleIcon className="w-8 cursor-pointer"/>
        </div>
    );
}

export default NavBar;
