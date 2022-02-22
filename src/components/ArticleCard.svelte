<script lang="ts">
  type Slug = {
    _type: string,
    current: string,
  }

  export let title: string
  export let startDate: string
  export let endDate: string
  export let articleSummary: string
  export let categories: string
  export let slug: Slug
</script>

<section class="flex flex-col justify-between border-2 rounded-lg max-w-xl p-4">
  <h2 class="text-2xl">{title}</h2>
  <p>{startDate} - {endDate}</p>
  <p>{articleSummary}</p>
  <a href={`/${categories.toLowerCase()}/${slug.current}`} class="text-blue-900 cursor-pointer">Read More about {title}</a>
</section>