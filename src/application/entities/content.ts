export class Content {
  private readonly _content: string;

  get value(): string {
    return this._content;
  }

  private validateContentlength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const validationContent = this.validateContentlength(content);

    if (!validationContent) {
      throw new Error('Content length content');
    }

    this._content = content;
  }
}
