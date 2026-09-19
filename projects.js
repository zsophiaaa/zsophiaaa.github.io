// Single source of truth for projects. Rendered on the home page (carousel)
// and on projects.html (full grid). Order here is display order. To add a project, add an entry here.
const PROJECTS = [
  {
    meta: "Summer 2026 · Alpha School",
    title: "GRPO-Trained LLM Tutor",
    desc: "Post-trained an LLM tutor with GRPO to improve its pedagogy, rewarding learning-science-grounded teaching behaviors rather than just correct answers. Built the training setup and evals at Alpha School.",
    tags: ["RL", "GRPO", "Evals"],
  },
  {
    meta: "Jan — Apr 2026 · Kaggle",
    title: "AI Math Olympiad Progress Prize 3",
    desc: "Competed with a team of MIT freshmen. I built for the training and inference scaffolding (vLLM, Unsloth), hidden-state extraction, and parameter sweeps, and wrote the team's technical writeup.",
    tags: ["PyTorch", "vLLM", "Unsloth"],
    link: { href: "https://www.kaggle.com/competitions/ai-mathematical-olympiad-progress-prize-3/writeups/aimo-3-writeup", label: "Read my technical writeup" },
  },
  {
    meta: "Sep 2026 · Personal",
    title: "Skating Choreographer",
    desc: "A browser-based figure skating choreography tool with a 3D skater, music sync, and tracings computed from edge notation. Includes agent skills and a headless verifier so an AI can build a skatable program and prove it with numbers.",
    tags: ["JavaScript", "3D", "Agents"],
    link: { href: "https://github.com/zsophiaaa/skating-choreographer", label: "View on GitHub" },
  },
];

function renderProjects(container) {
  container.innerHTML = "";
  for (const p of PROJECTS) {
    const card = document.createElement("article");
    card.className = "card";
    const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");
    const link = p.link
      ? `<a class="card-link" href="${p.link.href}" target="_blank" rel="noopener">${p.link.label} &rarr;</a>`
      : "";
    card.innerHTML = `
      <p class="card-meta">${p.meta}</p>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${tags}</div>
      ${link}`;
    container.appendChild(card);
  }
}

// Home-page carousel: two cards visible, arrows move one card at a time.
function initCarousel(track, prevBtn, nextBtn) {
  const step = () => {
    const card = track.querySelector(".card");
    return card ? card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0) : 1;
  };
  const index = () => Math.round(track.scrollLeft / step());
  const goTo = (i) => track.scrollTo({ left: i * step(), behavior: "smooth" });
  const update = () => {
    prevBtn.disabled = track.scrollLeft <= 4;
    nextBtn.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  };
  prevBtn.addEventListener("click", () => goTo(index() - 1));
  nextBtn.addEventListener("click", () => goTo(index() + 1));
  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}
