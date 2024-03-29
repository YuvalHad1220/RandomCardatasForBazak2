import { Schema, model } from "mongoose";
import { Pikod } from "./Pikod";

export interface Ogda {
    name: string;
    _id: string;
    pikod: string;
}


const ogdaSchema = new Schema<Ogda>({
  name: { type: String, required: true },
  _id: { type: String, required: true },
  pikod: { type: String, required: true },
});

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
  
export const generateRandomOgda = (pikods: Pikod[]): Ogda[] => {
    const minOgdas = 8;
    const maxOgdas = Math.floor(pikods.length * 4);
    const numberOfOgdas = Math.floor(Math.random() * (maxOgdas - minOgdas + 1)) + minOgdas;
    const ogdaList: Ogda[] = [];
    const usedOgdaNumbers = new Set<string>();

    for (let i = 1; i <= numberOfOgdas; i++) {
      let ogdaNumber: string;
      do {
        ogdaNumber  = i.toString().padStart(3, '0');
      }
      while (usedOgdaNumbers.has(ogdaNumber));
      usedOgdaNumbers.add(ogdaNumber);
      const ogdaName = ogdaNames[Math.floor(Math.random() * ogdaNames.length)];
      const ogdaId = `o${ogdaNumber}`;
      const ogda: Ogda = {
        name: ogdaName,
        _id: ogdaId,
        pikod: pikods[Math.floor(Math.random() * (pikods.length - 1))]._id
      };
  
      ogdaList.push(ogda);
    }
  
    return ogdaList;
  };

export const OgdaModel = model("Ogda", ogdaSchema);
