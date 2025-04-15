import HomeCarousel from '@/components/shared/home/home-carousel'
import data from '@/lib/data'
import { startDb } from '@/lib/db/connectDb'
import React from 'react'

export default function page() {
  startDb()
  console.log("🚀 ~ page ~ startDb:");

    return <HomeCarousel items={data.carousels} />
}


