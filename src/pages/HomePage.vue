<template>
    <div class="home">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "HomePage",
}
</script>

<style>
.home {
    border: 1px solid black;
    padding: 10px;
}
</style>