<template>
<div>
    <h1>Get ALL Users</h1>
    <h4>จํานวนผู้ใช้งาน {{ users.length }}</h4>
    <div v-for="user in users" v-bind:key="user.id">
        <p>id: {{ user.id }}</p>
        <p>ชื่อ-สกุล: {{ user.name }} - {{ user.lastname }}</p>
        <p>email: {{ user.email }}</p>
        <p>password: {{ user.password }}</p>
        <p><button v-on:click="navigateTo('/user/+user.id')">ดูข้อมูลผูใช้งาน</button></p>
        <p><button v-on:click='deleteUser(user)'>ลบข้อมูล</button></p>
        <hr>
        
    </div>
</div>
</template>
<script>
import UserService from '@/services/UsersService'

export default {
    data () {
    return {
        users: []
        }
    },
   
    async created () {
        this.users = (await UserService.index()).data
    },
    
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        },
        
        async deleteUser(user){
            let result = confirm("คุณแน่ใจที่จะลบ")
            if(result){
            try{ 
                await UserService.delete(user)
                this.refreshData()
            } catch (error){
                console.log(error)
            }

        }
    },
        async refreshData(){
            this.users = (await UserService.index()).data
        }
}
}


</script>
<style scoped>

</style>