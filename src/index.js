const messages = [
  "Remember, you're the one who can fill the world with sunshine. - Snow White",
  "Have courage and be kind. - Cinderella",
  "If you dream a thing more than once, it's sure to come true. - Aurora",
  "You should never judge people by their appearance. - Belle",
  "Dreams are only dreams until you decide to make them real. - Ariel",
  "I am not a prize to be won. - Jasmine",
  "Listen with your heart, you will understand. - Pocahontas",
  "The flower that blooms in adversity is the most rare and beautiful of all. - Mulan",
  "The only way to get what you want in this world is through hard work. -Tiana",
  "Go. Live your dream. - Rapunzel",
  "Our fate lives within us; you only have to be brave enough to see it. - Merida",
  "Fear will be your enemy. - Elsa",
  "Only an act of true love can thaw a frozen heart. - Anna",
  "The call isn't out there at all, it's inside me. - Moana",
  "Maybe I didn't go for my father. Maybe what I really wanted was to prove I could do things right. - Mulan",
  "Sometimes it's better to be alone. Nobody can hurt you. - Megara",
  "True love's kiss isn't the only thing that matters. - Giselle",
  "The only thing that gets you to your dream is hard work. - Tiana",
  "Remember, you're never fully dressed without a smile. - Minnie Mouse",
  "Just because I cannot see it, doesn't mean I can't believe it. - Sally",
  "The decisions we make define us. - Queen Elinor",
  "The only way to achieve the impossible is to believe it is possible. - Alice",
  "Duty is the mountain we climb, but glory is the view from the top. - Mulan",
  "Even the darkest places can hide a little light. - Belle",
  "The world is a different place when you see it from above. - Rapunzel",
  "Being the best version of yourself is all you can do. - Tiana",
  "Sometimes you have to step up and prove yourself. - Jasmine",
  "There's always a light at the end of the tunnel. - Snow White",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[35m${message}\x1b[0m`);
};

module.exports = { funnyCommit };
