export default class User {
    constructor(user) {
        this.name = user.name
        this.about = user.about
        this.aboutShort = user.aboutShort
        this.avatarUrl = user.avatarUrl
        this.lastPostDate = this.getDate(user.lastPostDate)
        this.postsCount = user.postsCount
        this.commentsCount = user.commentsCount
        this.id = user.id
    }
    getDate(date) {
        console.log(date);
        if (date) {
            console.log('date:', date.substring(0, 9));
            console.log('newDate:', new Date().toISOString());
            if (date.substring(0, 9) == (new Date().toISOString()).substring(0, 9)) {
                console.log('today');
                return date.substring(11, 16)
            } else {

                return date
            }
        } else {
            return 'no posts yet :('
        }
    }
}