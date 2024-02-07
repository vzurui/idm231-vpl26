const button = document.getElementById("submit-button");
// 1. get our button, add listener, click, IT will call the select button function by itself
button.addEventListener("click", select_button);
// DO NOT for event listeners call the function early. If you do,
// it will do it's thing and walk away.
// You want the click ACTION to CALL the function
// DON'T DO THIS: button.addEventListener('click', select_button())

/*
This is an example of an anonymous function which is
THE SAME as select_button

button.addEventListener('click', () => {
    const month = get_month()
    const ampharos_button_copy = get_ampharos_button().cloneNode(true)
    // const ampharos_button_copy = document.querySelector('.ampharos').cloneNode(true)
    const mew_button_copy = document.querySelector('.mew').cloneNode(true)
    const display_pokemon_container = document.querySelector(".display-pokemon")
    const firstChild = display_pokemon_container.firstChild

    function get_month() {
        const month = document.getElementById('birthday-options').value
        return month
    }
    // remove the first child of display pokemon container
    if (firstChild) {
        display_pokemon_container.removeChild(firstChild)
    }

    if (month == 'January') {
        display_pokemon_container.appendChild(ampharos_button_copy)
    }

    function get_month() {
        const month = document.getElementById('birthday-options').value
        return month
    }

    function get_ampharos_button() {
        const ampharos_button = document.querySelector('.ampharos')
        return ampharos_button
    }
})
*/

// 2. when it is called, it will console log get_select_field_value
function select_button() {
  const month = get_month();
  const ampharos_button_copy = get_ampharos_button().cloneNode(true);
  const arbok_button_copy = document.querySelector(".arbok").cloneNode(true);
  const articunos_button_copy = document
    .querySelector(".articunos")
    .cloneNode(true);
  const dragonair_button_copy = document
    .querySelector(".dragonair")
    .cloneNode(true);
  // const ampharos_button_copy = document.querySelector('.ampharos').cloneNode(true)
  //   const mew_button_copy = document.querySelector(".mew").cloneNode(true);
  const display_pokemon_container = document.querySelector(".display-pokemon");
  const firstChild = display_pokemon_container.firstChild;

  // remove the first child of display pokemon container
  if (firstChild) {
    display_pokemon_container.removeChild(firstChild);
  }

  if (month == "January") {
    display_pokemon_container.appendChild(ampharos_button_copy);
  } else if (month == "February") {
    display_pokemon_container.appendChild(arbok_button_copy);
  } else if (month == "March") {
    display_pokemon_container.appendChild(articunos_button_copy);
  } else if (month == "April") {
    append_pokemon_button(dragonair_button_copy);
  }

  function append_pokemon_button(button) {
    return display_pokemon_container.appendChild(button);
  }
}

function get_month() {
  const month = document.getElementById("birthday-options").value;
  return month;
}

function get_ampharos_button() {
  const ampharos_button = document.querySelector(".ampharos");
  return ampharos_button;
}
