/*globals pm*/

//cambiar ceillingFwd de 10 a 20
pm.test(" maximunConcurrentMultimediaSession de perfil se ha cambiado correctamente", function () {
    pm.expect(response.id).to.eql(pm.environment.get("PerfilId"));
    pm.expect(response.ceillingFwd).to.eql(20);

       
});