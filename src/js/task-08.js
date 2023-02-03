const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(
      "HEY Man! Are You LAZY? Please Fill in All the Fields! Quickly! "
    );
  }
  const formData = {
    Email: email.value,
    Password: password.value,
  };
  console.log(formData);
  event.currentTarget.reset();

  //   const formData = new FormData(event.currentTarget);
  //   console.log(formData);

  //   formData.forEach((value, name) => {
  //     console.log("name:", name);
  //     console.log("value:", value);
  //   });

  //   console.log(`Email: ${email.value}; Password: ${password.value}`);
}
