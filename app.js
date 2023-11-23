// перезагрузка картинок при нажатии на кнопку
function reloadImage() {
    const images = document.querySelectorAll("img");
    images.forEach((image) => {
      image.src = "https://picsum.photos/300/200?random=" + Math.random();
    });
  }
  const button = document.querySelector("button:ntf-child(1)");
  button.onclick = reload;

  function togglePreview(event) {
    event.target.parentNode.classList.toggle("active");
    console.log(event.target.parentNode);
  }
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.onclick = togglePreview;
  });

  // Функция для создания элемента изображения
  function createImage() {
    const image = document.createElement("img");
    image.src = "https://picsum.photos/300/200?random=" + Math.random();
    image.onclick = togglePreview;
    return image;
  }

  // Функция для перезагрузки изображений
  function reloadImages() {
    const imageContainer = document.querySelector(".imageContainer");
    imageContainer.innerHTML = ""; // Очищаем контейнер

    // Создаем четыре новых изображения и добавляем их в контейнер
    for (let i = 0; i < 4; i++) {
      const overlay = document.createElement("div");
      overlay.classList.add("Overlay");
      overlay.appendChild(createImage());
      imageContainer.appendChild(overlay);
    }
    updateRemoveButtonState(); // Обновляем состояние кнопки "remove"
  }

  // Функция для удаления изображения
  function removeImage() {
    const overlays = document.querySelectorAll(".Overlay");
    if (overlays.length > 1) {
      // Проверка, чтобы не удалять последнее изображение
      overlays[overlays.length - 1].remove(); // Удаляем последнее изображение
      updateRemoveButtonState(); // Обновляем состояние кнопки "remove"
    }
  }
  // Функция для обновления состояния кнопки "remove" в зависимости от количества изображений
  function updateRemoveButtonState() {
    const removeButton = document.getElementById("removeImage");
    const overlays = document.querySelectorAll(".Overlay");
    removeButton.disabled = overlays.length <= 1; // Блокируем кнопку, если осталось одно изображениe
  }
  // Функция для добавления изображения
  function addImage() {
    const imageContainer = document.querySelector(".imageContainer");
    const overlay = document.createElement("div");
    overlay.classList.add("Overlay");
    overlay.appendChild(createImage());
    imageContainer.appendChild(overlay);
    updateRemoveButtonState(); // Обновляем состояние кнопки "remove"
  }

  // Вызываем функцию перезагрузки изображений при загрузке страницы
  reloadImages();
