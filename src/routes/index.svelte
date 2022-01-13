<script context="module" lang="ts">
  import { client } from '$lib/SanityClient'

  export async function load() {
    const query = "*[_type == 'eraSummary' ] | order(startYear asc){slug, eraName, eraSummary}"
    const eras = await client.fetch(query)
    return { props: {
      eras }
    }
  }
 
</script>

<script lang="ts">
  import Nav from '../components/Nav.svelte'
  import Header from '../components/Header.svelte'
  import EraCard from '../components/EraCard.svelte'

  type Slug = {
    _type: string,
    current: string,
  }
  
  export let eras: { slug: Slug; eraName: string; eraSummary: string }[] = []
</script>

<Nav />
<Header />

<h1>All Eras</h1>
<div class="grid">
  {#each eras as { slug, eraName, eraSummary } }
    <EraCard eraName={eraName} slug={slug} eraSummary={eraSummary} />
  {/each}
</div>

