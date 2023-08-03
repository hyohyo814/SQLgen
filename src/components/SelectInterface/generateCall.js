import { faker } from '@faker-js/faker';

const generateCall = (params) => {
  const resData = {};
  const array = params;

  if (array.indexOf('gender') !== -1) {
    const index = array.indexOf('gender');
    resData.gender = faker.person.sex();
    array.splice(index, 1);
  }

  if (array.indexOf('firstName') !== -1) {
    const index = array.indexOf('firstName');
    resData.firstName = faker.person.firstName(resData.gender);
    array.splice(index, 1);
  }

  if (array.indexOf('lastName') !== -1) {
    const index = array.indexOf('lastName');
    resData.lastName = faker.person.lastName();
    array.splice(index, 1);
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

  return resData;
}

export default generateCall;