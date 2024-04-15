/* eslint-disable @typescript-eslint/no-var-requires */

const OpenAI = require('openai')
const data = require('../messages/en/resume.json')
const fs = require('fs')

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function main() {
  const message = `Considering the following JSON, group the skills into the following categories: Programming Languages, Data, Cloud/DevOps, Frontend, Backend and Soft Skills. Choose only one classification for each skill considering where it fits best, try to be precise avoiding classifying languages as frameworks, libraries or context aware (front end, backend, etc), just if you don' have another option. Don't duplicate between categories. You should return the skills grouped by category in the following format: {"categories": [{ "category": [], "skills": [] }]}:\n\n ${JSON.stringify(data.skills)}`

  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: message }],
    model: 'gpt-3.5-turbo',
  })

  fs.writeFile(
    `${__dirname}/../messages/en/categorized-skills.json`,
    completion.choices[0].message.content,
    (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('File written successfully!')
      }
    },
  )

  const messageWithTranslate = `Translate the category keys to Portuguese, except Frontend and Backend. Also translate the skills inside Soft Skills:\n\n ${completion.choices[0].message.content}`

  const completionWithTranslate = await openai.chat.completions.create({
    messages: [{ role: 'user', content: messageWithTranslate }],
    model: 'gpt-3.5-turbo',
  })

  fs.writeFile(
    `${__dirname}/../messages/pt-BR/categorized-skills.json`,
    completionWithTranslate.choices[0].message.content,
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
