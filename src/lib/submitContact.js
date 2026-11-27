export async function submitContact(formData) {
  formData.set("access_key", "341b1c15-a810-4253-bb25-62c834cc1a6d");
  formData.set("subject", "New Contact Form Submission - Jawla Advance Technology");
  formData.set("from_name", "Jawla Advance Technology Website");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  return response.json();
}
