<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import QuoteWall from "$lib/quotes/QuoteWall.svelte";
  import { quoteStore } from "$lib/quotes/quote-store";
</script>

<h1>Rap Quotes</h1>

<QuoteWall quotes="{$quoteStore}" />
