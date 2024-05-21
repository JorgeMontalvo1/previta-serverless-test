

export class UserDAO {

    static async getUser() {
        console.log('DAO: Starting getUser');

        const user = 'Jorge M'
        console.log('user: ', user);

        console.log('DAO: Ending getUser');
        return user;
    }

}