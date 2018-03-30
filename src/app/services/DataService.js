
import React from 'react';
import axios from 'axios';
import {PostVideo, PostText, PostImage} from '../models/TextPost'
import User from '../models/User'
import Comment from '../models/Comment';


const requestUrl = 'http://bitbookapi.azurewebsites.net/api';
class FetchData {
    async getUsers() {
        const users = await axios({
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            url: `${requestUrl}/users`,
            method: 'get',
        })
        console.log(users.data);
        return users.data.map(e => new User(e))
    }
    
    async getUser(id) {
        const user = await axios({
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            url: `${requestUrl}/users/${id}`,
            method: 'get',
        })
        console.log('user iz servisa', user.data);
        return new User(user.data)
    }

    createRequest(url, method) {
        let request = new Request(requestUrl + url, {
            headers: new Headers({
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            }),
            method: method


        });

        return request;
    }

    fetchPosts() {

        return fetch(this.createRequest("/Posts", "GET"))
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {

                result.splice(20);
                return result.map(post => {

                    if (post.type === 'video') {
                        return new PostVideo(post);
                    } else
                        if (post.type === 'text') {
                            return new PostText(post);
                        } else {
                            return new PostImage(post);
                        }

                })

            })

    }


    fetchComments(id) {

        return fetch(this.createRequest("/Comments/?postId=" + id, "GET"))
            .then(response => {
                return response.json();
            })
            .then(result => {

                return result.map(comment => {
                    return new Comment(comment);

                })

            })

    }

    fetchVideoPost(id) {

        return fetch(this.createRequest(`/VideoPosts/${id}`, "GET"))
            .then(function (response) {
                return response.json();
            })
            .then(function (post) {

                return new PostVideo(post);
            })

    }

    fetchTextPost(id) {

        return fetch(this.createRequest(`/TextPosts/${id}`, "GET"))
            .then(function (response) {
                return response.json();
            })
            .then(function (post) {

                return new PostText(post);
            })

    }

    fetchImagePost(id) {

        return fetch(this.createRequest('/ImagePosts/'+id, "GET"))
            .then((response) =>{
                return response.json();
            })
            .then((post)=> {

                return new PostImage(post);
            })

    }

    
}

export const getData = new FetchData();

class PostData {
    async postText(data) {
        const post = await axios({
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            url: `${requestUrl}/TextPosts`,
            method: 'post',
            data: {
                text: data
            }
        });
        return await getData.fetchPosts();

    }

    async postImage(data) {
        return await axios({
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            url: `${requestUrl}/ImagePosts`,
            method: 'post',
            data: {
                imageUrl: data
            }
        })
    }


    async postVideo(data) {
        return await axios({
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            url: `${requestUrl}/VideoPosts`,
            method: 'post',
            data: {
                videoUrl: data
            }
        });
    }

    async postComment(data, id) {
        return await axios({
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            url: `${requestUrl + '/Comments'}/TextPosts`,
            method: 'post',
            data: {
                body: data,
                postId: id,
                // 664
            }
        });
    }


}

export const postData = new PostData();

class DeleteData {

    deletePost(id) {
        return axios({
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            url: `${requestUrl}/Posts/${id}`,
            method: 'delete',
           
        });
    }
    // deleteComments(id) {
    //     return axios({
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Key': 'bitbook',
    //             'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
    //         },
    //         url: `${requestUrl}/Comments/${id}`,
    //         method: 'delete',
           
    //     });
    // }
 
 }
 
 export const deleteData = new DeleteData();