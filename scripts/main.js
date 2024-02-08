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
/*
function select_button() {
  const month = get_month();
  const mr_frond_button_copy = document
    .querySelector(".mr-frond")
    .cloneNode(true);
  const tammy_button_copy = document.querySelector(".tammy").cloneNode(true);
  const teddy_button_copy = document.querySelector(".teddy").cloneNode(true);
  const louise_button_copy = document.querySelector(".louise").cloneNode(true);
  // const ampharos_button_copy = document.querySelector('.ampharos').cloneNode(true)
  //   const mew_button_copy = document.querySelector(".mew").cloneNode(true);
  const display_bb_container = document.querySelector(".display-bb");
  const firstChild = display_bb_container.firstChild;

  // remove the first child of display pokemon container
  if (firstChild) {
    display_bb_container.removeChild(firstChild);
  }

  if (month == "January") {
    display_bb_container.appendChild(mr_frond_button_copy);
  } else if (month == "February") {
    display_bb_container.appendChild(tammy_button_copy);
  } else if (month == "March") {
    display_bb_container.appendChild(teddy_button_copy);
  } else if (month == "April") {
    append_bb_button(louise_button_copy);
  }

  function append_bb_button(button) {
    return display_bb_container.appendChild(button);
  }
}

function get_month() {
  const month = document.getElementById("birthday-options").value;
  return month;
}

 function get_ampharos_button() {
  const ampharos_button = document.querySelector(".ampharos");
  return ampharos_button;
}*/

// function select_button() {
//   const birthday 
//   const birthday_month
//   const birthday_day
// }

// const first_zodiac = {
//   name: 'Mr. Frond',
//   Image: 'mr_frond.jpg'
// }

// function first_zodiac() {

// }

function 

if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
  astrological_sign = 'Capricorn'
} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
  astrological_sign = 'Sagittarius'
} else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
  astrological_sign = 'Scorpio'
} else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
  astrological_sign = 'Libra'
} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
  astrological_sign = 'Virgo'
} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
  astrological_sign = 'Leo'
} else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
  astrological_sign = 'Cancer'
} else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
  astrological_sign = 'Gemini'
} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
  astrological_sign = 'Taurus'
} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
  astrological_sign = 'Aries'
} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
  astrological_sign = 'Pisces'
} else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
  astrological_sign = 'Aquarius'
}

