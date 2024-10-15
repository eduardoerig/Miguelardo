// Alterna entre as telas de Login e Cadastro
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
}

// Função para registrar o usuário
function register(event) {
    event.preventDefault(); // Evita o reload da página

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    // Verifica se as senhas correspondem
    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    // Salva os dados do usuário no localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert("Cadastro realizado com sucesso!");

    // Alterna para o formulário de login
    toggleForms();
}

// Função para logar o usuário
function login(event) {
    event.preventDefault(); // Evita o reload da página

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Busca os dados do localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Verifica as credenciais
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        alert("Login realizado com sucesso!");
        // Redireciona para outra página (pode ser qualquer página, aqui simulo uma nova página)
        window.location.href = "pagina_principal.html";
    } else {
        alert("Email ou senha incorretos!");
    }
}
