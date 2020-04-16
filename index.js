/* Exercise 1: describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})
*/ 
function shout(string){
  return string.toUpperCase()
}

/* Exercise 2:  describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})
*/
function whisper(string){
  return string.toLowerCase()
}

/* Exercise 3: describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})
*/

function logShout(string){
  console.log(string.toUpperCase());
}

/* Exercise 4: describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})
*/

function logWhisper(string){
  console.log(string.toLowerCase())
}

/* Exercise 5: describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
*/

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  } else if (string === string.toUpperCase()){
    return "YES INDEED!"
  } else if (string == "I love you, Grandma."){
    return "I love you, too"
  }
}