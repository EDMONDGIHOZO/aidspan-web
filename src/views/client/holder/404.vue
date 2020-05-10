<template>
    <div class="notFound">
        <p class="display-4 notice">It looks like you are lost</p>
        <p>PAGE NOT FOUND </p>
        <v-btn href="/" large>
            HOMEPAGE
        </v-btn>
    </div>
</template>


<style lang="scss" scoped>
.notFound{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url("~@/assets/images/common/404.jpg");
    background-size: cover;
    color: #ffffff;
}

.notice{
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
</style>

