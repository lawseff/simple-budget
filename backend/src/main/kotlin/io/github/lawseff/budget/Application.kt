package io.github.lawseff.budget

import io.ktor.server.application.Application
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing

fun main(args: Array<String>): Unit = io.ktor.server.jetty.jakarta.EngineMain.main(args)

fun Application.module() {
    routing {
        get("/") {
            call.respondText("Hello World")
        }
    }
}