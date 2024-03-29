function partOne() {
  let opCode = [
    1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,5,23,1,23,9,27,2,27,6,31,1,31,6,35,2,35,9,39,1,6,39,43,2,10,43,47,1,47,9,51,1,51,6,55,1,55,6,59,2,59,10,63,1,6,63,67,2,6,67,71,1,71,5,75,2,13,75,79,1,10,79,83,1,5,83,87,2,87,10,91,1,5,91,95,2,95,6,99,1,99,6,103,2,103,6,107,2,107,9,111,1,111,5,115,1,115,6,119,2,6,119,123,1,5,123,127,1,127,13,131,1,2,131,135,1,135,10,0,99,2,14,0,0
  ];
  opCode[1] = 12;
  opCode[2] = 2;
  let halt = false;
  for (let i = 0; i < opCode.length; i+=4) {
    switch (opCode[i]) {
      case 1:
      opCode[opCode[i+3]]= opCode[opCode[i+1]]+opCode[opCode[i+2]];
      break;
      case 2:
      opCode[opCode[i+3]]= opCode[opCode[i+1]]*opCode[opCode[i+2]];
      break;
      case 99:
      halt = true;
      break;
    }
    if(halt){
      break;
    }

  }
  return opCode;
}

function partTwo(){
  let found = false;
  for (let noun = 0; noun <= 99; noun++) {
    if(found){
      break;
    }
    for (let verb = 0; verb <= 99; verb++) {
      if(found){
        break;
      }
      let halt = false;
      let opCode = [
        1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,5,23,1,23,9,27,2,27,6,31,1,31,6,35,2,35,9,39,1,6,39,43,2,10,43,47,1,47,9,51,1,51,6,55,1,55,6,59,2,59,10,63,1,6,63,67,2,6,67,71,1,71,5,75,2,13,75,79,1,10,79,83,1,5,83,87,2,87,10,91,1,5,91,95,2,95,6,99,1,99,6,103,2,103,6,107,2,107,9,111,1,111,5,115,1,115,6,119,2,6,119,123,1,5,123,127,1,127,13,131,1,2,131,135,1,135,10,0,99,2,14,0,0
      ];
      opCode[1] = noun;
      opCode[2] = verb;
      for (let i = 0; i < opCode.length; i+=4) {
        switch (opCode[i]) {
          case 1:
          opCode[opCode[i+3]]= opCode[opCode[i+1]]+opCode[opCode[i+2]];
          break;
          case 2:
          opCode[opCode[i+3]]= opCode[opCode[i+1]]*opCode[opCode[i+2]];
          break;
          case 99:
          halt = true;
          break;
        }
        if(halt){
          if(opCode[0] === 19690720){
            return noun*100+verb;
          }
          break;
        }
      }
    }
  }
  return null;
}

console.log(`Part One: ${partOne()[0]}`);
console.log(`Part Two: ${partTwo()}`);
