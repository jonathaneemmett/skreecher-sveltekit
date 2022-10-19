<script>
    import Login from "../components/auth/Login.svelte";
    import Register from "../components/auth/Register.svelte";
    export let form;
    export let data;

    let showRegister = true;
    let showLogin = false;

    function toggleRegister() {
        showRegister = !showRegister;
        showLogin = !showLogin;
    }

</script>

<div>
    <div class="leftSide">
        <h1>S</h1>
        <h2>Skreecher</h2>
    </div>
    <div class="rightSide">
        <h1>Say It Here!</h1>
        <h2>Join Skreecher Today!</h2>
        <div class="loginContainer">
            {#if showLogin}
                <Login on:toggle={toggleRegister} form={form} data={data}/>
            {/if}
            {#if showRegister}
                <Register on:toggle={toggleRegister} form={form} data={data}/>
            {/if}
        </div>
    </div>
</div>

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
    .leftSide {
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86)), url('https://images.unsplash.com/photo-1531846802986-4942a5c3dd08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
        height: 100vh;
        width: 70%;
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .leftSide h1 {
        font-size: 10rem;
        color: rgba(129, 205, 198, 1);
        font-style: italic;
        font-family: 'Dancing Script', cursive;
    }

    .leftSide h2 {
        font-size: 2rem;
        color: white;
    }

    .rightSide {
        background: rgba(47, 40, 47, .8);
        height: 100vh;
        width: 30%;
        float: right;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:flex-start;
        padding: 1rem;
        color: rgba(255, 255, 255, .8);
    }

    .loginContainer {
        padding: 1rem;
        width: 100%;
    }

    
</style>
