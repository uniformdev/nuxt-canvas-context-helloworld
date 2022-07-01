<script lang="ts" setup>
defineProps<{
  greeting: string;
}>();
</script>

<template>
  <h2>{{ greeting }}</h2>
</template>
