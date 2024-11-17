import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from './ui/button'


const NavigationBar = () => {
    return (
        <Menubar className="bg-zinc-950 border-0 h-16">
            <MenubarMenu>
                <ul className='flex text-base'>
                    <li className='p-2'>File</li>
                    <li className='p-2'>Yess</li>
                </ul>
            </MenubarMenu>
        </Menubar>
    )
}

export default NavigationBar