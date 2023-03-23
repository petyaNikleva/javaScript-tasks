const convertToJSON = (arr) => {
    if (Array.isArray(arr)) {
        const collection = {}
        arr.forEach(video => {
            collection[video.id] = video.title
        })
        return JSON.stringify(collection);
    }
}

const videos = [{
    id: 65432445,
    title: "The Chamber"
}, {
    id: 675465,
    title: "Fracture"
}, {
    id: 7111470,
    title: "Die Hard"
}, {
    id: 654356453,
    title: "The Boys"
}
]

///////////////////////////////////////////

console.log(convertToJSON(videos));
console.log(convertToJSON('ss'));

//  expected:
//   {
//     "65432445": "The Chamber",
//     "675465": "Fracture",
//     "7111470": "Die Hard",
//     "654356453": "The Boys"
// }