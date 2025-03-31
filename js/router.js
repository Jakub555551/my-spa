document.getElementById('about-link').addEventListener('click', () => {
    document.getElementById('app').innerHTML = `
      <h1>About Me</h1>
      <p>To jest podstrona "O mnie".</p>
    `;
  });
  
  document.getElementById('contact-link').addEventListener('click', () => {
    document.getElementById('app').innerHTML = `
      <h1>Contact</h1>
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
  });
  
  document.getElementById('gallery-link').addEventListener('click', () => {
    document.getElementById('app').innerHTML = `
      <h1>Gallery</h1>
      <div class="gallery">
        <img src="https://via.placeholder.com/150" loading="lazy" />
        <img src="https://via.placeholder.com/150" loading="lazy" />
        <img src="https://via.placeholder.com/150" loading="lazy" />
      </div>
    `;
  });
  
  // Dark Mode
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  