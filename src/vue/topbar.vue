<template lang="pug">
nav
    div.nav-wrapper.topbar
        a.brand-logo {{ title }}
        a.button-collapse(href='#',data-activates='leftnav')
            i.material-icons menu
        ul.side-nav#leftnav(href='#')
            li
                router-link(to='matchup') Matchup
            li
                router-link(to='mybody') My Body
</template>

<script>

export default {
	name: "topbar",
	data() {
    	return {
        	title: "Body Buddies"
        }
    },
    mounted() {
        $('.button-collapse').sideNav({ closeOnClick: true });
    }
}
</script>
