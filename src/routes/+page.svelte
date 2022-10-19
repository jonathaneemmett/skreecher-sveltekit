<script>
    import { enhance } from '$app/forms';
    export let form;
    export let data;

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
            <form action="?/register" method="POST" use:enhance>
                <div>
                    <input type="text" name="name" id="name" placeholder="Name">
                    {#if form?.nameError}
                        <p class="error">Name is required</p>
                    {/if}
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder="Email">
                    {#if form?.emailError}
                        <p class="error">Email is required</p>
                    {/if}
                </div>
                <div>
                    <input type="text" name="handle" id="handle" placeholder="@handle">
                    {#if form?.handleError}
                        <p class="error">Handle is required</p>
                    {/if}
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder="Password">
                    {#if form?.passwordError}
                        <p class="error">Password is required</p>
                    {/if}
                </div>
                <div>
                    <input type="password" name="password2" id="password2" placeholder="Confirm Password">
                    {#if form?.password2Error}
                        <p class="error">Passwords must match</p>
                    {/if}
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
                <div>
                    <p>Already have an account? <a href="?/login">Login Here</a></p>
                </div>
            </form>
        </div>
    </div>
</div>

<style>
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
        font-family: 'Roboto', sans-serif;
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
        padding: 1rem;
        margin: .5rem 0;
        border: none;
        border-radius: 5px;
        color: rgba(255, 255, 255, .8);
    }

    button {
        width: 100%;
        padding: 1rem;
        margin: 1rem 0;
        border: none;
        border-radius: 5px;
        color: rgba(255, 255, 255, .8);
        background: #2f2830;
        font-weight: 900;
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
    }

    a:hover {
        color: rgba(129, 205, 198, 1)
    }

    .loginContainer {
        padding: 1rem;
    }

    .error {
        color: red;
    }
</style>
