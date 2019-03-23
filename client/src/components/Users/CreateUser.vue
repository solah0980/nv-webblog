<template>
    <div>
        <h1>Create User</h1>
        <form v-on:submit.prevent = 'createUser'>
            <p>name : <input type='text' v-model='user.name'></p>
            <p>lastname : <input type='text' v-model='user.lastname'></p>
            <p>email : <input type='text' v-model='user.email'></p>
            <p>password : <input type='text' v-model='user.password'></p>
            <button type="submit">Create User</button>
        </form>
        <hr>
        <p>name : {{ user.name }}</p>
        <p>lastname : {{ user.lastname }}</p>
        <p>email : {{ user.email }}</p>
        <p>password : {{ user.password }}</p>
    </div>
</template>
<script>
import UsersService from '@/services/UsersService'

export default {
    data () {
        return {
            user : {
                name : '',
                lastname : '',
                email : '',
                password : '',
                status : 'active'
            }
        }
    },

    methods : {
        async createUser (){
            try{
                await UsersService.post(this.user)
                this.$router.push({
                    name: 'users'
                })
            } catch (error){
                console.log(error)
            }
        }
    }
    
}
</script>
<style scoped>

</style>
