<template>
    <div>
        <h1>User Login</h1>
        <form v-on:submit.prevent="onLogin()">
            <p>username: <input type="text" v-model="email"></p>
            <p>password: <input type="password" v-model="password"></p>
            <p><button type="submit">Login</button></p>
        </form>
    </div>
</template>
<script>
import AunthenService from '@/services/AuthenService'
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },

    methods: {
        async onLogin(){
            try{
                const respons = await AunthenService.login({
                    email: this.email,
                    password: this.password
                })
                
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                
                console.log(response)

            }catch (error){
                console.log(error)
            }
        }

        }
    }
</script>
<style scoped>

</style>
