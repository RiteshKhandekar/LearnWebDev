/*
let myFirstVariable = 250

const mySecondVariable = 100
const mySecondVariableString = "heheheeh"
const variableBoolean = true
const frineds = [22,true,heheheheh]
const bigIntNumber = 11111111111111111111111n

const typeOfNumber = (typeof myFirstVariable)

const myAge = 18
const myAgee = 18

const myUpdatedAge = myAge + 1
const myUpdatedageeee = myAgee ** 1

console.log(myFirstVariable)

const myFriendsAge = [10,20,23,16,17]
const sum = myFriendsAge[0]+ myFriendsAge[1]+ myFriendsAge[2]+ myFriendsAge[3]+ myFriendsAge[4]
console.log("sum of friends age", sum)

const totalFriends = 5

console.log("total friends", totalFriends)
const aveg = sum / totalFriends

console.log("average age", aveg)
*/

/*
let myAge = 22
myAge++
++myAge
console.log(myAge)
*/

/*
const myAge = 18
function addsToMyAge(incrementBy, multiplyBy) {
    return (myAge + incrementBy) * multiplyBy
}

const myNewAge = addsToMyAge(2, 2)

console.log(myAge, myNewAge)
*/

/*const myAge = 18

function shouldIGetALicense(age,bribe,whitelisted) {

    if (!whitelisted) {
        console.log('You are banned!')
        return
    }

    if (age >= 18) {
        console.log('Pass')
    }
    else if (age <= 18 && bribe > 100) {
        console.log('Pass')
    }
    else if (bribe <= 100) {
        console.log('Fail')
    }
    
        
}


shouldIGetALicense(17, 99, false)
*/

//function shouldIGetALicense(age) {

    /*if (age>18) {
        console.log('This person is above 18')
    }
    else {
    console.log('This person is below 18')
    }   
    //if (age >= 18) {
    //    return true}
    /*else {
        return false
    }
    not needed as function does not execute anything after one return is executed
    */
    //return false
    


//}

/*let myFriends = []


function addFriends(friend1, friend2, friend3) {
    myFriends.unshift(friend1)
    myFriends.push(friend2)
    myFriends.push(friend3 )
    console.log(myFriends)
}
addFriends("heheh","huhu","hihihi")
myFriends[1] = "huhuhuhuhuhu"
console.log('replaced the string in index 1 of the array with', myFriends[1])

myFriends.pop()//removes last value of an array
console.log('removed the last value of array', myFriends)
*/

/*
for (let i = 0; i < 10 ; i++) {
    console.log(i)
}
*/
/*
let evenNumbers = []
let oddNumbers = []

function returnEvenOdd(till) {

    for (let  i=0; i <= till; i++) {
        if (i%2===1) {
            oddNumbers.push(i)
        }
        else {
            evenNumbers.push(i)
        }
    }
    console.log("even",evenNumbers)
    console.log("odd",oddNumbers)
}


returnEvenOdd(20)
*/
/*
const myObject = {
    keyname : {
       'obj1' : 'value'
    } ,
    keynameNoNoNo : {
       hehe : 'valueHehe'
    } ,
    'keyname2' : 24 ,
    'keyname3' : 'jkfjkjg',
    'keyname4' : function sumNum(mun1,num2) {
        return num1 + num2
    }
}

console.log(myObject.keyname['obj1'])
console.log(myObject.keynameNoNoNo['hehe'])
console.log(myObject.keyname2)
console.log(myObject.keyname3)
*/

const myProfile = {
    'name' : 'Ritesh' ,
    'age' : 18
}
const secondProfile = {
    'name' : 'John' ,
    'age' : 19
}

let num = 10

console.log('before increment my age', myProfile.age)

function mutateObj(obj) {
    obj.age++
}

function mutatePrimitiveData(primitive) {
    primitive++
    console.log(primitive)
}

mutateObj(myProfile)

console.log('after incrementing my age', myProfile.age)
mutatePrimitiveData(num)
console.log(num)