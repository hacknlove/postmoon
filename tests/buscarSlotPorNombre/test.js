var response = pm.response.json();

pm.test("Status code is 200", function () {
  //se te olvidó el expect
    pm.expect(response.status).to.be.eql(200);
});

pm.test("se devuelve el slot buscado por el nombre", function () {
  response.data.data.forEach(subslot => {
    return
    pm.expect(subslot.slot).to.have.property('client')
    pm.expect(subslot.slot.client.name).to.be.eql("99999")    
  })
  pm.expect(response.data.data.every(subslot => subslot.slot.client.name)).to.be.eql("99999") 

});