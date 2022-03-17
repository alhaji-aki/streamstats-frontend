<template>
    <span class="badge rounded-pill bg-secondary">{{ tag.name['en-us'] }}</span>
</template>

<script>
export default {
    props: ['tag']
}
</script>