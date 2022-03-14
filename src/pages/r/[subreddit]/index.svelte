<script type="ts">
export let subreddit;
import {marked} from "marked";
import {fetchSubreddit} from '../../../Stores/posts';
import type { Writable } from "svelte/store";
import type { IPost } from "../../../Typings/posts";
import { imgError } from "../../../Utils/tools";
import { CommentIcon, PointIcon } from "../../../Utils/icon";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { url } from "@roxi/routify";
const posts = fetchSubreddit(subreddit) as Writable<Promise<IPost[]>>;
dayjs.extend(relativeTime)
</script>
{#await $posts}
    <p>Loading...</p>
{:then posts}
    {#each posts as post}
    <article>
        <a href={$url(`${post.data.permalink}`)} class="article-link">
            <span class="post-subheader">
                Posted by u/{post.data.author_fullname} {dayjs(post.data.created * 1000).fromNow()}
            </span>
            {#if post.data.title}
                <h2>{post.data.title}</h2>
            {/if}
            {#if post.data.url_overridden_by_dest && post.data.url_overridden_by_dest !== "self"}
                <img src="{post.data.url_overridden_by_dest}" alt="{post.data.title}" on:error={imgError} class="post-img">
            {/if}
            
            {#if post.data.selftext}
                <div>{@html marked(post.data.selftext.substring(0, 200))}</div>
            {/if}
            <span class="post-stats">{post.data.score} {@html PointIcon} • {post.data.num_comments} {@html CommentIcon}</span>
        </a>
    </article>
    {/each}
{/await}

<style>
    .article-link{
        color: inherit;
        text-decoration: none;
        display: block;
        padding: 20px;
        border-radius: 10px;
    }
    .article-link:hover{
        box-shadow: 0 0 0 .5px #fbd232, inset 0 0 0 .5px #fff;
    }
    article{
        background-color: var(--primary-color);
        max-width: 800px;
        margin: 10px auto;
        box-shadow: 0px 0px 2px 1px #282a2e;
        border-radius: 10px;
    }
    article h2{
        margin: .5rem 0;
    }
    article .post-img{
        width: calc(100% - 20px);
    }
    article .post-subheader{
        font-size: .8rem;
        display: block;
    }
</style>