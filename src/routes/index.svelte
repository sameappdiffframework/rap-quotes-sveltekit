<script context="module" lang="ts">
  import type { QuoteModel } from "$lib/quotes/QuoteModel";

  export const prerender = true;

  /**
   * @type {import("@sveltejs/kit").Load}
   */
  export async function load({ fetch }) {
    const url = "/quotes.json";
    const res = await fetch(url);

    if (res.ok) {
      const quotes: QuoteModel[] = await res.json();
      return { props: { quotes: quotes } };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script lang="ts">
  import type { QuoteModel } from "$lib/quotes/QuoteModel";
  import QuoteWall from "$lib/quotes/QuoteWall.svelte";
  export let quotes: QuoteModel[];
</script>

<h1>Rap Quotes</h1>

<QuoteWall quotes="{quotes}" />
