<!-- <script context="module" lang="ts">
  import { client } from '$lib/SanityClient'

  export async function load() {
    const query = "*[_type == 'article']{_id, slug, title}"
    const articles = await client.fetch(query)
    return { props: {
      articles }
    }
  }
 
</script> -->

<script lang="ts">
  import Nav from '../components/Nav.svelte'
  import Header from '../components/Header.svelte'

  // type Slug = {
  //   _type: string,
  //   current: string,
  // }
  
  // export let articles: { slug: Slug; title: string }[] = []
</script>

<Nav />
<Header />

<div>
  <h1>History of Korea</h1>
  <section>
    <h3>Legends and Ancient Korea (~108BC)</h3> 
    <p>How did people come to live on the Korean peninsula? The legends of Gojoseon and the creation of Jeju Island.</p>
  </section>
  <section>
    <h3>Three Kingdoms (57BC - 935AD)</h3>
    <p>A period of constant back-and-forth between the kingdoms of Silla, Baekje, and Goguryeo (and the Gaya Confederacy).</p>
  </section>
  <section>
    <h3>Later Three Kingdoms (668 - 935)</h3>
    <p>During this period the Three Kingdoms are largely unified under Silla. However, as time goes on it begins to fall apart allowing Taebong (Later Goguryeo) and Later Baekje to emerge.</p>
  </section>
  <section>
    <h3>Goryeo Dynasty (918 - 1392)</h3>
    <p>The Goryeo Dynasty saw the country once again unified under one rule. The period was marked by several wars with the Liao, Jurchen, and Yuan dynasties to the north as well as internal conflicts between the royal family and military.</p>
  </section>
  <section>
    <h3>Joseon Dynasty (1392 - 1897)</h3>
    <p>The longest lasting and most famous dynasty in Korea's history. Joseon was founded by Yi Seonggye after he overthrew the King of Goryeo. Much of Korea's modern traditions and culture stem from the Joseon Dynasty.</p>
  </section>
  <section>
    <h3>Empire of Korea (1897 - 1910)</h3>
    <p>King Gojong declared the Empire of Korea to put it on the same level as China and Japan. However, that was only in name only as Japan increased their influence over the king and the court.</p>
  </section>
  <section>
    <h3>Colonial Period (1910 - 1945)</h3>
    <p>A dark period of Korean history. During this time Korea simply became a resource for the Japanese Empire in their quest to conquer Asia. </p>
  </section> 
  <section>
    <h3>Modern Korea (1945 - present)</h3>
    <p>Free from Japanese rule, the new Republic of Korea set out to make it own history. However, there are many obstacles in its way: an aggressive North Korea, historical grudges with Japan, positioning between China and the United States. </p>
  </section>
  <section>
    <h3>101 Influential Koreans</h3>
  </section>
</div>

<!-- <h1>All Articles</h1>
<ul class="max-w-lg">
  {#each articles as { slug, title}}
    <li class="text-xl text-fuchsia-600"><a href={`/${slug.current}`}>{title}</a></li>
    <p>{slug.current}</p>
  {/each}
</ul> -->
