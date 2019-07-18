var response = pm.response.json().data;

pm.test("Los names estan ordenados por orden desc", function () {
    var lastName = Infinity
    pm.expect(response.data.every(user => {
      if(!user.username){
        return false
      }
        if (user.username > lastName) { //el actual con el anterior
        console.log(user.username)
            return false
        }
        lastName = user.username    
        return true
    })).to.be.true
});

pm.test("expect dentro", () => {
  response.data.forEach(elemento => {
    pm.expect(elemento.username).to.be.eql('perico')
  })
})
