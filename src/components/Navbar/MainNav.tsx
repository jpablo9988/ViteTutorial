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
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { SearchIcon } from 'lucide-react';
import { Input } from '../ui/input';

export default function MainNav() {
    return (
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
            <Link to="/" className="flex items-center gap-2">
                <img className="h-14 w-16" src={COLLabLogo}></img>
            </Link>
            <div className="hidden items-center gap-6 text-sm font-medium md:flex">
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
                            <NavigationMenuTrigger
                            onClick={(event) => {
                                 event.preventDefault();
                              }}
                            >Dropdown</NavigationMenuTrigger>
                            <NavigationMenuContent className='bg-white'>
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
            <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                            <span className="sr-only">Search</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[300px] p-4">
                        <div className="relative">
                            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <Input type="search" placeholder="Search..." className="pl-8 w-full" />
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
        </div>
    );
}