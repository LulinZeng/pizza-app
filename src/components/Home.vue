<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎大家品尝pizza！</h1>
                <h2>这里有你非常喜欢的pizza！</h2>
                <button @click="goToMenu" class="btn btn-success">Let's order!</button>

            </div>    
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goToMenu(){
            //跳转到上一个页面
            // this.$router.go(-1)

            //指定跳转的地址
            this.$router.replace('/menu')

            //指定跳转路由的名字下
            this.$router.replace({name:"menulink"})

            //通过push进行跳转
            // this.$router.push('/menu')
            this.$router.push({name:"menulink"})
        }
    }
}
</script>

<style>
#home{
    background:url(../../src/assets/pizza.jpg);
    background-size:cover;
    height:85vh;
    padding:10%;
}
h1,h2{
    margin:6%;
}
.background{
    background:#fff;
    opacity:0.8;
    max-width: 70vh;
    margin:0 auto;
    padding:20px 0;
}
</style>

