"use client"
import { DropdownMenuItem } from "./dropdown-menu";
import { signOut } from '@/lib/auth/auth-client';

export default function signoutbutton(){
    return(
        <DropdownMenuItem onClick={async () => await signOut()}>
                    Log Out
                    </DropdownMenuItem>
    );
}