<script setup lang="ts"></script>

<template>
  <section class="container grid items-center gap-10 lg:grid-cols-[489px_1fr]">
    <div class="flex flex-col items-center gap-5 lg:items-start">
      <UiHeading class="text-center lg:text-left" tag="h1"
        >Премия <span class="text-yellow-primary">RuCode:</span> искусственный интеллект в
        пространстве науки и технологий</UiHeading
      >
      <NuxtPicture
        class="h-auto w-full flex justify-center object-contain lg:hidden"
        src="/images/award2026/hero-mob.png"
        alt="Rucode Festival"
        width="458"
        height="397"
      />
      <UiAction
        class="h-13 lg:w-full"
        to="https://edu.mipt.ru/member/meroprijatija/rucode-premiya-2026"
        >Подать заявку</UiAction
      >
    </div>
    <NuxtPicture
      class="hidden h-auto w-full object-contain lg:flex lg:justify-center"
      src="/images/award2026/hero.png"
      alt=""
    />
  </section>
</template>
