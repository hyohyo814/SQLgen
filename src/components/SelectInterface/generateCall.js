import { faker } from '@faker-js/faker';

const generateCall = (params, count) => {
  const resArray = [];
  const array = params;

  for (let i = 0; i < count; i++) {
    const resData = {};

    if (array.indexOf('gender') !== -1) {
      const index = array.indexOf('gender');
      resData.gender = faker.person.sex();
    }
  
    if (array.indexOf('firstName') !== -1) {
      const index = array.indexOf('firstName');
      resData.firstName = faker.person.firstName(resData.gender);
    }
  
    if (array.indexOf('lastName') !== -1) {
      const index = array.indexOf('lastName');
      resData.lastName = faker.person.lastName();
    }
  
    array.forEach((value) => {
      switch (value) {
        case 'username':
          resData.username = faker.internet.userName({ firstName: resData.firstName, lastName: resData.lastName });
          break;
        case 'country':
          resData.country = faker.location.country();
          break;
        case 'occupation':
          resData.occupation = faker.person.jobTitle();
          break;
        default:
          break;
      }
    })

    console.log(resData)
  
    resArray.push(resData);
  }

  return resArray;
}

export default generateCall;