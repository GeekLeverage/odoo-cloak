addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    let response = await fetch(request)
    let text = await response.text()

    // Insert JavaScript to remove the element
    const scriptToRemoveElement = `<script>
        document.addEventListener('DOMContentLoaded', function() {
            var elem = document.querySelector('.database_expiration_panel');
            if (elem) {
                elem.remove();
            }
        });
    </script>`

    // Modify the response to include the JavaScript
    text = text.replace('</head>', `${scriptToRemoveElement}</head>`)
    return new Response(text, response)
}
