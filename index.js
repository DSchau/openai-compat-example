import { createOpenAI } from '@ai-sdk/openai'
import { generateText } from 'ai'

const openai = createOpenAI({
  baseURL: "http://localhost:1234/v1",
  name: 'local-openai-model',
  compatibility: "compatible"
})

const { text } = await generateText({
  model: openai('local-openai-model'),
  prompt: 'What is your model name?'
})

console.log(text)
