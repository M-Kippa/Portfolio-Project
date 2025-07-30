const subjects = ['The moon', 'Your aura', 'The stars'];
const actions = ['is aligned with', 'is disrupted by', 'is powered by'];
const outcomes = ['chaos', 'great energy', 'a surprise visitor'];

function generateMessage() {
  const random = arr => arr[Math.floor(Math.random() * arr.length)];
  const message = `${random(subjects)} ${random(actions)} ${random(outcomes)}.`;
  console.log(message);
}

generateMessage();
