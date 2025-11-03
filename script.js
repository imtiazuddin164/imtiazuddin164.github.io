document.addEventListener("DOMContentLoaded", () => {
  // সব "see-more" বোতাম ধরো
  const seeMoreButtons = document.querySelectorAll(".see-more");

  seeMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
      // ক্লিক করা বাটনের parent card খুঁজে বের করো
      const card = button.closest(".project-card");
      const shortText = card.querySelector(".short-text");
      const fullText = card.querySelector(".full-text");

      // toggle কাজ
      if (fullText.style.display === "none" || fullText.style.display === "") {
        fullText.style.display = "inline";
        shortText.style.display = "none";
        button.textContent = "See Less";
      } else {
        fullText.style.display = "none";
        shortText.style.display = "inline";
        button.textContent = "See More";
      }
    });
  });
});
