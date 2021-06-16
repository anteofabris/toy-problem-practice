/*
This question is asked by Amazon. Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.

Ex: given the following strings...

sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]
*/

// var uncommonWords = (str1, str2) => {
//   var ref = {}
//   var deleted = {}
//   var split1 = str1.split(' ')
//   var split2 = str2.split(' ')
//   for (var i = 0; i < split1.length; i ++) {
//     ref[split1[i]] = true
//   }
//   for (var i = 0; i < split2.length; i ++) {
//     if (ref[split2[i]]) {
//       delete ref[split2[i]]
//       deleted[split2[i]] = true
//     } else {
//       if (!deleted[split2[i]]) {
//       ref[split2[i]] = true
//       }
//     }
//   }

//   return Object.keys(ref)

// }

var uncommonWords = (str1, str2) => {

  // create ref1
  var ref1 = {}
  // create ref2
  var ref2 = {}
  // for each word in split str1
    // add to ref1 as true
  // for each word in split str1
    // add to ref2 as true
  // for key in ref1
    // if ref2[key] exists
      // delete it from ref2
  // return keys of ref2 as an array

}

var sentence1 = "the the the the"
var sentence2 = "hi hi hi hi"
console.log(uncommonWords(sentence1, sentence2))

// create ref obj
// create deleted obj
// split str1 and store in array
// split str2 and store in array

// for every word in split1
  // add to ref obj as true
// for every word in split2
  // if word exists in ref
    // delete from ref and add to deleted
  // else if word doesn't exist in deleted
    // add to ref