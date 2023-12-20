import { Magadal } from "./Magadal";

export interface Magad {
    name: string;
    id: string;
    magadal: string;
  }

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

export const generateRandomMagads = (magadalList: Magadal[]): Magad[] => {
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