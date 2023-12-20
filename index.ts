interface Gdod {
  name: string;
  id: string;
  sadir: "סדיר" | "לא סדיר";
  hativa: string
}

interface Hativa {
  name: string;
  id: string;
  ogda: string,
}
interface Ogda {
    name: string;
    id: string;
    pikod: string;
}

interface Pikod {
  name: string;
  id: string;
}

interface Magad {
  name: string;
  id: string;
  magadal: string;
}


  
interface Magadal {
  name: string;
  id: string;
}

interface Makat {
  name: string;
  id: string;
}


const generateRandomGdod = (hativas: Hativa[]): Gdod[] => {
  const gdodList: Gdod[] = [];

  for (let i = 1; i <= hativas.length * 10; i++) {
    const gdodNumber = Math.floor(Math.random() * 200).toString().padStart(3, '0');
    const gdodName = `גדוד-${gdodNumber}`;
    const gdodId = `g${gdodNumber}`;

    const gdod: Gdod = {
      name: gdodName,
      id: gdodId,
      sadir: Math.random() > 0.3 ? "לא סדיר" : "סדיר",
      hativa: hativas[Math.floor(Math.random() * (hativas.length - 1))].id
    };

    gdodList.push(gdod);
  }

  return gdodList;
};

const generateRandomHativa = (ogdas: Ogda[]): Hativa[] => {
  const minHativas = 10;
  const maxHativas = Math.floor(ogdas.length * 4);
  const numberOfHativas = Math.floor(Math.random() * (maxHativas - minHativas + 1)) + minHativas;

  const hativaList: Hativa[] = [];

  for (let i = 1; i <= numberOfHativas; i++) {
    const hativaNumber = Math.floor(Math.random() * 100).toString().padStart(3, '0');
    const hativaName = `חטיבה-${hativaNumber}`;
    const hativaId = `h${hativaNumber}`;

    const hativa: Hativa = {
      name: hativaName,
      id: hativaId,
      ogda: ogdas[Math.floor(Math.random() * (ogdas.length - 1))].id
    };

    hativaList.push(hativa);
  }

  return hativaList;
};

const ogdaNames: string[] = [
  'אוגדת הנשמה',
  'אוגדת הגלקטיקה',
  'אוגדת הפלאים',
  'אוגדת החלל',
  'אוגדת השאלות',
  'אוגדת החלומות',
  'אוגדת הסקרנות',
  'אוגדת הזהות',
  'אוגדת השקפצנות',
  'אוגדת המסע',
  'אוגדת הפוליטיקה',
  'אוגדת החיים',
  'אוגדת העצמאות',
  'אוגדת התהפוכות',
  'אוגדת החופש',
  'אוגדת הדמוקרטיה',
  'אוגדת המגמות',
  'אוגדת הצבעים',
  'אוגדת התעוזה',
  'אוגדת ההתמודדות',
  'אוגדת השקפה',
  'אוגדת השינוי',
  'אוגדת האמונה',
  'אוגדת השמיים',
  'אוגדת המערכות',
  'אוגדת ההתמקמות',
  'אוגדת הקוד',
  'אוגדת האהבה',
  'אוגדת החום',
  'אוגדת הקרח',
  'אוגדת הרוח',
  'אוגדת האומץ',
  'אוגדת הניצחון',
  'אוגדת הסלע',
  'אוגדת התפקיד',
  'אוגדת הכוח',
  'אוגדת הזמן',
  'אוגדת הרגע',
  'אוגדת המציאות',
  'אוגדת התכנון',
  'אוגדת ההתמדה',
  'אוגדת המחויבות',
  'אוגדת השקיפה',
  'אוגדת ההתרגשות',
  'אוגדת הכוחות',
  'אוגדת הקודש',
  'אוגדת ההתמקמות',
  'אוגדת המסלול',
  'אוגדת השגרה',
  'אוגדת השאיפה',
];

const generateRandomOgda = (pikods: Pikod[]): Ogda[] => {
  const minOgdas = 8;
  const maxOgdas = Math.floor(pikods.length * 4);
  const numberOfOgdas = Math.floor(Math.random() * (maxOgdas - minOgdas + 1)) + minOgdas;

  const ogdaList: Ogda[] = [];

  for (let i = 1; i <= numberOfOgdas; i++) {
    const ogdaNumber = i.toString().padStart(3, '0');
    const ogdaName = ogdaNames[Math.floor(Math.random() * ogdaNames.length)];
    const ogdaId = `o${ogdaNumber}`;
    const ogda: Ogda = {
      name: ogdaName,
      id: ogdaId,
      pikod: pikods[Math.floor(Math.random() * (pikods.length - 1))].id
    };

    ogdaList.push(ogda);
  }

  return ogdaList;
};

const pikodNames: string[] = [
    'פיקוד צפון',
    'פיקוד דרום',
    'פיקוד מרכז',
    'פיקוד הים',
    'פיקוד האוויר',
    'פיקוד ירושלים',
    'פיקוד המצפור',
    'פיקוד הקרקע',
    'פיקוד חיל האוויר והחלל',
    'פיקוד חיל ההגנה',
  ];
  
  const generateRandomPikod = (): Pikod[] => {
    const numberOfPikods = 4;
  
    const pikodList: Pikod[] = [];
  
    for (let i = 1; i <= numberOfPikods; i++) {
      const pikodNumber = i.toString().padStart(3, '0');
      const pikodLocation = pikodNames[Math.floor(Math.random() * pikodNames.length)];
      const pikodId = `p${pikodNumber}`;
  
      const pikod: Pikod = {
        name: pikodLocation,
        id: pikodId,
      };
  
      pikodList.push(pikod);
    }
  
    return pikodList;
  };
  



// Example: Generate random number of hativas based on gdod amount


const randomPikods: Pikod[] = generateRandomPikod();
console.log('Random Pikods:', randomPikods);


const randomOgdas: Ogda[] = generateRandomOgda(randomPikods)
console.log('Random Ogdas:', randomOgdas)

const randomHativas: Hativa[] = generateRandomHativa(randomOgdas);
console.log('Random Hativas:', randomHativas);

const randomGdods: Gdod[] = generateRandomGdod(randomHativas);
console.log('Random Gdods:', randomGdods);



const magadalNames = [
    'תותח',
    'אקדח',
    'רקטה',
    'טנק',
    'נגמש',
    'צוללת',
    'סירת מלחמה',
    'מסוק',
    'מטוס קרב',
    'רובה',
    'קרבן',
    'פצצה',
    'רמות',
    'מטרה',
    'סלינג',
    'צינור',
    'פלמ"ח',
    'צנחן',
    'תיקול',
  ];

  
const generateRandomMagadals = (): Magadal[] => {
  const numberOfMagadals = 10;
  const magadalList: Magadal[] = [];
  for (let i = 1; i <= numberOfMagadals; i++) {
    const magadalNumber = Math.floor(Math.random() * 200).toString().padStart(3, '0');
    const magadalId = `magadal-${magadalNumber}`;
    const magadalName = magadalNames[Math.floor(Math.random() * (magadalNames.length - 1))];
    

    const magadal: Magadal = {
      name: magadalName,
      id: magadalId,
    };

    magadalList.push(magadal);
  }

  return magadalList;
};

const magadNames = [
  'איתן',
  'דביר',
  'יובל',
  'ניב',
  'חני',
  'קורן',
  'טוני',
  'דניאל',
  'שירה',
  'רוני',
  'אביב',
  'מיה',
  'אלון',
  'ליאון',
  'עידן',
  'ספיר',
  'נעם',
  'ליה',
  'אורי',
  'אילה',
  'רומי',
  'נועה',
  'מיכאל',
  'גיל',
  'אור',
  'טל',
  'אילן',
  'מיה',
  'שחר',
];


const generateRandomMagads = (magadalList: Magadal[]): Magad[] => {
const minMagads = 8;
const numOfMagads = Math.floor(Math.random() * (magadalList.length * 3 - minMagads + 1) + minMagads);
const magadList: Magad[] = [];

for (let i = 1; i <= numOfMagads; i++) {
  const magadNumber = Math.floor(Math.random() * 200).toString().padStart(3, '0');
  const magadId = `magad-${magadNumber}`;
  const magadName = magadNames[Math.floor(Math.random() * magadNames.length)];
  const randIndex = Math.floor(Math.random() * (magadalList.length - 1));
  const magad: Magad = {
    name: magadalList[randIndex].name + " " + magadName,
    id: magadId,
    magadal:  magadalList[randIndex].id
  };

  magadList.push(magad);
}

return magadList;
};


interface Mkabaz {
  name: string;
  id: string;
  magad: string;
}

const generateRandomMkabazs = (magadList: Magad[]): Mkabaz[] => {
  const minMkabazs = 12;
  const maxMkabazs = Math.floor(Math.random() * (magadList.length * 3 - minMkabazs + 1)) + minMkabazs;
  const mkabazList: Mkabaz[] = [];

  for (let i = 1; i <= maxMkabazs; i++) {
    const randomMagad = magadList[Math.floor(Math.random() * magadList.length)];
    const mkabazNumber = i;
    const mkabazId = `mkabaz-${mkabazNumber}`;
    const mkabazName = `${randomMagad.name}-${mkabazNumber}`;

    const mkabaz: Mkabaz = {
      name: mkabazName,
      id: mkabazId,
      magad: randomMagad.id
    };

    mkabazList.push(mkabaz);
  }

  return mkabazList;
};

interface Makat {
  name: string;
  id: string;
  mkabaz: string;
}

const generateRandomMakats = (mkabazList: Mkabaz[]): Makat[] => {
  const minMakats = 24;
  const maxMakats = Math.min(mkabazList.length * 3, mkabazList.length + minMakats);
  const makatList: Makat[] = [];

  for (let i = 1; i <= maxMakats; i++) {
    const randomMakatNumber = Math.floor(Math.random() * 100000).toString().padStart(6, '0');
    const randomMkabaz = mkabazList[Math.floor(Math.random() * mkabazList.length)];

    const makat: Makat = {
      name: randomMakatNumber,
      id: `makat-${randomMakatNumber}`,
      mkabaz: randomMkabaz.id,
    };

    makatList.push(makat);
  }

  return makatList;
};

const magadals = generateRandomMagadals();
const magads = generateRandomMagads(magadals);
const mkabazs = generateRandomMkabazs(magads)
const makats = generateRandomMakats(mkabazs);
console.log(makats);
