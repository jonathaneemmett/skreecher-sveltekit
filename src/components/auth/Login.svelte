<script>
    import { enhance, applyAction } from '$app/forms';
    import { invalidateAll } from '$app/navigation';
    import { createEventDispatcher } from 'svelte';
	import { loop_guard } from 'svelte/internal';

    const dispatch = createEventDispatcher();
    export let form;
    export let data;

    let email = '';
    let password = '';

    // Error Handling
    let emailError = false;
    let passwordError = false;

    function toggle() {
        dispatch('toggle');
    }

    function validate() {
        let isValid = true;

        if (email === '') {
            emailError = true;
            isValid = false;
        } else {
            emailError = false;
        }

        if (password === '') {
            passwordError = true;
            isValid = false;
        } else {
            passwordError = false;
        }

        return isValid;
    }
</script>
<form action="?/login" method="POST" use:enhance={({ cancel }) => {
    if(!validate()) {
        cancel();
    }

    
}}>
    <div>
        <input type="email" name="email" id="email" placeholder="Email" bind:value={email}>
        {#if emailError}
            <div class="error">Email is required</div>
        {/if}
    </div>
    <div>
        <input type="password" name="password" id="password" placeholder="Password" bind:value={password}>
        {#if passwordError}
            <div class="error">Password is required</div>
        {/if}
    </div>
    {#if form?.invalid}
        <div class="error">Invalid credentials</div>
    {/if}
    <div>
        <button type="submit">Login</button>
    </div>
    <div>
        <p>Don't have an account? <a on:click|preventDefault={toggle}>Register Here</a></p>
    </div>
</form>

<style>
    h1 {
        font-size: 3rem;
        font-weight: 900;
        padding: 1.5rem 1rem;
    }

    h2 {
        font-size: 2rem;
        font-weight: 900;
        padding: 1.5rem 1rem;
    }

    div {
        width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    input {
        width: 100%;
        padding: 1.2rem;
        margin: .5rem 0;
        border: none;
        border-radius: 5px;
        color: rgba(21, 21, 21, 1)
    }

    ::placeholder {
        font-size: 1rem;
    }

    button {
        width: 100%;
        padding: 1.2rem;
        margin: 1rem 0;
        border: none;
        border-radius: 5px;
        color: rgba(255, 255, 255, .8);
        background: #2f2830;
        font-weight: 900;
        font-size: 1.2rem;
    }

    p {
        font-size: 1.1rem;
        font-weight: 900;
        padding: 1rem 0;
    }

    a {
        color:  rgba(179, 224, 220, 1);
        font-weight: 900;
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        color: rgba(129, 205, 198, 1)
    }
</style>