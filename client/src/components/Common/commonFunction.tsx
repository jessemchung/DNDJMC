import { FreepsCardData } from "../Ryuutama/Stage/Pieces/Common/_Types";

// sorts
export const sortCreatureArray = (unsortedArray: Array<FreepsCardData> ):Array<FreepsCardData> => {
  const sortedArray = unsortedArray.sort((a: FreepsCardData,b: FreepsCardData) => {
    if (a.initiative>b.initiative) {
      return 1;
    } else {
      return 0;
    }
  })
  return sortedArray;
}