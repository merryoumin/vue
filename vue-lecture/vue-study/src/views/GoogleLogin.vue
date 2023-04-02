<template>
    <div>
        <div id="google-signin-btn"></div>
        <button type="button" @click="signOut">로그아웃</button>
        <button type="button" @click="fnAdd">fnAdd</button>
    </div>
</template>
<script>
    export default {
        mounted(){
            window.gapi.signin2.render("google-signin-btn", {
                onsuccess: this.onSignIn
            });
        },
        methods:{
            onSignIn(googleUser){
                const profile = googleUser.getBasicProfile();
                console.log("ID"+ profile.getId());
                console.log("Full Name"+ profile.getName());
                console.log("Given Name"+ profile.getGivenName());
                console.log("Faily Name"+ profile.getFailyName());
                console.log("Imagie URL"+ profile.getImaginUrl());
                console.log("Email"+ profile.getEmail());

                const id_token = googleUser.getAuthResponse().id_token;
                console.log("ID Token : " + id_token);
            },
            signOut(){
                window.gapi.auth2.getAuthInstance().disconnect();
            },fnAdd() {
			this.$router.push("./write");
		}
        }
    }
</script>
<style scoped>
</style>