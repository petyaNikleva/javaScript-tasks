const boxarts = [
    {
        width: 200,
        height: 200,
        url: "http://cdn=0.nffjfkjf.com/images/2891/Fractire200.jpg"
    },
    {
        width: 150,
        height: 200,
        url: "http://cdn=0.nffjfkjf.com/images/2891/Fractire150.jpg"
    },
    {
        width: 300,
        height: 200,
        url: "http://cdn=0.nffjfkjf.com/images/2891/Fractire300.jpg"
    },
    {
        width: 425,
        height: 150,
        url: "http://cdn=0.nffjfkjf.com/images/2891/Fractire425.jpg"
    }
]


const findURLwithBiggestArea = (pics) => {
    const maxPic = pics.map((picture) => {
        const area = picture.width * picture.height;
        return { url: picture.url, area }
    }).reduce((max, curr) => (max.area > curr.area) ? max : curr);
    return maxPic.url;
}

///////////////////////////////////////

console.log(findURLwithBiggestArea(boxarts));

// Expected
// http://cdn=0.nffjfkjf.com/images/2891/Fractire425.jpg






