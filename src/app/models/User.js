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
        if (date) {
            date = date + 'z';
            date = new Date(date);
            date = date + 'z';
            date = new Date(date);
            if (date.toISOString().substring(0, 9) == (new Date().toISOString()).substring(0, 9)) {
                date = JSON.stringify(date);
                return date.substring(12, 17)
            } else {

                return date
            }
        } else {
            return 'no posts yet :('
        }
    }
}