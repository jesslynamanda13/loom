export class MsSMEOwner {
  constructor(
    smeID,
    name,
    email,
    password,
    description,
    ceoName,
    smeTypeID,
    phoneNumber,
    activeStatus,
    socialMedia,
    location
  ) {
    this.smeID = smeID
    this.name = name
    this.email = email
    this.password = password
    this.description = description
    this.ceoName = ceoName
    this.smeTypeID = smeTypeID
    this.phoneNumber = phoneNumber
    this.activeStatus = activeStatus
    this.socialMedia = socialMedia
    this.location = location
  }
}

export class LoginSMEDTO {
  constructor(email, password) {
    this.email = email
    this.password = password
  }
}

export class RegisterSMEDTO {
  constructor(
    name,
    email,
    password,
    description,
    ceoName,
    smeTypeID,
    phoneNumber,
    activeStatus,
    socialMedia,
    location
  ) {
    this.name = name
    this.email = email
    this.password = password
    this.description = description
    this.ceoName = ceoName
    this.smeTypeID = smeTypeID
    this.phoneNumber = phoneNumber
    this.activeStatus = activeStatus
    this.socialMedia = socialMedia
    this.location = location
  }
}
