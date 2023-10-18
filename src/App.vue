<!--
  the `javascript` part of our app
  import things, you could have pre-built things here like HelloWorld
  which would be saved in ./components/
  or you can import other things that you need
-->
<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<!--
  `html` section
  essentially, everything here goes into `id="app"` in the index.html
-->
<template>
  riley guioguio
  <header>
    <div class="fifths">heyo</div>
    <div class="fifths">ayy boom boom boom</div>
    <div class="fifths">heyo</div>
    <div class="fifths">heyo</div>
    <div class="fifths">heyo</div><br>
  </header>
  <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
  <p>work in progress</p>
  <div class="wrapper">
    <HelloWorld msg="You did it! hi yelir" />
  </div>

  <main>
    <TheWelcome />
  </main>
</template>


<!--
  css portion of our app
-->
<style scoped>
header {
  line-height: 1;

  /* justify the divs INSIDE the header from here */
  justify-content: center;
  display: flex;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    background-color: ffffff;
  }
}
</style>
