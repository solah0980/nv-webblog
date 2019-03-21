<template>
<div>
    <h1>Get ALL Users</h1>
</div>
</template>
<script>
export default {
    create (){
        this.$http.get('http://localhost:8081/users')
                .then(function (response) {
                    console.log(response)
                })
      
    }

}
</script>
<style scoped>

</style>