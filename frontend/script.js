const form = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const downloadSection = document.getElementById('downloadSection');
const downloadLink = document.getElementById('downloadLink');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const file = fileInput.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('file', file);

  console.log(file)
});
