import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <section class="shell">
    <p class="eyebrow">ConsciousNext</p>
    <h1>Project Definition v0.2</h1>
    <p>
      A clean standalone Vite repository for the ConsciousNext foundation.
      The canonical definition lives in <code>docs/project-definition-v0.2.md</code>.
    </p>
  </section>
`;
