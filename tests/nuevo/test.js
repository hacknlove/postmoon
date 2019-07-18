/*globals pm*/  

var response = pm.response.json().data;

pm.test("Los names estan ordenados por orden desc", function () {
    var lastName = Infinity
    pm.expect(response.data.every(user => {
      if(!user.name){
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