<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher();
</script>

<header>
  <nav>
    <ul>
      <li>
        <button on:click|preventDefault={() => dispatcher('createClicked')}>Create quote</button>
      </li>
      <li>
        <a sveltekit:prefetch href="/">All quotes</a>
      </li>
      <li>
        <a sveltekit:prefetch href="/about">About</a>
      </li>
    </ul>
  </nav>
</header>

<style>
    header {
        display: block;
        height: 0;
        border-left: 26px solid transparent;
        border-right: 26px solid transparent;
        border-top: 40px solid var(--primary-accent);
    }

    header a {
        color: var(--bg-color);
    }

    header a:hover {
        color: var(--secondary-accent);
        border-bottom: 2px solid var(--secondary-accent);
    }

    nav > ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
    }

    nav > ul > li {
        text-transform: uppercase;
        margin-top: -40px;
    }
</style>
