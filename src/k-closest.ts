// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y 
// plane and an integer k, return the k closest points to the origin (0, 0).

function kClosest(points: number[][], k: number): number[][] {

    //find sqrts and store index and correspoding value
    //sort the object based on sqrt values
    //loop k times to prepare the result
    

    let indVal:number[][]=[];
    let result:number[][]=[];
    
    for(let i=0; i< points.length; i++){
        const [x,y] = points[i];
        const sqrtVal = Math.sqrt(x*x + y*y);
    
        indVal.push([i,sqrtVal])
    }
    
    //sort the array
    indVal.sort(function(first, second) {
        return second[1] - first[1];//based on second value in ascending 
      });
    for(let j=0; j< k; j++){
        const [ind, val] = indVal[k];
        result.push(points[ind]);
    }
    return result;
};

// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]