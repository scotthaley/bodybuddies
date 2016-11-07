<template lang="pug">
div
    categorycard(id="steps" title='Number of Steps', totalcount='5302')
    categorycard(id="cardio" title='Cardio (minutes)', totalcount='45')

</template>

<script>
    import categorycard from 'vue/categorycard.vue'

    export default{
        name: "mybody",
        components: { categorycard },
        data(){
            return{
            }
        }
    }
</script>
