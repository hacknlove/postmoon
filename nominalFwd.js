/*globals pm*/

//cambiar nominalFwd de 10 a 20 (numero)
pm.test(" nominalFwd de perfil se ha cambiado correctamente", function () {
    pm.expect(response.id).to.eql(pm.environment.get("PerfilId"));
    pm.expect(response.nominalFwd).to.eql(20);

  
    

       
});