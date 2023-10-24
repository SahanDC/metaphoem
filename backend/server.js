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

app.get("/searchQuery", async (req, res) => {
    const poemName = await req.query.poem_name
    const sourceDomain = await req.query.source_domain
    const targetDomain = await req.query.target_domain

    console.log(req.query)

    let searchQuery = {
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
        searchQuery.body.query.bool.must.push({
            match: {
                poem_name: poemName
            }
        })
        searchQuery.body.query.bool.must.push({
            match: {
                metaphor_count: "1"
            }
        })
    }

    if (sourceDomain) {
        searchQuery.body.query.bool.must.push({
            match: {
                source_domain: sourceDomain
            }
        })
    }

    if (targetDomain) {
        searchQuery.body.query.bool.must.push({
            match: {
                target_domain: targetDomain
            }
        })
    }

    if (searchQuery.body.query.bool.must.length === 0) {
        searchQuery.body.query = {
            match: {
                metaphor_count: "1"
            },
        }
    }
    console.log(searchQuery.json)
    client.search(searchQuery).then((response) => {
        res.json(response.hits.hits)
    }).catch((error) => {
        res.status(500).json({ error: "Error retrieving search data" })
    })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
