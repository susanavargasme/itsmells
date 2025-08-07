const chatbox = document.getElementById("chatbox");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const draggableContainer = document.getElementById("draggable-container");
const draggableImage1 = document.getElementById("draggable-image1");
const draggableImage2 = document.getElementById("draggable-image2");
const draggableImage3 = document.getElementById("draggable-image3");
const draggableImage4 = document.getElementById("draggable-image4");
const draggableImage5 = document.getElementById("draggable-image5");
const draggableImage6 = document.getElementById("draggable-image6");


const script = [
  { sender: "mom", message: "What were you saying?" },
  { sender: "me", message: "It smells." },
  { sender: "mom", message: "What do you mean?" },
  { sender: "me", message: "It smells like wet soil. That smell we always knew,  when we were growing up, building, making, playing with sand. It’s the kind of smell that settles deep in the chest." },
  { sender: "me", message: "It smells." },
  { sender: "me", message: "The light here is soft, almost reverent. It doesn’t illuminate so much as it listens. Small figures, black, rounded, sit quietly in the space. It’s the light that shapes them." },
  { sender: "mom", message: "Or maybe it’s the other way around?" },
  { sender: "me", message: "I feel heard by the earth." },
  { sender: "mom", message: "It smells?" },
  { sender: "me", message: "Everything here is in conversation: earth and sky, shadow and glow, presence and memory. It is a play between light and soil. Between the visible and the felt. " },
  { sender: "mom", message: "I feel the earth has something to tell." },
  { sender: "me", message: "This is Cielo Terrenal (Earthly Heaven) by Delcy Morelos. But it feels like a place we’ve already known. A space we entered through the soles of our feet." },
  { sender: "me", message: "A reminder that the sacred can be grounded." },
  { sender: "mom", message: "That we carry the earth inside us." },
  { sender: "me", message: "I wish you could stand in this room with me." },
];

let scriptIndex = 1;

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();

  function showNextMessage() {
    if (scriptIndex >= script.length) {
      alert("I think it would speak to you, too.");
      window.close();
      return;
    }

    const currentMessage = script[scriptIndex];
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", currentMessage.sender);
    messageDiv.innerText = `${currentMessage.sender}: ${currentMessage.message}`;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
    scriptIndex++;

    // Si el próximo también es de "me", esperamos y lo mostramos
    if (
      scriptIndex < script.length &&
      currentMessage.sender === "me" &&
      script[scriptIndex].sender === "me"
    ) {
      setTimeout(showNextMessage, 3000); // 3 segundos de pausa entre fragmentos
    }

    // Si el mensaje actual es "me" y el siguiente es "mom", esperamos respuesta
    else if (
      currentMessage.sender === "me" &&
      scriptIndex < script.length &&
      script[scriptIndex].sender === "mom"
    ) {
      setTimeout(showNextMessage, 3000); // 3 segundos para respuesta de mom
    }
  }

  showNextMessage();
  chatInput.value = "";
});



draggableContainer.addEventListener("mousedown", function (e) {
  let rect = draggableContainer.getBoundingClientRect();
  let shiftX = e.clientX - rect.left - rect.width / 2;
  let shiftY = e.clientY - rect.top - rect.height / 2;

  function moveAt(pageX, pageY) {
    draggableContainer.style.left = pageX - shiftX + "px";
    draggableContainer.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  document.addEventListener(
    "mouseup",
    function () {
      document.removeEventListener("mousemove", onMouseMove);
    },
    { once: true }
  );
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", onMouseMove);
});

draggableContainer.ondragstart = function () {
  return false;
};

draggableImage1.addEventListener("mousedown", function (e) {
  let shiftX = e.clientX - draggableImage1.getBoundingClientRect().left;
  let shiftY = e.clientY - draggableImage1.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    draggableImage1.style.left = pageX - shiftX + "px";
    draggableImage1.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  document.addEventListener(
    "mouseup",
    function () { // Modificación en esta línea
      document.removeEventListener("mousemove", onMouseMove);
    },
    { once: true }
  );
});

draggableImage1.ondragstart = function () {
  return false;
};


draggableImage2.addEventListener("mousedown", function (e) {
  let shiftX = e.clientX - draggableImage2.getBoundingClientRect().left;
  let shiftY = e.clientY - draggableImage2.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    draggableImage2.style.left = pageX - shiftX + "px";
    draggableImage2.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  draggableImage2.addEventListener(
    "mouseup",
    function () {
      document.removeEventListener("mousemove", onMouseMove);
    },
    { once: true }
  );
});

draggableImage2.ondragstart = function () {
  return false;
};

draggableImage3.addEventListener("mousedown", function (e) {
  let shiftX = e.clientX - draggableImage3.getBoundingClientRect().left;
  let shiftY = e.clientY - draggableImage3.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    draggableImage3.style.left = pageX - shiftX + "px";
    draggableImage3.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  draggableImage3.addEventListener(
    "mouseup",
    function () {
      document.removeEventListener("mousemove", onMouseMove);
    },
    { once: true }
  );
});

draggableImage3.ondragstart = function () {
  return false;
};

draggableImage4.addEventListener("mousedown", function (e) {
  let shiftX = e.clientX - draggableImage4.getBoundingClientRect().left;
  let shiftY = e.clientY - draggableImage4.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    draggableImage4.style.left = pageX - shiftX + "px";
    draggableImage4.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  draggableImage4.addEventListener(
    "mouseup",
    function () {
      document.removeEventListener("mousemove", onMouseMove);
    },
    { once: true }
  );
});

draggableImage4.ondragstart = function () {
  return false;
};

draggableImage5.addEventListener("mousedown", function (e) {
  let shiftX = e.clientX - draggableImage5.getBoundingClientRect().left;
  let shiftY = e.clientY - draggableImage5.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    draggableImage5.style.left = pageX - shiftX + "px";
    draggableImage5.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  draggableImage5.addEventListener(
    "mouseup",
    function () {
      document.removeEventListener("mousemove", onMouseMove);
    },
    { once: true }
  );
});

draggableImage5.ondragstart = function () {
  return false;
};

draggableImage6.addEventListener("mousedown", function (e) {
  let shiftX = e.clientX - draggableImage6.getBoundingClientRect().left;
  let shiftY = e.clientY - draggableImage6.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    draggableImage6.style.left = pageX - shiftX + "px";
    draggableImage6.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  draggableImage6.addEventListener(
    "mouseup",
    function () {
      document.removeEventListener("mousemove", onMouseMove);
    },
    { once: true }
  );
});

draggableImage6.ondragstart = function () {
  return false;
};

 let timeout;

    
