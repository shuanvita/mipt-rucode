<script setup lang="ts">
import { AwardHero } from '~/widgets/award2026/award-hero'
import { AwardAbout } from '~/widgets/award2026/award-about'
import { AwardParticipants } from '~/widgets/award2026/award-participants'
import { WhyParticipate } from '~/widgets/award2026/why-participate'
import { AwardFaq } from '~/widgets/award2026/award-faq'
</script>

<template>
  <div class="container space-y-15">
    <AwardHero />
    <AwardAbout />
    <AwardParticipants />
    <WhyParticipate />
    <AwardFaq class="mb-10 lg:mb-15" />
  </div>
</template>

<style scoped></style>
