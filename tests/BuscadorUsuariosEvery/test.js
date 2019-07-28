/*
TEST ANTIGUO : // COMPROBAR LO DE roleId

const datos = pm.response.json().data
const roleId = Number(pm.environment.get('roleId'))
const userRole = datos.data.find(user => user.role.id === roleId)

pm.test('Devuelve usuarios con rol asignado', () => {
    pm.expect(datos.data.length===0).to.be.false
})

pm.test('Devuelve el usuario indicado', () => {
    pm.expect(userRole).to.be.ok
}) */

