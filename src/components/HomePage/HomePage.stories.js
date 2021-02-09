import HomePage from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
}

export const base = () =>
  HomePage([
    {
      question: 'This could be a question',
      answer: 'This could be an answer',
    },
    {
      question: 'This could be a question',
      answer: 'This could be an answer',
    },
  ]).el
