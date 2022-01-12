<script context="module" lang="ts">
  import { client } from '$lib/SanityClient'

  export async function load({ params }) {
    const query = `*[_type == "article" && slug.current == "${params.slug}"]{
      title,
      body
    }`
    const article = await client.fetch(query)

    return {
      props: { article }
    }
    
  }
</script>
  
<script lang="ts">
  import PortableText from '@portabletext/svelte'
  import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';

  type Article = {
    title: string
    body: PortableTextBlocks
  }

  export let article: Article
  $: ({ title, body } = article[0])
</script>

<div>
  <h1>{title}</h1>
  <div class="leading-loose"> 
    <PortableText blocks={body} />
  </div>
</div>