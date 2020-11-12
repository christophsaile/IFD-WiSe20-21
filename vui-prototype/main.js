window.addEventListener('load', function () {
  init();
});

function init() {
  const artyom = new Artyom();
  const commands = [
    {
      indexes: [
        'kannst du mir sagen was heute alles ansteht',
        'kannst du mich auf den aktuellen Stand bringen',
      ],
      action: function () {
        artyom.say('sehr gerne, mit was soll ich beginnen');
      },
    },
    {
      indexes: ['ich bin noch etwas müde'],
      action: function () {
        artyom.say('soll ich deine guten Morgen Playlist abspielen');
      },
    },
    {
      indexes: ['welche Abgaben habe ich noch offen'],
      action: function () {
        artyom.say(
          'Bis Mittwoch, den 11.11.2020, musst du noch die Aufgabe 4 in Interface Design erledigen. Soll ich dir die Aufgabenstellung vorlesen'
        );
      },
    },
    {
      indexes: ['welche Vorlesungen habe ich heute'],
      action: function () {
        artyom.say(
          'Du hast heute zwei Blöcke Vorlesung. Zuerst hast du von 09:45 - 11:15 Uhr Interface Design. Im Anschluss hast du noch von 11:15 - 13:15 Uhr die Veranstaltung Streaming Anwendungen'
        );
      },
    },
    {
      indexes: ['habe ich neue Nachrichten bekommen'],
      action: function () {
        artyom.say(
          'Du hast eine neue E-Mail erhalten. Soll ich dir den Absender und den Betreff vorlesen'
        );
        //dynamically add new command to array?
      },
    },
  ];

  document.querySelector('.startButton').addEventListener('click', () => {
    document
      .querySelector('.startScreen')
      .classList.remove('active', 'animate__animated', 'animate__fadeIn');
    document
      .querySelector('.conversation')
      .classList.add('active', 'animate__animated', 'animate__fadeIn');
    artyom.addCommands(commands);
    function startContinuousArtyom() {
      artyom.fatality();
      setTimeout(function () {
        artyom
          .initialize({
            lang: 'de-DE',
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true,
          })
          .then(function () {
            console.log('Ready!');
          });
      }, 250);
    }
    startContinuousArtyom();
    artyom.say(
      'Hey Benni, ich hoffe du hast gut schlafen. Wie geht es dir heute'
    );
  });

  document.querySelector('.endButton').addEventListener('click', () => {
    document
      .querySelector('.startScreen')
      .classList.add('active', 'animate__animated', 'animate__fadeIn');
    document
      .querySelector('.conversation')
      .classList.remove('active', 'animate__animated', 'animate__fadeIn');
    artyom.say('Bis bald Benni');
    artyom.dontObey();
    console.log('Closed!');
  });
}
