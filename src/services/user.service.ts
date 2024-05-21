import { UserDAO } from "../dao/user.dao";


export class UserService {

    static async getUser() {
        console.log('SERVICE: Starting getUser');

        const user = await UserDAO.getUser();
        console.log('user: ', user);

        console.log('SERVICE: Ending getUser');
        return user;
    }

}