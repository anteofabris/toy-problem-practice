/*
This question is asked by Amazon. Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.

Ex: given the following strings...

sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]
*/

var uncommonWords = (str1, str2) => {
  var ref = {}
  var deleted = {}
  var split1 = str1.split(' ')
  var split2 = str2.split(' ')
  for (var i = 0; i < split1.length; i ++) {
    ref[split1[i]] = true
  }
  for (var i = 0; i < split2.length; i ++) {
    if (ref[split2[i]]) {
      delete ref[split2[i]]
      deleted[split2[i]] = true
    } else {
      if (!deleted[split2[i]]) {
      ref[split2[i]] = true
      }
    }
  }

  return Object.keys(ref)

}

var sentence1 = "copper coffee pot"
var sentence2 = "hot coffee pot"
console.log(uncommonWords(sentence1, sentence2))

// create ref obj
// iterate over arr1
  // store each new word in ref
// iterate over arr2
  // if exists in ref
    // delete word
  // else, add word
// return Object.keys of ref