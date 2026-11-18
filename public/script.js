const form = document.querySelector("#login-form");
const message = document.querySelector("#login-message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  message.textContent = "";

  const formData = new FormData(form);
  const credentials = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Não foi possível entrar.");
    }

    message.textContent = "Login realizado com sucesso.";
  } catch (error) {
    message.textContent = error.message;
  }
});
