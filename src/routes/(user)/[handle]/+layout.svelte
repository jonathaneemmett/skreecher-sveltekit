<script>
	import AsideContent from "../../../components/content/AsideContent.svelte";
import Navigation from "../../../components/layout/Navigation.svelte";

</script>

<div style="display: grid; grid-template-columns: 3fr 5fr 3fr; ">
    <aside class="leftAside">
        <Navigation />
    </aside>
    <main class="content">
        <slot />
    </main>
    <aside class="rightAside">
        <AsideContent />
    </aside>
</div>

<style>
    aside.leftAside {
        height: 100vh;
        background: #2f2830;
        display: flex;
        width: 15rem;
        width: 100%;
        border-right: 2px solid rgba(129, 205, 198, 1);
    }
    main {
        height: 100vh;
        background: rgba(0,0,0,255);
        display: flex;
        width: 100%
    }

    aside.rightAside {
        height: 100vh;
        background: #2f2830;
        display: flex;
        width: 15rem;
        width: 100%;
        border-left: 2px solid rgba(129, 205, 198, 1);
    }
</style>