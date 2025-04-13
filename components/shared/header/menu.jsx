import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu(){
    return (
        <div className="flex justify-end">
        <nav className="flex gap-3 w-full">
            <Link href={'/signin'} className='flex items-center  header-button'>
            Hello, Sign in
            </Link>
            <Link href={'/cart'} className='header-button'>
            <div className="flex items-end">
            <ShoppingCartIcon className="w-8h-8" />
            Cart
            </div>
            </Link>

        </nav>
        </div>
    )
};
