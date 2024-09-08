import hexInfo from './util/hexInfo.json'

const getHexNumber = (file) => {
  return new Promise((file, callback) => {
    const reader = new FileReader();

    reader.onloadend = function (e) {
      const arr = new Uint8Array(e.target.result).subarray(0, 4);
      let hexNumber = "";
      for (let i = 0; i < arr.length; i++) {
        hexNumber += arr[i].toString(16).padStart(2, "0").toUpperCase();
      }
      callback(hexNumber);
    };

    reader.readAsArrayBuffer(file.slice(0, 4));
  });
};

const validateImage = (file, imageType) => {
  console.log(hexInfo[imageType])
  return hexInfo[imageType].includes(getHexNumber(file)) 
}

export default validateImage