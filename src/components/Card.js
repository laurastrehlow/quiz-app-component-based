import './Card.css'

export default function Card(question, answer) {
  const el = document.createElement('section')
  el.className = 'Card'
  el.innerHtml = `
<h2>${question}</h2>
<button>Show answer
</button>
<p hidden>${answer}</p>
`

  return el
}
