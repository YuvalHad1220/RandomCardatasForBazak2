import { Schema, model } from "mongoose";
import { shuffle } from "../Shuffle";

export interface Pikod {
    name: string;
    _id: string;
  }
const pikodSchema = new Schema<Pikod>({
    name: { type: String, required: true },
    _id: { type: String, required: true },
});


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
  const usedPikodNumbers = new Set<string>();
  const pikodNamesCopy = [...pikodNames];
  shuffle(pikodNamesCopy);

  for (let i = 1; i <= numberOfPikods; i++) {
    let pikodNumber: string;
    do {
      pikodNumber = i.toString().padStart(3, '0');
    }
    while (usedPikodNumbers.has(pikodNumber));
    usedPikodNumbers.add(pikodNumber);
    
    const pikodLocation = pikodNamesCopy.pop();
    const pikodId = `p${pikodNumber}`;

    const pikod: Pikod = {
      name: pikodLocation!,
      _id: pikodId,
    };

    pikodList.push(pikod);
  }

  return pikodList;
};


export const PikodModel = model("Pikod", pikodSchema);