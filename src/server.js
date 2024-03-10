import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            // topTen: Model,
            login: Model,
        },

        seeds(server) {
            // server.create("topTen", {
            //     firstFive: [
            //         { name: 'fdgdr gdf', balance: 5345 },
            //         { name: 'fddr gdf', balance: 545 },
            //         { name: 'fdgr gdf', balance: 355 },
            //         { name: 'fdhgdr gdf', balance: 345 },
            //         { name: 'fdegr gdf', balance: 35 },
            //     ],
            //     nextFive: [
            //         { name: 'fdgdr gdf', balance: 5345 },
            //         { name: 'fddr gdf', balance: 545 },
            //         { name: 'fdgr gdf', balance: 355 },
            //         { name: 'fdhgdr gdf', balance: 345 },
            //         { name: 'fdegr gdf', balance: 35 },
            //     ]
            // })
            server.create("login", {
                token: "1|233764s455teu8",
                user_id: 2234,
                isLoggedIn: true,
                // user_type: 'translator',
                user_type: 'admin',
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
                    balance: 45,
                    total_balance: 395,
                    total_withdraw: 350,
                    for_approve: 45.34,
                    today_contribution: 5.78,
                    image_url: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png',
                },
                session_expiry: 0,
            })


            server.db.loadData({
                usersData: [
                    {
                        token: "1|233764s455teu8",
                        user_id: 2234,
                        isLoggedIn: true,
                        // user_type: 'translator',
                        user_type: 'admin',
                        profile: {
                            user_id: 2234,
                            userName: "Tarif Ezaz",
                            user_email: "tarif_ezaz@test.com",
                            user_password: "123456789",
                            user_phone: "+8801723456789",
                            join_date: "23 May, 2021",
                            birthday: "22 May, 1983",
                            address: "Bashundhara, Dhaka, Bangladesh",
                            total_working_days: 435,
                            leaderboard_place: 45,
                            balance: 45,
                            total_balance: 395,
                            total_withdraw: 350,
                            for_approve: 45.34,
                            today_contribution: 5.78,
                            image_url: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png',
                        },
                        session_expiry: 0,
                    },
                    {
                        token: "1|23373s4s455teu8",
                        user_id: 234,
                        isLoggedIn: true,
                        // user_type: 'translator',
                        user_type: 'admin',
                        profile: {
                            user_id: 234,
                            userName: "Avik Sarker",
                            user_email: "avik22@test.com",
                            user_password: "123456789",
                            user_phone: "+8801745687764",
                            join_date: "03 June, 2022",
                            birthday: "22 March, 1993",
                            address: "Badda, Dhaka, Bangladesh",
                            total_working_days: 45,
                            leaderboard_place: 49,
                            balance: 5,
                            total_balance: 195,
                            total_withdraw: 190,
                            for_approve: 5.4,
                            today_contribution: 1.78,
                            image_url: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png',
                        },
                        session_expiry: 0,
                    },
                    {
                        token: "1|23dd3764s455teu8",
                        user_id: 224,
                        isLoggedIn: true,
                        user_type: 'translator',
                        // user_type: 'admin',
                        profile: {
                            user_id: 224,
                            userName: "Shahid Alom",
                            user_email: "shahid@test.com",
                            user_password: "123456789",
                            user_phone: "+8801793763789",
                            join_date: "03 May, 2023",
                            birthday: "02 March, 1995",
                            address: "Mirpur, Dhaka, Bangladesh",
                            total_working_days: 35,
                            leaderboard_place: 55,
                            balance: 4,
                            total_balance: 395,
                            total_withdraw: 391,
                            for_approve: 4.34,
                            today_contribution: 7.78,
                            image_url: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png',
                        },
                        session_expiry: 0,
                    },
                ],
            })
            server.db.loadData({
                leaderboardData: {
                    topTen: {
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
                    },
                    fullLeaderboard: [
                        {
                            name: 'dummy1',
                            joining_date: '21 January, 2022',
                            total_working_days: 342,
                            total_balance: 3452,
                        },
                        {
                            name: 'dummy2',
                            joining_date: '22 January, 2022',
                            total_working_days: 341,
                            total_balance: 3451,
                        },
                        {
                            name: 'dummy3',
                            joining_date: '23 January, 2022',
                            total_working_days: 343,
                            total_balance: 3450,
                        },
                        {
                            name: 'dummy4',
                            joining_date: '24 January, 2022',
                            total_working_days: 344,
                            total_balance: 3445,
                        },
                        {
                            name: 'dummy5',
                            joining_date: '25 January, 2022',
                            total_working_days: 354,
                            total_balance: 3441,
                        },
                    ]
                }
            })
            server.db.loadData({
                datasets: [
                    {
                        dataset_id: 1,
                        dataset_name: 'dummy dataset 1',
                        total_lines: 78,
                        total_translated: 45,
                        for_review: 24,
                        upload_date: '25 June, 2002',
                        details: 'dummy, dummmy, dddddmmmuuuyy',
                        remarks: 'asda, dhjsdjj',
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
                        upload_date: '5 June, 2002',
                        details: 'dumy, dummy, dddddmmuuuyy',
                        remarks: 'ada, dhsdjj',
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
                        remarks: '',
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
                        remarks: 'fgsf gdf',
                        all_lines: [
                            { line_id: 3, line: 'Are you?', translated_line: 'dsfsr fjrur hdyet' },
                            { line_id: 4, line: 'What you?', translated_line: 'dsfr fjur hyet' },
                            { line_id: 5, line: 'Are they?', translated_line: 'dfsr jrur dyet' },
                        ],
                    }
                ],
            })
            server.db.loadData({
                withdraws: [
                    {
                        user_id: 2234,
                        withdraw_id: 533,
                        withdraw_date: '25 January, 2022',
                        prev_balance: 5233,
                        withdraw_amount: 233,
                        update_balance: 0,
                        withdraw_system: 'Bkash',
                        withdraw_info: '01758727366',
                        status: 'Pending',
                        remarks: 'okay',
                    },
                    {
                        user_id: 2234,
                        withdraw_id: 534,
                        withdraw_date: '26 January, 2022',
                        prev_balance: 523,
                        withdraw_amount: 33,
                        update_balance: 523,
                        withdraw_system: 'bank',
                        withdraw_info: 'Bank Asia - 23234017343458727366',
                        status: 'Rejected',
                        remarks: 'Fault input',
                    },
                    {
                        user_id: 2234,
                        withdraw_id: 543,
                        withdraw_date: '25 March, 2022',
                        prev_balance: 5323,
                        withdraw_amount: 533,
                        update_balance: 5856,
                        withdraw_system: 'Nagad',
                        withdraw_info: '01755723366',
                        status: 'Completed',
                        remarks: 'Problem was two times, but then.',
                    },
                    {
                        user_id: 234,
                        withdraw_id: 57342423343,
                        withdraw_date: '25 April, 2022',
                        prev_balance: 5232323,
                        withdraw_amount: 233,
                        update_balance: 0,
                        withdraw_system: 'Devit-card',
                        withdraw_info: '323dfdd501758727366',
                        status: 'Pending',
                        remarks: '',
                    },
                    {
                        user_id: 224,
                        withdraw_id: 593,
                        withdraw_date: '25 June, 2022',
                        prev_balance: 5233,
                        withdraw_amount: 23343433433,
                        update_balance: 5233,
                        withdraw_system: 'Credit-Card',
                        withdraw_info: 'adhadud, adasdis, 01758727366',
                        status: 'Rejected',
                        remarks: 'okay',
                    },
                ]
            })

        },

        routes() {
            this.namespace = "api/v1"

            this.post("/signup", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                // let authToken = request.re/questHeaders.Authorization
                console.log(attrs);
                // console.log(authToken);

                let headers = {}
                let data = { success: ["User SignUp Successfully."] }
                return new Response(201, headers, data)
                // db.users.insert({ name: 'Link', age: 173 });
            })

            this.post("/login", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                // let authToken = request.re/questHeaders.Authorization
                console.log(attrs);
                // console.log(authToken);

                // return schema.logins.find({user_email:attrs.user_email, user_password: attrs.user_password})
                return schema.logins.all()
                // return schema.db.usersData.findBy({ user_email: attrs.user_email })
            })

            this.post("/logout", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                let headers = {}
                let data = { success: ["Logout Successfully"] }
                return new Response(201, headers, data)

                // let id = request.params.id
                // return schema.movies.find(id).destroy()
                // db.users.remove({name: 'Zelda'});
            })


            // for admin dashboard
            // all authToken in admin route is admin's token for check
            this.post("/admin/all_user", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                return schema.db.usersData
            })

            this.post("/admin/single_user", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                return schema.db.usersData.findBy({ user_id: attrs.user_id })
            })

            this.post("/admin/user_withdraws", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                return schema.db.withdraws.where({ user_id: attrs.user_id })
            })

            this.post("/admin/user_delete", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                schema.db.usersData.remove({ user_id: attrs.user_id });
                // let id = request.params.id
                // schema.db.usersData.find(attrs.user_id).destroy()
                // schema.db.usersData.delete({user_id: attrs.user_id})

                // let headers = {}
                // let data = { success: ["User Delete Successfully"] }
                // return new Response(201, headers, data)

                return schema.db.usersData
            })

            this.post("/admin/all_dataset", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                return schema.db.datasets
            })
            
            this.post("/admin/dataset_delete", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);
                
                schema.db.datasets.remove({ dataset_id: attrs.dataset_id });
                // let id = request.params.id
                // schema.db.usersData.find(attrs.user_id).destroy()
                // schema.db.usersData.delete({user_id: attrs.user_id})
                
                // let headers = {}
                // let data = { success: ["User Delete Successfully"] }
                // return new Response(201, headers, data)
                
                return schema.db.datasets
            })

            this.post("/admin/all_custom_dataset", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                return schema.db.customDatasets
            })

            this.post("/admin/approve_custom_dataset", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                return schema.db.customDatasets
            })

            this.post("/admin/download_custom_dataset", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                return schema.db.customDatasets
            })

            this.post("/admin/reviewing_line", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                return schema.db.datasets[0]
            })

            this.post("/admin/approving_line", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                return schema.db.datasets[0]
            })

            this.post("/admin/rejecting_line", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                return schema.db.datasets[0]
            })


            // for user 
            // Using the `timing` option to slow down the response
            this.get("/leaderboard/topTen", (schema, request) => {
                // return schema.topTens.all()
                return schema.db.leaderboardData[0].topTen
            })
            // }, { timing: 4000 })

            this.get("/leaderboard/full", (schema, request) => {
                return schema.db.leaderboardData[0].fullLeaderboard
            })

            this.post("/new_line", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

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
                // db.users.update({name: 'Link'}, {name: 'Epona'});
            })

            this.post("/withdraws", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);

                // let user_id = request.params.user_id

                return schema.db.withdraws.where({ user_id: attrs.user_id })
            })

            this.post("/withdraw_request", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);
                // let headers = {}
                // let data = { success: ["New Dataset Created."] }
                // return new Response(201, headers, data)
                return schema.db.withdraws.where({ user_id: attrs.user_id })
            })

            this.post("/custom_datasets", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let authToken = request.requestHeaders.Authorization
                console.log(attrs);
                console.log(authToken);
                // let user_id = request.params.user_id

                return schema.db.customDatasets.where({ user_id: attrs.user_id })

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






            // demu
            // this.get("/profile/:id", (schema, request) => {
            //     let id = request.params.id

            //     return schema.movies.find(id)
            // })

            // Responding to a POST request
            // this.post("/movies", (schema, request) => {
            //     let attrs = JSON.parse(request.requestBody)
            //     // attrs.id = Math.floor(Math.random() * 100)

            //     // return { movie: attrs }
            //     return schema.movies.create(attrs)
            // })

            // this.patch("/movies/:id", (schema, request) => {
            //     let newAttrs = JSON.parse(request.requestBody)
            //     let id = request.params.id
            //     let movie = schema.movies.find(id)

            //     return movie.update(newAttrs)
            // })

            // Using the `Response` class to return a 500
            // this.delete("/movies/:id", (schema, request) => {
            //     // let headers = {}
            //     // let data = { errors: ["Server did not respond"] }
            //     // return new Response(500, headers, data)

            //     let id = request.params.id

            //     return schema.movies.find(id).destroy()
            // })
        },
    })

    return server
}
