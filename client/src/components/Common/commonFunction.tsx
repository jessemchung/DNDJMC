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

export const downloadJSON = (data: Array<Record<string, unknown>>, name: string): void => {
  let jsonContent = "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
  var link = document.createElement("a");
  link.setAttribute("href", jsonContent);
  link.setAttribute("download", `${name}.json`); document.body.appendChild(link);
  link.click(); 

}


export function uploadJSON<T>(item: FileList, callback: (data: T) => void) {
  console.log("uploading")
  const files = item;
  if (files && files.length > 0) {
    const file = files[0];

    // Check if the file is a CSV
    if (file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const text = e.target?.result as string;
          callback(JSON.parse(text));

        } catch (error) {
          console.error("Failed to parse json")
        }

      };

      reader.readAsText(file);  // Read file as text
    } else {
      console.error("Uploaded file is not a JSON");
    }
  }

}