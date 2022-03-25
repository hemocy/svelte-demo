<script>
  import { link } from 'svelte-spa-router';
  const path = '/about/wise';
</script>

<h1>home</h1>

<a use:link={path}>To About Page</a>
