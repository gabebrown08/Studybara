import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="app">
    <header class="topbar">
      <h1>StudyBara</h1>
      <p>Your study planner, flashcards and quiz app.</p>
    </header>

    <nav class="menu">
      <button class="menu-btn">Dashboard</button>
      <button class="menu-btn">Flashcards</button>
      <button class="menu-btn">Quiz</button>
      <button class="menu-btn">Planner</button>
    </nav>

    <main class="content">
      <section class="card">
        <h2>Dashboard</h2>
        <p>Welcome to StudyBara. This is the starting point for your study app.</p>
      </section>

      <section class="card">
        <h2>Flashcards</h2>
        <p>Create and review flashcards for your modules.</p>
      </section>

      <section class="card">
        <h2>Quiz</h2>
        <p>Test yourself with simple quizzes based on your study topics.</p>
      </section>

      <section class="card">
        <h2>Planner</h2>
        <p>Keep track of tasks, deadlines and study sessions.</p>
      </section>
    </main>
  </div>
`
