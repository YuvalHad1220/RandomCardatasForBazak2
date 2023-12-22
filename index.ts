import { generateSystems } from "./Systems/System";
import { generateSystemToMakatList } from "./Systems/SystemsToMakats";
import { generateRandomMagads } from "./magadTree/Magad";
import { generateRandomMagadals } from "./magadTree/Magadal";
import { generateRandomMakats } from "./magadTree/Makat";
import { generateRandomMkabazs } from "./magadTree/Mkabaz";
import { generateRandomGdod } from "./unitTree/Gdod";
import { generateRandomHativa } from "./unitTree/Hativa";
import { generateRandomOgda } from "./unitTree/Ogda";
import { generateRandomPikod } from "./unitTree/Pikod";

const magadals = generateRandomMagadals();
const magads = generateRandomMagads(magadals);
const mkabazs = generateRandomMkabazs(magads);
const makats = generateRandomMakats(mkabazs);

console.log(magadals, magads, mkabazs, makats)

const pikods = generateRandomPikod();
const ogdas = generateRandomOgda(pikods);
const hativas = generateRandomHativa(ogdas);
const gdods = generateRandomGdod(hativas);

console.log(pikods, ogdas, hativas, gdods)


const systems = generateSystems();
const systemsToMakats = generateSystemToMakatList(makats, systems);

console.log(systems, systemsToMakats);
