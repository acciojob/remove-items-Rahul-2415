//your JS code here. If required.

const colorSelect = document.getElementById("colorSelect");
const removeButton = document.querySelector('input[type="button"]');


function removeSelectedColor() {
  const selectedIndex = colorSelect.selectedIndex;
  if (selectedIndex >= 0) {
    colorSelect.remove(selectedIndex);
  }
}


removeButton.addEventListener("click", removeSelectedColor);

