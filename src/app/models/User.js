export default class User {
    constructor (user) {
        this.name = user.name
        this.about = user.about
        this.avatarUrl = user.avatarUrl
        this.postsCount = user.postsCount
        this.commentsCount = user.commentsCount
    }
}