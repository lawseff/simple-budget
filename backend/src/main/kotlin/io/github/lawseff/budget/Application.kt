package io.github.lawseff.budget

import io.github.lawseff.budget.routes.reportRoutes
import io.ktor.server.application.Application
import io.ktor.server.plugins.swagger.swaggerUI
import io.ktor.server.routing.route
import io.ktor.server.routing.routing

private const val SWAGGER_FILE = "docs/openapi.yaml"

fun main(args: Array<String>) {
    io.ktor.server.jetty.jakarta.EngineMain.main(args)
}

fun Application.module() {
    routing {
        route(path = "/api") {
            reportRoutes()
        }
        swaggerUI(path = "/swagger", swaggerFile = SWAGGER_FILE)
    }
}