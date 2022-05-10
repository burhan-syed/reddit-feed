<script lang="ts">
  import { url } from "@roxi/routify";
  import { params } from "@roxi/routify";

  export let route = $url();

  import Post from "../components/Post.svelte";
  import { feed } from "../stores/store";
  import { onDestroy } from "svelte";
  import InfiniteLoading from "svelte-infinite-loading";
 
  onDestroy(() => {
    feed.resetPosts();
  });
  const loadMorePosts = async () => {
    return await feed.fetchPosts({
      feed: route,
      after: $feed.after,
      count: $feed.count,
      sort: $params?.sort,
      range: $params?.t
    });
  };

  const infiniteHandler = ({ detail: { loaded, complete } }) => {
    loadMorePosts().then((posts) => {
      if (posts.after) {
        loaded();
      } else {
        complete();
      }
    });
  };
</script>

<main>
  {#await $feed}
  <p>Loading...</p>
{:then posts}
  {#each posts.posts as post}
    <Post {post} />
  {/each}
  <InfiniteLoading on:infinite={infiniteHandler} distance={400} />
{/await}
</main>

<style>
main {
  max-width: 64rem;
  margin: 0px auto;
}
</style>

