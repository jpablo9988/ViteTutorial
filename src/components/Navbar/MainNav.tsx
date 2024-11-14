// for medium-larger screens. ex: expanded web viewports.
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import COLLabLogo from './COLLabLogoDark.png'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

export default function MainNav() {
    return (
        <div className="mr-4 hidden gap-2 md:flex">
            <Link to="/" className="mr-6 flex">
                <img className="h-12 w-14" src={COLLabLogo}></img>
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Button variant="ghost" asChild>
                            <Link to="/" className="nav-link">Home</Link>
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Button variant="ghost" asChild>
                                <Link to="/about" className="nav-link">About us</Link>
                            </Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Dropdown</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid-cols-1 gap-1 p-4'>
                            <li >
                                <Button variant="ghost" asChild>
                                    <Link to="/about" className="nav-link">About us</Link>
                                </Button>
                            </li>
                            <li >
                                <Button variant="ghost" asChild>
                                    <Link to="/about" className="nav-link">About you</Link>
                                </Button>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </div>
    );
}