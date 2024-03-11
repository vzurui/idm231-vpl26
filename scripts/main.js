// buttons data
const bb_signs_data = [
  {
    id: "mr-frond",
    name: "Mr. Frond",
    sound: "Boing.mp3",
    image: "mr_frond.png",
    description:
      "Capricorns, born between December 22 and January 19, are known for their ambition, discipline, and practicality. Mr. Frond from Bob's Burgers exhibits traits associated with Capricorns, such as dedication to his job, a hardworking nature, and a practical approach to problem-solving. Despite his uptight demeanor, Mr. Frond's underlying ambition is undeniable and has a high drive for success. He aspires to be more than just a school counselor, evidenced by his constant attempts to climb the administrative ladder, even if it means implementing some rather unorthodox methods. His no-nonsense attitude and occasional struggle with expressing emotions align with the reserved and disciplined nature often attributed to Capricorns. ",
  },
  {
    id: "tammy",
    name: "Tammy",
    sound: "Bonk.mp3",
    image: "tammy.png",
    description:
      "Leos, born between July 23 and August 22, are characterized by their confident, outgoing, and theatrical nature. They often enjoy being in the spotlight, have a flair for creativity, and exude a natural charm. Leos seek admiration and recognition, and their warm-hearted generosity is a prominent trait. In the case of Tammy from Bob's Burgers, she reflects some Leo characteristics with her attention-seeking behavior, dramatic flair, and desire for social validation. Tammy's bold and theatrical personality aligns with the confident and outgoing traits commonly associated with Leos. Despite her occasional self-centered antics, Tammy's vivacity adds a touch of Leo-like drama to the colorful dynamics of the Belcher family and school environment.",
  },
  {
    id: "teddy",
    name: "Teddy",
    sound: "Dash.mp3",
    image: "teddy.png",
    description:
      "Individuals born under the Pisces sign, spanning from February 19 to March 20, are characterized by their compassionate and imaginative nature. They tend to be empathetic, deeply attuned to the emotions of those around them, and often harbor a love for creative pursuits. Pisceans are known dreamers, occasionally blurring the lines between reality and fantasy. Drawing parallels with Teddy from Bob's Burgers, his character embodies these Piscean traits. Teddy's warm-hearted and caring demeanor, coupled with a penchant for imaginative hobbies, reflects the compassion and creativity associated with Pisces. Despite his quirks, Teddy's friendly and empathetic disposition aligns with the classic traits of this water sign.",
  },
  {
    id: "louise",
    name: "Louise",
    sound: "GuitarSmash.mp3",
    image: "louise.png",
    description:
      "Aries, born between March 21 and April 19, are known for their bold, energetic, and assertive nature. They have a natural leadership quality and are often fearless in pursuing their goals. Arians thrive on challenges and enjoy taking the initiative. Louise is fearless, always ready for an adventure, and possesses a sharp wit and assertiveness beyond her years. Her natural leadership skills and tendency to take charge, whether in planning a scheme or navigating family dynamics, mirror the bold and assertive characteristics commonly associated with Aries individuals. She can be surprisingly perceptive, picking up on unspoken emotions and manipulating situations to her advantage, albeit in her own unique way.",
  },
  {
    id: "jimmy-jr",
    name: "Jimmy Jr",
    sound: "Klonk.mp3",
    image: "jimmy_junior.png",
    description:
      "Virgos, born between August 23 and September 22, are marked by their adaptability, humility, and meticulous attention to practical details. In the colorful world of Bob's Burgers, Jimmy Junior embodies these Virgo characteristics. His commitment to refining dance routines showcases an adaptability and precision reminiscent of a Virgo's attention to detail. Despite moments of indecision, Jimmy Junior's modest approach and cooperative spirit, particularly in his interactions with Tina and the Belcher family, exemplify the grounded and responsible nature commonly associated with Virgos. Jimmy Junior's earnest dedication and practical mindset align seamlessly with the defining traits of a Virgo individual.",
  },
  {
    id: "linda",
    name: "Linda",
    sound: "Munch.mp3",
    image: "linda.png",
    description:
      "Geminis, born between May 21 and June 20, are known for their lively, communicative, and adaptable nature. They are often characterized by their dual personalities, representing the duality of the twins. Geminis thrive in social situations, enjoy intellectual stimulation, and have a witty sense of humor. Linda from Bob's Burgers embodies many Gemini traits with her vivacious and talkative nature. Her love for socializing, entertaining, and spontaneous antics aligns with the sociable and adaptable characteristics associated with Geminis. Linda's ability to effortlessly connect with people, coupled with her energetic and lively personality, reflects the dynamic and communicative nature of the Gemini sign.",
  },
  {
    id: "bob",
    name: "Bob",
    sound: "Pop.mp3",
    image: "bob.png",
    description:
      "Taurus individuals, born between April 20 and May 20, are characterized by their grounded, reliable, and practical nature. They value stability, appreciate the comforts of life, and often demonstrate a strong work ethic. Taurians are known for their straightforward approach and perseverance. Bob from Bob's Burgers embodies many Taurus traits. His unwavering dedication to his family, his commitment to running a stable business, and his practical, no-nonsense attitude all align with the reliable and down-to-earth qualities associated with Taurus. Despite the chaos that often ensues in the Belcher family, Bob's steady and dependable presence reflects the grounded nature of a Taurus individual.",
  },
  {
    id: "kuchi-kopi",
    name: "Kuchi Kopi",
    sound: "Slip.mp3",
    image: "kuchi_kopi.png",
    description:
      "Scorpios, born between October 23 and November 21, are known for their intense, passionate, and mysterious nature. They often exude a magnetic charisma and possess a deep emotional depth. In the context of Kuchi Kopi from Bob's Burgers, the character's mysterious and enigmatic presence aligns with Scorpio traits. Kuchi Kopi, as Louise's stuffed toy and imaginary companion, represents the intensity and creativity often associated with Scorpios. The character's presence in Louise's life adds a layer of depth and emotion, mirroring the enigmatic and passionate qualities of Scorpio individuals. Despite being a whimsical character, Kuchi Kopi symbolizes the complex and intense energy that Scorpios bring to their relationships and experiences.",
  },
  {
    id: "rudy",
    name: "Rudy",
    sound: "Splat.mp3",
    image: "rudy.png",
    description:
      "Cancer individuals, born between June 21 and July 22, are known for their nurturing, empathetic, and loyal nature. They often prioritize emotional connections and seek a sense of security and comfort in their relationships. Cancers are intuitive and sensitive, attuned to the feelings of those around them. Rudy reflects Cancer traits through his caring and loyal friendship with the Belcher kids. Rudy's sensitivity to others' emotions, his genuine concern for his friends, and his willingness to provide support align with the nurturing and empathetic qualities commonly associated with Cancers. Despite his occasional quirkiness, Rudy's loyalty and emotional awareness contribute to his character's Cancer-like charm.",
  },
  {
    id: "tina",
    name: "Tina",
    sound: "Wink.mp3",
    image: "Tina_Belcher.png",
    description:
      "Libras, born between September 23 and October 22, are known for their social grace, charm, and a natural sense of harmony. They often value relationships, seeking to create connections and avoid conflicts. Libras are known for their fairness and ability to see multiple perspectives. In the context of Tina from Bob's Burgers, she exhibits some Libra traits. Tina's social awkwardness, coupled with her genuine desire for fairness and her attempts to navigate relationships with charm, resonate with the Libran inclination for harmony and diplomacy. While her approach may be unique, Tina's underlying qualities align with the sociable and balanced nature often associated with Libras.",
  },
  {
    id: "gayle",
    name: "Gayle",
    sound: "ZoomAway.mp3",
    image: "gayle.png",
    description:
      "Aquarians, born between January 20 and February 18, are renowned for their independent and progressive outlook. They value individuality, embrace unconventional ideas, and champion personal freedom. Gayle from Bob's Burgers resonates with these Aquarian traits through her quirky, artistic persona and her unapologetic pursuit of self-expression. Gayle's whimsical and unpredictable nature aligns with the open-minded and unconventional characteristics often associated with Aquarians. Whether she's passionately pursuing her artistic endeavors or navigating the unpredictability of her love life, Gayle adds a unique, Aquarian flair to the colorful tapestry of the Belcher family dynamic.",
  },
  {
    id: "gene",
    name: "Gene",
    sound: "Zoop.mp3",
    image: "gene.png",
    description:
      "Sagittarians, born between November 22 and December 21, are characterized by their adventurous, optimistic, and free-spirited nature. They have a love for exploration, value independence, and approach life with a sense of humor. Sagittarians are known for their straightforward and honest communication. In the context of Gene, he embodies many Sagittarius traits. Gene's adventurous and often eccentric pursuits, such as his musical endeavors and quirky interests, align with the free-spirited and optimistic characteristics associated with Sagittarians. His sense of humor, combined with a straightforward and genuine approach to life, reflects the Sagittarian love for authenticity and a lighthearted perspective.",
  },
];

// select character, description & sound play will pop up
function selectChar() {
  bb_signs_data.forEach((character) => {
    const id = character.id;
    const characterButton = document.getElementById(id);

    characterButton.addEventListener("click", (event) => {
      const characterId = event.target.id || event.target.parentElement.id;

      document.querySelector(".display-bb").style.display = "flex";

      getCharacterDescription(characterId);
      playCharacterAudio(characterId);
      getCharacterImg(characterId);
    });
  });
}

// audio sounds
function playCharacterAudio(characterId) {
  const character = getCharacter(characterId);

  const sound = character.sound;
  const audioElement = document.getElementById("audio_player");
  audioElement.setAttribute("src", `sounds/${sound}`);
  audioElement.play();
}

// grabs character description
function getCharacterDescription(characterId) {
  const character = getCharacter(characterId);
  const charEntry = document.getElementById("charEntry");

  const description = character.description;
  const element = document.querySelector(".birthday-select");
  element.style.display = "none";

  closeChar.style.display = "flex";

  charEntry.innerHTML = description;
}

// grabs character image
function getCharacterImg(characterId) {
  const character = getCharacter(characterId);

  const image = character.image;
  const charPic = document.getElementById("showCharacterPic");
  charPic.setAttribute("src", `images/${image}`);
}

// grabs characters from array
function getCharacter(characterId) {
  const findCharacterInObject = bb_signs_data.filter((bb_character) => {
    return bb_character.id === characterId;
  });

  return findCharacterInObject[0];
}

selectChar();

// help button open and close
function closeHelp() {
  const helpBox = document.querySelector(".helpBox");
  const showButton = document.getElementById("burger-button");
  const closeButton = document.querySelector(".close");

  showButton.addEventListener("click", () => {
    helpBox.showModal();
  });

  closeButton.addEventListener("click", () => {
    helpBox.close();
  });
}

closeHelp();

const closeChar = document.querySelector(".display-bb");
closeChar.style.display = "none";

// clears zodiac from screen

function closeOverlay() {
  const closeOverlayButton = document.querySelector(".bbClose");

  closeOverlayButton.addEventListener("click", () => {
    document.querySelector(".display-bb").style.display = "none";
    document.querySelector(".birthday-select").style.display = "block";
  });
}

closeOverlay();

// grabs date input and inserts corresponding sign
function getSign() {
  let astrological_sign;
  const getBirthdayDate = document.getElementById("birthday-pick");
  const getBirthdaySubmitButton = document.getElementById("submit-button");

  getBirthdaySubmitButton.addEventListener("click", () => {
    const birthdayDate = new Date(getBirthdayDate.value);
    const month = birthdayDate.getUTCMonth() + 1;
    const day = birthdayDate.getUTCDate();

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

    if (astrological_sign) {
      getCharacterDescription(astrological_sign);
      playCharacterAudio(astrological_sign);
      getCharacterImg(astrological_sign);
      getBirthdayDate.value = "";
    } else {
      console.log("missing sign");
    }
  });
}

getSign();

function addDialogEventListeners() {
  // add your logic for the close button and also pop up
  // add another birthday-select button listener DIALOG OPEN
}

// function main() {
//   getSign();
//   selectChar();
//   addDialogEventListeners();
// }

// main();
