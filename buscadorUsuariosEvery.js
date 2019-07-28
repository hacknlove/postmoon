/*
TEST ANTIGUO : // COMPROBAR LO DE roleId - tiene que ser el mismo para dos usuarios

const datos = pm.response.json().data
const roleId = Number(pm.environment.get('roleId'))
const userRole = datos.data.find(user => user.role.id === roleId)

pm.test('Devuelve usuarios con rol asignado', () => {
    pm.expect(datos.data.length===0).to.be.false
})

pm.test('Devuelve el usuario indicado', () => {
    pm.expect(userRole).to.be.ok
}) */

const datos = pm.response.json().data
console.log(datos)
const roleId = 3 //Number(pm.environment.get('roleId'))
//const userRole = datos.data.find(user => user.role.id === roleId)

pm.test('Devuelve ', () => {
    pm.expect(datos.length === 0).to.be.false
})

pm.test('Todos los usuarios encontrados tienen el mismo rol', () => {
    pm.expect(datos.every(user => user.role[0].id == roleId)).to.be.true
})
