<template lang="pug">
div
    form.login-form
        h2 Login
        div.input-field
            input#email(type='text')
            label(for='email') Email
        div.input-field
            input#password(type='password')
            label(for='password') Password
        div.buttons
            router-link.waves-effect.waves-light.btn.blue(to='register') Register
            a.waves-effect.waves-light.btn.blue Login
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            
        }
    }
}
</script>
