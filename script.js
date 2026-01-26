document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert('✅ Messaggio inviato con successo!');
            form.reset();
        } else {
            alert('❌ Si è verificato un errore. Riprova.');
        }
    });
});

