<template>
    <div>
        <div class="row mb-5">
            <div class="col-4">
                <div class="list-group mb-5">
                    <router-link tag="li" class="nav-link" :to="{name:'historylink'}">
                        <a class="list-group-item list-group-action">历史订单</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'contactlink'}">
                        <a class="list-group-item list-group-action">联系方式</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'orderingGuidelink'}">
                        <a class="list-group-item list-group-action">点餐文档</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'deliverylink'}">
                        <a class="list-group-item list-group-action">快递信息</a>
                    </router-link>
                </div>
            </div>
            <div class="col-8">
                <!-- 导航所对应的内容 -->
                <router-view></router-view>
            </div>
        </div>        
    </div>
</template>
