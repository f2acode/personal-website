/* eslint-disable @typescript-eslint/no-var-requires */

const OpenAI = require('openai')
const data = require('../data/resume-en.json')
const fs = require('fs')

const message = `Considering the following JSON, group the skills\
 into the following categories:\
 Programming Languages, Data, Cloud/DevOps, Frontend, Backend and Soft Skills.\
 Choose only one classification for each skill considering where it fits best,\
 without duplicating between categories.\
 You should return the skills grouped by category in the following format:\
 {"categories": [{ "category": [], "skills": [] }]}:\n\n ${JSON.stringify(data.skills)}`

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: message }],
    model: 'gpt-3.5-turbo',
  })

  fs.writeFile(
    `${__dirname}/../data/categorized-skills.json`,
    completion.choices[0].message.content,
    (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('File written successfully!')
      }
    },
  )
}

main()
