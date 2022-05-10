<script lang="ts">
  import type { IPost, MediaInfo } from "../../Typings/posts"

  export let post: IPost;
  export let mediaInfo: MediaInfo;

 
  import Media from "../Media.svelte";
  import { abbreviateNumber } from "../../Utils/tools";
  import {
    Maximize2Icon,
    Minimize2Icon,
    MessageSquareIcon,
    ChevronUpIcon,
    ExternalLinkIcon,
    AlignJustifyIcon,
    LinkIcon,
  } from "svelte-feather-icons";
  import { url, goto } from "@roxi/routify";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  dayjs.extend(relativeTime);

  $: expand = false;
  $: hover = false;
</script>

<article
  on:mouseenter={() => (hover = true)}
  on:mouseleave={() => (hover = false)}
  class="pv2"
>
  <div class="vote-container">
    <span><ChevronUpIcon /></span>
    <span>{abbreviateNumber(post.data.score)}</span>
    <span style="transform: rotate(180deg);"><ChevronUpIcon /></span>
  </div>
  <div
    class={"thumbnail-container pointer " +
      (!post.data?.thumbnail?.includes("http") ? " ba " : "")}
  >
    {#if post.data?.thumbnail?.includes("http")}
      <img
        src={post.data.thumbnail}
        height={post.data?.thumbnail_height}
        width={post.data?.thumbnail_width}
        alt="thumbnail"
        class="thumbnail"
      />
    {:else if post.data?.thumbnail == "self"}
      <AlignJustifyIcon />
    {:else}
      <LinkIcon />
    {/if}
  </div>
  <div class="info-container mh3">
    <span class="">
      {#if post.data.title}
        <h1
          class={"mv0 f4 lh-title fw5 pointer " +
            (hover ? " underline " : "underline-hover ")}
        >
          {post.data.title}
        </h1>
      {/if}
    </span>
    <span class="o-50">
      {#if $url()?.substring(0, 3) !== "/r/"}
        <a
          on:click|stopPropagation
          href={$url(post.data.subreddit_name_prefixed, {})}
          class="link-to-subreddit"
        >
          {post.data.subreddit_name_prefixed}
        </a>
        •
      {/if}
      Posted by u/{post.data.author}
      {dayjs(post.data.created * 1000).fromNow()}
      <span>({post.data.domain})</span>
    </span>
    <span class="post-buttons">
      {#if mediaInfo.hasMedia}
        <span
          class="post-button "
          on:click|preventDefault|stopPropagation={() => (expand = !expand)}
        >
          {#if expand}
            <Minimize2Icon class="rotate-90 " size="1x" />
          {:else}
            <Maximize2Icon class="rotate-90 " size="1x" />
          {/if}
        </span>
      {:else}
        <span style="width: 34px;" />
      {/if}
      <span class="post-button">
        <MessageSquareIcon class="" size="1x" />
        <span class="ml1 f6">{post.data.num_comments} comments</span>
      </span>
      <a
        href={post.data.url}
        class="link external-link"
      >
        <span class="post-button ">
          <ExternalLinkIcon size="1x" />
          <span class="ml1 f6">Source</span>
        </span>
      </a>
      <a
        class="link external-link"
        href={`https://www.reddit.com${post.data?.permalink ?? ""}`}
        target="_blank"
        rel="noreferrer"
      >
        <span class="post-button ">
          <ExternalLinkIcon size="1x" />
          <span class="ml1 f6">Original</span>
        </span></a
      >
    </span>
    {#if expand}
      <Media data={post.data} {mediaInfo} />
    {/if}
  </div>
</article>

<style>
  article {
    background-color: var(--primary-color);
    display: flex;
  }
  article:hover {
    background-color: #32353a;
    transition: 0.1s;
  }
  article .post-title {
    font-size: 0.8rem;
    display: block;
  }
  article .vote-container {
    display: flex;
    flex: none;
    align-items: center;
    flex-direction: column;
    width: 4rem;
  }
  .external-link{
    color: #D7DDDE;
    outline: none;
  }
  .post-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
  .post-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 9px;
    /* background-color: var(--background-2); */
    border: 1px solid transparent;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    height: 1rem;
  }
  .post-button:hover {
    border: 1px solid var(--text-muted);
  }
  .thumbnail {
    border-radius: 0.375rem;
  }
  .expand {
    width: 2rem;
    height: 2rem;
    transform: rotate(90deg);
  }
  .article-link {
    color: inherit;
    text-decoration: none;
    display: block;
    padding: 20px;
    border-radius: 10px;
  }
  .article-link:hover {
    box-shadow: 0 0 0 0.5px #fbd232, inset 0 0 0 0.5px #fff;
  }
  .thumbnail-container {
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 4rem;
    border-radius: 0.375rem;
    flex: none;
  }
  .info-container {
    display: flex;
    flex: grow;
    flex-direction: column;
    gap: 0.25rem;
  }

  .link-to-subreddit {
    color: #f0f8ff;
    text-decoration: none;
    transition: 0.2s;
    font-weight: 400;
  }
  .link-to-subreddit:hover {
    color: #fbd232;
  }
</style>
