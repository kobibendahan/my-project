// Quiz Questions
const quizQuestions = [
    {
        question: "Approximately how long ago is the earliest archaeological evidence of rope?",
        options: [
            "5,000 years ago",
            "15,000 years ago",
            "25,000-30,000 years ago",
            "500 years ago"
        ],
        correct: 2
    },
    {
        question: "Which ancient civilization used the 'Quipu' system with knots?",
        options: [
            "Ancient Egypt",
            "The Inca",
            "Ancient China",
            "Ancient Rome"
        ],
        correct: 1
    },
    {
        question: "What material were ropes made from in ancient Egypt?",
        options: [
            "Hemp and canvas",
            "Reed branches and papyrus",
            "Steel and iron",
            "Silk and wool"
        ],
        correct: 1
    },
    {
        question: "In what year was steel rope invented by Wilhelm Albert?",
        options: [
            "1750",
            "1834",
            "1920",
            "1976"
        ],
        correct: 1
    },
    {
        question: "Which rope material has the highest strength-to-weight ratio?",
        options: [
            "Manila (Hemp)",
            "Cotton",
            "Nylon",
            "UHMWPE (Dyneema)"
        ],
        correct: 3
    },
    {
        question: "What is the primary use of a Prussik knot?",
        options: [
            "Connecting two ropes of different sizes",
            "Tying a quick temporary fastening",
            "Climbing and rescue operations",
            "Nautical anchoring"
        ],
        correct: 2
    },
    {
        question: "Which knot creates a fixed loop that won't slip under load?",
        options: [
            "Square Knot",
            "Bowline",
            "Clove Hitch",
            "Sheet Bend"
        ],
        correct: 1
    },
    {
        question: "What is the main disadvantage of a Square Knot?",
        options: [
            "It's too difficult to tie",
            "It's unreliable under load and can slip",
            "It requires special tools",
            "It's only for maritime use"
        ],
        correct: 1
    },
    {
        question: "Which material in ropes is most resistant to UV radiation?",
        options: [
            "Manila (Hemp)",
            "Cotton",
            "Polyester",
            "Polypropylene"
        ],
        correct: 2
    },
    {
        question: "What type of rope is typically used for fall arrest in climbing?",
        options: [
            "Static rope",
            "Dynamic rope",
            "Static lines",
            "Cotton cord"
        ],
        correct: 1
    }
];

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId + 'Modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId + 'Modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Quiz Functions
function openQuizModal() {
    const modal = document.getElementById('quizModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    loadQuiz();
}

function closeQuizModal() {
    const modal = document.getElementById('quizModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function loadQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';

    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';

        const questionTitle = document.createElement('h4');
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);

        q.options.forEach((option, optIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'quiz-option';

            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `question${index}`;
            radioInput.value = optIndex;
            radioInput.id = `q${index}a${optIndex}`;

            const label = document.createElement('label');
            label.htmlFor = `q${index}a${optIndex}`;
            label.textContent = option;

            optionDiv.appendChild(radioInput);
            optionDiv.appendChild(label);
            questionDiv.appendChild(optionDiv);
        });

        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;
    const totalQuestions = quizQuestions.length;

    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });

    const percentage = Math.round((score / totalQuestions) * 100);
    const quizContainer = document.getElementById('quizContainer');

    let message = '';
    if (percentage === 100) {
        message = "Perfect! You're a rope and knots expert! 🎉";
    } else if (percentage >= 80) {
        message = "Excellent! You know a lot about ropes and knots! 👏";
    } else if (percentage >= 60) {
        message = "Good job! You have solid knowledge about ropes and knots! 📚";
    } else if (percentage >= 40) {
        message = "Not bad! Keep learning about ropes and knots! 📖";
    } else {
        message = "Keep studying! There's more to learn about ropes and knots! 🎓";
    }

    quizContainer.innerHTML = `
        <div class="quiz-result">
            <h3>Quiz Results</h3>
            <p>You scored: <strong>${score}/${totalQuestions}</strong></p>
            <p style="font-size: 2rem; color: var(--primary-blue); margin-top: 1rem;"><strong>${percentage}%</strong></p>
            <p style="margin-top: 1rem;">${message}</p>
            <button class="btn" onclick="openQuizModal()" style="margin-top: 1rem;">Try Again</button>
        </div>
    `;
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#quiz') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Quiz button navigation
document.getElementById('quizBtn').addEventListener('click', function(e) {
    e.preventDefault();
    openQuizModal();
});
