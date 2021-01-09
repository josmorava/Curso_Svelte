<script>
  import Header from './../components/Header.svelte';
  import Main from './../components/Main.svelte';
  import Slidebar from './../components/Slidebar.svelte';
  import Timeline from './../components/Timeline.svelte';
  import {onMount} from 'svelte';

  let data = {};
  const API = 'https://us-central-pugstagram-co.cloudfuctions.net/data';

  onMount(async () =>{
    //peticiones a una api con svelte
    const response = await fetch(API)
    data = await response.jason();
  });
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');

  :global(body){
    background-color: #fafafa;
    color: rgba(38,38,38, 0.7);
    font-family: "Lato", sans-serif;
    margin: 0;
    margin: 0;
  }
  :global(h1,h2,h3){
    margin: 0;
    padding: 0;
  }
</style>

<Header />
<Main>
  <Timeline post={data.post}/>
  <Slidebar {...data.user}/>
</Main>