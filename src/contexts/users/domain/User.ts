export default class User {
  constructor(public readonly id: string, public readonly name: string) {}
  get json() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
