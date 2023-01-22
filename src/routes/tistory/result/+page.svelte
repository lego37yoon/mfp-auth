<script>
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<svelte:head>
    <title>티스토리 인증 정보 확인 | 메아리 for 포트폴리오</title>
</svelte:head>

<main>
    <h1><span class="tistory">TISTORY</span> 인증 정보 확인</h1>
    <p>다음 정보를 <code>.env</code> 파일 혹은 이용 중인 서비스의 환경 변수 입력 란에 기입해주세요.</p>
    <ul>
        <li><code>VITE_TISTORY_ACCESS_TOKEN</code>: {form.token}</li>
        <li><code>VITE_TISTORY_BLOG_HANDLE</code>: {form.handle}</li>
    </ul>
    <p>이용해주셔서 감사합니다.</p>
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

    li {
        list-style-type: none;
        margin: 0.5em;
    }

    code {
        background: #cacaca;
        border-radius: 5px;
        padding-right: 3px;
        padding-left: 3px;
        color: #414141;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 200;
    }

    main {
        text-align: center;
        word-break: keep-all;
        padding: 0.5em;
    }
</style>

