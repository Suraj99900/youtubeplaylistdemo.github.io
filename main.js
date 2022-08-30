
var nextToken = "";
var prevToken = "";

var store_data_image = new Array();
var store_data_title = new Array();
var store_data_videoId = new Array();
var store_data_date = new Array();
var store_data_description = new Array();

var channelTitle;

let channelTitle_id = document.getElementById('channel_name');

// right_box content
let main_if = document.getElementById('main_if');
let title = document.getElementById('title');
let date = document.getElementById('date');
let description = document.getElementById('description');

let img_click;
// left_box content

let left = document.getElementById('left');

// button id
let btn_prev = document.getElementById('btn_prev');
let btn_next = document.getElementById('btn_next');


let i = 0;

let items_len;
var h4;
var img;






function Json_data(params) {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR&key=AIzaSyC3GQ8vEZLJr2UW8FloXX4F5y3QALherMo&' + nextToken, true);



    xhr.onload = () => {

        // gettting id and class by DOM


        you_data = JSON.parse(xhr.responseText)

        // console.log(you_data);
        nextToken = "pageToken=" + you_data.nextPageToken;
        // prevToken = "pageToken=" + you_data.prevPageToken;
        console.log(you_data.nextPageToken);
        items_len = you_data.items.length;
        for (item in you_data.items) {

            var items = you_data.items[item];





            for (snippet in items) {
                if (snippet == "snippet") {

                    var snippet_title = items[snippet].title;

                    var snippet_thumbnails = items[snippet].thumbnails.high.url;

                    var snippet_videoId = items[snippet].resourceId.videoId;

                    var snippet_publishedAt = items[snippet].publishedAt;
                    var snippet_description = items[snippet].description;

                    channelTitle = items[snippet].channelTitle;



                    // console.log(snippet_title);
                    store_data_title.push(snippet_title);
                    store_data_image.push(snippet_thumbnails);
                    store_data_videoId.push(snippet_videoId);
                    store_data_date.push(snippet_publishedAt);

                    store_data_description.push(snippet_description);

                    // innserting channel title

                    channelTitle_id.innerHTML = channelTitle

                    // right_box video and title enter
                    for (let j = 0; j <= 0; j++) {
                        main_if.src = "https://www.youtube.com/embed/" + store_data_videoId[j];
                        // console.log(store_data_videoId[j]);
                        title.innerText = store_data_title[j];
                        date.innerText = store_data_date[j];

                        description.innerText = store_data_description[j];
                    }




                }
            }

            h4 = document.createElement('h4');
            img = document.createElement('img');
            div = document.createElement('div');



            // append image to left box

            img.setAttribute("class", store_data_videoId[i] + " img_data " + " " + store_data_date[i]);
            img.setAttribute("id", "i" + i);
            img.src = store_data_image[i];
            left.appendChild(img);

            // append h4 to left box
            h4.setAttribute('class', 'title_h4');
            h4.innerText = store_data_title[i];
            if (window.innerWidth <= 747) {
                left.appendChild(h4);
            }



            // console.log(store_data_image[i]);



            i++;

            // console.log(new_url);

        }



    }

    i = 0;

    xhr.send();

    setTimeout(data, 2000);

}

// json next data
function next_json() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR&key=AIzaSyC3GQ8vEZLJr2UW8FloXX4F5y3QALherMo&' + nextToken, true);



    xhr.onload = () => {

        you_data = JSON.parse(xhr.responseText)

        // console.log(you_data);
        if (you_data.nextPageToken) {
            nextToken = "pageToken=" + you_data.nextPageToken;
        } if (you_data.prevPageToken) {
            prevToken = "pageToken=" + you_data.prevPageToken;
        }


        console.log(nextToken);
        console.log(prevToken);
        items_len = you_data.items.length;
        for (item in you_data.items) {

            var items = you_data.items[item];





            for (snippet in items) {
                if (snippet == "snippet") {

                    var snippet_title = items[snippet].title;

                    var snippet_thumbnails = items[snippet].thumbnails.high.url;

                    var snippet_videoId = items[snippet].resourceId.videoId;

                    var snippet_publishedAt = items[snippet].publishedAt;
                    var snippet_description = items[snippet].description;

                    channelTitle = items[snippet].channelTitle;



                    // console.log(snippet_title);
                    store_data_title.push(snippet_title);
                    store_data_image.push(snippet_thumbnails);
                    store_data_videoId.push(snippet_videoId);
                    store_data_date.push(snippet_publishedAt);

                    store_data_description.push(snippet_description);

                    // innserting channel title

                    channelTitle_id.innerHTML = channelTitle

                    // right_box video and title enter
                    for (let j = 0; j <= 0; j++) {
                        main_if.src = "https://www.youtube.com/embed/" + store_data_videoId[j];
                        // console.log(store_data_videoId[j]);
                        title.innerText = store_data_title[j];
                        date.innerText = store_data_date[j];

                        description.innerText = store_data_description[j];
                    }




                }
            }

            h4 = document.createElement('h4');
            img = document.createElement('img');
            div = document.createElement('div');



            // append image to left box

            img.setAttribute("class", store_data_videoId[i] + " img_data " + " " + store_data_date[i]);
            img.setAttribute("id", "i" + i);
            img.src = store_data_image[i];
            left.appendChild(img);

            // append h4 to left box
            h4.setAttribute('class', 'title_h4');
            h4.innerText = store_data_title[i];
            if (window.innerWidth <= 747) {
                left.appendChild(h4);
            }


            // console.log(store_data_image[i]);



            i++;

            // console.log(new_url);

        }

    }

    i = 0;

    xhr.send();
    setTimeout(data, 2000);
}


// Json prv data
function prv_json() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR&key=AIzaSyC3GQ8vEZLJr2UW8FloXX4F5y3QALherMo&' + prevToken, true);



    xhr.onload = () => {

        you_data = JSON.parse(xhr.responseText)

        // console.log(you_data);
        if (you_data.nextPageToken) {
            nextToken = "pageToken=" + you_data.nextPageToken;
        } if (you_data.prevPageToken) {
            prevToken = "pageToken=" + you_data.prevPageToken;
        }
        console.log(nextToken);
        console.log(prevToken);
        items_len = you_data.items.length;
        for (item in you_data.items) {

            var items = you_data.items[item];





            for (snippet in items) {
                if (snippet == "snippet") {

                    var snippet_title = items[snippet].title;

                    var snippet_thumbnails = items[snippet].thumbnails.high.url;

                    var snippet_videoId = items[snippet].resourceId.videoId;

                    var snippet_publishedAt = items[snippet].publishedAt;
                    var snippet_description = items[snippet].description;

                    channelTitle = items[snippet].channelTitle;



                    // console.log(snippet_title);
                    store_data_title.push(snippet_title);
                    store_data_image.push(snippet_thumbnails);
                    store_data_videoId.push(snippet_videoId);
                    store_data_date.push(snippet_publishedAt);

                    store_data_description.push(snippet_description);

                    // innserting channel title

                    channelTitle_id.innerHTML = channelTitle

                    // right_box video and title enter
                    for (let j = 0; j <= 0; j++) {
                        main_if.src = "https://www.youtube.com/embed/" + store_data_videoId[j];
                        // console.log(store_data_videoId[j]);
                        title.innerText = store_data_title[j];
                        date.innerText = store_data_date[j];

                        description.innerText = store_data_description[j];
                    }




                }
            }

            h4 = document.createElement('h4');
            img = document.createElement('img');
            div = document.createElement('div');



            // append image to left box

            img.setAttribute("class", store_data_videoId[i] + " img_data " + " " + store_data_date[i]);
            img.setAttribute("id", "i" + i);
            img.src = store_data_image[i];
            left.appendChild(img);

            // append h4 to left box
            h4.setAttribute('class', 'title_h4');
            h4.innerText = store_data_title[i];
            if (window.innerWidth <= 747) {
                left.appendChild(h4);
            }


            // console.log(store_data_image[i]);



            i++;

            // console.log(new_url);

        }

    }

    i = 0;

    xhr.send();

    setTimeout(data, 2000);
}







function data() {

    let img_data = document.querySelectorAll(".img_data");
    let h4_rm = document.querySelectorAll(".title_h4");
    let i_value;
    console.log("working");
    img_data.forEach(item => {
        console.log("working");
        item.addEventListener('click', (e) => {

            console.log(item.classList);
            for (let x = 0; x < store_data_videoId.length; x++) {
                if ((item.classList[0] == store_data_videoId[x]) && (item.classList[2] == store_data_date[x])) {
                    main_if.src = "https://www.youtube.com/embed/" + store_data_videoId[x];
                    window.location = "#main_if";

                    date.innerText = store_data_date[x];
                    i_value = x;

                }
            }
            for (let y = 0; y < store_data_videoId.length; y++) {

                if (i_value == y) {
                    title.innerText = store_data_title[y];
                    description.innerText = store_data_description[y];
                }
            }


        })

    })



}

function remove_item() {
    let img_data = document.querySelectorAll(".img_data");
    let h4_rm = document.querySelectorAll(".title_h4");

    h4_rm.forEach(element => {
        element.remove();
    });

    img_data.forEach(element => {
        element.remove();
    });

    for (let z = 0; z < items_len; z++) {
        store_data_date.pop([z]);
        store_data_description.pop([z]);
        store_data_image.pop([z]);
        store_data_title.pop([z]);
        store_data_videoId.pop([z]);

    }

}




// call to the function 
Json_data();
if (nextToken != undefined) {
    btn_next.addEventListener('click', () => {
        remove_item();
        next_json();

    });
    // console.log("next");
}
if (prevToken != undefined) {
    // console.log('prev');
    btn_prev.addEventListener('click', () => {
        remove_item();
        prv_json();
    });
}
else {
    Json_data();
}
