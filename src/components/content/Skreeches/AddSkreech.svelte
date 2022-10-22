<script>
    import { enhance, applyAction } from '$app/forms';
	import { is_function } from 'svelte/internal';

    let skreech = '';
    let isDisabled = false;
    let contentToLong = false;
    let contentEmpty = false;

    $: skreech && validate();

    function validate() {
        let isValid = true;

        if(skreech.length > 200) {
            contentToLong = true;
            isDisabled = true;
            isValid = false;
        } else {
            contentToLong = false;
            isDisabled = false;
        }

        if(skreech.length === 0) {
            contentEmpty = true;
            isDisabled = true;
            isValid = false;
        } else {
            contentEmpty = false;
            isDisabled = false;
        }

        return isValid;
    }
       
</script>

<form action="?/addSkreech" method="POST" use:enhance={({cancel}) => {
    if(!validate()){
        cancel();
    }
}}>
    <div class="skreech-main">
        <div class="skreech-content">
            <textarea name="content" placeholder='Skreech it!' rows="5" cols="30" bind:value={skreech} />
            {#if contentToLong}
                <p class="error">Content is to long</p>
            {/if}
            {#if contentEmpty}
                <p class="error">Content is empty</p>
            {/if}
        </div>
        <div class="skreech-footer">
            <div><!-- <div>Future icons section</div> --></div>
            <button type="submit" class="btn btn-primary btn-rounded btn-skreetch" disabled={isDisabled} >Skreech</button>
        </div>
    </div>
</form>

<style>
    .skreech-main {
        color: #fff;
        width: 100%;
    }
    .skreech-content {
        width: 100%;
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .skreech-footer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        height: 10%;
    }


    textarea {
        width: 100%;
        border: none;
        border-bottom: 1px solid rgba(129, 205, 198, 0.2);
        background: rgba(0, 0, 0, 1);
        color: rgba(129, 205, 198, 1);
        font-size: 1.5rem;
        padding: 0.5rem;
    }

    textarea:focus {
        outline: none;
        border-bottom: 1px solid rgba(129, 205, 198, 1);
    }

    
    
</style>