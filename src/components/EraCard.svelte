<script lang="ts">
   type Slug = {
    _type: string,
    current: string,
  }

  export let eraName: string
  export let eraSummary: string
  export let slug: Slug
</script>

<section class="border-2">
  <h3 class="text-2xl">{eraName}</h3>
  <p>{eraSummary}</p>
  <a href={`${slug.current}`}>Read More</a>
</section>