function select_bday() {
  const birthday = document.getElementById("birthday-pick").value;
  return month;
}

document.querySelector(".mr-frond").getd;

const mr_frond_first_zodiac = {
  name: "Mr. Frond",
  image: "mr_frond.jpg",
};

const tammy_second_zodiac = {
  name: "Tammy",
  image: "tammy.jpg",
};

const teddy_third_zodiac = {
  name: "Teddy",
  image: "teddy.jpg",
};

const louise_fourth_zodiac = {
  name: "Louise",
  image: "louise.jpg",
};

const jimmy_fifth_zodiac = {
  name: "Jimmy Jr",
  image: "jimmy_junior.jpg",
};

const linda_sixth_zodiac = {
  name: "Linda",
  image: "linda.jpg",
};

const bob_seventh_zodiac = {
  name: "Bob",
  image: "bob.jpg",
};

const kk_eigth_zodiac = {
  name: "Kuchi Kopi",
  image: "kuchi_kopi.jpg",
};

const rudy_ninth_zodiac = {
  name: "Rudy",
  image: "rudy.jpg",
};

const tina_tenth_zodiac = {
  name: "Tina",
  image: "Tina_Belcher.jpg",
};

const gayle_eleventh_zodiac = {
  name: "Gayle",
  image: "gayle.jpg",
};

const gene_twelvth_zodiac = {
  name: "Gene",
  image: "gene.jpg",
};

function close_zodiac() {
  console.log("bye bye!");
}

if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
  astrological_sign = "mr-frond";
} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
  astrological_sign = "gene";
} else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
  astrological_sign = "kuchi-kopi";
} else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
  astrological_sign = "tina";
} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
  astrological_sign = "jimmy-jr";
} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
  astrological_sign = "tammy";
} else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
  astrological_sign = "rudy";
} else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
  astrological_sign = "linda";
} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
  astrological_sign = "bob";
} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
  astrological_sign = "louise";
} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
  astrological_sign = "teddy";
} else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
  astrological_sign = "gayle";
}
