// Converts from degrees to radians.
Number.prototype.toRadians = function() {
  return this * Math.PI / 180;
};
let compteurIsLess = 0;
let compteurSwap = 0;


// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city)
{
  let GrenobleLat = 45.166667;
  let GrenobleLong = 5.716667;
  let R = 6371e3;
  let latOne = city.latitude * Math.PI / 180;
  let latTwo = GrenobleLat * Math.PI / 180;
  let latFinale = (latTwo - latOne) * Math.PI / 180;
  let lonFinale = (GrenobleLong - city.longitude) * Math.PI / 180;

  let a = Math.sin(latFinale/2) * Math.sin(latFinale/2) + Math.cos(latOne) * Math.cos(latTwo) * Math.sin(lonFinale/2) * Math.sin(lonFinale/2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceFinale = R * c;
  return distanceFinale;
}

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i,j)
{
  //displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  let tmp = csvData[i];
  csvData[i] = csvData[j];
  csvData[j] = tmp;
  compteurSwap++;
}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j)
{
  //displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
  if(distanceFromGrenoble(csvData[i]) < distanceFromGrenoble(csvData[j]))
  {
    return true;
  }
  compteurIsLess++;
}


function insertsort(gap = 1, begin = 0)
{
  let j = 0;
  let stockElement;
  for(begin; begin < csvData.length; begin+=gap)
  {
    j = begin;
    while(j > 0 && !isLess(j - 1, j))
    {
      swap(j, j - 1);
      j--;
    }
  }
  /*console.log("Compteur isLess :", compteurIsLess);
  console.log("Compteur swap : ", compteurSwap);*/

}

function selectionsort()
{
  for(let i = 0; i < csvData.length - 2; i++)
  {
    let min = i;
    for(let j = i + 1; j < csvData.length; j++)
    {
      if(isLess(j, min))
      {
        min = j
      }
    }
    if(min !== i)
    {
      swap(min, i);
    }
  }
  console.log("Compteur isLess :", compteurIsLess);
  console.log("Compteur swap : ", compteurSwap);
}

function bubblesort()
{
  //Version 1
  /*for(let i = csvData.length; i > 1; i--)
  {
    for(let j = 0; j < i -1; j++)
    {
      if(isLess(j + 1, j))
      {
        swap(j+1, j);
      }
    }
  }*/

  //Version 2
  let nbPassage = 0;
  let triOk = false;
  do
  {
    triOk = false;
    for(let i = 0; i < csvData.length - 1 - nbPassage; i++)
    {
      if(isLess(i+1, i))
      {
        swap(i, i+1);
        triOk = true;
      }
    }
    nbPassage++;
  } while(triOk);
  console.log("Compteur isLess :", compteurIsLess);
  console.log("Compteur swap : ", compteurSwap);
}

function shellsort()
{
  let tabInterval = [7,4,2,1];
  for(let gap = 0; gap < tabInterval.length; gap++)
  {
    for(let begin = 0; begin < tabInterval[gap]; begin++)
    {
      insertsort(tabInterval[gap], begin);
    }
  }
  console.log("Compteur isLess :", compteurIsLess);
  console.log("Compteur swap : ", compteurSwap);
}

function mergesort()
{
  console.log("mergesort - implement me !");
}

function heapsort()
{
  console.log("heapsort - implement me !");
}

function quicksort()
{
  console.log("quicksort - implement me !");
}
function quick3sort()
{
  console.log("quick3sort - implement me !");
}


function sort(algo)
{
  switch (algo)
  {
    case 'insert': insertsort();break;
    case 'select': selectionsort();break;
    case 'bubble': bubblesort();break;
    case 'shell': shellsort();break;
    case 'merge': mergesort();break;
    case 'heap': heapsort();break;
    case 'quick': quicksort();break;
    case 'quick3': quick3sort();break;
    default: throw 'Invalid algorithm ' + algo;
  }
}
