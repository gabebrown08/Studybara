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

document.querySelector('#dashboardBtn').addEventListener('click', () => {
  mainContent.innerHTML = `
    <h2>Dashboard</h2>
    <p>Welcome to StudyBara. This is your main study space.</p>
  `
})

document.querySelector('#flashcardsBtn').addEventListener('click', () => {
  mainContent.innerHTML = `
    <h2>Flashcards</h2>
    <p>Create, edit and review flashcards for your modules.</p>
  `
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
