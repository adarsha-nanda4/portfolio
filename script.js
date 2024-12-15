let highestZ = 1;

class Paper {
  init(paper) {
    paper.addEventListener("click", () => {
      // Set the clicked paper's z-index to 0 (move it to the back)
      paper.style.zIndex = 0;

      // Increment the z-index for all other papers to bring them forward
      document.querySelectorAll('.paper').forEach((p) => {
        if (p !== paper) {
          p.style.zIndex = parseInt(p.style.zIndex || 1) + 1;
        }
      });
    });
  }
}

const papers = Array.from(document.querySelectorAll(".paper"));

papers.forEach((paper, index) => {
  paper.style.zIndex = index + 1; // Initialize z-indexes in order
  const p = new Paper();
  p.init(paper);
});