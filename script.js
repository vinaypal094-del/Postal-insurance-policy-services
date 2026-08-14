const WHATSAPP_NUMBER = "916263323352";

function calculate() {
  const monthly = Number(document.getElementById("monthly").value);
  const years = Number(document.getElementById("years").value);
  const result = document.getElementById("result");

  if (!monthly || !years) {
    result.textContent = "कृपया मासिक जमा और अवधि भरें।";
    return;
  }

  const total = monthly * 12 * years;
  result.textContent =
    `कुल जमा राशि: ₹${total.toLocaleString("en-IN")}`;
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const location = document.getElementById("location").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text =
    `नया ग्राहक अनुरोध\n\n` +
    `नाम: ${name}\n` +
    `मोबाइल: ${phone}\n` +
    `गाँव/शहर: ${location}\n` +
    `सेवा: ${service}\n` +
    `संदेश: ${message}`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
});
