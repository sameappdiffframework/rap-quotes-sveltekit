<script lang="ts">
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
  import ModalContainer from "$lib/modal/ModalContainer.svelte";
  import CreateQuoteForm from "$lib/quotes/CreateQuoteForm.svelte";
  import { QuoteModel, quoteStore } from "$lib/quotes/quote-store";

  let isModalOpen: boolean = false;

  function showModal() {
    isModalOpen = true;
  }

  function hideModal() {
    isModalOpen = false;
  }

  function submitQuote(quote: QuoteModel) {
    quoteStore.update((oldQuotes => [quote, ...oldQuotes]));
    hideModal();
  }
</script>

<Header on:createClicked={showModal} />
<main>
  <slot/>
</main>
<Footer />
{#if isModalOpen}
  <ModalContainer>
    <CreateQuoteForm on:cancel={hideModal} on:submit={({detail}) => submitQuote(detail)} />
  </ModalContainer>
{/if}

