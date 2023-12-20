import { Pikod } from "./Pikod";

export interface Ogda {
    name: string;
    id: string;
    pikod: string;
}

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