function renderAboutPage() {
  document.getElementById('app').innerHTML = `
    <h1 class="title">About Me</h1>
    <p>To jest podstrona "O mnie".</p>
  `;
}

function renderContactPage() {
  document.getElementById('app').innerHTML = `
    <h1 class="title">Contact with me</h1>
    <form id="contact-form">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Send</button>
    </form>
  `;

  document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form submitted!');
  });
}

function renderGalleryPage() {
  document.getElementById('app').innerHTML = `
    <h1>Gallery</h1>
    <div class="gallery">
      <img src="https://picsum.photos/id/237/300/200" loading="lazy" />
      <img src="https://picsum.photos/id/238/300/200" loading="lazy" />
      <img src="https://picsum.photos/id/239/300/200" loading="lazy" />
    </div>
  `;

  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <img src="${img.src}" />
        <span style="position:fixed;top:10px;right:20px;font-size:30px;color:white;cursor:pointer" id="close-modal">&times;</span>
      `;
      document.body.appendChild(modal);
      document.getElementById('close-modal').onclick = () => modal.remove();
    });
  });
}



document.getElementById('about-link').addEventListener('click', renderAboutPage);
document.getElementById('contact-link').addEventListener('click', renderContactPage);
document.getElementById('gallery-link').addEventListener('click', renderGalleryPage);

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
