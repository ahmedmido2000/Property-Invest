let changeImgs = document.getElementById("img");
const inptChange = document.getElementById("upload");
inptChange.addEventListener("change", () => {
  changeImgs.src = URL.createObjectURL(inptChange.files[0]);
});

function editField(icon) {
  const parentDiv = icon.closest('.d-flex');
  const paragraph = parentDiv.querySelector('p');
  const input = parentDiv.querySelector('input');

  input.value = paragraph.innerText;
  paragraph.classList.add('d-none');
  input.classList.remove('d-none');
  input.focus()
  // Show the save button when editing
  showGreenSave()
}

function saveChanges() {

  let updatedName = '';
  let updatedDob = '';

  document.querySelectorAll('.edit-main-div').forEach((div) => {
      const paragraph = div.querySelector('p');
      const input = div.querySelector('input');
      const heading = div.querySelector('h6');

      if (!input.classList.contains('d-none')) {
          paragraph.innerText = input.value;
          input.classList.add('d-none');
          paragraph.classList.remove('d-none');
      }
      if (heading.innerText === 'Name') {
        updatedName = input.value;
    }

    if (heading.innerText === 'Date of birth') {
        updatedDob = input.value;
    }
  });

  if (updatedName) {
    document.getElementById('profile-name').innerText = updatedName;
}

if (updatedDob) {
    document.getElementById('profile-dob').innerText = updatedDob;
}

  // Hide the save button after saving
  document.querySelector('.second-save-btn').classList.add('d-none');
  document.querySelector('.first-save-btn').classList.remove('d-none');
}

function showGreenSave(){
  document.querySelector('.second-save-btn').classList.remove('d-none');
  document.querySelector('.first-save-btn').classList.add('d-none');
}

