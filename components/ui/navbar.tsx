import { Briefcase } from 'lucide-react';
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { getSession } from '@/lib/auth/auth';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,DropdownMenuLabel, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { AvatarFallback,Avatar } from './avatar';

export default async function Nav(){
    const session = await getSession();
    return(
        <nav className="bg-primary text-white px-6 py-4 shadow-md text-lg font-semibold gap-2">
        <div className="flex items-center justify-between">
            {/*Logo*/}
        <Link href="/" className='flex items-center '>    
            <Briefcase className="mr-4" size={28} style={{ paddingTop: '4px' }} />
            Job Tracker
        </Link>


        <div className="flex gap-3">
            {session?.user ? (
            <>
            <Link href="/dashboard">
            <Button className="bg-white text-primary hover:bg-gray-100 px-5 py-2 rounded-md font-semibold">
                Dashboard
            </Button>
            </Link>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost"  className='hover:bg-gray-100 px-5 py-2 rounded-md font-semibold'>
                    <Avatar>
                        <AvatarFallback className='bg-white text-primary'>
                            {session?.user.name[0].toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuLabel>
                        <div>
                        <p>{session.user.name}</p>
                        <p>{session.user.email}</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuItem onClick={await signOut}>
                    Log Out
                    </DropdownMenuItem>
                </DropdownMenuContent>

            </DropdownMenu>
            </> 
    ):(
        <>
            <Link href="/sign-up">
            <Button className="bg-white text-primary hover:bg-gray-100 px-5 py-2 rounded-md font-semibold">
                Sign-Up
            </Button>
            </Link>
            <Link href="/sign-in">
            <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-primary px-5 py-2 rounded-md font-semibold">
                Log In
            </Button>
            </Link>
            
        
            </>
        )}
        </div>

        </div>
        </nav>
    );
}