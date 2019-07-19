
pm.test("se devuelve el slot buscado por el nombre", function () {
  response.data.data.forEach(subslot => {
      
    pm.expect(subslot.slot).to.have.property('client')
    pm.expect(subslot.slot.client.id).to.be.eql("2")
    
 })
});

// error AssertionError: expected 2 to deeply equal '2'

// Body

{
    "status": 200,
    "data": {
        "count": 3,
        "data": [
            {
                "id": 1,
                "slot": {
                    "id": 1,
                    "name": "MEX - AM - 2 - Referencia (HSA)",
                    "client": {
                        "id": 2,
                        "name": "99999"
                    }
                },
                "fwdCir": 512,
                "fwdMir": 60000,
                "rtnCir": 512,
                "rtnMir": 999999,
                "numProfile": 0,
                "numTerminal": 0
            },
            {
                "id": 2,
                "slot": {
                    "id": 2,
                    "name": "ARG - EU - 3",
                    "client": {
                        "id": 3,
                        "name": "88888"
                    }
                },
                "fwdCir": 512,
                "fwdMir": 60,
                "rtnCir": 512,
                "rtnMir": 999999,
                "numProfile": 0,
                "numTerminal": 0
            },
            {
                "id": 3,
                "slot": {
                    "id": 2,
                    "name": "ARG - EU - 3",
                    "client": {
                        "id": 3,
                        "name": "88888"
                    }
                },
                "fwdCir": 512,
                "fwdMir": 6,
                "rtnCir": 512,
                "rtnMir": 999999,
                "numProfile": 0,
                "numTerminal": 0
            }
        ]
    }
}





