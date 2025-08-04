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
  { sender: "yo", message: "no me mires así" },
  { sender: "tú", message: "cómo?" },
  { sender: "yo", message: "así" },
  { sender: "tú", message: "no sé cómo te estoy mirando" },
  { sender: "yo", message: "con pesar" },
  { sender: "tú", message: "no sé cómo más mirarte" },
  { sender: "yo", message: "no me mires entonces" },
  { sender: "tú", message: "pero quiero mirarte" },
  { sender: "yo", message: "pero no así" },
  { sender: "tú", message: "así cómo?" },
  { sender: "yo", message: "así como haces todo" },
  { sender: "tú", message: "cómo?" },
  { sender: "yo", message: "como si me estuviera despidiendo todo el tiempo" },
  { sender: "tú", message: "así hago todo?" },
  { sender: "yo", message: "todo" },
  { sender: "tú", message: "no entiendo" },
  {
    sender: "yo",
    message:
      "así me abrazas así me hablas así me agarras la mano así me das besos así me miras",
  },
  { sender: "tú", message: "no sabía" },
  {
    sender: "yo",
    message:
      "así me escribes así me escuchas así me tocas así me das la espalda",
  },
  { sender: "tú", message: "perdón" },
  { sender: "yo", message: "entonces no me mires así" },
  { sender: "tú", message: "como si te estuvieras despidiendo?" },
  { sender: "yo", message: "como si me estuviera despidiendo" },
  { sender: "tú", message: "bueno, perdón" },
  { sender: "yo", message: "no me estoy despidiendo" },
  { sender: "tú", message: "no?" },
  { sender: "yo", message: "no" },
  { sender: "tú", message: "bueno" },
  { sender: "yo", message: "bueno qué?" },
  { sender: "tú", message: "que a veces parece que sí" },
  { sender: "yo", message: "que sí qué?" },
  { sender: "tú", message: "que te estás despidiendo" },
  { sender: "yo", message: "cuándo?" },
  { sender: "tú", message: "todo el tiempo" },
  { sender: "yo", message: "todo el tiempo?" },
  { sender: "tú", message: "todo" },
  { sender: "yo", message: "cuando te miro?" },
  { sender: "tú", message: "sí" },
  { sender: "yo", message: "cuando me río?" },
  { sender: "tú", message: "sí" },
  { sender: "yo", message: "todo el tiempo?" },
  { sender: "tú", message: "sí" },
  { sender: "yo", message: "entonces no es a veces" },
  { sender: "tú", message: "qué?" },
  {
    sender: "yo",
    message: "dijiste que a veces parece que me estuviera despidiendo",
  },
  { sender: "tú", message: "sí" },
  { sender: "yo", message: "pero no es a veces, es todo el tiempo" },
  { sender: "tú", message: "bueno, sí, todo el tiempo" },
  { sender: "yo", message: "cuando te hablo?" },
  { sender: "tú", message: "sí" },
  { sender: "yo", message: "cuando me hablas?" },
  { sender: "tú", message: "sí" },
  { sender: "yo", message: "todo el tiempo?" },
  { sender: "tú", message: "sí" },
  { sender: "yo", message: "por qué?" },
  { sender: "tú", message: "no sé" },
  { sender: "yo", message: "dime" },
  { sender: "tú", message: "no sé, de verdad" },
  { sender: "yo", message: "no me estoy despidiendo" },
  { sender: "tú", message: "no quiero que te despidas" },
  { sender: "yo", message: "yo tampoco quiero despedirme" },
  { sender: "tú", message: "yo sé" },
  { sender: "yo", message: "de verdad?" },
  { sender: "tú", message: "de verdad" },
  { sender: "yo", message: "entonces no me digas chao todavía" },
];

let scriptIndex = 1;

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (scriptIndex < script.length) {
    const nextMessage = script[scriptIndex];
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", nextMessage.sender);
    messageDiv.innerText = `${nextMessage.sender}: ${nextMessage.message}`;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
    scriptIndex++;

    if (nextMessage.sender === "tú") {
      // Simulate bot response after a short delay
      setTimeout(function () {
        const botMessage = script[scriptIndex];
        const botMessageDiv = document.createElement("div");
        botMessageDiv.classList.add("message", botMessage.sender);
        botMessageDiv.innerText = `${botMessage.sender}: ${botMessage.message}`;
        chatbox.appendChild(botMessageDiv);
        chatbox.scrollTop = chatbox.scrollHeight;
        scriptIndex++;
      }, 3000); // Adjust delay as needed
    }
  } else {
    alert("chao");
    window.close();
  }
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

 let timeout;

    function reiniciarTemporizador() {
      // Limpiar el temporizador anterior
      clearTimeout(timeout);
      // Establecer un nuevo temporizador para 10 minutos (600000 milisegundos)
      timeout = setTimeout(() => {
        location.reload(); // Refrescar la página
      }, 600000); // 10 minutos
    }

    function iniciarDetecciónInactividad() {
      // Eventos que indican actividad del usuario
      const eventos = ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'];

      eventos.forEach(evento => {
        document.addEventListener(evento, reiniciarTemporizador);
      });

      // Iniciar el temporizador por primera vez
      reiniciarTemporizador();
    }

    // Iniciar cuando se carga la página
    window.onload = iniciarDetecciónInactividad;
