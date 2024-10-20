export class Portfolio {
  constructor(title, description, cover_image, project_link) {
    this.title = title
    this.description = description
    this.cover_image = cover_image
    this.project_link = project_link
  }
}

export class AddPortfolioDTO {
  constructor(title, description, cover_image, project_link) {
    this.title = title
    this.description = description
    this.coverImage = cover_image
    this.projectLink = project_link
  }
}
