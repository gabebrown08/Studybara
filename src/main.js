import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="app">
    <header class="topbar">
      <h1>StudyBara</h1>
      <p>Your study planner, flashcards and quiz app.</p>
    </header>

    <nav class="menu">
      <button class="menu-btn" id="dashboardBtn">Dashboard</button>
      <button class="menu-btn" id="flashcardsBtn">Flashcards</button>
      <button class="menu-btn" id="quizBtn">Quiz</button>
      <button class="menu-btn" id="plannerBtn">Planner</button>
    </nav>

    <main class="content">
      <section class="card" id="mainContent">
        <h2>Dashboard</h2>
        <p>Welcome to StudyBara. This is your main study space.</p>
      </section>
    </main>
  </div>
`

const mainContent = document.querySelector('#mainContent')
// Holds the flashcards while the app is open.
const flashcards = []

document.querySelector('#dashboardBtn').addEventListener('click', () => {
  mainContent.innerHTML = `
    <h2>Dashboard</h2>
    <p>Welcome to StudyBara. This is your main study space.</p>
  `
})

document.querySelector('#flashcardsBtn').addEventListener('click', () => {
  mainContent.innerHTML = `
    <h2>Flashcards</h2>
    <p>Add a question and answer, then use your cards to revise.</p>

    <form id="flashcardForm" class="flashcard-form">
      <label for="questionInput">Question</label>
      <input
        id="questionInput"
        type="text"
        placeholder="For example: What does HTML stand for?"
        required
      >

      <label for="answerInput">Answer</label>
      <textarea
        id="answerInput"
        rows="3"
        placeholder="Enter the answer"
        required
      ></textarea>

      <button type="submit" class="menu-btn">Add flashcard</button>
      <p id="formMessage" role="status"></p>
    </form>

    <h3>Your flashcards</h3>
    <div id="flashcardList"></div>
  `

  const form = document.querySelector('#flashcardForm')
  const questionInput = document.querySelector('#questionInput')
  const answerInput = document.querySelector('#answerInput')
  const formMessage = document.querySelector('#formMessage')
  const flashcardList = document.querySelector('#flashcardList')

  // Displays the cards currently in our list.
  function displayFlashcards() {
    flashcardList.replaceChildren()

    if (flashcards.length === 0) {
      const message = document.createElement('p')
      message.textContent = 'You have not added any flashcards yet.'
      flashcardList.appendChild(message)
      return
    }

    flashcards.forEach((flashcard) => {
      const card = document.createElement('article')
      card.className = 'study-card'

      const question = document.createElement('h4')
      question.textContent = flashcard.question

      const answer = document.createElement('p')
      answer.textContent = flashcard.answer
      answer.hidden = true

      const revealButton = document.createElement('button')
      revealButton.type = 'button'
      revealButton.className = 'menu-btn'
      revealButton.textContent = 'Show answer'

      revealButton.addEventListener('click', () => {
        answer.hidden = !answer.hidden

        revealButton.textContent = answer.hidden
          ? 'Show answer'
          : 'Hide answer'
      })

      card.appendChild(question)
      card.appendChild(revealButton)
      card.appendChild(answer)

      flashcardList.appendChild(card)
    })
  }

  // Adds a new card when the form is submitted.
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const question = questionInput.value.trim()
    const answer = answerInput.value.trim()

    if (question === '' || answer === '') {
      formMessage.textContent = 'Please enter both a question and an answer.'
      return
    }

    flashcards.push({
      question: question,
      answer: answer
    })

    form.reset()
    formMessage.textContent = 'Flashcard added.'
    displayFlashcards()
    questionInput.focus()
  })

  displayFlashcards()
})

document.querySelector('#quizBtn').addEventListener('click', () => {
  mainContent.innerHTML = `
    <h2>Quiz</h2>
    <p>Test yourself with simple quizzes and track your score.</p>
  `
})

document.querySelector('#plannerBtn').addEventListener('click', () => {
  mainContent.innerHTML = `
    <h2>Planner</h2>
    <p>Keep track of tasks, deadlines and study sessions.</p>
  `
})
