import React from 'react'
import HeroSection from './HeroSection'
import CategorySection from '@/component/landing/CategorySection'
import BestSellersSection from '@/component/landing/BestSellersSection'
import SunglassesSale from '@/component/landing/SunglassesSale'
import ProductGrid from '@/component/landing/ProductGrid'

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <CategorySection />
            <BestSellersSection />
            <SunglassesSale />
            <ProductGrid />
        </div>
    )
}
