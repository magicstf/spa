<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <router-link :to="{path:'foo3/foo'}">Go to Foo</router-link>
      <router-link :to="{path:'bar3/bar'}">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>