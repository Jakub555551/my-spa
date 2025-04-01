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
     <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/crowd-551553_1280.jpg" loading="lazy" />
<img src="https://cdn.pixabay.com/photo/2016/11/29/05/08/architecture-1868667_1280.jpg" loading="lazy" />
<img src="https://cdn.pixabay.com/photo/2016/11/22/07/09/dandelion-1845162_1280.jpg" loading="lazy" />
<img src="https://cdn.pixabay.com/photo/2016/11/29/09/32/adult-1868750_1280.jpg" loading="lazy" />
<img src="https://cdn.pixabay.com/photo/2016/11/29/02/02/mountains-1867303_1280.jpg" loading="lazy" />
<img src="https://cdn.pixabay.com/photo/2017/02/14/03/03/flowers-2068371_1280.jpg" loading="lazy" />

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
