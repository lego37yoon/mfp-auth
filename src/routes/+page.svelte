<svelte:head>
    <title>인증하기 | 메아리 for 포트폴리오</title>
</svelte:head>

<main>
    <h1>종합 인증 페이지</h1>
    <p>메아리 for 포트폴리오 사용 중 연동이 필요한 서비스 시용 시 이 페이지를 이용하세요.</p>
    <p>※ 본 웹 사이트는 정보를 수집하지 않으며 전달된 정보를 그대로 전달합니다.</p>
    <section id="button-section">
        <a href="./tistory"><button>티스토리 →</button></a>
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

    #button-section {
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

