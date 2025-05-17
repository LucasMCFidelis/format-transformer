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

  try {
    const response = await axios.post('http://localhost:3000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      responseType: 'blob'
    });

    const blob = new Blob([response.data]);
    const url = window.URL.createObjectURL(blob);

    downloadLink.href = url;
    downloadLink.download = 'arquivo-processado.pdf';
    downloadSection.classList.remove('hidden');

  } catch (error) {
    alert('Erro ao enviar o arquivo.');
    console.error(error);
  }
});
