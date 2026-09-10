<script setup lang="ts">
import { AwardHero } from '~/widgets/award2026/award-hero'
import { AwardAbout } from '~/widgets/award2026/award-about'
import { AwardParticipants } from '~/widgets/award2026/award-participants'
import { WhyParticipate } from '~/widgets/award2026/why-participate'
import { AwardFaq } from '~/widgets/award2026/award-faq'
import { AwardCta } from '~/widgets/award2026/award-cta'
import { AwardPartners } from '~/widgets/award2026/award-partners'
</script>

<template>
  <div class="space-y-15">
    <AwardHero />
    <AwardAbout />
    <AwardParticipants />
    <WhyParticipate />
    <AwardPartners />
    <AwardCta />
    <AwardFaq class="mb-10 lg:mb-15" />
  </div>
</template>

<style scoped></style>
