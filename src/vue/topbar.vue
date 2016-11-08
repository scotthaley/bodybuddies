<template lang="pug">
nav
    div.nav-wrapper.topbar
        a.brand-logo {{ title }}
        a.button-collapse(href='#',data-activates='leftnav')
            i.material-icons menu
        sidenav#leftnav
        //- ul.side-nav#leftnav(href='#')
        //-     li
        //-         router-link(to='matchup') Matchup
        //-     li
        //-         router-link(to='mybody') My Body
</template>

<script>
import sidenav from 'vue/sidenav.vue'

export default {
	name: "topbar",
    components: { sidenav },
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
