<template>
    <div>
        <a id="custom-login-btn" @click="kakaoLogin()">
            <img
                src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                width="222"
            />
        </a>
        <button type="button" @click="KakaoLogout">kakaoLogout</button>
    </div>
</template>
<script>
    export default {
        components: {},
        mounted(){
        //    this.kakaoLogout();
        },
        methods:{
            kakaoLogin(){
                window.Kakao.Auth.login({
                    scope: 'account_email, profile_nickname',
                    success: this.getKakaoAccount
                });
            },
            getKakaoAccount(){
                window.Kakao.API.request({
                    url:'/v2/user/me',
                    success: (res) => {
                        const kakao_account = res.kakao_account;
                        const nickname = kakao_account.profile.nickname; //카카오 닉네임
                        const email = kakao_account.email; //카카오 메일 

                        console.log("nickname", nickname);
                        console.log("email", email);
                        //로그인 처리 구현

                        console.log(kakao_account);
                        this.$store.commit('user', kakao_account);
                        alert("로그인 성공");
                    },
                    fail: (error) => {
                        console.log(error);
                    }
                });
            },
            KakaoLogout(){
                if (!window.Kakao.Auth.getAccessToken()) {
                    console.log('Not logged in.');
                    return; 
                }
                window.Kakao.Auth.logout(function() {
                    console.log(window.Kakao.Auth.getAccessToken());
                });
        }   }
    }
</script>
<style scoped>
</style>