<script lang="ts" setup>
import { resolveRenderer } from '../components/resolveRenderer';

const route = useRoute();
const fullSlug = `/${route.params.slug ?? ''}`;

const { $useComposition } = useNuxtApp();

const { data } = await $useComposition({ slug: fullSlug });
const composition = computed(() => data.value?.composition);
</script>

<template>
  <div>
    <NavBar />
    <Composition
      v-if="composition"
      :data="composition"
      :resolveRenderer="resolveRenderer"
    >
      <SlotContent name="content" />
    </Composition>
  </div>
</template>
