<script lang="ts">
    export let title, id, subreddit;
    import {params} from "@roxi/routify";
    $: title = $params.title;
    $: id = $params.id;
    $: subreddit = $params.subreddit;
    // fetch(`https://reddit.com/r/${$params.subreddit}/comments/${$params.id}/${$params.title}.json`, {mode: 'no-cors'})
    //     // .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
</script>
<h1>
    {title} {id} {subreddit}
</h1>