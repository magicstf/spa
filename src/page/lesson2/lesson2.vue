<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <router-link :to="{name:'foo2'}">Go to Foo</router-link>
      <router-link :to="{name:'bar2'}">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>