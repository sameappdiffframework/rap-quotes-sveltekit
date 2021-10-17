<script lang="ts">
  import Quote from "$lib/quotes/Quote.svelte";
  import type { QuoteModel } from "$lib/quotes/quote-store";

  export let quotes: QuoteModel[];
</script>

{#if quotes && quotes.length > 0}
  {#each quotes as quote}
    <Quote {quote} />
  {/each}
{/if}
