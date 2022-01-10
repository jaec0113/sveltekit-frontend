<script context="module" lang="ts">
  import { client } from '../lib/SanityClient'

  export async function load() {
    const query = "*[_type == 'article']{_id, slug, title}"
    const articles = await client.fetch(query)
    return { props: {
      articles }
    }
  }
 
</script>

<script lang="ts">
  type Slug = {
    _type: string,
    current: string,
  }
  
  export let articles: { slug: Slug; title: string }[] = []
</script>

<h1>All Articles</h1>
<ul>
  {#each articles as { slug, title}}
    <li>{title}</li>
  {/each}
</ul>
