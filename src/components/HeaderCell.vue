<template>
  <button :class="{ 'text-red-500': isActive }" class="cursor-pointer transition-all duration-300 font-semibold hover:text-red-600">{{ title }}</button>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Título'
        },
        isActive: {
            type: Boolean,
            default: false
        }
    }
}
</script>
