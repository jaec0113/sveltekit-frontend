<script context="module" lang="ts">
  import { client } from '$lib/SanityClient'

  export async function load() {
    const query = "*[_type == 'article' && 'Joseon Dynasty' == categories]{slug, title}"
    const joseonArticles = await client.fetch(query)
    return { props: {
      joseonArticles }
    }
  }
 
</script>

<script lang="ts">
  import Nav from '../../components/Nav.svelte'
  import Header from '../../components/Header.svelte'
  
  type Slug = {
    _type: string,
    current: string,
  }
    
    export let joseonArticles: { slug: Slug; title: string }[] = []
</script>

<Nav />
<Header />
<div>
  <h1>Joseon Dynasty</h1>
</div>
<ul class="max-w-lg">
  {#each joseonArticles as { slug, title }}
    <li class="text-xl text-fuchsia-600"><a href={`/joseon/${slug.current}`}>{title}</a></li>
    <p>{slug.current}</p>
  {/each}
</ul>