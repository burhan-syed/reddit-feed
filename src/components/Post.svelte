<script lang="ts">
  import type { IPost, MediaInfo } from "../Typings/posts";
  export let post: IPost;

  import { url, goto } from "@roxi/routify";
  import { findMediaInfo } from "../Utils/tools";
  import Card from "./cards/Card.svelte";
  import Row from "./cards/Row.svelte";

  $: mediaInfo = {} as MediaInfo;
  const loadMediaInfo = async () => {
    mediaInfo = await findMediaInfo(post.data);
  };
  loadMediaInfo();
  const postClick = (post) => {
    $goto(
      $url(`${post.data.permalink}`)
    );
  };
</script>

<div on:click={() => postClick(post)}>
  <!-- <Card on:click={() => postClick(post)} post={post}/> -->
  <Row {post} {mediaInfo} />
</div>
