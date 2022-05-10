<script type="ts">
  import { params, redirect } from "@roxi/routify";
  import Feed from "../../../components/Feed.svelte";
  let sort = $params?.sort?.toUpperCase()
  if(sort !== "BEST" && sort !== "HOT" && sort !== "NEW" && sort !== "RISING" && sort !== "CONTROVERSIAL" && sort !== "TOP"){
    $redirect(`/r/${$params.subreddit}`)
  }
</script>

<Feed />
