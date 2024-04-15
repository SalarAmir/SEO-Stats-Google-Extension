import { fastify } from './init.js'

fastify.get('/google_search', async function (req, res) {
    try {
        const { keyword, g_id} = req.query
        console.log("keyword", keyword)
        console.log("g_id", g_id)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error')
    }
})