package io.github.lawseff.budget

import io.github.lawseff.budget.routes.categoryRoutes
import io.github.lawseff.budget.routes.reportRoutes
import io.ktor.serialization.jackson.jackson
import io.ktor.server.application.Application
import io.ktor.server.application.install
import io.ktor.server.http.content.react
import io.ktor.server.http.content.singlePageApplication
import io.ktor.server.plugins.contentnegotiation.ContentNegotiation
import io.ktor.server.plugins.swagger.swaggerUI
import io.ktor.server.routing.route
import io.ktor.server.routing.routing

private const val SWAGGER_FILE = "docs/openapi.yaml"
private const val FRONTEND_BUILD_DIRECTORY = "frontend/dist"

fun main(args: Array<String>) {
    io.ktor.server.jetty.jakarta.EngineMain.main(args)
}

fun Application.module() {
    installPlugins()
    registerRoutes()
}

private fun Application.registerRoutes() {
    routing {
        route(path = "/api") {
            reportRoutes()
            categoryRoutes()
        }
        swaggerUI(path = "/swagger", swaggerFile = SWAGGER_FILE)
        singlePageApplication {
            react(FRONTEND_BUILD_DIRECTORY)
        }
    }
}

private fun Application.installPlugins() {
    install(ContentNegotiation) {
        jackson()
    }
}