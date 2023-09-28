const fileInput = document.getElementById('fileInput');
const selectFileInput = document.getElementById('selectFileInput');

const imgPreview = document.getElementById('img-preview');

function sendFiles() {
  // if (fileInput.value = "https://") { 
  //   alert('Insira um URL válido!');
  //   return;
  // }
  var newFile = fileInput.value;
  imgPreview.innerHTML = `
  <img class="img-preview" src="${newFile}" alt="">
  `
  console.log(newFile);
}
