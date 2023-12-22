import { Schema, model } from "mongoose";
import { shuffle } from "../Shuffle";

export interface Magadal {
    name: string;
    _id: string;
  }

  const magadalSchema = new Schema<Magadal>({
    name: { type: String, required: true },
    _id: { type: String, required: true },
});
  
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


export const generateRandomMagadals = (): Magadal[] => {
    const numberOfMagadals = 10;
    const magadalList: Magadal[] = [];
    const magadalNameCopy = [...magadalNames];
    const usedMagadalNumbers = new Set<string>();
    shuffle(magadalNameCopy);
    for (let i = 1; i <= numberOfMagadals; i++) {
      let magadalNumber: string;
      do {
        magadalNumber = Math.floor(Math.random() * 200).toString().padStart(3, '0');
      }
      while (usedMagadalNumbers.has(magadalNumber));
      usedMagadalNumbers.add(magadalNumber);
      const magadalId = `magadal-${magadalNumber}`;
      const magadalName = magadalNameCopy.pop();
      
  
      const magadal: Magadal = {
        name: magadalName!,
        _id: magadalId,
      };
  
      magadalList.push(magadal);
    }
  
    return magadalList;
  };


export const MagadalModel = model("Magadal", magadalSchema);