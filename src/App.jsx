import React, { useState } from "react";

const decks = {
  song: [
    "Love / प्यार", "Rain / बारिश", "Night / रात", "Dance / नाच", "Dream / सपना",
    "Moonlight / चाँदनी", "Sunshine / धूप", "Heart / दिल", "Fire / आग", "Sky / आसमान",
    "Stars / तारे", "Ocean / समुंदर", "Wind / हवा", "Smile / मुस्कान", "Flower / फूल",
    "Light / रोशनी", "Shadow / छाया", "Memory / यादें", "Freedom / आज़ादी", "Hope / उम्मीद",
    "Journey / सफर", "Story / कहानी", "Whisper / फुसफुसाना", "Tears / आंसू", "Smile / हँसी",
    "Music / संगीत", "Friendship / दोस्ती", "Pain / दर्द", "Happiness / खुशी", "Time / वक्त",
    "Silence / खामोशी", "Promise / वादा", "Nightfall / रात का दौर", "Sunset / सूर्यास्त", "Starry Night / तारों वाली रात",
    "River / नदी", "Fireworks / आतिशबाज़ी", "Heartbeat / धड़कन", "Love Song / प्रेम गीत", "Skyline / आकाश रेखा",
    "Melody / सुर", "Rhythm / लय", "Clouds / बादल", "Smile / मुस्कुराहट", "Magic / जादू",
    "Shadow / साया", "Rainfall / बारिश", "Journey / यात्रा", "Echo / गूँज", "Freedom / स्वतंत्रता"
  ],
  truth: [
    "What's your favorite thing about your partner?",
    "What's a secret fantasy you’ve never shared?",
    "Describe your perfect date night.",
    "What’s the most romantic thing you’ve done?",
    "When did you first realize you loved your partner?",
    "What’s something new you want to try together?",
    "What scares you most about this relationship?",
    "What's your partner's quirkiest habit you love?",
    "Have you ever lied to protect your partner’s feelings?",
    "What’s your biggest turn-on?",
    "What’s a moment with your partner that made you cry?",
    "How do you show love when words aren't enough?",
    "What’s one thing you want your partner to know about you?",
    "If you had to choose, what’s the one thing that defines your love?",
    "What’s your guilty pleasure in this relationship?",
    "Have you ever been jealous? Why?",
    "What's a dream you want to achieve together?",
    "What’s something you admire about your partner?",
    "If your relationship was a song, what would it be?",
    "What’s your favorite memory together?",
    "What’s a habit you’d like your partner to change?",
    "What does commitment mean to you?",
    "What’s the craziest thing you’ve done for love?",
    "What’s a secret desire you hope your partner will fulfill?",
    "How do you handle disagreements?",
    "What's the best advice your partner has given you?",
    "What’s your love language?",
    "What’s one thing you wish you did more often together?",
    "What’s the most spontaneous thing you’ve done?",
    "If you could relive one day together, which would it be?",
    "What’s your favorite way to be comforted?",
    "What’s a surprise you want to plan for your partner?",
    "What’s your biggest fear in this relationship?",
    "How do you celebrate small wins as a couple?",
    "What’s the sweetest thing your partner has done recently?",
    "Have you ever felt truly understood by your partner?",
    "What’s your idea of a perfect weekend together?",
    "What’s a lesson love has taught you?",
    "What’s your favorite physical feature of your partner?",
    "What’s the funniest thing you’ve done as a couple?",
    "What’s your favorite way to say ‘I love you’?",
    "What’s a challenge you overcame together?",
    "What’s your partner’s best quality?",
    "How do you keep the spark alive?",
    "What’s your dream vacation spot with your partner?",
    "What’s a nickname you have for each other?",
    "How do you show appreciation daily?",
    "What’s a new hobby you want to try together?",
    "What’s your favorite thing to do on lazy days?",
    "What’s your proudest moment as a couple?",
    "What’s the biggest lesson your relationship has taught you?"
  ],
  know: [
    "What's their favorite movie?",
    "What's their dream vacation spot?",
    "What’s their go-to comfort food?",
    "What’s their biggest pet peeve?",
    "Who’s their celebrity crush?",
    "What’s their favorite color?",
    "What’s their favorite song?",
    "What’s their biggest fear?",
    "What’s their favorite hobby?",
    "What’s their favorite drink?",
    "What’s their childhood nickname?",
    "What’s their favorite season?",
    "What’s their favorite sport?",
    "What’s their shoe size?",
    "What’s their favorite ice cream flavor?",
    "What’s their favorite holiday destination?",
    "What’s their favorite way to relax?",
    "What’s their dream job?",
    "What’s their favorite restaurant?",
    "What’s their favorite book?",
    "What’s their favorite TV show?",
    "What’s their morning routine?",
    "What’s their biggest achievement?",
    "What’s their favorite flower?",
    "What’s their favorite scent?",
    "What’s their favorite dessert?",
    "What’s their favorite type of music?",
    "What’s their guilty pleasure TV show?",
    "What’s their favorite way to spend a Sunday?",
    "What’s their favorite board game?",
    "What’s their favorite childhood memory?",
    "What’s their preferred coffee order?",
    "What’s their favorite animal?",
    "What’s their biggest dream?",
    "What’s their least favorite chore?",
    "What’s their favorite way to exercise?",
    "What’s their favorite app?",
    "What’s their hidden talent?",
    "What’s their favorite thing to cook?",
    "What’s their favorite pair of shoes?",
    "What’s their favorite quote?",
    "What’s their go-to karaoke song?",
    "What’s their favorite holiday?",
    "What’s their favorite pizza topping?",
    "What’s their favorite superhero?",
    "What’s their favorite way to celebrate birthdays?",
    "What’s their favorite thing to wear?",
    "What’s their favorite childhood toy?",
    "What’s their favorite place to shop?",
    "What’s their favorite kind of weather?",
    "What’s their favorite way to unwind after work?"
  ],
  lyrics: [
    "Do you ever feel like a plastic bag, drifting through the wind,\nWanting to start again...\n— Finish: 'Cause baby you're a firework'",
    "Tujh mein rab dikhta hai, yaara main kya karoon?\nSajde sar jhukta hai, yaara main kya karoon?\n— Finish: 'Rab ne bana di jodi'",
    "Just a small town girl, living in a lonely world,\nShe took the midnight train going anywhere...\n— Finish: 'Don’t stop believin''",
    "Kabhi kabhi mere dil mein khayaal aata hai,\nKi jaise tujhko banaya gaya hai mere liye...\n— Finish: 'Kabhi Kabhi Aditi'",
    "Cause all of me loves all of you,\nLove your curves and all your edges...\n— Finish: 'John Legend'",
    "Channa mereya mereya, channa mereya mereya...\nBeliya o piya...\n— Finish: 'Ae Dil Hai Mushkil'",
    "I’m gonna take my horse to the old town road,\nI’m gonna ride ’til I can’t no more...\n— Finish: 'Old Town Road'",
    "Tera ban jaunga, haan,\nTera ban jaunga...\n— Finish: 'Kabir Singh'",
    "Hey, I just met you, and this is crazy,\nBut here's my number, so call me maybe...\n— Finish: 'Call Me Maybe'",
    "Tere bina jee na payenge hum,\nAaja dil ko karle tu sambhal...\n— Finish: 'Agar Tum Saath Ho'",
    // Add more here to reach 50 cards total...
  ],
  wouldyou: [
    "Would you rather lose your voice or your hearing?",
    "Would you rather be invisible or be able to fly?",
    "Would you rather fight one horse-sized duck or 100 duck-sized horses?",
    "Would you rather live in a world without music or without movies?",
    "Would you rather have the ability to read minds or teleport?",
    "Would you rather always have to say everything on your mind or never speak again?",
    "Would you rather be able to time travel or freeze time?",
    "Would you rather have a rewind button or a pause button in your life?",
    "Would you rather have unlimited money but no friends or friends but no money?",
    "Would you rather live without internet or without air conditioning?",
    "Would you rather have dinner with your favorite celebrity or your best friend?",
    "Would you rather be able to talk to animals or speak all human languages?",
    "Would you rather be stuck on a desert island alone or with someone you hate?",
    "Would you rather always be 10 minutes late or always 20 minutes early?",
    "Would you rather never get tired or never have to go to the bathroom?",
    "Would you rather have super strength or super intelligence?",
    "Would you rather live in the city or in the countryside?",
    "Would you rather only eat sweet food or only eat savory food for the rest of your life?",
    "Would you rather always have bad luck or never have any luck at all?",
    "Would you rather live without your phone or without your wallet?",
    "Would you rather be famous for a scandal or be unknown forever?",
    "Would you rather have the ability to heal others or heal yourself?",
    "Would you rather go on a road trip with your partner or a cruise?",
    "Would you rather have a personal chef or a personal driver?",
    "Would you rather be able to control the weather or control emotions?",
    "Would you rather have a photographic memory or be able to forget anything you want?",
    "Would you rather lose the ability to read or lose the ability to speak?",
    "Would you rather have a pet dragon or a pet unicorn?",
    "Would you rather be able to breathe underwater or fly?",
    "Would you rather live without music or live without TV?",
    "Would you rather have free flights anywhere or free meals anywhere?",
    "Would you rather be the funniest person or the smartest person in the room?",
    "Would you rather never have internet access again or never be able to take an airplane?",
    "Would you rather be able to speak with your past self or your future self?",
    "Would you rather always win at board games or always win at video games?",
    "Would you rather be a famous actor or a famous musician?",
    "Would you rather spend a year living at the beach or in the mountains?",
    "Would you rather live without chocolate or without cheese?",
    "Would you rather have your dream job or your dream house?",
    "Would you rather only be able to whisper or only be able to shout?",
    "Would you rather have free Netflix forever or free Spotify forever?",
    "Would you rather travel to space or explore the deep sea?",
    "Would you rather have a lifetime supply of coffee or tea?",
    "Would you rather be able to instantly learn any skill or instantly forget any bad memory?",
    "Would you rather have perfect health or perfect wealth?",
    "Would you rather never have to sleep or never have to eat?",
    "Would you rather live in a world with no crime or no poverty?",
    "Would you rather have an unlimited shopping spree or unlimited travel?",
    "Would you rather be the hero or the villain in a movie?",
    "Would you rather live without your phone or without your computer?"
  ]
};

export default function App() {
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [card, setCard] = useState(null);

  const drawCard = (deckName) => {
    const cards = decks[deckName];
    let randomCard;
    do {
      randomCard = cards[Math.floor(Math.random() * cards.length)];
    } while (randomCard === card && cards.length > 1);
    setSelectedDeck(deckName);
    setCard(randomCard);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 flex flex-col items-center justify-center p-6 text-center font-sans">
      <h1 className="text-5xl font-extrabold mb-10 text-white drop-shadow-lg">
        Jam & Truth for Couples 🎤💖
      </h1>

      <div className="flex gap-5 mb-10 flex-wrap justify-center">
        {Object.entries({
          song: "Song Association",
          truth: "Truth",
          know: "Know Each Other",
          lyrics: "Finish the Lyrics",
          wouldyou: "Would You Rather"
        }).map(([key, label]) => (
          <button
            key={key}
            className={`px-5 py-3 rounded-lg font-semibold transition-shadow
              ${
                selectedDeck === key
                  ? "bg-white text-purple-700 shadow-lg"
                  : "bg-white/90 text-purple-900 hover:shadow-md"
              }`}
            onClick={() => drawCard(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {card && (
        <div
          className="max-w-xl w-full bg-white/90 rounded-xl shadow-xl p-8 text-lg
          font-medium leading-relaxed text-purple-900 whitespace-pre-wrap select-none
          border-2 border-purple-600"
        >
          {card}
        </div>
      )}
    </div>
  );
}
