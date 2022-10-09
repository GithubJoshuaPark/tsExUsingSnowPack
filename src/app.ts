console.log('Connected GoodNeighborhood~');

const petContainer   = document.getElementById('petContainer') as HTMLDivElement;
const addPetBtn      = document.getElementById('addPetBtn') as HTMLButtonElement;
const firstRemoveBtn = document.querySelector<HTMLButtonElement>('button.removeBtn');

const createPetFormInput = (): HTMLDivElement => {
  const addPetDiv = document.createElement('div') as HTMLDivElement;
  addPetDiv.classList.add('mb-3');

    const addPetDivContainer = document.createElement('div') as HTMLDivElement;
    addPetDivContainer.classList.add('container');

      const addPetDivRow = document.createElement('div') as HTMLDivElement;
      addPetDivRow.classList.add('row')

        const addPetDivCol8 = document.createElement('div') as HTMLDivElement;
        addPetDivCol8.classList.add('col-8');

          const petNameInput = document.createElement('input') as HTMLInputElement;
          petNameInput.classList.add('form-control');
          petNameInput.setAttribute('type', 'text');
          petNameInput.setAttribute('name', 'petName');
          petNameInput.setAttribute('placeholder', 'Pet Name');
          petNameInput.setAttribute('aria-label', 'Pet Name');

        const addPetDiv4 = document.createElement('div') as HTMLDivElement;
        addPetDiv4.classList.add('col-4');

          const removePetBtn = document.createElement('button') as HTMLButtonElement;
          removePetBtn.classList.add('btn','btn-danger','removeBtn');
          removePetBtn.setAttribute('type', 'button');
          removePetBtn.innerHTML = 'Remove'
          removePetBtn.addEventListener('click', () => {
            console.log('removePetBtn');
            addPetDiv.remove();
          });

  // Appending
  addPetDiv.append(addPetDivContainer);
    addPetDivContainer.append(addPetDivRow);
      addPetDivRow.append(addPetDivCol8);
        addPetDivCol8.append(petNameInput);
      addPetDivRow.append(addPetDiv4);
        addPetDiv4.append(removePetBtn);

  return addPetDiv;
}

addPetBtn.addEventListener('click', () => {
  petContainer.append(createPetFormInput());
})

firstRemoveBtn!.addEventListener('click', () => {
  console.log('firstRemoveBtn');
  firstRemoveBtn?.parentElement?.parentElement?.parentElement?.remove();
})

