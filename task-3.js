//Q4
// You Have three Api Calls written as Javascript Functions named as the following
// firstApiCall, secondApiCall and thirdApiCall each one of these functions makes an async operation
// don't care about the logic written inside these function and most importantly is to NOT change the
// code these three function, if you tried to change their code i will give you 0 grade
// the required task from you to make this file print the follow sentence:
// "Knock Knock!, Who's there? Jhone Doe is here :)";
// the file currently print "Promise { <pending> }" and it seems like there is something missing to
// make this code work well, make your own change on the code to make the file print the desired sentence
// after execution.

// NOTE: DO NOT MAKE MODIFICATIONS ON THE BELOW THREE FUNCTION AND SURE DON'T REWRITE THEM
// MAKE YOUR MODIFICATIONS OUTSIDE THE SCOPE OF THESE THREE FUNCITION DEFINITION.

const firstApiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Knock Knock!";
      resolve(data);
    }, 2000);
  });
};

const secondApiCall = (dataFromFirstApi) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newData = dataFromFirstApi + ", " + "Who's there?";
      resolve(newData);
    }, 1000);
  });
};

const thirdApiCall = (dataFromSecondApi) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const thirdData = dataFromSecondApi + " " + "Jhone Doe is here :)";
      resolve(thirdData);
    });
  });
};

// =======================================================

let excut = async () => {
  const firstData = await firstApiCall();
  const secondData = await secondApiCall(firstData);
  const thirdData = await thirdApiCall(secondData);
  console.log(thirdData); 
};

excut();
