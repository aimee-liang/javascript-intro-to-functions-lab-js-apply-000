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
  console.log(string.toUpperCase);
}