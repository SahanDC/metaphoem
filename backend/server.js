const express = require('express');
const cors = require('cors')
const elasticSearch = require('elasticsearch');

const app = express();
const port = 3000;

const indexName = 'metaphoem'

const client = new elasticSearch.Client({
    host: 'http://localhost:9200',
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hi, Sahan')
})

app.get('/getAllQueries', (req, res) => {
    client.search({
        index: indexName, 
        body: {
            size: 30,
            query:{
                match_all: {},
            },
        },
    }).then((response) => {
        res.json(response.hits.hits)
    }).catch((error)=>{
        res.status(500).json({error: "Error retrieving all the data"})
    })
})

app.post('/poemNameSearch', async (req, res) => {
    const poem = await req.body.poem_name;
    console.log(req.body)
    client.search({
        index: indexName,
        body: {
            size: 30,
            query: {
                match: {
                    'poem_name': poem,
                }
            }
        }
    }).then((response) => {
        res.json(response.hits.hits)
    }).catch((error) => {
        res.status(500).send('Error retrieving target data')
    })
})

app.post('/sourceSearch', async (req, res) => {
    const source = await req.body.source_domain
    // console.log(req.body)
    client.search({
        index: indexName,
        body: {
            size: 30,
            query: {
                match: {
                    'source_domain': source,
                }
            },
        }
    }).then((response) => {
        res.json(response.hits.hits)
    }).catch((error) => {
        res.status(500).send('Error retrieving source data')
    })
})

app.post('/targetSearch', async (req, res) => {
    const target = await req.body.target_domain;

    client.search({
        index: indexName,
        body: {
            size: 30,
            query: {
                match: {
                    'target_domain': target,
                }
            }
        }
    }).then((response) => {
        res.json(response.hits.hits)
    }).catch((error) => {
        res.status(500).send('Error retrieving target data')
    })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
