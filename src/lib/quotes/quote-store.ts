import type { Subscriber, Unsubscriber, Writable } from "svelte/store";
import { writable } from "svelte/store";

export interface QuoteModel {
  id: string,
  quote: string;
  artist: {
    name: string;
    url?: string;
  };
  source: {
    name: string;
    url?: string;
    image?: string;
  };
}

function onFirstSubscriber(set: Subscriber<QuoteModel[]>): Unsubscriber {
  fetch("/quotes.json")
    .then((response: Response) => response.json() as Promise<QuoteModel[]>)
    .then (set)
    .catch(() => ({ error: new Error("Could not load quotes") }));
  return () => {};
}

export const quoteStore: Writable<QuoteModel[]> = writable([] as QuoteModel[], onFirstSubscriber);
