/*globals pm*/

//cambiar freezone true a false
pm.test(" maximunConcurrentMultimediaSession de perfil se ha cambiado correctamente", function () {
    pm.expect(response.id).to.eql(pm.environment.get("PerfilId"));
    pm.expect(response.freezone).to.eql("false");

       
});