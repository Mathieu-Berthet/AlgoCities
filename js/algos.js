// Converts from degrees to radians.
Number.prototype.toRadians = function() {
  return this * Math.PI / 180;
};

//EU_circo;code_region;region;chef_lieu;num_dpt;nom_ddpt;pref;num_circ;nom_commune;codes_postaux;code_insee;latitude;longitude;dist
// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city)
{
  console.log("distanceFromGrenoble - implement me !");
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;
  let R = 6371e3;
  let latOne = city.latitude.toRadians();
  let latTwo = GrenobleLat.toRadians();
  let latFinale = (latTwo - latOne).toRadians();
  let lonFinale = (GrenobleLong - city.longitude).toRadians();

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
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  let tmp = i;
  i = j;
  j = tmp;
  console.log("swap - implement me !");

}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j)
{
  displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
  console.log("isLess - implement me !");
  if(distanceFromGrenoble(i) < distanceFromGrenoble(j))
  {
    return true;
  }
}


function insertsort()
{
  console.log("insertsort - implement me !");
}

function selectionsort()
{
  console.log("selectionsort - implement me !");
}

function bubblesort()
{
  console.log("bubblesort - implement me !");
}

function shellsort()
{
  console.log("shellsort - implement me !");
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
