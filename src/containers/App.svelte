<script>
  import Header from './../components/Header.svelte';
  import Main from './../components/Main.svelte';
  import Slidebar from './../components/Slidebar.svelte';
  import Timeline from './../components/Timeline.svelte';

</script>

<style>
  :global(body){
    background-color: #676778;
    color: white;
  }
</style>

<Header />
<Main>
  <Timeline />
  <Slidebar />
</Main>