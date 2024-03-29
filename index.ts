import mongoose, { Document, Model } from "mongoose";
import { Magad, MagadModel, generateRandomMagads } from "./magadTree/Magad";
import { Magadal, MagadalModel, generateRandomMagadals } from "./magadTree/Magadal";
import { Makat, MakatModel, generateRandomMakats } from "./magadTree/Makat";
import { Mkabaz, MkabazModel, generateRandomMkabazs } from "./magadTree/Mkabaz";
import { Gdod, GdodModel, generateRandomGdod } from "./unitTree/Gdod";
import { Hativa, HativaModel, generateRandomHativa } from "./unitTree/Hativa";
import { Ogda, OgdaModel, generateRandomOgda } from "./unitTree/Ogda";
import { Pikod, PikodModel, generateRandomPikod } from "./unitTree/Pikod";
import { CardataModel, generateRandomCardatas } from "./Cardata/Cardata";
import { CartypeModel, generateCarType } from "./Cartype/Cartype";

const magadals = generateRandomMagadals();
const magads = generateRandomMagads(magadals);
const mkabazs = generateRandomMkabazs(magads);
const makats = generateRandomMakats(mkabazs);

console.log("created magad tree")

// console.log(magadals, magads, mkabazs, makats)

const pikods = generateRandomPikod();
const ogdas = generateRandomOgda(pikods);
const hativas = generateRandomHativa(ogdas);
const gdods = generateRandomGdod(hativas);
console.log("created unit tree")

// console.log(pikods, ogdas, hativas, gdods)

const carTypes = generateCarType()
// console.log(systems, systemsToMakats);

const cardatas = generateRandomCardatas(500, makats, gdods, carTypes);
console.log("created cardatas. preparing to insert..")

// Define a generic interface for documents
interface InsertDocument<T> {
  model: Model<T>;
  docs: T[];
}

// Function to insert documents of a specific type
const insertDocuments = async (data: InsertDocument<any>): Promise<void> => {
  try {
      await data.model.insertMany(data.docs);
      console.log(`${data.model.modelName} documents inserted successfully.`);
  } catch (error) {
      console.error(`Error inserting ${data.model.modelName} documents:`, error);
  }
};

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/TowingLogDB').then(async () => {
    // Define an array of insert operations
    const insertOperations = [
        { model: MagadalModel, docs: magadals },
        { model: MagadModel, docs: magads },
        { model: MkabazModel, docs: mkabazs },
        { model: MakatModel, docs: makats },
        { model: PikodModel, docs: pikods },
        { model: OgdaModel, docs: ogdas },
        { model: HativaModel, docs: hativas },
        { model: GdodModel, docs: gdods },
        { model: CartypeModel, docs: carTypes },
        { model: CardataModel, docs: cardatas}
    ];


    // Use Promise.all to execute all insert operations concurrently
    await Promise.all(insertOperations.map(insertDocuments));
}).then(() => mongoose.connection.close());