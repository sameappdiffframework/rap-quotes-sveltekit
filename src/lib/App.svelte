<script lang="ts">
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
  import ModalContainer from "$lib/modal/ModalContainer.svelte";
  import CreateQuoteForm from "$lib/quotes/CreateQuoteForm.svelte";
  import { quoteStore } from "$lib/quotes/quote-store";
  import type { QuoteFormInput } from "$lib/quotes/quote-form.utils";
  import type { QuoteModel } from "$lib/quotes/quote-store";
  import { v4 as uuid } from 'uuid';
  
  let isModalOpen: boolean = false;

  function showModal() {
    isModalOpen = true;
  }

  function hideModal() {
    isModalOpen = false;
  }

  function submitQuote(input: QuoteFormInput) {
    const quote: QuoteModel = {
      id: uuid(),
      quote: input.quote,
      artist: { name: input.artist },
      source: { name: input.source }
    };
    quoteStore.update((oldQuotes => [quote, ...oldQuotes]));
    hideModal();
  }
</script>

<Header on:createClicked={showModal} />
<main>
  <slot />
</main>
<Footer />
{#if isModalOpen}
  <ModalContainer>
    <CreateQuoteForm on:cancel={hideModal} on:submit={({detail}) => submitQuote(detail)} />
  </ModalContainer>
{/if}

