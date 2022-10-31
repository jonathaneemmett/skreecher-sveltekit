<script>
    import { createEventDispatcher } from 'svelte';
    import Modal from '../../layout/Modal.svelte';
	import SkreechForm from './SkreechForm.svelte';

    export let skreech;
    let showModal = false;

    const dispatch = createEventDispatcher();

    function handleLike(){
        dispatch('like', skreech);
    }

   function handleReply() {
        dispatch('reply', skreech);
    }

    function handleReskreech() {
        dispatch('reSkreech', skreech);
    }

    function handleHandleShowModal() {
        showModal = !showModal;
    }


    // Gets time difference between now and skreech.createdAt
 function timeSincePost(createdAt) {
    const date = new Date() - new Date(createdAt);
    const epoch = Math.round(date / 1000);
    const seconds = epoch;
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const weeks = Math.round(days / 7);
    const months = Math.round(weeks / 4.35);
    const years = Math.round(months / 12);

    if (seconds < 5) {
      return "now";
    } else if (seconds < 60) {
      return `${seconds}s ago`;
    } else if (minutes < 60) {
      return `${minutes}m ago`;
    } else if (hours < 24) {
      return `${hours}h ago`;
    } else if (days < 7) {
      return `${days}d ago`;
    } else if (weeks < 4) {
      return `${weeks}w ago`;
    } else if (months < 12) {
      return `${months}m ago`;
    } else {
      return `${years}y ago`;
    }
  };

</script>

<div class="skreech-item">
    <div class="skreech-avatar">
        <img src={skreech?.user?.avatar || 'https://via.placeholder.com/100/100'} alt="">
    </div>
    <div class="skreech-main">
        <div class="skreech-header">
            <span>{skreech?.user?.name || 'Anonymous' }</span><span>{skreech?.user?.handle || '@anonymous'}</span><span>{timeSincePost(skreech?.createdAt) || '0hr' }</span>
        </div>
        <div class="skreech-content">
            <p>{skreech?.content || 'No Content' }</p>
        </div>
        <div class="skreech-footer">
            <div class="skreech-footer-item">
                <button on:click={() => handleReply()}><img class:noValues={skreech?.replies <= 0} class:hasReplies={skreech?.replies > 0} src="/20/chat_bubble_FILL0_wght400_GRAD0_opsz20.svg" alt="" ></button><span>{skreech?.replies || 0 }</span>
            </div>
            <div class="skreech-footer-item">
                <button on:click={() => handleReskreech()}><img class:noValues={skreech?.reSkreeches <= 0} class:hasReskreeches={skreech?.reSkreeches > 0} src="/20/cycle_FILL0_wght400_GRAD0_opsz20.svg" alt="" ></button><span>{skreech?.reSkreeches || 0 }</span>
            </div>
            <div class="skreech-footer-item">
                <button on:click={() => handleLike()}><img class:noValues={skreech?.likes <= 0} class:hasLikes={skreech?.likes > 0} src="/20/favorite_FILL0_wght400_GRAD0_opsz20.svg" alt="" ></button><span>{skreech?.likes || 0 }</span>
            </div>
        </div>
    </div>
</div>
<Modal on:close={handleHandleShowModal} show={showModal}>
    <span slot="head">
        <h2>Add A Skreech</h2>
    </span>
    <span slot="body">
        <SkreechForm />
    </span>
</Modal>
<style>
    .skreech-item {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 1rem;
        border-top: 1px solid rgba(129, 205, 198, .2);
        border-bottom: 1px solid rgba(129, 205, 198, .2);
    }

    .skreech-item:hover {
        background-color: rgba(129, 205, 198, .1);
    }

    .skreech-avatar {
        width: 100px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .skreech-avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .skreech-main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0 1rem;
        height: 10%;
    }

    .skreech-header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: rgba(129, 205, 198, .4);
        padding: 0 0 .5rem 0;
        gap: 1rem;
    }

    .skreech-header span {
        font-size: 1.2rem;
    }

    .skreech-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        padding: .5rem 0;
        height: 10%;
        color: #fff;
        line-height: 25px;
        font-size: 1.1rem;
        letter-spacing: 1px;
    }

    .skreech-content p {
        display: block; 
        max-width: 30vw; 
        word-wrap:break-word !important;
    }

    .skreech-footer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 1rem 0 0 0;
        height: 10%;
        gap: 2rem;
    }

    .skreech-footer-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: .5rem;
        color:rgba(129, 205, 198, .2)       
    }

    .noValues {
        filter: invert(98%) sepia(8%) saturate(2040%) hue-rotate(119deg) brightness(86%) contrast(50%);
    }

    .noValues:hover {
        filter: invert(94%) sepia(80%) saturate(388%) hue-rotate(93deg) brightness(84%) contrast(90%);
    }

    .hasReplies {
        filter: invert(12%) sepia(65%) saturate(3349%) hue-rotate(227deg) brightness(91%) contrast(97%);
    }
    
    .hasReplies:hover {
        filter: invert(94%) sepia(80%) saturate(388%) hue-rotate(93deg) brightness(84%) contrast(90%);
    }

    .hasReskreeches {
        filter: invert(35%) sepia(91%) saturate(410%) hue-rotate(122deg) brightness(90%) contrast(96%);
    }

    .hasReskreeches:hover {
        filter: invert(94%) sepia(80%) saturate(388%) hue-rotate(93deg) brightness(84%) contrast(90%);
    }

    .hasLikes {
        filter: invert(7%) sepia(99%) saturate(6881%) hue-rotate(28deg) brightness(100%) contrast(100%);
    }

    .hasLikes:hover {
        filter: invert(7%) sepia(99%) saturate(6881%) hue-rotate(28deg) brightness(100%) contrast(100%);
    }

    button {
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        color: rgba(129, 205, 198, .4);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    button:hover {
        background: rgba(129, 205, 198, .2);
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
</style>
