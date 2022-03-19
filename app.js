
const profileDataArgs = process.argv.slice(2, process.argv.length);

//console.log(profileDataArgs);

//notice the lack of parentheses arougnt he 'profileDataArr' parameter?
const printProfileData = profileDataArr => {
    //for (let i = 0; i < profileDataArr.length; i++) {
      //  console.log(profileDataArr[i])
    //}

    //same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);