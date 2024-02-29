import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            topTen: Model,
            line: Model,
            // dataset: Model,
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
            server.create("login", {
                token: "1|233764s455teu8",
                user_id: 2234,
                isLoggedIn: true,
                user_type: 'translator',
                // user_type: 'admin',
                profile: {
                    user_id: 2234,
                    userName: "Tarif Ezaz",
                    user_email: "tarif_ezaz@test.com",
                    user_password: "123456789",
                    user_phone: "+8801723456789",
                    join_date: "23 May, 2021",
                    birthday: "22 March, 1993",
                    address: "Bashundhara, Dhaka, Bangladesh",
                    total_working_days: 435,
                    leaderboard_place: 45,
                    total_balance: 415,
                    total_withdraw: 350,
                    balance: 45,
                    for_approve: 45.34,
                    today_contribution: 5.78,
                    image_url: 'https://media.licdn.com/dms/image/D5635AQExQkEPINGiKw/profile-framedphoto-shrink_200_200/0/1689965016077?e=1709398800&v=beta&t=zPvLCTrvM4qowRj5spvZElIaJvFvPR7TRYkyAucaNfA',
                },
                session_expiry: 0,
            })
            server.create("line", {
                newLine: "What you want to know ?",
                translatedLine: '',
            })
            // server.create("dataset", {
            //     total_datasets: 5,
            //     datasets: [
            //         {
            //             dataset_id: 1,
            //             dataset_name: 'dummy dataset 1',
            //             total_lines: 78,
            //             total_translated: 45,
            //             for_review: 24,
            //             remaining_lines: [
            //                 { line_id: 23, translator_id: 0, line: 'Who are you?', translated_line: '' },
            //                 { line_id: 24, translator_id: 0, line: 'What are you?', translated_line: '' },
            //                 { line_id: 25, translator_id: 0, line: 'Who are they?', translated_line: '' },
            //             ],
            //             translated_lines: [
            //                 { line_id: 3, translator_id: 10, line: 'Are you?', translated_line: 'dsfsr fjrur hdyet' },
            //                 { line_id: 4, translator_id: 19, line: 'What you?', translated_line: 'dsfr fjur hyet' },
            //                 { line_id: 5, translator_id: 12, line: 'Are they?', translated_line: 'dfsr jrur dyet' },
            //             ],
            //             reviewing_lines: [
            //                 { line_id: 3, translator_id: 2, line: 'Who are you?', translated_line: 'dsfsr fjrur hdyet' },
            //                 { line_id: 4, translator_id: 122, line: 'What are you?', translated_line: 'dsfr fjur hyet' },
            //                 { line_id: 5, translator_id: 162, line: 'Who are they?', translated_line: 'dfsr jrur dyet' },
            //             ],
            //         },
            //         {
            //             dataset_id: 11,
            //             dataset_name: 'dummy dataset 11',
            //             total_lines: 787,
            //             total_translated: 145,
            //             for_review: 224,
            //             remaining_lines: [
            //                 { line_id: 23, translator_id: 0, line: 'Who are you?', translated_line: '' },
            //                 { line_id: 24, translator_id: 0, line: 'What are you?', translated_line: '' },
            //                 { line_id: 25, translator_id: 0, line: 'Who are they?', translated_line: '' },
            //             ],
            //             translated_lines: [
            //                 { line_id: 3, translator_id: 10, line: 'Are you?', translated_line: 'dsfsr fjrur hdyet' },
            //                 { line_id: 4, translator_id: 19, line: 'What you?', translated_line: 'dsfr fjur hyet' },
            //                 { line_id: 5, translator_id: 12, line: 'Are they?', translated_line: 'dfsr jrur dyet' },
            //             ],
            //             reviewing_lines: [
            //                 { line_id: 3, translator_id: 2, line: 'Who are you?', translated_line: 'dsfsr fjrur hdyet' },
            //                 { line_id: 4, translator_id: 122, line: 'What are you?', translated_line: 'dsfr fjur hyet' },
            //                 { line_id: 5, translator_id: 162, line: 'Who are they?', translated_line: 'dfsr jrur dyet' },
            //             ],
            //         }
            //     ]
            // })
            server.db.loadData({
                datasets: [
                    {
                        dataset_id: 1,
                        dataset_name: 'dummy dataset 1',
                        total_lines: 78,
                        total_translated: 45,
                        for_review: 24,
                        remaining_lines: [
                            { line_id: 23, translator_id: 0, line: 'Who are you?', translated_line: '' },
                            { line_id: 24, translator_id: 0, line: 'What are you?', translated_line: '' },
                            { line_id: 25, translator_id: 0, line: 'Who are they?', translated_line: '' },
                        ],
                        translated_lines: [
                            { line_id: 3, translator_id: 10, line: 'Are you?', translated_line: 'dsfsr fjrur hdyet' },
                            { line_id: 4, translator_id: 19, line: 'What you?', translated_line: 'dsfr fjur hyet' },
                            { line_id: 5, translator_id: 12, line: 'Are they?', translated_line: 'dfsr jrur dyet' },
                        ],
                        reviewing_lines: [
                            { line_id: 3, translator_id: 2, line: 'Who are you?', translated_line: 'dsfsr fjrur hdyet' },
                            { line_id: 4, translator_id: 122, line: 'What are you?', translated_line: 'dsfr fjur hyet' },
                            { line_id: 5, translator_id: 162, line: 'Who are they?', translated_line: 'dfsr jrur dyet' },
                        ],
                    },
                    {
                        dataset_id: 11,
                        dataset_name: 'dummy dataset 11',
                        total_lines: 787,
                        total_translated: 145,
                        for_review: 224,
                        remaining_lines: [
                            { line_id: 23, translator_id: 0, line: 'Who are you?', translated_line: '' },
                            { line_id: 24, translator_id: 0, line: 'What are you?', translated_line: '' },
                            { line_id: 25, translator_id: 0, line: 'Who are they?', translated_line: '' },
                        ],
                        translated_lines: [
                            { line_id: 3, translator_id: 10, line: 'Are you?', translated_line: 'dsfsr fjrur hdyet' },
                            { line_id: 4, translator_id: 19, line: 'What you?', translated_line: 'dsfr fjur hyet' },
                            { line_id: 5, translator_id: 12, line: 'Are they?', translated_line: 'dfsr jrur dyet' },
                        ],
                        reviewing_lines: [
                            { line_id: 3, translator_id: 2, line: 'Who are you?', translated_line: 'dsfsr fjrur hdyet' },
                            { line_id: 4, translator_id: 122, line: 'What are you?', translated_line: 'dsfr fjur hyet' },
                            { line_id: 5, translator_id: 162, line: 'Who are they?', translated_line: 'dfsr jrur dyet' },
                        ],
                    }
                ],
            })
            server.db.loadData({
                customDatasets: [
                    {
                        dataset_id: 111,
                        dataset_name: 'dummy dataset 111',
                        user_id: 2234,
                        userName: 'Tarif Ezzaz',
                        total_lines: 0,
                        create_date: '22 February, 2024',
                        approval_status: 'Pending',
                        approval_date: '',
                        all_lines: [],
                    },
                    {
                        dataset_id: 112,
                        dataset_name: 'dummy dataset 112',
                        user_id: 2234,
                        userName: 'Tarif',
                        total_lines: 3,
                        create_date: '02 February, 2024',
                        approval_status: 'Approved',
                        approval_date: '05 February, 2024',
                        all_lines: [
                            { line_id: 3, line: 'Are you?', translated_line: 'dsfsr fjrur hdyet' },
                            { line_id: 4, line: 'What you?', translated_line: 'dsfr fjur hyet' },
                            { line_id: 5, line: 'Are they?', translated_line: 'dfsr jrur dyet' },
                        ],
                    }
                ],
            })
        },

        routes() {
            this.namespace = "api/v1"

            // Using the `timing` option to slow down the response
            this.get("/leaderboard/topTen", (schema, request) => {
                return schema.topTens.all()
            })
            // }, { timing: 4000 })

            this.get("/new_line", (schema, request) => {
                return schema.db.datasets[0]
            })

            this.post("/translated_line", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);
                // return { movie: attrs }
                // return schema.movies.create(attrs)
                // return schema.db.datasets[0]
                // return schema.db.datasets[0].reviewing_lines.insert(attrs)
                // server.db.datasets[0].insert({ title: "The Dark Knight" })

                let headers = {}
                let data = { success: ["Added for review"] }
                return new Response(201, headers, data)
            })

            this.post("/profile_edit", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                // let headers = {}
                // let data = { success: ["Profile info updated"] }
                // return new Response(201, headers, data)
                return schema.logins.all()
            })

            this.get("/custom_datasets/:user_id", (schema, request) => {
                let user_id = request.params.user_id
                // db.users.where({ name: 'Zelda' });
                // return {
                //     data: {
                //         id: movie.id,
                //         type: "movies",
                //         attributes: {
                //             title: movie.title,
                //         },
                //     },
                // }
                return schema.db.customDatasets.where({ user_id: user_id })

            })

            this.post("/create_dataset", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);
                // let headers = {}
                // let data = { success: ["New Dataset Created."] }
                // return new Response(201, headers, data)
                return schema.db.customDatasets.where({ user_id: attrs.user_id })
            })

            this.post("/dataset_file_input", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);
                // let headers = {}
                // let data = { success: ["New file input in Dataset successfully."] }
                // return new Response(201, headers, data)
                return schema.db.customDatasets.where({ user_id: attrs.user_id })
            })

            this.post("/dataset_line_input", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);
                let headers = {}
                let data = { success: ["New line input in Dataset successfully."] }
                return new Response(201, headers, data)
            })







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
