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
        artyom.say('Sehr gerne, mit was soll ich beginnen?');
      },
    },
    {
      indexes: ['ich bin noch etwas müde'],
      action: function () {
        artyom.say('soll ich deine guten Morgen Playlist abspielen');
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
      'Hey Benni, ich hoffe du hast gut schlafen. Wie geht es dir heute?'
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
