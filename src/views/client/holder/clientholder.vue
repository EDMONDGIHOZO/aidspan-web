<template>
  <div class="holder">
  <keep-alive>
      <router-view :key="$route.path"></router-view>
  </keep-alive>
  </div>
</template>
