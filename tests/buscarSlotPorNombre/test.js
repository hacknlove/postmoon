var response = pm.response.json().data;

pm.test("se devuelve el slot buscado por el nombre", function () {
  response.data.forEach(subslot => {
//    if(!subslot.slot.client) {
//      return 
//    }
    
    pm.expect(subslot.slot).to.have.property('client')
    pm.expect(subslot.slot.client.name).to.be.eql("99999")    
  })
//  pm.expect(response.data.data.every(subslot => subslot.slot.client.name)).to.be.eql("99999") 

});

pm.test("se devuelve el slot buscado por el nombre", function () {
  response.data.forEach(subslot => {
    if(subslot.slot.client) {
      pm.expect(subslot.slot.client.name).to.be.eql("99999")    
    }
  })
});


pm.test("se devuelve el slot buscado por el nombre", function () {
    pm.expect(response.data.every(subslot => {
      pm.expect(subslot.slot.client.name).to.be.eql("99999")    
      return true
    })).to.be.true;
});

