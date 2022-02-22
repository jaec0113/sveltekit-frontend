<script context="module" lang="ts">
  import { client } from '$lib/SanityClient'

  export async function load() {
    const query = "*[_type == 'article' && 'Three-Kingdoms' == categories]{slug, title, startDate, endDate, articleSummary, categories} | order(startDate asc)"
    const threeKingdomsArticles = await client.fetch(query)
    return { props: {
      threeKingdomsArticles }
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
    
    export let threeKingdomsArticles: { slug: Slug; title: string; articleSummary: string; startDate: string; endDate: string; categories: string }[] = []
</script>

<Nav />
<div>
  <h1>Modern Korea</h1>
</div>
<section>
  <a href="/three-kingdoms/about-three-kingdoms">About the Three Kingdoms</a>
</section>
<section>
  {#each threeKingdomsArticles as { slug, title, articleSummary, startDate, endDate, categories }}
  <ArticleCard title={title} slug={slug} articleSummary={articleSummary} startDate={startDate} endDate={endDate} categories={categories} />
  {/each}
</section>
