import React from 'react'
import HeroSection from './HeroSection'
import CategorySection from '@/component/landing/CategorySection'
import BestSellersSection from '@/component/landing/BestSellersSection'

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <CategorySection />
            <BestSellersSection />
        </div>
    )
}
