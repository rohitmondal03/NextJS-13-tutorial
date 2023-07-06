"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'  // used 'use client'


export default function About() {
  const navigate = useRouter();

  return (
    <div>
      This is abaout route.
    </div>
  )
}
