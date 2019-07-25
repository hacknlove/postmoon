/*globals pm*/

//cambiar stoptime de 20:00:00 a 21:00:00
pm.test(" stoptime de perfil se ha cambiado correctamente", function () {
    pm.expect(response.id).to.eql(pm.environment.get("PerfilId"));
    pm.expect(response.stoptime).to.eql("21:00:00");

       
});