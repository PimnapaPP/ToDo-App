import jest from 'jest-mock'

const puppeteer = require('puppeteer')
const faker = require('faker')

let tasks = {
  todo1: faker.phone.phoneNumber(),
  todo2: faker.lorem.word(),
  todo3: faker.internet.email()
}
const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 50,
    devtools: false
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : debugging_mode
}
describe('addToDo in puppeteer', () => {
  it()
  // 'addToDo works correctly',
  // async () => {
  //   //const browser = await puppeteer.launch({ headless: true })
  //   const browser = await puppeteer.launch(isDebugging())
  //   const page = await browser.newPage()

  //   await page.goto('http://localhost:3000/')
  //   await page.type('#input', tasks.todo1)
  //   await page.keyboard.down('Enter')

  //   await page.keyboard.down('Control'),
  //     await page.keyboard.press('KeyA'),
  //     await page.keyboard.up('Control'),
  //     await page.keyboard.press('Backspace')

  //   await page.type('#input', tasks.todo2)
  //   await page.keyboard.down('Enter')

  //   await page.keyboard.down('Control'),
  //     await page.keyboard.press('KeyA'),
  //     await page.keyboard.up('Control'),
  //     await page.keyboard.press('Backspace')

  //   await page.type('#input', tasks.todo3)
  //   await page.keyboard.down('Enter')

  //   await page.click('.delete-item')
  //   await page.click('.delete-item')
  //   await page.click('.delete-item')
  //   let count = await page.$$('.todo-item')
  //   expect(count.length).toBe(0)
  //   },
  //   1600000
})
