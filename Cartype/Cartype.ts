import mongoose, { Schema } from "mongoose";

export interface carTypeInterface{
    _id: mongoose.Types.ObjectId,
carType: string,
weight?: string,
}
const cartypeSchema = new Schema<carTypeInterface>({
    carType: { type: String },
    weight: { type: String },
});

var carType = [
    "אקסלנס",
    "פנתר",
    "טורבו-דינמיק",
    "פלאש",
    "טכנולוגיה X",
    "אופטימה",
    "גלקסיה",
    "פרימיום",
    "אנרגיה ירוקה",
    "רדיאנט"
  ];

  const generateRandomCarWeight = (): string => {
    const randomNumber = Math.floor(Math.random() * 8000 + 1000); // Generate a random number up to 8 digits
    return `${randomNumber.toString()} קג`;
};

export const generateCarType = () => {
    const carTypeArr:carTypeInterface[] = [];
    carType.forEach((type) => {
        const newtype:carTypeInterface ={
            _id: new mongoose.Types.ObjectId(),
            carType: type,
        }
        if(Math.random()>0.6 ){
            newtype.weight = generateRandomCarWeight()
        }
        carTypeArr.push(newtype);
    })
    return carTypeArr;
};

export const CartypeModel = mongoose.model<carTypeInterface>("cartype", cartypeSchema);
