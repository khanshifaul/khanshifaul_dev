<template>
    New Resume
</template>

<script setup>
import { Icon } from '@iconify/vue';

definePageMeta({
    layout: "admin",
});
const route = useRoute()

useHead({
    title: 'New Resume'
})
</script>