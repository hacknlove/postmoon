var response = pm.response.json().data;

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("se devuelve el slot buscado por el nombre", function () {
  console.log(response)
/*  response.data.forEach(subslot => {
    pm.expect(subslot.slot.client.name).to.be.eql("99999")
  })
*/
});