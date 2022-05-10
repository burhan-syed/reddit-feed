<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/tachyons.min.css">
</svelte:head>
<Router {routes} />