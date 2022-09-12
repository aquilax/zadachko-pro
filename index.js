const triplets = [
  ["круша", "правя", "компот"],
  ["компот", "пълня", "буркан"],
  ["захар", "добавям", "компот"],
  ["буркан", "пълня", "кутия"],
  ["буркан", "струва", "цена"],
  ["кутия", "пълня", "кашон"],
  ["кашон", "товаря", "камион"],
  ["плат", "ушива", "панталон"],
  ["панталон", "прави", "опаковка"],
  ["опаковка", "прави", "кашон"],
  ["кашон", "има", "тегло"],
  ["кашон", "пълни", "камион"],
  ["камион", "използва", "бензин"],
  ["плат", "струва", "цена"],
  ["човек", "яде", "сладолед"],
  ["човек", "плува", "басейн"],
  ["човек", "кара", "велосипед"],
  ["човек", "кара", "тротинетка"],
  ["човек", "наема", "автомобил"],
  ["човек", "наема", "тротинетка"],
  ["човек", "вози се", "влак"],
  ["сладолед", "струва", "цена"],
  ["сладолед", "има", "тегло"],
  ["сладолед", "изяжда се", "време"],
  ["тегло", "струва", "цена"],
  ["човек", "има", "пари"],
  ["пари", "купува", "сладолед"],
  ["пари", "купува", "време"],
  ["време", "струва", "цена"],
  ["път", "има", "дължина"],
  ["басейн", "има", "дължина"],
  ["дължина", "изминава", "време"],
  ["велосипед", "кара", "време"],
  ["тротинетка", "кара", "време"],
  ["влак", "движи се", "време"],
];

const former = [
  {
    word: "използва",
    forms: {
      singular: "използва",
      plural: "използват",
    },
  },
  {
    word: "пълни",
    forms: {
      singular: "пълня",
      plural: "пълнят",
    },
  },
  {
    word: "купува",
    forms: {
      singular: "купува",
      plural: "купуват",
    },
  },
  {
    word: "яде",
    forms: {
      singular: "яде",
      plural: "ядат",
    },
  },
  {
    word: "прави",
    forms: {
      singular: "прави",
      plural: "правят",
    },
  },
  {
    word: "ушива",
    forms: {
      singular: "ушива",
      plural: "ушиват",
    },
  },
  {
    word: "движи се",
    forms: {
      singular: "се движи",
      plural: "се движат",
    },
  },
  {
    word: "изминава",
    forms: {
      singular: "изминава",
      plural: "изминават",
    },
  },
  {
    word: "изяжда се",
    forms: {
      singular: "се изяжда",
      plural: "се изяждат",
    },
  },
  {
    word: "наема",
    forms: {
      singular: "наема",
      plural: "наемат",
    },
  },
  {
    word: "плува",
    forms: {
      singular: "плува",
      plural: "плуват",
    },
  },
  {
    word: "кара",
    forms: {
      singular: "кара",
      plural: "карат",
    },
  },
  {
    word: "вози се",
    forms: {
      singular: "се вози",
      plural: "се возят",
    },
  },
  {
    word: "метър",
    forms: {
      singular: "метър",
      plural: "метра",
    },
  },
  {
    word: "тегло",
    measures: ["килограм"],
    forms: {
      singular: "тегло",
      plural: "тегло",
    },
  },
  {
    word: "плат",
    measures: ["метър"],
    forms: {
      singular: "плат",
      plural: "плат",
    },
  },
  {
    word: "панталон",
    measures: ["брой"],
    forms: {
      singular: "панталон",
      plural: "панталони",
    },
  },
  {
    word: "дължина",
    measures: ["метър"],
    forms: {
      singular: "дължина",
      plural: "дължини",
    },
  },
  {
    word: "път",
    measures: ["брой"],
    forms: {
      singular: "път",
      plural: "пътища",
    },
  },
  {
    word: "време",
    measures: ["час", "минута"],
    forms: {
      singular: "време",
      plural: "време",
    },
  },
  {
    word: "влак",
    measures: ["брой"],
    forms: {
      singular: "влак",
      plural: "влакове",
    },
  },
  {
    word: "автомобил",
    measures: ["брой"],
    forms: {
      singular: "автомобил",
      plural: "автомобили",
    },
  },
  {
    word: "тротинетка",
    measures: ["брой"],
    forms: {
      singular: "тротинетка",
      plural: "тротинетки",
    },
  },
  {
    word: "велосипед",
    measures: ["брой"],
    forms: {
      singular: "велосипед",
      plural: "велосипеди",
    },
  },
  {
    word: "басейн",
    measures: ["брой"],
    forms: {
      singular: "басейн",
      plural: "басейни",
    },
  },
  {
    word: "сладолед",
    measures: ["брой"],
    forms: {
      singular: "сладолед",
      plural: "сладоледи",
    },
  },
  {
    word: "човек",
    measures: ["брой"],
    forms: {
      singular: "човек",
      plural: "хора",
    },
  },
  {
    word: "опаковка",
    measures: ["брой"],
    forms: {
      singular: "опаковка",
      plural: "опаковки",
    },
  },
  {
    word: "камион",
    measures: ["брой"],
    forms: {
      singular: "камион",
      plural: "камиони",
    },
  },
  {
    word: "кашон",
    measures: ["брой"],
    forms: {
      singular: "кашон",
      plural: "кашони",
    },
  },
  {
    word: "кутия",
    measures: ["брой"],
    forms: {
      singular: "кутия",
      plural: "кутии",
    },
  },
  {
    word: "захар",
    measures: ["килограм"],
    forms: {
      singular: "захар",
      plural: "захар",
    },
  },
  {
    word: "буркан",
    measures: ["брой"],
    forms: {
      singular: "буркан",
      plural: "буркани",
    },
  },
  {
    word: "бензин",
    measures: ["литър"],
    forms: {
      singular: "бензин",
      plural: "бензин",
    },
  },
  {
    word: "товаря",
    forms: {
      singular: "товаря",
      plural: "товарят",
    },
  },
  {
    word: "варя",
    forms: {
      singular: "варя",
      plural: "варят",
    },
  },
  {
    word: "добавям",
    forms: {
      singular: "добавям",
      plural: "добавят",
    },
  },
  {
    word: "пълня",
    forms: {
      singular: "пълни",
      plural: "пълнят",
    },
  },
  {
    word: "правя",
    forms: {
      singular: "прави",
      plural: "правят",
    },
  },
  {
    word: "литър",
    forms: {
      singular: "литър",
      plural: "литра",
    },
  },
  {
    word: "брой",
    forms: {
      singular: "брой",
      plural: "броя",
    },
  },
  {
    word: "компот",
    measures: ["брой"],
    forms: {
      singular: "компот",
      plural: "компоти",
    },
  },
  {
    word: "кифла",
    measures: ["брой"],
    forms: {
      singular: "кифла",
      plural: "кифли",
    },
  },
  {
    word: "смокиня",
    measures: ["килограм", "грам"],
    forms: {
      singular: "смокиня",
      plural: "смокини",
    },
  },
  {
    word: "круша",
    measures: ["килограм", "грам"],
    forms: {
      singular: "круша",
      plural: "круши",
    },
  },
  {
    word: "струва",
    forms: {
      singular: "струва",
      plural: "струват",
    },
  },
  {
    word: "има",
    forms: {
      singular: "има",
      plural: "имат",
    },
  },
  {
    word: "лев",
    forms: {
      singular: "лев",
      plural: "лева",
    },
  },
  {
    word: "час",
    forms: {
      singular: "час",
      plural: "часа",
    },
  },
  {
    word: "килограм",
    forms: {
      singular: "килограм",
      plural: "килограма",
    },
  },
  {
    word: "цена",
    measures: ["лев", "стотинка"],
    forms: {
      singular: "цена",
      plural: "цени",
    },
  },
  {
    word: "пари",
    measures: ["лев", "стотинка"],
    forms: {
      singular: "пара",
      plural: "пари",
    },
  },
  {
    word: "произвежда",
    forms: {
      singular: "произвежда",
      plural: "произвеждат",
    },
  },
  {
    word: "бурканче сладко",
    measures: ["брой"],
    forms: {
      singular: "бурканче сладко",
      plural: "бурканчета сладко",
    },
  },
];

const generateFact = (object, verb, subject) => `${object} ${verb} ${subject}`;
const generateQuestion = (subject, verb, object) =>
  `колко ${subject} ${verb} ${object}`;
const getForm = (word) => {
  result = former.find((f) => f.word === word);
  console.assert(result, `${word} missing forms`);
  return result;
};

const pluralize = (object, size) => {
  const form = getForm(object);
  if (size === 1) {
    return form.forms.singular;
  }
  return form.forms.plural;
};

const objectMeasure = (object, size) => {
  const form = getForm(object);
  console.assert(form.hasOwnProperty("measures"), `${object} missing forms`);
  return pluralize(form.measures[0], size);
};

const generateObject = (object, size) =>
  `${size} ${objectMeasure(object, size)} ${pluralize(object, size)}`;

const generateSubject = (subject, size) =>
  `${pluralize(subject, 1)} ${size} ${objectMeasure(subject, size)}`;

const getFact = (object, verb, subject, objCount, cost) =>
  generateFact(
    generateObject(object, objCount),
    pluralize(verb, objCount),
    generateSubject(subject, objCount * cost)
  );

const getQuestion = (object, verb, subject, subjectCount) => {
  const objCount = 2;
  return generateQuestion(
    `${objectMeasure(subject, objCount)} ${pluralize(subject, objCount)}`,
    pluralize(verb, objCount),
    `${subjectCount} ${objectMeasure(object, objCount)} ${pluralize(
      object,
      subjectCount
    )}`
  );
};

const object = "смокиня";
const verb = "има";
const subject = "цена";
const objCount = 3;
const cost = 5;

const fact = getFact(object, verb, subject, objCount, cost);
const fact2 = getFact(
  "смокиня",
  "произвежда",
  "бурканче сладко",
  objCount,
  cost
);
const qObject = "смокиня";
const qVerb = "струва";
const qSubject = "цена";
const qSubjectCount = 5;

const question = getQuestion(qObject, qVerb, qSubject, qSubjectCount);
const question2 = getQuestion(
  "бурканче сладко",
  "произвежда",
  "смокиня",
  qSubjectCount
);

const wantFact = "3 килограма смокини имат цена 15 лева";
console.assert(fact === wantFact, JSON.stringify({ fact, wantFact }));

const wantQuestion = "колко лева струват 5 килограма смокини";
console.assert(
  question === wantQuestion,
  JSON.stringify({ question, wantQuestion })
);

const wantQuestion2 = "колко лева струват 5 килограма смокини";
console.assert(
  question2 === wantQuestion2,
  JSON.stringify({ question2, wantQuestion2 })
);

console.log({ fact });
console.log({ fact2 });
console.log({ question });
console.log({ question2 });

const random = (x) => Math.ceil(Math.random() * x);

triplets.forEach((tr) => {
  const trFact = getFact(tr[0], tr[1], tr[2], objCount, cost);
  const trQuestion = getQuestion(tr[2], tr[1], tr[0], objCount);
  // console.log({ fact: trFact });
  // console.log({ question: trQuestion });
});

const getStartWords = () => new Set(triplets.map((tr) => tr[0]));
const getTripletsWithStartWord = (word) =>
  triplets.filter((tr) => tr[0] === word);

const startWords = getStartWords();
const startWordsArray = [...startWords];

const formatSentence = (sentence, ending) =>
  `${sentence.charAt(0).toUpperCase() + sentence.slice(1)}${ending}`;

const generateNarrative = () => {
  const narrative = [];
  let startWord = startWordsArray[random(startWordsArray.length - 1)];
  console.log({ startWord, startWords });

  while (startWords.has(startWord)) {
    const triplets = getTripletsWithStartWord(startWord);
    if (triplets.length === 0) {
      break;
    }
    let objCount = random(15) + 1;
    let cost = random(4) + 1;

    const triplet = triplets[random(triplets.length - 1)];
    const fact = getFact(triplet[0], triplet[1], triplet[2], objCount, cost);
    const question = getQuestion(triplet[2], triplet[1], triplet[0], objCount);
    narrative.push(formatSentence(fact, "."));
    narrative.push(formatSentence(question, "?"));
    console.log({ fact, question });
    startWord = triplet[2];
  }
  return narrative;
};

const $generate = document.getElementById("generate");
const $output = document.getElementById("output");

$generate.addEventListener("click", (e) => {
  e.preventDefault();
  const narrative = generateNarrative();
  $output.value = narrative.join("\n");
});
