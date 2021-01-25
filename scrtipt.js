const smallCups = document.querySelectorAll('.cup.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => highlightCups(index));
});

function highlightCups(index) {
  if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling?.classList.contains('full')) {
    index--;
  }
  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.opacity = 0;
    percentage.style.height = 0;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  } else {
    percentage.style.opacity = 1;
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.opacity = 0;
    remained.style.height = 0;
    liters.innerText = `${((totalCups - fullCups) / totalCups) * 2} L`;
  } else {
    remained.style.opacity = 1;
    remained.style.height = `${((totalCups - fullCups) / totalCups) * 330}px`;
    liters.innerText = `${((totalCups - fullCups) / totalCups) * 2} L`;
  }
}
