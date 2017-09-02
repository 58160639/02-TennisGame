function TennisGame(){
  this.reset = () =>{
  }
    this.echo = () => {
      return 'Love - Love'

  }
}

test ('Echo "Love - Love" when press reset botton', () => {
  //arrange เตรียม input
  let app = new TennisGame()



  //act
  app.reset()
  let result = app.echo()




  //assert output
  expect(result).toBe('Love - Love')


})
