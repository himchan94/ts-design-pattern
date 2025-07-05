import Article from "./Article";

export default abstract class DisplayArticleTemplate {
 protected constructor(protected article: Article) {
  }

  // 파생 클래스에서 코드를 변경하지 못하도록 readonly
  public readonly displayHtml  = ():string => {
    return `
      ${this.titleHtml()}
      ${this.contentHtml()}
      ${this.footerHtml()}
    `
  }

  protected abstract titleHtml():string;
  protected abstract contentHtml():string;
  protected abstract footerHtml():string;

}