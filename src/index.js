import 'dotenv/config'
import { Command } from 'commander'

const program = new Command()

console.log('Welcome to Chingu Rountable on CLI programming')
console.log('SECRET_STUFF: ', process.env.SECRET_STUFF)

// Process a request to display a random Chuck Norris fact
program 
  .command('random')
  .description('Display a random fact about Chuck Norris')
  .option('-r, --required <value>', 'A dummy required option')
  .action(async (options) => {
    console.log('Here\'s a random fact about Chuck Norris')
    try {
      const result = await fetch(process.env.JOKE_URL.concat('random'))
      const fact = await result.json()
      console.log(`\n\nDid you know ${ fact.value }`)
    } 
    catch (error) {
      console.error(`Fetch from ${ process.env.JOKE_URL } got an error: `, error)
    }
  })

// Process a request to display a random Chuck Norris fact
program 
  .command('categories')
  .description('Display categories of Chuck Norris facts')
  .action(async (options) => {
    console.log('Here the categories of Chuck Norris facts')
    try {
      const result = await fetch(process.env.JOKE_URL.concat('categories'))
      const categories = await result.json()
      categories.forEach(category => console.log(category))
    } 
    catch (error) {
      console.error(`Fetch from ${ process.env.JOKE_URL } got an error: `, error)
    }
  })

  program.parse()