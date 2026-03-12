<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import MarqueeStrip from '@/components/sections/MarqueeStrip.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import ShowcaseSection from '@/components/sections/ShowcaseSection.vue'
import HowItWorksSection from '@/components/sections/HowItWorksSection.vue'
import DeploymentSection from '@/components/sections/DeploymentSection.vue'
import TechSection from '@/components/sections/TechSection.vue'
import PricingSection from '@/components/sections/PricingSection.vue'
import WhySection from '@/components/sections/WhySection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation('[data-animate]', 80)
</script>

<template>
  <div>
    <HeroSection />
    <MarqueeStrip />
    <FeaturesSection />
    <ShowcaseSection />
    <HowItWorksSection />
    <DeploymentSection />
    <TechSection />
    <PricingSection />
    <WhySection />
    <CtaSection />
  </div>
</template>

