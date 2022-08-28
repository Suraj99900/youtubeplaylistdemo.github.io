

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

let i = 0;



function Json_data(params) {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PL4cUxeGkcC9gksOX3Kd9KPo-O68ncT05o&key=AIzaSyC3GQ8vEZLJr2UW8FloXX4F5y3QALherMo", true);



    xhr.onload = () => {

        // gettting id and class by DOM


        you_data = JSON.parse(xhr.responseText)

        // console.log(you_data);

        for (item in you_data.items) {

            var items = you_data.items[item];

            // console.log(items);



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

            var h4 = document.createElement('h4');
            var img = document.createElement('img');
            // append image to left box

            img.setAttribute("class", store_data_videoId[i] + " img_data " + " " + store_data_date[i]);
            img.setAttribute("id", "i" + i);
            img.src = store_data_image[i];
            left.appendChild(img);

            // append h4 to left box
            h4.innerText = store_data_title[i];
            left.appendChild(h4);

            // console.log(store_data_image[i]);



            i++;


        }



    }


    xhr.send();


}

Json_data();





function data() {
    let img_data = document.querySelectorAll(".img_data");

    let i_value;

    img_data.forEach(item => {
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

setTimeout(data, 2000);