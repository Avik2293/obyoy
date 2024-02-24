import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            topTen: Model,
            line: Model,
            login: Model,
        },

        seeds(server) {
            server.create("topTen", {
                //  {name: 'gdgdgf hfg', balance: 454} ,
                //  {name: 'gdggf hfg', balance: 54} ,
                // topTen: {
                    'fdgdr gdf': 5345,
                    'fddr gdf': 545,
                    'fdgr gdf': 345,
                    'fdhgdr gdf': 345,
                    'fdegr gdf': 35,
                    'fdgar gdf': 45,
                    'fdgfar gdf': 34,
                    'fdgjr gdf': 335,
                    'fedgr gdf': 355,
                    'fydgr gdf': 315,
                // }
        })
            server.create("line", {
                newLine: "What you want to know ?",
                translatedLine: '',
            })
            server.create("login", {
                token: "1|233764s455teu8",
                user_id: 2234,
                userName: "Tarif Ezaz",
                profile: {
                    user_id: 2234,
                    userName: "Tarif Ezaz",
                    leaderboard_place: 45,

                },
                session_expiry: 0,
            })
        },

        routes() {
            this.namespace = "api/v1"

            // Using the `timing` option to slow down the response
            this.get("/leaderboard/topTen", (schema, request) => {
                return schema.topTens.all()
            })
            // }, { timing: 4000 })

            this.get("/movies/:id", (schema, request) => {
                let id = request.params.id

                return schema.movies.find(id)
            })

            // Responding to a POST request
            this.post("/movies", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                // attrs.id = Math.floor(Math.random() * 100)

                // return { movie: attrs }
                return schema.movies.create(attrs)
            })

            this.patch("/movies/:id", (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody)
                let id = request.params.id
                let movie = schema.movies.find(id)

                return movie.update(newAttrs)
            })

            // Using the `Response` class to return a 500
            this.delete("/movies/:id", (schema, request) => {
                // let headers = {}
                // let data = { errors: ["Server did not respond"] }
                // return new Response(500, headers, data)

                let id = request.params.id

                return schema.movies.find(id).destroy()
            })
        },
    })

    return server
}
