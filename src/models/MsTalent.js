export class MsTalent {
  constructor(
    talentID,
    fullName,
    email,
    password,
    bio,
    phoneNumber,
    profilePicture,
    activeStatus,
    skills,
    avgRating,
    cv,
    portfolio,
    location
  ) {
    this.talentID = talentID
    this.fullName = fullName
    this.email = email
    this.password = password
    this.bio = bio
    this.phoneNumber = phoneNumber
    this.profilePicture = profilePicture
    this.activeStatus = activeStatus
    this.skills = skills
    this.avgRating = avgRating
    this.cv = cv
    this.portfolio = portfolio
    this.location = location
  }
}

export class LoginTalentDTO {
  constructor(email, password) {
    this.email = email
    this.password = password
  }
}

export class RegisterTalentDTO {
  constructor(fullName, email, password) {
    this.fullName = fullName
    this.email = email
    this.password = password
  }
}

export class EditDisplayProfileTalentDTO {
  constructor(fullName, bio, location) {
    this.fullName = fullName
    this.bio = bio
    this.location = location
  }
}

export class EditPersonalInformationTalentDTO {
  constructor(fullName, email, phoneNumber) {
    this.fullName = fullName
    this.email = email
    this.phoneNumber = phoneNumber
  }
}

export class EditCVTalentDTO {
  constructor(cv) {
    this.cv = cv
  }
}

export class EditPortfolioTalentDTO {
  constructor(portfolio) {
    this.portfolio = portfolio
  }
}
