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
                firstFive: [
                    { name: 'fdgdr gdf', balance: 5345 },
                    { name: 'fddr gdf', balance: 545 },
                    { name: 'fdgr gdf', balance: 355 },
                    { name: 'fdhgdr gdf', balance: 345 },
                    { name: 'fdegr gdf', balance: 35 },
                ],
                nextFive: [
                    { name: 'fdgdr gdf', balance: 5345 },
                    { name: 'fddr gdf', balance: 545 },
                    { name: 'fdgr gdf', balance: 355 },
                    { name: 'fdhgdr gdf', balance: 345 },
                    { name: 'fdegr gdf', balance: 35 },
                ]
            })
            server.create("line", {
                newLine: "What you want to know ?",
                translatedLine: '',
            })
            server.create("login", {
                token: "1|233764s455teu8",
                user_id: 2234,
                userName:  "Tarif Ezaz",
                profile: {
                    user_id: 2234,
                    userName: "Tarif Ezaz",
                    leaderboard_place: 45,
                    image_url: 'https://media.licdn.com/dms/image/D5635AQExQkEPINGiKw/profile-framedphoto-shrink_200_200/0/1689965016077?e=1709398800&v=beta&t=zPvLCTrvM4qowRj5spvZElIaJvFvPR7TRYkyAucaNfA',
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

            this.get("/profile/:id", (schema, request) => {
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
