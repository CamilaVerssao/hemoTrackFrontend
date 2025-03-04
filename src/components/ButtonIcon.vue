<template>
    <i 
        :class="[
            `fa ${icon} w-[20px] h-[20px] cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out`, 
            { 'text-red-500': red },
            { 'text-blue-500': blue }
        ]"
    ></i>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: null
        },
        red: {
            type: Boolean,
            default: false
        },
        blue: {
            type: Boolean,
            default: false
        }
    }
}
</script>
