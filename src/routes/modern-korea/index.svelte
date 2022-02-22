<script context="module" lang="ts">
  import { client } from '$lib/SanityClient'

  export async function load() {
    const query = "*[_type == 'article' && 'Modern-Korea' == categories]{slug, title, startDate, endDate, articleSummary, categories} | order(startDate asc)"
    const modernKoreaArticles = await client.fetch(query)
    return { props: {
      modernKoreaArticles }
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
    
    export let modernKoreaArticles: { slug: Slug; title: string; articleSummary: string; startDate: string; endDate: string; categories: string }[] = []
</script>

<Nav />
<div>
  <h1>Modern Korea</h1>
</div>
<section>
  <a href="/modern-korea/about-modern-korea">About Modern Korea</a>
  <a href="/modern-korea/political-parties">Political Parties</a>
</section>
<section>
  {#each modernKoreaArticles as { slug, title, articleSummary, startDate, endDate, categories }}
  <ArticleCard title={title} slug={slug} articleSummary={articleSummary} startDate={startDate} endDate={endDate} categories={categories} />
  {/each}
</section>
