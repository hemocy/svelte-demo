<script>
  import { push, replace } from 'svelte-spa-router';

  const goDetail = () => {
    push('/detail/heihei/1');
    // or
    // replace('/about/wise');
  };
</script>

<h1 on:click={goDetail}>about</h1>
