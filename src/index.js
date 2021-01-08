import App from './containers/App.svelte';


//Empujando la app al documento html
const app = new App({
  target: document.querySelector('main')
});

export default app;