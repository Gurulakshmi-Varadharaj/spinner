const spinner = function (inputs) {
  let time = 100
  for (let input of inputs) {
    setTimeout(() => {
      process.stdout.write(input)
    }, time += 200);
  }
};

spinner('\r|  \r/  \r-  \r\\  \r|  \r/ \r- \r\\ \r|\n');