let plantCount = 0;

function addPlant() {
    // Show the modal
    const addPlantModal = new bootstrap.Modal(document.getElementById('addPlantModal'));
    addPlantModal.show();
}

function savePlant() {
    const plantList = document.getElementById('plant-list');
    const plantNameInput = document.getElementById('plantName');
    const plantName = plantNameInput.value.trim();

    if (plantName) {
        // Create list item for the plant
        const plantItem = document.createElement('li');
        plantItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        plantItem.textContent = plantName;

        // Create the remove button with the trash icon
        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-sm';
        removeButton.style.border = 'none';
        removeButton.style.background = 'transparent';
        removeButton.onclick = function() {
            plantList.removeChild(plantItem);
        };

        // Add trash icon to the remove button
        const trashIcon = document.createElement('img');
        trashIcon.src = 'styles/images/trash.png';
        trashIcon.alt = 'Remove Plant';
        trashIcon.style.height = '20px';

        removeButton.appendChild(trashIcon);
        plantItem.appendChild(removeButton);
        plantList.appendChild(plantItem);

        // Clear the input field and close the modal
        plantNameInput.value = '';
        const addPlantModal = bootstrap.Modal.getInstance(document.getElementById('addPlantModal'));
        addPlantModal.hide();
    } else {
        alert("Please enter a plant name.");
    }
}
