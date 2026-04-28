export class Usuario {
  id: number;
  name: string;
  username: string;
  avatarUrl: string;
  role: string;
  location: string;
  email: string;
  repoIds: number[];

  constructor(
    id: number,
    name: string,
    username: string,
    avatarUrl: string,
    role: string,
    location: string,
    email: string,
    repoIds: number[]
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.avatarUrl = avatarUrl;
    this.role = role;
    this.location = location;
    this.email = email;
    this.repoIds = repoIds;
  }
}
