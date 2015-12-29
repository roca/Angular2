export default class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string) {
    this.title = title;
    this.link = link;
    this.votes = 0;
  }

  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
    if (this.votes < 0) {
      this.votes = 0;
    }
  }
}
