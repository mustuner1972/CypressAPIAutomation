describe('check pet', ()=>{

    let petId =''
    let petName = ''
    it('get pet information', ()=>{
        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
        })
        .then((resp)=>{
            cy.log(JSON.stringify(resp))
            const petId = resp.body[0].id
            const petName = resp.body[0].category.name
            cy.log("petId is " + petId)
            cy.log("pet name is " + petName)
            
            cy.request({
                method : "GET",
                url: "https://petstore.swagger.io/v2/pet/" + petId
            })
            .then((resp) =>{
                cy.log(JSON.stringify(resp)) 

                expect(resp.status).to.eq(200)
                expect(resp.body.id).to.eq(petId)
                expect(resp.body).to.have.property('id', petId)
                expect(resp.body.category.name).to.eq(petName)
            
           })
    })
})
})