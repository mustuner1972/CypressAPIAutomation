/// <reference types = "Cypress" />

describe('get api user test', ()=>
{
    let accessToken = "ed425bf930fda8b3af81d928a41f9176ede8ee2bcd083420c8624b5c76828363"

    it('create users', ()=>{
        cy.request(
            {
               method : "POST",
               url : "https://petstore.swagger.io/v2/pet" ,
               body : {
                
                    "id": 32,
                    "category": {
                      "id": 5432,
                      "name": "string"
                    },
                    "name": "lion",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 4321,
                        "name": "kartal"
                      }
                    ],
                    "status": "available"
                  
               }
            }
        )
        .then((res) =>
        {
            expect(res.status).to.eql(200)
        })
    
        })

it('check users', ()=>{
cy.request(
    {
        method : "GET",
        url : "https://petstore.swagger.io/v2/pet/32",
    })
    .then((res) =>
    {
        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(200)
        expect(res.body.name).to.eq('lion')
        expect(res.body.category.name).to.eq("string")
        expect(res.body.tags[0].name).to.eq("kartal")
        expect(res.body).has.property("status" ,"available")
        expect(res.body.photoUrls[0]).to.eq("string")

    })

})

    })
