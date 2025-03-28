addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    let response = await fetch(request)
    let text = await response.text()

    // Insert JavaScript to remove the element
    const scriptToRemoveElement = `
    <script>
        var elem = document.querySelector('.database_expiration_panel');
        if (elem) {
            elem.remove();
        }
    </script>
    `

    // Modify the response to include the JavaScript just before </body>
    text = text.replace('</body>', `${scriptToRemoveElement}</body>`)
    return new Response(text, response)
}

