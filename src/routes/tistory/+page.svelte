<script>
    const tistory_client = import.meta.env.VITE_TISTORY_APP_KEY;
    const redirect_url = import.meta.env.VITE_TISTORY_REDIRECT_URL;
    const state = import.meta.env.VITE_TISTORY_STATE;
    const auth_link = `https://www.tistory.com/oauth/authorize?client_id=${tistory_client}&redirect_uri=${redirect_url}&response_type=code&state=${state}`

</script>

<svelte:head>
    <title>티스토리 인증하기 | 메아리 for 포트폴리오</title>
</svelte:head>

<main>
    <h1><span class="tistory">TISTORY</span> 인증 페이지</h1>
    <p>메아리 for 포트폴리오 사용 중 소식 란에 티스토리 블로그와 연동을 희망하시는 경우, 아래 버튼을 눌러 연동하실 수 있습니다.</p>
    <p>※ 본 웹 사이트는 정보를 수집하지 않으며 전달된 정보를 그대로 전달합니다.</p>
    <section id="auth-button-section">
        <a href="{auth_link}"><button>인증하기 →</button></a>
    </section>
</main>

<style>
    .tistory {
        color: #ff5544;
    }

    h1, p {
        font-family: 'SUIT Variable', 'Noto Sans CJK KR Light', sans-serif;
        color: rgb(128, 169, 216);
    }

    h1 {
        font-weight: 400;
    }

    p {
        font-weight: 500;
    }

    main {
        text-align: center;
        word-break: keep-all;
        padding: 0.5em;
    }

    #auth-button-section {
        display: flex;
        justify-content: center;
    }

    button {
        background: white;
        color: rgb(128, 169, 216);
        font-family: 'SUIT Variable', 'Noto Sans CJK KR Light', sans-serif;
        font-size: 1em;
        font-weight: 500;
        border: rgb(128, 169, 216) 2px solid;
        border-radius: 5px;

        padding: 0.5em 1em 0.5em 1em;
    }

    section a {
        border-radius: 5px;
    }

    button:hover {
        background:rgb(128, 169, 216);
        color: #535353;
    }

    section a:focus-visible {
        outline: solid 2px #414141;
    }
</style>

