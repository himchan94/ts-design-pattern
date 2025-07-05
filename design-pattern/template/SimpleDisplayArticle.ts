import DisplayArticleTemplate from "./DisplayArticleTemplate";
import Article from "./Article";

export default class SimpleDisplayArticle extends DisplayArticleTemplate {
  constructor(article: Article) {
    super(article);
  }

  protected titleHtml(): string {
    return `<h1>${this.article.getTitle()}</h1>`
    }
    protected contentHtml(): string {
      const items = this.article.getContent().map(item => {
        return `<li>${item}</li>`
      }).join("");
      return `<ul>${items}</ul>`
    }
    protected footerHtml(): string {
      return `<h3>${this.article.getFooter()}</h3>`
    }

};