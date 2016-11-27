<template lang="pug">
div
    form.login-form(ref='form')
        h2 Register
        div.input-field
            input#name(type='text',name='name',ref='name')
            label(for='name') Full Name
        div.input-field
            input#nickname(type='text',name='nickname',ref='nickname')
            label(for='nickname') Nickname
        div.input-field
            input#email(type='text',name='email',ref='email')
            label(for='email') Email
        div.input-field
            input#password(type='password',name='password',ref='pass1')
            label(for='password') Password
        div.input-field
            input#repassword(type='password',ref='pass2')
            label(for='repassword') Retype Password
            span.error#error(ref='error') Passwords do not match
        div.buttons
            a.waves-effect.waves-light.btn.blue(v-on:click='register') Register
</template>

<script>
export default {
    name: "register",
    data() {
        return {
            
        }
    },
    methods: {
        register() {
            if ($(this.$refs.pass1).val().length < 5) {
                this.showError('Password must be at least 5 characters long');
                return;
            }
            if ($(this.$refs.pass1).val() != $(this.$refs.pass2).val()) {
                this.showError('Passwords do not match');
                return;
            }
            let user = $(this.$refs.form).serialize();
        },
        showError(msg) {
            $(this.$refs.error).html(msg);
            $(this.$refs.error).show();
        }
    }
}
</script>
