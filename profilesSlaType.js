/*globals pm*/

//cambiar "separeted" por algo (parece que solo hay 2 opciones)
pm.test(" maximunConcurrentMultimediaSession de perfil se ha cambiado correctamente", function () {
    pm.expect(response.id).to.eql(pm.environment.get("PerfilId"));
    pm.expect(response.profilesSlaType).to.eql("");

       
});