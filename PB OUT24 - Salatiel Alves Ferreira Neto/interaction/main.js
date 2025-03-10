document.addEventListener("DOMContentLoaded", function () {
    const scripts = [
        "interaction/script/rolagem.js",
        "interaction/script/inscricao.js",
        "interaction/script/hamburguer.js",
        "interaction/script/carrousel.js",
        "interaction/script/email.js",
        "interaction/script/produtos.js"
    ];

    scripts.forEach(script => {
        const scriptTag = document.createElement("script");
        scriptTag.src = script;
        document.body.appendChild(scriptTag);
    });
});