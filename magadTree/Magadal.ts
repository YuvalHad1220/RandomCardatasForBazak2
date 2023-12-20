export interface Magadal {
    name: string;
    id: string;
  }
  
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
  