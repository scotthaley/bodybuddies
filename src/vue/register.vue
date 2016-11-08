<template lang="pug">
div
    form.login-form
        h2 Register
        div.input-field
            input#name(type='text')
            label(for='name') Full Name
        div.input-field
            input#nickname(type='text')
            label(for='nickname') Nickname
        div.input-field
            input#email(type='text')
            label(for='email') Email
        div.input-field
            input#password(type='password')
            label(for='password') Password
        div.input-field
            input#repassword(type='password')
            label(for='repassword') Retype Password
        div.buttons
            a.waves-effect.waves-light.btn.blue Register
</template>

<script>
export default {
    name: "register",
    data() {
        return {
            
        }
    }
}
</script>