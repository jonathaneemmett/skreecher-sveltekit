<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    export let show;

    function handleClose() {
        dispatch('close');
    }
</script>

{#if show}
    <div class="modal">
        <div class="modal-content">
            <div class="modal-head">
                <slot name="head" />
                <button on:click={handleClose}>X</button>
            </div>
            <div class="modal-body">
                <slot name="body" />
            </div>
        </div>
    </div>
{/if}

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 100;
    }

    .modal-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 500px;
        background: #2f2830;
        border-radius: 5px;
        padding: 1rem;
    }

    .modal-head {
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 1rem 0;
        border-bottom: 1px solid rgba(129, 205, 198, .2);
    }

    .modal-body {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 0;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        border: none;
        color: rgba(129, 205, 198, .2);
        font-size: .6rem;
        font-weight: 700;
        cursor: pointer;
        border: 1px solid rgba(129, 205, 198, .2);
        padding: .6rem;
        border-radius: 50%;
        width: 25px;
        height: 25px;
    }

    button:hover {
        background: rgba(129, 205, 198, .2);
        color: #fff;
    }
</style>