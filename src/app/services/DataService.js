import React from 'react';

const requestUrl = 'http://bitbookapi.azurewebsites.net/swagger/docs/v1';
class FetchData extends React.Component {
fetchImagePosts() {
    return fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            
            return result;
        })
        
}
}