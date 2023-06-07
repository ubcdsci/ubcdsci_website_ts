export {};

declare global {
  enum UserStatus {
    Active = "active",
    Inactive = "inactive",
  }

  enum tagTypes {
    User = "User",
  }

  enum Roles {
    Admin = "admin",
    Executive = "executive",
    User = "user",
  }
}
