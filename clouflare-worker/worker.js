addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    let response = await fetch(request)
    let text = await response.text()

    // Insert your custom CSS
    const customCSS = `<style>
        .database_expiration_panel {
            display: none;
        }
    </style>`

    // Modify the response to include the CSS
    text = text.replace('</head>', `${customCSS}</head>`)
    return new Response(text, response)
}
