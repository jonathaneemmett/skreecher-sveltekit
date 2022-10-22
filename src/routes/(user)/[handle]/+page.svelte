<script>
     import { page } from '$app/stores';
    import { skreeches } from '../../../store.js'; 
    // Components
	import AddSkreech from '../../../components/content/Skreeches/AddSkreech.svelte';
	import SkreechItem from '../../../components/content/Skreeches/SkreechItem.svelte';

    let data = [];

    function handleLike(e) {
        let skreech = e.detail;
        let index = $skreeches.findIndex(s => s._id === skreech._id);
        $skreeches[index].likes++;     
    }

    function handleReskreech(e) {
        let skreech = e.detail;
        let index = $skreeches.findIndex(s => s._id === skreech._id);
        $skreeches[index].reSkreeches++; 
    }

    function handleReply(e) {
        let skreech = e.detail;
        let index = $skreeches.findIndex(s => s._id === skreech._id);
        $skreeches[index].replies++;     
    }

    $: $page?.data?.skreeches && skreeches.set(JSON.parse($page.data.skreeches));
</script>

<div>
    <h1>Home</h1>
    <AddSkreech  />
    {#each $skreeches as skreech}
        <SkreechItem skreech={skreech} on:like={handleLike} on:reskreech={handleReskreech} on:reply={handleReply} />
        {:else}
        <p style="color: #fff;">No skreeches yet</p>
    {/each}
</div>

<style>
    h1 {
        color: #fff;
    }

    div {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }

    div::-webkit-scrollbar {
                display: none;
            }
</style>