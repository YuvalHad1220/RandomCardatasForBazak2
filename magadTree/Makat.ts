import { Mkabaz } from "./Mkabaz";

export interface Makat {
    name: string;
    id: string;
    mkabaz: string;
  }

export const generateRandomMakats = (mkabazList: Mkabaz[]): Makat[] => {
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