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
    const maxPic = pics.reduce((acc, picture) => {
        const area = picture.width * picture.height;
        if (acc?.area > area) {
            return acc;
        }
        return { url: picture.url, area }
    }, {})

    return maxPic.url;
}

///////////////////////////////////////

console.log(findURLwithBiggestArea(boxarts));

// Expected
// http://cdn=0.nffjfkjf.com/images/2891/Fractire425.jpg






