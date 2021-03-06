const faker = require('faker')
const fs = require('fs')
const path = require('path')

const data = {}

function randomGender() {
  const rand = Math.round(Math.random())
  return rand ? 'Male' : 'Female'
}

function randomAge() {
  return Math.floor(Math.random() * 101)
}

function randomType() {
  const rand = Math.floor(Math.random() * 5)
  if (rand <= 3) {
    return 'Developer'
  } else {
    return 'Non Profit'
  }
}

function randomDate() {
  const rand = Math.floor(Math.random() * 7)
  if (rand <= 3) {
    return faker.date.recent()
  }
  if (rand <= 5) {
    return faker.date.past()
  } else {
    return faker.date.future()
  }
}

function userGenerator(num) {
  let id = 1
  let users = []
  for (let i = 0; i < num; i++) {
    users.push({
      id,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      joinDate: randomDate(),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      sex: randomGender(),
      age: randomAge(),
      type: randomType()
    })
    id += 1
  }
  return users
}

data.users = userGenerator(1000)

fs.writeFileSync(path.resolve('server', 'data.json'), JSON.stringify(data))
