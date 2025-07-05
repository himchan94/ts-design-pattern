import Article from "./Article";
import SimpleDisplayArticle from "./SimpleDisplayArticle";
import EditableDisplayArticle from "./EditableDisplayArticle";

const article = new Article("제목이다", ["내용1", "내용2", "내용3"], "푸터다");
const display = new SimpleDisplayArticle(article);

// 브라우저 환경에서만 실행
if (typeof window !== "undefined" && typeof document !== "undefined") {
  const contentElement = document.querySelector(".content");
  if (contentElement) {
    contentElement.innerHTML = display.displayHtml();
  }

  document.querySelector(".edit-mode")?.addEventListener("change", (e) => {
    let display;

    if ((<HTMLInputElement>e.target).checked) {
      display = new EditableDisplayArticle(article);
    } else {
      display = new SimpleDisplayArticle(article);
    }

    const contentElement = document.querySelector(".content");
    if (contentElement) {
      contentElement.innerHTML = display.displayHtml();
    }
  });
}
