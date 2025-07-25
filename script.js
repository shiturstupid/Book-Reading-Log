
console.log("JavaScript is connected!");

const readerName = "Zoha";
const currentMonth = "July";
console.log(`📚 Reader: ${readerName}`);
console.log(`🗓️ Month: ${currentMonth}`);

const titles = ["Little Nightmares", "Dreamcore Diaries", "CSS Sorcery"];
const totalPages = [300, 220, 450];
const pagesRead = [150, 80, 450];


titles.forEach((title, i) => {
  console.log(`📘 ${title}: ${pagesRead[i]}/${totalPages[i]} pages`);
});


function calculateProgress(pagesRead, totalPages) {
  return Math.round((pagesRead / totalPages) * 100);
}

function getReadingStatus(percent) {
  if (percent === 100) return "✅ Finished";
  if (percent >= 50) return "📖 In Progress";
  return "🌱 Just Started";
}

function printBookSummary(title, pagesRead, totalPages) {
  const progress = calculateProgress(pagesRead, totalPages);
  const status = getReadingStatus(progress);
  console.log(`🔹 ${title}: ${pagesRead}/${totalPages} pages read — ${status}`);
}


for (let i = 0; i < titles.length; i++) {
  printBookSummary(titles[i], pagesRead[i], totalPages[i]);
}


function totalPagesRead(pagesArray) {
  return pagesArray.reduce((sum, pages) => sum + pages, 0);
}

function findBookWithMostPagesLeft(titlesArray, pagesReadArray, totalPagesArray) {
  let maxLeft = -1;
  let book = "";
  for (let i = 0; i < titlesArray.length; i++) {
    const left = totalPagesArray[i] - pagesReadArray[i];
    if (left > maxLeft) {
      maxLeft = left;
      book = titlesArray[i];
    }
  }
  return book;
}

function printReadingSummary(name, month, pagesArray) {
  const totalRead = totalPagesRead(pagesArray);
  console.log(`📊 ${name}'s reading progress for ${month}: ${totalRead} pages read.`);
}


printReadingSummary(readerName, currentMonth, pagesRead);
console.log(`📌 Book with most pages left: ${findBookWithMostPagesLeft(titles, pagesRead, totalPages)}`);
