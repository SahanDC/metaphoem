const express = require('express')
const cors = require('cors')
const elasticSearch = require('elasticsearch')

const app = express()
const port = 3000

const indexName = 'metaphoem'

const client = new elasticSearch.Client({
    host: 'https://goutrjxh6y:7wn2gpw4mv@university-of-moratu-8304576696.ap-southeast-2.bonsaisearch.net:443',
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
            size: 300,
            query:{
                match: {
                    metaphor_count: "1"
                },
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
        res.sendStatus(500)
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

app.get("/searchQuery", async (req, res) => {
    const poemName = await req.query.poem_name
    const sourceDomain = await req.query.source_domain
    const targetDomain = await req.query.target_domain

    console.log(req.query)

    let searchQueryBody = {
        index: indexName,
        body: {
            size: 300,
            query: {
                bool: {
                    must: [],
                },
            },
        },
    }

    if (poemName) {
        searchQueryBody.body.query.bool.must.push({
            match: {
                poem_name: poemName
            }
        })
    }

    if (sourceDomain) {
        searchQueryBody.body.query.bool.must.push({
            match: {
                source_domain: sourceDomain
            }
        })
    }

    if (targetDomain) {
        searchQueryBody.body.query.bool.must.push({
            match: {
                target_domain: targetDomain
            }
        })
    }

    // if (!poemName && !sourceDomain && !targetDomain) {
    if (searchQueryBody.body.query.bool.must.length == 0) {
        
        searchQueryBody.body.query = {
            match: {
                metaphor_count: "1"
            },
        }
    }
    console.log(searchQueryBody.json)
    client.search(searchQueryBody).then((response) => {
        res.json(response.hits.hits)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
