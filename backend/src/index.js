const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)

/*******************
** Rota / Recurso ** 
*******************/ 

/*********************************************
** GET: Buscar uma informação do backend    **
** POST: Criar uma informação no backend    **
** PUT: Alterar uma informação no backend   **
** DELETE: Deletar uma informação no backend** 
*********************************************/ 

/***************************************************************************************
**Tipos de parâmestros ->                                                             **
**Query Params: Parâmetros nomeados enviados na rota após o "?" ( Filtros, Paginação )**
**Route Params: Parâmetros utilizados para identificar recursos                       **
**Request Body: Corpo da requisição, utilizado para criar ou alterar recursos         **
***************************************************************************************/

/***************************************************************
**SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server**
**NoSQL: MongoDB, CouchDB, etc                                **
***************************************************************/

/****************************************************
**Driver: SELECT * FROM users                      **
**Query Builder: table('users').select('*').where()**
****************************************************/