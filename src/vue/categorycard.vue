<template lang="pug">
div.card.blue-grey
    div.card-content.white-text
        span.card-title {{ title }}
        p.light-green-text.text-accent-3(ref='formattedCount') {{ formattedCount }}
    div.card-action
        div.row
            div.col.s6
                div.input-field
                    input#count(type='number', value='0', ref='count')
            div.col.s6
                a.waves-effect.waves-light.btn.add-button.green.accent-3(ref='addButton')
                    i.material-icons add
</template>

<script>
    export default {
        name: "categorycard",
        props: ["id", "title", "totalcount"],
        data() {
            return{
                computedCount: this.totalcount
            }
        },
        computed: {
            formattedCount() {
                return this.$data.computedCount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        mounted() {
            this.$refs.addButton.addEventListener('click', this.addClicked);
            this.$refs.formattedCount.addEventListener('click', this.updateCount);
        },
        methods: {
            addClicked() {
                this.$data.computedCount = parseInt(this.$data.computedCount) + parseInt(this.$refs.count.value);
                this.$refs.count.value = '0';
            },
            updateCount() {
                var newCount = prompt("Set total", this.$data.computedCount);
                if (newCount != null) {
                    this.$data.computedCount = newCount;
                }
            }
        }
    }
</script>