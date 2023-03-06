describe('get api user test', ()=>
{
    
    it('create users', ()=>{

        cy.request({
method: "GET",
url: "https://reqres.in/api/users?page=1&per_page=10"

        })
        .then((res)=>{
            cy.log(JSON.stringify(res))
             const loc = res.body.data
             for (let i = 0; i < loc.length; i++) {
                
                if (res.body.data[i].id==2){
                    cy.request({
                        method:"GET",
                        url: "https://reqres.in/api/users/" + res.body.data[i].id
                    }).then((resp) =>{
                        expect(resp.status).to.eq(200)                     
                        expect(resp.body.data).has.property("email", res.body.data[i].email)
    
                    })
                }
                
                
             } 
        })
    })
})

