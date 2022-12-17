<template>
    <main id="search">
        <SCatalogTop />
        <SGoodSection />
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    #search {
        padding-top: 96px;
        padding-bottom: 212px;

        @include max-width('md') {
            padding-top: 24px;
            padding-bottom: 64px;
        }
    }
</style>
