import { shuffle } from "../Shuffle";

export interface System {
    name: string;
    mashbit: "0" | "1" | "2";
  }

const possibleSystemNames = [
    'בלוטופ',
    'וויי-פיי',
    'מעיל רוח',
    'מסך',
    'סאונדבלאסט',
    'נטליגנט',
    'פלאשגורדון',
    'ספייסקופ',
    'אנרגיה גריזלי',
    'פלוטוניום',
    'סולאריס',
    'אקליפס',
    'קוואזר',
    'מקסימיליאן',
    'ספרקטרום',
    'איקספלורר',
    'אלגוריתם',
    'קווינטור',
    'זנית רכיבה',
  ];

export const generateSystems = (): System[] => {
  const systems: System[] = [];
  const numOfSystems = 6;
  shuffle(possibleSystemNames);
  for (let i = 0; i < numOfSystems ; i++) {
    const mashbitValue = i < 3 ? i < 2 ? i < 1 ? "0" : "1" : "2" : (Math.floor(Math.random() * 3)).toString() as "0" | "1" | "2";
    const system: System = {
      name: possibleSystemNames.pop()!,
      mashbit: mashbitValue,
    };

    systems.push(system);
  }

  return systems;
};