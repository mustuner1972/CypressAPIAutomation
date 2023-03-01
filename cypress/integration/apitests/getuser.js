/// <reference types = "Cypress" />

describe('get api user test', ()=>
{
    let accessToken = "ed425bf930fda8b3af81d928a41f9176ede8ee2bcd083420c8624b5c76828363"
    it('get users', ()=>{
        cy.request({

            method : 'GET',
            url : 'https://reqres.in/api/{resource}',
           // headers : {
              //  'authorization' : 'Bearer ' + accessToken,
               //             }
           
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.total_pages).to.eq(2)
            expect(res.body.support.url).to.eq("https://reqres.in/#support-heading")
            expect(res.body.data[0].name).to.eq("cerulean")
        })
    })
    it('get users with id', ()=>{
        cy.request({

            method : 'GET',
            url : 'https://reqres.in/api/users/1',
            //headers : {
             //   'authorization' : 'Bearer ' + accessToken,
               //             }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.email).to.eq("george.bluth@reqres.in")
        })
    })
} )