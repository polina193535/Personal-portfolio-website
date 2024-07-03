<script lang="ts">
  import router from "page";
  import Comic from './components/Comic.svelte';
  import Home from "./components/Home.svelte";
  
  let page = Home;

  router('/', () => page = Home);
  router('/Comic', () => page = Comic);
 

  router.start();

</script>

<svelte:component this={page} />