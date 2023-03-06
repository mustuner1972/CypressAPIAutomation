/// <reference types = "Cypress" />

const dataJson = require("../../fixtures/example.json")

describe('verify post test', ()=>
{
    let accessToken = "ed425bf930fda8b3af81d928a41f9176ede8ee2bcd083420c8624b5c76828363"
    
    let id =''
    const name = dataJson.name

    it('create users', ()=>{

      id = Math.floor(Math.random() * 100); 
        cy.request(
            {
               method : "POST",
               url : "https://petstore.swagger.io/v2/pet" ,
               body : {
                
                    "id": id,
                    "category": {
                      "id": 5432,
                      "name": "string"
                    },
                    "name": name,
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 4321,
                        "name": "kartal"
                      }
                    ],
                    "status": dataJson.status                  
               }
            }
        )
        .then((res) =>
        {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eql(200)
            expect(res.body.id).to.eq(id)
            expect(res.body.name).to.eq(name)
            expect(res.body).has.property("status" ,dataJson.status)

        })
        .then((res) =>{
          
            cy.request({
                method : 'GET',
                url : "https://petstore.swagger.io/v2/pet/" + id,
            })
            .then((res) =>
            {
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(200)
                expect(res.body.id).to.eq(id)
                expect(res.body.name).to.eq(name)
                expect(res.body.category.name).to.eq("string")
                expect(res.body.tags[0].name).to.eq("kartal")
                expect(res.body).has.property("status" ,dataJson.status)
                expect(res.body).has.property("name" ,dataJson.name)

                expect(res.body.photoUrls[0]).to.eq("string")
        
            })
        
        })
        
            })
        })