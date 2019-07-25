/*globals pm*/

//cambiar ceillingFwd de 20 a 30 (numero)
pm.test(" ceillingRtn de perfil se ha cambiado correctamente", function () {
    pm.expect(response.id).to.eql(pm.environment.get("PerfilId"));
    pm.expect(response.ceillingRtn).to.eql(30);

       
});