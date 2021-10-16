<script lang="ts">
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
  import ModalContainer from "$lib/modal/ModalContainer.svelte";
  import CreateQuoteForm from "$lib/quotes/CreateQuoteForm.svelte";
  import type { QuoteModel } from "$lib/quotes/QuoteModel";

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
  <slot/>
</main>
<Footer />
{#if isModalOpen}
  <ModalContainer>
    <CreateQuoteForm on:cancel={hideModal} on:submit={({detail}) => createQuote(detail)} />
  </ModalContainer>
{/if}

