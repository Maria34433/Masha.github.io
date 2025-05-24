document.addEventListener("DOMContentLoaded", () => {
    const memes = document.querySelectorAll(".meme");
    memes.forEach((meme, i) => {
      setTimeout(() => {
        meme.classList.remove("hidden");
        meme.classList.add("show");
      }, 500 + i * 500);
    });
  
    const status = document.getElementById("status");
    const statuses = [
      "📖 'Живу, чтобы кодить и читать!'",
      "👾 'CSS — это магия'",
      "🌈 'Хочу сайт со своей информацией'",
      "🔥 'Пишу стили, как могу'",
    ];
    let index = 0;
  
    status.addEventListener("click", () => {
      index = (index + 1) % statuses.length;
      status.textContent = statuses[index];
    });
  
    // 💡 Модальное окно
    const interestInfo = {
      "Школа": "✍ Обожаю своих учителей, друзей и конечно же уроки, которые дает нам любимая школа🙆",
      "Книги": "Моё вдохновение — книги!📙 Читаю фантастику и детективы. Не могу читать по 1 книге, поэтому почти всегда выбираю серию)💗",
      "Семья и друзья": "Обожаю друзей и родных, которые всегда меня поддержат)💗Обожаю друзей и родных, которые всегда меня поддержат)💗 <<Сегодня хозяйка снова бегала, я не одобряю>> - думает про меня моя собака, которая тоже является нашим членом семьи. А не одобряет, потому что без нее. 🔥",
      "Занятия": "Хожу на множество кружков, которые мне очень нравятся.📚 Один из них - веб разработка, с помощью которой я создала этот сайт.💻"
    };
  
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const closeModal = document.getElementById("closeModal");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.textContent.trim();
        modalTitle.textContent = title;
        modalDesc.textContent = interestInfo[title] || "Информация скоро появится.";
        modal.style.display = "flex";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
});
  

  const factCards = document.querySelectorAll('.fact-card');
const resultDiv = document.getElementById('result');

factCards.forEach(card => {
  const button = card.querySelector('.guess-btn');
  
  button.addEventListener('click', () => {
    const isTruth = card.getAttribute('data-truth') === 'true';
    const userGuess = prompt('Это правда или ложь? (ответьте "правда" или "ложь")').toLowerCase();
    
    if ((userGuess === 'правда' && isTruth) || (userGuess === 'ложь' && !isTruth)) {
      resultDiv.textContent = 'Верно! ✅';
      resultDiv.className = 'result-visible correct';
    } else {
      resultDiv.textContent = isTruth 
        ? 'Неверно! Это была правда. ✅' 
        : 'Неверно! Это была ложь. ❌';
      resultDiv.className = 'result-visible incorrect';
    }
    
    setTimeout(() => {
      resultDiv.className = 'result-hidden';
    }, 3000);
  });
});