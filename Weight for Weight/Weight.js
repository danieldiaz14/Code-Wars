function orderWeight(strng) {
  //thomas is gay
  //yo that one girl had a fat ass
  if (strng.length == 0) {
    return '';
  }
  var object = {
    number: null,
    weight: null,
  };

  // Convert into an array or vector
  strng = strng.split(' ');
  //i made a loop that goes through the vector and changes the element into an int
  for ( var i = 0; i < strng.length; i++) {
    strng[i] = parseInt(strng[i]);
  }
  var holder = [];
  var unlisted = strng;
  var orderedOriginal = mergeSort(unlisted);
  object.number = unlisted;
  for ( var i = 0; i < unlisted.length; i++) {
    holder.push(do_again(unlisted[i]));
  }
  var sorted = mergeSort(holder);
  object.weight = holder;
  var ordered = [];
  for ( var i = 0; i < sorted.length; i++) {
    ordered.push(sorted[i].toString());
  }
  return sortNumbers(object.weight, object.number);
}

// adds the number together
function do_again(sum) {
  var summy = 0;
  sum = sum.toString();
  sum = sum.split('');
  for ( var j = 0; j < sum.length; j++) {
    summy += parseInt(sum[j]);
  }
  return summy;
}

function mergeSort(data) {
	if (data.length < 2) {
		return data;
	}

	var midPoint = Math.round(data.length / 2);
	return merge(
		mergeSort(data.slice(0, midPoint)),
		mergeSort(data.slice(midPoint))
		);


}

function merge(left, right) {
	var out = [];
	while (left.length && right.length) {
		out.push(left[0] < right[0] ? left.shift() : right.shift());
	}

	while (left.length) {
		out.push(left.shift());
	}

	while (right.length) {
		out.push(right.shift());
	}

	return out;
}

function sortNumbers(left, right) {
var boolSwap = true;

while (boolSwap == true) {
  var counter = 0;
   for ( var i = 0; i < left.length; i++) {
     if ( left[i] > left[i+1])
     {
     var temp1 = left[i];
      left[i] = left[i + 1];
      left[i+1] = temp1;

      var temp2 = right[i];
      right[i] = right[i + 1];
      right[i + 1] = temp2;
     counter++;

     }
   }
   if (counter > 0) {
     boolSwap = true;
   } else  {
     boolSwap = false;
   }
 }

  return right.join(' ');
}
