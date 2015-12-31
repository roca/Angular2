export default class Article {
  id: number;
  title: string;
  link: string;
  votes: number;

  constructor(id: number, title: string, link: string, votes: number = 0) {
    this.id = id;
    this.title = title;
    this.link = link;
    this.votes = votes;
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
