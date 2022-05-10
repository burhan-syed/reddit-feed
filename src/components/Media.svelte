<script lang="ts">
  import type {MediaInfo} from '../Typings/posts'
  export let data; 
  export let mediaInfo: MediaInfo;
  import { marked } from "marked";
</script>

<div class="media-container">
  {#if mediaInfo.iFrameHTML}
  <div class="iframe-container">
    {@html mediaInfo.iFrameHTML.outerHTML}
  </div>
  {:else if mediaInfo.isVideo && mediaInfo.videoInfo}
  <!-- svelte-ignore a11y-media-has-caption -->
  <video 
  controls
  loop
  autoplay
  >
    <source
            data-src={mediaInfo.videoInfo.url}
            src={mediaInfo.videoInfo.url}
            type="video/mp4"
          />
  </video>
  
  {:else if mediaInfo.isImage && mediaInfo.imageInfo}
    <img src={mediaInfo.imageInfo[mediaInfo.imageInfo.length - 1].url} alt={data.title}>
  {/if}
  {#if data.selftext}
    <p>{@html marked(data.selftext)}</p>
  {/if}
</div>

<style>
 img {
    max-height: 80vh;
    height:auto;
    width:auto;
  }
  video {
    max-height: 80vh;
    height:auto;
    width:auto;
  }
  p{
    max-height: 24rem;
    overflow-y: scroll;
  }
</style>