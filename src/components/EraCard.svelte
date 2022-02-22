<script lang="ts">
   type Slug = {
    _type: string,
    current: string,
  }

  export let eraName: string
  export let eraSummary: string
  export let slug: Slug
</script>

<section class="flex flex-col justify-between border-2 rounded-lg max-w-xl p-4">
  <h3 class="text-2xl">{eraName}</h3>
  <p>{eraSummary}</p>
  <a href={`${slug.current}`} class="text-blue-900 cursor-pointer">See all articles</a>
</section>