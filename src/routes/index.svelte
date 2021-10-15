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
  import Header from "$lib/Header.svelte";
  import ModalContainer from "$lib/modal/ModalContainer.svelte";
  import CreateQuoteForm from "$lib/quotes/CreateQuoteForm.svelte";
  import type { QuoteModel } from "$lib/quotes/QuoteModel";
  import QuoteWall from "$lib/quotes/QuoteWall.svelte";

  export let quotes: QuoteModel[];
  let isModalOpen: boolean = false;

  function showModal() {
    isModalOpen = true;
  }

  function hideModal() {
    isModalOpen = false;
  }

  function createQuote(quote: QuoteModel) {
    console.log('createQuote', quote);
    hideModal();
  }
</script>

<Header on:createClicked={showModal} />
<main>
  <h1>Rap Quotes</h1>

  <QuoteWall quotes="{quotes}" />
</main>
{#if isModalOpen}
  <ModalContainer>
    <CreateQuoteForm on:cancel={hideModal} on:submit={({detail}) => createQuote(detail)} />
  </ModalContainer>
{/if}

