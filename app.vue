<template>
  <div>
    locale: {{ locale }}
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
    const { locale } = useI18n()
</script>
