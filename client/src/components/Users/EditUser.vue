<template>
    <div>
        <h1>Edit User</h1>
        <form v-on:submit.prevent = 'editUser'>
            <p>name : <input type='text' v-model="user.name"></p>
            <p>lastname : <input type='text' v-model="user.lastname"></p>
            <p>email : <input type='text' v-model="user.email"></p>
            <p>password : <input type='text' v-model="user.password"></p>
            <button type="submit">แก้ไขข้อมูล</button>
        </form>
        <hr>
        <p>name : {{ user.name }}</p>
        <p>lastname : {{ user.lastname }}</p>
        <p>email : {{ user.email }}</p>
        <p>password : {{ user.password }}</p>
    </div>
</template>
<script>
import UserService from '@/services/UsersService'

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
    async editUser(){
        try{
            await UserService.put(this.user)
            this.$route.push({
                name : 'users'
            })
        }catch (error){
            console.log(error)
        }
    }
    },
    
    async created(){
        try{
            let userId = this.$route.params.userId
            this.user = (await UserService.show(userId)).data
        } catch (error){
            console.log(error)
        }
    },
}

</script>
<style scoped>

</style>

