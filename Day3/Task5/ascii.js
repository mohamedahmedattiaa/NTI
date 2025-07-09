document.addEventListener("keydown", function(event) {
      const asciiCode = event.keyCode;
      const key = event.key;

      let pressed = [];

      if (event.altKey)   pressed.push("Alt");
      if (event.ctrlKey)  pressed.push("Ctrl");
      if (event.shiftKey) pressed.push("Shift");

      let message = `Key pressed: ${key}\nASCII Code: ${asciiCode}`;

      if (pressed.length > 0) {
        message += `\nModifier key(s): ${pressed.join(" + ")}`;
      } else {
        message += `\nNo modifier keys pressed.`;
      }

      alert(message);
    });




