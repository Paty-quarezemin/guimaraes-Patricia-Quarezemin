import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  async getAllUser(): Promise<any> {
    
    const result = await UserDatabase.connection
    .select('*').from(UserDatabase.TABLE_NAME)

    return result
  }
}
