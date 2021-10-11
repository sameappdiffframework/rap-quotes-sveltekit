<script lang="ts">
  import Quote from '$lib/quotes/Quote.svelte';
  import type { QuoteModel } from "$lib/quotes/QuoteModel";

  export let quotes: QuoteModel[];
</script>

{#each quotes as quote}
  <Quote quote={quote} />
{/each}
