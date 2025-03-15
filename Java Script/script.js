document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    function redirectToIndex2(event) {
        event.preventDefault(); 
        window.location.href = 'index2.html'; 
    }
    loginForm.addEventListener('submit', redirectToIndex2);
});