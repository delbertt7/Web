const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  });
});

document.querySelector('#current-year').textContent = new Date().getFullYear();

const inquiryDialog = document.querySelector('#inquiry-dialog');
const inquiryForm = document.querySelector('#inquiry-form');

document.querySelector('#inquiry-open').addEventListener('click', () => {
  inquiryDialog.showModal();
});

document.querySelector('.inquiry-close').addEventListener('click', () => {
  inquiryDialog.close();
});

inquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const fields = new FormData(inquiryForm);
  const subject = `Website inquiry from ${fields.get('name')}`;
  const body = [
    `Name: ${fields.get('name')}`,
    `Email: ${fields.get('email')}`,
    `Company: ${fields.get('company') || 'Not provided'}`,
    `Interested in: ${fields.get('service')}`,
    '',
    fields.get('message'),
  ].join('\n');

  window.location.href = `mailto:delbertt7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
