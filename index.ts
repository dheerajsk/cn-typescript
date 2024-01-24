function submitForm(): void {
  const usernameInput = document.getElementById("username") as HTMLInputElement;
  if (usernameInput) {
    const username = usernameInput.value;
    alert("Username is " + username);
  } else {
    alert("No username");
  }
}
