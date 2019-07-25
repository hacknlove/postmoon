/*globals pm*/

//startTime cambiado  15:00 a 16:00

pm.test(" startime de perfil se ha cambiado correctamente", function () {
    pm.expect(response.id).to.eql(pm.environment.get("PerfilId"));
    pm.expect(response.startime).to.eql("16:00:00");

       
});