<script context="module" lang="ts">
  import { client } from '$lib/SanityClient'

  export async function load() {
    const query = "*[_type == 'article' && 'Joseon' == categories]{slug, title, startDate, endDate, articleSummary, categories} | order(startDate asc)"
    const joseonArticles = await client.fetch(query)
    return { props: {
      joseonArticles }
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
    
    export let joseonArticles: { slug: Slug; title: string; articleSummary: string; startDate: string; endDate: string; categories: string }[] = []
</script>

<Nav />
<div>
  <h1>Joseon Dynasty</h1>
</div>
<section>
  <a href="/joseon/about-joseon">About Joseon</a>
  <a href="/joseon/political-factions">Political Factions</a>
</section>
<section>
  {#each joseonArticles as { slug, title, articleSummary, startDate, endDate, categories }}
  <ArticleCard title={title} slug={slug} articleSummary={articleSummary} startDate={startDate} endDate={endDate} categories={categories} />
  {/each}
</section>
