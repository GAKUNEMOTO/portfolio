import React from 'react'
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { navItems } from '@/data/navItem';

export default function Navigation() {
  return (
    <Sheet>
        <SheetTrigger asChild>
                <Menu className='cursor-pointer' size={20}/>
        </SheetTrigger>
        <SheetContent side='left'>
            <div className="flex flex-col mb-3 mt-10">
                {navItems.map((item) => (
                    <Button 
                        variant="ghost"
                        className="justify-start mb-3 text-2xl"
                        key={item.label}
                        asChild
                        >
                            <Link href={`${item.href}`}>
                            {item.label}
                            </Link>
                    </Button>
                ))}
            </div>
        </SheetContent>
    </Sheet>
  )
}
