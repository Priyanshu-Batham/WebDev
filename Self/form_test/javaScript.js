const form = document.getElementById("form1");

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
  };

  const response = await fetch('https://priyanshubatham1.pythonanywhere.com/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();
  console.log(result);
  const success = document.getElementById("success");
  success.innerHTML = `Thank You ${form.name.value} for your time :)`;
});


