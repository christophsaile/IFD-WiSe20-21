window.addEventListener('load', onLoad());
const artyom = new Artyom();
const commands = [
  {
    indexes: ['Morgen Sammy ich bin noch etwas müde.'],
    action: function () {
      const answer = 'Soll ich deine guten Morgen Playlist abspielen';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
    },
  },
  {
    indexes: ['Das wäre super sammy'],
    action: function () {
      const answer = 'Du hörst jetzt von "Ed Sheeran - Perfect"';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
    },
  },
  {
    indexes: ['Hey Sammy kannst du mir sagen was heute alles ansteht'],
    action: function () {
      const answer = 'Sehr gerne, mit was soll ich beginnen';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
    },
  },
  {
    indexes: ['welche Abgaben habe ich noch offen'],
    action: function () {
      const answer =
        'Bis Mittwoch, den 11.11.2020, musst du noch die Aufgabe 4 in Interface Design erledigen. Soll ich dir die Aufgabenstellung vorlesen';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
    },
  },
  {
    indexes: ['welche Vorlesungen habe ich heute'],
    action: function () {
      const answer =
        'Du hast heute im ersten Block Interface Design. Im zweiten Bocken hast du noch Streaming Anwendungen';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
    },
  },
  {
    indexes: ['habe ich neue Nachrichten bekommen'],
    action: function () {
      const answer =
        'Du hast eine neue E-Mail erhalten. Soll ich dir den Absender und den Betreff vorlesen';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
    },
  },
  {
    indexes: ['das wäre super Sammy'],
    action: function () {
      const answer =
        'Die E-Mail stammt vom Sekretariat der Hochschule und hat den Betreff "Anmeldebestätigung Tag der Medien". Soll ich dir den Inhalt vorlesen?';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
    },
  },
  {
    indexes: ['das wäre super Sammy'],
    action: function () {
      const answer =
        'Die E-Mail stammt vom Sekretariat der Hochschule und hat den Betreff "Anmeldebestätigung Tag der Medien". Soll ich dir den Inhalt vorlesen?';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
    },
  },
  {
    indexes: ['Kannst du mir zeigen was es heute zum Essen gibt'],
    action: function () {
      const answer = 'Natürlich, ich öffne dir den aktuellen Essensplan';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
      window.setTimeout(() => {
        document
          .querySelector('.food')
          .classList.add('animate__animated', 'animate__fadeIn', 'active');
      }, 3000);
    },
  },
  {
    indexes: ['Danke du kannst den Plan wieder schließen'],
    action: function () {
      const answer =
        'Alles klar';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
      window.setTimeout(() => {
        document
          .querySelector('.food')
          .classList.remove('animate__animated', 'animate__fadeIn', 'active');
      }, 2500);
    },
  },
  {
    indexes: ['Habe ich heute Termine die ich warnehmen muss'],
    action: function () {
      const answer =
        'Du hast heute Mittag einen Termin bei deinem Artzt, soll ich dich nochmals dran erinnern?';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
    },
  },
  {
    indexes: ['Ja bitte'],
    action: function () {
      const answer =
        'Hast du noch weitere Fragen?';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
    },
  },
  {
    indexes: ['Nein ich muss jetzt los kannst du noch das Garagentor für mein Raumschiff öffnen'],
    action: function () {
      const answer =
        'Haha Benni, ich öffne das Garagentor für dein Fahrrad. Bis später';
      artyom.say(answer);
      createNewMessageBox(answer, 'userOutput');
    },
  },
];

function onLoad() {
  document.querySelector('.startButton').addEventListener('click', () => {
    startArtyom();
  });
  document.querySelector('.endButton').addEventListener('click', () => {
    endArtyom();
  });
}

function startArtyom() {
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

  const answer =
    'Hey Benni, ich hoffe du hast gut schlafen. Wie geht es dir heute';
  artyom.say(answer);
  createNewMessageBox(answer, 'userOutput');
  artyom.redirectRecognizedTextOutput(function (recognized, isFinal) {
    if (isFinal) {
      createNewMessageBox(recognized, 'userInput');
    } else {
      console.log(recognized);
    }
  });
}

function endArtyom() {
  document
    .querySelector('.startScreen')
    .classList.add('active', 'animate__animated', 'animate__fadeIn');
  document
    .querySelector('.conversation')
    .classList.remove('active', 'animate__animated', 'animate__fadeIn');
  artyom.say('Bis bald Benni');
  artyom.dontObey();
  document.querySelector('.conversation__messages').innerHTML = '';
  console.log('Closed!');
}

function createNewMessageBox(text, typeOfInput) {
  const creatElem = document.createElement('section');
  const addText = document.createTextNode(text);
  const addClass = creatElem.classList.add(
    typeOfInput,
    'animate__animated',
    'animate__fadeIn'
  );
  creatElem.append(addText);
  document.querySelector('.conversation__messages').appendChild(creatElem);
  document
    .querySelector('.conversation__messages')
    .lastElementChild.scrollIntoView();
}
