document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); 
    } else {
      entry.target.classList.remove('show'); 
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const messageTextarea = document.getElementById("message");
  const wordCountDisplay = document.getElementById("wordCount");
  const maxWords = 500;

  messageTextarea.addEventListener("input", function () {
    const message = this.value;
    const wordCount = countWords(message);

    wordCountDisplay.textContent = `${wordCount} word${wordCount !== 1 ? 's' : ''}`;

    if (wordCount > maxWords) {
      messageTextarea.value = truncateMessage(message, maxWords);
    }
  });

  function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.length;
  }

  function truncateMessage(text, maxWords) {
    const words = text.trim().split(/\s+/);
    return words.slice(0, maxWords).join(' ');
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = messageTextarea.value;

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (countWords(message) > maxWords) {
      alert(`Message exceeds the maximum word limit of ${maxWords} words.`);
      return;
    }

    this.submit();
  });

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
