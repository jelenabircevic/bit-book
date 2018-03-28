import {PostVideo, PostText, PostImage} from '../models/TextPost'



const requestUrl = 'http://bitbookapi.azurewebsites.net/api';

class FetchData{

     createRequest(url, method) {
        let request = new Request(requestUrl + url, {
            headers: new Headers({
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            }),
            method : method
         
         });

         return request;
    }
    
    fetchPosts() {

        return fetch(this.createRequest("/Posts", "GET"))
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {

                return result.map(post => {

                    if (post.type === 'video'){
                        return new PostVideo(post);
                    } else 
                    if (post.type === 'text'){
                        return new PostText(post);
                    } else {
                        return new PostImage(post);
                    }
                    
                })
 
            })

    }
}

export  const GetData = new FetchData();
