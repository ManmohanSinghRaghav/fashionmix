'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Camera, User, Shirt, Calendar, Cloud, ShoppingBag } from 'lucide-react'

const navItems = [
  { href: '/', icon: Camera, label: 'Snap' },
  { href: '/wardrobe', icon: Shirt, label: 'Wardrobe' },
  { href: '/occasions', icon: Calendar, label: 'Occasions' },
  { href: '/weather', icon: Cloud, label: 'Weather' },
  { href: '/store', icon: ShoppingBag, label: 'Shop' },
  { href: '/profile', icon: User, label: 'Profile' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0">
      <div className="max-w-md mx-auto px-4">
        <ul className="flex justify-between">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={`flex flex-col items-center pt-2 pb-1 ${pathname === item.href ? 'text-blue-500' : 'text-gray-500'}`}>
                <item.icon className="h-6 w-6" />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

