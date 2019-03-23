<template>
    <div>
        <h1>Show User</h1>
        <p>Id: {{ user.id }}</p>
        <p>ชื่อ-สกุล: {{ user.name }} - {{ user.lastname }}</p>
        <p>email: {{ user.email }}</p>
        <p>password Id: {{ user.password }}</p>
    </div>
</template>
<script>
import UsersServices from '@/services/UsersService'

export default {
    data () {
        return {
            user: 0
        }
    },
    
    async created () {
        try {
        let userId = this.$route.params.userId
        this.user = (await UsersServices.show(userId)).data
        } catch (error) {
        console.log(error)
        }
    }
}
</script>
<style scoped>

</style>
