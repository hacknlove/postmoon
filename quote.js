/*globals pm*/

//cambiar stoptime de 19 a 25 (numero)
pm.test(" quote de perfil se ha cambiado correctamente", function () {
    pm.expect(response.id).to.eql(pm.environment.get("PerfilId"));
    pm.expect(response.quote).to.eql(25);

       
});