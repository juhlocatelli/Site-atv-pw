const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        const isExternalLink = link.href.includes('https');
        if (isExternalLink) {
            const confirmExit = confirm("Você está saindo do site. Tem certeza?");
            
            if (!confirmExit) {
                event.preventDefault();
            }
        }
    });
});