<template lang="pug">
ul.side-nav(href='#')
    li(v-for='item in menuItems')
        router-link(:to='item.to') {{ item.label }}
</template>

<script>
export default {
    name: 'sidenav',
    data() {
        return {
            
        }
    },
    computed: {
        menuItems() {
            var items = [];
            if (_sessionToken) {
                items.push({ to: 'matchup', label: 'Matchup' }),
                items.push({ to: 'mybody', label: 'My Body' })
            } else {
                items.push({ to: 'login', label: 'Login' }),
                items.push({ to: 'register', label: 'Register' })
            }
            return items;
        }
    }
}
</script>