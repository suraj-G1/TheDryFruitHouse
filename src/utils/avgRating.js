export default function GetAvgRating(ratingArr) {
    //console.log("Rating array",ratingArr);
    if (ratingArr?.length === 0) return 0
    const totalReviewCount = ratingArr?.reduce((acc, curr) => {
      acc += curr.rating
      //console.log("acc",acc);
      return acc
    }, 0)
  
    const multiplier = Math.pow(10, 1)
    const avgReviewCount =
      Math.round((totalReviewCount / ratingArr?.length) * multiplier) / multiplier
  
    return avgReviewCount
  }