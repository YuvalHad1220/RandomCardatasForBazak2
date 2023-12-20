export interface Pikod {
    name: string;
    id: string;
  }

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

export const generateRandomPikod = (): Pikod[] => {
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