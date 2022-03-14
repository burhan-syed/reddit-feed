<script>

import { url } from "@roxi/routify";

</script>
<header>
    <a href={$url("/")} class="header-title">Commune Community</a>
</header>

<style>
    header{
        background-color: var(--primary-color);
        display: block;
        padding: 1rem;
        margin-bottom: 2rem;
        box-shadow: 0px 0px 2px 3px #282a2e;
    }
    .header-title{
        display: block;
        font-family: Whitney;
        font-weight: 600;
        font-size: 1.2rem;
        color: inherit;
        text-decoration: none;
    }
</style>
<!-- routify:options preload="proximity" -->
<slot />
