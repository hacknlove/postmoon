var response = pm.response.json().data;

pm.test("se devuelve el slot buscado por el nombre", function () {
  response.data.forEach(subslot => {
    pm.expect(subslot.slot).to.have.property('client')
    pm.expect(subslot.slot.client.name).to.be.eql("66666")    
  })
//  pm.expect(response.data.data.every(subslot => subslot.slot.client.name)).to.be.eql("99999") 

});

pm.test("se devuelve el slot buscado por el nombre", function () {
    pm.expect(response.data.some(subslot => 
    
      subslot.slot.client.name == "99999")).to.be.true;
    
  
  /*pm.expect(response.data.every(subslot => subslot.slot.client.name)).
    to.be.eql("99999") */

});