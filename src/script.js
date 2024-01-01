const faqs = document.querySelectorAll('.faq');
const plus = document.querySelector('.minus');
const minus = document.querySelector('.plus');


faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    })
})

const targetTime = new Date().getTime() + 3600 * 1000 * 24 * 14;

function updateTimer() {
  const now = new Date().getTime();
  const timeDifference = targetTime - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  updateCard("days", days, "days-card");
  updateCard("hours", hours, "hours-card");
  updateCard("minutes", minutes, "minutes-card");
  updateCard("seconds", seconds, "seconds-card");
}

function updateCard(cardId, value, cardContainerId) {
  const card = document.getElementById(cardId);
  const cardContainer = document.getElementById(cardContainerId);

  if (card.innerText !== value.toString().padStart(2, '0')) {
    cardContainer.classList.add("flip-card");
    setTimeout(() => {
      cardContainer.classList.remove("flip-card");
      card.innerText = value.toString().padStart(2, '0');
    }, 250);
  }
}

// let targetTime;

// function initializeTimer() {
//   const storedTargetTime = localStorage.getItem('targetTime');

//   if (storedTargetTime) {
//     targetTime = parseInt(storedTargetTime, 10);
//   } else {
//     targetTime = new Date().getTime() + (3600 * 1000 * 24 * 16); // Initial target time (14 days)
//     localStorage.setItem('targetTime', targetTime);
//   }

//   startCountdown();
// }

// function startCountdown() {
//   setInterval(updateTimer, 1000);
// }

// function updateTimer() {
//   const now = new Date().getTime();
//   const timeDifference = targetTime - now;

//   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//   updateCard("days", days, "days-card");
//   updateCard("hours", hours, "hours-card");
//   updateCard("minutes", minutes, "minutes-card");
//   updateCard("seconds", seconds, "seconds-card");
// }

// function updateCard(cardId, value, cardContainerId) {
//   const card = document.getElementById(cardId);
//   const cardContainer = document.getElementById(cardContainerId);

//   if (card.innerText !== value.toString().padStart(2, '0')) {
//     cardContainer.classList.add("flip-card");
//     setTimeout(() => {
//       cardContainer.classList.remove("flip-card");
//       card.innerText = value.toString().padStart(2, '0');
//     }, 250);
//   }
// };

// // Initialize the timer when the page loads
// initializeTimer();











// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to update the timer
updateTimer();

const openNav = document.getElementById('open-nav-btn');
const closeNav = document.getElementById('close-nav-btn');
const nav = document.getElementById('nav');

openNav.addEventListener("click", () => {
  nav.style.display = "flex";
  closeNav.style.display = "inline-block";
  openNav.style.display = "none";
})

closeNav.addEventListener("click", () => {
  nav.style.display = "none";
  closeNav.style.display = "none";
  openNav.style.display = "inline-block";
})
nav.addEventListener("click", () => {
  nav.style.display = "none";
})


// Get the text element and the copy button
const address = document.getElementById('address');
const copyButton = document.getElementById('copyButton');
const tooltipText = document.getElementById('tooltipText');

// Add click event listener to the copy button
copyButton.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    textarea.value = address.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    tooltipText.style.display = "block";
    setTimeout(() => {
        tooltipText.style.display = 'none';
    }, 1000);
});
