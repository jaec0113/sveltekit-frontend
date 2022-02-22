<script context="module" lang="ts">
  import { client } from '$lib/SanityClient'

  export async function load() {
    const query = "*[_type == 'article' && 'Goryeo' == categories]{slug, title, startDate, endDate, articleSummary, categories}"
    const goryeoArticles = await client.fetch(query)
    return { props: {
      goryeoArticles }
    }
  }
 
</script>

<script lang="ts">
  import Nav from '../../components/Nav.svelte'
  import ArticleCard from '../../components/ArticleCard.svelte'
  
  type Slug = {
    _type: string,
    current: string,
  }
    
    export let goryeoArticles: { slug: Slug; title: string; articleSummary: string; startDate: string; endDate: string; categories: string }[] = []
</script>

<Nav />
<div>
  <h1>Goryeo Dynasty</h1>
</div>
<section>
  <a href="/goryeo/about-goryeo">About Goryeo</a>
</section>
<section>
  {#each goryeoArticles as { slug, title, articleSummary, startDate, endDate, categories }}
  <ArticleCard title={title} slug={slug} articleSummary={articleSummary} startDate={startDate} endDate={endDate} categories={categories} />
  {/each}
</section>