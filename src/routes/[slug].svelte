<script context="module" lang="ts">
  import { client } from '../lib/SanityClient'

  export async function load({ params }) {
    const query = `*[_type == "article" && slug == "${params.slug}"]{
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
  type Article = {
    title: string
    body: string
  }

  export let article: Article
  $: ({ title, body } = article[0])
</script>

<div>
  <h1>{title}</h1>
  <div>{body}</div>
</div>